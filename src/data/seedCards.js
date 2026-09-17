import { ORIGIN_SOLAR_SYSTEM_CARDS } from "./originSolarSystemCards";
import { INTERNAL_EARTH_CARDS } from "./internalEarthCards";

export const DEFAULT_SEED_CARDS = [
  ...ORIGIN_SOLAR_SYSTEM_CARDS,
  ...INTERNAL_EARTH_CARDS,
  // --- UNIT 1: THE PLANET EARTH (Additional Subtopics) ---
  {
    id: 1,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_radiometric",
    subtopicName: "Radiometric Dating (Rb-Sr, Sm-Nd, 14C)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Rb-Sr Isochron: Slope & Intercept Decoded",
    subtitle: "How to instantly extract rock age and source magma genesis",
    contentHtml: `
      <p>The Rubidium-Strontium whole-rock isochron equation is:</p>
      <div style="background:rgba(0,0,0,0.4); padding:8px 12px; border-radius:6px; font-family:monospace; margin:8px 0; color:#38bdf8;">
        (⁸⁷Sr/⁸⁶Sr)<sub>present</sub> = (⁸⁷Sr/⁸⁶Sr)<sub>0</sub> + (⁸⁷Rb/⁸⁶Sr) × (e<sup>λt</sup> - 1)
      </div>
      <p>When plotted as y = c + mx:</p>
      <ul style="margin-left:1.1rem; margin-top:4px;">
        <li><strong>Slope (m)</strong> = <code>e<sup>λt</sup> - 1 ≈ λt</code> → Yields <strong>Rock Age (t)</strong>.</li>
        <li><strong>Y-intercept (c)</strong> = Initial ratio <code>(⁸⁷Sr/⁸⁶Sr)<sub>0</sub></code> → Identifies Mantle vs. Crustal contamination.</li>
      </ul>
    `,
    quiz: {
      question: "In a Rb-Sr isochron plot, if an igneous granite exhibits an unusually high initial (⁸⁷Sr/⁸⁶Sr) ratio (> 0.710), what does this primarily indicate?",
      options: [
        "Rapid crystallization from a depleted primitive mantle source",
        "Assimilation or melting of ancient continental crustal rocks",
        "Loss of daughter isotope ⁸⁷Sr during high-temperature metamorphism",
        "An extremely short radioactive half-life of ⁸⁷Rb"
      ],
      answer: 1,
      rationale: "Initial ⁸⁷Sr/⁸⁶Sr ratios for depleted mantle are low (0.702 - 0.704), whereas ancient sialic continental crust has high Rb/Sr and yields high ratios (> 0.710). A high intercept proves crustal contamination or S-type granite anatexis."
    },
    deepDive: `
      <h4>Core Isochron Rules for GATE & NET:</h4>
      <ul>
        <li><strong>Decay Constant:</strong> For ⁸⁷Rb, λ = 1.42 × 10⁻¹¹ yr⁻¹. Half-life t₁/₂ ≈ 48.8 Ga.</li>
        <li><strong>Fictitious Isochrons:</strong> In open systems (metamorphic heating), mineral isochrons reset while whole-rock isochrons preserve the original igneous crystallization age!</li>
        <li><strong>Mantle vs Crust Reservoirs:</strong>
          <br>• Mantle: low Rb/Sr, low ⁸⁷Sr/⁸⁶Sr.
          <br>• Crust: high Rb/Sr, elevated ⁸⁷Sr/⁸⁶Sr.
        </li>
      </ul>
    `,
    eli5: "Think of Rb as a factory making Sr over billions of years. If a rock was born with lots of inherited Sr right on day 1 (high intercept), its parents were old continental rocks, not the pristine deep mantle!"
  },
  {
    id: 3,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_isostasy",
    subtopicName: "Isostasy (Airy vs Pratt)",
    type: "quiz",
    examTags: ["GATE", "UPSC"],
    title: "Airy vs. Pratt Models of Isostasy",
    subtitle: "How towering mountains float on the asthenosphere",
    contentHtml: `
      <p>The state of gravitational equilibrium between Earth's crust and mantle:</p>
      <ul style="margin-left:1.1rem; margin-top:4px;">
        <li><strong>Airy's Model:</strong> Uniform crustal density (<code>ρ<sub>c</sub> = constant</code>). Tall mountains have deeper crustal roots extending into the mantle (like icebergs).</li>
        <li><strong>Pratt's Model:</strong> Variable crustal density (<code>ρ</code> varies laterally). Different topography heights float above a flat, uniform depth of compensation.</li>
      </ul>
    `,
    quiz: {
      question: "According to Airy's hypothesis of isostasy, what is the fundamental reason why the Himalayas stand much higher than the surrounding plains?",
      options: [
        "Himalayan rocks possess a significantly lower bulk density than the Gangetic plain sediments",
        "The Himalayas are buoyed up by a deeply penetrating low-density crustal root into the denser mantle",
        "Thermal expansion from radioactive elements underneath Tibet decreases mantle viscosity",
        "A shallow depth of compensation exists right at 35 km under high mountains"
      ],
      answer: 1,
      rationale: "Airy posits constant crustal density with variable depth of roots. High mountain peaks require deep roots of lighter crustal material displacing denser mantle rock beneath them."
    },
    deepDive: `
      <h4>GATE Mathematical Formula:</h4>
      <p>For Airy isostasy, root depth <code>r</code> is given by:</p>
      <div style="background:rgba(0,0,0,0.4); padding:6px; border-radius:4px; font-family:monospace; color:#34d399;">
        r = [h × ρ<sub>c</sub>] / (ρ<sub>m</sub> - ρ<sub>c</sub>)
      </div>
      <p>Where <code>h</code> = elevation, <code>ρ<sub>c</sub></code> = crust density (~2.7 g/cm³), and <code>ρ<sub>m</sub></code> = mantle density (~3.3 g/cm³). For h = 5 km, r ≈ 22.5 km root depth!</p>
    `,
    eli5: "Airy says mountains are icebergs—a huge mountain must have a giant underwater root to stay afloat. Pratt says mountains are wooden blocks of different types of wood—balsa wood floats taller than heavy oak!"
  },

  // --- UNIT 2: GEOMORPHOLOGY (3 Cards) ---
  {
    id: 4,
    unitId: "unit_2",
    unitName: "Geomorphology",
    subtopicId: "geom_glacial",
    subtopicName: "Glacial Landforms",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Roche Moutonnée vs Drumlin: The Asymmetry Trap",
    subtitle: "Never confuse upstream vs downstream steepness again",
    contentHtml: `
      <div class="svg-diagram-wrap">
        <svg viewBox="0 0 300 95">
          <!-- Roche Moutonnee -->
          <path d="M 20 80 Q 70 40 100 35 L 115 80 Z" fill="#38bdf8"/>
          <text x="65" y="92" fill="#9da1b4" font-size="8">Smooth Stoss</text>
          <text x="125" y="60" fill="#f43f5e" font-size="8">Plucked Lee</text>
          <text x="65" y="25" fill="#fff" font-size="9" font-weight="bold">Roche Moutonnée (Bedrock)</text>
          
          <!-- Arrow -->
          <line x1="10" y1="15" x2="60" y2="15" stroke="#f59e0b" stroke-width="2"/>
          <text x="10" y="10" fill="#f59e0b" font-size="7">Ice Flow →</text>
          
          <!-- Drumlin -->
          <path d="M 180 80 L 195 40 Q 240 45 280 80 Z" fill="#10b981"/>
          <text x="180" y="32" fill="#fff" font-size="9" font-weight="bold">Drumlin (Till)</text>
          <text x="185" y="92" fill="#f43f5e" font-size="8">Steep Stoss</text>
          <text x="250" y="92" fill="#9da1b4" font-size="8">Gentle Lee</text>
        </svg>
      </div>
      <p><strong>The High-Yield Trap:</strong></p>
      <ul style="margin-left:1.1rem; margin-top:4px;">
        <li><strong>Roche Moutonnée (Erosional):</strong> Stoss side is <em>gentle & abraded</em>; Lee side is <em>steep & plucked</em>.</li>
        <li><strong>Drumlin (Depositional):</strong> Stoss side is <em>steep & blunt</em>; Lee side is <em>gentle & tapering</em> (inverted spoon).</li>
      </ul>
    `,
    quiz: {
      question: "An asymmetrical streamlined glacial hill composed of unstratified till shows a steep, blunt side facing North and a gentle tapering tail pointing South. What is the feature and ice direction?",
      options: [
        "Roche Moutonnée; ice flowed from South to North",
        "Drumlin; ice flowed from North to South",
        "Esker; ice flowed from West to East",
        "Roche Moutonnée; ice flowed from North to South"
      ],
      answer: 1,
      rationale: "A drumlin is composed of glacial till with its steep stoss side facing the direction from which the ice advanced (North) and gentle tail tapering downstream (South)."
    },
    deepDive: `
      <h4>Glacial Landform Quick Summary:</h4>
      <ul>
        <li><strong>Kame:</strong> Steep-sided mound of stratified drift deposited in openings in or against stagnant ice.</li>
        <li><strong>Esker:</strong> Sinuous, winding ridge of stratified gravel and sand deposited by subglacial meltwater tunnels.</li>
        <li><strong>Hanging Valley:</strong> Formed when tributary glacier valley floors sit elevated above the deeply carved main U-shaped glacial trough.</li>
      </ul>
    `,
    eli5: "A Roche Moutonnée is a rock smoothed down by ice climbing up the gentle ramp and ripping off rocks as it falls off the cliff. A Drumlin is an upside-down spoon of dirt pointing where the glacier ran away!"
  },
  {
    id: 5,
    unitId: "unit_2",
    unitName: "Geomorphology",
    subtopicId: "geom_drainage",
    subtopicName: "River & Drainage Basin Patterns",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC"],
    title: "Drainage Patterns vs. Geologic Controls",
    subtitle: "Instant identification of subterranean structural fabric",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6;">
        <li><strong>Dendritic:</strong> Tree-like branching. Indicates <em>homogeneous, isotropic rocks</em> (flat-lying sediment or uniform granite).</li>
        <li><strong>Trellis:</strong> Tributaries meet trunk stream at <em>right angles (90°)</em>. Controlled by dipping, folded strata (alternating hard & soft rock in anticlines/synclines).</li>
        <li><strong>Rectangular:</strong> Streams make sharp right-angle bends controlled by <em>orthogonal joint systems or fault networks</em>.</li>
        <li><strong>Radial:</strong> Streams radiate outwards from a central dome, volcanic cone, or peak.</li>
        <li><strong>Centripetal:</strong> Streams converge inward into a central depression or sink (playa lake).</li>
      </ul>
    `,
    deepDive: `
      <h4>Horton's Laws of Drainage Composition:</h4>
      <ol>
        <li><strong>Law of Stream Numbers:</strong> The number of streams of different orders in a basin forms a geometric progression: <code>N<sub>u</sub> = R<sub>b</sub><sup>(k - u)</sup></code>, where <code>R<sub>b</sub></code> is the bifurcation ratio (typically 3 to 5).</li>
        <li><strong>Law of Stream Lengths:</strong> Mean stream lengths of successive orders increase in direct proportion to order.</li>
      </ol>
    `,
    eli5: "Looking at river maps is like an X-ray of underground rocks. If water flows like random tree roots, the ground is completely uniform; if it turns in rigid 90-degree corners, faults and fractures are directing the traffic!"
  },
  {
    id: 6,
    unitId: "unit_2",
    unitName: "Geomorphology",
    subtopicId: "geom_karst",
    subtopicName: "Karst Topography",
    type: "quiz",
    examTags: ["GATE", "UPSC"],
    title: "Karst Evolution & Sinkhole Sequences",
    subtitle: "Carbonate dissolution landforms and speleothems",
    contentHtml: `
      <p>Karst requires soluble rocks (limestone/dolomite <code>CaCO₃</code>) and groundwater charged with carbonic acid (<code>H₂CO₃</code>):</p>
      <div style="background:rgba(0,0,0,0.4); padding:6px; border-radius:4px; font-family:monospace; color:#38bdf8; font-size:0.8rem;">
        CaCO₃ + H₂O + CO₂ ⇌ Ca²⁺ + 2HCO₃⁻
      </div>
      <p><strong>Sequence of Depressions:</strong></p>
      <p>Doline (small sinkhole) → Uvala (coalesced sinkholes) → Polje (massive flat-floored karst valley bounded by steep slopes).</p>
    `,
    quiz: {
      question: "Which of the following speleothem features grows vertically UPWARD from the cavern floor due to dripping water supersaturated in calcium bicarbonate?",
      options: [
        "Stalactite",
        "Stalagmite",
        "Helictite",
        "Drapery"
      ],
      answer: 1,
      rationale: "StalagMites grow from the Mound/ground upward ('M' for Mound), whereas stalacTites hang Tight from the ceiling ('T' for Top)."
    },
    deepDive: `
      <h4>Key Karst Features for GATE:</h4>
      <ul>
        <li><strong>Lapies / Karren:</strong> Etched, grooved, and furrowed limestone bedrock surfaces produced by solution fluting.</li>
        <li><strong>Blind Valley:</strong> A valley that terminates abruptly at a swallow hole (ponor) where a surface stream sinks underground.</li>
        <li><strong>Cave Pearls:</strong> Concentric spherical calcite accretions formed in shallow dripping pools.</li>
      </ul>
    `,
    eli5: "Stalactites hang tightly from the ceiling like icicles. Stalagmites stand mightily on the ground catching the drips!"
  },

  // --- UNIT 3: STRUCTURAL GEOLOGY (3 Cards) ---
  {
    id: 7,
    unitId: "unit_3",
    unitName: "Structural Geology",
    subtopicId: "struct_rule_of_vs",
    subtopicName: "Rule of V's & Outcrop Patterns",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET", "UPSC"],
    title: "The Ultimate 'Rule of V's' Cheat Matrix",
    subtitle: "Solve any topographic contour crossing problem in 5 seconds",
    contentHtml: `
      <div class="svg-diagram-wrap">
        <svg viewBox="0 0 310 110">
          <line x1="20" y1="15" x2="20" y2="95" stroke="#38bdf8" stroke-width="2"/>
          <text x="26" y="55" fill="#38bdf8" font-size="8">Stream Flow (Downvalley) ↓</text>
          
          <path d="M 80 20 Q 130 55 180 20" fill="none" stroke="#f59e0b" stroke-width="3"/>
          <text x="130" y="15" fill="#f59e0b" font-size="8" font-weight="bold" text-anchor="middle">V's Point UPSTREAM</text>
          <text x="130" y="32" fill="#9da1b4" font-size="7" text-anchor="middle">Bed dips UPSTREAM (or horizontal)</text>
          
          <path d="M 80 85 Q 130 60 180 85" fill="none" stroke="#10b981" stroke-width="3"/>
          <text x="130" y="102" fill="#10b981" font-size="8" font-weight="bold" text-anchor="middle">V's Point DOWNSTREAM</text>
          <text x="130" y="76" fill="#9da1b4" font-size="7" text-anchor="middle">Bed dips Downstream STEEPER than valley</text>
        </svg>
      </div>
      <table style="width:100%; font-size:0.75rem; border-collapse:collapse; margin-top:6px;">
        <tr style="border-bottom:1px solid #333; color:#9da1b4;">
          <th style="text-align:left; padding:4px;">Bed Attitude</th>
          <th style="text-align:left; padding:4px;">Outcrop V Direction</th>
        </tr>
        <tr>
          <td style="padding:4px;">Horizontal Bed</td>
          <td style="padding:4px; color:#38bdf8;">Parallels contour lines (V points UPSTREAM)</td>
        </tr>
        <tr>
          <td style="padding:4px;">Vertical Bed</td>
          <td style="padding:4px; color:#f43f5e;">Straight line across topography (NO V!)</td>
        </tr>
        <tr>
          <td style="padding:4px;">Dips Upstream</td>
          <td style="padding:4px; color:#f59e0b;">V points UPSTREAM</td>
        </tr>
        <tr>
          <td style="padding:4px;">Dips Downstream > Valley gradient</td>
          <td style="padding:4px; color:#10b981;">V points DOWNSTREAM</td>
        </tr>
        <tr>
          <td style="padding:4px;">Dips Downstream < Valley gradient</td>
          <td style="padding:4px; color:#ec4899;">V points UPSTREAM</td>
        </tr>
      </table>
    `,
    deepDive: `
      <h4>Exam Golden Rules:</h4>
      <ul>
        <li><strong>Vertical Beds:</strong> Unaffected by topography! They cut straight across mountains, ridges, and valleys without deflection.</li>
        <li><strong>Horizontal Beds:</strong> Exactly follow contour lines. Their outcrop pattern is identical to the topographic contours.</li>
        <li><strong>Beds Dipping Parallel to Valley:</strong> If bed dip = valley gradient, the outcrop forms parallel bands along valley walls and never crosses the stream!</li>
      </ul>
    `,
    eli5: "Imagine walking up a river valley. Vertical walls don't bend at all. A flat layer copies the shape of the river curves. If the layer slopes down against the water, the V points upstream!"
  },
  {
    id: 8,
    unitId: "unit_3",
    unitName: "Structural Geology",
    subtopicId: "struct_stereonets",
    subtopicName: "Stereographic & Equal-Area Projections",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Stereonet: Cylindrical Fold Hinge from Poles",
    subtitle: "Interpreting π-diagrams and β-diagrams for fold axes",
    contentHtml: `
      <p>In structural analysis using the lower-hemisphere equal-area projection (Schmidt net):</p>
      <ul style="margin-left:1.1rem; margin-top:4px;">
        <li><strong>π-Pole:</strong> The pole normal to a planar bedding surface (90° away from the great circle).</li>
        <li><strong>π-Circle (Girdle):</strong> For a cylindrical fold, the π-poles to folded bedding lie on a single great circle.</li>
        <li><strong>Fold Axis (β):</strong> The normal (pole) to the π-circle girdle corresponds to the <em>fold axis orientation and plunge</em>!</li>
      </ul>
    `,
    quiz: {
      question: "When plotting bedding poles of a cylindrical fold on a stereonet, they define a great circle (π-girdle) striking N-S and dipping 40° East. What is the plunge and trend of the fold axis?",
      options: [
        "Plunge 50° towards West (270°)",
        "Plunge 40° towards East (090°)",
        "Plunge 90° vertically downward",
        "Plunge 0° horizontally along North-South (000°)"
      ],
      answer: 0,
      rationale: "The fold axis β is the pole to the π-girdle. The pole to a great circle striking N-S dipping 40°E plunges (90° - 40°) = 50° in the opposite direction, i.e., towards West (270°)."
    },
    deepDive: `
      <h4>Difference between Wulff and Schmidt Nets:</h4>
      <ul>
        <li><strong>Wulff Net:</strong> Equal-Angle (stereographic) projection. Preserves shapes and angular relationships, but distorts area near the periphery. Used for crystallography!</li>
        <li><strong>Schmidt Net:</strong> Equal-Area (Lambert) projection. Preserves relative areas across the net. Essential for structural contour density plotting and fabric analysis!</li>
      </ul>
    `,
    eli5: "A stereonet lets you squash 3D tilted rocks onto a 2D circle. If all your folded bed poles line up like beads on a necklace, the necklace's axle is your fold hinge!"
  },
  {
    id: 9,
    unitId: "unit_3",
    unitName: "Structural Geology",
    subtopicId: "struct_faults",
    subtopicName: "Faults, Joints & Unconformities",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC"],
    title: "Anderson's Fault Dynamics & Stress Tensors",
    subtitle: "Orientation of Principal Stresses (σ₁ > σ₂ > σ₃) in faulting",
    contentHtml: `
      <table style="width:100%; font-size:0.75rem; border-collapse:collapse; margin-top:4px;">
        <tr style="border-bottom:1px solid #333; color:#9da1b4;">
          <th style="padding:4px;">Fault Regime</th>
          <th style="padding:4px;">Vertical Stress (σ<sub>v</sub>)</th>
          <th style="padding:4px;">Horizontal Stresses</th>
          <th style="padding:4px;">Dip Angle</th>
        </tr>
        <tr>
          <td style="padding:4px; font-weight:bold; color:#38bdf8;">Normal Fault (Extensional)</td>
          <td style="padding:4px;"><strong>σ₁ (Maximum)</strong></td>
          <td style="padding:4px;">σ₂ & σ₃ are horizontal</td>
          <td style="padding:4px;">~60°</td>
        </tr>
        <tr>
          <td style="padding:4px; font-weight:bold; color:#f43f5e;">Thrust / Reverse (Compressional)</td>
          <td style="padding:4px;"><strong>σ₃ (Minimum)</strong></td>
          <td style="padding:4px;">σ₁ & σ₂ are horizontal</td>
          <td style="padding:4px;">~30° (Thrust < 45°)</td>
        </tr>
        <tr>
          <td style="padding:4px; font-weight:bold; color:#f59e0b;">Strike-Slip (Wrench)</td>
          <td style="padding:4px;"><strong>σ₂ (Intermediate)</strong></td>
          <td style="padding:4px;">σ₁ & σ₃ are horizontal</td>
          <td style="padding:4px;">~90° (Vertical)</td>
        </tr>
      </table>
    `,
    deepDive: `
      <h4>Coulomb Criterion of Failure:</h4>
      <p>Failure occurs along planes oriented at an angle <code>θ = 45° - (φ / 2)</code> to the maximum principal compressive stress <code>σ₁</code>, where <code>φ</code> is the angle of internal friction (typically ~30°, making failure planes form at ~30° to σ₁).</p>
    `,
    eli5: "Anderson realized the Earth's surface touches the atmosphere, so one principal stress must be purely vertical! Gravity pushing down gives normal faults, side squeeze gives thrusts, and sideways shear gives strike-slip!"
  },

  // --- UNIT 4: PALEONTOLOGY (3 Cards) ---
  {
    id: 10,
    unitId: "unit_4",
    unitName: "Paleontology",
    subtopicId: "paleo_trilobites",
    subtopicName: "Trilobita Facial Sutures",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET", "UPSC"],
    title: "Trilobite Cephalic Facial Sutures",
    subtitle: "Suture termination points relative to genal angles",
    contentHtml: `
      <div class="svg-diagram-wrap">
        <svg viewBox="0 0 300 100">
          <path d="M 50 80 C 50 20 250 20 250 80 C 230 85 220 70 200 70 C 180 70 170 85 150 85 C 130 85 120 70 100 70 C 80 70 70 85 50 80 Z" fill="#1e2230" stroke="#38bdf8" stroke-width="2"/>
          <path d="M 125 75 C 125 35 175 35 175 75 Z" fill="#38bdf8" opacity="0.3"/>
          <text x="150" y="55" fill="#fff" font-size="8" text-anchor="middle">Glabella</text>
          <circle cx="50" cy="80" r="3" fill="#f43f5e"/>
          <circle cx="250" cy="80" r="3" fill="#f43f5e"/>
          <text x="40" y="92" fill="#f43f5e" font-size="7">Genal Angle</text>
        </svg>
      </div>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.8rem;">
        <li><strong>Proparian:</strong> Posterior section of suture cuts the <em>lateral margin</em> anterior to the genal angle (e.g., <em>Phacops</em>).</li>
        <li><strong>Opisthoparian:</strong> Suture cuts the <em>posterior margin</em> inside the genal angle (e.g., <em>Paradoxides, Ptychoparia</em>).</li>
        <li><strong>Gonatoparian:</strong> Suture passes directly through the <em>apex of the genal angle</em> (e.g., <em>Calymene</em>).</li>
        <li><strong>Hypoparian:</strong> Suture runs entirely along the <em>ventral/marginal edge</em> (e.g., <em>Agnostus, Trinucleus</em>).</li>
      </ul>
    `,
    deepDive: `
      <h4>Evolutionary Trend in Cephalic Sutures:</h4>
      <p>Cambrian trilobites are predominantly <strong>Opisthoparian</strong>. In post-Cambrian forms, Proparian and Gonatoparian arrangements evolved. The facial suture functioned to allow ecdysis (molting of the chitinous exoskeleton).</p>
    `,
    eli5: "When baby trilobites grew too fat for their shell, the helmet cracked along pre-planned perforated zip-lines called facial sutures. Where that zip-line exits near the cheek horns tells you its family tree!"
  },
  {
    id: 11,
    unitId: "unit_4",
    unitName: "Paleontology",
    subtopicId: "paleo_gondwana_flora",
    subtopicName: "Gondwana Plant Fossils",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Glossopteris vs. Gangamopteris Distinctions",
    subtitle: "Key index flora of the Lower Gondwana coal-bearing sequence",
    contentHtml: `
      <p>The Permo-Carboniferous gymnosperm flora of the Indian Gondwana basins:</p>
      <ul style="margin-left:1.1rem; margin-top:4px;">
        <li><strong>Gangamopteris:</strong> Tongue-shaped leaf, reticulate venation, but completely <em>LACKS a midrib</em>! Dominates the basal Permian (Talchir & Karharbari formations).</li>
        <li><strong>Glossopteris:</strong> Distinct, well-defined <em>midrib</em> with anastomosing secondary veins. Dominates the upper Lower Gondwana (Barakar & Raniganj formations).</li>
      </ul>
    `,
    quiz: {
      question: "Which morphological feature distinguishes the fossil leaf genus Gangamopteris from Glossopteris?",
      options: [
        "Presence of compound palmate venation in Gangamopteris",
        "Total absence of a distinct central midrib in Gangamopteris",
        "Presence of dentate, spiky leaf margins in Glossopteris",
        "Parallel veins without any anastomosis in Gangamopteris"
      ],
      answer: 1,
      rationale: "Gangamopteris is characterized by anastamosing reticulate venation that radiates without forming a distinct central midrib, whereas Glossopteris has a prominent central midrib."
    },
    deepDive: `
      <h4>Stratigraphic Acme Zones:</h4>
      <ul>
        <li><strong>Talchir Formation:</strong> Cold periglacial tillite; arrival of earliest <em>Gangamopteris cyclopteroides</em>.</li>
        <li><strong>Karharbari Formation:</strong> Acme (peak abundance) of <em>Gangamopteris</em>.</li>
        <li><strong>Barakar & Raniganj Formations:</strong> Acme of <em>Glossopteris</em> (e.g., <em>G. indica, G. communis</em>), massive thick bituminous coal seams.</li>
        <li><strong>Panchet Formation (Early Triassic):</strong> Extinction of Glossopteris flora; emergence of <em>Dicroidium</em> seed ferns!</li>
      </ul>
    `,
    eli5: "Glossopteris has a crisp backbone down the middle of its leaf like a spine. Gangamopteris has the same net-like veins but forgot its spine!"
  },
  {
    id: 12,
    unitId: "unit_4",
    unitName: "Paleontology",
    subtopicId: "paleo_brachiopods",
    subtopicName: "Brachiopoda vs Pelecypoda Symmetry",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC"],
    title: "Bivalve vs. Brachiopod Symmetry Planes",
    subtitle: "The most tested morphological rule in Indian Geology exams",
    contentHtml: `
      <table style="width:100%; font-size:0.78rem; border-collapse:collapse; margin-top:4px;">
        <tr style="border-bottom:1px solid #333; color:#9da1b4;">
          <th style="padding:4px;">Feature</th>
          <th style="padding:4px;">Brachiopoda (Lamp Shells)</th>
          <th style="padding:4px;">Bivalvia / Pelecypoda (Clams)</th>
        </tr>
        <tr>
          <td style="padding:4px;">Plane of Symmetry</td>
          <td style="padding:4px; color:#38bdf8;"><strong>Passes THROUGH both valves</strong> (Bilateral symmetry divides each valve in half)</td>
          <td style="padding:4px; color:#10b981;"><strong>Passes BETWEEN the valves</strong> (Commisural plane; Left valve = Right valve)</td>
        </tr>
        <tr>
          <td style="padding:4px;">Valve Size</td>
          <td style="padding:4px;">Inequivalve (Pedicle valve > Brachial valve)</td>
          <td style="padding:4px;">Equivalve (Left = Right valve in normal clams)</td>
        </tr>
        <tr>
          <td style="padding:4px;">Valve Equilaterality</td>
          <td style="padding:4px;">Equilateral (Each valve is symmetric about its midline)</td>
          <td style="padding:4px;">Inequilateral (Anterior ≠ Posterior)</td>
        </tr>
      </table>
    `,
    deepDive: `
      <h4>Internal Anatomy Keys:</h4>
      <ul>
        <li><strong>Brachiopod Pedicle Opening:</strong> Foramen located in the delthyrium of the ventral/pedicle valve for stalk attachment.</li>
        <li><strong>Bivalve Hinge Dentition:</strong> Taxodont (many uniform teeth like <em>Arca</em>), Heterodont (cardinal + lateral teeth like <em>Venus</em>), Schizodont (heavy bifurcating teeth like <em>Trigonia</em>).</li>
      </ul>
    `,
    eli5: "A clam holds two identical clapping hands together (mirror between hands). A brachiopod is like your two hands cupped unevenly, where a mirror would have to slice through your knuckles to find symmetry!"
  },

  // --- UNIT 5: STRATIGRAPHY (3 Cards) ---
  {
    id: 13,
    unitId: "unit_5",
    unitName: "Stratigraphy",
    subtopicId: "strat_cratons",
    subtopicName: "Archaean Cratons (Dharwar Craton)",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET", "UPSC"],
    title: "Dharwar Craton: Western vs. Eastern Domains",
    subtitle: "Separated by the Closepet Granite along the Chitradurga shear zone",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.8rem;">
        <li><strong>Western Dharwar Craton (WDC):</strong>
          <br>• Ancient basement: <em>Gorur Gneiss (3.3 - 3.4 Ga)</em>.
          <br>• Sargur Group (~3.3 Ga) ultramafics & komatiites.
          <br>• Dharwar Supergroup: Bababudan (mafic-BIF) & Chitradurga (sedimentary).
          <br>• Metamorphism: Greenschist to Amphibolite facies.
        </li>
        <li><strong>Eastern Dharwar Craton (EDC):</strong>
          <br>• Younger volcano-sedimentary greenstone belts (Kolar, Hutti, Ramagiri).
          <br>• Famous for orogenic lode gold deposits (Kolar Gold Fields, Hutti).
          <br>• Diapiric TTG plutons and high-grade Granulite progression southwards.
        </li>
      </ul>
    `,
    deepDive: `
      <h4>Dharwar Supergroup Stratigraphic Order:</h4>
      <ol>
        <li><strong>Basement:</strong> Peninsular Gneissic Complex (PGC).</li>
        <li><strong>Bababudan Group:</strong> Oligomictic quartz-pebble conglomerate (QPC) at base → flood basalts → banded iron formations (BIF, Kudremukh).</li>
        <li><strong>Chitradurga Group:</strong> Polymictic conglomerate (Talya) → greywacke-shale → limestone-dolomite → BIF.</li>
      </ol>
    `,
    eli5: "Karnataka's Dharwar craton is split down the middle by a giant pink granite knife called Closepet. The West has ancient iron mountains; the East has deep gold mines!"
  },
  {
    id: 14,
    unitId: "unit_5",
    unitName: "Stratigraphy",
    subtopicId: "strat_purana_basins",
    subtopicName: "Purana Basins (Cuddapah vs Vindhyan)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Cuddapah Basin vs. Vindhyan Basin",
    subtitle: "Proterozoic Purana basin succession and diamondiferous conglomerates",
    contentHtml: `
      <p>The Purana basins preserve unmetamorphosed to mildly deformed Proterozoic sedimentary successions:</p>
      <ul style="margin-left:1.1rem; margin-top:4px;">
        <li><strong>Cuddapah Basin:</strong> Crescent/kidney-shaped basin resting over Archaean gneisses with the Great Eparchaean Unconformity. Divided into Cuddapah Supergroup + overlying Kurnool Group.</li>
        <li><strong>Vindhyan Basin:</strong> Massive east-west basin bounded by the Great Boundary Fault (GBF) against the Aravalli belt.</li>
      </ul>
    `,
    quiz: {
      question: "Which formation in the Vindhyan Supergroup is globally famous for hosting kimberlitic/lamproitic diamond deposits in India (e.g., Panna/Majhgawan)?",
      options: [
        "Kaimur Group (Panna & Rewa shales/conglomerates)",
        "Semri Group (Porcellanite Formation)",
        "Bhander Limestone",
        "Rohtas Limestone"
      ],
      answer: 0,
      rationale: "Diamonds in the Vindhyan basin occur within the Panna and Jhiri diamondiferous conglomerates of the Kaimur and Rewa Groups, derived from the Majhgawan lamproite pipe (~1.1 Ga)."
    },
    deepDive: `
      <h4>Cuddapah vs Kurnool Diamonds:</h4>
      <p>In the Cuddapah basin, diamonds occur within the <strong>Banganapalle Conglomerate</strong>, which forms the basal unit of the Neoproterozoic <strong>Kurnool Group</strong> resting unconformably atop the Papaghni and Chitravati groups.</p>
    `,
    eli5: "Purana basins are giant ancient stone bathtubs that didn't get crushed by plate collisions. The pebbles at the bottom contain diamonds washed out of volcanic kimberlite pipes!"
  },
  {
    id: 15,
    unitId: "unit_5",
    unitName: "Stratigraphy",
    subtopicId: "strat_kutch_trichy",
    subtopicName: "Jurassic of Kutch (Chari & Patcham)",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC"],
    title: "Jurassic Succession of Kutch",
    subtitle: "Patcham → Chari → Katrol → Umia with index ammonoids",
    contentHtml: `
      <div class="mnemonic-banner">
        <div class="phrase">"Please Call Karishma Urgent!" (Base to Top)</div>
        <div class="mnemonic-ladder">
          <div class="mnemonic-step"><span class="step-letter">P</span><strong>Patcham:</strong> Bathonian (Coral limestone, <em>Macrocephalites triangularis</em>)</div>
          <div class="mnemonic-step"><span class="step-letter">C</span><strong>Chari:</strong> Callovian–Oxfordian (Rich ammonoids: <em>Macrocephalites macrocephalus, Reineckeia</em>)</div>
          <div class="mnemonic-step"><span class="step-letter">K</span><strong>Katrol:</strong> Kimmeridgian (Sandstones/shales: <em>Oppelia, Waagenia</em>)</div>
          <div class="mnemonic-step"><span class="step-letter">U</span><strong>Umia:</strong> Tithonian–Aptian (Trigonia beds, <em>Virgatosphinctes</em>, plant beds)</div>
        </div>
      </div>
    `,
    deepDive: `
      <h4>The Golden Oolite Marker:</h4>
      <p>A classic exam question: The <strong>Golden Oolite</strong> (oolitic limestone coated with limonite/ferruginous films) occurs specifically within the upper part of the <strong>Chari Formation</strong> (Keera & Habo domes) and marks Callovian marine shelf sedimentation.</p>
    `,
    eli5: "Remember PCKU: Patcham, Chari, Katrol, Umia. Just remember 'Please Call Karishma Urgent' to ace the Jurassic of Kutch in any exam!"
  },

  // --- UNIT 6: MINERALOGY (3 Cards) ---
  {
    id: 16,
    unitId: "unit_6",
    unitName: "Mineralogy",
    subtopicId: "min_optical_basics",
    subtopicName: "Crossed Polars & Extinction Types",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Crossed Polars: Extinction & Twinning Clues",
    subtitle: "Diagnosing minerals under the petrographic microscope",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Parallel Extinction:</strong> Mineral goes dark when cleavage or crystal length is parallel to the crosshair (e.g., biotite, orthopyroxene, sillimanite).</li>
        <li><strong>Inclined / Oblique Extinction:</strong> Extinguishes at an angle > 0° to cleavage (e.g., clinopyroxene, hornblende).</li>
        <li><strong>Undulose (Wavy) Extinction:</strong> Sweeping, non-uniform darkness caused by internal lattice strain/dislocations (classic for strained <em>Quartz</em>).</li>
        <li><strong>Polysynthetic Twinning:</strong> Repeated lamellar twins (classic for <em>Plagioclase</em> feldspar via Albite law).</li>
      </ul>
    `,
    quiz: {
      question: "A thin section examined under crossed nicols (XPL) displays lamellar stripe-like twinning that extinguishes in alternating sets when rotating the stage. Which mineral and twinning law is this?",
      options: [
        "Microcline with Tartan cross-hatch twinning",
        "Plagioclase with Albite polysynthetic twinning",
        "Orthoclase with Carlsbad contact twinning",
        "Quartz with Brazil penetration twinning"
      ],
      answer: 1,
      rationale: "Albite law twinning in plagioclase produces multiple parallel lamellae (polysynthetic twinning) parallel to the (010) plane, alternating extinction between adjacent twin lamellae."
    },
    deepDive: `
      <h4>Twinning Law Quick Matrix:</h4>
      <ul>
        <li><strong>Carlsbad Twin:</strong> Simple contact or interpenetration twin along (010) in orthoclase; two halves extinguish at different angles.</li>
        <li><strong>Baveno Twin:</strong> Contact twin along (021) diagonal plane.</li>
        <li><strong>Manebach Twin:</strong> Contact twin along (001) basal pinacoid.</li>
        <li><strong>Tartan / Cross-Hatch:</strong> Combination of Albite + Pericline laws in <em>Microcline</em>!</li>
      </ul>
    `,
    eli5: "Plagioclase under polarized light looks like barcode stripes that blink on and off as you spin the microscope stage!"
  },
  {
    id: 17,
    unitId: "unit_6",
    unitName: "Mineralogy",
    subtopicId: "min_silicates",
    subtopicName: "Silicate Structures (Si:O Ratios)",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET", "UPSC"],
    title: "Silicate Polymerization & Si:O Ratios",
    subtitle: "From isolated tetrahedra to 3D framework networks",
    contentHtml: `
      <table style="width:100%; font-size:0.75rem; border-collapse:collapse; margin-top:4px;">
        <tr style="border-bottom:1px solid #333; color:#9da1b4;">
          <th style="padding:3px;">Subclass</th>
          <th style="padding:3px;">Structure</th>
          <th style="padding:3px;">Si : O Ratio</th>
          <th style="padding:3px;">Representative Minerals</th>
        </tr>
        <tr>
          <td style="padding:3px; font-weight:bold;">Nesosilicate</td>
          <td style="padding:3px;">Isolated [SiO₄]⁴⁻</td>
          <td style="padding:3px; color:#38bdf8;">1 : 4</td>
          <td style="padding:3px;">Olivine, Garnet, Zircon, Al₂SiO₅</td>
        </tr>
        <tr>
          <td style="padding:3px; font-weight:bold;">Sorosilicate</td>
          <td style="padding:3px;">Double [Si₂O₇]⁶⁻</td>
          <td style="padding:3px; color:#38bdf8;">2 : 7 (1 : 3.5)</td>
          <td style="padding:3px;">Epidote, Zoisite, Hemimorphite</td>
        </tr>
        <tr>
          <td style="padding:3px; font-weight:bold;">Cyclosilicate</td>
          <td style="padding:3px;">Rings [Si₆O₁₈]¹²⁻</td>
          <td style="padding:3px; color:#38bdf8;">1 : 3</td>
          <td style="padding:3px;">Beryl, Tourmaline, Cordierite</td>
        </tr>
        <tr>
          <td style="padding:3px; font-weight:bold;">Inosilicate (Single)</td>
          <td style="padding:3px;">Single Chain</td>
          <td style="padding:3px; color:#38bdf8;">1 : 3</td>
          <td style="padding:3px;">Pyroxene group (Enstatite, Diopside)</td>
        </tr>
        <tr>
          <td style="padding:3px; font-weight:bold;">Inosilicate (Double)</td>
          <td style="padding:3px;">Double Chain</td>
          <td style="padding:3px; color:#38bdf8;">4 : 11</td>
          <td style="padding:3px;">Amphibole group (Tremolite, Hornblende)</td>
        </tr>
        <tr>
          <td style="padding:3px; font-weight:bold;">Phyllosilicate</td>
          <td style="padding:3px;">Sheets [Si₂O₅]²⁻</td>
          <td style="padding:3px; color:#38bdf8;">2 : 5 (1 : 2.5)</td>
          <td style="padding:3px;">Mica (Biotite, Muscovite), Talc, Clays</td>
        </tr>
        <tr>
          <td style="padding:3px; font-weight:bold;">Tectosilicate</td>
          <td style="padding:3px;">3D Framework</td>
          <td style="padding:3px; color:#38bdf8;">1 : 2</td>
          <td style="padding:3px;">Quartz, Feldspars, Zeolites</td>
        </tr>
      </table>
    `,
    deepDive: `
      <h4>Cleavage Angles from Chains:</h4>
      <ul>
        <li><strong>Pyroxene (Single Chain):</strong> Cleavages intersect at approximately <strong>87° and 93°</strong> (nearly right angles).</li>
        <li><strong>Amphibole (Double Chain):</strong> Cleavages intersect at approximately <strong>56° and 124°</strong> (diamond-shaped).</li>
      </ul>
    `,
    eli5: "Think of oxygen atoms as Velcro dots. In olivine, single silica pyramids float freely. In quartz, every corner is glued to another pyramid, making a rigid indestructible 3D jungle gym!"
  },
  {
    id: 18,
    unitId: "unit_6",
    unitName: "Mineralogy",
    subtopicId: "min_miller_indices",
    subtopicName: "Miller Indices & Crystal Forms",
    type: "quiz",
    examTags: ["GATE", "UPSC"],
    title: "Miller Indices Reciprocal Calculation",
    subtitle: "Converting Weiss axial intercepts into crystal face indices (h k l)",
    contentHtml: `
      <p>Steps to obtain the Miller indices <code>(h k l)</code> of any crystal face:</p>
      <ol style="margin-left:1.1rem; line-height:1.5; font-size:0.8rem;">
        <li>Find intercepts on axes a, b, c (Weiss parameters): e.g., <code>1a : 2b : ∞c</code>.</li>
        <li>Take reciprocals: <code>1/1, 1/2, 1/∞ = 1, 1/2, 0</code>.</li>
        <li>Clear fractions to smallest whole numbers: Multiply by 2 → <code>(2 1 0)</code>.</li>
      </ol>
    `,
    quiz: {
      question: "A crystal face cuts the 'a' axis at 1 unit, the 'b' axis at 3 units, and runs completely parallel to the vertical 'c' axis. What are its Miller indices?",
      options: [
        "(1 3 0)",
        "(3 1 0)",
        "(1 3 1)",
        "(3 1 ∞)"
      ],
      answer: 1,
      rationale: "Intercepts = 1, 3, ∞. Reciprocals = 1/1, 1/3, 1/∞ = 1, 1/3, 0. Multiplying throughout by 3 clears the fraction to yield (3 1 0)."
    },
    deepDive: `
      <h4>Bracket Conventions in Crystallography:</h4>
      <ul>
        <li><code>(h k l)</code> = A specific single crystal face or plane.</li>
        <li><code>{h k l}</code> = A form (all symmetrical equivalent faces, e.g. {100} in cubic system = 6 cube faces).</li>
        <li><code>[u v w]</code> = A specific crystallographic zone axis or direction.</li>
      </ul>
    `,
    eli5: "Infinity in intercepts turns into 0 in Miller indices because 1 divided by infinity is zero! If a face never touches an axis, that axis gets a 0!"
  },

  // --- UNIT 7: PETROLOGY (3 Cards) ---
  {
    id: 19,
    unitId: "unit_7",
    unitName: "Petrology",
    subtopicId: "petro_barrovian_zones",
    subtopicName: "Barrovian Metamorphic Zones",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET", "UPSC"],
    title: "Barrovian Pelitic Metamorphic Sequence",
    subtitle: "Increasing P-T sequence of index minerals in metapelites",
    contentHtml: `
      <div class="mnemonic-banner">
        <div class="phrase">"Can Big Green Sharks Kill Snakes?"</div>
        <div class="mnemonic-ladder">
          <div class="mnemonic-step"><span class="step-letter">C</span><strong>Chlorite Zone:</strong> Low grade (~300°C), greenschist facies</div>
          <div class="mnemonic-step"><span class="step-letter">B</span><strong>Biotite Zone:</strong> Appearance of brown biotite mica (~400°C)</div>
          <div class="mnemonic-step"><span class="step-letter">G</span><strong>Garnet Zone:</strong> Almandine garnet porphyroblasts (~500°C)</div>
          <div class="mnemonic-step"><span class="step-letter">S</span><strong>Staurolite Zone:</strong> Medium grade, amphibolite facies (~550°C)</div>
          <div class="mnemonic-step"><span class="step-letter">K</span><strong>Kyanite Zone:</strong> High pressure & temperature (~600°C)</div>
          <div class="mnemonic-step"><span class="step-letter">S</span><strong>Sillimanite Zone:</strong> Highest grade (~700°C, upper amphibolite to granulite)</div>
        </div>
      </div>
    `,
    deepDive: `
      <h4>Al₂SiO₅ Polymorph Triple Point:</h4>
      <p>Andalusite (low P, contact metamorphism/Buchan facies), Kyanite (high P, Barrovian facies), Sillimanite (high T). The triple point sits at approximately <strong>P ≈ 3.8 kbar and T ≈ 500°C</strong> (Holdaway model).</p>
    `,
    eli5: "Remember 'Can Big Green Sharks Kill Snakes?' Chlorite, Biotite, Garnet, Staurolite, Kyanite, Sillimanite. As heat and pressure bake the mud rock, minerals rearrange in this exact locked order!"
  },
  {
    id: 20,
    unitId: "unit_7",
    unitName: "Petrology",
    subtopicId: "petro_bowens_series",
    subtopicName: "Bowen's Reaction Series",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Bowen's Discontinuous vs Continuous Series",
    subtitle: "Fractional crystallization and Goldich weathering stability",
    contentHtml: `
      <div class="svg-diagram-wrap">
        <svg viewBox="0 0 300 100">
          <text x="50" y="15" fill="#f43f5e" font-size="8" font-weight="bold">Discontinuous Branch</text>
          <text x="50" y="30" fill="#fff" font-size="7">Olivine → Pyroxene → Amphibole → Biotite</text>
          
          <text x="210" y="15" fill="#38bdf8" font-size="8" font-weight="bold">Continuous Branch</text>
          <text x="210" y="30" fill="#fff" font-size="7">Anorthite (Ca) → Albite (Na)</text>
          
          <line x1="150" y1="40" x2="150" y2="75" stroke="#f59e0b" stroke-width="2"/>
          <text x="150" y="85" fill="#10b981" font-size="8" font-weight="bold" text-anchor="middle">K-Feldspar → Muscovite → Quartz (Eutectic)</text>
        </svg>
      </div>
      <p><strong>Goldich Dissolution / Weathering Series:</strong></p>
      <p>Exactly the inverse of Bowen's series! Minerals that crystallize first at highest temperatures (Olivine, Ca-Plag) are least stable at Earth surface and weather fastest!</p>
    `,
    quiz: {
      question: "According to Goldich's Weathering Series, which of the following rock-forming silicate minerals is MOST resistant to chemical weathering at Earth's surface conditions?",
      options: [
        "Olivine (Forsterite)",
        "Calcium-rich Plagioclase (Anorthite)",
        "Biotite Mica",
        "Quartz"
      ],
      answer: 3,
      rationale: "Quartz crystallizes last at the lowest temperature in Bowen's series with a fully polymerized 3D tectosilicate framework, making it the most chemically resistant to surface weathering."
    },
    deepDive: `
      <h4>Reaction Textures:</h4>
      <ul>
        <li><strong>Coronas / Reaction Rims:</strong> Occur when early-crystallized olivine reacts with silica-rich residual liquid to form a shell of orthopyroxene around the olivine core.</li>
        <li><strong>Myrmekite:</strong> Worm-like intergrowth of quartz in plagioclase, typically formed during late-stage hydrothermal or metamorphic processes.</li>
      </ul>
    `,
    eli5: "Minerals born in the hottest volcanic hell (like Olivine) get a shock when they meet rain and air, rotting immediately. Quartz was born cool and barely notices the weather!"
  },
  {
    id: 21,
    unitId: "unit_7",
    unitName: "Petrology",
    subtopicId: "petro_phase_rule",
    subtopicName: "Goldschmidt's Mineralogical Phase Rule",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET"],
    title: "Mineralogical Phase Rule & Facies Fields",
    subtitle: "Calculating maximum equilibrium mineral phases: P ≤ C",
    contentHtml: `
      <p>Gibbs Phase Rule states: <code>F = C - P + 2</code> (where F = degrees of freedom, C = components, P = phases).</p>
      <p>In metamorphic systems, rocks equilibrate over arbitrary ranges of Temperature and Pressure (divariant field, where <code>F = 2</code>: T and P can vary independently):</p>
      <div style="background:rgba(0,0,0,0.4); padding:6px; border-radius:4px; font-family:monospace; color:#38bdf8; font-size:0.85rem;">
        F = C - P + 2 ≥ 2  ⟹  P ≤ C
      </div>
      <p><strong>Goldschmidt's Rule:</strong> The maximum number of stable mineral phases (P) in a metamorphic rock in arbitrary P-T equilibrium will not exceed the number of essential chemical components (C)!</p>
    `,
    deepDive: `
      <h4>ACF and AKF Triangular Projections:</h4>
      <ul>
        <li><strong>ACF Diagram (Eskola):</strong> Designed for metabasites and calcareous pelites.
          <br>• A = [Al₂O₃ + Fe₂O₃] - [Na₂O + K₂O]
          <br>• C = [CaO] - 3.3[P₂O₅]
          <br>• F = [FeO + MgO + MnO]
        </li>
        <li><strong>AKF Diagram:</strong> Designed for pelitic rocks rich in potassium (Al, K, Fe-Mg).</li>
      </ul>
    `,
    eli5: "If your rock has 4 main chemical building blocks, you can never have more than 4 stable mineral crystals living in harmony over a wide temperature range!"
  },

  // --- UNIT 8: ECONOMIC GEOLOGY (3 Cards) ---
  {
    id: 22,
    unitId: "unit_8",
    unitName: "Economic Geology",
    subtopicId: "econ_supergene",
    subtopicName: "Supergene Sulfide Enrichment",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET", "UPSC"],
    title: "Supergene Sulfide Enrichment Profile",
    subtitle: "Zonation from surface Gossan down to Primary Hypogene Protore",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.8rem;">
        <li><strong>1. Gossan ('Iron Hat'):</strong> Surface cap of cellular limonite, goethite, and hematite left behind after pyrite/chalcopyrite oxidize and acidic solutions leach copper.</li>
        <li><strong>2. Leached Zone:</strong> Bleached, barren rock stripped of valuable copper sulfides.</li>
        <li><strong>3. Water Table Boundary:</strong> Chemical transition from oxidizing to reducing conditions.</li>
        <li><strong>4. Supergene Enriched Zone:</strong> High-grade zone just below water table. Copper precipitates as rich secondary sulfides: <strong>Chalcocite (Cu₂S)</strong> and <strong>Covellite (CuS)</strong>!</li>
        <li><strong>5. Primary Hypogene Protore:</strong> Original low-grade mineralization (chalcopyrite + pyrite).</li>
      </ul>
    `,
    deepDive: `
      <h4>Chemical Precipitation Reaction:</h4>
      <div style="background:rgba(0,0,0,0.4); padding:6px; border-radius:4px; font-family:monospace; color:#10b981; font-size:0.75rem;">
        5FeS₂ (pyrite) + 14Cu²⁺ + 14SO₄²⁻ + 12H₂O → 7Cu₂S (chalcocite) + 5Fe²⁺ + 24H⁺ + 17SO₄²⁻
      </div>
      <p>Descending acidic copper-bearing solutions hit reducing groundwater where copper replaces iron in pyrite, boosting ore grade from 0.5% to > 3-5% Cu!</p>
    `,
    eli5: "Rainwater washes copper out of the rusted surface iron cap (gossan), drags it down underground, and dumps it right at the water table creating a jackpot pocket of pure chalcocite!"
  },
  {
    id: 23,
    unitId: "unit_8",
    unitName: "Economic Geology",
    subtopicId: "econ_indian_deposits",
    subtopicName: "Major Indian Ore Deposits",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET", "UPSC"],
    title: "Sukinda Chromite & Kolar Gold Genesis",
    subtitle: "Strategic mineral reserves of the Indian subcontinent",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Sukinda Valley (Odisha):</strong> Hosts > 90% of India's chromite. Stratiform magmatic deposits in Mesoarchaean ultramafic dunite-peridotite complexes.</li>
        <li><strong>Malanjkhand (Madhya Pradesh):</strong> India's largest single copper deposit; calc-alkaline porphyry-style copper-molybdenum mineralization in Paleoproterozoic granitoids.</li>
        <li><strong>Zawar (Rajasthan):</strong> Major stratabound Pb-Zn deposits (galena & sphalerite) in Aravalli dolomites.</li>
      </ul>
    `,
    quiz: {
      question: "The Sukinda chromite deposit in Jajpur district, Odisha is associated with which type of host rock assemblage?",
      options: [
        "Carbonatite-alkaline ring complex",
        "Serpentinized ultramafic rocks (dunite-peridotite) of Archaean greenstone belts",
        "Hydrothermal quartz veins in high-grade pelitic granulites",
        "Pegmatite bodies intruded into Vindhyan sandstones"
      ],
      answer: 1,
      rationale: "Sukinda chromite occurs as stratiform seams within extensively serpentinized dunite, peridotite, and orthopyroxenite belonging to the Iron Ore Supergroup."
    },
    deepDive: `
      <h4>Key Indian Deposit Host Rocks:</h4>
      <ul>
        <li><strong>Khetri Copper Belt (Rajasthan):</strong> Delhi Supergroup schists and quartzites.</li>
        <li><strong>Bailadila & Noamundi Iron:</strong> Banded Iron Formations (BIF) in the Singhbhum and Bastar cratons.</li>
        <li><strong>Panna Diamond:</strong> Majhgawan lamproite pipe (~1.1 Ga) intruding the Kaimur group.</li>
      </ul>
    `,
    eli5: "Odisha has almost all of India's chromite because ancient deep mantle magma chambers cooled slowly, letting heavy black chromite crystals sink to the bottom like sand in tea!"
  },
  {
    id: 24,
    unitId: "unit_8",
    unitName: "Economic Geology",
    subtopicId: "econ_ore_processes",
    subtopicName: "Skarn Deposits & Metasomatism",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC"],
    title: "Skarn Mineral Paragenesis",
    subtitle: "Exoskarn vs Endoskarn in carbonate-pluton contacts",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Endoskarn:</strong> Metasomatism occurring inside the <em>igneous intrusion</em> itself (pyroxene, plagioclase alterations).</li>
        <li><strong>Exoskarn:</strong> Metasomatism occurring in the surrounding <em>country rock</em> (limestone or dolomite).</li>
        <li><strong>Prograde Stage (High T > 500°C):</strong> Anhydrous calc-silicates form: Grossular-Andradite garnet, Diopside-Hedenbergite pyroxene, Wollastonite.</li>
        <li><strong>Retrograde Stage (Cooling < 400°C):</strong> Hydrous minerals + ore sulfides precipitate: Epidote, Actinolite, Chalcopyrite, Magnetite, Scheelite.</li>
      </ul>
    `,
    deepDive: `
      <h4>Economic Commodities in Skarns:</h4>
      <p>Tungsten (Scheelite <code>CaWO₄</code>), Tin (Cassiterite), Copper, and Iron (Magnetite). Famous example: Sangdong tungsten skarn in Korea.</p>
    `,
    eli5: "When boiling granite magma hits cold limestone, they exchange chemicals like crazy neighbors over a fence, baking garnets and dropping valuable tungsten scheelite crystals!"
  },

  // --- UNIT 9: APPLIED GEOLOGY (3 Cards) ---
  {
    id: 25,
    unitId: "unit_9",
    unitName: "Applied Geology",
    subtopicId: "applied_groundwater",
    subtopicName: "Darcy's Law & Aquifer Flow",
    type: "quiz",
    examTags: ["GATE", "UPSC"],
    title: "Darcy's Law: Discharge & Specific Yield",
    subtitle: "Groundwater velocity, hydraulic conductivity, and hydraulic head",
    contentHtml: `
      <p>Darcy's 1D Groundwater Flow Equation:</p>
      <div style="background:rgba(0,0,0,0.4); padding:6px; border-radius:4px; font-family:monospace; color:#38bdf8; font-size:0.85rem;">
        Q = -K × A × (dh / dl) = -K × A × i
      </div>
      <ul style="margin-left:1.1rem; font-size:0.8rem; margin-top:4px;">
        <li><code>Q</code> = Volumetric discharge (m³/s).</li>
        <li><code>K</code> = Hydraulic conductivity (m/s).</li>
        <li><code>A</code> = Cross-sectional aquifer area (m²).</li>
        <li><code>i = dh/dl</code> = Hydraulic gradient (dimensionless).</li>
        <li><strong>Specific Discharge (Darcy Velocity):</strong> <code>v = Q / A = -K × i</code>.</li>
        <li><strong>Average Seepage Velocity:</strong> <code>v<sub>s</sub> = v / n<sub>e</sub></code> (where <code>n<sub>e</sub></code> = effective porosity).</li>
      </ul>
    `,
    quiz: {
      question: "An unconfined aquifer has hydraulic conductivity K = 20 m/day and hydraulic gradient i = 0.005. If effective porosity is 20% (0.20), what is the actual pore-water seepage velocity (vs)?",
      options: [
        "0.10 m/day",
        "0.50 m/day",
        "0.02 m/day",
        "2.00 m/day"
      ],
      answer: 1,
      rationale: "Darcy velocity v = K × i = 20 × 0.005 = 0.10 m/day. Actual seepage velocity vs = v / effective porosity = 0.10 / 0.20 = 0.50 m/day."
    },
    deepDive: `
      <h4>Transmissivity vs Storativity:</h4>
      <ul>
        <li><strong>Transmissivity (T):</strong> <code>T = K × b</code> (where b = aquifer thickness). Units = m²/day.</li>
        <li><strong>Storativity (S):</strong> Volume of water an aquifer releases from storage per unit surface area per unit decline in head. Confined aquifers: <code>S = 10⁻⁵ to 10⁻³</code>; Unconfined aquifers: <code>S ≈ Specific Yield (0.1 to 0.3)</code>.</li>
      </ul>
    `,
    eli5: "Darcy's law says water moves faster if the slope is steep and the rock has big open pores. But water has to snake around the grains, so its actual speed inside the cracks is much faster than the average speed across the whole rock!"
  },
  {
    id: 26,
    unitId: "unit_9",
    unitName: "Applied Geology",
    subtopicId: "applied_engineering",
    subtopicName: "Dam & Tunnel Geological Hazards",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC"],
    title: "Dam Abutments & Bedding Dip Orientations",
    subtitle: "Favorable vs catastrophic geological structures for civil dams",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Beds Dipping UPSTREAM (Most Favorable):</strong> Water pressure pushes beds tighter together into the foundation, minimizing sliding risk and leakage!</li>
        <li><strong>Beds Dipping DOWNSTREAM (Extremely Dangerous):</strong> Reservoir hydrostatic pressure pushes along the dip planes; high hazard of daylighted daylight shear failure!</li>
        <li><strong>Dam across Fold Axis:</strong>
          <br>• Synclinal core: Favorable for water containment, but center load can cause fractures.
          <br>• Anticlinal crest: Most hazardous! Crest tensile jointing promotes severe reservoir leakage under the dam foundation.
        </li>
      </ul>
    `,
    deepDive: `
      <h4>Tunneling Hazards:</h4>
      <ul>
        <li><strong>Rock Bursting:</strong> Sudden, violent explosive spalling of rock walls in deep tunnels subjected to high in-situ anisotropic lithostatic stress.</li>
        <li><strong>Overbreak:</strong> Excess rock excavation beyond the planned perimeter profile, typically caused by unfavorable intersecting joint sets.</li>
      </ul>
    `,
    eli5: "Always build dams where rock layers tilt backwards into the lake (upstream). That way, when the reservoir fills up, the heavy water pins the rock layers down instead of surfing them down the valley!"
  },
  {
    id: 27,
    unitId: "unit_9",
    unitName: "Applied Geology",
    subtopicId: "applied_remote_sensing",
    subtopicName: "Remote Sensing (EM Spectrum & Bands)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Remote Sensing: Landsat False Color Composite (FCC)",
    subtitle: "Reflectance peaks of healthy vegetation, clay minerals, and water",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Standard Standard FCC (Near-Infrared, Red, Green):</strong> Healthy vegetation appears <strong>Vibrant Red</strong> due to extreme NIR leaf mesophyll scattering!</li>
        <li><strong>Clear Deep Water:</strong> Appears <strong>Dark Blue to Black</strong> because water strongly absorbs all infrared radiation.</li>
        <li><strong>Hydrothermal Clay Alteration (SWIR Band):</strong> Clay minerals (Al-OH bonds like illite, kaolinite) show a deep diagnostic absorption feature at <strong>2.20 µm</strong> in Short-Wave Infrared!</li>
      </ul>
    `,
    quiz: {
      question: "In standard false-color satellite imagery (NIR assigned to Red, Red to Green, Green to Blue), why does lush healthy green vegetation appear intensely RED?",
      options: [
        "Chlorophyll absorbs all red light and strongly emits thermal infrared heat",
        "Plant leaf spongy mesophyll cells intensely reflect Near-Infrared (NIR) energy",
        "Atmospheric Rayleigh scattering preferentially reflects red wavelengths over plants",
        "Vegetation has high reflectance in the thermal infrared 8-14 µm window"
      ],
      answer: 1,
      rationale: "Plant leaves strongly reflect NIR energy due to multiple refraction within the spongy mesophyll layer. In a standard FCC, the high NIR signal is displayed via the red color gun, making forests appear bright red."
    },
    deepDive: `
      <h4>Atmospheric Windows for Geology:</h4>
      <ul>
        <li>Visible & NIR: 0.4 to 1.1 µm.</li>
        <li>SWIR (Altered minerals): 1.55 - 1.75 µm and 2.08 - 2.35 µm.</li>
        <li>Thermal IR (Silicate quartz mapping via Reststrahlen effect): 8.0 - 14.0 µm.</li>
        <li>Microwave (Cloud penetration & radar interferometry InSAR): 1 mm to 1 m.</li>
      </ul>
    `,
    eli5: "Leaves look green to our human eyes, but under infrared light they shine like mirrors! In satellite photos where infrared is painted red, healthy forests look like glowing crimson fields!"
  }
];
