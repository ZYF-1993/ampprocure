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
      articleHtml: `<div class="prose-custom eb2m-guide">
<p class="mb-4 text-sm leading-7 text-gray-600">When specifying EB2M-A and EB2M-B 22mm operators on a control panel bill of materials, treating double push buttons and <code class="[overflow-wrap:anywhere]">/FH</code> symbol-marked flush buttons as interchangeable creates a risk of mismatched head styles, wrong legend codes, or inverted actuator markings. Across the supplier catalog sections for these two series (PDF p.64–71, printed p.6–13), three double push button head groups sit alongside four <code class="[overflow-wrap:anywhere]">/FH</code> marked flush model rows, each governed by distinct printed legend scopes, differing sample-photo orientations, and unexpanded multi-option ordering boundaries that require verification before order placement.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">This guide focuses strictly on head-style recognition, catalog legend grouping (<code class="[overflow-wrap:anywhere]">R</code>, <code class="[overflow-wrap:anywhere]">R1–R7</code>, and <code class="[overflow-wrap:anywhere]">/FH</code> symbols <code class="[overflow-wrap:anywhere]">1–12</code>), sample-photo discrepancy checks, and an executable buyer artwork verification workflow. For broader switch-family selection, see our <a class="text-green-700 underline hover:text-green-900" href="/blog/how-to-choose-22mm-push-button-switch">22mm push button switch selection guide</a>; for installation and wiring verification, see the <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-push-button-switch-wiring-installation-guide">22mm push button wiring and installation guide</a>; and for lamp-voltage or indicator color guidance, see the <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-illuminated-push-button-voltage-color-guide">22mm illuminated push button voltage and color guide</a>.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Double Push Buttons and <code class="[overflow-wrap:anywhere]">/FH</code> Symbol-Marked Flush Models</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Before assigning legend codes on a BOM line, buyers should separate two structurally distinct operator entries in the EB2M catalog: dual-actuator double push buttons (<code class="[overflow-wrap:anywhere]">-11PRG</code>/<code class="[overflow-wrap:anywhere]">-11PDRG</code>, <code class="[overflow-wrap:anywhere]">-11HRG</code>/<code class="[overflow-wrap:anywhere]">-11HDRG</code>, <code class="[overflow-wrap:anywhere]">-11RG</code>/<code class="[overflow-wrap:anywhere]">-11DRG</code>) and single-actuator <code class="[overflow-wrap:anywhere]">/FH</code> symbol-marked flush models (<code class="[overflow-wrap:anywhere]">-10/FH○</code>, <code class="[overflow-wrap:anywhere]">-10T/FH○</code>, <code class="[overflow-wrap:anywhere]">-10D/FH○</code>, <code class="[overflow-wrap:anywhere]">-10DT/FH○</code>). Mixing their legend tables introduces a risk of invalid or mismatched marking specifications.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Nominal Codes and Verification Limits</h3>
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
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">EB2M Head Groups</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Within both the Type A (<code class="[overflow-wrap:anywhere]">EB2M-A</code>, PDF p.67) and Type B (<code class="[overflow-wrap:anywhere]">EB2M-B</code>, PDF p.71) sections, double push buttons are grouped into three distinct head styles: flat, extended, and oval. Checking each printed suffix helps prevent head-profile mix-ups during quotation review and artwork sign-off.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Flat, Extended, and Oval Heads</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Note a suffix detail across these three rows: the flat double push button group uses <code class="[overflow-wrap:anywhere]">P</code> (<code class="[overflow-wrap:anywhere]">-11PRG</code> and <code class="[overflow-wrap:anywhere]">-11PDRG</code>), which appears in the model tables on PDF p.67 and p.71 but is <strong class="font-semibold text-gray-800">not</strong> defined in the general letter key on PDF p.65 or p.69. The extended double group uses <code class="[overflow-wrap:anywhere]">H</code> (<code class="[overflow-wrap:anywhere]">-11HRG</code> and <code class="[overflow-wrap:anywhere]">-11HDRG</code>), while the oval double group omits both <code class="[overflow-wrap:anywhere]">P</code> and <code class="[overflow-wrap:anywhere]">H</code> (<code class="[overflow-wrap:anywhere]">-11RG</code> and <code class="[overflow-wrap:anywhere]">-11DRG</code>).</p>
<p class="mb-4 text-sm leading-7 text-gray-600">Compare the printed suffixes and legend scopes for EB2M-A and EB2M-B (PDF p.65–67, p.69–71).</p>
<ul id="head-groups" class="eb2m-card-list eb2m-head-grid" role="list">
<li id="flat-head" class="eb2m-card">
<h4>Flat double push button</h4>
<p><code class="[overflow-wrap:anywhere]">-11PRG</code>, <code class="[overflow-wrap:anywhere]">-11PDRG</code></p>
<p>Only <code class="[overflow-wrap:anywhere]">R1</code>, <code class="[overflow-wrap:anywhere]">R5</code> printed beside flat group</p>
</li>
<li id="extended-head" class="eb2m-card">
<h4>Extended double push button</h4>
<p><code class="[overflow-wrap:anywhere]">-11HRG</code>, <code class="[overflow-wrap:anywhere]">-11HDRG</code></p>
<p>Only <code class="[overflow-wrap:anywhere]">R1</code>, <code class="[overflow-wrap:anywhere]">R5</code> printed beside extended group</p>
</li>
<li id="oval-head" class="eb2m-card">
<h4>Oval double push button</h4>
<p><code class="[overflow-wrap:anywhere]">-11RG</code>, <code class="[overflow-wrap:anywhere]">-11DRG</code></p>
<p>Two columns: <code class="[overflow-wrap:anywhere]">R–R3</code> (green/red) and <code class="[overflow-wrap:anywhere]">R4–R7</code> (light gray/black)</p>
</li>
</ul>
<div id="double-head-notes" class="eb2m-note">
<p><strong class="font-semibold text-gray-800">All three double head groups</strong> · PDF p.65, p.67 right column (A), p.69, p.71 right column (B)</p>
<p>Momentary; <code class="[overflow-wrap:anywhere]">-11</code> nominal <code class="[overflow-wrap:anywhere]">1NO1NC</code>; <code class="[overflow-wrap:anywhere]">D</code> illuminated.</p>
<p>Actual terminal map, wiring, lamp circuit, safety function, and multi-option orderability require controlled documents and supplier sign-off.</p>
<p><strong class="font-semibold text-gray-800">Flat group only</strong> · <code class="[overflow-wrap:anywhere]">P</code> not listed in p.65/p.69 letter key.</p>
</div>
<div id="flush-head" class="eb2m-card">
<h3><code class="[overflow-wrap:anywhere]">/FH</code> symbol-marked flush push button</h3>
<dl class="eb2m-fields">
<div><dt>Printed fragments</dt><dd><code class="[overflow-wrap:anywhere]">-10/FH○</code>, <code class="[overflow-wrap:anywhere]">-10T/FH○</code>, <code class="[overflow-wrap:anywhere]">-10D/FH○</code>, <code class="[overflow-wrap:anywhere]">-10DT/FH○</code> (catalog fragments with <code class="[overflow-wrap:anywhere]">○</code> placeholder)</dd></div>
<div><dt>Nominal meaning</dt><dd><code class="[overflow-wrap:anywhere]">-10</code> nominal <code class="[overflow-wrap:anywhere]">1NO</code>; in order: momentary, maintained (<code class="[overflow-wrap:anywhere]">T</code>), illuminated momentary (<code class="[overflow-wrap:anywhere]">D</code>), illuminated maintained (<code class="[overflow-wrap:anywhere]">DT</code>; <code class="[overflow-wrap:anywhere]">TD</code> in Field 3 key)</dd></div>
<div><dt>Printed symbols</dt><dd>Symbols <code class="[overflow-wrap:anywhere]">1–12</code>; <code class="[overflow-wrap:anywhere]">(Customizable)</code> noted independently</dd></div>
<div><dt>Source and verification</dt><dd>PDF p.65, p.66 left-middle (A), p.69, p.70 left-middle (B); do not splice <code class="[overflow-wrap:anywhere]">○</code> into an orderable string; no standalone outline drawing in PDF p.66/p.70; verify outline/installation dimensions and electrical details via signed order-level documents</dd></div>
</dl>
</div>
<figure class="my-6"><img alt="Catalog side-view profile comparison diagram of Type A EB2M flat (-11PRG), extended (-11HRG), and oval (-11RG) 22mm double push button heads" class="rounded-xl border border-gray-100" decoding="async" height="900" loading="lazy" src="/optimized/display/images/blog/eb2m-double-button-head-profiles-comparison-v2.webp" width="1200"/><figcaption class="mt-2 text-sm leading-6 text-gray-600">Side-view profile comparison of Type A <code class="[overflow-wrap:anywhere]">-11PRG</code> (flat), <code class="[overflow-wrap:anywhere]">-11HRG</code> (extended), and <code class="[overflow-wrap:anywhere]">-11RG</code> (oval) double push button heads based on supplier catalog PDF p.67. Illustrative catalog profile diagram only (not a product photograph); verify all installation dimensions against the supplier-signed drawing for the exact ordered model.</figcaption></figure>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">What the Sample Photos Show</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Treating an embedded catalog photograph as a binding specification for actuator shape, center lens appearance, or marking orientation introduces ambiguity. Across supplier catalog PDF p.64, p.67, and p.71, four concrete visual discrepancies appear between sample photographs and model tables:</p>
<ol class="my-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Rectangular vs. oval actuator mismatch:</strong> The chapter cover photograph on PDF p.64 showing a red <code class="[overflow-wrap:anywhere]">O</code> actuator and a green <code class="[overflow-wrap:anywhere]">I</code> actuator depicts a <strong class="font-semibold text-gray-800">rectangular</strong> head—not an oval double push button. Combining that photo's markings with the oval model row creates an unsupported composite description.</li>
<li><strong class="font-semibold text-gray-800">Oval sample photos are unmarked with amber/orange centers:</strong> On PDF p.67 and p.71, the sample photographs placed next to the oval double push button rows (<code class="[overflow-wrap:anywhere]">-11RG</code>/<code class="[overflow-wrap:anywhere]">-11DRG</code>) show <strong class="font-semibold text-gray-800">blank</strong> end actuators (no printed characters) with an amber/orange center section—not a clear window flanked by printed <code class="[overflow-wrap:anywhere]">O</code> and <code class="[overflow-wrap:anywhere]">I</code> legends.</li>
<li><strong class="font-semibold text-gray-800">Orientation differs between Type A and Type B oval photos:</strong> The oval sample photographs on PDF p.67 (Type A) and PDF p.71 (Type B) do not share the same orientation.</li>
<li><strong class="font-semibold text-gray-800">Opposite <code class="[overflow-wrap:anywhere]">I/O</code> vertical orientation on flat and extended photos:</strong> On PDF p.67 and p.71, the <code class="[overflow-wrap:anywhere]">I/O</code> sample photographs beside the flat and extended double push button rows show opposite top-to-bottom orientations.</li>
</ol>
<p class="mb-4 text-sm leading-7 text-gray-600">Because of these documented differences, sample photos serve only as group-adjacent visual references. They do not confirm final shipped legend orientation, center lens optical state, or functional meaning of actuator colors.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Legends and Flush Symbols</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Reliable legend specification requires mapping each code strictly to the catalog group beside which it is printed and documenting every visual detail left unconfirmed by the catalog.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Double Push Button Legends</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">In supplier catalog PDF p.67 and p.71, the double push button legend codes are <strong class="font-semibold text-gray-800">not</strong> printed uniformly across all three head styles:</p>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li>Beside the <strong class="font-semibold text-gray-800">flat</strong> (<code class="[overflow-wrap:anywhere]">-11PRG</code>/<code class="[overflow-wrap:anywhere]">-11PDRG</code>) and <strong class="font-semibold text-gray-800">extended</strong> (<code class="[overflow-wrap:anywhere]">-11HRG</code>/<code class="[overflow-wrap:anywhere]">-11HDRG</code>) groups, the catalog lists <strong class="font-semibold text-gray-800">only <code class="[overflow-wrap:anywhere]">R1</code> and <code class="[overflow-wrap:anywhere]">R5</code></strong>.</li>
<li>Beside the <strong class="font-semibold text-gray-800">oval</strong> (<code class="[overflow-wrap:anywhere]">-11RG</code>/<code class="[overflow-wrap:anywhere]">-11DRG</code>) group, the catalog presents <strong class="font-semibold text-gray-800">two side-by-side columns</strong>: <code class="[overflow-wrap:anywhere]">R–R3</code> in the <strong class="font-semibold text-gray-800">green/red</strong> color group and <code class="[overflow-wrap:anywhere]">R4–R7</code> in the <strong class="font-semibold text-gray-800">light gray/black</strong> color group.</li>
</ul>
<table id="legend-groups" class="eb2m-table" aria-label="Double push button legend pairs" aria-describedby="legend-notes">
<thead><tr><th scope="col">Green/red</th><th scope="col">Light gray/black</th><th scope="col">Printed legend</th></tr></thead>
<tbody>
<tr><td><code class="[overflow-wrap:anywhere]">R</code></td><td><code class="[overflow-wrap:anywhere]">R4</code></td><td>Blank (no characters)</td></tr>
<tr><td><code class="[overflow-wrap:anywhere]">R1</code></td><td><code class="[overflow-wrap:anywhere]">R5</code></td><td><code class="[overflow-wrap:anywhere]">I/O</code></td></tr>
<tr><td><code class="[overflow-wrap:anywhere]">R2</code></td><td><code class="[overflow-wrap:anywhere]">R6</code></td><td><code class="[overflow-wrap:anywhere]">ON/OFF</code></td></tr>
<tr><td><code class="[overflow-wrap:anywhere]">R3</code></td><td><code class="[overflow-wrap:anywhere]">R7</code></td><td><code class="[overflow-wrap:anywhere]">START/STOP</code></td></tr>
</tbody>
</table>
<div id="legend-notes" class="eb2m-note">
<p><strong class="font-semibold text-gray-800">Source</strong> · PDF p.67 right column, p.71 right column.</p>
<p>Printed beside oval group (<code class="[overflow-wrap:anywhere]">-11RG</code>/<code class="[overflow-wrap:anywhere]">-11DRG</code>) only for <code class="[overflow-wrap:anywhere]">R</code>/<code class="[overflow-wrap:anywhere]">R4</code>, <code class="[overflow-wrap:anywhere]">R2</code>/<code class="[overflow-wrap:anywhere]">R6</code>, and <code class="[overflow-wrap:anywhere]">R3</code>/<code class="[overflow-wrap:anywhere]">R7</code>. Printed beside flat, extended, and oval groups for <code class="[overflow-wrap:anywhere]">R1</code>/<code class="[overflow-wrap:anywhere]">R5</code>.</p>
<ul>
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">R</code>/<code class="[overflow-wrap:anywhere]">R4</code></strong> · legend code <code class="[overflow-wrap:anywhere]">R</code> is distinct from Field-4 color code <code class="[overflow-wrap:anywhere]">R</code> (Red, PDF p.65/p.69); do not infer electrical function or orderable combinations from colors; flat/extended availability unknown pending sign-off.</li>
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">R1</code>/<code class="[overflow-wrap:anywhere]">R5</code></strong> · exact top-to-bottom orientation and typography unknown pending signed artwork.</li>
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">R2</code>/<code class="[overflow-wrap:anywhere]">R6</code></strong> · flat/extended availability and exact orientation unknown pending sign-off.</li>
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">R3</code>/<code class="[overflow-wrap:anywhere]">R7</code></strong> · <code class="[overflow-wrap:anywhere]">START/STOP</code> is printed catalog legend wording only and does not denote a safety or emergency-stop function; flat/extended availability unknown pending sign-off.</li>
</ul>
</div>
<p class="mb-4 text-sm leading-7 text-gray-600">Three mandatory safeguards apply when transferring these codes to an engineering BOM:</p>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Separate <code class="[overflow-wrap:anywhere]">R</code> legend codes, Field-4 color code <code class="[overflow-wrap:anywhere]">R</code>, and <code class="[overflow-wrap:anywhere]">/FH</code> symbols:</strong> On PDF p.65 and p.69, <code class="[overflow-wrap:anywhere]">R</code> in Field 4 represents the color Red (<code class="[overflow-wrap:anywhere]">R, G, Y, B, W, K</code>). On PDF p.67 and p.71, <code class="[overflow-wrap:anywhere]">R</code> in the oval legend block identifies the unmarked green/red legend variant paired with <code class="[overflow-wrap:anywhere]">R4</code>. Both are completely separate from the numbered <code class="[overflow-wrap:anywhere]">/FH</code> flush symbols (<code class="[overflow-wrap:anywhere]">1–12</code>). Keep dedicated BOM columns for <strong class="font-semibold text-gray-800">Actuator Color Requirement</strong>, <strong class="font-semibold text-gray-800">Double-Button Legend Code</strong>, and <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">/FH</code> Symbol Code</strong>.</li>
<li><strong class="font-semibold text-gray-800">Do not infer electrical functions, printing processes, or orderability from colors:</strong> Grouping <code class="[overflow-wrap:anywhere]">R–R3</code> (green/red) and <code class="[overflow-wrap:anywhere]">R4–R7</code> (light gray/black) describes the catalog legend layout only—never infer contact assignment, circuit behavior, printing method, or confirmed multi-option orderability from actuator colors.</li>
<li><strong class="font-semibold text-gray-800">Treat <code class="[overflow-wrap:anywhere]">START/STOP</code> strictly as printed legend text:</strong> Codes <code class="[overflow-wrap:anywhere]">R3</code> and <code class="[overflow-wrap:anywhere]">R7</code> represent catalog legend text only and confer no electrical or safety capability. Any emergency-stop or machine-safety circuit must be designed and validated by a qualified engineer under applicable machinery safety standards (see our <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-emergency-stop-button-twist-release-guide">22mm emergency stop button guide</a>).</li>
</ul>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900"><code class="[overflow-wrap:anywhere]">/FH</code> Symbols <code class="[overflow-wrap:anywhere]">1–12</code></h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Separately from the double push button <code class="[overflow-wrap:anywhere]">R</code> legend block and Field-4 color codes, supplier catalog PDF p.65, p.66, p.69, and p.70 enumerate 12 numbered symbols for single-actuator <code class="[overflow-wrap:anywhere]">/FH</code> flush push buttons (<code class="[overflow-wrap:anywhere]">-10/FH○</code>, <code class="[overflow-wrap:anywhere]">-10T/FH○</code>, <code class="[overflow-wrap:anywhere]">-10D/FH○</code>, <code class="[overflow-wrap:anywhere]">-10DT/FH○</code>). Pay close attention to codes <code class="[overflow-wrap:anywhere]">3</code> and <code class="[overflow-wrap:anywhere]">4</code>, which share an upward arrow direction but invert foreground and background contrast.</p>
<table id="flush-symbols" class="eb2m-table" aria-label="/FH numbered symbols" aria-describedby="flush-symbol-notes">
<thead><tr><th scope="col">Code</th><th scope="col">Printed symbol</th><th scope="col">Visual distinction</th></tr></thead>
<tbody>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">1</code></th><td><code class="[overflow-wrap:anywhere]">I</code></td><td>Single vertical bar symbol</td></tr>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">2</code></th><td><code class="[overflow-wrap:anywhere]">O</code></td><td>Closed circle symbol</td></tr>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">3</code></th><td>Black up-arrow on white background</td><td>Dark arrow on light field</td></tr>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">4</code></th><td>White up-arrow on black background</td><td>Light arrow on dark field (inverse of code <code class="[overflow-wrap:anywhere]">3</code>)</td></tr>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">5</code></th><td><code class="[overflow-wrap:anywhere]">II</code></td><td>Dual-bar symbol</td></tr>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">6</code></th><td><code class="[overflow-wrap:anywhere]">III</code></td><td>Triple-bar symbol</td></tr>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">7</code></th><td><code class="[overflow-wrap:anywhere]">START</code></td><td>English text legend</td></tr>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">8</code></th><td><code class="[overflow-wrap:anywhere]">STOP</code></td><td>English text legend</td></tr>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">9</code></th><td><code class="[overflow-wrap:anywhere]">ON</code></td><td>English text legend</td></tr>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">10</code></th><td><code class="[overflow-wrap:anywhere]">OFF</code></td><td>English text legend</td></tr>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">11</code></th><td><code class="[overflow-wrap:anywhere]">OPEN</code></td><td>English text legend</td></tr>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">12</code></th><td><code class="[overflow-wrap:anywhere]">CLOSE</code></td><td>English text legend</td></tr>
</tbody>
</table>
<div id="flush-symbol-notes" class="eb2m-note">
<p><strong class="font-semibold text-gray-800">Source for codes <code class="[overflow-wrap:anywhere]">1–12</code></strong> · PDF p.65, p.66, p.69, p.70.</p>
<ul>
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">1</code></strong> · exact glyph proportion and rotation unknown pending signed artwork.</li>
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">2</code></strong> · exact glyph proportion unknown pending signed artwork.</li>
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">3–4</code></strong> · contrast polarity and final panel direction must be locked in artwork sign-off.</li>
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">5–6</code></strong> · reading orientation unknown pending signed artwork.</li>
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">7 (START)</code></strong> · printed text legend only, does not define electrical or safety function.</li>
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">8 (STOP)</code></strong> · printed text legend only, does not define electrical or emergency-stop function.</li>
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">9–12</code></strong> · font proportion and cap color combination unknown pending sign-off.</li>
</ul>
</div>
<p class="mb-4 text-sm leading-7 text-gray-600">Four catalog boundaries govern <code class="[overflow-wrap:anywhere]">/FH</code> specification:</p>
<ol class="my-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">(Customizable)</code> is a catalog annotation independent of symbols <code class="[overflow-wrap:anywhere]">1–12</code>:</strong> The <code class="[overflow-wrap:anywhere]">(Customizable)</code> note on PDF p.66 and p.70 stands apart from the 12 numbered symbols. Do not assume specific customization scope, marking process, artwork file rules, or orderability without written supplier confirmation.</li>
<li><strong class="font-semibold text-gray-800">Do not splice <code class="[overflow-wrap:anywhere]">○</code> or assign the yellow sample photo to a numbered symbol:</strong> The <code class="[overflow-wrap:anywhere]">○</code> character in <code class="[overflow-wrap:anywhere]">-10/FH○</code> through <code class="[overflow-wrap:anywhere]">-10DT/FH○</code> is strictly a catalog placeholder and must not be spliced into a complete orderable string. Likewise, the yellow-head sample photo on PDF p.66 is unnumbered and must not be mapped to any specific symbol among <code class="[overflow-wrap:anywhere]">1–12</code>.</li>
<li><strong class="font-semibold text-gray-800">Color availability varies across catalog rows:</strong> While the series field key (PDF p.65, p.69) lists six color letters (<code class="[overflow-wrap:anywhere]">R, G, Y, B, W, K</code>), the five-color margin dots apply specifically to the shown illuminated flush push button and illuminated selector switch rows, whereas non-illuminated selector switches show a separate six-color example. Exact orderable colors and combinations for any <code class="[overflow-wrap:anywhere]">/FH</code> or double push button model require written supplier sign-off.</li>
<li><strong class="font-semibold text-gray-800">No standalone <code class="[overflow-wrap:anywhere]">/FH</code> outline drawing appears in the catalog:</strong> PDF p.66 and p.70 show <code class="[overflow-wrap:anywhere]">/FH</code> model rows and symbol references without a standalone outline drawing; verify all outline and installation dimensions against the supplier-signed drawing for the ordered model.</li>
</ol>
<figure class="my-6"><img alt="Re-typeset catalog legend reference diagram separating flat and extended R1 and R5 legends, two-column oval R to R7 legends, and standalone /FH symbols 1 to 12" class="rounded-xl border border-gray-100" decoding="async" height="900" loading="lazy" src="/optimized/display/images/blog/eb2m-double-legend-r1-r7-fh-symbol-map-v2.webp" width="1200"/><figcaption class="mt-2 text-sm leading-6 text-gray-600">Re-typeset catalog legend chart grouping <code class="[overflow-wrap:anywhere]">R1</code> and <code class="[overflow-wrap:anywhere]">R5</code> for flat and extended double push buttons, two-column oval legends (<code class="[overflow-wrap:anywhere]">R–R3</code> green/red and <code class="[overflow-wrap:anywhere]">R4–R7</code> light gray/black), and standalone <code class="[overflow-wrap:anywhere]">/FH</code> symbols <code class="[overflow-wrap:anywhere]">1–12</code> with <code class="[overflow-wrap:anywhere]">(Customizable)</code> noted independently, sourced from supplier catalog PDF p.65–67 and p.69–71. Reference diagram only (not a product photograph); applicable head groups, exact shipped orientation, and orderable combinations require written supplier confirmation.</figcaption></figure>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Orderable Combinations</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Neither the EB2M-A nor the EB2M-B catalog pages publish a complete orderability matrix mapping <strong class="font-semibold text-gray-800">head style × legend code × illumination × actuator color × lamp voltage</strong>, nor do they publish verified full orderable strings combining <code class="[overflow-wrap:anywhere]">/FH</code> symbols with colors and voltages. Splicing catalog fragments, legend codes, color letters, and voltage codes into a synthetic part number creates an unverified identifier with no catalog evidence of orderability.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">Instead, record the <strong class="font-semibold text-gray-800">catalog-printed suffix or fragment</strong> in one column and isolate every unconfirmed option in separate buyer-requirement columns until the supplier returns a written complete orderable part number and signed artwork revision.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Buyer Artwork Verification</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">To reduce the risk of mismatched head styles, inverted symbols, or unverified part-number strings during order preparation, execute the following five-step artwork verification workflow:</p>
<ol class="my-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Record the series prefix and catalog-printed suffix/fragment separately:</strong> Enter <code class="[overflow-wrap:anywhere]">EB2M-A</code> or <code class="[overflow-wrap:anywhere]">EB2M-B</code> alongside the exact printed catalog suffix (<code class="[overflow-wrap:anywhere]">-11PRG</code>, <code class="[overflow-wrap:anywhere]">-11PDRG</code>, <code class="[overflow-wrap:anywhere]">-11HRG</code>, <code class="[overflow-wrap:anywhere]">-11HDRG</code>, <code class="[overflow-wrap:anywhere]">-11RG</code>, <code class="[overflow-wrap:anywhere]">-11DRG</code>) or catalog fragment (<code class="[overflow-wrap:anywhere]">-10/FH○</code>, <code class="[overflow-wrap:anywhere]">-10T/FH○</code>, <code class="[overflow-wrap:anywhere]">-10D/FH○</code>, <code class="[overflow-wrap:anywhere]">-10DT/FH○</code>, explicitly flagged as a fragment containing placeholder <code class="[overflow-wrap:anywhere]">○</code>) without splicing unverified combinations.</li>
<li><strong class="font-semibold text-gray-800">Validate legend scope against the printed head group:</strong> Check whether the required legend appears beside that head group in the catalog (<code class="[overflow-wrap:anywhere]">R1</code>, <code class="[overflow-wrap:anywhere]">R5</code> beside flat/extended; two-column <code class="[overflow-wrap:anywhere]">R–R3</code> green/red and <code class="[overflow-wrap:anywhere]">R4–R7</code> light gray/black beside oval; <code class="[overflow-wrap:anywhere]">1–12</code> for <code class="[overflow-wrap:anywhere]">/FH</code>). Flag any cross-group request (such as <code class="[overflow-wrap:anywhere]">START/STOP</code> on a flat double head) or <code class="[overflow-wrap:anywhere]">(Customizable)</code> marking as an unconfirmed item pending written supplier confirmation.</li>
<li><strong class="font-semibold text-gray-800">Define panel-face reading orientation explicitly:</strong> Specify horizontal vs. vertical viewing axis, which actuator sits at the top or left (for example, <code class="[overflow-wrap:anywhere]">I</code> top / <code class="[overflow-wrap:anywhere]">O</code> bottom vs. <code class="[overflow-wrap:anywhere]">O</code> top / <code class="[overflow-wrap:anywhere]">I</code> bottom), and the required pointing direction of arrow symbols (<code class="[overflow-wrap:anywhere]">3</code> or <code class="[overflow-wrap:anywhere]">4</code>) when viewed on the panel face. Do not cite catalog sample photos as an orientation standard.</li>
<li><strong class="font-semibold text-gray-800">Lock contrast polarity, cap color, and illumination status in separate columns:</strong> For <code class="[overflow-wrap:anywhere]">/FH</code> arrows, state both the code (<code class="[overflow-wrap:anywhere]">3</code> vs. <code class="[overflow-wrap:anywhere]">4</code>) and the foreground/background contrast in plain text. Keep Field-4 color code <code class="[overflow-wrap:anywhere]">R</code> separated from oval legend code <code class="[overflow-wrap:anywhere]">R</code>, and record color and illumination preferences separately rather than assuming universal six-color availability.</li>
<li><strong class="font-semibold text-gray-800">Freeze signed artwork, controlled drawings, and project documentation scope:</strong> Require a supplier-signed legend artwork proof carrying a drawing ID, revision level, and confirmed complete orderable part number, alongside controlled model-level drawings verifying installation dimensions, actual terminal mapping, wiring, and lamp circuits. Where a project requires compliance documentation, track it as a separate procurement verification line—confirming the issuing entity and exact applicability scope against project requirements rather than assuming coverage from catalog pages or sample markings.</li>
</ol>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Fields to Record on the BOM</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Record buyer requirements alongside the catalog references and track what still needs written sign-off (PDF p.64–71).</p>
<ol id="artwork-verification" class="eb2m-steps">
<li id="artwork-series">
<h4>Series Prefix &amp; Head Group</h4>
<p>Select series prefix and exact printed suffix or catalog fragment (never splice <code class="[overflow-wrap:anywhere]">○</code>).</p>
<dl class="eb2m-fields">
<div><dt>Catalog reference</dt><dd><code class="[overflow-wrap:anywhere]">EB2M-A</code> or <code class="[overflow-wrap:anywhere]">EB2M-B</code>; Flat (<code class="[overflow-wrap:anywhere]">-11PRG</code>/<code class="[overflow-wrap:anywhere]">-11PDRG</code>), Extended (<code class="[overflow-wrap:anywhere]">-11HRG</code>/<code class="[overflow-wrap:anywhere]">-11HDRG</code>), Oval (<code class="[overflow-wrap:anywhere]">-11RG</code>/<code class="[overflow-wrap:anywhere]">-11DRG</code>), or <code class="[overflow-wrap:anywhere]">/FH</code> Flush fragments (<code class="[overflow-wrap:anywhere]">-10/FH○</code>, <code class="[overflow-wrap:anywhere]">-10T/FH○</code>, <code class="[overflow-wrap:anywhere]">-10D/FH○</code>, <code class="[overflow-wrap:anywhere]">-10DT/FH○</code>) (PDF p.66–67, p.70–71)</dd></div>
<div><dt>Before sign-off</dt><dd>Printed suffix/fragment verified; complete multi-option SKU string <strong class="font-semibold text-gray-800">Unknown / Pending sign-off</strong></dd></div>
</dl>
</li>
<li id="artwork-contacts">
<h4>Nominal Contact, Action &amp; Illumination</h4>
<p>Confirm nominal action and illumination group; log separate controlled-document check for electrical details.</p>
<dl class="eb2m-fields">
<div><dt>Catalog reference</dt><dd>Double rows: momentary, <code class="[overflow-wrap:anywhere]">-11</code> nominal <code class="[overflow-wrap:anywhere]">1NO1NC</code>, <code class="[overflow-wrap:anywhere]">D</code> illuminated; <code class="[overflow-wrap:anywhere]">/FH</code> rows: <code class="[overflow-wrap:anywhere]">-10</code> nominal <code class="[overflow-wrap:anywhere]">1NO</code>, momentary/maintained (<code class="[overflow-wrap:anywhere]">T</code>), illuminated (<code class="[overflow-wrap:anywhere]">D</code> / <code class="[overflow-wrap:anywhere]">DT</code>; <code class="[overflow-wrap:anywhere]">TD</code> in Field 3 key) (PDF p.65–67, p.69–71)</dd></div>
<div><dt>Before sign-off</dt><dd>Nominal catalog meaning verified; actual terminal map, wiring, lamp circuits, and safety functions <strong class="font-semibold text-gray-800">Unknown / Pending controlled documents</strong></dd></div>
</dl>
</li>
<li id="artwork-legend">
<h4>Legend Group / Symbol Code</h4>
<p>Enter code or attach custom artwork reference; keep separate from Field-4 color code <code class="[overflow-wrap:anywhere]">R</code>.</p>
<dl class="eb2m-fields">
<div><dt>Catalog reference</dt><dd>Flat/Extended: <code class="[overflow-wrap:anywhere]">R1</code>, <code class="[overflow-wrap:anywhere]">R5</code>; Oval two columns: <code class="[overflow-wrap:anywhere]">R–R3</code> (green/red) and <code class="[overflow-wrap:anywhere]">R4–R7</code> (light gray/black); <code class="[overflow-wrap:anywhere]">/FH</code>: <code class="[overflow-wrap:anywhere]">1–12</code>, with <code class="[overflow-wrap:anywhere]">(Customizable)</code> independent (PDF p.65–67, p.69–71)</dd></div>
<div><dt>Before sign-off</dt><dd>Printed group scope verified; cross-group or custom marking orderability <strong class="font-semibold text-gray-800">Unknown / Pending sign-off</strong></dd></div>
</dl>
</li>
<li id="artwork-orientation">
<h4>Physical Orientation &amp; Contrast</h4>
<p>Define viewing axis (vertical/horizontal), top/left actuator position, reading angle, and arrow pointing direction.</p>
<dl class="eb2m-fields">
<div><dt>Catalog reference</dt><dd>Sample photos show mismatched heads/orientations (PDF p.64, p.67, p.71); <code class="[overflow-wrap:anywhere]">/FH</code> <code class="[overflow-wrap:anywhere]">3</code> = black up-arrow on white, <code class="[overflow-wrap:anywhere]">4</code> = white up-arrow on black (PDF p.65–66, p.69–70)</dd></div>
<div><dt>Before sign-off</dt><dd>Shipped physical orientation <strong class="font-semibold text-gray-800">Unknown / Pending signed artwork proof</strong></dd></div>
</dl>
</li>
<li id="artwork-color">
<h4>Cap Color &amp; Illumination Field</h4>
<p>Specify actuator color(s) and illumination preference separately; do not infer electrical function from color.</p>
<dl class="eb2m-fields">
<div><dt>Catalog reference</dt><dd>Series color list <code class="[overflow-wrap:anywhere]">R/G/Y/B/W/K</code> (PDF p.65, p.69); five-color margin dots on shown illuminated flush and illuminated selector rows vs. six-color example on non-illuminated selector rows</dd></div>
<div><dt>Before sign-off</dt><dd>Head × legend × illumination × color × voltage matrix <strong class="font-semibold text-gray-800">Unknown / Pending sign-off</strong></dd></div>
</dl>
</li>
<li id="artwork-proof">
<h4>Artwork Proof, Drawings &amp; Complete SKU</h4>
<p>Record signed artwork proof ID, revision, signed installation/wiring drawing IDs, confirmed full orderable SKU, and any project-required compliance document scope check.</p>
<dl class="eb2m-fields">
<div><dt>Catalog reference</dt><dd>Complete multi-option strings and standalone <code class="[overflow-wrap:anywhere]">/FH</code> outline drawings are not printed in PDF p.64–71</dd></div>
<div><dt>Before sign-off</dt><dd><strong class="font-semibold text-gray-800">Hold until written supplier sign-off</strong></dd></div>
</dl>
</li>
</ol>
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
      articleHtml: `<div class="prose-custom eb2m-guide">
<p class="mb-4 text-sm leading-7 text-gray-600">Preparing a purchase order for EB2M-A or EB2M-B 22mm push button switches directly from supplier catalog pages carries a clear part-string risk: the catalog naming layout splits specifications into six numbered fields plus a separate head-type box, while printed model tables and general field keys diverge in spelling, punctuation, and coverage. Mechanically splicing catalog tokens into a new full part number—or overlooking conflicting adjacent catalog entries—leaves the intended configuration ambiguous at the point of PO release.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">This guide addresses strictly <strong class="font-semibold text-gray-800">pre-PO six-field parsing, literal vs. interpreted lamp-voltage auditing, catalog printing and adjacent-photo discrepancy handling, bilateral revision sign-off, and PO release gating</strong>. Switch-family selection, electrical load ratings, wiring and installation procedures, illuminated color selection, and industrial enclosure applications fall outside this scope—refer instead to our existing <a class="text-green-700 underline hover:text-green-900" href="/blog/how-to-choose-22mm-push-button-switch">22mm push button selection guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-emergency-stop-button-twist-release-guide">emergency-stop guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-selector-switch-key-switch-spring-return-hand-off-auto">selector and key-switch guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-push-button-switch-wiring-installation-guide">wiring and installation guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-illuminated-push-button-voltage-color-guide">illuminated push button guide</a>, and <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-push-button-ip40-ip65-industrial-applications">IP40/IP65 industrial applications guide</a>.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Six Catalog Fields and the Head-Type Box</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">In supplier catalog PDF p.65 (<code class="[overflow-wrap:anywhere]">EB2M-A</code>) and p.69 (<code class="[overflow-wrap:anywhere]">EB2M-B</code>), the model-naming chart defines <strong class="font-semibold text-gray-800">six numbered fields (<code class="[overflow-wrap:anywhere]">1</code> through <code class="[overflow-wrap:anywhere]">6</code>) plus a separate head-type box</strong> following the series prefix, with a <strong class="font-semibold text-gray-800">slash separator (<code class="[overflow-wrap:anywhere]">/</code>) positioned between Field <code class="[overflow-wrap:anywhere]">3</code> and Field <code class="[overflow-wrap:anywhere]">4</code></strong>. This layout is <strong class="font-semibold text-gray-800">not</strong> a fixed-length six-digit code: individual fields can hold multiple characters, punctuation varies across printed tables, and specific fields apply only to certain operator groups.</p>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Fields <code class="[overflow-wrap:anywhere]">1</code> and <code class="[overflow-wrap:anywhere]">2</code> (Nominal NO/NC Contacts, PDF p.65, p.69):</strong> Field <code class="[overflow-wrap:anywhere]">1</code> identifies normally open (<code class="[overflow-wrap:anywhere]">NO</code>) contacts and Field <code class="[overflow-wrap:anywhere]">2</code> identifies normally closed (<code class="[overflow-wrap:anywhere]">NC</code>) contacts. Their nominal catalog mappings are <code class="[overflow-wrap:anywhere]">-10</code> (<code class="[overflow-wrap:anywhere]">1NO</code>), <code class="[overflow-wrap:anywhere]">-01</code> (<code class="[overflow-wrap:anywhere]">1NC</code>), <code class="[overflow-wrap:anywhere]">-11</code> (<code class="[overflow-wrap:anywhere]">1NO1NC</code>), and <code class="[overflow-wrap:anywhere]">-20</code> (<code class="[overflow-wrap:anywhere]">2NO</code>). Do <strong class="font-semibold text-gray-800">not</strong> infer electrical independence between contacts, actual terminal numbering, or internal wiring maps from <code class="[overflow-wrap:anywhere]">-20</code> or any other contact code.</li>
<li><strong class="font-semibold text-gray-800">Field <code class="[overflow-wrap:anywhere]">3</code> (<code class="[overflow-wrap:anywhere]">Mechanical form</code>, PDF p.65, p.69):</strong> The naming box titles Field <code class="[overflow-wrap:anywhere]">3</code> <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">Mechanical form</code></strong>. Within this same Field <code class="[overflow-wrap:anywhere]">3</code> column, the catalog explicitly lists <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">D</code> = illuminated</strong>, <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">T</code> = maintained</strong>, and <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">TD</code> = illuminated maintained</strong> alongside the other form letters in the general key. Keep general key letters strictly separated from complete model-table suffixes that also include Fields <code class="[overflow-wrap:anywhere]">1</code> and <code class="[overflow-wrap:anywhere]">2</code> (such as <code class="[overflow-wrap:anywhere]">-10DT</code>, <code class="[overflow-wrap:anywhere]">-11PRG</code>, or <code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code>), and continue distinguishing the context of Field <code class="[overflow-wrap:anywhere]">3</code> general key <code class="[overflow-wrap:anywhere]">TD</code> from model-table row <code class="[overflow-wrap:anywhere]">-10DT</code> without declaring them identical.</li>
<li><strong class="font-semibold text-gray-800">Slash Separator (<code class="[overflow-wrap:anywhere]">/</code>) Between Field <code class="[overflow-wrap:anywhere]">3</code> and Field <code class="[overflow-wrap:anywhere]">4</code> vs. Printed Action Strings (PDF p.65–67, p.69–71):</strong> In the naming box, the slash (<code class="[overflow-wrap:anywhere]">/</code>) acts as the boundary separating Field <code class="[overflow-wrap:anywhere]">3</code> from Field <code class="[overflow-wrap:anywhere]">4</code>. Comparing printed catalog rows makes this distinction concrete: the 2-position example prints <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code></strong> (PDF p.66), where <code class="[overflow-wrap:anywhere]">/</code> separates Field <code class="[overflow-wrap:anywhere]">3</code> (<code class="[overflow-wrap:anywhere]">X</code>) from Field <code class="[overflow-wrap:anywhere]">4</code> content (<code class="[overflow-wrap:anywhere]">fu</code>); the 3-position examples print <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">EB2M-A-20XS/f.fu</code></strong> (PDF p.66) and <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">EB2M-A-20CYS/f.fu</code></strong> (PDF p.67), where <code class="[overflow-wrap:anywhere]">/</code> separates Field <code class="[overflow-wrap:anywhere]">3</code> from Field <code class="[overflow-wrap:anywhere]">4</code> content (<code class="[overflow-wrap:anywhere]">f.fu</code>), with corresponding Type B rows on PDF p.70–71. The period (<code class="[overflow-wrap:anywhere]">.</code>) inside the 3-position action string <code class="[overflow-wrap:anywhere]">f.fu</code> belongs verbatim to that printed string—it must not be confused with the slash separator (<code class="[overflow-wrap:anywhere]">/</code>) between fields, must not be rewritten as <code class="[overflow-wrap:anywhere]">fu</code>, and must not be claimed interchangeable with <code class="[overflow-wrap:anywhere]">fu</code>.</li>
</ul>
<p class="mb-4 text-sm leading-7 text-gray-600">While the supplier catalog does print concrete example model rows across PDF p.66–67 and p.70–71, it does not publish a complete cross-field orderability matrix. Therefore, never splice general-key characters mechanically into a new full ordering string; keep <strong class="font-semibold text-gray-800">the orderability of your intended configuration and complete multi-option combinations</strong> marked as pending written supplier confirmation.</p>
<ul id="catalog-fields" class="eb2m-card-list" role="list">
<li id="catalog-series" class="eb2m-card">
<h3>Series Prefix &amp; Head-Type Box</h3>
<p>Identifies <code class="[overflow-wrap:anywhere]">EB2M-A</code> or <code class="[overflow-wrap:anywhere]">EB2M-B</code> plus standalone head-type category box.</p>
<dl class="eb2m-fields">
<div><dt>Printed model rows</dt><dd><code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code> (p.66), <code class="[overflow-wrap:anywhere]">EB2M-A-11PRG</code> (p.67); Type B counterparts on p.70–71</dd></div>
<div><dt>Before the PO</dt><dd>Keep <code class="[overflow-wrap:anywhere]">EB2M-A</code>/<code class="[overflow-wrap:anywhere]">EB2M-B</code> distinct from emergency-stop suffixes <code class="[overflow-wrap:anywhere]">/A</code> and <code class="[overflow-wrap:anywhere]">/B</code> (PDF p.67, p.71)</dd></div>
</dl>
</li>
<li id="catalog-contacts" class="eb2m-card">
<h3>Field <code class="[overflow-wrap:anywhere]">1</code> (NO) &amp; Field <code class="[overflow-wrap:anywhere]">2</code> (NC)</h3>
<p>Nominal contact digits: <code class="[overflow-wrap:anywhere]">-10</code> = <code class="[overflow-wrap:anywhere]">1NO</code>, <code class="[overflow-wrap:anywhere]">-01</code> = <code class="[overflow-wrap:anywhere]">1NC</code>, <code class="[overflow-wrap:anywhere]">-11</code> = <code class="[overflow-wrap:anywhere]">1NO1NC</code>, <code class="[overflow-wrap:anywhere]">-20</code> = <code class="[overflow-wrap:anywhere]">2NO</code>.</p>
<dl class="eb2m-fields">
<div><dt>Printed model rows</dt><dd>Appears as leading contact digits in rows such as <code class="[overflow-wrap:anywhere]">-10DT</code> (p.66, p.70), <code class="[overflow-wrap:anywhere]">-01ZS</code> (p.67, p.71), <code class="[overflow-wrap:anywhere]">-11PRG</code> (p.67, p.71), <code class="[overflow-wrap:anywhere]">EB2M-A-20XS/f.fu</code> (p.66)</dd></div>
<div><dt>Before the PO</dt><dd>Nominal catalog meaning only; do not infer electrical independence from <code class="[overflow-wrap:anywhere]">-20</code>, actual terminal numbers, or wiring maps</dd></div>
</dl>
</li>
<li id="catalog-form" class="eb2m-card">
<h3>Field <code class="[overflow-wrap:anywhere]">3</code> (<code class="[overflow-wrap:anywhere]">Mechanical form</code>)</h3>
<p>Column titled <code class="[overflow-wrap:anywhere]">Mechanical form</code>; includes <code class="[overflow-wrap:anywhere]">D</code> = illuminated, <code class="[overflow-wrap:anywhere]">T</code> = maintained, <code class="[overflow-wrap:anywhere]">TD</code> = illuminated maintained, plus other general-key letters (<code class="[overflow-wrap:anywhere]">H</code>, <code class="[overflow-wrap:anywhere]">HD</code>, <code class="[overflow-wrap:anywhere]">HT</code>, <code class="[overflow-wrap:anywhere]">HTD</code>, etc.).</p>
<dl class="eb2m-fields">
<div><dt>Printed model rows</dt><dd>Model tables print combined rows containing Fields 1–3 such as <code class="[overflow-wrap:anywhere]">-10DT</code> (p.66, p.70), <code class="[overflow-wrap:anywhere]">-11PRG</code>/<code class="[overflow-wrap:anywhere]">-11PDRG</code> (p.67, p.71), <code class="[overflow-wrap:anywhere]">-11HRG</code>/<code class="[overflow-wrap:anywhere]">-11HDRG</code> (p.67, p.71)</dd></div>
<div><dt>Before the PO</dt><dd>Do not treat combined Fields 1–3 suffixes as pure Field <code class="[overflow-wrap:anywhere]">3</code> key values; distinguish Field <code class="[overflow-wrap:anywhere]">3</code> general key <code class="[overflow-wrap:anywhere]">TD</code> from model-table row <code class="[overflow-wrap:anywhere]">-10DT</code> without declaring them identical</dd></div>
</dl>
</li>
<li id="catalog-slash" class="eb2m-card">
<h3>Slash Separator (<code class="[overflow-wrap:anywhere]">/</code>)</h3>
<p>Naming-box separator positioned between Field <code class="[overflow-wrap:anywhere]">3</code> and Field <code class="[overflow-wrap:anywhere]">4</code>.</p>
<dl class="eb2m-fields">
<div><dt>Printed model rows</dt><dd>Separates Field <code class="[overflow-wrap:anywhere]">3</code> from Field <code class="[overflow-wrap:anywhere]">4</code> in <code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code> (p.66), <code class="[overflow-wrap:anywhere]">EB2M-A-20XS/f.fu</code> (p.66), and <code class="[overflow-wrap:anywhere]">EB2M-A-20CYS/f.fu</code> (p.67); Type B rows on p.70–71</dd></div>
<div><dt>Before the PO</dt><dd>Keep the inter-field slash (<code class="[overflow-wrap:anywhere]">/</code>) distinct from the verbatim dot (<code class="[overflow-wrap:anywhere]">.</code>) inside 3-position <code class="[overflow-wrap:anywhere]">f.fu</code>; never rewrite <code class="[overflow-wrap:anywhere]">f.fu</code> as <code class="[overflow-wrap:anywhere]">fu</code> or claim them interchangeable</dd></div>
</dl>
</li>
<li id="catalog-color" class="eb2m-card">
<h3>Field <code class="[overflow-wrap:anywhere]">4</code> (Color / Action / Key Removal)</h3>
<p>Color letters <code class="[overflow-wrap:anywhere]">R, G, Y, B, W, K</code>; three separate spring-return keys <code class="[overflow-wrap:anywhere]">f</code>, <code class="[overflow-wrap:anywhere]">fu</code>, <code class="[overflow-wrap:anywhere]">ffu</code>; key-removal position named without code table.</p>
<dl class="eb2m-fields">
<div><dt>Printed model rows</dt><dd>2-position example <code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code> (p.66); 3-position examples <code class="[overflow-wrap:anywhere]">EB2M-A-20XS/f.fu</code> (p.66) and <code class="[overflow-wrap:anywhere]">EB2M-A-20CYS/f.fu</code> (p.67); Type B corresponding rows on p.70–71</dd></div>
<div><dt>Before the PO</dt><dd>Preserve exact slash and period positions; confirm color availability, action behavior, and plain-text key-removal positions in writing</dd></div>
</dl>
</li>
<li id="catalog-voltage" class="eb2m-card">
<h3>Field <code class="[overflow-wrap:anywhere]">5</code> (Illuminated Lamp Voltage)</h3>
<p>Ten printed lamp voltage ordering codes: <code class="[overflow-wrap:anywhere]">21–28</code>, <code class="[overflow-wrap:anywhere]">31</code>, <code class="[overflow-wrap:anywhere]">32</code> (<code class="[overflow-wrap:anywhere]">29</code> and <code class="[overflow-wrap:anywhere]">30</code> absent).</p>
<dl class="eb2m-fields">
<div><dt>Printed model rows</dt><dd>Applies strictly to illuminated ordering voltage selection</dd></div>
<div><dt>Before the PO</dt><dd>Separate catalog literal print (<code class="[overflow-wrap:anywhere]">28-DC 220V</code>, <code class="[overflow-wrap:anywhere]">31-AC 220V</code>) from buyer interpretation (<code class="[overflow-wrap:anywhere]">220 V DC</code>, <code class="[overflow-wrap:anywhere]">220 V AC</code>); per-model orderability pending supplier confirmation</dd></div>
</dl>
</li>
<li id="catalog-symbol" class="eb2m-card">
<h3>Field <code class="[overflow-wrap:anywhere]">6</code> (Symbol Code)</h3>
<p>Symbol numbers <code class="[overflow-wrap:anywhere]">1–12</code> for <code class="[overflow-wrap:anywhere]">/FH</code> marked flush units.</p>
<dl class="eb2m-fields">
<div><dt>Printed model rows</dt><dd><code class="[overflow-wrap:anywhere]">-10/FH○</code> through <code class="[overflow-wrap:anywhere]">-10DT/FH○</code> rows plus <code class="[overflow-wrap:anywhere]">(Customizable)</code> annotation (p.66, p.70)</dd></div>
<div><dt>Before the PO</dt><dd>Do not splice <code class="[overflow-wrap:anywhere]">○</code> placeholder with other fields; intended multi-option combination orderability pending written supplier confirmation</dd></div>
</dl>
</li>
</ul>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Field 5 Lamp Voltage Codes</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">In supplier catalog PDF p.65 and p.69, Field <code class="[overflow-wrap:anywhere]">5</code> functions strictly as the <strong class="font-semibold text-gray-800">illuminated lamp ordering voltage field</strong>. Per-model voltage combinations and current orderability must still be confirmed in writing by the supplier.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">The catalog prints exactly ten voltage ordering codes—<strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">21–28</code>, <code class="[overflow-wrap:anywhere]">31</code>, and <code class="[overflow-wrap:anywhere]">32</code></strong>—with codes <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">29</code> and <code class="[overflow-wrap:anywhere]">30</code> omitted</strong>:</p>
<p class="mb-4 text-sm leading-7 text-gray-600">Always keep <strong class="font-semibold text-gray-800">catalog literal printing</strong> separated from <strong class="font-semibold text-gray-800">buyer voltage interpretation</strong> in pre-PO review sheets so interpreted engineering labels (<code class="[overflow-wrap:anywhere]">220 V DC</code> / <code class="[overflow-wrap:anywhere]">220 V AC</code>) are never misrepresented as verbatim catalog strings:</p>
<table id="lamp-voltage" class="eb2m-table" aria-label="Field 5 printed codes and buyer voltage" aria-describedby="voltage-gates">
<thead><tr><th scope="col">Code</th><th scope="col">Catalog print</th><th scope="col">Buyer voltage</th></tr></thead>
<tbody>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">21–27</code></th><td>Printed codes <code class="[overflow-wrap:anywhere]">21</code> through <code class="[overflow-wrap:anywhere]">27</code></td><td><code class="[overflow-wrap:anywhere]">6</code>, <code class="[overflow-wrap:anywhere]">12</code>, <code class="[overflow-wrap:anywhere]">24</code>, <code class="[overflow-wrap:anywhere]">36</code>, <code class="[overflow-wrap:anywhere]">48</code>, <code class="[overflow-wrap:anywhere]">110</code>, <code class="[overflow-wrap:anywhere]">127 V AC/DC</code></td></tr>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">28</code></th><td><code class="[overflow-wrap:anywhere]">28-DC 220V</code></td><td><code class="[overflow-wrap:anywhere]">220 V DC</code></td></tr>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">31</code></th><td><code class="[overflow-wrap:anywhere]">31-AC 220V</code> (<code class="[overflow-wrap:anywhere]">29</code> and <code class="[overflow-wrap:anywhere]">30</code> absent)</td><td><code class="[overflow-wrap:anywhere]">220 V AC</code></td></tr>
<tr><th scope="row"><code class="[overflow-wrap:anywhere]">32</code></th><td>Printed code <code class="[overflow-wrap:anywhere]">32</code></td><td><code class="[overflow-wrap:anywhere]">380 V AC</code></td></tr>
</tbody>
</table>
<div id="voltage-gates" class="eb2m-note">
<p><strong class="font-semibold text-gray-800">Field 5 source</strong> · PDF p.65, p.69.</p>
<ul>
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">21–27</code></strong> · Verify intended voltage availability for the exact illuminated model with supplier written confirmation.</li>
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">28</code></strong> · Conflicts if buyer text specifies <code class="[overflow-wrap:anywhere]">220 V AC</code>; trigger immediate <code class="[overflow-wrap:anywhere]">Hold</code> and bilateral correction.</li>
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">31</code></strong> · Conflicts if buyer text specifies <code class="[overflow-wrap:anywhere]">220 V DC</code>; trigger immediate <code class="[overflow-wrap:anywhere]">Hold</code> and bilateral correction.</li>
<li><strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">32</code></strong> · Verify intended model combinability and orderability in writing prior to PO release.</li>
</ul>
</div>
<figure class="my-6"><img alt="EB2M chart lists lamp-voltage codes 21–28, 31, and 32, highlighting 28 for 220 V DC and 31 for 220 V AC. The code key prints TD and ffu. Model rows print -10DT and /f.fu." class="rounded-xl border border-gray-100" decoding="async" height="900" loading="lazy" src="/optimized/display/images/blog/eb2m-six-field-code-voltage-21-28-31-32-chart-v2.webp" width="1200"/><figcaption class="mt-2 text-sm leading-6 text-gray-600">This catalog table covers lamp voltages for illuminated orders (pp. 65 and 69). Code 28 is 220 V DC and code 31 is 220 V AC. Key-removal position applies to relevant operators, and the key gives no code table for it. Compare the printed code key and model rows as separate references. Ask the supplier to confirm availability, options, and the complete order code in writing.</figcaption></figure>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Resolving a <code class="[overflow-wrap:anywhere]">28</code> or <code class="[overflow-wrap:anywhere]">31</code> Conflict</h3>
<p class="mb-4 text-sm leading-7 text-gray-600"><em>Scope note: The sequence below is an illustrative catalog-based document-review exercise, not a real customer case or historical order incident.</em></p>
<p class="mb-4 text-sm leading-7 text-gray-600">Suppose a draft buyer specification sheet lists <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">220 V AC</code></strong> in the engineering voltage column while citing code <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">28</code></strong> in the Field <code class="[overflow-wrap:anywhere]">5</code> column (or pairs <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">220 V DC</code></strong> text with code <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">31</code></strong>):</p>
<ol class="my-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Place the line on <code class="[overflow-wrap:anywhere]">Hold</code>:</strong> Block PO issuance immediately. Never assume either party will silently override the code to match the text or override the text to match the code.</li>
<li><strong class="font-semibold text-gray-800">Cite literal print vs. interpretation:</strong> Record <code class="[overflow-wrap:anywhere]">PDF p.65, p.69</code> in the freeze matrix, logging both catalog literal print (<code class="[overflow-wrap:anywhere]">28-DC 220V</code>, <code class="[overflow-wrap:anywhere]">31-AC 220V</code>; <code class="[overflow-wrap:anywhere]">29</code>/<code class="[overflow-wrap:anywhere]">30</code> absent) and buyer interpretation (<code class="[overflow-wrap:anywhere]">220 V DC</code> vs. <code class="[overflow-wrap:anywhere]">220 V AC</code>).</li>
<li><strong class="font-semibold text-gray-800">Obtain written supplier confirmation:</strong> Request an order-level confirmation document stating the corrected voltage code and the complete orderable model number for the intended illuminated configuration.</li>
<li><strong class="font-semibold text-gray-800">Update, version, and countersign:</strong> Align buyer text and supplier-confirmed code identically on a controlled revision, log supplier sign-off and buyer dated sign-off, and only then release the PO line.</li>
</ol>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Catalog Discrepancies and Drawing Requests</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Several character keys, punctuation marks, and adjacent photo details diverge across supplier catalog PDF p.65–67 and p.69–71. Recording these items verbatim—without silently normalizing text or extrapolating unlisted SKUs—keeps the PO freeze auditable.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Action Keys, Suffixes, and Uncoded Options</h3>
<ul id="action-keys" class="eb2m-card-list" role="list">
<li id="action-slash" class="eb2m-card">
<h4>Action keys <code class="[overflow-wrap:anywhere]">f</code>, <code class="[overflow-wrap:anywhere]">fu</code>, <code class="[overflow-wrap:anywhere]">ffu</code></h4>
<p>Keep slash and period positions verbatim; do not confuse the dot in <code class="[overflow-wrap:anywhere]">f.fu</code> with the Field <code class="[overflow-wrap:anywhere]">3</code>/<code class="[overflow-wrap:anywhere]">4</code> slash, rewrite <code class="[overflow-wrap:anywhere]">f.fu</code> as <code class="[overflow-wrap:anywhere]">fu</code>, or treat <code class="[overflow-wrap:anywhere]">/fu</code> and <code class="[overflow-wrap:anywhere]">/f.fu</code> as interchangeable variants; confirm exact action behavior and orderability in writing.</p>
<dl class="eb2m-fields">
<div><dt>General field key</dt><dd>Slash (<code class="[overflow-wrap:anywhere]">/</code>) between Field <code class="[overflow-wrap:anywhere]">3</code> and Field <code class="[overflow-wrap:anywhere]">4</code>; three separate entries <code class="[overflow-wrap:anywhere]">f</code>, <code class="[overflow-wrap:anywhere]">fu</code>, <code class="[overflow-wrap:anywhere]">ffu</code></dd></div>
<div><dt>Model tables</dt><dd>2-position: <code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code> (p.66); 3-position: <code class="[overflow-wrap:anywhere]">EB2M-A-20XS/f.fu</code> (p.66), <code class="[overflow-wrap:anywhere]">EB2M-A-20CYS/f.fu</code> (p.67); Type B corresponding rows on p.70–71</dd></div>
<div><dt>PDF reference</dt><dd>PDF p.65, p.69 (key) vs. p.66–67, p.70–71 (tables)</dd></div>
</dl>
<p><strong class="font-semibold text-gray-800">Hold</strong> — Intended configuration &amp; orderability pending supplier written confirmation.</p>
</li>
<li id="action-td" class="eb2m-card">
<h4>Mechanical form <code class="[overflow-wrap:anywhere]">TD</code> and row <code class="[overflow-wrap:anywhere]">-10DT</code></h4>
<p>Different catalog contexts; record both verbatim without declaring <code class="[overflow-wrap:anywhere]">TD</code> identical to <code class="[overflow-wrap:anywhere]">-10DT</code> or splicing new strings.</p>
<dl class="eb2m-fields">
<div><dt>General field key</dt><dd>Field <code class="[overflow-wrap:anywhere]">3</code> (<code class="[overflow-wrap:anywhere]">Mechanical form</code>) general key <code class="[overflow-wrap:anywhere]">TD</code> (<code class="[overflow-wrap:anywhere]">illuminated maintained</code>; same column lists <code class="[overflow-wrap:anywhere]">D</code>, <code class="[overflow-wrap:anywhere]">T</code>)</dd></div>
<div><dt>Model tables</dt><dd>Model-table row <code class="[overflow-wrap:anywhere]">-10DT</code> (combined Fields 1–3 context)</dd></div>
<div><dt>PDF reference</dt><dd>PDF p.65, p.69 (key) vs. p.66, p.70 (tables)</dd></div>
</dl>
<p><strong class="font-semibold text-gray-800">Hold</strong> — Complete orderable model string pending supplier written confirmation.</p>
</li>
<li id="action-extended" class="eb2m-card">
<h4>Extended single-button availability</h4>
<p>Do not extrapolate unlisted single-button SKUs from the general key; verify meaning and current orderability in writing.</p>
<dl class="eb2m-fields">
<div><dt>General field key</dt><dd><code class="[overflow-wrap:anywhere]">H</code>, <code class="[overflow-wrap:anywhere]">HD</code>, <code class="[overflow-wrap:anywhere]">HT</code>, <code class="[overflow-wrap:anywhere]">HTD</code></dd></div>
<div><dt>Model tables</dt><dd>No standalone single-button extended rows printed (<code class="[overflow-wrap:anywhere]">H</code> appears in double push button rows <code class="[overflow-wrap:anywhere]">-11HRG</code>/<code class="[overflow-wrap:anywhere]">-11HDRG</code> on p.67, p.71)</dd></div>
<div><dt>PDF reference</dt><dd>PDF p.65, p.69 (key) vs. p.66–67, p.70–71 (tables)</dd></div>
</dl>
<p><strong class="font-semibold text-gray-800">Hold</strong> — Active availability &amp; orderable string unknown pending written confirmation.</p>
</li>
<li id="action-flat" class="eb2m-card">
<h4>Flat-head suffix letter <code class="[overflow-wrap:anywhere]">P</code></h4>
<p>Cite <code class="[overflow-wrap:anywhere]">-11PRG</code>/<code class="[overflow-wrap:anywhere]">-11PDRG</code> verbatim without inventing an unverified definition for <code class="[overflow-wrap:anywhere]">P</code>; confirm configuration on controlled drawing.</p>
<dl class="eb2m-fields">
<div><dt>General field key</dt><dd><code class="[overflow-wrap:anywhere]">P</code> undefined in general letter key</dd></div>
<div><dt>Model tables</dt><dd>Flat double push button rows <code class="[overflow-wrap:anywhere]">-11PRG</code>, <code class="[overflow-wrap:anywhere]">-11PDRG</code></dd></div>
<div><dt>PDF reference</dt><dd>PDF p.65, p.69 (key) vs. p.67, p.71 (tables)</dd></div>
</dl>
<p><strong class="font-semibold text-gray-800">Hold</strong> — Exact meaning &amp; complete orderable string pending written confirmation.</p>
</li>
<li id="action-key-removal" class="eb2m-card">
<h4>Key-removal position</h4>
<p>Do not invent suffix characters; specify required key-removal positions in plain text and lock via written supplier sign-off.</p>
<dl class="eb2m-fields">
<div><dt>General field key</dt><dd>Field <code class="[overflow-wrap:anywhere]">4</code> names key-removal position</dd></div>
<div><dt>Model tables</dt><dd>No key-removal position code table printed on key-switch rows</dd></div>
<div><dt>PDF reference</dt><dd>PDF p.65, p.69 (key) vs. p.67, p.71 (tables)</dd></div>
</dl>
<p><strong class="font-semibold text-gray-800">Hold</strong> — Plain-text addendum &amp; supplier sign-off required before release.</p>
</li>
</ul>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Adjacent Sample Photo (PDF p.67)</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Pre-PO document control also requires checking whether adjacent catalog materials contradict each other. On <strong class="font-semibold text-gray-800">supplier catalog PDF p.67</strong>, the sample photograph placed adjacent to the <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">-01ZS</code> / <code class="[overflow-wrap:anywhere]">-01DZS</code></strong> emergency-stop row displays <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">13–14 (NO)</code></strong>, whereas the neighboring <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">-01</code></strong> model code denotes nominal <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">1NC</code></strong>.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">Use this observation strictly as a <strong class="font-semibold text-gray-800">trigger to request the supplier's controlled wiring diagram and terminal table for the exact ordered model</strong> before releasing a PO. That adjacent photo difference indicates only a discrepancy between neighboring catalog items on PDF p.67—it does <strong class="font-semibold text-gray-800">not</strong> prove the actual terminal assignments of any ordered product, nor does it prove a physical mismatch on received goods.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Pre-PO Freeze and Release</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Use the workflow and field groups below to close every code-table conflict, printing discrepancy, controlled-drawing request, and PO-specified project document before releasing a purchase order. Any row without completed supplier sign-off, closed deviation disposition, and dated buyer sign-off remains on <strong class="font-semibold text-gray-800"><code class="[overflow-wrap:anywhere]">Hold</code></strong>.</p>
<figure class="my-6"><img alt="The buyer submits a catalog reference and requested options. The supplier confirms the full model and drawing number and revision in writing. PO release follows verification of the signed-off revision and documented deviations." class="rounded-xl border border-gray-100" decoding="async" height="900" loading="lazy" src="/optimized/display/images/blog/eb2m-pre-po-rfq-verification-workflow-v2.webp" width="1200"/><figcaption class="mt-2 text-sm leading-6 text-gray-600">Send the catalog reference and requested options. Obtain the supplier’s written confirmation of the full model and drawing number and revision, then verify the signed-off revision and deviation record before releasing the purchase order.</figcaption></figure>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">What to Record Before PO Release</h3>
<div id="po-shared-fields" class="eb2m-note">
<p>Record six entries for each field group. Use the prompt at the top for the applicable ordered model or options and catalog citation. Under <strong>Supplier model confirmation</strong>, record the supplier-confirmed complete orderable model number. Under <strong>Controlled document</strong>, record the signed drawing or controlled document number and revision. Under <strong>Deviation and closure</strong>, record the closed deviation disposition. Record both sign-offs below.</p>
<p><strong class="font-semibold text-gray-800">Sign-off for each entry</strong></p>
<p>Record the supplier’s name, date, and written reference. Record the buyer’s name, date, and sign-off. <strong class="font-semibold text-gray-800">Hold until closed</strong>.</p>
</div>
<ol id="po-freeze-matrix" class="eb2m-steps">
<li id="po-options">
<h4>Series and options</h4>
<p>Series prefix (<code class="[overflow-wrap:anywhere]">EB2M-A</code> / <code class="[overflow-wrap:anywhere]">EB2M-B</code>), head-type box, Fields <code class="[overflow-wrap:anywhere]">1–3</code> &amp; intended multi-option selections (PDF p.65–71; distinct from <code class="[overflow-wrap:anywhere]">/A</code>, <code class="[overflow-wrap:anywhere]">/B</code> emergency-stop suffixes).</p>
<dl class="eb2m-fields">
<div><dt>Supplier model confirmation</dt><dd>Supplier written complete orderable string</dd></div>
<div><dt>Controlled document</dt><dd>Drawing / Spec Doc ID and revision</dd></div>
<div><dt>Deviation and closure</dt><dd>Confirm orderability of intended combination; log closure ID</dd></div>
</dl>
</li>
<li id="po-voltage">
<h4>Illuminated voltage</h4>
<p>Field <code class="[overflow-wrap:anywhere]">5</code> illuminated voltage selection: literal <code class="[overflow-wrap:anywhere]">28-DC 220V</code> (<code class="[overflow-wrap:anywhere]">220 V DC</code>) vs. <code class="[overflow-wrap:anywhere]">31-AC 220V</code> (<code class="[overflow-wrap:anywhere]">220 V AC</code>) or <code class="[overflow-wrap:anywhere]">21–27</code>/<code class="[overflow-wrap:anywhere]">32</code> (PDF p.65, p.69; <code class="[overflow-wrap:anywhere]">29</code>/<code class="[overflow-wrap:anywhere]">30</code> absent).</p>
<dl class="eb2m-fields">
<div><dt>Supplier model confirmation</dt><dd>Supplier written complete orderable string with locked voltage code</dd></div>
<div><dt>Controlled document</dt><dd>Model Spec / Datasheet ID and revision</dd></div>
<div><dt>Deviation and closure</dt><dd>Record correction of any 28/31 text-vs.-code clash; closure ID</dd></div>
</dl>
</li>
<li id="po-form-action">
<h4>Action and mechanical form</h4>
<p>Action &amp; form printing discrepancies: slash (<code class="[overflow-wrap:anywhere]">/</code>) between Fields <code class="[overflow-wrap:anywhere]">3</code> &amp; <code class="[overflow-wrap:anywhere]">4</code>; <code class="[overflow-wrap:anywhere]">f</code>/<code class="[overflow-wrap:anywhere]">fu</code>/<code class="[overflow-wrap:anywhere]">ffu</code> vs. <code class="[overflow-wrap:anywhere]">EB2M-A-10X/fu</code>, <code class="[overflow-wrap:anywhere]">EB2M-A-20XS/f.fu</code>, <code class="[overflow-wrap:anywhere]">EB2M-A-20CYS/f.fu</code>; <code class="[overflow-wrap:anywhere]">TD</code> vs. <code class="[overflow-wrap:anywhere]">-10DT</code>; <code class="[overflow-wrap:anywhere]">H/HD/HT/HTD</code>; <code class="[overflow-wrap:anywhere]">P</code>; uncoded key-removal (PDF p.65–67, p.69–71).</p>
<dl class="eb2m-fields">
<div><dt>Supplier model confirmation</dt><dd>Supplier written active model string + plain-text key-removal addendum</dd></div>
<div><dt>Controlled document</dt><dd>Action Diagram / Spec Doc ID and revision</dd></div>
<div><dt>Deviation and closure</dt><dd>Verbatim citation mapped to confirmed string; deviation closed</dd></div>
</dl>
</li>
<li id="po-wiring">
<h4>Controlled wiring and terminal documents</h4>
<p>Controlled wiring diagram and terminal table request for exact ordered model (triggered by <code class="[overflow-wrap:anywhere]">p.67</code> <code class="[overflow-wrap:anywhere]">-01ZS</code>/<code class="[overflow-wrap:anywhere]">-01DZS</code> adjacent photo <code class="[overflow-wrap:anywhere]">13–14 (NO)</code> vs. <code class="[overflow-wrap:anywhere]">-01</code> nominal <code class="[overflow-wrap:anywhere]">1NC</code>, and non-inference from <code class="[overflow-wrap:anywhere]">-20</code>).</p>
<dl class="eb2m-fields">
<div><dt>Supplier model confirmation</dt><dd>Supplier written complete orderable string</dd></div>
<div><dt>Controlled document</dt><dd>Controlled Wiring Diagram &amp; Terminal Table ID and revision</dd></div>
<div><dt>Deviation and closure</dt><dd>Confirm controlled wiring diagram and terminal table govern exact ordered model; closure ID</dd></div>
</dl>
</li>
<li id="po-project-docs">
<h4>PO-specified project documents</h4>
<p>PO-specified controlled project documents (when explicitly required by the PO; scope verified per project requirements).</p>
<dl class="eb2m-fields">
<div><dt>Supplier model confirmation</dt><dd>Covered exact orderable model string(s)</dd></div>
<div><dt>Controlled document</dt><dd>Controlled Project Document ID(s), Rev / Validity</dd></div>
<div><dt>Deviation and closure</dt><dd>Confirm issuing entity, document scope, and model coverage; closure ID</dd></div>
</dl>
</li>
</ol>
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
      articleHtml: `<div class="prose-custom eb2m-guide">
<p class="mb-4 text-sm leading-7 text-gray-600">Transferring incoming EB2M-A or EB2M-B 22mm push button switches directly from a receiving dock into general stock without structured documentary records creates a traceability gap. When packing lists, carton labels, inner bag markings, physical unit stamps, or accompanying controlled documents diverge from the purchase order baseline, mixing parts into inventory bins makes lot segregation and corrective disposition difficult.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">This guide outlines a <strong class="font-semibold text-gray-800">recommended, configurable receiving documentation workflow</strong>—not a statutory or industry-mandatory standard—focused strictly on <strong class="font-semibold text-gray-800">lot segregation and marking logs, recording pre-existing approved visual/mechanical observation and de-energized verification records, document review, and three-branch disposition control (<code class="[overflow-wrap:anywhere]">Release</code>, <code class="[overflow-wrap:anywhere]">Hold</code>, or <code class="[overflow-wrap:anywhere]">Quarantine</code>)</strong>. It does <strong class="font-semibold text-gray-800">not</strong> cover switch selection, panel preparation, door assembly, wiring, or on-site testing procedures—refer instead to our <a class="text-green-700 underline hover:text-green-900" href="/blog/how-to-choose-22mm-push-button-switch">22mm push button switch selection guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-emergency-stop-button-twist-release-guide">22mm emergency stop button guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-selector-switch-key-switch-spring-return-hand-off-auto">22mm selector and key switch guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-push-button-switch-wiring-installation-guide">22mm push button wiring and installation guide</a>, <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-illuminated-push-button-voltage-color-guide">22mm illuminated push button guide</a>, and <a class="text-green-700 underline hover:text-green-900" href="/blog/22mm-push-button-ip40-ip65-industrial-applications">22mm IP40/IP65 industrial applications guide</a>.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Document Baseline for the Four Receiving Stages</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Structured receiving begins with controlled order paperwork before inner packages are mixed or transferred into general stock. Every step in this four-stage workflow centers on retaining and reconciling documentary evidence rather than performing unapproved bench tests at the dock.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Pre-Receipt Documents</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Gather the following baseline documents for each EB2M purchase order line before logging physical containers:</p>
<ol class="my-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Released PO line with frozen model text:</strong> The approved orderable model string, ordered quantity, and any plain-text specification addenda bound to that PO line.</li>
<li><strong class="font-semibold text-gray-800">Supplier-signed drawing or specification document ID and revision:</strong> The controlled drawing number, specification sheet ID, or signed artwork revision governing the ordered model. General catalog pages do not replace a signed order-level revision.</li>
<li><strong class="font-semibold text-gray-800">Delivery note and packing list:</strong> The shipment paperwork tying delivered carton counts, PO lines, and supplier lot or batch identifiers to the receipt.</li>
<li><strong class="font-semibold text-gray-800">Applicable approved inspection plan and PO-specified documentation:</strong> If the order or facility operates under an approved inspection plan, identify which pre-existing supplier or incoming records must accompany the lot. Where a purchase order explicitly requires project compliance documentation, verify at receiving that the requested document package is present and check its issuing entity, validity dates, document ID, and stated coverage scope strictly against the PO requirements—never assume general product coverage without documentary verification.</li>
</ol>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Pre-Existing Approved Records</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">In stages 2 and 3 of the receiving workflow, receiving personnel reconcile <strong class="font-semibold text-gray-800">pre-existing records generated under an approved inspection plan</strong> tied to the ordered model and lot:</p>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Pre-existing de-energized verification results:</strong> Where an approved inspection plan produces a de-energized verification record for the ordered model and lot, log <strong class="font-semibold text-gray-800">the recorded result itself</strong>, the linked <strong class="font-semibold text-gray-800">PO line, model, and lot ID</strong>, the <strong class="font-semibold text-gray-800">controlled document ID and revision</strong>, and the <strong class="font-semibold text-gray-800">record or evidence ID</strong>.</li>
<li><strong class="font-semibold text-gray-800">Pre-existing visual or mechanical observation results:</strong> Where required by the applicable approved inspection plan, also log any pre-existing visual or mechanical observation results alongside their linked PO/model, lot ID, controlled document ID/revision, and record/evidence ID.</li>
<li><strong class="font-semibold text-gray-800">Strict non-testing boundary:</strong> This workflow recommends <strong class="font-semibold text-gray-800">retaining and logging pre-existing approved records only</strong>. It does <strong class="font-semibold text-gray-800">not</strong> teach or authorize new on-site test procedures, test steps, electrical probing, energized tests, insulation tests, terminal mapping, wiring, assembly, sampling plans, sample counts, dimensional tolerances, acceptance thresholds, or product pass guarantees.</li>
</ul>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Receiving Identity Checks</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Effective receiving verifies each packaging layer for the specific fields that legitimately belong at that layer—rather than demanding that every physical unit label reproduce the entire purchase order or drawing text character-for-character.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">What to Check at Each Layer</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Segregate mixed lots on arrival and record observed layer fields against the corresponding baseline document. Where a physical lamp-voltage label or code actually exists and applies to the ordered model, record the observed text verbatim and cross-check it against the PO and signed model documentation—never assume a catalog field code must appear on every physical unit or treat a printed label as an electrical test conclusion.</p>
<ul id="receiving-layers" class="eb2m-card-list" role="list">
<li id="layer-paperwork" class="eb2m-card">
<h4>Shipment paperwork (delivery note / packing list)</h4>
<p>PO number, PO line, ordered model reference, shipment quantity, lot/batch reference, accompanied controlled document IDs and revisions.</p>
<dl class="eb2m-fields">
<div><dt>Check against</dt><dd>Released PO line &amp; required controlled document list</dd></div>
<div><dt>If evidence differs</dt><dd>Route to <strong class="font-semibold text-gray-800">Hold</strong> if required controlled documents, revisions, approved records, or PO-specified files are pending or wrong revision</dd></div>
</dl>
</li>
<li id="layer-carton" class="eb2m-card">
<h4>Outer carton label</h4>
<p>Carton model designation, carton quantity, supplier lot or batch ID, and observed lamp-voltage label/code only where physically present and applicable to the ordered model.</p>
<dl class="eb2m-fields">
<div><dt>Check against</dt><dd>Delivery note, frozen PO line &amp; signed model documentation</dd></div>
<div><dt>If evidence differs</dt><dd>Route to <strong class="font-semibold text-gray-800">Quarantine</strong> on confirmed model, lot, or marking mismatch</dd></div>
</dl>
</li>
<li id="layer-inner" class="eb2m-card">
<h4>Inner bag / inner box label</h4>
<p>Inner-pack model text, inner quantity, lot/batch continuity within multi-bag cartons, and observed lamp-voltage label/code only where physically present and applicable to the ordered model.</p>
<dl class="eb2m-fields">
<div><dt>Check against</dt><dd>Outer carton label, frozen PO line &amp; signed model documentation</dd></div>
<div><dt>If evidence differs</dt><dd>Segregate mixed inner packs into separate rows; route confirmed label or lot mismatch to <strong class="font-semibold text-gray-800">Quarantine</strong></dd></div>
</dl>
</li>
<li id="layer-unit" class="eb2m-card">
<h4>Physical unit markings</h4>
<p>Visible unit markings, legends, exterior stamps, and observed physical lamp-voltage marking/code only where physically present and applicable to the ordered model (not expected to repeat full PO/drawing text).</p>
<dl class="eb2m-fields">
<div><dt>Check against</dt><dd>Frozen PO line &amp; signed drawing/artwork/model documentation</dd></div>
<div><dt>If evidence differs</dt><dd>Route to <strong class="font-semibold text-gray-800">Quarantine</strong> on confirmed marking mismatch against approved order documents; never infer physical electrical conditions from a label</dd></div>
</dl>
</li>
<li id="layer-records" class="eb2m-card">
<h4>Pre-existing approved inspection records (per approved plan)</h4>
<p>Pre-existing visual/mechanical observation result (if required), pre-existing de-energized verification result, linked PO/model &amp; lot, controlled doc ID/rev, record/evidence ID.</p>
<dl class="eb2m-fields">
<div><dt>Check against</dt><dd>Applicable approved inspection plan &amp; PO baseline</dd></div>
<div><dt>If evidence differs</dt><dd>Route to <strong class="font-semibold text-gray-800">Hold</strong> if required records are pending, show an abnormal result, or leave the approved plan unsatisfied (with no confirmed identity mismatch); route to <strong class="font-semibold text-gray-800">Quarantine</strong> if linked model/lot data confirm a mismatch with the shipment</dd></div>
</dl>
</li>
</ul>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Limits of Catalog Evidence</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">When reviewing supplier catalog excerpts (original PDF p.64–71, printed p.6–13) alongside incoming shipments, keep three documented catalog boundaries clear:</p>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Adjacent catalog photo discrepancy (PDF p.67):</strong> On supplier catalog PDF p.67, the sample photograph placed adjacent to the <code class="[overflow-wrap:anywhere]">-01</code> emergency-stop row (nominally <code class="[overflow-wrap:anywhere]">1NC</code>) visibly displays <code class="[overflow-wrap:anywhere]">13–14 (NO)</code>. Treat this solely as an example of a <strong class="font-semibold text-gray-800">discrepancy between neighboring catalog contents</strong>. That catalog photo does <strong class="font-semibold text-gray-800">not</strong> prove the actual terminals of any ordered product, nor does it prove a physical mismatch on received goods, safety function, IP rating, or compliance. Incoming shipments for exact models must be verified strictly against the PO, signed drawings, and approved records.</li>
<li><strong class="font-semibold text-gray-800">Catalog lamp-voltage codes as printed references only (PDF p.65, p.69):</strong> Supplier catalog PDF p.65 and p.69 print lamp-voltage ordering codes such as <code class="[overflow-wrap:anywhere]">28</code> and <code class="[overflow-wrap:anywhere]">31</code> strictly as catalog ordering-table references. Do <strong class="font-semibold text-gray-800">not</strong> extrapolate catalog field codes as mandatory physical unit markings, do <strong class="font-semibold text-gray-800">not</strong> infer physical electrical conditions from printed labels, and record a physical lamp-voltage marking at receiving only when it actually exists and applies to the ordered model.</li>
<li><strong class="font-semibold text-gray-800">Catalog outline drawings as identification references only (PDF p.66, p.70):</strong> The <code class="[overflow-wrap:anywhere]">-10</code> end-view and side-view outline drawings printed on supplier catalog PDF p.66 (Type A) and p.70 (Type B) serve strictly as <strong class="font-semibold text-gray-800">visual identification references</strong>. They cannot be used alone as incoming acceptance dimensions or pass/fail conclusions. Similarly, general series-level catalog data lack model-level test methods, measurement conditions, and acceptance standards, so they cannot serve as receiving pass/fail thresholds.</li>
</ul>
<figure class="my-6"><img alt="Conceptual receiving traceability diagram linking PO line, signed drawing revision, carton, bag, and unit labels, lot ID, and photo or record ID, accompanied by catalog PDF p.66 and p.70 -10 end and side views for identification only" class="rounded-xl border border-gray-100" decoding="async" height="900" loading="lazy" src="/optimized/display/images/blog/eb2m-type-a-vs-type-b-receiving-id-guide-v2.webp" width="1200"/><figcaption class="mt-2 text-sm leading-6 text-gray-600">Traceability linkage connecting the PO line, signed drawing revision, carton/bag/unit labels, lot ID, and photo/record ID, accompanied by supplier catalog PDF p.66 and p.70 <code class="[overflow-wrap:anywhere]">-10</code> end-view and side-view outlines strictly for visual identification. Conceptual diagram with catalog outline reference only (not a product photograph); outlines do not define acceptance dimensions or test procedures.</figcaption></figure>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Photo Evidence and File Naming</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Visual capture at receiving is best configured per each facility's or project's approved receiving procedure rather than enforced as a fixed photo count or sampling quota. Where photo logging is used, apply a consistent bracket-placeholder naming convention that links each file cleanly to a single receiving log row:</p>
<ul class="my-4 list-disc space-y-2 pl-5 text-sm leading-7 text-gray-600">
<li><strong class="font-semibold text-gray-800">Copyable filename template:</strong> <code class="[overflow-wrap:anywhere]">[YYYYMMDD]_PO[PO_Number]_L[Line_Number]_LOT[Lot_ID]_[Evidence_Field]_[Seq].[ext]</code></li>
</ul>
<dl id="photo-evidence" class="eb2m-fields eb2m-card">
<div><dt>Shipment paperwork packet · <code class="[overflow-wrap:anywhere]">[DOC]</code></dt><dd>Delivery note, packing list, and controlled document/revision headers tied to the PO line</dd></div>
<div><dt>Outer carton label · <code class="[overflow-wrap:anywhere]">[CTN]</code></dt><dd>Outer container model text, quantity, lot/batch ID, and applicable lamp-voltage label if present prior to unsealing</dd></div>
<div><dt>Inner bag / box label · <code class="[overflow-wrap:anywhere]">[BAG]</code></dt><dd>Inner-pack model text, lot/batch continuity, and applicable lamp-voltage label if present inside the shipping container</dd></div>
<div><dt>Visible unit marking · <code class="[overflow-wrap:anywhere]">[UNIT]</code></dt><dd>Applicable exterior markings, actuator legends, or present physical lamp-voltage marking logged against approved model documents</dd></div>
<div><dt>Discrepancy evidence · <code class="[overflow-wrap:anywhere]">[DISC]</code></dt><dd>Confirmed mismatch captured alongside a status tag displaying <code class="[overflow-wrap:anywhere]">[PO_Number]</code>, <code class="[overflow-wrap:anywhere]">[Line_Number]</code>, and <code class="[overflow-wrap:anywhere]">[Lot_ID]</code></dd></div>
</dl>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Receiving Evidence Log and Examples</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Maintain one structured receiving log per incoming shipment so warehouse, quality, and procurement teams can trace every lot, applicable physical marking, pre-existing approved record, written disposition archive, and authorization sign-off without reopening sealed containers.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Fields for the Receiving Log</h3>
<dl id="master-receiving-evidence" class="eb2m-fields eb2m-card">
<div id="receiving-log-identity"><dt>Order and lot</dt><dd>PO number and line, frozen model text, and lot / batch ID.</dd></div>
<div id="receiving-log-documents"><dt>Documents and observed labels</dt><dd>Signed drawing or controlled document ID and revision, delivery note number, carton and bag label fields, and applicable unit markings. For the lamp-voltage label, record the observed text only if applicable and present, or enter N/A.</dd></div>
<div id="receiving-log-records"><dt>Pre-existing approved results and evidence</dt><dd>Observation result or N/A, de-energized result, approved plan or controlled document ID and revision, and record and photo IDs.</dd></div>
<div id="receiving-log-decision"><dt>Discrepancy and disposition</dt><dd>Record the issue or unmet gate: none, pending evidence, abnormal pre-existing result, unmet plan, pending sign-off, or confirmed identity mismatch. Enter <code class="[overflow-wrap:anywhere]">Release</code>, <code class="[overflow-wrap:anywhere]">Hold</code>, or <code class="[overflow-wrap:anywhere]">Quarantine</code>.</dd></div>
<div id="receiving-log-authorization"><dt>Written disposition and signatures</dt><dd>Record the written disposition document ID (if any, otherwise N/A), inspector and date, and designated authorizer’s sign-off and date.</dd></div>
</dl>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Illustrative Receiving Entries</h3>
<p class="mb-4 text-sm leading-7 text-gray-600"><em>Scope note: The four examples below illustrate a <strong class="font-semibold text-gray-800">generic receiving documentation workflow</strong>. They cover <code class="[overflow-wrap:anywhere]">Release</code>, <code class="[overflow-wrap:anywhere]">Hold</code> (pending evidence), <code class="[overflow-wrap:anywhere]">Hold</code> (abnormal pre-existing record result / unmet approved plan / pending authorization sign-off), and <code class="[overflow-wrap:anywhere]">Quarantine</code> (confirmed identity mismatch). Any written disposition outcome is determined by the designated authorized person per approved documents and is not preset by this template; the examples do not represent real customer shipments, supplier incidents, or confirmed complete product part numbers.</em></p>
<div id="receiving-example-identity" class="eb2m-note">
<p>Link each example entry to its PO number and line, frozen model text, approved drawing ID and revision, delivery note number, and lot ID.</p>
</div>
<ul id="receiving-workflow" class="eb2m-card-list" role="list">
<li id="receiving-example-release" class="eb2m-card">
<h4><code class="[overflow-wrap:anywhere]">Release</code> · Aligned evidence and signed release</h4>
<p>The evidence is complete and consistent, and the applicable approved plan is satisfied. No discrepancy is logged.</p>
<dl class="eb2m-fields">
<div><dt>Identity evidence</dt><dd>The delivery note is linked. Carton, bag, applicable unit markings, and any applicable lamp-voltage label present align with the PO baseline and approved drawing revision.</dd></div>
<div><dt>Pre-existing records and photos</dt><dd>Log the pre-existing observation per the approved plan, de-energized result, plan document ID and revision, record ID, and photo IDs.</dd></div>
<div><dt>Action and sign-off</dt><dd>Archive the written disposition reference if applicable, or record N/A. Record the inspector and designated authorizer sign-offs and dates before stock transfer.</dd></div>
</dl>
</li>
<li id="receiving-example-hold-evidence" class="eb2m-card">
<h4><code class="[overflow-wrap:anywhere]">Hold</code> · Pending evidence</h4>
<p>No confirmed identity mismatch, but a document at the required approved revision, a PO-specified file, or a pre-existing approved record is pending.</p>
<dl class="eb2m-fields">
<div><dt>Identity evidence</dt><dd>The delivery note is linked and the approved drawing revision is the PO baseline. Carton, bag, and unit labels show no identity conflict with the frozen model. Log applicable lamp-voltage label text or N/A.</dd></div>
<div><dt>Pre-existing records and photos</dt><dd>The observation and approved de-energized record are pending. Link the paperwork and carton photo IDs.</dd></div>
<div><dt>Action and sign-off</dt><dd>Stop stock transfer. Await the documents and the designated authorizer’s written disposition and sign-off per approved documents.</dd></div>
</dl>
</li>
<li id="receiving-example-hold-records" class="eb2m-card">
<h4><code class="[overflow-wrap:anywhere]">Hold</code> · Abnormal record or unmet gate</h4>
<p>No confirmed identity mismatch, but pre-existing approved record shows an abnormal result, applicable approved plan is not satisfied, or authorization sign-off is pending.</p>
<dl class="eb2m-fields">
<div><dt>Identity evidence</dt><dd>The delivery note is linked. Carton, bag, and unit labels show no confirmed identity mismatch with the frozen model. Log applicable lamp-voltage label text or N/A.</dd></div>
<div><dt>Pre-existing records and photos</dt><dd>Log the pre-existing observation and the abnormal de-energized result with the plan document ID and revision, record ID, and photo IDs.</dd></div>
<div><dt>Action and sign-off</dt><dd>Stop stock transfer. Keep the lot on Hold pending written disposition determined by the designated authorizer per approved documents and archived closure.</dd></div>
</dl>
</li>
<li id="receiving-example-quarantine" class="eb2m-card">
<h4><code class="[overflow-wrap:anywhere]">Quarantine</code> · Confirmed identity mismatch</h4>
<p>Confirmed model, lot, or marking mismatch against frozen PO baseline and signed model documentation.</p>
<dl class="eb2m-fields">
<div><dt>Identity evidence</dt><dd>The delivery note is linked and the outer carton aligns with the PO line, but the inner bag, unit marking, or applicable lamp-voltage label present contradicts the frozen model or lot ID.</dd></div>
<div><dt>Pre-existing records and photos</dt><dd>Observation and de-energized result are N/A because processing stopped on a confirmed mismatch. Link the discrepancy photo IDs.</dd></div>
<div><dt>Action and sign-off</dt><dd>Physically segregate the lot in the designated quarantine area. Await the designated authorizer’s written disposition per approved documents and log closure.</dd></div>
</dl>
</li>
</ul>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Receiving Disposition Rules</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Disposition at receiving follows <strong class="font-semibold text-gray-800">exactly three branches</strong> (<code class="[overflow-wrap:anywhere]">Release</code>, <code class="[overflow-wrap:anywhere]">Hold</code>, and <code class="[overflow-wrap:anywhere]">Quarantine</code>) governed by documentary completeness, approved-plan satisfaction, recorded-result status, identity alignment, written disposition archiving (where applicable), and designated authorization. <strong class="font-semibold text-gray-800">Whenever any release gate is unmet—including an abnormal pre-existing record result, an unsatisfied approved plan, or pending authorization sign-off—physical transfer to stock must stop immediately. Goods must never be transferred to stock first with authorization sign-off added retroactively.</strong></p>
<figure class="my-6"><img alt="Conceptual three-branch receiving disposition decision tree routing lots to Release after complete evidence, approved plan satisfaction, and authorized sign-off, to Hold on missing documents or records, or to Quarantine on confirmed mismatch, preserving the PDF p.67 13-14 NO versus -01 1NC evidence distinction" class="rounded-xl border border-gray-100" decoding="async" height="900" loading="lazy" src="/optimized/display/images/blog/eb2m-iqc-continuity-quarantine-decision-tree-v2.webp" width="1200"/><figcaption class="mt-2 text-sm leading-6 text-gray-600">Conceptual three-branch receiving disposition logic (<code class="[overflow-wrap:anywhere]">Release</code>, <code class="[overflow-wrap:anywhere]">Hold</code>, <code class="[overflow-wrap:anywhere]">Quarantine</code>) preserving the PDF p.67 <code class="[overflow-wrap:anywhere]">13–14 (NO)</code> vs. <code class="[overflow-wrap:anywhere]">-01</code> (<code class="[overflow-wrap:anywhere]">1NC</code>) evidence-level distinction. In this diagram, "evidence or inspection record pending" illustrates one common example of <code class="[overflow-wrap:anywhere]">Hold</code>; refer to Disposition and Authorization Gates below for the complete set of <code class="[overflow-wrap:anywhere]">Hold</code> conditions—including abnormal results in pre-existing approved records, unsatisfied approved plans, or pending authorization sign-off where no confirmed identity mismatch exists. Conceptual graphic only (does not draw every exception-branch detail, and depicts no numerical thresholds, probes, or new tests).</figcaption></figure>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Disposition and Authorization Gates</h3>
<ul id="receiving-disposition" class="eb2m-card-list" role="list">
<li id="disposition-release" class="eb2m-card">
<h4><strong class="font-semibold text-gray-800">Release</strong> (Transfer to Stock)</h4>
<dl class="eb2m-fields">
<div><dt>When to use</dt><dd>Layer identity fields (including applicable physical lamp-voltage markings where present) align with PO and signed model documents; evidence is complete and consistent; the order's applicable approved inspection plan is fully satisfied (with no unresolved abnormal pre-existing record results); any PO-specified project documents are scope-verified; and any required written disposition is archived</dd></div>
<div><dt>Immediate action</dt><dd>Complete master receiving log row, attach configured photo/record IDs, and keep cartons at dock until authorization signature is recorded</dd></div>
<div><dt>Authorization and closure</dt><dd><strong class="font-semibold text-gray-800">Designated authorized person signs off before physical transfer to stock</strong> (with any applicable written disposition archived). Never transfer goods into stock first and complete sign-off later</dd></div>
</dl>
</li>
<li id="disposition-hold" class="eb2m-card">
<h4><strong class="font-semibold text-gray-800">Hold</strong> (Awaiting Authorized Disposition)</h4>
<dl class="eb2m-fields">
<div><dt>When to use</dt><dd><strong class="font-semibold text-gray-800">No confirmed model, lot, or marking identity mismatch</strong>, but release conditions are not met—common example: required controlled documents, revisions, PO-specified files, or pre-existing approved records are pending; <strong class="font-semibold text-gray-800">also applies</strong> whenever pre-existing approved records are complete but show an abnormal result, the applicable approved inspection plan is not satisfied, or designated authorization sign-off has not yet been recorded</dd></div>
<div><dt>Immediate action</dt><dd><strong class="font-semibold text-gray-800">Stop transfer to stock immediately</strong>; affix visible <code class="[overflow-wrap:anywhere]">HOLD</code> tag citing <code class="[overflow-wrap:anywhere]">[PO_Number]</code>, <code class="[overflow-wrap:anywhere]">[Line_Number]</code>, and <code class="[overflow-wrap:anywhere]">[Lot_ID]</code>; log exact pending items, abnormal record reference, or unmet plan condition</dd></div>
<div><dt>Authorization and closure</dt><dd>Missing evidence reconciled or abnormal/unmet condition reviewed by the designated authorized person; written disposition (determined per approved documents, without presetting the outcome) archived and designated authorizer signs off before any <code class="[overflow-wrap:anywhere]">Release</code></dd></div>
</dl>
</li>
<li id="disposition-quarantine" class="eb2m-card">
<h4><strong class="font-semibold text-gray-800">Quarantine</strong> (Physical Segregation)</h4>
<dl class="eb2m-fields">
<div><dt>When to use</dt><dd><strong class="font-semibold text-gray-800">Used strictly when there is a confirmed mismatch</strong> in model designation, lot/batch identifier, or visible markings (including applicable present lamp-voltage markings) against the PO line, signed drawing/model revision, or linked approved records</dd></div>
<div><dt>Immediate action</dt><dd><strong class="font-semibold text-gray-800">Stop transfer to stock and halt receiving processing immediately</strong>; capture <code class="[overflow-wrap:anywhere]">[DISC]</code> photo if configured; affix visible <code class="[overflow-wrap:anywhere]">QUARANTINE</code> tag; move affected containers physically to a designated segregated quarantine area</dd></div>
<div><dt>Authorization and closure</dt><dd>Designated authorized person completes review in accordance with approved documents; written disposition (outcome not preset) and closure record logged and signed before closing the quarantine record</dd></div>
</dl>
</li>
</ul>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Containment, Audit Trail, and Closure</h3>
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
