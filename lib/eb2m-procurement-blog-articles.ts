// Public article content and metadata for the November 22 EB2M guides.
export const EB2M_PROCUREMENT_ARTICLES = [
  {
    post: {
      slug: "22mm-double-push-button-symbol-marked-flush-guide",
      title: "22mm Double Push Buttons and /FH Marked Flush Buttons: Head-Style Identification and Legend Verification",
      description: "A catalog-based engineering reference for distinguishing EB2M-A and EB2M-B flat, extended, and oval double push buttons from /FH symbol-marked flush models, auditing group-specific legend codes (R, R1–R7, and 1–12), and verifying buyer artwork before order placement.",
      tags: ["22mm push button switch", "double push button legends", "EB2M /FH push button symbols", "flat extended oval double push button", "control panel BOM"],
      image: "/optimized/display/images/blog/eb2m-double-symbol-push-button-hero.webp",
      imageAlt: "Cropped catalog photos comparing Type A 22mm flat, extended, and oval double push button head groups alongside the /FH yellow-head flush sample",
      imageFit: "contain",
      publishedAt: "Nov 22, 2026",
      readingMinutes: 7,
    },
    detail: {
      title: "22mm Double Push Buttons and /FH Marked Flush Buttons: Head-Style Identification and Legend Verification",
      metaTitle: "22mm Double Push Button & /FH Legend Guide",
      description: "Identify 22mm flat, extended, and oval double push buttons and /FH symbols 1–12. Check catalog legend groups, orientations, and artwork sign-off.",
      author: "UPprocure Engineering Team",
      wordCount: 3918,
      heroCaption: "Cropped supplier catalog photographs of the three Type A double push button head groups (PDF p.67) alongside the Type A /FH yellow-head flush sample photo (PDF p.66). Catalog photo excerpt for head-group visual reference only; does not confirm complete orderable combinations, final physical legend orientation, or illuminated output.",
      ogImage: {
        src: "/optimized/display/images/blog/eb2m-double-symbol-push-button-og.webp",
        alt: "Cropped catalog photos of Type A 22mm flat, extended, and oval double push button head groups and the /FH yellow-head sample for head and legend verification",
      },
      articleHtml: `<div class="prose-custom">
<p class="mb-4 text-sm leading-7 text-gray-600">When specifying EB2M-A and EB2M-B 22mm operators on a control panel bill of materials, treating double push buttons and <code class="[overflow-wrap:anywhere]">/FH</code> symbol-marked flush buttons as interchangeable creates a risk of mismatched head styles, wrong legend codes, or inverted actuator markings. Across the supplier catalog sections for these two series (PDF p.64–71, printed p.6–13), three double push button head groups sit alongside four <code class="[overflow-wrap:anywhere]">/FH</code> marked flush model rows, each governed by distinct printed legend scopes, differing sample-photo orientations, and unexpanded multi-option ordering boundaries that require verification before order placement.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">This guide focuses strictly on head-style recognition, catalog legend grouping (<code class="[overflow-wrap:anywhere]">R</code>, <code class="[overflow-wrap:anywhere]">R1–R7</code>, and <code class="[overflow-wrap:anywhere]">/FH</code> symbols <code class="[overflow-wrap:anywhere]">1–12</code>), sample-photo discrepancy checks, and an executable buyer artwork verification workflow. For broader switch-family selection, see our <a class="text-green-700 underline hover:text-green-900" href="/blog/how-to-choose-22mm-push-button-switch">22mm push button switch selection guide</a>; for installation and wiring verification, see the <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-push-button-switch-wiring-installation-guide">22mm push button wiring and installation guide</a>; and for lamp-voltage or indicator color guidance, see the <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-illuminated-push-button-voltage-color-guide">22mm illuminated push button voltage and color guide</a>.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Separating Double Push Button Heads from <code class="[overflow-wrap:anywhere]">/FH</code> Symbol-Marked Flush Models</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Before assigning legend codes on a BOM line, buyers should separate two structurally distinct operator entries in the EB2M catalog: dual-actuator double push buttons (<code class="[overflow-wrap:anywhere]">-11PRG</code>/<code class="[overflow-wrap:anywhere]">-11PDRG</code>, <code class="[overflow-wrap:anywhere]">-11HRG</code>/<code class="[overflow-wrap:anywhere]">-11HDRG</code>, <code class="[overflow-wrap:anywhere]">-11RG</code>/<code class="[overflow-wrap:anywhere]">-11DRG</code>) and single-actuator <code class="[overflow-wrap:anywhere]">/FH</code> symbol-marked flush models (<code class="[overflow-wrap:anywhere]">-10/FH○</code>, <code class="[overflow-wrap:anywhere]">-10T/FH○</code>, <code class="[overflow-wrap:anywhere]">-10D/FH○</code>, <code class="[overflow-wrap:anywhere]">-10DT/FH○</code>). Mixing their legend tables introduces a risk of invalid or mismatched marking specifications.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Nominal Catalog Meanings and Engineering Verification Boundaries</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">The EB2M-A and EB2M-B catalog field key (PDF p.65, p.69) and model tables (PDF p.66–67, p.70–71) define explicit nominal code meanings across both families:</p>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Fields 1 and 2 (nominal NO/NC contacts, PDF p.65, p.69):</strong> <code class="[overflow-wrap:anywhere]">-11</code> denotes nominal <code class="[overflow-wrap:anywhere]">1NO1NC</code> on the double push button rows, while <code class="[overflow-wrap:anywhere]">-10</code> denotes nominal <code class="[overflow-wrap:anywhere]">1NO</code> on the <code class="[overflow-wrap:anywhere]">/FH</code> flush rows.</li>
<li><strong class="font-semibold text-gray-800">Field 3 (illumination and action codes, PDF p.65, p.69):</strong> <code class="[overflow-wrap:anywhere]">D</code> denotes illuminated, <code class="[overflow-wrap:anywhere]">T</code> denotes maintained, and <code class="[overflow-wrap:anywhere]">TD</code> denotes illuminated maintained.</li>
<li><strong class="font-semibold text-gray-800">Four <code class="[overflow-wrap:anywhere]">/FH</code> flush model rows (PDF p.66, p.70):</strong> Printed in sequence as <code class="[overflow-wrap:anywhere]">-10/FH○</code> (momentary), <code class="[overflow-wrap:anywhere]">-10T/FH○</code> (maintained), <code class="[overflow-wrap:anywhere]">-10D/FH○</code> (illuminated momentary), and <code class="[overflow-wrap:anywhere]">-10DT/FH○</code> (illuminated maintained).</li>
<li><strong class="font-semibold text-gray-800">Six double push button model rows (PDF p.67, p.71):</strong> All six printed suffixes across flat (<code class="[overflow-wrap:anywhere]">-11PRG</code>, <code class="[overflow-wrap:anywhere]">-11PDRG</code>), extended (<code class="[overflow-wrap:anywhere]">-11HRG</code>, <code class="[overflow-wrap:anywhere]">-11HDRG</code>), and oval (<code class="[overflow-wrap:anywhere]">-11RG</code>, <code class="[overflow-wrap:anywhere]">-11DRG</code>) head groups are marked momentary.</li>
</ul>
<p class="mb-4 text-sm leading-7 text-gray-600">Recognizing these nominal catalog meanings helps match each BOM line to the right catalog group, subject to two strict limits:</p>
<ol class="my-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Do not splice placeholders into orderable part numbers:</strong> The circle (<code class="[overflow-wrap:anywhere]">○</code>) in <code class="[overflow-wrap:anywhere]">-10/FH○</code>, <code class="[overflow-wrap:anywhere]">-10T/FH○</code>, <code class="[overflow-wrap:anywhere]">-10D/FH○</code>, and <code class="[overflow-wrap:anywhere]">-10DT/FH○</code> is a catalog placeholder only. It must not be spliced with symbol, color, or voltage characters to fabricate a complete orderable part string.</li>
<li><strong class="font-semibold text-gray-800">Verify actual electrical and safety details separately:</strong> Nominal catalog codes and printed legends (<code class="[overflow-wrap:anywhere]">I/O</code>, <code class="[overflow-wrap:anywhere]">START/STOP</code>, arrows) do <strong class="font-semibold text-gray-800">not</strong> establish actual terminal mapping, internal wiring, lamp-circuit topology, or safety functions. Actual terminal assignments, wiring, lamp circuits, and safety functions must be verified separately by exact ordered model and controlled supplier documentation.</li>
</ol>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Identifying the Three EB2M Double Push Button Head Groups</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Within both the Type A (<code class="[overflow-wrap:anywhere]">EB2M-A</code>, PDF p.67) and Type B (<code class="[overflow-wrap:anywhere]">EB2M-B</code>, PDF p.71) sections, double push buttons are grouped into three distinct head styles: flat, extended, and oval. Checking each printed suffix helps prevent head-profile mix-ups during quotation review and artwork sign-off.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Flat (<code class="[overflow-wrap:anywhere]">-11PRG</code> / <code class="[overflow-wrap:anywhere]">-11PDRG</code>), Extended (<code class="[overflow-wrap:anywhere]">-11HRG</code> / <code class="[overflow-wrap:anywhere]">-11HDRG</code>), and Oval (<code class="[overflow-wrap:anywhere]">-11RG</code> / <code class="[overflow-wrap:anywhere]">-11DRG</code>)</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Note a suffix detail across these three rows: the flat double push button group uses <code class="[overflow-wrap:anywhere]">P</code> (<code class="[overflow-wrap:anywhere]">-11PRG</code> and <code class="[overflow-wrap:anywhere]">-11PDRG</code>), which appears in the model tables on PDF p.67 and p.71 but is <strong class="font-semibold text-gray-800">not</strong> defined in the general letter key on PDF p.65 or p.69. The extended double group uses <code class="[overflow-wrap:anywhere]">H</code> (<code class="[overflow-wrap:anywhere]">-11HRG</code> and <code class="[overflow-wrap:anywhere]">-11HDRG</code>), while the oval double group omits both <code class="[overflow-wrap:anywhere]">P</code> and <code class="[overflow-wrap:anywhere]">H</code> (<code class="[overflow-wrap:anywhere]">-11RG</code> and <code class="[overflow-wrap:anywhere]">-11DRG</code>).</p>
<p class="mb-4 text-sm leading-7 text-gray-600">The table below consolidates the catalog-printed suffixes, nominal catalog meanings, group-specific legend print scopes, and verification boundaries from the supplier catalog (PDF p.65–67, p.69–71).</p>
<div aria-label="Flat (-11PRG / -11PDRG), Extended (-11HRG / -11HDRG), and Oval (-11RG / -11DRG) table" class="mb-5 max-w-full overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-green-700" role="region" tabindex="0"><table class="w-full border-collapse text-left text-sm text-gray-600">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Operator Group</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Catalog-Printed Suffix or Fragment (EB2M-A &amp; EB2M-B)</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Nominal Catalog Meaning (PDF p.65–67, p.69–71)</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Printed Legend Scope Beside Group</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Supplier Catalog Source &amp; Verification Boundary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Flat double push button</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">-11PRG</code>, <code class="[overflow-wrap:anywhere]">-11PDRG</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Momentary; <code class="[overflow-wrap:anywhere]">-11</code> nominal <code class="[overflow-wrap:anywhere]">1NO1NC</code>; <code class="[overflow-wrap:anywhere]">D</code> illuminated</td>
<td class="border border-gray-200 px-3 py-2 align-top">Only <code class="[overflow-wrap:anywhere]">R1</code>, <code class="[overflow-wrap:anywhere]">R5</code> printed beside flat group</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.67 right column (A), p.69, p.71 right column (B); <code class="[overflow-wrap:anywhere]">P</code> not listed in p.65/p.69 letter key; actual terminal map, wiring, lamp circuit, safety function, and multi-option orderability require controlled documents and supplier sign-off</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Extended double push button</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">-11HRG</code>, <code class="[overflow-wrap:anywhere]">-11HDRG</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Momentary; <code class="[overflow-wrap:anywhere]">-11</code> nominal <code class="[overflow-wrap:anywhere]">1NO1NC</code>; <code class="[overflow-wrap:anywhere]">D</code> illuminated</td>
<td class="border border-gray-200 px-3 py-2 align-top">Only <code class="[overflow-wrap:anywhere]">R1</code>, <code class="[overflow-wrap:anywhere]">R5</code> printed beside extended group</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.67 right column (A), p.69, p.71 right column (B); actual terminal map, wiring, lamp circuit, safety function, and multi-option orderability require controlled documents and supplier sign-off</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Oval double push button</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">-11RG</code>, <code class="[overflow-wrap:anywhere]">-11DRG</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Momentary; <code class="[overflow-wrap:anywhere]">-11</code> nominal <code class="[overflow-wrap:anywhere]">1NO1NC</code>; <code class="[overflow-wrap:anywhere]">D</code> illuminated</td>
<td class="border border-gray-200 px-3 py-2 align-top">Two columns: <code class="[overflow-wrap:anywhere]">R–R3</code> (green/red) and <code class="[overflow-wrap:anywhere]">R4–R7</code> (light gray/black)</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.67 right column (A), p.69, p.71 right column (B); actual terminal map, wiring, lamp circuit, safety function, and multi-option orderability require controlled documents and supplier sign-off</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">/FH</code> symbol-marked flush push button</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">-10/FH○</code>, <code class="[overflow-wrap:anywhere]">-10T/FH○</code>, <code class="[overflow-wrap:anywhere]">-10D/FH○</code>, <code class="[overflow-wrap:anywhere]">-10DT/FH○</code> (catalog fragments with <code class="[overflow-wrap:anywhere]">○</code> placeholder)</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">-10</code> nominal <code class="[overflow-wrap:anywhere]">1NO</code>; in order: momentary, maintained (<code class="[overflow-wrap:anywhere]">T</code>), illuminated momentary (<code class="[overflow-wrap:anywhere]">D</code>), illuminated maintained (<code class="[overflow-wrap:anywhere]">DT</code>; <code class="[overflow-wrap:anywhere]">TD</code> in Field 3 key)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Symbols <code class="[overflow-wrap:anywhere]">1–12</code>; <code class="[overflow-wrap:anywhere]">(Customizable)</code> noted independently</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.66 left-middle (A), p.69, p.70 left-middle (B); do not splice <code class="[overflow-wrap:anywhere]">○</code> into an orderable string; no standalone outline drawing in PDF p.66/p.70; verify outline/installation dimensions and electrical details via signed order-level documents</td>
</tr>
</tbody>
</table></div>
<figure class="my-6"><img alt="Catalog side-view profile comparison diagram of Type A EB2M flat (-11PRG), extended (-11HRG), and oval (-11RG) 22mm double push button heads" class="rounded-xl border border-gray-100" decoding="async" height="900" loading="lazy" src="/optimized/display/images/blog/eb2m-double-button-head-profiles-comparison-v2.webp" width="1200"/><figcaption class="mt-2 text-sm leading-6 text-gray-600">Side-view profile comparison of Type A <code class="[overflow-wrap:anywhere]">-11PRG</code> (flat), <code class="[overflow-wrap:anywhere]">-11HRG</code> (extended), and <code class="[overflow-wrap:anywhere]">-11RG</code> (oval) double push button heads based on supplier catalog PDF p.67. Illustrative catalog profile diagram only (not a product photograph); verify all installation dimensions against the supplier-signed drawing for the exact ordered model.</figcaption></figure>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Reading Catalog Sample Photos Without Mixing Head Groups or Orientations</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Treating an embedded catalog photograph as a binding specification for actuator shape, center lens appearance, or marking orientation introduces ambiguity. Across supplier catalog PDF p.64, p.67, and p.71, four concrete visual discrepancies appear between sample photographs and model tables:</p>
<ol class="my-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Rectangular vs. oval actuator mismatch:</strong> The chapter cover photograph on PDF p.64 showing a red <code class="[overflow-wrap:anywhere]">O</code> actuator and a green <code class="[overflow-wrap:anywhere]">I</code> actuator depicts a <strong class="font-semibold text-gray-800">rectangular</strong> head—not an oval double push button. Combining that photo's markings with the oval model row creates an unsupported composite description.</li>
<li><strong class="font-semibold text-gray-800">Oval sample photos are unmarked with amber/orange centers:</strong> On PDF p.67 and p.71, the sample photographs placed next to the oval double push button rows (<code class="[overflow-wrap:anywhere]">-11RG</code>/<code class="[overflow-wrap:anywhere]">-11DRG</code>) show <strong class="font-semibold text-gray-800">blank</strong> end actuators (no printed characters) with an amber/orange center section—not a clear window flanked by printed <code class="[overflow-wrap:anywhere]">O</code> and <code class="[overflow-wrap:anywhere]">I</code> legends.</li>
<li><strong class="font-semibold text-gray-800">Orientation differs between Type A and Type B oval photos:</strong> The oval sample photographs on PDF p.67 (Type A) and PDF p.71 (Type B) do not share the same orientation.</li>
<li><strong class="font-semibold text-gray-800">Opposite <code class="[overflow-wrap:anywhere]">I/O</code> vertical orientation on flat and extended photos:</strong> On PDF p.67 and p.71, the <code class="[overflow-wrap:anywhere]">I/O</code> sample photographs beside the flat and extended double push button rows show opposite top-to-bottom orientations.</li>
</ol>
<p class="mb-4 text-sm leading-7 text-gray-600">Because of these documented differences, sample photos serve only as group-adjacent visual references. They do not confirm final shipped legend orientation, center lens optical state, or functional meaning of actuator colors.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Auditing Legend Groups (<code class="[overflow-wrap:anywhere]">R</code>, <code class="[overflow-wrap:anywhere]">R1–R7</code>) and <code class="[overflow-wrap:anywhere]">/FH</code> Flush Symbols (<code class="[overflow-wrap:anywhere]">1–12</code>)</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Reliable legend specification requires mapping each code strictly to the catalog group beside which it is printed and documenting every visual detail left unconfirmed by the catalog.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Group-Specific Legend Scope and Two-Column Oval Grouping (<code class="[overflow-wrap:anywhere]">R–R3</code> vs. <code class="[overflow-wrap:anywhere]">R4–R7</code>)</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">In supplier catalog PDF p.67 and p.71, the double push button legend codes are <strong class="font-semibold text-gray-800">not</strong> printed uniformly across all three head styles:</p>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li>Beside the <strong class="font-semibold text-gray-800">flat</strong> (<code class="[overflow-wrap:anywhere]">-11PRG</code>/<code class="[overflow-wrap:anywhere]">-11PDRG</code>) and <strong class="font-semibold text-gray-800">extended</strong> (<code class="[overflow-wrap:anywhere]">-11HRG</code>/<code class="[overflow-wrap:anywhere]">-11HDRG</code>) groups, the catalog lists <strong class="font-semibold text-gray-800">only <code class="[overflow-wrap:anywhere]">R1</code> and <code class="[overflow-wrap:anywhere]">R5</code></strong>.</li>
<li>Beside the <strong class="font-semibold text-gray-800">oval</strong> (<code class="[overflow-wrap:anywhere]">-11RG</code>/<code class="[overflow-wrap:anywhere]">-11DRG</code>) group, the catalog presents <strong class="font-semibold text-gray-800">two side-by-side columns</strong>: <code class="[overflow-wrap:anywhere]">R–R3</code> in the <strong class="font-semibold text-gray-800">green/red</strong> color group and <code class="[overflow-wrap:anywhere]">R4–R7</code> in the <strong class="font-semibold text-gray-800">light gray/black</strong> color group.</li>
</ul>
<div aria-label="Group-Specific Legend Scope and Two-Column Oval Grouping (R–R3 vs. R4–R7) table" class="mb-5 max-w-full overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-green-700" role="region" tabindex="0"><table class="w-full border-collapse text-left text-sm text-gray-600">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Green/Red Column (<code class="[overflow-wrap:anywhere]">R–R3</code>)</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Light Gray/Black Column (<code class="[overflow-wrap:anywhere]">R4–R7</code>)</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Printed Catalog Legend</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Head-Group Print Scope</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Supplier Catalog Source &amp; Verification Boundary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">R</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">R4</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Blank (no characters)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Printed beside oval group (<code class="[overflow-wrap:anywhere]">-11RG</code>/<code class="[overflow-wrap:anywhere]">-11DRG</code>) only</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.67 right column, p.71 right column; legend code <code class="[overflow-wrap:anywhere]">R</code> is distinct from Field-4 color code <code class="[overflow-wrap:anywhere]">R</code> (Red, PDF p.65/p.69); do not infer electrical function or orderable combinations from colors; flat/extended availability unknown pending sign-off</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">R1</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">R5</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">I/O</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Printed beside flat, extended, and oval groups</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.67 right column, p.71 right column; exact top-to-bottom orientation and typography unknown pending signed artwork</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">R2</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">R6</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">ON/OFF</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Printed beside oval group (<code class="[overflow-wrap:anywhere]">-11RG</code>/<code class="[overflow-wrap:anywhere]">-11DRG</code>) only</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.67 right column, p.71 right column; flat/extended availability and exact orientation unknown pending sign-off</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">R3</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">R7</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">START/STOP</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Printed beside oval group (<code class="[overflow-wrap:anywhere]">-11RG</code>/<code class="[overflow-wrap:anywhere]">-11DRG</code>) only</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.67 right column, p.71 right column; <code class="[overflow-wrap:anywhere]">START/STOP</code> is printed catalog legend wording only and does not denote a safety or emergency-stop function; flat/extended availability unknown pending sign-off</td>
</tr>
</tbody>
</table></div>
<p class="mb-4 text-sm leading-7 text-gray-600">Three mandatory safeguards apply when transferring these codes to an engineering BOM:</p>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Separate <code class="[overflow-wrap:anywhere]">R</code> legend codes, Field-4 color code <code class="[overflow-wrap:anywhere]">R</code>, and <code class="[overflow-wrap:anywhere]">/FH</code> symbols:</strong> On PDF p.65 and p.69, <code class="[overflow-wrap:anywhere]">R</code> in Field 4 represents the color Red (<code class="[overflow-wrap:anywhere]">R, G, Y, B, W, K</code>). On PDF p.67 and p.71, <code class="[overflow-wrap:anywhere]">R</code> in the oval legend block identifies the unmarked green/red legend variant paired with <code class="[overflow-wrap:anywhere]">R4</code>. Both are completely separate from the numbered <code class="[overflow-wrap:anywhere]">/FH</code> flush symbols (<code class="[overflow-wrap:anywhere]">1–12</code>). Keep dedicated BOM columns for <strong class="font-semibold text-gray-800">Actuator Color Requirement</strong>, <strong class="font-semibold text-gray-800">Double-Button Legend Code</strong>, and <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">/FH</code> Symbol Code</strong>.</li>
<li><strong class="font-semibold text-gray-800">Do not infer electrical functions, printing processes, or orderability from colors:</strong> Grouping <code class="[overflow-wrap:anywhere]">R–R3</code> (green/red) and <code class="[overflow-wrap:anywhere]">R4–R7</code> (light gray/black) describes the catalog legend layout only—never infer contact assignment, circuit behavior, printing method, or confirmed multi-option orderability from actuator colors.</li>
<li><strong class="font-semibold text-gray-800">Treat <code class="[overflow-wrap:anywhere]">START/STOP</code> strictly as printed legend text:</strong> Codes <code class="[overflow-wrap:anywhere]">R3</code> and <code class="[overflow-wrap:anywhere]">R7</code> represent catalog legend text only and confer no electrical or safety capability. Any emergency-stop or machine-safety circuit must be designed and validated by a qualified engineer under applicable machinery safety standards (see our <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-emergency-stop-button-twist-release-guide">22mm emergency stop button guide</a>).</li>
</ul>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Exact <code class="[overflow-wrap:anywhere]">/FH</code> Flush Symbol Table (<code class="[overflow-wrap:anywhere]">1–12</code>) and Independent <code class="[overflow-wrap:anywhere]">(Customizable)</code> Annotation</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Separately from the double push button <code class="[overflow-wrap:anywhere]">R</code> legend block and Field-4 color codes, supplier catalog PDF p.65, p.66, p.69, and p.70 enumerate 12 numbered symbols for single-actuator <code class="[overflow-wrap:anywhere]">/FH</code> flush push buttons (<code class="[overflow-wrap:anywhere]">-10/FH○</code>, <code class="[overflow-wrap:anywhere]">-10T/FH○</code>, <code class="[overflow-wrap:anywhere]">-10D/FH○</code>, <code class="[overflow-wrap:anywhere]">-10DT/FH○</code>). Pay close attention to codes <code class="[overflow-wrap:anywhere]">3</code> and <code class="[overflow-wrap:anywhere]">4</code>, which share an upward arrow direction but invert foreground and background contrast.</p>
<div aria-label="Exact /FH Flush Symbol Table (1–12) and Independent (Customizable) Annotation table" class="mb-5 max-w-full overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-green-700" role="region" tabindex="0"><table class="w-full border-collapse text-left text-sm text-gray-600">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col"><code class="[overflow-wrap:anywhere]">/FH</code> Symbol Code</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Printed Symbol / Text in Catalog</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Critical Visual Distinction</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Supplier Catalog Source &amp; Verification Boundary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">1</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">I</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Single vertical bar symbol</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.66, p.69, p.70; exact glyph proportion and rotation unknown pending signed artwork</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">2</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">O</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Closed circle symbol</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.66, p.69, p.70; exact glyph proportion unknown pending signed artwork</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">3</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Black up-arrow on white background</td>
<td class="border border-gray-200 px-3 py-2 align-top">Dark arrow on light field</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.66, p.69, p.70; contrast polarity and final panel direction must be locked in artwork sign-off</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">4</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">White up-arrow on black background</td>
<td class="border border-gray-200 px-3 py-2 align-top">Light arrow on dark field (inverse of code <code class="[overflow-wrap:anywhere]">3</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.66, p.69, p.70; contrast polarity and final panel direction must be locked in artwork sign-off</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">5</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">II</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Dual-bar symbol</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.66, p.69, p.70; reading orientation unknown pending signed artwork</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">6</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">III</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Triple-bar symbol</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.66, p.69, p.70; reading orientation unknown pending signed artwork</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">7</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">START</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">English text legend</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.66, p.69, p.70; printed text legend only, does not define electrical or safety function</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">8</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">STOP</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">English text legend</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.66, p.69, p.70; printed text legend only, does not define electrical or emergency-stop function</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">9</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">ON</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">English text legend</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.66, p.69, p.70; font proportion and cap color combination unknown pending sign-off</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">10</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">OFF</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">English text legend</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.66, p.69, p.70; font proportion and cap color combination unknown pending sign-off</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">11</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">OPEN</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">English text legend</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.66, p.69, p.70; font proportion and cap color combination unknown pending sign-off</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">12</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">CLOSE</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">English text legend</td>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.66, p.69, p.70; font proportion and cap color combination unknown pending sign-off</td>
</tr>
</tbody>
</table></div>
<p class="mb-4 text-sm leading-7 text-gray-600">Four catalog boundaries govern <code class="[overflow-wrap:anywhere]">/FH</code> specification:</p>
<ol class="my-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">(Customizable)</code> is a catalog annotation independent of symbols <code class="[overflow-wrap:anywhere]">1–12</code>:</strong> The <code class="[overflow-wrap:anywhere]">(Customizable)</code> note on PDF p.66 and p.70 stands apart from the 12 numbered symbols. Do not assume specific customization scope, marking process, artwork file rules, or orderability without written supplier confirmation.</li>
<li><strong class="font-semibold text-gray-800">Do not splice <code class="[overflow-wrap:anywhere]">○</code> or assign the yellow sample photo to a numbered symbol:</strong> The <code class="[overflow-wrap:anywhere]">○</code> character in <code class="[overflow-wrap:anywhere]">-10/FH○</code> through <code class="[overflow-wrap:anywhere]">-10DT/FH○</code> is strictly a catalog placeholder and must not be spliced into a complete orderable string. Likewise, the yellow-head sample photo on PDF p.66 is unnumbered and must not be mapped to any specific symbol among <code class="[overflow-wrap:anywhere]">1–12</code>.</li>
<li><strong class="font-semibold text-gray-800">Color availability varies across catalog rows:</strong> While the series field key (PDF p.65, p.69) lists six color letters (<code class="[overflow-wrap:anywhere]">R, G, Y, B, W, K</code>), the five-color margin dots apply specifically to the shown illuminated flush push button and illuminated selector switch rows, whereas non-illuminated selector switches show a separate six-color example. Exact orderable colors and combinations for any <code class="[overflow-wrap:anywhere]">/FH</code> or double push button model require written supplier sign-off.</li>
<li><strong class="font-semibold text-gray-800">No standalone <code class="[overflow-wrap:anywhere]">/FH</code> outline drawing appears in the catalog:</strong> PDF p.66 and p.70 show <code class="[overflow-wrap:anywhere]">/FH</code> model rows and symbol references without a standalone outline drawing; verify all outline and installation dimensions against the supplier-signed drawing for the ordered model.</li>
</ol>
<figure class="my-6"><img alt="Re-typeset catalog legend reference diagram separating flat and extended R1 and R5 legends, two-column oval R to R7 legends, and standalone /FH symbols 1 to 12" class="rounded-xl border border-gray-100" decoding="async" height="900" loading="lazy" src="/optimized/display/images/blog/eb2m-double-legend-r1-r7-fh-symbol-map-v2.webp" width="1200"/><figcaption class="mt-2 text-sm leading-6 text-gray-600">Re-typeset catalog legend chart grouping <code class="[overflow-wrap:anywhere]">R1</code> and <code class="[overflow-wrap:anywhere]">R5</code> for flat and extended double push buttons, two-column oval legends (<code class="[overflow-wrap:anywhere]">R–R3</code> green/red and <code class="[overflow-wrap:anywhere]">R4–R7</code> light gray/black), and standalone <code class="[overflow-wrap:anywhere]">/FH</code> symbols <code class="[overflow-wrap:anywhere]">1–12</code> with <code class="[overflow-wrap:anywhere]">(Customizable)</code> noted independently, sourced from supplier catalog PDF p.65–67 and p.69–71. Reference diagram only (not a product photograph); applicable head groups, exact shipped orientation, and orderable combinations require written supplier confirmation.</figcaption></figure>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Separating Printed Catalog Fragments from Unconfirmed Multi-Option Combinations</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Neither the EB2M-A nor the EB2M-B catalog pages publish a complete orderability matrix mapping <strong class="font-semibold text-gray-800">head style × legend code × illumination × actuator color × lamp voltage</strong>, nor do they publish verified full orderable strings combining <code class="[overflow-wrap:anywhere]">/FH</code> symbols with colors and voltages. Splicing catalog fragments, legend codes, color letters, and voltage codes into a synthetic part number creates an unverified identifier with no catalog evidence of orderability.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">Instead, record the <strong class="font-semibold text-gray-800">catalog-printed suffix or fragment</strong> in one column and isolate every unconfirmed option in separate buyer-requirement columns until the supplier returns a written complete orderable part number and signed artwork revision.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Buyer Artwork Verification Steps and Separated BOM Specification Fields</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">To reduce the risk of mismatched head styles, inverted symbols, or unverified part-number strings during order preparation, execute the following five-step artwork verification workflow:</p>
<ol class="my-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Record the series prefix and catalog-printed suffix/fragment separately:</strong> Enter <code class="[overflow-wrap:anywhere]">EB2M-A</code> or <code class="[overflow-wrap:anywhere]">EB2M-B</code> alongside the exact printed catalog suffix (<code class="[overflow-wrap:anywhere]">-11PRG</code>, <code class="[overflow-wrap:anywhere]">-11PDRG</code>, <code class="[overflow-wrap:anywhere]">-11HRG</code>, <code class="[overflow-wrap:anywhere]">-11HDRG</code>, <code class="[overflow-wrap:anywhere]">-11RG</code>, <code class="[overflow-wrap:anywhere]">-11DRG</code>) or catalog fragment (<code class="[overflow-wrap:anywhere]">-10/FH○</code>, <code class="[overflow-wrap:anywhere]">-10T/FH○</code>, <code class="[overflow-wrap:anywhere]">-10D/FH○</code>, <code class="[overflow-wrap:anywhere]">-10DT/FH○</code>, explicitly flagged as a fragment containing placeholder <code class="[overflow-wrap:anywhere]">○</code>) without splicing unverified combinations.</li>
<li><strong class="font-semibold text-gray-800">Validate legend scope against the printed head group:</strong> Check whether the required legend appears beside that head group in the catalog (<code class="[overflow-wrap:anywhere]">R1</code>, <code class="[overflow-wrap:anywhere]">R5</code> beside flat/extended; two-column <code class="[overflow-wrap:anywhere]">R–R3</code> green/red and <code class="[overflow-wrap:anywhere]">R4–R7</code> light gray/black beside oval; <code class="[overflow-wrap:anywhere]">1–12</code> for <code class="[overflow-wrap:anywhere]">/FH</code>). Flag any cross-group request (such as <code class="[overflow-wrap:anywhere]">START/STOP</code> on a flat double head) or <code class="[overflow-wrap:anywhere]">(Customizable)</code> marking as an unconfirmed item pending written supplier confirmation.</li>
<li><strong class="font-semibold text-gray-800">Define panel-face reading orientation explicitly:</strong> Specify horizontal vs. vertical viewing axis, which actuator sits at the top or left (for example, <code class="[overflow-wrap:anywhere]">I</code> top / <code class="[overflow-wrap:anywhere]">O</code> bottom vs. <code class="[overflow-wrap:anywhere]">O</code> top / <code class="[overflow-wrap:anywhere]">I</code> bottom), and the required pointing direction of arrow symbols (<code class="[overflow-wrap:anywhere]">3</code> or <code class="[overflow-wrap:anywhere]">4</code>) when viewed on the panel face. Do not cite catalog sample photos as an orientation standard.</li>
<li><strong class="font-semibold text-gray-800">Lock contrast polarity, cap color, and illumination status in separate columns:</strong> For <code class="[overflow-wrap:anywhere]">/FH</code> arrows, state both the code (<code class="[overflow-wrap:anywhere]">3</code> vs. <code class="[overflow-wrap:anywhere]">4</code>) and the foreground/background contrast in plain text. Keep Field-4 color code <code class="[overflow-wrap:anywhere]">R</code> separated from oval legend code <code class="[overflow-wrap:anywhere]">R</code>, and record color and illumination preferences separately rather than assuming universal six-color availability.</li>
<li><strong class="font-semibold text-gray-800">Freeze signed artwork, controlled drawings, and project documentation scope:</strong> Require a supplier-signed legend artwork proof carrying a drawing ID, revision level, and confirmed complete orderable part number, alongside controlled model-level drawings verifying installation dimensions, actual terminal mapping, wiring, and lamp circuits. Where a project requires compliance documentation, track it as a separate procurement verification line—confirming the issuing entity and exact applicability scope against project requirements rather than assuming coverage from catalog pages or sample markings.</li>
</ol>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Executable Separated BOM &amp; Artwork Verification Table</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Use the table structure below to keep verified catalog facts strictly separated from unconfirmed buyer requirements until formal written sign-off:</p>
<div aria-label="Executable Separated BOM &amp; Artwork Verification Table table" class="mb-5 max-w-full overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-green-700" role="region" tabindex="0"><table class="w-full border-collapse text-left text-sm text-gray-600">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">BOM / Verification Field</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Supplier Catalog Reference (PDF p.64–71)</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Buyer-Specified Input (To Be Filled on BOM)</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Status Prior to Supplier Sign-Off</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Series Prefix &amp; Head Group</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">EB2M-A</code> or <code class="[overflow-wrap:anywhere]">EB2M-B</code>; Flat (<code class="[overflow-wrap:anywhere]">-11PRG</code>/<code class="[overflow-wrap:anywhere]">-11PDRG</code>), Extended (<code class="[overflow-wrap:anywhere]">-11HRG</code>/<code class="[overflow-wrap:anywhere]">-11HDRG</code>), Oval (<code class="[overflow-wrap:anywhere]">-11RG</code>/<code class="[overflow-wrap:anywhere]">-11DRG</code>), or <code class="[overflow-wrap:anywhere]">/FH</code> Flush fragments (<code class="[overflow-wrap:anywhere]">-10/FH○</code>, <code class="[overflow-wrap:anywhere]">-10T/FH○</code>, <code class="[overflow-wrap:anywhere]">-10D/FH○</code>, <code class="[overflow-wrap:anywhere]">-10DT/FH○</code>) (PDF p.66–67, p.70–71)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Select series prefix and exact printed suffix or catalog fragment (never splice <code class="[overflow-wrap:anywhere]">○</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Printed suffix/fragment verified; complete multi-option SKU string <strong class="font-semibold text-gray-800">Unknown / Pending sign-off</strong></td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Nominal Contact, Action &amp; Illumination</td>
<td class="border border-gray-200 px-3 py-2 align-top">Double rows: momentary, <code class="[overflow-wrap:anywhere]">-11</code> nominal <code class="[overflow-wrap:anywhere]">1NO1NC</code>, <code class="[overflow-wrap:anywhere]">D</code> illuminated; <code class="[overflow-wrap:anywhere]">/FH</code> rows: <code class="[overflow-wrap:anywhere]">-10</code> nominal <code class="[overflow-wrap:anywhere]">1NO</code>, momentary/maintained (<code class="[overflow-wrap:anywhere]">T</code>), illuminated (<code class="[overflow-wrap:anywhere]">D</code> / <code class="[overflow-wrap:anywhere]">DT</code>; <code class="[overflow-wrap:anywhere]">TD</code> in Field 3 key) (PDF p.65–67, p.69–71)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Confirm nominal action and illumination group; log separate controlled-document check for electrical details</td>
<td class="border border-gray-200 px-3 py-2 align-top">Nominal catalog meaning verified; actual terminal map, wiring, lamp circuits, and safety functions <strong class="font-semibold text-gray-800">Unknown / Pending controlled documents</strong></td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Legend Group / Symbol Code</td>
<td class="border border-gray-200 px-3 py-2 align-top">Flat/Extended: <code class="[overflow-wrap:anywhere]">R1</code>, <code class="[overflow-wrap:anywhere]">R5</code>; Oval two columns: <code class="[overflow-wrap:anywhere]">R–R3</code> (green/red) and <code class="[overflow-wrap:anywhere]">R4–R7</code> (light gray/black); <code class="[overflow-wrap:anywhere]">/FH</code>: <code class="[overflow-wrap:anywhere]">1–12</code>, with <code class="[overflow-wrap:anywhere]">(Customizable)</code> independent (PDF p.65–67, p.69–71)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Enter code or attach custom artwork reference; keep separate from Field-4 color code <code class="[overflow-wrap:anywhere]">R</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Printed group scope verified; cross-group or custom marking orderability <strong class="font-semibold text-gray-800">Unknown / Pending sign-off</strong></td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Physical Orientation &amp; Contrast</td>
<td class="border border-gray-200 px-3 py-2 align-top">Sample photos show mismatched heads/orientations (PDF p.64, p.67, p.71); <code class="[overflow-wrap:anywhere]">/FH</code> <code class="[overflow-wrap:anywhere]">3</code> = black up-arrow on white, <code class="[overflow-wrap:anywhere]">4</code> = white up-arrow on black (PDF p.65–66, p.69–70)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Define viewing axis (vertical/horizontal), top/left actuator position, reading angle, and arrow pointing direction</td>
<td class="border border-gray-200 px-3 py-2 align-top">Shipped physical orientation <strong class="font-semibold text-gray-800">Unknown / Pending signed artwork proof</strong></td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Cap Color &amp; Illumination Field</td>
<td class="border border-gray-200 px-3 py-2 align-top">Series color list <code class="[overflow-wrap:anywhere]">R/G/Y/B/W/K</code> (PDF p.65, p.69); five-color margin dots on shown illuminated flush and illuminated selector rows vs. six-color example on non-illuminated selector rows</td>
<td class="border border-gray-200 px-3 py-2 align-top">Specify actuator color(s) and illumination preference separately; do not infer electrical function from color</td>
<td class="border border-gray-200 px-3 py-2 align-top">Head × legend × illumination × color × voltage matrix <strong class="font-semibold text-gray-800">Unknown / Pending sign-off</strong></td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Artwork Proof, Drawings &amp; Complete SKU</td>
<td class="border border-gray-200 px-3 py-2 align-top">Complete multi-option strings and standalone <code class="[overflow-wrap:anywhere]">/FH</code> outline drawings are not printed in PDF p.64–71</td>
<td class="border border-gray-200 px-3 py-2 align-top">Record signed artwork proof ID, revision, signed installation/wiring drawing IDs, confirmed full orderable SKU, and any project-required compliance document scope check</td>
<td class="border border-gray-200 px-3 py-2 align-top"><strong class="font-semibold text-gray-800">Hold until written supplier sign-off</strong></td>
</tr>
</tbody>
</table></div>
<p class="mb-4 text-sm leading-7 text-gray-600">This separated structure feeds cleanly into a formal pre-PO specification freeze and downstream receiving documentation without requiring buyers to invent unverified part numbers.</p>
</div>`,
      closingHtml: `<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Need Artwork or Legend Verification for an EB2M BOM?</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Review the series overview on our <a class="text-green-700 underline hover:text-green-900" href="/solutions/22mm-push-button-switch">22mm push button switch solutions page</a> or browse our <a class="text-green-700 underline hover:text-green-900" href="/products">industrial component catalog</a>. If your panel BOM requires confirmed double push button head-style and legend combinations, <code class="[overflow-wrap:anywhere]">/FH</code> custom symbol proofs, or order-level drawing revisions prior to order placement, <a class="text-green-700 underline hover:text-green-900" href="/contact">contact our technical team</a> with your separated head-group, legend, and orientation table.</p>`,
      sourcesHtml: `<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Sources and Verification Scope</h2>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Supplier Catalog Source:</strong> EB2M-A and EB2M-B 22mm Push Button Switch Supplier Catalog, original PDF p.64–71 (printed p.6–13; Type A p.64–67, Type B p.68–71), covering Fields 1–6 nominal codes (p.65, p.69), <code class="[overflow-wrap:anywhere]">/FH</code> symbol-marked flush models and symbols <code class="[overflow-wrap:anywhere]">1–12</code> plus <code class="[overflow-wrap:anywhere]">(Customizable)</code> (p.65–66, p.69–70), double push button head groups and <code class="[overflow-wrap:anywhere]">R</code>/<code class="[overflow-wrap:anywhere]">R1–R7</code> two-column legend groupings (p.67, p.71), and sample-photo references (p.64, p.66–67, p.70–71).</li>
<li><strong class="font-semibold text-gray-800">Related Guides on This Site:</strong> <a class="text-green-700 underline hover:text-green-900" href="/blog/how-to-choose-22mm-push-button-switch">How to Choose a 22mm Push Button Switch</a> · <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-emergency-stop-button-twist-release-guide">22mm Emergency Stop Button Guide</a> · <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-push-button-switch-wiring-installation-guide">22mm Push Button Switch Wiring and Installation Guide</a> · <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-illuminated-push-button-voltage-color-guide">22mm Illuminated Push Button Voltage and Color Guide</a></li>
</ul>`,
      faq: [
        {
          question: "Can legend codes R2, R3, R6, or R7 be assumed orderable on flat (-11PRG) or extended (-11HRG) double push buttons?",
          answer: "No. In supplier catalog PDF p.67 and p.71, the flat and extended double push button groups list only R1 and R5 beside them, whereas the oval group (-11RG/-11DRG) displays the full two-column legend block (R–R3 in the green/red group and R4–R7 in the light gray/black group, including ON/OFF and START/STOP). Whether R2, R3, R6, or R7 can be ordered on flat or extended heads is unknown and pending written supplier confirmation and signed artwork.",
        },
        {
          question: "What is the difference between /FH symbol code 3 and symbol code 4, and what does (Customizable) cover?",
          answer: "In supplier catalog PDF p.65, p.66, p.69, and p.70, both code 3 and code 4 depict an upward arrow with inverted contrast: code 3 is a black up-arrow on a white background, whereas code 4 is a white up-arrow on a black background. The yellow-head photograph on PDF p.66 is an unnumbered sample and must not be mapped to code 3, code 4, or any specific symbol in 1–12. The (Customizable) annotation stands independently of 1–12 and does not define customization scope; exact custom options require written supplier confirmation and signed artwork.",
        },
        {
          question: "Why does the letter R appear in both the oval double push button legend block and the EB2M color table?",
          answer: "They serve two unrelated roles in separate catalog tables. In the series field key (PDF p.65, p.69), R is the Field-4 color code for Red. In the oval double push button legend block (PDF p.67, p.71), R identifies the blank (unmarked) legend entry in the green/red column (paired with R4 in the light gray/black column). Keep actuator color codes, double-button R legend codes, and /FH symbols 1–12 in separate BOM columns.",
        },
        {
          question: "What do -11, -10, D, and T mean in the catalog, and why can they not replace controlled wiring drawings or sample-orientation proofs?",
          answer: "In supplier catalog PDF p.65 and p.69, Fields 1 and 2 designate nominal contacts (-11 = nominal 1NO1NC on momentary-listed double rows; -10 = nominal 1NO on the four /FH rows), and Field 3 designates D (illuminated), T (maintained), and TD (illuminated maintained; printed as -10DT/FH○ on p.66/p.70). However, these nominal catalog meanings do not establish actual terminal mapping, internal wiring, lamp circuits, or safety functions—which must be verified separately by exact model and controlled documents. Likewise, catalog sample photos across PDF p.64, p.67, and p.71 show mismatched head shapes and opposite orientations, so shipped legend orientation must be locked by signed artwork.",
        },
        {
          question: "Does a catalog-printed string like -10/FH○ or -11PRG prove a complete orderable part number or universal color availability?",
          answer: "No. Strings such as -10/FH○, -10T/FH○, -10D/FH○, and -10DT/FH○ contain a catalog placeholder (○) that must not be spliced into a complete orderable part number, and the catalog does not publish a complete orderability matrix across head style, legend, illumination, color, and voltage. Furthermore, the five-color margin dots apply specifically to the shown illuminated flush and illuminated selector rows, whereas non-illuminated selector switches show a separate six-color example. Keep printed catalog suffixes/fragments separated from buyer options until written supplier sign-off confirms the exact orderable string.",
        },
      ],
    },
  },
  {
    post: {
      slug: "eb2m-22mm-push-button-part-number-rfq-checklist",
      title: "EB2M 22mm Push Button Pre-PO Specification Freeze: Six-Field Reading and Printing Ambiguity Control",
      description: "A focused pre-PO document-control workflow for reading the six numbered EB2M-A and EB2M-B catalog fields, separating literal lamp-voltage printings from buyer interpretations, logging catalog printing and adjacent-photo discrepancies, and enforcing bilateral sign-off before purchase order release.",
      tags: ["EB2M push button part number", "EB2M push button RFQ checklist", "pre-PO specification freeze", "22mm push button switch"],
      image: "/optimized/display/images/blog/eb2m-part-number-decoding-rfq-hero.webp",
      imageAlt: "Re-typeset catalog diagram of the six numbered EB2M-A and EB2M-B model fields and separate head-type box from supplier catalog PDF pages 65 and 69",
      imageFit: "contain",
      publishedAt: "Nov 22, 2026",
      readingMinutes: 7,
    },
    detail: {
      title: "EB2M 22mm Push Button Pre-PO Specification Freeze: Six-Field Reading and Printing Ambiguity Control",
      metaTitle: "EB2M 22mm Part Number Pre-PO Freeze Guide",
      description: "Decode the six EB2M catalog fields, separate voltage 28 vs 31 printings, log catalog discrepancies, and freeze orders with a PO sign-off matrix.",
      author: "UPprocure Engineering Team",
      wordCount: 3704,
      heroCaption: "Re-typeset layout of the six numbered EB2M model fields (1 through 6) and the separate head-type box sourced from supplier catalog PDF p.65 (Type A) and p.69 (Type B). Illustrative catalog diagram only (not a product photograph); omits synthetic spliced part numbers.",
      ogImage: {
        src: "/optimized/display/images/blog/eb2m-part-number-decoding-rfq-og.webp",
        alt: "Re-typeset catalog diagram of the six numbered EB2M model fields and head-type box from supplier catalog PDF pages 65 and 69",
      },
      articleHtml: `<div class="prose-custom">
<p class="mb-4 text-sm leading-7 text-gray-600">Preparing a purchase order for EB2M-A or EB2M-B 22mm push button switches directly from supplier catalog pages carries a clear part-string risk: the catalog naming layout splits specifications into six numbered fields plus a separate head-type box, while printed model tables and general field keys diverge in spelling, punctuation, and coverage. Mechanically splicing catalog tokens into a new full part number—or overlooking conflicting adjacent catalog entries—leaves the intended configuration ambiguous at the point of PO release.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">This guide addresses strictly <strong class="font-semibold text-gray-800">pre-PO six-field parsing, literal vs. interpreted lamp-voltage auditing, catalog printing and adjacent-photo discrepancy handling, bilateral revision sign-off, and PO release gating</strong>. Switch-family selection, electrical load ratings, wiring and installation procedures, illuminated color selection, and industrial enclosure applications fall outside this scope—refer instead to our existing <a class="text-green-700 underline hover:text-green-900" href="/blog/how-to-choose-22mm-push-button-switch">22mm push button selection guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-emergency-stop-button-twist-release-guide">emergency-stop guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-selector-switch-key-switch-spring-return-hand-off-auto">selector and key-switch guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-push-button-switch-wiring-installation-guide">wiring and installation guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-illuminated-push-button-voltage-color-guide">illuminated push button guide</a>, and <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-push-button-ip40-ip65-industrial-applications">IP40/IP65 industrial applications guide</a>.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Reading the Six Numbered EB2M Catalog Fields and Head-Type Box</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">In supplier catalog PDF p.65 (<code class="[overflow-wrap:anywhere]">EB2M-A</code>) and p.69 (<code class="[overflow-wrap:anywhere]">EB2M-B</code>), the model-naming chart defines <strong class="font-semibold text-gray-800">six numbered fields (<code class="[overflow-wrap:anywhere]">1</code> through <code class="[overflow-wrap:anywhere]">6</code>) plus a separate head-type box</strong> following the series prefix, with a <strong class="font-semibold text-gray-800">slash separator (<code class="[overflow-wrap:anywhere]">/</code>) positioned between Field <code class="[overflow-wrap:anywhere]">3</code> and Field <code class="[overflow-wrap:anywhere]">4</code></strong>. This layout is <strong class="font-semibold text-gray-800">not</strong> a fixed-length six-digit code: individual fields can hold multiple characters, punctuation varies across printed tables, and specific fields apply only to certain operator groups.</p>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Fields <code class="[overflow-wrap:anywhere]">1</code> and <code class="[overflow-wrap:anywhere]">2</code> (Nominal NO/NC Contacts, PDF p.65, p.69):</strong> Field <code class="[overflow-wrap:anywhere]">1</code> identifies normally open (<code class="[overflow-wrap:anywhere]">NO</code>) contacts and Field <code class="[overflow-wrap:anywhere]">2</code> identifies normally closed (<code class="[overflow-wrap:anywhere]">NC</code>) contacts. Their nominal catalog mappings are <code class="[overflow-wrap:anywhere]">-10</code> (<code class="[overflow-wrap:anywhere]">1NO</code>), <code class="[overflow-wrap:anywhere]">-01</code> (<code class="[overflow-wrap:anywhere]">1NC</code>), <code class="[overflow-wrap:anywhere]">-11</code> (<code class="[overflow-wrap:anywhere]">1NO1NC</code>), and <code class="[overflow-wrap:anywhere]">-20</code> (<code class="[overflow-wrap:anywhere]">2NO</code>). Do <strong class="font-semibold text-gray-800">not</strong> infer electrical independence between contacts, actual terminal numbering, or internal wiring maps from <code class="[overflow-wrap:anywhere]">-20</code> or any other contact code.</li>
<li><strong class="font-semibold text-gray-800">Field <code class="[overflow-wrap:anywhere]">3</code> (<code class="[overflow-wrap:anywhere]">Mechanical form</code>, PDF p.65, p.69):</strong> The naming box titles Field <code class="[overflow-wrap:anywhere]">3</code> <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">Mechanical form</code></strong>. Within this same Field <code class="[overflow-wrap:anywhere]">3</code> column, the catalog explicitly lists <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">D</code> = illuminated</strong>, <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">T</code> = maintained</strong>, and <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">TD</code> = illuminated maintained</strong> alongside the other form letters in the general key. Keep general key letters strictly separated from complete model-table suffixes that also include Fields <code class="[overflow-wrap:anywhere]">1</code> and <code class="[overflow-wrap:anywhere]">2</code> (such as <code class="[overflow-wrap:anywhere]">-10DT</code>, <code class="[overflow-wrap:anywhere]">-11PRG</code>, or <code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code>), and continue distinguishing the context of Field <code class="[overflow-wrap:anywhere]">3</code> general key <code class="[overflow-wrap:anywhere]">TD</code> from model-table row <code class="[overflow-wrap:anywhere]">-10DT</code> without declaring them identical.</li>
<li><strong class="font-semibold text-gray-800">Slash Separator (<code class="[overflow-wrap:anywhere]">/</code>) Between Field <code class="[overflow-wrap:anywhere]">3</code> and Field <code class="[overflow-wrap:anywhere]">4</code> vs. Printed Action Strings (PDF p.65–67, p.69–71):</strong> In the naming box, the slash (<code class="[overflow-wrap:anywhere]">/</code>) acts as the boundary separating Field <code class="[overflow-wrap:anywhere]">3</code> from Field <code class="[overflow-wrap:anywhere]">4</code>. Comparing printed catalog rows makes this distinction concrete: the 2-position example prints <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code></strong> (PDF p.66), where <code class="[overflow-wrap:anywhere]">/</code> separates Field <code class="[overflow-wrap:anywhere]">3</code> (<code class="[overflow-wrap:anywhere]">X</code>) from Field <code class="[overflow-wrap:anywhere]">4</code> content (<code class="[overflow-wrap:anywhere]">fu</code>); the 3-position examples print <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">EB2M-A-20XS/f.fu</code></strong> (PDF p.66) and <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">EB2M-A-20CYS/f.fu</code></strong> (PDF p.67), where <code class="[overflow-wrap:anywhere]">/</code> separates Field <code class="[overflow-wrap:anywhere]">3</code> from Field <code class="[overflow-wrap:anywhere]">4</code> content (<code class="[overflow-wrap:anywhere]">f.fu</code>), with corresponding Type B rows on PDF p.70–71. The period (<code class="[overflow-wrap:anywhere]">.</code>) inside the 3-position action string <code class="[overflow-wrap:anywhere]">f.fu</code> belongs verbatim to that printed string—it must not be confused with the slash separator (<code class="[overflow-wrap:anywhere]">/</code>) between fields, must not be rewritten as <code class="[overflow-wrap:anywhere]">fu</code>, and must not be claimed interchangeable with <code class="[overflow-wrap:anywhere]">fu</code>.</li>
</ul>
<p class="mb-4 text-sm leading-7 text-gray-600">While the supplier catalog does print concrete example model rows across PDF p.66–67 and p.70–71, it does not publish a complete cross-field orderability matrix. Therefore, never splice general-key characters mechanically into a new full ordering string; keep <strong class="font-semibold text-gray-800">the orderability of your intended configuration and complete multi-option combinations</strong> marked as pending written supplier confirmation.</p>
<div aria-label="Reading the Six Numbered EB2M Catalog Fields and Head-Type Box table" class="mb-5 max-w-full overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-green-700" role="region" tabindex="0"><table class="w-full border-collapse text-left text-sm text-gray-600">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Catalog Element</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">General Field Key Role (PDF p.65, p.69)</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Separate Printed Model-Table Examples (PDF p.66–67, p.70–71)</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Pre-PO Freeze Boundary</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Series Prefix &amp; Head-Type Box</td>
<td class="border border-gray-200 px-3 py-2 align-top">Identifies <code class="[overflow-wrap:anywhere]">EB2M-A</code> or <code class="[overflow-wrap:anywhere]">EB2M-B</code> plus standalone head-type category box</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code> (p.66), <code class="[overflow-wrap:anywhere]">EB2M-A-11PRG</code> (p.67); Type B counterparts on p.70–71</td>
<td class="border border-gray-200 px-3 py-2 align-top">Keep <code class="[overflow-wrap:anywhere]">EB2M-A</code>/<code class="[overflow-wrap:anywhere]">EB2M-B</code> distinct from emergency-stop suffixes <code class="[overflow-wrap:anywhere]">/A</code> and <code class="[overflow-wrap:anywhere]">/B</code> (PDF p.67, p.71)</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Field <code class="[overflow-wrap:anywhere]">1</code> (NO) &amp; Field <code class="[overflow-wrap:anywhere]">2</code> (NC)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Nominal contact digits: <code class="[overflow-wrap:anywhere]">-10</code> = <code class="[overflow-wrap:anywhere]">1NO</code>, <code class="[overflow-wrap:anywhere]">-01</code> = <code class="[overflow-wrap:anywhere]">1NC</code>, <code class="[overflow-wrap:anywhere]">-11</code> = <code class="[overflow-wrap:anywhere]">1NO1NC</code>, <code class="[overflow-wrap:anywhere]">-20</code> = <code class="[overflow-wrap:anywhere]">2NO</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Appears as leading contact digits in rows such as <code class="[overflow-wrap:anywhere]">-10DT</code> (p.66, p.70), <code class="[overflow-wrap:anywhere]">-01ZS</code> (p.67, p.71), <code class="[overflow-wrap:anywhere]">-11PRG</code> (p.67, p.71), <code class="[overflow-wrap:anywhere]">EB2M-A-20XS/f.fu</code> (p.66)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Nominal catalog meaning only; do not infer electrical independence from <code class="[overflow-wrap:anywhere]">-20</code>, actual terminal numbers, or wiring maps</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Field <code class="[overflow-wrap:anywhere]">3</code> (<code class="[overflow-wrap:anywhere]">Mechanical form</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Column titled <code class="[overflow-wrap:anywhere]">Mechanical form</code>; includes <code class="[overflow-wrap:anywhere]">D</code> = illuminated, <code class="[overflow-wrap:anywhere]">T</code> = maintained, <code class="[overflow-wrap:anywhere]">TD</code> = illuminated maintained, plus other general-key letters (<code class="[overflow-wrap:anywhere]">H</code>, <code class="[overflow-wrap:anywhere]">HD</code>, <code class="[overflow-wrap:anywhere]">HT</code>, <code class="[overflow-wrap:anywhere]">HTD</code>, etc.)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Model tables print combined rows containing Fields 1–3 such as <code class="[overflow-wrap:anywhere]">-10DT</code> (p.66, p.70), <code class="[overflow-wrap:anywhere]">-11PRG</code>/<code class="[overflow-wrap:anywhere]">-11PDRG</code> (p.67, p.71), <code class="[overflow-wrap:anywhere]">-11HRG</code>/<code class="[overflow-wrap:anywhere]">-11HDRG</code> (p.67, p.71)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Do not treat combined Fields 1–3 suffixes as pure Field <code class="[overflow-wrap:anywhere]">3</code> key values; distinguish Field <code class="[overflow-wrap:anywhere]">3</code> general key <code class="[overflow-wrap:anywhere]">TD</code> from model-table row <code class="[overflow-wrap:anywhere]">-10DT</code> without declaring them identical</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Slash Separator (<code class="[overflow-wrap:anywhere]">/</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Naming-box separator positioned between Field <code class="[overflow-wrap:anywhere]">3</code> and Field <code class="[overflow-wrap:anywhere]">4</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Separates Field <code class="[overflow-wrap:anywhere]">3</code> from Field <code class="[overflow-wrap:anywhere]">4</code> in <code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code> (p.66), <code class="[overflow-wrap:anywhere]">EB2M-A-20XS/f.fu</code> (p.66), and <code class="[overflow-wrap:anywhere]">EB2M-A-20CYS/f.fu</code> (p.67); Type B rows on p.70–71</td>
<td class="border border-gray-200 px-3 py-2 align-top">Keep the inter-field slash (<code class="[overflow-wrap:anywhere]">/</code>) distinct from the verbatim dot (<code class="[overflow-wrap:anywhere]">.</code>) inside 3-position <code class="[overflow-wrap:anywhere]">f.fu</code>; never rewrite <code class="[overflow-wrap:anywhere]">f.fu</code> as <code class="[overflow-wrap:anywhere]">fu</code> or claim them interchangeable</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Field <code class="[overflow-wrap:anywhere]">4</code> (Color / Action / Key Removal)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Color letters <code class="[overflow-wrap:anywhere]">R, G, Y, B, W, K</code>; three separate spring-return keys <code class="[overflow-wrap:anywhere]">f</code>, <code class="[overflow-wrap:anywhere]">fu</code>, <code class="[overflow-wrap:anywhere]">ffu</code>; key-removal position named without code table</td>
<td class="border border-gray-200 px-3 py-2 align-top">2-position example <code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code> (p.66); 3-position examples <code class="[overflow-wrap:anywhere]">EB2M-A-20XS/f.fu</code> (p.66) and <code class="[overflow-wrap:anywhere]">EB2M-A-20CYS/f.fu</code> (p.67); Type B corresponding rows on p.70–71</td>
<td class="border border-gray-200 px-3 py-2 align-top">Preserve exact slash and period positions; confirm color availability, action behavior, and plain-text key-removal positions in writing</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Field <code class="[overflow-wrap:anywhere]">5</code> (Illuminated Lamp Voltage)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Ten printed lamp voltage ordering codes: <code class="[overflow-wrap:anywhere]">21–28</code>, <code class="[overflow-wrap:anywhere]">31</code>, <code class="[overflow-wrap:anywhere]">32</code> (<code class="[overflow-wrap:anywhere]">29</code> and <code class="[overflow-wrap:anywhere]">30</code> absent)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Applies strictly to illuminated ordering voltage selection</td>
<td class="border border-gray-200 px-3 py-2 align-top">Separate catalog literal print (<code class="[overflow-wrap:anywhere]">28-DC 220V</code>, <code class="[overflow-wrap:anywhere]">31-AC 220V</code>) from buyer interpretation (<code class="[overflow-wrap:anywhere]">220 V DC</code>, <code class="[overflow-wrap:anywhere]">220 V AC</code>); per-model orderability pending supplier confirmation</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Field <code class="[overflow-wrap:anywhere]">6</code> (Symbol Code)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Symbol numbers <code class="[overflow-wrap:anywhere]">1–12</code> for <code class="[overflow-wrap:anywhere]">/FH</code> marked flush units</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">-10/FH○</code> through <code class="[overflow-wrap:anywhere]">-10DT/FH○</code> rows plus <code class="[overflow-wrap:anywhere]">(Customizable)</code> annotation (p.66, p.70)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Do not splice <code class="[overflow-wrap:anywhere]">○</code> placeholder with other fields; intended multi-option combination orderability pending written supplier confirmation</td>
</tr>
</tbody>
</table></div>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Field 5 Illuminated Lamp Voltage Codes: Literal Print vs. Buyer Interpretation</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">In supplier catalog PDF p.65 and p.69, Field <code class="[overflow-wrap:anywhere]">5</code> functions strictly as the <strong class="font-semibold text-gray-800">illuminated lamp ordering voltage field</strong>. Per-model voltage combinations and current orderability must still be confirmed in writing by the supplier.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">The catalog prints exactly ten voltage ordering codes—<strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">21–28</code>, <code class="[overflow-wrap:anywhere]">31</code>, and <code class="[overflow-wrap:anywhere]">32</code></strong>—with codes <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">29</code> and <code class="[overflow-wrap:anywhere]">30</code> omitted</strong>:</p>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li>Codes <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">21–27</code></strong> correspond to AC/DC <code class="[overflow-wrap:anywhere]">6</code>, <code class="[overflow-wrap:anywhere]">12</code>, <code class="[overflow-wrap:anywhere]">24</code>, <code class="[overflow-wrap:anywhere]">36</code>, <code class="[overflow-wrap:anywhere]">48</code>, <code class="[overflow-wrap:anywhere]">110</code>, and <code class="[overflow-wrap:anywhere]">127 V</code>.</li>
<li>Code <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">28</code></strong> is printed literally in the catalog as <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">28-DC 220V</code></strong> (buyer voltage interpretation: <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">220 V DC</code></strong>).</li>
<li>Code <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">31</code></strong> is printed literally in the catalog as <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">31-AC 220V</code></strong> (buyer voltage interpretation: <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">220 V AC</code></strong>).</li>
<li>Code <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">32</code></strong> corresponds to <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">380 V AC</code></strong>.</li>
</ul>
<p class="mb-4 text-sm leading-7 text-gray-600">Always keep <strong class="font-semibold text-gray-800">catalog literal printing</strong> separated from <strong class="font-semibold text-gray-800">buyer voltage interpretation</strong> in pre-PO review sheets so interpreted engineering labels (<code class="[overflow-wrap:anywhere]">220 V DC</code> / <code class="[overflow-wrap:anywhere]">220 V AC</code>) are never misrepresented as verbatim catalog strings:</p>
<div aria-label="Field 5 Illuminated Lamp Voltage Codes: Literal Print vs. Buyer Interpretation table" class="mb-5 max-w-full overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-green-700" role="region" tabindex="0"><table class="w-full border-collapse text-left text-sm text-gray-600">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Field <code class="[overflow-wrap:anywhere]">5</code> Code</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Catalog Literal Print / Scope (PDF p.65, p.69)</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Buyer Voltage Interpretation</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Pre-PO Freeze Audit Rule</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">21–27</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Printed codes <code class="[overflow-wrap:anywhere]">21</code> through <code class="[overflow-wrap:anywhere]">27</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">6</code>, <code class="[overflow-wrap:anywhere]">12</code>, <code class="[overflow-wrap:anywhere]">24</code>, <code class="[overflow-wrap:anywhere]">36</code>, <code class="[overflow-wrap:anywhere]">48</code>, <code class="[overflow-wrap:anywhere]">110</code>, <code class="[overflow-wrap:anywhere]">127 V AC/DC</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Verify intended voltage availability for the exact illuminated model with supplier written confirmation</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">28</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">28-DC 220V</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">220 V DC</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Conflicts if buyer text specifies <code class="[overflow-wrap:anywhere]">220 V AC</code>; trigger immediate <code class="[overflow-wrap:anywhere]">Hold</code> and bilateral correction</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">31</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">31-AC 220V</code> (<code class="[overflow-wrap:anywhere]">29</code> and <code class="[overflow-wrap:anywhere]">30</code> absent)</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">220 V AC</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Conflicts if buyer text specifies <code class="[overflow-wrap:anywhere]">220 V DC</code>; trigger immediate <code class="[overflow-wrap:anywhere]">Hold</code> and bilateral correction</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">32</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Printed code <code class="[overflow-wrap:anywhere]">32</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">380 V AC</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Verify intended model combinability and orderability in writing prior to PO release</td>
</tr>
</tbody>
</table></div>
<figure class="my-6"><img alt="EB2M chart lists lamp-voltage codes 21–28, 31, and 32, highlighting 28 for 220 V DC and 31 for 220 V AC. The code key prints TD and ffu. Model rows print -10DT and /f.fu." class="rounded-xl border border-gray-100" decoding="async" height="900" loading="lazy" src="/optimized/display/images/blog/eb2m-six-field-code-voltage-21-28-31-32-chart-v2.webp" width="1200"/><figcaption class="mt-2 text-sm leading-6 text-gray-600">This catalog table covers lamp voltages for illuminated orders (pp. 65 and 69). Code 28 is 220 V DC and code 31 is 220 V AC. Key-removal position applies to relevant operators, and the key gives no code table for it. Compare the printed code key and model rows as separate references. Ask the supplier to confirm availability, options, and the complete order code in writing.</figcaption></figure>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Illustrative Document-Review Walkthrough: Freezing a <code class="[overflow-wrap:anywhere]">28</code> vs. <code class="[overflow-wrap:anywhere]">31</code> Conflict</h3>
<p class="mb-4 text-sm leading-7 text-gray-600"><em>Scope note: The sequence below is an illustrative catalog-based document-review exercise, not a real customer case or historical order incident.</em></p>
<p class="mb-4 text-sm leading-7 text-gray-600">Suppose a draft buyer specification sheet lists <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">220 V AC</code></strong> in the engineering voltage column while citing code <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">28</code></strong> in the Field <code class="[overflow-wrap:anywhere]">5</code> column (or pairs <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">220 V DC</code></strong> text with code <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">31</code></strong>):</p>
<ol class="my-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Place the line on <code class="[overflow-wrap:anywhere]">Hold</code>:</strong> Block PO issuance immediately. Never assume either party will silently override the code to match the text or override the text to match the code.</li>
<li><strong class="font-semibold text-gray-800">Cite literal print vs. interpretation:</strong> Record <code class="[overflow-wrap:anywhere]">PDF p.65, p.69</code> in the freeze matrix, logging both catalog literal print (<code class="[overflow-wrap:anywhere]">28-DC 220V</code>, <code class="[overflow-wrap:anywhere]">31-AC 220V</code>; <code class="[overflow-wrap:anywhere]">29</code>/<code class="[overflow-wrap:anywhere]">30</code> absent) and buyer interpretation (<code class="[overflow-wrap:anywhere]">220 V DC</code> vs. <code class="[overflow-wrap:anywhere]">220 V AC</code>).</li>
<li><strong class="font-semibold text-gray-800">Obtain written supplier confirmation:</strong> Request an order-level confirmation document stating the corrected voltage code and the complete orderable model number for the intended illuminated configuration.</li>
<li><strong class="font-semibold text-gray-800">Update, version, and countersign:</strong> Align buyer text and supplier-confirmed code identically on a controlled revision, log supplier sign-off and buyer dated sign-off, and only then release the PO line.</li>
</ol>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Verbatim Catalog Printing Discrepancies and Controlled-Drawing Triggers</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Several character keys, punctuation marks, and adjacent photo details diverge across supplier catalog PDF p.65–67 and p.69–71. Recording these items verbatim—without silently normalizing text or extrapolating unlisted SKUs—keeps the PO freeze auditable.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Action Keys, General Key vs. Model Table Contexts, and Uncoded Options</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Pay strict attention to three printing rules when auditing selector, key-switch, illuminated, and double push button rows:</p>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Do not confuse the Field <code class="[overflow-wrap:anywhere]">3</code>/<code class="[overflow-wrap:anywhere]">4</code> slash with the dot in <code class="[overflow-wrap:anywhere]">f.fu</code>, and never merge <code class="[overflow-wrap:anywhere]">/fu</code> and <code class="[overflow-wrap:anywhere]">/f.fu</code>:</strong> The general field key (PDF p.65, p.69) prints <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">f</code></strong>, <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">fu</code></strong>, and <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">ffu</code></strong> as three distinct entries, while the naming box places the slash separator (<code class="[overflow-wrap:anywhere]">/</code>) between Field <code class="[overflow-wrap:anywhere]">3</code> and Field <code class="[overflow-wrap:anywhere]">4</code>. In the model tables, the 2-position selector example prints <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code></strong> (PDF p.66), whereas the 3-position examples print <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">EB2M-A-20XS/f.fu</code></strong> (PDF p.66) and <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">EB2M-A-20CYS/f.fu</code></strong> (PDF p.67), with corresponding Type B rows on PDF p.70–71. The period (<code class="[overflow-wrap:anywhere]">.</code>) inside <code class="[overflow-wrap:anywhere]">f.fu</code> belongs verbatim to that printed 3-position action string; do not confuse it with the slash separator (<code class="[overflow-wrap:anywhere]">/</code>), do not rewrite <code class="[overflow-wrap:anywhere]">f.fu</code> as <code class="[overflow-wrap:anywhere]">fu</code>, and do not claim <code class="[overflow-wrap:anywhere]">/fu</code> and <code class="[overflow-wrap:anywhere]">/f.fu</code> are interchangeable variants.</li>
<li><strong class="font-semibold text-gray-800">Do not declare Field <code class="[overflow-wrap:anywhere]">3</code> (<code class="[overflow-wrap:anywhere]">Mechanical form</code>) general key <code class="[overflow-wrap:anywhere]">TD</code> identical to model-table row <code class="[overflow-wrap:anywhere]">-10DT</code>:</strong> <code class="[overflow-wrap:anywhere]">TD</code> (<code class="[overflow-wrap:anywhere]">illuminated maintained</code>, PDF p.65, p.69) appears in the Field <code class="[overflow-wrap:anywhere]">3</code> (<code class="[overflow-wrap:anywhere]">Mechanical form</code>) general key alongside <code class="[overflow-wrap:anywhere]">D</code> (<code class="[overflow-wrap:anywhere]">illuminated</code>) and <code class="[overflow-wrap:anywhere]">T</code> (<code class="[overflow-wrap:anywhere]">maintained</code>), whereas <code class="[overflow-wrap:anywhere]">-10DT</code> (PDF p.66, p.70) appears as a combined model-table row in a different catalog context. Record both citations verbatim rather than declaring them identical.</li>
<li><strong class="font-semibold text-gray-800">Flag unlisted and undefined entries as pending written confirmation:</strong> General-key codes <code class="[overflow-wrap:anywhere]">H</code>, <code class="[overflow-wrap:anywhere]">HD</code>, <code class="[overflow-wrap:anywhere]">HT</code>, and <code class="[overflow-wrap:anywhere]">HTD</code> (PDF p.65, p.69) have no standalone extended single-button rows on PDF p.66–67 or p.70–71; the letter <code class="[overflow-wrap:anywhere]">P</code> appears in flat double push button rows <code class="[overflow-wrap:anywhere]">-11PRG</code> and <code class="[overflow-wrap:anywhere]">-11PDRG</code> (PDF p.67, p.71) without being defined in the general letter key; and Field <code class="[overflow-wrap:anywhere]">4</code> names key-removal position without printing a code table on key-switch pages (PDF p.67, p.71).</li>
</ul>
<div aria-label="Action Keys, General Key vs. Model Table Contexts, and Uncoded Options table" class="mb-5 max-w-full overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-green-700" role="region" tabindex="0"><table class="w-full border-collapse text-left text-sm text-gray-600">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Source PDF Pages</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">General Field Key Print</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Printed Model-Table Example / Absence</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Verbatim Catalog Evidence &amp; Pre-PO Handling Rule</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Sign-Off Status</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.69 (key) vs. p.66–67, p.70–71 (tables)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Slash (<code class="[overflow-wrap:anywhere]">/</code>) between Field <code class="[overflow-wrap:anywhere]">3</code> and Field <code class="[overflow-wrap:anywhere]">4</code>; three separate entries <code class="[overflow-wrap:anywhere]">f</code>, <code class="[overflow-wrap:anywhere]">fu</code>, <code class="[overflow-wrap:anywhere]">ffu</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">2-position: <code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code> (p.66); 3-position: <code class="[overflow-wrap:anywhere]">EB2M-A-20XS/f.fu</code> (p.66), <code class="[overflow-wrap:anywhere]">EB2M-A-20CYS/f.fu</code> (p.67); Type B corresponding rows on p.70–71</td>
<td class="border border-gray-200 px-3 py-2 align-top">Keep slash and period positions verbatim; do not confuse the dot in <code class="[overflow-wrap:anywhere]">f.fu</code> with the Field <code class="[overflow-wrap:anywhere]">3</code>/<code class="[overflow-wrap:anywhere]">4</code> slash, rewrite <code class="[overflow-wrap:anywhere]">f.fu</code> as <code class="[overflow-wrap:anywhere]">fu</code>, or treat <code class="[overflow-wrap:anywhere]">/fu</code> and <code class="[overflow-wrap:anywhere]">/f.fu</code> as interchangeable variants; confirm exact action behavior and orderability in writing</td>
<td class="border border-gray-200 px-3 py-2 align-top"><strong class="font-semibold text-gray-800">Hold</strong> — Intended configuration &amp; orderability pending supplier written confirmation</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.69 (key) vs. p.66, p.70 (tables)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Field <code class="[overflow-wrap:anywhere]">3</code> (<code class="[overflow-wrap:anywhere]">Mechanical form</code>) general key <code class="[overflow-wrap:anywhere]">TD</code> (<code class="[overflow-wrap:anywhere]">illuminated maintained</code>; same column lists <code class="[overflow-wrap:anywhere]">D</code>, <code class="[overflow-wrap:anywhere]">T</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Model-table row <code class="[overflow-wrap:anywhere]">-10DT</code> (combined Fields 1–3 context)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Different catalog contexts; record both verbatim without declaring <code class="[overflow-wrap:anywhere]">TD</code> identical to <code class="[overflow-wrap:anywhere]">-10DT</code> or splicing new strings</td>
<td class="border border-gray-200 px-3 py-2 align-top"><strong class="font-semibold text-gray-800">Hold</strong> — Complete orderable model string pending supplier written confirmation</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.69 (key) vs. p.66–67, p.70–71 (tables)</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">H</code>, <code class="[overflow-wrap:anywhere]">HD</code>, <code class="[overflow-wrap:anywhere]">HT</code>, <code class="[overflow-wrap:anywhere]">HTD</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">No standalone single-button extended rows printed (<code class="[overflow-wrap:anywhere]">H</code> appears in double push button rows <code class="[overflow-wrap:anywhere]">-11HRG</code>/<code class="[overflow-wrap:anywhere]">-11HDRG</code> on p.67, p.71)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Do not extrapolate unlisted single-button SKUs from the general key; verify meaning and current orderability in writing</td>
<td class="border border-gray-200 px-3 py-2 align-top"><strong class="font-semibold text-gray-800">Hold</strong> — Active availability &amp; orderable string unknown pending written confirmation</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.69 (key) vs. p.67, p.71 (tables)</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">P</code> undefined in general letter key</td>
<td class="border border-gray-200 px-3 py-2 align-top">Flat double push button rows <code class="[overflow-wrap:anywhere]">-11PRG</code>, <code class="[overflow-wrap:anywhere]">-11PDRG</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Cite <code class="[overflow-wrap:anywhere]">-11PRG</code>/<code class="[overflow-wrap:anywhere]">-11PDRG</code> verbatim without inventing an unverified definition for <code class="[overflow-wrap:anywhere]">P</code>; confirm configuration on controlled drawing</td>
<td class="border border-gray-200 px-3 py-2 align-top"><strong class="font-semibold text-gray-800">Hold</strong> — Exact meaning &amp; complete orderable string pending written confirmation</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">PDF p.65, p.69 (key) vs. p.67, p.71 (tables)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Field <code class="[overflow-wrap:anywhere]">4</code> names key-removal position</td>
<td class="border border-gray-200 px-3 py-2 align-top">No key-removal position code table printed on key-switch rows</td>
<td class="border border-gray-200 px-3 py-2 align-top">Do not invent suffix characters; specify required key-removal positions in plain text and lock via written supplier sign-off</td>
<td class="border border-gray-200 px-3 py-2 align-top"><strong class="font-semibold text-gray-800">Hold</strong> — Plain-text addendum &amp; supplier sign-off required before release</td>
</tr>
</tbody>
</table></div>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Adjacent Sample-Photo Discrepancy as a Controlled-Documentation Trigger (PDF p.67)</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Pre-PO document control also requires checking whether adjacent catalog materials contradict each other. On <strong class="font-semibold text-gray-800">supplier catalog PDF p.67</strong>, the sample photograph placed adjacent to the <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">-01ZS</code> / <code class="[overflow-wrap:anywhere]">-01DZS</code></strong> emergency-stop row displays <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">13–14 (NO)</code></strong>, whereas the neighboring <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">-01</code></strong> model code denotes nominal <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">1NC</code></strong>.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">Use this observation strictly as a <strong class="font-semibold text-gray-800">trigger to request the supplier's controlled wiring diagram and terminal table for the exact ordered model</strong> before releasing a PO. That adjacent photo difference indicates only a discrepancy between neighboring catalog items on PDF p.67—it does <strong class="font-semibold text-gray-800">not</strong> prove the actual terminal assignments of any ordered product, nor does it prove a physical mismatch on received goods.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Copyable Pre-PO Specification Freeze Matrix and Bilateral Release Gate</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Combine the conceptual workflow and six-column freeze matrix below to close every code-table conflict, printing discrepancy, controlled-drawing request, and PO-specified project document before releasing a purchase order. Any row without completed supplier sign-off, closed deviation disposition, and dated buyer sign-off remains on <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">Hold</code></strong>.</p>
<figure class="my-6"><img alt="The buyer submits a catalog reference and requested options. The supplier confirms the full model and drawing number and revision in writing. PO release follows verification of the signed-off revision and documented deviations." class="rounded-xl border border-gray-100" decoding="async" height="900" loading="lazy" src="/optimized/display/images/blog/eb2m-pre-po-rfq-verification-workflow-v2.webp" width="1200"/><figcaption class="mt-2 text-sm leading-6 text-gray-600">Send the catalog reference and requested options. Obtain the supplier’s written confirmation of the full model and drawing number and revision, then verify the signed-off revision and deviation record before releasing the purchase order.</figcaption></figure>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Copyable Six-Column PO Specification Freeze Matrix</h3>
<div aria-label="Copyable Six-Column PO Specification Freeze Matrix table" class="mb-5 max-w-full overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-green-700" role="region" tabindex="0"><table class="w-full border-collapse text-left text-sm text-gray-600 min-w-[960px]">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Applicable Ordered Model / Options (Catalog Citation)</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Supplier-Confirmed Complete Model Number</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Signed Drawing / Document No. &amp; Revision</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Supplier Sign-Off</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Deviation Disposition &amp; Closure Record</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Buyer Date &amp; Sign-Off (PO Gate)</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Series prefix (<code class="[overflow-wrap:anywhere]">EB2M-A</code> / <code class="[overflow-wrap:anywhere]">EB2M-B</code>), head-type box, Fields <code class="[overflow-wrap:anywhere]">1–3</code> &amp; intended multi-option selections (PDF p.65–71; distinct from <code class="[overflow-wrap:anywhere]">/A</code>, <code class="[overflow-wrap:anywhere]">/B</code> emergency-stop suffixes)</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Supplier written complete orderable string]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Drawing / Spec Doc ID, Rev __]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Name, Date, Written Ref]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Confirm orderability of intended combination; log closure ID]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Buyer Name, Date] — Hold until closed</code></td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Field <code class="[overflow-wrap:anywhere]">5</code> illuminated voltage selection: literal <code class="[overflow-wrap:anywhere]">28-DC 220V</code> (<code class="[overflow-wrap:anywhere]">220 V DC</code>) vs. <code class="[overflow-wrap:anywhere]">31-AC 220V</code> (<code class="[overflow-wrap:anywhere]">220 V AC</code>) or <code class="[overflow-wrap:anywhere]">21–27</code>/<code class="[overflow-wrap:anywhere]">32</code> (PDF p.65, p.69; <code class="[overflow-wrap:anywhere]">29</code>/<code class="[overflow-wrap:anywhere]">30</code> absent)</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Supplier written complete orderable string with locked voltage code]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Model Spec / Datasheet ID, Rev __]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Name, Date, Written Ref]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Record correction of any 28/31 text-vs.-code clash; closure ID]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Buyer Name, Date] — Hold until closed</code></td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Action &amp; form printing discrepancies: slash (<code class="[overflow-wrap:anywhere]">/</code>) between Fields <code class="[overflow-wrap:anywhere]">3</code> &amp; <code class="[overflow-wrap:anywhere]">4</code>; <code class="[overflow-wrap:anywhere]">f</code>/<code class="[overflow-wrap:anywhere]">fu</code>/<code class="[overflow-wrap:anywhere]">ffu</code> vs. <code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code>, <code class="[overflow-wrap:anywhere]">EB2M-A-20XS/f.fu</code>, <code class="[overflow-wrap:anywhere]">EB2M-A-20CYS/f.fu</code>; <code class="[overflow-wrap:anywhere]">TD</code> vs. <code class="[overflow-wrap:anywhere]">-10DT</code>; <code class="[overflow-wrap:anywhere]">H/HD/HT/HTD</code>; <code class="[overflow-wrap:anywhere]">P</code>; uncoded key-removal (PDF p.65–67, p.69–71)</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Supplier written active model string + plain-text key-removal addendum]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Action Diagram / Spec Doc ID, Rev __]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Name, Date, Written Ref]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Verbatim citation mapped to confirmed string; deviation closed]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Buyer Name, Date] — Hold until closed</code></td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Controlled wiring diagram and terminal table request for exact ordered model (triggered by <code class="[overflow-wrap:anywhere]">p.67</code> <code class="[overflow-wrap:anywhere]">-01ZS</code>/<code class="[overflow-wrap:anywhere]">-01DZS</code> adjacent photo <code class="[overflow-wrap:anywhere]">13–14 (NO)</code> vs. <code class="[overflow-wrap:anywhere]">-01</code> nominal <code class="[overflow-wrap:anywhere]">1NC</code>, and non-inference from <code class="[overflow-wrap:anywhere]">-20</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Supplier written complete orderable string]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Controlled Wiring Diagram &amp; Terminal Table ID, Rev __]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Name, Date, Written Ref]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Confirm controlled wiring diagram and terminal table govern exact ordered model; closure ID]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Buyer Name, Date] — Hold until closed</code></td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">PO-specified controlled project documents (when explicitly required by the PO; scope verified per project requirements)</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Covered exact orderable model string(s)]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Controlled Project Document ID(s), Rev / Validity]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Name, Date, Written Ref]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Confirm issuing entity, document scope, and model coverage; closure ID]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Buyer Name, Date] — Hold until closed</code></td>
</tr>
</tbody>
</table></div>
</div>`,
      closingHtml: `<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Need Written Model Confirmation and Controlled Documents Before Freezing an EB2M PO?</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Review the series overview on our <a class="text-green-700 underline hover:text-green-900" href="/solutions/22mm-push-button-switch">22mm push button switch solutions page</a> or browse our <a class="text-green-700 underline hover:text-green-900" href="/products">industrial component catalog</a>. When your procurement or engineering team needs written confirmation of complete EB2M orderable strings, controlled model drawings, and signed document revisions to clear a pre-PO <code class="[overflow-wrap:anywhere]">Hold</code>, <a class="text-green-700 underline hover:text-green-900" href="/contact">contact our technical team</a> with your completed freeze matrix.</p>`,
      sourcesHtml: `<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Sources and Verification Scope</h2>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Supplier Catalog Source:</strong> EB2M-A and EB2M-B 22mm Push Button Switch Supplier Catalog, original PDF p.64–71 (printed p.6–13; Type A p.64–67, Type B p.68–71), covering the six numbered fields (<code class="[overflow-wrap:anywhere]">1–6</code>), head-type box, slash separator (<code class="[overflow-wrap:anywhere]">/</code>) between Field <code class="[overflow-wrap:anywhere]">3</code> and Field <code class="[overflow-wrap:anywhere]">4</code>, nominal NO/NC mappings, Field <code class="[overflow-wrap:anywhere]">3</code> (<code class="[overflow-wrap:anywhere]">Mechanical form</code>, including <code class="[overflow-wrap:anywhere]">D</code>, <code class="[overflow-wrap:anywhere]">T</code>, and <code class="[overflow-wrap:anywhere]">TD</code>), Field <code class="[overflow-wrap:anywhere]">4</code> spring-return keys (<code class="[overflow-wrap:anywhere]">f</code>, <code class="[overflow-wrap:anywhere]">fu</code>, <code class="[overflow-wrap:anywhere]">ffu</code>) and uncoded key-removal note, and Field <code class="[overflow-wrap:anywhere]">5</code> illuminated lamp voltage codes <code class="[overflow-wrap:anywhere]">21–28</code>, <code class="[overflow-wrap:anywhere]">31</code>, <code class="[overflow-wrap:anywhere]">32</code> (<code class="[overflow-wrap:anywhere]">28-DC 220V</code>, <code class="[overflow-wrap:anywhere]">31-AC 220V</code>, omitting <code class="[overflow-wrap:anywhere]">29</code>/<code class="[overflow-wrap:anywhere]">30</code>) on p.65 and p.69; printed model-table rows (<code class="[overflow-wrap:anywhere]">-10DT</code>, <code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code>, <code class="[overflow-wrap:anywhere]">EB2M-A-20XS/f.fu</code>, <code class="[overflow-wrap:anywhere]">EB2M-A-20CYS/f.fu</code>, <code class="[overflow-wrap:anywhere]">-11PRG</code>/<code class="[overflow-wrap:anywhere]">-11PDRG</code>, <code class="[overflow-wrap:anywhere]">-11HRG</code>/<code class="[overflow-wrap:anywhere]">-11HDRG</code>, <code class="[overflow-wrap:anywhere]">/FH</code> rows, and Type B counterparts) on p.66–67 and p.70–71; and the <code class="[overflow-wrap:anywhere]">-01ZS</code>/<code class="[overflow-wrap:anywhere]">-01DZS</code> adjacent sample-photo discrepancy on p.67.</li>
<li><strong class="font-semibold text-gray-800">Related Guides on This Site:</strong> <a class="text-green-700 underline hover:text-green-900" href="/blog/how-to-choose-22mm-push-button-switch">How to Choose a 22mm Push Button Switch</a> · <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-emergency-stop-button-twist-release-guide">22mm Emergency Stop Button Guide</a> · <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-selector-switch-key-switch-spring-return-hand-off-auto">22mm Selector and Key Switch Guide</a> · <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-push-button-switch-wiring-installation-guide">22mm Push Button Switch Wiring and Installation Guide</a> · <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-illuminated-push-button-voltage-color-guide">22mm Illuminated Push Button Voltage and Color Guide</a> · <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-push-button-ip40-ip65-industrial-applications">22mm Push Button IP40/IP65 Industrial Applications Guide</a></li>
</ul>`,
      faq: [
        {
          question: "What do Fields 1, 2, and 3 (Mechanical form) represent, and where does the slash separator sit?",
          answer: "In supplier catalog PDF p.65 and p.69, Field 1 is NO and Field 2 is NC (with nominal mappings -10 = 1NO, -01 = 1NC, -11 = 1NO1NC, and -20 = 2NO). Field 3 is titled Mechanical form in the naming box and explicitly defines D = illuminated, T = maintained, and TD = illuminated maintained within that same column alongside other general-key form letters, while the slash separator (/) sits between Field 3 and Field 4. Combined printed model-table rows such as -10DT, -11PRG, or EB2M-A-10X/fu incorporate Fields 1 and 2 alongside form letters, so keeping general keys separate from model-table examples prevents misparsing. Never infer electrical independence, actual terminal numbering, or wiring maps from -20 or other contact codes.",
        },
        {
          question: "How does the catalog literally print Field 5 voltage codes 28 and 31, and how should a mismatch with buyer voltage text be handled?",
          answer: "Supplier catalog PDF p.65 and p.69 literally print 28-DC 220V and 31-AC 220V (with codes 29 and 30 omitted); 220 V DC and 220 V AC are buyer interpretations rather than verbatim catalog strings. Field 5 applies strictly to illuminated lamp ordering voltage selection, and per-model combinations require supplier confirmation. If a draft BOM pairs 220 V AC with 28 or 220 V DC with 31, place the line on Hold, obtain written supplier confirmation of the corrected complete model string, align the controlled revision, and record bilateral sign-off before releasing the PO.",
        },
        {
          question: "How does the dot in /f.fu differ from the Field 3/4 slash separator, and why can TD not be declared identical to -10DT?",
          answer: "In the naming box (PDF p.65, p.69), the slash (/) separates Field 3 (Mechanical form) from Field 4, while the general key prints f, fu, and ffu as three separate entries. In the model tables, the 2-position example prints EB2M-A-10X/fu, whereas the 3-position examples print EB2M-A-20XS/f.fu and EB2M-A-20CYS/f.fu (with Type B rows on p.70–71). The period (.) inside f.fu belongs verbatim to that 3-position printed string—it must not be confused with the inter-field slash (/), rewritten as fu, or claimed interchangeable with /fu. Similarly, Field 3 (Mechanical form) general key TD (illuminated maintained) and model-table row -10DT appear in different catalog contexts and must be recorded verbatim pending written supplier confirmation rather than declared identical.",
        },
        {
          question: "What does the 13–14 (NO) marking on the photo adjacent to -01ZS/-01DZS on PDF p.67 actually establish during pre-PO review?",
          answer: "On supplier catalog PDF p.67, the sample photograph adjacent to the -01ZS/-01DZS (nominal 1NC) emergency-stop row visibly shows 13–14 (NO). That observation indicates only a discrepancy between neighboring catalog materials and serves as a concrete trigger to request the supplier's controlled wiring diagram and terminal table for the exact ordered model prior to PO release. It does not prove the actual terminals of any ordered product or prove a physical mismatch on received goods.",
        },
        {
          question: "What entries must be completed in the PO freeze matrix—including any PO-specified controlled documents—before clearing a Hold?",
          answer: "Every line must record all six freeze columns before passing the PO release gate: the applicable ordered model/options with catalog citation, the supplier-confirmed complete orderable model number, the signed drawing or controlled document number and revision (including any PO-specified controlled project documents where required), supplier sign-off, a closed deviation disposition record, and dated buyer sign-off. Any row missing one of these entries stays on Hold.",
        },
      ],
    },
  },
  {
    post: {
      slug: "22mm-push-button-switch-incoming-inspection-qc-guide",
      title: "22mm Push Button Switch Incoming Inspection: Receiving Evidence Records, Lot Traceability, and Discrepancy Control",
      description: "A recommended receiving documentation workflow for EB2M 22mm push button switches covering PO and drawing-revision baselines, layer-appropriate identity checks, logging of pre-existing approved records, and three-branch Hold, Quarantine, and Release controls.",
      tags: ["22mm push button switch incoming inspection", "push button receiving verification records", "lot traceability and discrepancy hold", "22mm push button switch", "receiving quality control"],
      image: "/optimized/display/images/blog/eb2m-incoming-inspection-iqc-hero-v2.webp",
      imageAlt: "Conceptual four-stage receiving evidence workflow for 22mm push button switches covering lot segregation and marking logs, pre-existing mechanical observation records, approved de-energized record review, and document review with Hold or Quarantine routing",
      imageFit: "contain",
      publishedAt: "Nov 22, 2026",
      readingMinutes: 8,
    },
    detail: {
      title: "22mm Push Button Switch Incoming Inspection: Receiving Evidence Records, Lot Traceability, and Discrepancy Control",
      metaTitle: "22mm Push Button Receiving Evidence & QC Guide",
      description: "Log EB2M 22mm push button receiving evidence: match PO lines, signed revisions, lot labels, and approved records for Hold, Quarantine, or Release.",
      author: "UPprocure Engineering Team",
      wordCount: 3637,
      heroCaption: "Recommended four-stage receiving workflow covering (1) lot segregation and marking logs, (2) recording pre-existing mechanical observation results where required by an approved plan, (3) reviewing pre-existing approved de-energized records, and (4) document review, routing exceptions to Hold or Quarantine. Conceptual workflow diagram only (not a product photograph); depicts no on-site test procedures, probes, dimensions, or certification icons.",
      ogImage: {
        src: "/optimized/display/images/blog/eb2m-incoming-inspection-iqc-og-v2.webp",
        alt: "Conceptual four-stage receiving evidence workflow for 22mm push button switches covering lot segregation and marking logs, pre-existing mechanical observation logs, approved de-energized record review, and document review with Hold or Quarantine routing",
      },
      articleHtml: `<div class="prose-custom">
<p class="mb-4 text-sm leading-7 text-gray-600">Transferring incoming EB2M-A or EB2M-B 22mm push button switches directly from a receiving dock into general stock without structured documentary records creates a traceability gap. When packing lists, carton labels, inner bag markings, physical unit stamps, or accompanying controlled documents diverge from the purchase order baseline, mixing parts into inventory bins makes lot segregation and corrective disposition difficult.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">This guide outlines a <strong class="font-semibold text-gray-800">recommended, configurable receiving documentation workflow</strong>—not a statutory or industry-mandatory standard—focused strictly on <strong class="font-semibold text-gray-800">lot segregation and marking logs, recording pre-existing approved visual/mechanical observation and de-energized verification records, document review, and three-branch disposition control (<code class="[overflow-wrap:anywhere]">Release</code>, <code class="[overflow-wrap:anywhere]">Hold</code>, or <code class="[overflow-wrap:anywhere]">Quarantine</code>)</strong>. It does <strong class="font-semibold text-gray-800">not</strong> cover switch selection, panel preparation, door assembly, wiring, or on-site testing procedures—refer instead to our <a class="text-green-700 underline hover:text-green-900" href="/blog/how-to-choose-22mm-push-button-switch">22mm push button switch selection guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-emergency-stop-button-twist-release-guide">22mm emergency stop button guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-selector-switch-key-switch-spring-return-hand-off-auto">22mm selector and key switch guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-push-button-switch-wiring-installation-guide">22mm push button wiring and installation guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-illuminated-push-button-voltage-color-guide">22mm illuminated push button guide</a>, and <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-push-button-ip40-ip65-industrial-applications">22mm IP40/IP65 industrial applications guide</a>.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Establishing the Documentary Baseline and Four-Stage Receiving Scope</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Structured receiving begins with controlled order paperwork before inner packages are mixed or transferred into general stock. Every step in this four-stage workflow centers on retaining and reconciling documentary evidence rather than performing unapproved bench tests at the dock.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Assembling the Pre-Receipt Baseline Package</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Gather the following baseline documents for each EB2M purchase order line before logging physical containers:</p>
<ol class="my-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Released PO line with frozen model text:</strong> The approved orderable model string, ordered quantity, and any plain-text specification addenda bound to that PO line.</li>
<li><strong class="font-semibold text-gray-800">Supplier-signed drawing or specification document ID and revision:</strong> The controlled drawing number, specification sheet ID, or signed artwork revision governing the ordered model. General catalog pages do not replace a signed order-level revision.</li>
<li><strong class="font-semibold text-gray-800">Delivery note and packing list:</strong> The shipment paperwork tying delivered carton counts, PO lines, and supplier lot or batch identifiers to the receipt.</li>
<li><strong class="font-semibold text-gray-800">Applicable approved inspection plan and PO-specified documentation:</strong> If the order or facility operates under an approved inspection plan, identify which pre-existing supplier or incoming records must accompany the lot. Where a purchase order explicitly requires project compliance documentation, verify at receiving that the requested document package is present and check its issuing entity, validity dates, document ID, and stated coverage scope strictly against the PO requirements—never assume general product coverage without documentary verification.</li>
</ol>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Logging Pre-Existing Approved Records Without Inventing On-Site Tests</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">In stages 2 and 3 of the receiving workflow, receiving personnel reconcile <strong class="font-semibold text-gray-800">pre-existing records generated under an approved inspection plan</strong> tied to the ordered model and lot:</p>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Pre-existing de-energized verification results:</strong> Where an approved inspection plan produces a de-energized verification record for the ordered model and lot, log <strong class="font-semibold text-gray-800">the recorded result itself</strong>, the linked <strong class="font-semibold text-gray-800">PO line, model, and lot ID</strong>, the <strong class="font-semibold text-gray-800">controlled document ID and revision</strong>, and the <strong class="font-semibold text-gray-800">record or evidence ID</strong>.</li>
<li><strong class="font-semibold text-gray-800">Pre-existing visual or mechanical observation results:</strong> Where required by the applicable approved inspection plan, also log any pre-existing visual or mechanical observation results alongside their linked PO/model, lot ID, controlled document ID/revision, and record/evidence ID.</li>
<li><strong class="font-semibold text-gray-800">Strict non-testing boundary:</strong> This workflow recommends <strong class="font-semibold text-gray-800">retaining and logging pre-existing approved records only</strong>. It does <strong class="font-semibold text-gray-800">not</strong> teach or authorize new on-site test procedures, test steps, electrical probing, energized tests, insulation tests, terminal mapping, wiring, assembly, sampling plans, sample counts, dimensional tolerances, acceptance thresholds, or product pass guarantees.</li>
</ul>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Layer-Appropriate Identity Checks, Catalog Boundaries, and Traceability Linkage</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Effective receiving verifies each packaging layer for the specific fields that legitimately belong at that layer—rather than demanding that every physical unit label reproduce the entire purchase order or drawing text character-for-character.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Checking Each Layer for Its Applicable Identity Fields</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Segregate mixed lots on arrival and record observed layer fields against the corresponding baseline document. Where a physical lamp-voltage label or code actually exists and applies to the ordered model, record the observed text verbatim and cross-check it against the PO and signed model documentation—never assume a catalog field code must appear on every physical unit or treat a printed label as an electrical test conclusion.</p>
<div aria-label="Checking Each Layer for Its Applicable Identity Fields table" class="mb-5 max-w-full overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-green-700" role="region" tabindex="0"><table class="w-full border-collapse text-left text-sm text-gray-600">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Receiving Layer</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Appropriate Fields to Check at This Layer</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Primary Baseline Reference</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Routing Trigger on Exception</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Shipment paperwork (delivery note / packing list)</td>
<td class="border border-gray-200 px-3 py-2 align-top">PO number, PO line, ordered model reference, shipment quantity, lot/batch reference, accompanied controlled document IDs and revisions</td>
<td class="border border-gray-200 px-3 py-2 align-top">Released PO line &amp; required controlled document list</td>
<td class="border border-gray-200 px-3 py-2 align-top">Route to <strong class="font-semibold text-gray-800">Hold</strong> if required controlled documents, revisions, approved records, or PO-specified files are pending or wrong revision</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Outer carton label</td>
<td class="border border-gray-200 px-3 py-2 align-top">Carton model designation, carton quantity, supplier lot or batch ID, and observed lamp-voltage label/code only where physically present and applicable to the ordered model</td>
<td class="border border-gray-200 px-3 py-2 align-top">Delivery note, frozen PO line &amp; signed model documentation</td>
<td class="border border-gray-200 px-3 py-2 align-top">Route to <strong class="font-semibold text-gray-800">Quarantine</strong> on confirmed model, lot, or marking mismatch</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Inner bag / inner box label</td>
<td class="border border-gray-200 px-3 py-2 align-top">Inner-pack model text, inner quantity, lot/batch continuity within multi-bag cartons, and observed lamp-voltage label/code only where physically present and applicable to the ordered model</td>
<td class="border border-gray-200 px-3 py-2 align-top">Outer carton label, frozen PO line &amp; signed model documentation</td>
<td class="border border-gray-200 px-3 py-2 align-top">Segregate mixed inner packs into separate rows; route confirmed label or lot mismatch to <strong class="font-semibold text-gray-800">Quarantine</strong></td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Physical unit markings</td>
<td class="border border-gray-200 px-3 py-2 align-top">Visible unit markings, legends, exterior stamps, and observed physical lamp-voltage marking/code only where physically present and applicable to the ordered model (not expected to repeat full PO/drawing text)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Frozen PO line &amp; signed drawing/artwork/model documentation</td>
<td class="border border-gray-200 px-3 py-2 align-top">Route to <strong class="font-semibold text-gray-800">Quarantine</strong> on confirmed marking mismatch against approved order documents; never infer physical electrical conditions from a label</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Pre-existing approved inspection records (per approved plan)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Pre-existing visual/mechanical observation result (if required), pre-existing de-energized verification result, linked PO/model &amp; lot, controlled doc ID/rev, record/evidence ID</td>
<td class="border border-gray-200 px-3 py-2 align-top">Applicable approved inspection plan &amp; PO baseline</td>
<td class="border border-gray-200 px-3 py-2 align-top">Route to <strong class="font-semibold text-gray-800">Hold</strong> if required records are pending, show an abnormal result, or leave the approved plan unsatisfied (with no confirmed identity mismatch); route to <strong class="font-semibold text-gray-800">Quarantine</strong> if linked model/lot data confirm a mismatch with the shipment</td>
</tr>
</tbody>
</table></div>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Catalog Evidence Boundaries: Why Photos, Codes, and Outlines Are Not Acceptance Criteria</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">When reviewing supplier catalog excerpts (original PDF p.64–71, printed p.6–13) alongside incoming shipments, keep three documented catalog boundaries clear:</p>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Adjacent catalog photo discrepancy (PDF p.67):</strong> On supplier catalog PDF p.67, the sample photograph placed adjacent to the <code class="[overflow-wrap:anywhere]">-01</code> emergency-stop row (nominally <code class="[overflow-wrap:anywhere]">1NC</code>) visibly displays <code class="[overflow-wrap:anywhere]">13–14 (NO)</code>. Treat this solely as an example of a <strong class="font-semibold text-gray-800">discrepancy between neighboring catalog contents</strong>. That catalog photo does <strong class="font-semibold text-gray-800">not</strong> prove the actual terminals of any ordered product, nor does it prove a physical mismatch on received goods, safety function, IP rating, or compliance. Incoming shipments for exact models must be verified strictly against the PO, signed drawings, and approved records.</li>
<li><strong class="font-semibold text-gray-800">Catalog lamp-voltage codes as printed references only (PDF p.65, p.69):</strong> Supplier catalog PDF p.65 and p.69 print lamp-voltage ordering codes such as <code class="[overflow-wrap:anywhere]">28</code> and <code class="[overflow-wrap:anywhere]">31</code> strictly as catalog ordering-table references. Do <strong class="font-semibold text-gray-800">not</strong> extrapolate catalog field codes as mandatory physical unit markings, do <strong class="font-semibold text-gray-800">not</strong> infer physical electrical conditions from printed labels, and record a physical lamp-voltage marking at receiving only when it actually exists and applies to the ordered model.</li>
<li><strong class="font-semibold text-gray-800">Catalog outline drawings as identification references only (PDF p.66, p.70):</strong> The <code class="[overflow-wrap:anywhere]">-10</code> end-view and side-view outline drawings printed on supplier catalog PDF p.66 (Type A) and p.70 (Type B) serve strictly as <strong class="font-semibold text-gray-800">visual identification references</strong>. They cannot be used alone as incoming acceptance dimensions or pass/fail conclusions. Similarly, general series-level catalog data lack model-level test methods, measurement conditions, and acceptance standards, so they cannot serve as receiving pass/fail thresholds.</li>
</ul>
<figure class="my-6"><img alt="Conceptual receiving traceability diagram linking PO line, signed drawing revision, carton, bag, and unit labels, lot ID, and photo or record ID, accompanied by catalog PDF p.66 and p.70 -10 end and side views for identification only" class="rounded-xl border border-gray-100" decoding="async" height="900" loading="lazy" src="/optimized/display/images/blog/eb2m-type-a-vs-type-b-receiving-id-guide-v2.webp" width="1200"/><figcaption class="mt-2 text-sm leading-6 text-gray-600">Traceability linkage connecting the PO line, signed drawing revision, carton/bag/unit labels, lot ID, and photo/record ID, accompanied by supplier catalog PDF p.66 and p.70 <code class="[overflow-wrap:anywhere]">-10</code> end-view and side-view outlines strictly for visual identification. Conceptual diagram with catalog outline reference only (not a product photograph); outlines do not define acceptance dimensions or test procedures.</figcaption></figure>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Configurable Photo Evidence Fields and Placeholder File-Naming Template</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Visual capture at receiving is best configured per each facility's or project's approved receiving procedure rather than enforced as a fixed photo count or sampling quota. Where photo logging is used, apply a consistent bracket-placeholder naming convention that links each file cleanly to a single receiving log row:</p>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Copyable filename template:</strong> <code class="[overflow-wrap:anywhere]">[YYYYMMDD]_PO[PO_Number]_L[Line_Number]_LOT[Lot_ID]_[Evidence_Field]_[Seq].[ext]</code></li>
</ul>
<div aria-label="Configurable Photo Evidence Fields and Placeholder File-Naming Template table" class="mb-5 max-w-full overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-green-700" role="region" tabindex="0"><table class="w-full border-collapse text-left text-sm text-gray-600">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Configurable Evidence Field</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Placeholder Tag</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Traceability Context Captured (Per Facility Approved Procedure)</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Shipment paperwork packet</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[DOC]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Delivery note, packing list, and controlled document/revision headers tied to the PO line</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Outer carton label</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[CTN]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Outer container model text, quantity, lot/batch ID, and applicable lamp-voltage label if present prior to unsealing</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Inner bag / box label</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[BAG]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Inner-pack model text, lot/batch continuity, and applicable lamp-voltage label if present inside the shipping container</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Visible unit marking</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[UNIT]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Applicable exterior markings, actuator legends, or present physical lamp-voltage marking logged against approved model documents</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Discrepancy evidence</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[DISC]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Confirmed mismatch captured alongside a status tag displaying <code class="[overflow-wrap:anywhere]">[PO_Number]</code>, <code class="[overflow-wrap:anywhere]">[Line_Number]</code>, and <code class="[overflow-wrap:anywhere]">[Lot_ID]</code></td>
</tr>
</tbody>
</table></div>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Copyable Master Receiving Evidence Log and Generic Workflow Demonstration</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Maintain one structured receiving log per incoming shipment so warehouse, quality, and procurement teams can trace every lot, applicable physical marking, pre-existing approved record, written disposition archive, and authorization sign-off without reopening sealed containers.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Copyable Master Receiving Evidence Table</h3>
<div aria-label="Copyable Master Receiving Evidence Table table" class="mb-5 max-w-full overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-green-700" role="region" tabindex="0"><table class="w-full border-collapse text-left text-sm text-gray-600 min-w-[960px]">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">PO Line &amp; Frozen Model Text</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Signed Drawing / Controlled Doc ID &amp; Rev</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Delivery Note, Layer Labels &amp; Applicable Lamp-Voltage Marking</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Lot / Batch ID</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Pre-Existing Approved Results &amp; Record IDs (Observation / De-Energized Result, Doc ID/Rev, Photo/Evidence ID)</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Discrepancy / Unmet Gate Description</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Disposition Status</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Written Disposition Ref &amp; Authorized Sign-Off</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[PO_Number]-[Line_Number] / [Frozen_Model_Text]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Controlled_Doc_ID] / [Rev]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[DN_Number]; [Carton_Fields]; [Bag_Fields]; [Applicable_Unit_Markings]; Lamp-Voltage Label (only if applicable &amp; present): [Observed_Text_or_N/A]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Lot_ID]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">Obs: [Pre-Existing_Observation_Result or N/A]; De-Energized: [Pre-Existing_Result]; Plan/Doc: [Doc_ID / Rev]; Record/Photo: [Record_ID; Photo_IDs]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[None / Pending Evidence / Abnormal Pre-Existing Result / Unmet Plan / Pending Sign-Off / Confirmed Identity Mismatch]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Release / Hold / Quarantine]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">Written Disp. Ref (if any): [Disp_Doc_ID_or_N/A]; [Inspector, Date] / [Designated_Authorizer_Sign-Off, Date]</code></td>
</tr>
</tbody>
</table></div>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Generic Receiving Documentation Workflow Demonstration (Placeholder Template Only)</h3>
<p class="mb-4 text-sm leading-7 text-gray-600"><em>Scope note: The four rows below illustrate a <strong class="font-semibold text-gray-800">generic receiving documentation workflow demonstration</strong> using bracket placeholders only. They cover <code class="[overflow-wrap:anywhere]">Release</code>, <code class="[overflow-wrap:anywhere]">Hold</code> (pending evidence), <code class="[overflow-wrap:anywhere]">Hold</code> (abnormal pre-existing record result / unmet approved plan / pending authorization sign-off), and <code class="[overflow-wrap:anywhere]">Quarantine</code> (confirmed identity mismatch). Any written disposition outcome is determined by the designated authorized person per approved documents and is not preset by this template; rows do not represent real customer shipments, supplier incidents, or confirmed complete product part numbers.</em></p>
<div aria-label="Generic Receiving Documentation Workflow Demonstration (Placeholder Template Only) table" class="mb-5 max-w-full overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-green-700" role="region" tabindex="0"><table class="w-full border-collapse text-left text-sm text-gray-600 min-w-[960px]">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">PO Line &amp; Frozen Model Text</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Signed Drawing / Controlled Doc ID &amp; Rev</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Delivery Note, Layer Labels &amp; Applicable Lamp-Voltage Marking</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Lot / Batch ID</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Pre-Existing Approved Results &amp; Record IDs (Observation / De-Energized Result, Doc ID/Rev, Photo/Evidence ID)</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Discrepancy / Unmet Gate Description</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Disposition Status</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Written Disposition Ref &amp; Authorized Sign-Off</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[PO_Number]-[Line_A] / [Frozen_Model_A]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Drawing_ID_A] / [Rev_Approved]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[DN_Number]</code>; carton, bag, applicable unit markings, and applicable present lamp-voltage label align with PO baseline and <code class="[overflow-wrap:anywhere]">[Drawing_ID_A] / [Rev_Approved]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Lot_ID_A]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">Obs: [Logged_Pre-Existing_Result per Approved Plan]; De-Energized: [Logged_Pre-Existing_Result]; Doc: [Plan_Doc_ID / Rev]; Evidence: [Record_ID_A]; [Photo_IDs]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">None; evidence complete and consistent, applicable approved plan satisfied</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">Release</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">Written Disp. Ref: [N/A or Archived_Disp_ID]; [Inspector, Date] / [Designated_Authorizer_Sign-Off, Date]</code> (Signed prior to stock transfer)</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[PO_Number]-[Line_B] / [Frozen_Model_B]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Drawing_ID_B] / [Rev_Approved]</code> (PO baseline)</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[DN_Number]</code>; carton, bag, and unit labels show no identity conflict with <code class="[overflow-wrap:anywhere]">[Frozen_Model_B]</code>; applicable lamp-voltage label: <code class="[overflow-wrap:anywhere]">[Observed_Text_or_N/A]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Lot_ID_B]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">Obs: [Pending]; De-Energized: [Pending_Approved_Record]; Photo: [DOC/CTN_Photo_IDs]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">No confirmed identity mismatch, but required <code class="[overflow-wrap:anywhere]">[Rev_Approved]</code> document, PO-specified file, or pre-existing approved record is pending</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">Hold</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">Stop stock transfer; awaiting documents and written disposition/sign-off by [Designated_Authorizer] per approved documents</code></td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[PO_Number]-[Line_C] / [Frozen_Model_C]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Drawing_ID_C] / [Rev_Approved]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[DN_Number]</code>; carton, bag, and unit labels show no confirmed identity mismatch with <code class="[overflow-wrap:anywhere]">[Frozen_Model_C]</code>; applicable lamp-voltage label: <code class="[overflow-wrap:anywhere]">[Observed_Text_or_N/A]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Lot_ID_C]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">Obs: [Logged_Pre-Existing_Result]; De-Energized: [Logged_Abnormal_Result]; Doc: [Plan_Doc_ID / Rev]; Evidence: [Record_ID_C]; [Photo_IDs]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">No confirmed identity mismatch, but pre-existing approved record shows an abnormal result, applicable approved plan is not satisfied, or authorization sign-off is pending</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">Hold</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">Stop stock transfer; held pending written disposition determined by [Designated_Authorizer] per approved documents and archived closure</code></td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[PO_Number]-[Line_D] / [Frozen_Model_D]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Drawing_ID_D] / [Rev_Approved]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[DN_Number]</code>; outer carton aligns with PO line, but inner bag, unit marking, or applicable present lamp-voltage label contradicts <code class="[overflow-wrap:anywhere]">[Frozen_Model_D]</code> or <code class="[overflow-wrap:anywhere]">[Lot_ID_D]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">[Lot_ID_D]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">Obs/De-Energized: [N/A — Stopped on Confirmed Mismatch]; Evidence: [DISC_Photo_IDs]</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Confirmed model, lot, or marking mismatch against frozen PO baseline and signed model documentation</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">Quarantine</code></td>
<td class="border border-gray-200 px-3 py-2 align-top"><code class="[overflow-wrap:anywhere]">Physically segregated in designated quarantine area; awaiting written disposition by [Designated_Authorizer] per approved documents and logged closure</code></td>
</tr>
</tbody>
</table></div>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Three-Branch Disposition Decision Rules (<code class="[overflow-wrap:anywhere]">Release</code>, <code class="[overflow-wrap:anywhere]">Hold</code>, <code class="[overflow-wrap:anywhere]">Quarantine</code>)</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Disposition at receiving follows <strong class="font-semibold text-gray-800">exactly three branches</strong> (<code class="[overflow-wrap:anywhere]">Release</code>, <code class="[overflow-wrap:anywhere]">Hold</code>, and <code class="[overflow-wrap:anywhere]">Quarantine</code>) governed by documentary completeness, approved-plan satisfaction, recorded-result status, identity alignment, written disposition archiving (where applicable), and designated authorization. <strong class="font-semibold text-gray-800">Whenever any release gate is unmet—including an abnormal pre-existing record result, an unsatisfied approved plan, or pending authorization sign-off—physical transfer to stock must stop immediately. Goods must never be transferred to stock first with authorization sign-off added retroactively.</strong></p>
<figure class="my-6"><img alt="Conceptual three-branch receiving disposition decision tree routing lots to Release after complete evidence, approved plan satisfaction, and authorized sign-off, to Hold on missing documents or records, or to Quarantine on confirmed mismatch, preserving the PDF p.67 13-14 NO versus -01 1NC evidence distinction" class="rounded-xl border border-gray-100" decoding="async" height="900" loading="lazy" src="/optimized/display/images/blog/eb2m-iqc-continuity-quarantine-decision-tree-v2.webp" width="1200"/><figcaption class="mt-2 text-sm leading-6 text-gray-600">Conceptual three-branch receiving disposition logic (<code class="[overflow-wrap:anywhere]">Release</code>, <code class="[overflow-wrap:anywhere]">Hold</code>, <code class="[overflow-wrap:anywhere]">Quarantine</code>) preserving the PDF p.67 <code class="[overflow-wrap:anywhere]">13–14 (NO)</code> vs. <code class="[overflow-wrap:anywhere]">-01</code> (<code class="[overflow-wrap:anywhere]">1NC</code>) evidence-level distinction. In this diagram, "evidence or inspection record pending" illustrates one common example of <code class="[overflow-wrap:anywhere]">Hold</code>; refer to the Three-Branch Disposition and Authorization Gate Table below for the complete set of <code class="[overflow-wrap:anywhere]">Hold</code> conditions—including abnormal results in pre-existing approved records, unsatisfied approved plans, or pending authorization sign-off where no confirmed identity mismatch exists. Conceptual graphic only (does not draw every exception-branch detail, and depicts no numerical thresholds, probes, or new tests).</figcaption></figure>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Three-Branch Disposition and Authorization Gate Table</h3>
<div aria-label="Three-Branch Disposition and Authorization Gate Table table" class="mb-5 max-w-full overflow-x-auto rounded-sm focus-visible:outline-2 focus-visible:outline-green-700" role="region" tabindex="0"><table class="w-full border-collapse text-left text-sm text-gray-600">
<thead class="bg-gray-50">
<tr>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Disposition Branch</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Trigger Condition</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Immediate Receiving Action</th>
<th class="border border-gray-200 px-3 py-2 font-semibold text-gray-900" scope="col">Mandatory Authorization &amp; Closure Gate</th>
</tr>
</thead>
<tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><strong class="font-semibold text-gray-800">Release</strong> (Transfer to Stock)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Layer identity fields (including applicable physical lamp-voltage markings where present) align with PO and signed model documents; evidence is complete and consistent; the order's applicable approved inspection plan is fully satisfied (with no unresolved abnormal pre-existing record results); any PO-specified project documents are scope-verified; and any required written disposition is archived</td>
<td class="border border-gray-200 px-3 py-2 align-top">Complete master receiving log row, attach configured photo/record IDs, and keep cartons at dock until authorization signature is recorded</td>
<td class="border border-gray-200 px-3 py-2 align-top"><strong class="font-semibold text-gray-800">Designated authorized person signs off before physical transfer to stock</strong> (with any applicable written disposition archived). Never transfer goods into stock first and complete sign-off later</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><strong class="font-semibold text-gray-800">Hold</strong> (Awaiting Authorized Disposition)</td>
<td class="border border-gray-200 px-3 py-2 align-top"><strong class="font-semibold text-gray-800">No confirmed model, lot, or marking identity mismatch</strong>, but release conditions are not met—common example: required controlled documents, revisions, PO-specified files, or pre-existing approved records are pending; <strong class="font-semibold text-gray-800">also applies</strong> whenever pre-existing approved records are complete but show an abnormal result, the applicable approved inspection plan is not satisfied, or designated authorization sign-off has not yet been recorded</td>
<td class="border border-gray-200 px-3 py-2 align-top"><strong class="font-semibold text-gray-800">Stop transfer to stock immediately</strong>; affix visible <code class="[overflow-wrap:anywhere]">HOLD</code> tag citing <code class="[overflow-wrap:anywhere]">[PO_Number]</code>, <code class="[overflow-wrap:anywhere]">[Line_Number]</code>, and <code class="[overflow-wrap:anywhere]">[Lot_ID]</code>; log exact pending items, abnormal record reference, or unmet plan condition</td>
<td class="border border-gray-200 px-3 py-2 align-top">Missing evidence reconciled or abnormal/unmet condition reviewed by the designated authorized person; written disposition (determined per approved documents, without presetting the outcome) archived and designated authorizer signs off before any <code class="[overflow-wrap:anywhere]">Release</code></td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top"><strong class="font-semibold text-gray-800">Quarantine</strong> (Physical Segregation)</td>
<td class="border border-gray-200 px-3 py-2 align-top"><strong class="font-semibold text-gray-800">Used strictly when there is a confirmed mismatch</strong> in model designation, lot/batch identifier, or visible markings (including applicable present lamp-voltage markings) against the PO line, signed drawing/model revision, or linked approved records</td>
<td class="border border-gray-200 px-3 py-2 align-top"><strong class="font-semibold text-gray-800">Stop transfer to stock and halt receiving processing immediately</strong>; capture <code class="[overflow-wrap:anywhere]">[DISC]</code> photo if configured; affix visible <code class="[overflow-wrap:anywhere]">QUARANTINE</code> tag; move affected containers physically to a designated segregated quarantine area</td>
<td class="border border-gray-200 px-3 py-2 align-top">Designated authorized person completes review in accordance with approved documents; written disposition (outcome not preset) and closure record logged and signed before closing the quarantine record</td>
</tr>
</tbody>
</table></div>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Containment, Immutable Audit Trails, and Closure Discipline</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">When a shipment routes to <code class="[overflow-wrap:anywhere]">Hold</code> or <code class="[overflow-wrap:anywhere]">Quarantine</code>, maintain six control steps to protect traceability:</p>
<ol class="my-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Stop stock transfer and tag every affected container:</strong> Halt movement into inventory immediately and attach a visible <code class="[overflow-wrap:anywhere]">HOLD</code> or <code class="[overflow-wrap:anywhere]">QUARANTINE</code> tag displaying <code class="[overflow-wrap:anywhere]">[PO_Number]</code>, <code class="[overflow-wrap:anywhere]">[Line_Number]</code>, <code class="[overflow-wrap:anywhere]">[Lot_ID]</code>, <code class="[overflow-wrap:anywhere]">[Date]</code>, <code class="[overflow-wrap:anywhere]">[Inspector_Name]</code>, and the receiving log reference.</li>
<li><strong class="font-semibold text-gray-800">Segregate confirmed mismatches physically in a designated quarantine area:</strong> For <code class="[overflow-wrap:anywhere]">Quarantine</code> lots (confirmed model, lot, or marking mismatch), move packages out of active receiving and general picking zones into a clearly marked, designated segregated quarantine area so mismatched items cannot enter production inadvertently. Keep <code class="[overflow-wrap:anywhere]">Hold</code> lots out of released stock until written disposition and sign-off are complete.</li>
<li><strong class="font-semibold text-gray-800">Keep initial records immutable:</strong> Preserve all original receiving log rows, discrepancy or abnormal-result entries, and photo files unedited. When a written disposition or closure arrives, append a dated closure entry referencing the original log row rather than overwriting the initial record.</li>
<li><strong class="font-semibold text-gray-800">Prohibit unauthorized relabeling or ad hoc testing:</strong> Receiving staff must not relabel inner bags, swap components, or run unapproved on-site electrical, mechanical, or dimensional tests to clear a <code class="[overflow-wrap:anywhere]">Hold</code> or <code class="[overflow-wrap:anywhere]">Quarantine</code> lot.</li>
<li><strong class="font-semibold text-gray-800">Archive written disposition per approved documents without presetting outcomes:</strong> Before closing a <code class="[overflow-wrap:anywhere]">Hold</code> or <code class="[overflow-wrap:anywhere]">Quarantine</code> entry, archive the written disposition determined by the designated authorized person in accordance with approved documents, along with any referenced controlled document ID and revision and the closure authority signature.</li>
<li><strong class="font-semibold text-gray-800">Respect the boundary of receiving release:</strong> Receiving sign-off confirms <strong class="font-semibold text-gray-800">documentary completeness, lot-identity alignment, approved-plan satisfaction, and archived written disposition/authorization only</strong>—it does not constitute a product performance or safety guarantee. For any emergency-stop switch or safety-related control device, final machine-safety circuit design and validation remain the responsibility of a qualified engineer under applicable machinery safety standards.</li>
</ol>
</div>`,
      closingHtml: `<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Need Controlled Order Documentation to Support EB2M Receiving Traceability?</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Review the EB2M product overview on our <a class="text-green-700 underline hover:text-green-900" href="/solutions/22mm-push-button-switch">22mm push button switch solutions page</a> or browse our <a class="text-green-700 underline hover:text-green-900" href="/products">industrial component catalog</a>. When your team needs controlled drawing revisions or order-level documentation aligned to a purchase order baseline prior to shipment, <a class="text-green-700 underline hover:text-green-900" href="/contact">contact our technical team</a>.</p>`,
      sourcesHtml: `<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Sources and Verification Scope</h2>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Supplier Catalog Source:</strong> EB2M-A and EB2M-B 22mm Push Button Switch Supplier Catalog, original PDF p.64–71 (printed p.6–13; Type A p.64–67, Type B p.68–71), referenced specifically for printed lamp-voltage ordering-table references (<code class="[overflow-wrap:anywhere]">28</code>, <code class="[overflow-wrap:anywhere]">31</code> on p.65 and p.69—catalog code references only, not mandatory physical markings or electrical conditions), the <code class="[overflow-wrap:anywhere]">-10</code> end-view and side-view catalog identification outlines (p.66, p.70), and the adjacent sample-photo discrepancy context on p.67 (<code class="[overflow-wrap:anywhere]">13–14 (NO)</code> visible adjacent to <code class="[overflow-wrap:anywhere]">-01</code> nominal <code class="[overflow-wrap:anywhere]">1NC</code>). Catalog pages do not publish model-level incoming acceptance criteria, test conditions, dimensional tolerances, sampling plans, or model-level compliance documents.</li>
<li><strong class="font-semibold text-gray-800">Related Guides on This Site:</strong> <a class="text-green-700 underline hover:text-green-900" href="/blog/how-to-choose-22mm-push-button-switch">How to Choose a 22mm Push Button Switch</a> · <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-emergency-stop-button-twist-release-guide">22mm Emergency Stop Button Guide</a> · <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-selector-switch-key-switch-spring-return-hand-off-auto">22mm Selector and Key Switch Guide</a> · <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-push-button-switch-wiring-installation-guide">22mm Push Button Switch Wiring and Installation Guide</a> · <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-illuminated-push-button-voltage-color-guide">22mm Illuminated Push Button Voltage and Color Guide</a> · <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-push-button-ip40-ip65-industrial-applications">22mm Push Button IP40/IP65 Industrial Applications Guide</a></li>
</ul>`,
      faq: [
        {
          question: "How should receiving log pre-existing de-energized verification results or visual/mechanical observation results generated under an approved inspection plan?",
          answer: "Record the actual pre-existing result, the linked PO line, ordered model, and lot ID, the controlled document ID and revision, and the record or evidence ID inside the master receiving log. If the applicable approved inspection plan calls for pre-existing visual or mechanical observation records, log those fields the same way. This recommended workflow retains pre-existing approved records only—it does not prescribe new on-site test procedures, thresholds, tolerances, sampling plans, energized or insulation tests, or pass guarantees.",
        },
        {
          question: "What separates Release, Hold, and Quarantine, and what happens if approved records are complete but show an abnormal result or sign-off is still pending?",
          answer: "Stop transfer to stock immediately whenever any release gate is unmet. Use Quarantine strictly when there is a confirmed mismatch in model, lot, or visible markings, physically segregating the lot in a designated quarantine area until the designated authorized person issues a written disposition per approved documents and logs closure. Use Hold for all other unmet release conditions where no confirmed identity mismatch exists—pending documents or records are a common example, and Hold also governs lots where pre-existing approved records show an abnormal result, the applicable approved plan is not satisfied, or authorization sign-off is still pending, awaiting written disposition per approved documents without presetting the outcome. Use Release (transfer to stock) only when the order's applicable approved plan is satisfied, evidence is complete and consistent, any written disposition is archived, and the designated authorized person has signed off—never transfer goods to stock first and sign off retroactively.",
        },
        {
          question: "Does every physical unit label need to match the entire PO text, how should lamp-voltage markings be recorded, and can PDF p.66/p.70 -10 outlines serve as acceptance dimensions?",
          answer: "Each receiving layer should be checked only for the identity fields that belong at that layer rather than expecting a unit label to repeat an entire PO or drawing. Record an observed physical lamp-voltage label or code only when it actually exists and applies to the ordered model, cross-checking it against the PO and signed model documentation; supplier catalog PDF p.65 and p.69 print voltage codes such as 28 and 31 strictly as catalog references, so do not assume catalog codes must appear on every physical unit or infer electrical conditions from a label. Likewise, the -10 end-view and side-view outlines on supplier catalog PDF p.66 and p.70 serve strictly as visual identification references and cannot be used alone as acceptance dimensions or pass/fail conclusions.",
        },
        {
          question: "What does the 13–14 (NO) marking visible on the photo adjacent to -01 (1NC) on supplier catalog PDF p.67 mean for incoming receiving?",
          answer: "It serves solely as an example of a discrepancy between neighboring catalog contents. That catalog photograph does not prove the actual terminals of any ordered product, prove a physical mismatch on received goods, or establish safety functions, IP ratings, or compliance. Verify incoming goods for exact ordered models strictly against the released PO line, supplier-signed controlled drawings, and applicable approved records.",
        },
        {
          question: "How should general catalog series data and PO-specified project compliance files be handled at receiving?",
          answer: "General catalog series data lack model-level test methods, measurement conditions, and acceptance criteria, so they must never be used directly as incoming pass/fail thresholds. Where a purchase order explicitly requires project compliance documentation, verify at receiving only that the specified document is present, current, and matches the issuing entity and exact scope defined by the PO—never treat it as an assumed general product certification. Remember also that this receiving workflow is a recommended operational practice, not a statutory or industry-mandatory standard.",
        },
      ],
    },
  },
] as const
