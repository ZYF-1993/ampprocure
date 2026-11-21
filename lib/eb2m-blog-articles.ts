export const EB2M_ARTICLES = [
  {
    post: {
      slug: "22mm-push-button-switch-wiring-installation-guide",
      title: "22mm Push Button Switch Wiring and Panel Installation Guide",
      description: "A panel-builder reference for mounting and wiring preparation with EB2M 22mm push button switches, covering Φ22 mm nominal cutouts, head-type panel-thickness evidence, NO/NC contact codes, generic control logic, and supplier verification checks.",
      tags: [
        "Wiring & Installation",
        "22mm Push Buttons"
      ],
      image: "/optimized/display/images/blog/eb2m-22mm-push-button-wiring-hero.webp",
      imageAlt: "Rear view of mounted 22mm push button switch bodies with neatly dressed control panel wiring",
      publishedAt: "Nov 21, 2026",
      readingMinutes: 7
    },
    detail: {
      title: "22mm Push Button Switch Wiring and Panel Installation Guide",
      metaTitle: "22mm Push Button Switch Wiring & Installation",
      description: "Mount and plan EB2M 22mm push button switches accurately: Φ22 mm nominal cutout, Type A/B flush outlines, NO/NC codes, and verification checks.",
      author: "UPprocure Engineering Team",
      wordCount: 1658,
      articleHtml: `<div class="prose-custom">
<p class="mb-4 text-sm leading-7 text-gray-600">Accurate panel preparation and pre-wiring verification prevent costly door rework during cabinet assembly. When building control doors around the <a href="/solutions/22mm-push-button-switch" class="font-medium text-green-700 underline">EB2M 22mm push button switch series</a>, installation problems usually come from applying one flush-button outline to all operators, assuming unprinted tolerances, or landing conductors before checking the exact model drawing against delivered hardware.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">This guide covers mounting preparation, catalog contact codes, generic control logic, and model-level items to confirm with the supplier before punching doors or terminating wires. If you are still choosing operator families or body types, review <a href="/blog/how-to-choose-22mm-push-button-switch" class="font-medium text-green-700 underline">how to choose a 22mm push button switch</a> first.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Panel Cutout, Head-Type Thickness, and Mechanical Mounting</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Both Type A (<code>EB2M-A</code>) and Type B (<code>EB2M-B</code>) series pages state the catalog nominal designation <strong>Φ22 mm</strong> for panel mounting. The catalog does not publish a toleranced cutout drawing, anti-rotation notch dimensions, or minimum hole pitch. Before cutting steel, request the panel machining drawing for each ordered model from the supplier to verify cutout tolerance, panel thickness limits, anti-rotation provisions, and spacing.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Reading Type A and Type B Flush Outline Dimensions</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Type A (<code>EB2M-A</code>, standard modular body) and Type B (<code>EB2M-B</code>, compact body) share series-level electrical data and six colors. Commonly cited dimensions come strictly from the <strong><code>EB2M-A-10</code></strong> and <strong><code>EB2M-B-10</code></strong> flush button outline drawings, not from every operator in the catalog.</p>
<div class="mb-5 overflow-x-auto"><table class="w-full border-collapse text-left text-sm text-gray-600">
<thead class="bg-gray-50"><tr>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Attribute (<code>-10</code> Flush Drawing Only)</th>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Type A (<code>EB2M-A-10</code>)</th>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Type B (<code>EB2M-B-10</code>)</th>
</tr></thead><tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Nominal Cutout (Series)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Φ22 mm</td>
<td class="border border-gray-200 px-3 py-2 align-top">Φ22 mm</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Body Style</td>
<td class="border border-gray-200 px-3 py-2 align-top">Modular body, side-clip contact blocks</td>
<td class="border border-gray-200 px-3 py-2 align-top">Compact body</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">End-View Outline (<code>-10</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">52 × 30 mm (43 mm additional drawing dimension)</td>
<td class="border border-gray-200 px-3 py-2 align-top">40 × 30 mm (33.5 mm side-view width)</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Projection &amp; Height (<code>-10</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">11 mm above panel; 50 mm behind panel</td>
<td class="border border-gray-200 px-3 py-2 align-top">60 mm overall height incl. 11 mm above panel</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Layout Scope</td>
<td class="border border-gray-200 px-3 py-2 align-top">Flush reference only; verify other heads</td>
<td class="border border-gray-200 px-3 py-2 align-top">Flush reference only; verify other heads</td>
</tr>
</tbody></table></div>
<p class="mb-4 text-sm leading-7 text-gray-600">Note two points during layout: <strong>43 mm</strong> on <code>EB2M-A-10</code> is an additional drawing dimension to verify on the outline sheet, and <strong>60 mm</strong> on <code>EB2M-B-10</code> is the <strong>overall height</strong> including the 11 mm front projection, not rear depth alone.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">Do not use <code>-10</code> flush outlines to size spacing across mixed operators. Other heads have different envelopes—Type A drawings show a 54 mm head and 52 mm rear depth on the flat double button and a Φ40 mm head on the emergency stop, while <code>/FH</code> symbol flush buttons have no separate outline drawing. Check head envelopes, rear wire bend radius, and tool access against each ordered model's drawing.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Catalog Panel-Thickness Evidence by Head Type</h3>
<figure class="my-6"><img src="/optimized/display/images/blog/eb2m-panel-cutout-rear-wiring-inline.webp" alt="Comparison of rear panel clearance and wiring layout for modular and compact 22mm push button bodies" width="1600" height="1200" loading="lazy" decoding="async" class="h-auto w-full rounded-xl" /></figure>
<p class="mb-4 text-sm leading-7 text-gray-600">Panel thickness is labeled selectively across head-type drawing groups. Confirm every unlabeled or ambiguous model with the supplier before fabrication.</p>
<div class="mb-5 overflow-x-auto"><table class="w-full border-collapse text-left text-sm text-gray-600">
<thead class="bg-gray-50"><tr>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Head-Type Drawing Group</th>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Type A (<code>EB2M-A</code>) Thickness</th>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Type B (<code>EB2M-B</code>) Thickness</th>
</tr></thead><tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Flush (<code>-10</code>, <code>-10T</code>, <code>-10D</code>, <code>-10DT</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">1.5–6 mm</td>
<td class="border border-gray-200 px-3 py-2 align-top">Not labeled</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Mushroom (<code>-10M</code>, <code>-10MT</code>, <code>-10MD</code>, <code>-10MTD</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">1–6 mm</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code>1–6</code> without dimension line; confirm scope</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Lever selectors (short/long, incl. illuminated)</td>
<td class="border border-gray-200 px-3 py-2 align-top">1.5–6 mm</td>
<td class="border border-gray-200 px-3 py-2 align-top">Not labeled</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Key switches (<code>-10Y</code> / <code>-20YS</code> group)</td>
<td class="border border-gray-200 px-3 py-2 align-top">1–6 mm</td>
<td class="border border-gray-200 px-3 py-2 align-top">1–6 mm</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Key switches (<code>-10CY</code> / <code>-20CYS</code> group)</td>
<td class="border border-gray-200 px-3 py-2 align-top">1.5–6 mm</td>
<td class="border border-gray-200 px-3 py-2 align-top">Not labeled</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Emergency stop (two drawn groups)</td>
<td class="border border-gray-200 px-3 py-2 align-top">1–6 mm (<code>/A</code> no separate drawing)</td>
<td class="border border-gray-200 px-3 py-2 align-top">1–6 mm (<code>/A</code> no separate drawing)</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Double buttons (flat/extended/oval, incl. illuminated)</td>
<td class="border border-gray-200 px-3 py-2 align-top">1.5–6 mm</td>
<td class="border border-gray-200 px-3 py-2 align-top">1.5–6 mm</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Symbol flush buttons (<code>/FH</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">No separate outline drawing</td>
<td class="border border-gray-200 px-3 py-2 align-top">No separate outline drawing</td>
</tr>
</tbody></table></div>
<p class="mb-4 text-sm leading-7 text-gray-600">Even where <code>1–6 mm</code> or <code>1.5–6 mm</code> appears, confirm the range against the exact ordered model code and drawing revision prior to punching steel.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Pre-Wiring Mechanical Checks on the Enclosure Door</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Before landing conductors, check four mechanical points:</p>
<ul class="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li>Deburr every Φ22 mm cutout so sharp metal or paint edges do not damage the body or impede firm seating.</li>
<li>Check for firm mounting without play; do not assume sealing gasket hardware or anti-rotation structures as fixed model features without supplier confirmation.</li>
<li>Verify door-swing clearance and rear tool access against subpanel gear, distinguishing <code>EB2M-A-10</code> rear depth (50 mm) from <code>EB2M-B-10</code> overall height (60 mm including 11 mm above panel).</li>
<li>Check upright orientation on double push buttons (<code>-11PRG</code>, <code>-11HRG</code>, <code>-11RG</code>, and illuminated versions) and selectors so legends (<code>I/O</code>, <code>ON/OFF</code>, <code>START/STOP</code>) align cleanly.</li>
</ul>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Mapping NO and NC Contact Codes Before Termination</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Accurate wiring starts by reading the catalog suffix and verifying delivered hardware before termination. In the <a href="/solutions/22mm-push-button-switch" class="font-medium text-green-700 underline">EB2M 22mm push button catalog</a>, the two-digit code after the body prefix states the documented contact arrangement.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Decoding EB2M Contact Suffixes (-10, -01, -11, -20)</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">The first digit states normally open (NO) contacts; the second states normally closed (NC) contacts:</p>
<ul class="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li><strong><code>-10</code> (1NO):</strong> Flush buttons (<code>-10</code>, <code>-10T</code>, <code>-10D</code>, <code>-10DT</code>), mushroom heads (<code>-10M</code>, <code>-10MT</code>, <code>-10MD</code>, <code>-10MTD</code>), 2-position keys (<code>-10Y</code>, <code>-10CY</code>, <code>-10CY/fu</code>), and 2-position selectors (<code>-10X</code>, <code>-10CX</code>, plus illuminated and <code>/fu</code> versions).</li>
<li><strong><code>-01</code> (1NC):</strong> Twist-release emergency stops (<code>-01ZS</code>, <code>-01ZS/A</code>, <code>-01ZS/B</code>, <code>-01DZS</code>, <code>-01DZS/A</code>).</li>
<li><strong><code>-11</code> (1NO1NC):</strong> Double push buttons (<code>-11PRG</code>, <code>-11PDRG</code>, <code>-11HRG</code>, <code>-11HDRG</code>, <code>-11RG</code>, <code>-11DRG</code>).</li>
<li><strong><code>-20</code> (2NO):</strong> 3-position selectors (<code>-20XS</code>, <code>-20XS/f.fu</code>, <code>-20CXS</code>, <code>-20CXS/f.fu</code>, illuminated versions) and 3-position keys (<code>-20YS</code>, <code>-20CYS</code>, <code>-20CYS/f.fu</code>).</li>
</ul>
<p class="mb-4 text-sm leading-7 text-gray-600">For selector spring-return codes (<code>f</code>, <code>fu</code>, <code>f.fu</code>), see <a href="/blog/22mm-selector-switch-key-switch-spring-return-hand-off-auto" class="font-medium text-green-700 underline">22mm selector and key switches</a>.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Terminal Markings, the Emergency-Stop Photo Discrepancy, and Torque Checks</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">On Type A (<code>EB2M-A</code>), confirm side-clip contact blocks are fully seated before wiring. Never infer terminal layouts from catalog photos alone.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">Enlarged catalog photographs show <strong><code>13–14 (NO)</code></strong> printed on Type A and Type B flush button samples. However, <strong>the Type A emergency-stop sample photo in the <code>-01ZS</code> / <code>-01DZS</code> catalog column also shows <code>13–14 (NO)</code></strong>, conflicting with the <code>-01</code> (1NC) code for that group. Because of this conflict, the sample photo cannot determine emergency-stop terminals.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">The catalog also omits a complete terminal table, NC/lamp terminal numbers, position contact maps, wire cross-sections, permitted wire ends, conductors per terminal, and torques. Before assembly:</p>
<ul class="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li>Request <strong>two separate torque figures</strong> from supplier documentation: mounting locking-ring/nut torque and terminal screw torque, plus assembly instructions. Use samples only to inspect parts and markings.</li>
<li>Obtain the supplier's model wiring diagram, read physical markings on each delivered unit, and verify NO/NC transitions with a continuity meter while de-energized.</li>
<li>Choose wire gauges, wire ends (such as insulated ferrules, only where permitted by terminal specs), and wires per terminal per confirmed supplier terminal data.</li>
</ul>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Generic Control Logic and Model Verification Before Wiring</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Because terminal tables and actuator-to-contact routing are unpublished, design circuits as generic logic first, then map terminals only after reviewing supplier wiring diagrams and running de-energized continuity checks.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Generic Three-Wire Start-Stop Latching Principle</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">A conventional three-wire contactor seal-in circuit puts one generic NC stop contact in series with a parallel pair of a generic momentary NO start contact and a contactor auxiliary NO holding contact:</p>
<ol class="mb-4 list-decimal space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li>Feed protected control supply through a fuse or breaker to a generic NC stop contact.</li>
<li>Connect the NC stop output in parallel to a generic momentary NO start contact and the contactor auxiliary NO holding contact.</li>
<li>Tie both NO outputs together and route that node to the contactor coil input.</li>
<li>Route the coil return through any overload relay NC trip contact back to the control return rail.</li>
</ol>
<p class="mb-4 text-sm leading-7 text-gray-600">Pressing start energizes and latches the coil; pressing stop opens the series path. Do <strong>not</strong> assign EB2M terminal numbers from this generic principle or insert an emergency stop into this generic chain. No emergency-stop wiring is inferred here; any safety circuit must follow applicable machine-safety standards, rely on confirmed supplier wiring documentation, and be designed and verified by a qualified engineer. See our <a href="/blog/22mm-emergency-stop-button-twist-release-guide" class="font-medium text-green-700 underline">22mm emergency stop button guide</a> for pre-order checks.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Reviewing Double Push Buttons (-11) Without Assumed Terminal Mapping</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">EB2M double push buttons (<code>-11PRG</code>, <code>-11HRG</code>, <code>-11RG</code>, illuminated <code>-11PDRG</code>, <code>-11HDRG</code>, <code>-11DRG</code>) carry a nominal <code>-11</code> (1NO1NC) code with red/green actuators and markings <code>R</code>, <code>R1–R7</code> (<code>I/O</code>, <code>ON/OFF</code>, <code>START/STOP</code>). Because the catalog gives no color-to-terminal map, do not assign terminals by actuator color or pre-plan jumpers from catalog codes. Confirm actuator-to-contact mapping from supplier wiring diagrams and de-energized continuity checks.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Verifying Lamp Data and Contact Ratings on Illuminated Models</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">On illuminated models (<code>-10D</code>, <code>-10DT</code>, <code>-10MD</code>, <code>-10MTD</code>, <code>-10XD</code>, <code>-20XSD</code>, <code>-10CXD</code>, <code>-20CXSD</code>, <code>-11PDRG</code>, <code>-11HDRG</code>, <code>-11DRG</code>, <code>-01DZS</code>, <code>-01DZS/A</code>), check ordering lamp voltage and contact ratings separately against supplier data.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">Catalog lamp voltages are <strong>6, 12, 24, 36, 48, 110, and 127 V AC/DC; 220 V DC; and 220 V or 380 V AC</strong>. The catalog does <strong>not</strong> confirm lamp type, replaceability, operating/inrush current, DC polarity, lamp terminal numbers, shared terminals, or lamp-to-contact isolation (printed <code>≥10 MΩ</code> insulation resistance does not specify lamp-to-contact scope). Do not assume isolated lamp terminals, mixed-voltage supply, lamp-in-parallel-with-coil wiring, auxiliary-contact feeds, or PLC direct drive. Confirm exact model and voltage-version wiring diagrams, lamp ratings, DC polarity, and isolation with the supplier before finalizing schematics.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Reviewing AC-15 and DC-13 Contact Ratings</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">The <a href="/solutions/22mm-push-button-switch" class="font-medium text-green-700 underline">EB2M 22mm push button switch specifications</a> state <strong>Ith 10 A</strong> and switching ratings under <strong>AC-15</strong> and <strong>DC-13</strong> (as defined in IEC 60947-5-1):</p>
<ul class="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li><strong>AC-15:</strong> 36 V / 10 A, 110 V / 10 A, 220 V / 5 A, 380 V / 2.7 A, 660 V / 1.8 A.</li>
<li><strong>DC-13:</strong> 24 V / 4 A, 48 V / 4 A, 110 V / 2 A, 220 V / 1 A, 440 V / 0.6 A.</li>
</ul>
<p class="mb-4 text-sm leading-7 text-gray-600">Allowable breaking current drops sharply on DC-13 (5 A at 220 V AC-15 vs. 1 A at 220 V DC-13). Do not infer low-level PLC input suitability directly from AC-15 / DC-13 ratings. Because <strong>electrical life is unstated in the catalog</strong>, request model-level electrical endurance evidence from the supplier for high-duty inductive loads. Browse related panel gear in our <a href="/products" class="font-medium text-green-700 underline">products catalog</a>.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Commissioning and Pre-Energization Inspection Checklist</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Before energizing a wired door, verify five items against supplier documentation:</p>
<ol class="mb-4 list-decimal space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li><strong>Mechanical fit and torque:</strong> Each operator sits squarely in its Φ22 mm cutout within confirmed panel thickness, tightened to specified mounting torque.</li>
<li><strong>De-energized contact check:</strong> Every <code>-10</code>, <code>-01</code>, <code>-11</code>, and <code>-20</code> unit passes de-energized continuity checks confirming physical markings against the supplier wiring diagram.</li>
<li><strong>Emergency-stop review:</strong> Any emergency-stop model uses confirmed supplier documentation—never sample photos—and qualified-engineer review under applicable machine-safety standards.</li>
<li><strong>Ratings and lamp data:</strong> Loads fit AC-15 / DC-13 ratings, and illuminated models match confirmed lamp voltage, type, current, DC polarity, and wiring topology.</li>
<li><strong>Door-hinge wiring:</strong> Wire routing matches actual terminal orientation and assembly without straining <code>EB2M-A</code> side-clip blocks or <code>EB2M-B</code> terminals.</li>
</ol>
</div>`,
      faq: [
        {
          question: "What cutout size and panel thickness do EB2M push button switches support?",
          answer: "Both EB2M-A and EB2M-B series pages list the catalog nominal Φ22 mm mounting hole without a toleranced cutout drawing. Panel thickness is labeled only on selected head-type drawings—such as 1.5–6 mm on Type A flush buttons, selectors, and double buttons, and 1–6 mm on Type A mushroom heads and drawn emergency-stop groups—while several Type B drawings, /A emergency stops, and /FH symbol buttons lack complete thickness callouts. Confirm cutout tolerance and thickness with the supplier for each ordered model."
        },
        {
          question: "How do EB2M contact codes work, and why must I still verify physical markings?",
          answer: "Documented catalog codes are -10 (1NO), -01 (1NC), -11 (1NO1NC), and -20 (2NO). Although enlarged flush-button photos show 13–14 (NO), the Type A emergency-stop sample photo in the -01 column also shows 13–14 (NO), conflicting with its -01 (1NC) code. Always verify the supplier's model wiring diagram and run de-energized continuity checks on delivered parts."
        },
        {
          question: "Can I mount EB2M-A and EB2M-B operators on the same control door?",
          answer: "Both ranges carry the nominal Φ22 mm cutout and share series-level electrical data (Ith 10 A, AC-15 / DC-13 as defined in IEC 60947-5-1). However, outline dimensions vary by body and head type (52 × 30 mm end-view outline and 50 mm rear depth on EB2M-A-10 vs. 40 × 30 mm end-view outline and 60 mm overall height including 11 mm front projection on EB2M-B-10), and thickness callouts differ across head groups. Confirm exact machining drawings, thickness limits, and combined spacing for both models with the supplier before punching steel."
        },
        {
          question: "Are terminal numbers, wire gauge ranges, and tightening torques published in the catalog?",
          answer: "Beyond the 13–14 (NO) marking seen in enlarged photos (which conflicts with the -01 emergency-stop group), the catalog omits a complete terminal table, conductor cross-section range, permitted wire ends, mounting locking-ring torque, and terminal screw torque. Obtain those specifications from the supplier's model documentation before assembly."
        },
        {
          question: "Are lamp terminals on illuminated EB2M switches isolated from the switching contacts?",
          answer: "That is unconfirmed in the catalog. While lamp voltages and contact ratings are listed separately and insulation resistance is printed as ≥10 MΩ, the catalog does not publish lamp terminal diagrams, shared-terminal details, or lamp-to-contact isolation ratings. Request the model wiring diagram, lamp type, operating/inrush current, DC polarity, and isolation data from the supplier before wiring."
        }
      ],
      closingHtml: "<p class=\"text-sm leading-7 text-gray-700\">Ready to specify EB2M operators for your next panel build? <a href=\"/contact\" class=\"font-medium text-green-700 underline\">Contact our team</a> for a project quotation—include your printed model codes (such as <code>EB2M-A-10</code> or <code>EB2M-B-11PRG</code>), color, lamp voltage if illuminated, quantity, and target market, and specify whether <code>CE, RoHS and ISO 9001</code> documentation is needed so we can verify document scope and model-specific drawings for your order.</p>",
      ogImage: {
        src: "/optimized/display/images/blog/eb2m-22mm-push-button-wiring-og.webp",
        alt: "22mm flush push button, double push button, and rear contact bodies next to a steel mounting plate"
      }
    }
  },
  {
    post: {
      slug: "22mm-illuminated-push-button-voltage-color-guide",
      title: "22mm Illuminated Push Buttons: Lamp Voltage, Color Conventions, and Action Choice",
      description: "How to specify 22mm illuminated push buttons and selectors in the EB2M series, covering catalog lamp voltages, unconfirmed lamp-module data, IEC 60204-1 and IEC 60073 color conventions, and momentary versus maintained mechanical action.",
      tags: [
        "Illuminated Controls",
        "Panel Design"
      ],
      image: "/optimized/display/images/blog/eb2m-22mm-illuminated-push-buttons-hero.webp",
      imageAlt: "Row of illuminated 22mm push buttons in green, red, yellow, blue, and white mounted on a steel control panel",
      publishedAt: "Nov 21, 2026",
      readingMinutes: 7
    },
    detail: {
      title: "22mm Illuminated Push Buttons: Lamp Voltage, Color Conventions, and Action Choice",
      metaTitle: "22mm Illuminated Push Buttons: Voltage & Color",
      description: "Specify EB2M 22mm illuminated push buttons: catalog lamp voltages, IEC 60204-1 and IEC 60073 color roles, momentary vs maintained action, and checks.",
      author: "UPprocure Engineering Team",
      wordCount: 1607,
      articleHtml: `<div class="prose-custom">
<p class="mb-4 text-sm leading-7 text-gray-600">Control doors frequently require manual actuation and visual indication within limited front-panel area. Combining an actuator and a lit lens inside one nominal Φ22 mm cutout saves door space compared with placing a separate pilot light beside an unlit button while keeping visual status aligned with the operator head.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">In the <a href="/solutions/22mm-push-button-switch" class="font-medium text-green-700 underline">EB2M 22mm push button switch series</a>, illuminated models span six operator families rather than only basic flush buttons. Writing an accurate bill of materials means aligning the catalog model code, lens color, ordering lamp voltage, and mechanical action—while confirming the lamp-module and wiring details that the catalog leaves unstated.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Illuminated Operators in the EB2M Series</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Standalone non-actuated pilot lights are not listed within these EB2M switch families; if your panel schedule includes indicator-only lamps alongside switches, review the broader <a href="/products" class="font-medium text-green-700 underline">products overview</a>. Within EB2M, illuminated versions appear in both Type A (<code>EB2M-A</code>, standard modular body) and Type B (<code>EB2M-B</code>, compact body). Because outline dimensions and panel-thickness callouts differ across head styles—and commonly quoted flush outlines apply strictly to <code>-10</code> flush drawings—check the exact drawing for each illuminated head type before finalizing panel spacing.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Illuminated Families Across the EB2M Catalog</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Across the series, the letter <code>D</code> in the suffix marks an illuminated operator. The table below summarizes documented illuminated families, contact codes, and mechanical actions:</p>
<div class="mb-5 overflow-x-auto"><table class="w-full border-collapse text-left text-sm text-gray-600">
<thead class="bg-gray-50"><tr>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Operator Family</th>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">EB2M Illuminated Model Codes</th>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Documented Contacts by Code</th>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Mechanical Action</th>
</tr></thead><tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Flush push buttons</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code>-10D</code>, <code>-10DT</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">1NO</td>
<td class="border border-gray-200 px-3 py-2 align-top">Momentary (<code>-10D</code>) or maintained (<code>-10DT</code>)</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Mushroom head</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code>-10MD</code>, <code>-10MTD</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">1NO</td>
<td class="border border-gray-200 px-3 py-2 align-top">Momentary (<code>-10MD</code>) or maintained (<code>-10MTD</code>)</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Emergency stop, twist release</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code>-01DZS</code>, <code>-01DZS/A</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">1NC (catalog <code>-01</code> group; verify drawing)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Twist release, red head</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Selector switches, short lever</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code>-10XD</code>, <code>-10XD/fu</code>, <code>-20XSD</code>, <code>-20XSD/f.fu</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">1NO or 2NO</td>
<td class="border border-gray-200 px-3 py-2 align-top">Maintained or spring return (<code>fu</code>, <code>f.fu</code>)</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Selector switches, long lever</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code>-10CXD</code>, <code>-10CXD/fu</code>, <code>-20CXSD</code>, <code>-20CXSD/f.fu</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">1NO or 2NO</td>
<td class="border border-gray-200 px-3 py-2 align-top">Maintained or spring return (<code>fu</code>, <code>f.fu</code>)</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Double push buttons</td>
<td class="border border-gray-200 px-3 py-2 align-top"><code>-11PDRG</code> (flat), <code>-11HDRG</code> (extended), <code>-11DRG</code> (oval)</td>
<td class="border border-gray-200 px-3 py-2 align-top">1NO1NC</td>
<td class="border border-gray-200 px-3 py-2 align-top">Dual red/green actuator; markings <code>R</code>, <code>R1–R7</code> (<code>I/O</code>, <code>ON/OFF</code>, <code>START/STOP</code>)</td>
</tr>
</tbody></table></div>
<p class="mb-4 text-sm leading-7 text-gray-600">For non-illuminated operators and body family selection, see <a href="/blog/how-to-choose-22mm-push-button-switch" class="font-medium text-green-700 underline">how to choose a 22mm push button switch</a>. Note that putting an actuator and lamp in one cutout does not automatically reduce door wiring or guarantee independent status indication; actual wiring depends on the internal lamp-and-contact topology shown in the supplier's model wiring diagram.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Lamp Module Specifications That Must Be Confirmed Before Ordering</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Panel builders and procurement engineers routinely verify light-source technology, current draw, and DC polarity before connecting illuminated operators. In the EB2M-A and EB2M-B catalog section, <strong>these lamp-module details are unconfirmed</strong>:</p>
<ul class="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li><strong>Lamp type and replaceability:</strong> The catalog does not confirm whether the light source is LED or another type, or whether the element is replaceable.</li>
<li><strong>Operating and inrush current:</strong> Steady-state operating current and startup/inrush current at each catalog voltage are not published.</li>
<li><strong>DC polarity:</strong> An <code>AC/DC</code> voltage listing does not establish DC terminal polarity or internal circuit architecture.</li>
</ul>
<p class="mb-4 text-sm leading-7 text-gray-600">Never guess lamp technology or current draw when sizing control power supplies, and do not assume illuminated models can be driven directly by PLC outputs. Request lamp-module data, operating and inrush current figures, and DC polarity markings from the supplier for the exact model code and voltage version.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Selecting Lamp Voltage from the Catalog Options</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">A frequent omission on illuminated switch inquiries is specifying the model code and lens color without stating the ordering lamp voltage. Include both the numeric voltage and supply type on every illuminated line item.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Catalog AC/DC, DC, and AC Lamp Voltage Options</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">The <a href="/solutions/22mm-push-button-switch" class="font-medium text-green-700 underline">EB2M 22mm push button switch catalog</a> publishes ten lamp ordering voltages across three supply groups:</p>
<ul class="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li><strong>AC/DC options:</strong> 6 V, 12 V, 24 V, 36 V, 48 V, 110 V, and 127 V AC/DC.</li>
<li><strong>DC-only option:</strong> 220 V DC.</li>
<li><strong>AC-only options:</strong> 220 V AC and 380 V AC.</li>
</ul>
<p class="mb-4 text-sm leading-7 text-gray-600">Pay close attention at <strong>220 V</strong>, where <code>220 V AC</code> and <code>220 V DC</code> are two separate catalog ordering options. Specifying "220 V" without AC or DC leaves the order ambiguous. Match the ordered lamp voltage to the verified supply rail in your schematic and confirm voltage-specific current and DC polarity with the supplier.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Reviewing Lamp Voltage and Contact Ratings Separately</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Evaluate ordering lamp voltage and series-level contact ratings as two separate catalog selection datasets. The series lists <strong>Ith 10 A</strong>, with <strong>AC-15</strong> (36 V / 10 A, 110 V / 10 A, 220 V / 5 A, 380 V / 2.7 A, 660 V / 1.8 A) and <strong>DC-13</strong> (24 V / 4 A, 48 V / 4 A, 110 V / 2 A, 220 V / 1 A, 440 V / 0.6 A) utilization categories (as defined in IEC 60947-5-1). Confirm with the supplier that the specific ordered model carries the required contact ratings rather than assuming identical ratings across every variant without verification.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">Checking lamp voltage and contact ratings separately does <strong>not</strong> confirm internal electrical isolation between the lamp and contact circuits. The catalog provides no lamp terminal diagrams, internal schematics, shared-terminal disclosures, or lamp-to-contact dielectric withstand ratings, and its printed <code>≥10 MΩ</code> insulation resistance does not specify applicability between lamp and contacts. Accordingly, do not assume isolated lamp supplies, mixed-voltage operation, parallel connection across a contactor coil, auxiliary-contact feeds on a separate rail, or direct PLC output drive. Determine wiring topology and isolation solely from the supplier's model wiring diagram.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Applying IEC 60204-1 and IEC 60073 Color Conventions</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Consistent color coding reduces operator hesitation on panels exported to the US, EU, and Australia. Two international standards—IEC 60204-1 (electrical equipment of machines) and IEC 60073 (coding principles for indicators and actuators)—provide general industry guidance for panel colors.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Mapping the Six EB2M Colors to Panel Standards</h3>
<figure class="my-6"><img src="/optimized/display/images/blog/eb2m-illuminated-operator-colors-inline.webp" alt="Close-up of illuminated flush, mushroom head, and lever selector 22mm operators in a control station" width="1600" height="1200" loading="lazy" decoding="async" class="h-auto w-full rounded-xl" /></figure>
<p class="mb-4 text-sm leading-7 text-gray-600">EB2M offers six catalog colors: red (<code>R</code>), green (<code>G</code>), yellow (<code>Y</code>), blue (<code>B</code>), white (<code>W</code>), and black (<code>K</code>). The table below summarizes general IEC 60204-1 and IEC 60073 guidance for project planning:</p>
<div class="mb-5 overflow-x-auto"><table class="w-full border-collapse text-left text-sm text-gray-600">
<thead class="bg-gray-50"><tr>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">EB2M Catalog Color (Code)</th>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">General Industry Convention (IEC 60204-1 / IEC 60073)</th>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Typical Panel Planning Role</th>
</tr></thead><tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Red (<code>R</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Emergency action, stop, or abnormal/fault condition</td>
<td class="border border-gray-200 px-3 py-2 align-top">Emergency stop (<code>-01DZS</code>), fault indication, red half of double button</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Green (<code>G</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Normal start, ready state, or normal operating condition</td>
<td class="border border-gray-200 px-3 py-2 align-top">Start push button (<code>-10D</code>), green half of <code>-11PDRG</code></td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Yellow (<code>Y</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Caution, intervention required, or condition approaching limit</td>
<td class="border border-gray-200 px-3 py-2 align-top">Caution alert, hold function, intervention prompt</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Blue (<code>B</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Mandatory operator action or reset function</td>
<td class="border border-gray-200 px-3 py-2 align-top">Fault reset, operator confirmation prompt</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">White (<code>W</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Neutral status, power present, or unassigned general function</td>
<td class="border border-gray-200 px-3 py-2 align-top">General control power indication, neutral command</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Black (<code>K</code>)</td>
<td class="border border-gray-200 px-3 py-2 align-top">General-purpose actuator (typically non-illuminated)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Unlit flush buttons, selector levers, key switches</td>
</tr>
</tbody></table></div>
<p class="mb-4 text-sm leading-7 text-gray-600">Use this mapping as general specification guidance rather than an absolute rule. Certain sectors—such as utility switchgear or legacy process plants—use opposite red/green conventions, so always confirm end-customer plant standards and target-market rules before ordering.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Illuminated Emergency Stops and Safety Design Boundaries</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Illuminated twist-release emergency stops (<code>-01DZS</code>, <code>-01DZS/A</code>) appear under the red-head <code>-01</code> (1NC) emergency-stop group. Before wiring any illuminated emergency stop, obtain the supplier's model-specific drawing to confirm exact contact and lamp terminal arrangements—especially because the catalog's Type A emergency-stop sample photo in the <code>-01</code> column shows <code>13–14 (NO)</code>, conflicting with the <code>-01</code> (1NC) coding.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">Never treat an illuminated head as safety-rated status proof on its own. Both emergency-stop circuits and machine-status indication circuits must follow applicable machine-safety standards and be designed and verified by a qualified engineer. Review pre-order checks in our <a href="/blog/22mm-emergency-stop-button-twist-release-guide" class="font-medium text-green-700 underline">22mm emergency stop button guide</a>.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Momentary vs Maintained Mechanical Action on Illuminated Models</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Momentary versus maintained actuation defines the switch's physical mechanical behavior—a separate decision from how the lamp circuit is wired under the verified project schematic.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Momentary Illuminated Operators (-10D, -10MD)</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">In the EB2M catalog, <strong><code>-10D</code></strong> (flush) and <strong><code>-10MD</code></strong> (mushroom head) are momentary illuminated operators: their contacts change state only while pressed and spring back upon release.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">How illumination behaves on a momentary unit depends entirely on the verified model wiring diagram and control-circuit design. Do not assume that specifying a momentary illuminated button enables independent run-feedback indication from a starter auxiliary contact or PLC output; verify lamp isolation, current draw, and indication architecture with the supplier and project engineer first.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Maintained Illuminated Operators and Illuminated Selectors</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Maintained illuminated push buttons—<strong><code>-10DT</code></strong> (flush) and <strong><code>-10MTD</code></strong> (mushroom head)—latch mechanically in the pressed position until pressed again. Illuminated selectors without spring-return codes (<code>-10XD</code>, <code>-20XSD</code>, <code>-10CXD</code>, <code>-20CXSD</code>) hold their selected position, while <code>fu</code> and <code>f.fu</code> versions (<code>-10XD/fu</code>, <code>-20XSD/f.fu</code>, <code>-10CXD/fu</code>, <code>-20CXSD/f.fu</code>) spring-return from right to center or both sides to center. See our <a href="/blog/22mm-selector-switch-key-switch-spring-return-hand-off-auto" class="font-medium text-green-700 underline">22mm selector and key switch guide</a> for action-code details.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">Evaluate momentary versus maintained action alongside your project's load-switching and restart-prevention requirements. Never treat mechanical push-button action alone as a substitute for engineered anti-restart protection or verified load design; motor control, auxiliary load switching, and safety restart circuits must be designed and verified by a qualified engineer using confirmed model ratings.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Panel Specification Checklist for Illuminated Orders</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Before submitting an inquiry for illuminated units from the <a href="/solutions/22mm-push-button-switch" class="font-medium text-green-700 underline">EB2M 22mm push button switch line</a>, confirm six items per line:</p>
<ol class="mb-4 list-decimal space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li><strong>Exact model code and body prefix:</strong> State <code>EB2M-A</code> or <code>EB2M-B</code> with the exact illuminated suffix (<code>-10D</code>, <code>-10DT</code>, <code>-10MD</code>, <code>-11PDRG</code>, <code>-10XD</code>, <code>-01DZS</code>, etc.) and verify its head-type outline and panel thickness.</li>
<li><strong>Color and legend:</strong> Specify <code>R</code>, <code>G</code>, <code>Y</code>, <code>B</code>, or <code>W</code> (or double-button marking options <code>R</code>, <code>R1–R7</code>) per project specification.</li>
<li><strong>Catalog lamp voltage and supply type:</strong> Pick from 6, 12, 24, 36, 48, 110, or 127 V AC/DC; 220 V DC; or 220 V / 380 V AC, writing AC or DC explicitly at 220 V.</li>
<li><strong>Unconfirmed lamp data:</strong> Confirm lamp type, operating/inrush current, and DC polarity with the supplier for the exact model and voltage version.</li>
<li><strong>Wiring and isolation diagram:</strong> Confirm lamp terminals, shared/common terminals, and lamp-to-contact isolation ratings prior to wiring.</li>
<li><strong>Model-level IP and installation:</strong> Because IP40 / IP65 is series-level catalog data, confirm exact model IP rating, sealing hardware, and mounting requirements.</li>
</ol>
</div>`,
      faq: [
        {
          question: "Which lamp voltages are listed in the EB2M catalog for illuminated 22mm push buttons?",
          answer: "The catalog lists 6, 12, 24, 36, 48, 110, and 127 V AC/DC, 220 V DC, and 220 V or 380 V AC. Always state both the voltage value and whether the circuit is AC or DC—particularly at 220 V, where 220 V AC and 220 V DC are separate ordering options."
        },
        {
          question: "Do EB2M illuminated push buttons use LED lamps, and what current do they draw?",
          answer: "The EB2M-A and EB2M-B catalog section does not confirm lamp type (whether LED or another source), replaceability, operating current, inrush current, or DC polarity. Request those specifications from the supplier for your exact model code and voltage version before finalizing power-supply or control-output connections."
        },
        {
          question: "What is the difference between EB2M-A-10D and EB2M-A-10DT?",
          answer: "Both are illuminated flush push buttons on the Type A body with a documented -10 (1NO) contact code. EB2M-A-10D is momentary (springs back when released), while EB2M-A-10DT is maintained (mechanically latches down until pressed again)."
        },
        {
          question: "Can the lamp and contact circuits on an illuminated EB2M switch use different voltages?",
          answer: "That cannot be confirmed from the catalog. The catalog lists lamp voltages separately from AC-15 / DC-13 contact ratings, but it does not publish lamp terminal wiring, shared-terminal structure, or lamp-to-contact isolation ratings. Verify internal topology and isolation with the supplier's model wiring diagram before designing mixed-voltage or independent-supply circuits."
        },
        {
          question: "How should I choose lens colors for illuminated EB2M push buttons?",
          answer: "Use IEC 60204-1 and IEC 60073 conventions as general guidance across the six catalog colors (R, G, Y, B, W, K), while checking the end customer's project specification and regional standards. For illuminated emergency stops (-01DZS, -01DZS/A), verify the model wiring diagram and have the final safety and indication design reviewed by a qualified engineer."
        }
      ],
      closingHtml: "<p class=\"text-sm leading-7 text-gray-700\">Need to verify specifications or request a quotation for illuminated operators on your upcoming panel schedule? <a href=\"/contact\" class=\"font-medium text-green-700 underline\">Contact our team</a> with your exact EB2M model codes, lens colors, lamp voltages, quantities, and target market, and specify whether <code>CE, RoHS and ISO 9001</code> documentation is needed so we can verify scope, model-level lamp data, and wiring diagrams for your order.</p>",
      ogImage: {
        src: "/optimized/display/images/blog/eb2m-22mm-illuminated-push-buttons-og.webp",
        alt: "Illuminated 22mm push button operators in five lens colors beside an illuminated double push button"
      }
    }
  },
  {
    post: {
      slug: "22mm-push-button-ip40-ip65-industrial-applications",
      title: "IP40 vs IP65 22mm Push Button Switches: Matching Operators to Industrial Applications",
      description: "How to evaluate series-level IP40/IP65 ratings, published environmental limits, and mechanical operating life when assigning EB2M 22mm push buttons, selectors, keys, double buttons, and emergency stops across industrial panels.",
      tags: [
        "Applications & IP",
        "Industrial Panels"
      ],
      image: "/optimized/display/images/blog/eb2m-ip40-ip65-industrial-applications-hero.webp",
      imageAlt: "Sealed industrial control station with 22mm push buttons, selector switch, and emergency stop beside a conveyor",
      publishedAt: "Nov 21, 2026",
      readingMinutes: 7
    },
    detail: {
      title: "IP40 vs IP65 22mm Push Button Switches: Matching Operators to Industrial Applications",
      metaTitle: "IP40 vs IP65 22mm Push Buttons by Application",
      description: "Evaluate series-level IP40/IP65 on EB2M 22mm push buttons and select flush, mushroom, double, selector, and key operators for industrial panels.",
      author: "UPprocure Engineering Team",
      wordCount: 1536,
      articleHtml: `<div class="prose-custom">
<p class="mb-4 text-sm leading-7 text-gray-600">Choosing a 22mm push button switch on electrical ratings alone misses the mechanical, environmental, and ergonomic factors that govern field durability. Packaging dust, damp pump rooms, gloved operation along conveyors, and compact metering doors each require matching the operator head to site conditions and verifying model-level data with the supplier.</p>
<p class="mb-4 text-sm leading-7 text-gray-600">Across the <a href="/solutions/22mm-push-button-switch" class="font-medium text-green-700 underline">EB2M 22mm push button switch series</a>, Type A (<code>EB2M-A</code>) and Type B (<code>EB2M-B</code>) share series-level electrical data (Ith 10 A, AC-15 / DC-13 as defined in IEC 60947-5-1) and series-level environmental limits. Distinguishing published series data from model-specific verification items prevents specification gaps before panel fabrication begins.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Series-Level IP40 / IP65 Data: Scope and Model Verification</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">The EB2M catalog lists <strong>IP40 / IP65</strong> side by side as <strong>series-level protection data</strong>. It does not allocate IP40 or IP65 to individual model codes, nor does it document sealing hardware, gasket configurations, or mounting-surface conditions needed to achieve a specific ingress rating on a finished door. Treat IP40 or IP65 as a project environmental target that must be confirmed with the supplier for every ordered model.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Where an IP40 Target Fits Inside Dry Electrical Rooms</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">IP40 covers basic solid-object protection without liquid ingress protection. As an environmental target, IP40 is commonly evaluated for:</p>
<ul class="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li>Climate-controlled electrical rooms, switchgear corridors, and dry commercial mechanical rooms without water spray.</li>
<li>Sub-distribution panels and recessed doors shielded behind an outer cabinet cover.</li>
<li>Clean indoor assembly consoles with dry ambient air and routine housekeeping.</li>
</ul>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">When Field Environments Require Verified IP65 Models</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">IP65 covers dust-tight protection and resistance against low-pressure water jets from any direction. Panel builders typically set IP65 as a project target where equipment faces:</p>
<ul class="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li>Fine airborne dust in woodworking, bulk handling, corrugated packaging, or light processing areas.</li>
<li>Coolant mist, oil droplets, or occasional low-pressure splashing near machinery and conveyor stations (high-pressure or high-temperature washdown exceeds IP65).</li>
<li>Damp mechanical rooms, booster pump skids, and semi-sheltered utility stations prone to condensation drips or incidental spray.</li>
</ul>
<p class="mb-4 text-sm leading-7 text-gray-600">Do not assume that mounting any EB2M switch in a nominal Φ22 mm cutout achieves IP65 front-face protection. Confirm each exact model's IP rating, required sealing components, panel-thickness range, and mounting conditions with the supplier, and verify that the enclosure and panel fabrication meet overall project ingress requirements.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Published Environmental Limits and Mechanical Life Ratings</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Before mapping operators to an application, verify that the installation stays inside the published environmental boundaries of the <a href="/solutions/22mm-push-button-switch" class="font-medium text-green-700 underline">EB2M 22mm push button switch catalog</a>.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Ambient Temperature, ≤2000 m Altitude, Humidity, and Pollution Degree 3</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">The catalog publishes four series-level operating environment conditions:</p>
<ul class="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li><strong>Ambient temperature: −25 °C to +40 °C.</strong> Suits unheated indoor spaces down to −25 °C while requiring thermal review inside sun-exposed cabinets or warm mechanical rooms where internal air could exceed +40 °C.</li>
<li><strong>Altitude: ≤2000 m.</strong> The catalog defines <code>≤2000 m</code> as the operating limit and grants <strong>no permission, derating curves, or derating factors</strong> for use above 2000 m. Do not assume high-altitude suitability by field calculation; any installation above 2000 m requires written model-specific confirmation directly from the supplier prior to selection.</li>
<li><strong>Relative humidity: ≤90%.</strong> In humid climates or damp pump rooms, enclosure environmental controls such as heaters are commonly evaluated to keep internal air within limit.</li>
<li><strong>Pollution degree: 3.</strong> Reflects industrial environments where conductive dust—or dry non-conductive dust made conductive by condensation—can occur.</li>
</ul>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Mechanical Operating Cycles vs Unstated Electrical Life</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Catalog operating life is published strictly as <strong>mechanical life</strong> (mechanical operating cycles only) across three operator categories:</p>
<ul class="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li><strong>Push buttons:</strong> <code>≥1,000,000</code> mechanical operations—mechanically suited to frequent cycle start, jog, index, and reset actuation.</li>
<li><strong>Selector switches:</strong> <code>≥300,000</code> mechanical operations—mechanically suited to mode switching, shift changes, and Hand-Off-Auto selection.</li>
<li><strong>Key switches and emergency-stop buttons:</strong> <code>≥50,000</code> mechanical operations—mechanically suited to supervisory lockouts, maintenance authorization, and infrequent emergency stops.</li>
</ul>
<p class="mb-4 text-sm leading-7 text-gray-600"><strong>Electrical life is not published in the catalog</strong>, and mechanical cycles do not establish contact endurance under electrical load. For high-frequency inductive switching or heavy pilot-duty cycles, request model-specific electrical endurance test evidence from the supplier for your actual load, voltage, current, and switching rate.</p>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Matching EB2M Operators Across Five Industrial Applications</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Matching head geometry to operator workflow improves ergonomics and reduces accidental actuation. Below is how EB2M families align across five industrial sectors, alongside required supplier checks.</p>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Production Machinery and Packaging Lines</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Packaging equipment and assembly cells combine repetitive cycling with gloved hands and formal safety controls:</p>
<ul class="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li><strong>Flush push buttons</strong> (<code>-10</code>, illuminated <code>-10D</code>, or <code>/FH</code> with 12 printed symbols or custom marking) provide a low-profile head rated for <code>≥1,000,000</code> mechanical cycles for start, index, and reset inputs.</li>
<li><strong>Mushroom head push buttons</strong> (<code>-10M</code>, <code>-10MT</code>, illuminated <code>-10MD</code>, <code>-10MTD</code>) offer a broader palm-strike surface for gloved operators.</li>
<li><strong>Twist-release emergency stops</strong> (<code>-01ZS</code>, <code>-01ZS/A</code>, <code>-01ZS/B</code>, illuminated <code>-01DZS</code>, <code>-01DZS/A</code>) carry catalog <code>-01</code> (1NC) coding and <code>≥50,000</code> mechanical cycles. Confirm exact model drawings and terminals with the supplier (do not rely on sample photos showing <code>13–14 (NO)</code> conflicting with <code>-01</code>), and have the complete safety circuit designed and verified by a qualified engineer under applicable machine-safety standards. See our <a href="/blog/22mm-emergency-stop-button-twist-release-guide" class="font-medium text-green-700 underline">22mm emergency stop button guide</a> for pre-order review items.</li>
</ul>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Material Handling and Conveyors</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Conveyor systems distribute local control stations across dusty aisles and loading bays:</p>
<ul class="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li><strong>Double push buttons</strong> (<code>-11PRG</code> flat, <code>-11HRG</code> extended, <code>-11RG</code> oval, illuminated <code>-11PDRG</code>, <code>-11HDRG</code>, <code>-11DRG</code>) place dual red/green actuators and nominal <code>-11</code> (1NO1NC) contacts in one nominal Φ22 mm cutout, with marking options <code>R</code> and <code>R1–R7</code> (<code>I/O</code>, <code>ON/OFF</code>, <code>START/STOP</code>). Confirm actuator-to-terminal mapping via the supplier wiring diagram and de-energized continuity testing rather than assuming color-to-terminal assignments.</li>
<li><strong>Long-lever selector switches</strong> (<code>-10CX</code>, <code>-20CXS</code>, spring-return <code>-10CX/fu</code>, <code>-20CXS/f.fu</code>) give gloved operators positive leverage for direction or jog selection.</li>
<li>For dusty or splash-prone conveyor zones, specify <strong>IP65</strong> as a project target and verify model-level IP approval and sealing hardware with the supplier.</li>
</ul>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">HVAC Air-Handling and Chiller Panels</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">HVAC cabinets typically occupy indoor mechanical rooms (targeting IP40 in dry rooms, or IP65 near cooling towers and condensate lines):</p>
<ul class="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li><strong>3-position short-lever selectors</strong> (<code>-20XS</code> maintained, <code>-20XSD</code> illuminated) are commonly evaluated for Hand-Off-Auto (HOA) fan and pump selection. Review selector action codes (<code>f</code>, <code>fu</code>, <code>f.fu</code>) in our <a href="/blog/22mm-selector-switch-key-switch-spring-return-hand-off-auto" class="font-medium text-green-700 underline">22mm selector and key switch guide</a>.</li>
<li><strong>Key switches</strong> (<code>-10Y</code>, <code>-10CY</code>, <code>-20YS</code>, <code>-20CYS</code>, <code>≥50,000</code> mechanical cycles) restrict manual override or damper-test positions to authorized personnel.</li>
<li><strong>Illuminated flush buttons</strong> (<code>-10D</code>, <code>-10DT</code>) are available across catalog lamp voltages (6, 12, 24, 36, 48, 110, 127 V AC/DC; 220 V DC; 220 V or 380 V AC); verify lamp type, current, DC polarity, and the model wiring diagram with the supplier before integrating illuminated controls.</li>
</ul>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Pump Stations and Water-Handling Controls</h3>
<figure class="my-6"><img src="/optimized/display/images/blog/eb2m-panel-operators-conveyor-pump-inline.webp" alt="Pump control panel fitted with 22mm lever selectors, key switch, and red/green double push buttons" width="1600" height="1200" loading="lazy" decoding="async" class="h-auto w-full rounded-xl" /></figure>
<p class="mb-4 text-sm leading-7 text-gray-600">Booster skids, sump panels, and water-handling boards combine moisture exposure with tight wall-mount doors:</p>
<ul class="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li>Set <strong>IP65</strong> as the environmental target near piping manifolds or wet wells, verify model-level IP and sealing components with the supplier, and confirm cabinet conditions remain within <code>−25 °C to +40 °C</code>, <code>≤90%</code> relative humidity, and <code>≤2000 m</code> altitude.</li>
<li>Evaluate <strong>3-position maintained selectors</strong> (<code>-20XS</code>, <code>-20CXS</code>, illuminated <code>-20XSD</code>, <code>-20CXSD</code>) for HOA control per pump, and <strong>spring-return selectors</strong> (<code>-10X/fu</code>, <code>-20XS/f.fu</code>) for momentary test or reset actions.</li>
<li>Compare Type A (<code>EB2M-A</code>) and compact Type B (<code>EB2M-B</code>) using <strong>exact head-type outline drawings</strong> and rear wiring/tool clearances—do not apply <code>-10</code> flush outlines (<code>40 × 30 mm</code> or <code>52 × 30 mm</code>) to selectors, keys, or double buttons.</li>
</ul>
<h3 class="mt-5 mb-2 text-base font-semibold text-gray-900">Low-Voltage Distribution Panels and Sub-Boards</h3>
<p class="mb-4 text-sm leading-7 text-gray-600">Feeder panels and switchgear compartments generally operate in dry electrical rooms with compact metering doors:</p>
<ul class="mb-4 list-disc space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li>Compare <strong>Type B (<code>EB2M-B</code>)</strong> compact bodies against Type A (<code>EB2M-A</code>) using exact head-type outline drawings, panel-thickness callouts, and clearance around door meters and wire ducts.</li>
<li>Use <strong>key switches</strong> (<code>-10Y</code>, <code>-10CY/fu</code>, <code>-20CYS</code>) for restricted local/remote or test interlocks, and <strong>flush buttons</strong> (<code>-10</code>, <code>-10D</code>, <code>-10DT</code>, <code>/FH</code>) for infrequent supervisory switching inside dry IP40-targeted rooms.</li>
<li>Browse related switchgear and control components in our <a href="/products" class="font-medium text-green-700 underline">products section</a>, or revisit selection fundamentals in <a href="/blog/how-to-choose-22mm-push-button-switch" class="font-medium text-green-700 underline">how to choose a 22mm push button switch</a>.</li>
</ul>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Application-to-Operator Evaluation Matrix</h2>
<div class="mb-5 overflow-x-auto"><table class="w-full border-collapse text-left text-sm text-gray-600">
<thead class="bg-gray-50"><tr>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Application Sector</th>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Environmental IP Target (Verify Model &amp; Sealing with Supplier)</th>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Candidate EB2M Operators</th>
<th scope="col" class="border border-gray-200 px-3 py-2 font-semibold text-gray-900">Duty &amp; Verification Notes</th>
</tr></thead><tbody>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Production Machinery</td>
<td class="border border-gray-200 px-3 py-2 align-top">IP65 target (dust/coolant zones)</td>
<td class="border border-gray-200 px-3 py-2 align-top">Flush <code>-10</code>/<code>-10D</code>/<code>/FH</code>, Mushroom <code>-10M</code>, E-Stop <code>-01ZS</code>/<code>-01DZS</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Push buttons <code>≥1,000,000</code> mechanical cycles; safety design by qualified engineer</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Conveyors &amp; Material Handling</td>
<td class="border border-gray-200 px-3 py-2 align-top">IP65 target</td>
<td class="border border-gray-200 px-3 py-2 align-top">Double <code>-11HRG</code>/<code>-11PRG</code>, Long Lever <code>-20CXS</code>/<code>/f.fu</code>, E-Stop <code>-01ZS</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Confirm double-button terminal map; check head outlines &amp; rear clearance</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">HVAC Panels</td>
<td class="border border-gray-200 px-3 py-2 align-top">IP40 indoor / IP65 wet-zone target</td>
<td class="border border-gray-200 px-3 py-2 align-top">Short Lever <code>-20XS</code>/<code>-20XSD</code>, Key <code>-10Y</code>/<code>-20YS</code>, Illuminated <code>-10D</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Selectors <code>≥300,000</code> mechanical cycles; verify lamp data &amp; wiring diagram</td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Pump Stations</td>
<td class="border border-gray-200 px-3 py-2 align-top">IP65 target</td>
<td class="border border-gray-200 px-3 py-2 align-top">Selectors <code>-20XS</code>/<code>-10X/fu</code>, Double <code>-11PDRG</code>, Flush <code>-10D</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Check exact head drawings for <code>EB2M-A</code>/<code>EB2M-B</code>; confirm <code>≤90%</code> RH &amp; <code>≤2000 m</code></td>
</tr>
<tr>
<td class="border border-gray-200 px-3 py-2 align-top">Distribution Panels</td>
<td class="border border-gray-200 px-3 py-2 align-top">IP40 target</td>
<td class="border border-gray-200 px-3 py-2 align-top">Key <code>-10Y</code>/<code>-10CY</code>, Flush <code>-10</code>/<code>-10D</code>/<code>/FH</code>, Selector <code>-10X</code></td>
<td class="border border-gray-200 px-3 py-2 align-top">Verify metering-door depth per head drawing; ambient <code>−25 °C to +40 °C</code></td>
</tr>
</tbody></table></div>
<h2 class="mt-8 mb-4 text-xl font-bold text-gray-900">Pre-Quote Environmental and Documentation Checklist</h2>
<p class="mb-4 text-sm leading-7 text-gray-600">Before requesting a quotation for the <a href="/solutions/22mm-push-button-switch" class="font-medium text-green-700 underline">EB2M 22mm push button switch series</a>, confirm four project items with the supplier:</p>
<ol class="mb-4 list-decimal space-y-1 pl-5 text-sm leading-7 text-gray-600">
<li><strong>Model-level IP and sealing:</strong> State target protection (IP40 or IP65) per line item and confirm each exact model's IP rating, sealing hardware, and mounting requirements.</li>
<li><strong>Environmental limits:</strong> Verify site conditions remain within <code>−25 °C to +40 °C</code>, <code>≤90%</code> relative humidity, <code>≤2000 m</code> altitude, and pollution degree <code>3</code> (no above-2000 m derating without written supplier confirmation).</li>
<li><strong>Electrical endurance and layout:</strong> Request model-level electrical life data for high-duty inductive loads, plus head-specific outline drawings and panel-thickness limits.</li>
<li><strong>Compliance documentation:</strong> State whether <code>CE, RoHS and ISO 9001</code> documentation is needed so the supplier can confirm document validity, issuing entity, covered models, and target-market scope.</li>
</ol>
</div>`,
      faq: [
        {
          question: "Does the EB2M catalog confirm IP65 on every 22mm operator model?",
          answer: "No. The catalog lists IP40 / IP65 side by side as series-level data without assigning IP ratings or sealing hardware to individual model codes. Confirm the exact IP rating, sealing components, and installation conditions for each ordered model with the supplier."
        },
        {
          question: "Can EB2M 22mm push buttons be used in cold rooms or at elevations above 2000 m?",
          answer: "The published series ambient temperature range is −25 °C to +40 °C with ≤90% relative humidity and pollution degree 3. The published altitude limit is ≤2000 m, and the catalog provides no permission or derating data for operation above 2000 m—any evaluation above 2000 m requires written model-specific confirmation from the supplier."
        },
        {
          question: "Do the catalog life ratings of 1,000,000, 300,000, and 50,000 operations represent electrical life?",
          answer: "No. Those published figures—≥1,000,000 for push buttons, ≥300,000 for selector switches, and ≥50,000 for key switches and emergency-stop buttons—are mechanical operating cycles only. Electrical life is not published in the catalog and must be confirmed with model-specific test evidence from the supplier for your actual load and switching frequency."
        },
        {
          question: "How do I choose between EB2M-A and EB2M-B for compact pump or distribution doors?",
          answer: "EB2M-A uses a standard modular body and EB2M-B uses a compact body, both with a nominal Φ22 mm cutout. However, the published 52 × 30 mm (EB2M-A-10) and 40 × 30 mm (EB2M-B-10) outlines apply specifically to the -10 flush push button drawings; other head types have different dimensions. Request the exact head-type outline drawings, panel-thickness limits, and rear wiring clearances before finalizing door spacing."
        },
        {
          question: "Which compliance documents can be requested with EB2M orders?",
          answer: "When sending an inquiry, specify whether CE, RoHS and ISO 9001 documentation is required for your project. Because certificate numbers are not printed in the catalog, confirm document scope, validity, covered model codes, and target-market applicability with the supplier before placing the order."
        }
      ],
      closingHtml: "<p class=\"text-sm leading-7 text-gray-700\">Planning a control panel for machinery, conveyors, HVAC, pumps, or distribution equipment? <a href=\"/contact\" class=\"font-medium text-green-700 underline\">Contact our team</a> for a project quotation—include your EB2M model codes, target IP requirement, color, lamp voltage if illuminated, quantity, and target market, and note whether <code>CE, RoHS and ISO 9001</code> documentation is required so we can verify model-level IP, drawings, and document scope for your project.</p>",
      ogImage: {
        src: "/optimized/display/images/blog/eb2m-ip40-ip65-industrial-applications-og.webp",
        alt: "Comparison of indoor distribution panel push buttons and sealed pump-room control operators"
      }
    }
  }
] as const
