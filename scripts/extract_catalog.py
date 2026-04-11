import json
import re
from pathlib import Path
from typing import Dict, List, Optional, Tuple

import fitz
import numpy as np
from rapidocr_onnxruntime import RapidOCR

PDF_PATH = r"C:\Users\57328\Desktop\JYINS Product Catalog 2025.pdf"
OUT_PATH = Path(r"d:\网站项目组\ampprocure\lib\catalog-products.ts")

CATEGORY_RANGES = [
    (10, 21, "Modified Sine Wave Power Inverter", "modified-inverter"),
    (23, 34, "Pure Sine Wave Power Inverter", "pure-inverter"),
    (36, 43, "Uninterruptible Power Source", "ups"),
    (44, 51, "Uninterruptible Power Source", "ups"),
    (53, 58, "Battery Charger", "charger"),
    (60, 66, "Portable Power Station", "portable-station"),
    (68, 75, "Power Inverter Printed Circuit Board", "inverter-board"),
]

KEYWORD_EXCLUDES = {
    "http://www.jyinsinverter.com",
    "e-mail",
    "aboutus",
    "product catalogue",
}


def clean_spaces(text):
    return re.sub(r"\s+", " ", text).strip()


def normalize_title(raw, category):
    title = clean_spaces(raw)
    title = title.replace("600OW", "6000W").strip("-–_ ")
    lower = title.lower()

    if category == "Modified Sine Wave Power Inverter":
        return title if "modified" in lower else "%s Modified Sine Wave Power Inverter" % title
    if category == "Pure Sine Wave Power Inverter":
        return title if "pure" in lower else "%s Pure Sine Wave Power Inverter" % title
    if category == "Uninterruptible Power Source":
        return title if "uninterruptible" in lower else "%s Uninterruptible Power Source" % title
    if category == "Battery Charger":
        return title if "charger" in lower else "%s Battery Charger" % title
    if category == "Portable Power Station":
        return title if "portable" in lower else "%s Portable Power Station" % title
    if category == "Power Inverter Printed Circuit Board":
        return title if "board" in lower else "%s Inverter Printed Circuit Board" % title
    return title


def find_between(text, start_pattern, end_pattern):
    match = re.search(start_pattern + r"\s*(.+?)\s*(?=" + end_pattern + r")", text, flags=re.I)
    return clean_spaces(match.group(1)) if match else ""


def extract_models(text):
    models = set()
    line = find_between(
        text,
        r"(?:Model|Type)",
        r"(?:Rated\s*Power|Output\s*Power|Peak\s*Power|Input\s*Voltage|DC\s*Input|Battery\s*Capacity|Full\s*Charge|USB\s*Output|AC\s*Output|Weight|Dimension|ServiceLife|Guarantee|$)",
    )
    for token in re.split(r"[,/ ]+", line):
        t = token.strip()
        if len(t) < 3:
            continue
        if re.search(r"\d", t) and re.search(r"[A-Z]", t):
            models.add(t)

    loose = re.findall(r"\b(?:[A-Z]{1,4}[A-Z0-9-]*-\d+[A-Z0-9-]*|[A-Z]{1,5}-?[A-Z0-9]*\d{2,}[A-Z0-9-]*)\b", text)
    for t in loose:
        if len(t) >= 4:
            models.add(t)

    return sorted(models)[:12]


def extract_highlights(text):
    fields = [
        ("Rated Power", r"Rated\s*Power", r"(?:Peak\s*Power|DC\s*Input|Input\s*Voltage|Output\s*Power|$)"),
        ("Output Power", r"Output\s*Power", r"(?:Peak\s*Power|DC\s*Input|Input\s*Voltage|$)"),
        ("Peak Power", r"Peak\s*Power", r"(?:DC\s*Input|Input\s*Voltage|AC\s*Output|Unload\s*Current|$)"),
        ("Input Voltage", r"(?:DC\s*Input\s*Voltage\s*Range|Input\s*Voltage\s*Range|Input\s*Voltage)", r"(?:AC\s*Output|Output\s*Voltage|Unload\s*Current|Output\s*Frequency|$)"),
        ("Output Voltage", r"(?:AC\s*Output\s*Voltage\s*\(?.*?\)?|Output\s*Voltage)", r"(?:Unload\s*Current|Output\s*Frequency|Output\s*Waveform|$)"),
        ("Output Frequency", r"Output\s*Frequency", r"(?:Output\s*Waveform|Display|USB\s*Output|Max\.?\s*Output\s*Efficiency|$)"),
        ("Output Waveform", r"Output\s*Waveform", r"(?:Display|USB\s*Output|Max\.?\s*Output\s*Efficiency|Input\s*Current|$)"),
        ("USB Output", r"USB\s*Output(?:\s*Votlage/\s*Current|\s*Voltage/\s*Current|\s*Port)?", r"(?:Max\.?\s*Output\s*Efficiency|Input\s*Current|Low\s*Voltage|Over\s*Voltage|$)"),
        ("Efficiency", r"(?:Max\.?\s*Output\s*Efficiency|Max\.?\s*Efficiency)", r"(?:Input\s*Current|Low\s*Voltage|Over\s*Voltage|Overload|$)"),
        ("Battery Capacity", r"Battery\s*Capacity", r"(?:Full\s*Charge|USB\s*Output|DC\s*Output|AC\s*Output|Weight|$)"),
        ("Full Charge", r"Full\s*Charge", r"(?:USB\s*Output|DC\s*Output|AC\s*Output|Weight|$)"),
        ("Weight", r"Weight", r"(?:Dimension|ServiceLife|Operating\s*Temperature|Guarantee|$)"),
        ("Dimension", r"Dimension", r"(?:ServiceLife|Operating\s*Temperature|Guarantee|$)"),
        ("Service Life", r"ServiceLife", r"(?:Operating\s*Temperature|Charging\s*Temperature|Guarantee|$)"),
        ("Guarantee", r"Guarantee", r"(?:$)"),
    ]

    highlights = []
    seen = set()
    for label, start, end in fields:
        value = find_between(text, start, end)
        value = value.replace("%06", "90%").replace("%96", "96%")
        value = clean_spaces(value)
        if not value:
            continue
        key = (label, value)
        if key in seen:
            continue
        seen.add(key)
        highlights.append({"label": label, "value": value[:220]})
    return highlights[:10]


def make_slug(text):
    s = text.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s[:80] if s else "product"


def category_for_page(page_num):
    for start, end, category, code in CATEGORY_RANGES:
        if start <= page_num <= end:
            return category, code
    return None, None


def first_valid_line(lines):
    for line in lines:
        l = clean_spaces(line)
        if not l:
            continue
        ll = l.lower()
        if any(k in ll for k in KEYWORD_EXCLUDES):
            continue
        if re.fullmatch(r"\d+", l):
            continue
        return l
    return lines[0] if lines else "Product"


def main():
    doc = fitz.open(PDF_PATH)
    ocr = RapidOCR()
    products = []

    for idx in range(doc.page_count):
        page_num = idx + 1
        category, code = category_for_page(page_num)
        if not category:
            continue

        page = doc[idx]
        pix = page.get_pixmap(matrix=fitz.Matrix(1.8, 1.8), alpha=False)
        img = np.frombuffer(pix.samples, dtype=np.uint8).reshape(pix.height, pix.width, pix.n)
        result, _ = ocr(img)
        if not result:
            continue

        lines = [clean_spaces(item[1]) for item in result if clean_spaces(item[1])]
        text = clean_spaces(" ".join(lines))
        if len(text) < 80:
            continue

        title = normalize_title(first_valid_line(lines), category)
        highlights = extract_highlights(text)
        models = extract_models(text)

        products.append(
            {
                "id": "%s-%s" % (code, page_num),
                "slug": make_slug("%s-%s" % (title, page_num)),
                "name": title,
                "category": category,
                "categoryCode": code,
                "catalogPage": page_num,
                "models": models,
                "highlights": highlights,
                "technicalSummary": text[:1800],
            }
        )

    category_order = []
    seen = set()
    for p in products:
        if p["category"] in seen:
            continue
        seen.add(p["category"])
        category_order.append(p["category"])

    ts_lines = []
    ts_lines.append("export type CatalogHighlight = {")
    ts_lines.append("  label: string")
    ts_lines.append("  value: string")
    ts_lines.append("}")
    ts_lines.append("")
    ts_lines.append("export type CatalogProduct = {")
    ts_lines.append("  id: string")
    ts_lines.append("  slug: string")
    ts_lines.append("  name: string")
    ts_lines.append("  category: string")
    ts_lines.append("  categoryCode: string")
    ts_lines.append("  catalogPage: number")
    ts_lines.append("  models: readonly string[]")
    ts_lines.append("  highlights: readonly CatalogHighlight[]")
    ts_lines.append("  technicalSummary: string")
    ts_lines.append("}")
    ts_lines.append("")
    ts_lines.append("export const CATALOG_PRODUCTS = " + json.dumps(products, ensure_ascii=True, indent=2) + " as const satisfies readonly CatalogProduct[]")
    ts_lines.append("")
    ts_lines.append("export const CATALOG_CATEGORIES = " + json.dumps(category_order, ensure_ascii=True, indent=2) + " as const")
    ts_lines.append("")
    ts_lines.append("export const CATALOG_PRODUCT_COUNT = CATALOG_PRODUCTS.length")

    OUT_PATH.write_text("\n".join(ts_lines), encoding="utf-8")
    print("Generated %s with %s products" % (OUT_PATH, len(products)))


if __name__ == "__main__":
    main()
