"""Build static WebP copies so pages can skip Vercel image transformations.

Outputs:
  public/optimized/thumb/<original-path>.webp   (max edge 480)
  public/optimized/display/<original-path>.webp (max edge 1600)
  public/branding/favicon-32.png
  public/branding/apple-touch-icon.png
"""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
RASTER = {".jpg", ".jpeg", ".png"}
SKIP_DIR_NAMES = {"optimized", "新建文件夹"}


def variant_path(src: Path, variant: str) -> Path:
    relative = src.relative_to(PUBLIC).as_posix()
    stem = str(Path(relative).with_suffix(".webp")).replace("\\", "/")
    return PUBLIC / "optimized" / variant / stem


def save_webp(image: Image.Image, dest: Path, max_edge: int, quality: int) -> None:
    prepared = ImageOps.exif_transpose(image)
    if prepared.mode == "P":
        prepared = prepared.convert("RGBA" if "transparency" in prepared.info else "RGB")
    elif prepared.mode not in ("RGB", "RGBA"):
        prepared = prepared.convert("RGBA" if "A" in prepared.mode else "RGB")

    width, height = prepared.size
    scale = min(1.0, max_edge / max(width, height))
    if scale < 1:
        prepared = prepared.resize(
            (max(1, round(width * scale)), max(1, round(height * scale))),
            Image.Resampling.LANCZOS,
        )

    dest.parent.mkdir(parents=True, exist_ok=True)
    prepared.save(dest, "WEBP", quality=quality, method=4)


def write_icons(favicon: Path) -> None:
    image = ImageOps.exif_transpose(Image.open(favicon)).convert("RGBA")
    for size, name in ((32, "favicon-32.png"), (180, "apple-touch-icon.png")):
        icon = image.copy()
        icon.thumbnail((size, size), Image.Resampling.LANCZOS)
        canvas = Image.new("RGBA", (size, size), (255, 255, 255, 0))
        canvas.paste(icon, ((size - icon.width) // 2, (size - icon.height) // 2), icon)
        canvas.save(PUBLIC / "branding" / name, "PNG", optimize=True)


def main() -> int:
    sources = [
        path
        for path in PUBLIC.rglob("*")
        if path.is_file()
        and path.suffix.lower() in RASTER
        and not any(part in SKIP_DIR_NAMES for part in path.relative_to(PUBLIC).parts)
    ]
    before = sum(path.stat().st_size for path in sources)
    written = 0
    for index, src in enumerate(sources, start=1):
        save_webp(Image.open(src), variant_path(src, "thumb"), 480, 72)
        save_webp(Image.open(src), variant_path(src, "display"), 1600, 76)
        written += 2
        if index % 40 == 0 or index == len(sources):
            print(f"{index}/{len(sources)} {src.name}", flush=True)

    favicon = PUBLIC / "branding" / "site-favicon.png"
    if favicon.exists():
        write_icons(favicon)

    after = sum(path.stat().st_size for path in (PUBLIC / "optimized").rglob("*.webp"))
    print(f"sources={len(sources)} webp={written} source_mb={before / 1048576:.1f} optimized_mb={after / 1048576:.1f}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
