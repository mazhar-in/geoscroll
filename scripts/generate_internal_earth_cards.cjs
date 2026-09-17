const fs = require('fs');
const path = require('path');

const cards = [
  // Card 201
  {
    id: 201,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET"],
    title: "PREM Model: 1D Earth Architecture",
    subtitle: "Preliminary Reference Earth Model (Dziewonski & Anderson, 1981)",
    contentHtml: `
      <p>The <strong>Preliminary Reference Earth Model (PREM)</strong> is the standard 1D radially symmetric Earth model based on free oscillations (normal modes) and body wave travel times.</p>
      <table style="width:100%; font-size:0.82rem; margin:8px 0; border-collapse:collapse;">
        <tr style="border-bottom:1px solid rgba(255,255,255,0.15); color:#38bdf8;">
          <th>Layer</th><th>Depth (km)</th><th>Vp (km/s)</th><th>Density (g/cm³)</th>
        </tr>
        <tr><td>Upper Crust</td><td>0 – 15</td><td>5.8</td><td>2.60</td></tr>
        <tr><td>Lower Crust</td><td>15 – 35</td><td>6.8</td><td>2.90</td></tr>
        <tr><td>Upper Mantle</td><td>35 – 410</td><td>8.1 → 8.6</td><td>3.38 → 3.55</td></tr>
        <tr><td>Transition Zone</td><td>410 – 660</td><td>9.0 → 10.2</td><td>3.72 → 3.99</td></tr>
        <tr><td>Lower Mantle</td><td>660 – 2891</td><td>10.7 → 13.7</td><td>4.38 → 5.56</td></tr>
        <tr><td>Outer Core</td><td>2891 – 5150</td><td>8.06 → 10.3</td><td>9.90 → 12.16</td></tr>
        <tr><td>Inner Core</td><td>5150 – 6371</td><td>11.03 → 11.26</td><td>12.76 → 13.09</td></tr>
      </table>
      <p style="font-size:0.8rem; color:#cbd5e1;">PREM defines isotropic layers with transverse isotropy in the top 220 km (polarization anisotropy Vsh > Vsv).</p>
    `,
    deepDive: `
      <h4>PREM Theoretical Foundations:</h4>
      <ul>
        <li><strong>Observation Inversion:</strong> Combines ~1000 normal mode frequencies, hundreds of body wave travel time curves, and surface wave dispersion curves.</li>
        <li><strong>Adams-Williamson Integration:</strong> In adiabatic self-compressed regions, density is extrapolated using seismic parameter Φ = Vp² - (4/3)Vs².</li>
        <li><strong>Standard Deviations:</strong> Discontinuities in PREM are placed at 15, 24.4, 220, 400, 600, 670, 2891, and 5149.5 km.</li>
      </ul>
    `,
    eli5: "PREM is the official doctor's ultrasound scan of Planet Earth. It maps out each layer's exact thickness, weight, and wave speed from the dirt under our feet to the center 6371 km below."
  },

  // Card 202
  {
    id: 202,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Conrad Discontinuity & Crustal Stratification",
    subtitle: "Upper felsic crust vs Lower mafic granulitic crust boundary",
    contentHtml: `
      <p>The <strong>Conrad Discontinuity</strong> marks the boundary between the Upper Continental Crust (sialic) and the Lower Continental Crust (simatic / intermediate-mafic):</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Depth:</strong> Variable, typically between <strong>10 to 20 km</strong>.</li>
        <li><strong>Velocity Jump:</strong> Vp increases from <strong>~5.6–6.2 km/s</strong> (granitic/gneissic) to <strong>~6.5–7.0 km/s</strong> (amphibolite/granulite facies).</li>
        <li><strong>Nature:</strong> Second-order, discontinuous, absent beneath oceanic basins and active orogens.</li>
      </ul>
    `,
    quiz: {
      question: "Which of the following statements regarding the Conrad Discontinuity is FALSE?",
      options: [
        "It separates the upper continental crust from the lower continental crust",
        "It is ubiquitously present worldwide across both oceanic and continental crust",
        "P-wave velocity jumps across it from ~6.0 km/s to approximately 6.6–6.8 km/s",
        "It represents a petrological transition towards granulite-to-amphibolite facies rocks"
      ],
      answer: 1,
      rationale: "The Conrad discontinuity is strictly a continental phenomenon and is NOT present in oceanic crust, which is uniformly mafic (basalts, gabbros) without an upper felsic granitic layer."
    },
    deepDive: `
      <h4>Crustal Petrochemistry:</h4>
      <ul>
        <li><strong>Upper Crust:</strong> Average composition is granodioritic (SiO2 ≈ 66 wt%). Dominated by quartz, plagioclase, K-feldspar.</li>
        <li><strong>Lower Crust:</strong> Depleted in heat-producing elements (U, Th, K). Dominated by pyroxenes and calcic plagioclase (SiO2 ≈ 53–58 wt%).</li>
        <li><strong>Why Conrad is not global:</strong> Many continental seismic lines show continuous gradient rather than a sharp acoustic reflector.</li>
      </ul>
    `,
    eli5: "Imagine Earth's crust as a two-layer cake: the top layer is light sponge cake (granite) and the bottom is dense fruit cake (gabbro). The icing between them is the Conrad boundary—but oceans don't have the sponge layer at all!"
  },

  // Card 203
  {
    id: 203,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC Geology"],
    title: "Mohorovičić Discontinuity (Moho)",
    subtitle: "The profound Crust-Mantle boundary at Vp = 8.1 km/s",
    contentHtml: `
      <p>Discovered in 1909 by Andrija Mohorovičić after the Pokuplje earthquake, the <strong>Moho</strong> separates crustal rocks from ultramafic peridotite mantle.</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Seismic Velocity Shift:</strong> P-wave velocity abruptly jumps from <strong>~6.8–7.2 km/s</strong> to <strong>~8.0–8.2 km/s</strong>.</li>
        <li><strong>Density Shift:</strong> Jumps from <strong>~2.9 g/cm³</strong> (lower crust) to <strong>~3.3 g/cm³</strong> (peridotite).</li>
        <li><strong>Oceanic Moho:</strong> Uniform at <strong>5 – 8 km</strong> below sea floor (Ophiolite sequence: gabbro → layered ultramafics → residual peridotite).</li>
        <li><strong>Continental Moho:</strong> Average <strong>30 – 40 km</strong>, reaching up to <strong>70 – 75 km</strong> beneath the Tibetan Plateau and the Andes.</li>
      </ul>
    `,
    deepDive: `
      <h4>Petrologic vs Seismic Moho:</h4>
      <ul>
        <li><strong>Petrologic Moho:</strong> Crustal mafic rocks (gabbro/amphibolite) yield to peridotite (harzburgite/lherzolite).</li>
        <li><strong>Refraction Phases:</strong> Pg (direct crustal wave), Pn (refracted wave propagating through uppermost mantle along the Moho), and PmP (reflected from the Moho).</li>
        <li><strong>Crossover Distance:</strong> Beyond xc ≈ 2h √[(V₂ + V₁)/(V₂ - V₁)], Pn overtakes Pg as the first arriving wave.</li>
      </ul>
    `,
    eli5: "The Moho is the starting line of the real Earth interior. Crust is like the fragile eggshell; once you pierce 35 km down, you hit the hard peridotite egg white where sound waves speed up to 8 km per second!"
  },

  // Card 204
  {
    id: 204,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Pn Wave Crossover Distance & Moho Depth",
    subtitle: "Seismic refraction mathematics for crustal thickness",
    contentHtml: `
      <p>In seismic refraction surveying, the head wave <strong>Pn</strong> travels along the Moho at velocity $V_2$ (~8.1 km/s) while the direct wave <strong>Pg</strong> travels through crust at $V_1$ (~6.0 km/s).</p>
      <div style="background:rgba(0,0,0,0.4); padding:8px 12px; border-radius:6px; font-family:monospace; margin:8px 0; color:#38bdf8;">
        T_direct = x / V₁<br>
        T_refracted = (x / V₂) + 2h · √(V₂² - V₁²) / (V₁ · V₂)
      </div>
      <p>The crossover distance $x_c$ where Pn overtakes Pg is given by:</p>
      <div style="background:rgba(0,0,0,0.4); padding:6px 12px; border-radius:6px; font-family:monospace; margin:8px 0; color:#fbbf24;">
        x_c = 2h · √((V₂ + V₁) / (V₂ - V₁))
      </div>
    `,
    quiz: {
      question: "If crustal P-wave velocity V₁ = 6.0 km/s, mantle velocity V₂ = 8.0 km/s, and the crossover distance xc = 140 km, what is the depth to the Moho (h)?",
      options: [
        "15 km",
        "26.5 km",
        "35 km",
        "50 km"
      ],
      answer: 1,
      rationale: "xc = 2h · √((8 + 6)/(8 - 6)) = 2h · √(14/2) = 2h · √7 ≈ 2h · 2.6457 = 5.2915 h. Therefore h = 140 / 5.2915 ≈ 26.46 km (approx 26.5 km)."
    },
    deepDive: `
      <h4>Critical Distance vs Crossover Distance:</h4>
      <ul>
        <li><strong>Critical Distance (x_crit):</strong> The minimum offset where head wave Pn is first generated: x_crit = 2h · tan(θ_c) = 2h · (V₁ / √(V₂² - V₁²)).</li>
        <li><strong>Intercept Time (t_i):</strong> Extrapolating the linear Pn arrival line back to x = 0 gives t_i = 2h · cos(θ_c) / V₁.</li>
      </ul>
    `,
    eli5: "Direct waves are like driving through city traffic (slower crust). Refracted waves take an extra detour down to the highway (faster mantle) and zoom ahead. At the crossover distance, the highway driver wins the race!"
  },

  // Card 205
  {
    id: 205,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC Geology"],
    title: "Low Velocity Zone (LVZ) & The Asthenosphere",
    subtitle: "Gutenberg's ~100–220 km partial melt decoupling layer",
    contentHtml: `
      <p>Beneath the rigid lithosphere lies the <strong>Low-Velocity Zone (LVZ)</strong>, extending from <strong>~80–100 km to ~220 km</strong> depth.</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Seismic Signature:</strong> Both $V_p$ and especially $V_s$ drop by <strong>3% to 6%</strong>; seismic attenuation ($1/Q$) peaks drastically.</li>
        <li><strong>Physical Cause:</strong> The Earth's geotherm approaches the dry solidus of peridotite ($T / T_m \approx 0.95–1.0$). Presence of <strong>~0.1 to 1% partial melt</strong> or trace hydrous volatiles ($H_2O, CO_2$).</li>
        <li><strong>Tectonic Significance:</strong> Dramatic drop in viscosity ($\eta \approx 10^{18}–10^{19}\text{ Pa}\cdot\text{s}$) allows lithospheric tectonic plates to slide over the mantle.</li>
      </ul>
    `,
    deepDive: `
      <h4>Lehmann Discontinuity at 220 km:</h4>
      <ul>
        <li>The base of the LVZ at ~220 km is often marked by an increase in seismic velocity known as the <strong>continental Lehmann discontinuity</strong> (distinct from the 5150 km inner core boundary).</li>
        <li><strong>Anisotropy Shift:</strong> Represents a change in lattice preferred orientation (LPO) of olivine a-axis from horizontal flow to isotropic or radial flow.</li>
      </ul>
    `,
    eli5: "The LVZ is the lubricating grease on Earth's planetary axel. Because rocks here are heated right to their softening point, they become mushy, allowing giant continents to float and drift effortlessly on top."
  },

  // Card 206
  {
    id: 206,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "410 km Discontinuity: Olivine α to β Transition",
    subtitle: "Alpha-olivine to Wadsleyite phase change thermodynamics",
    contentHtml: `
      <p>The top of the <strong>Mantle Transition Zone</strong> occurs at <strong>410 km</strong> depth (~13.8 GPa pressure, ~1400 °C):</p>
      <div style="background:rgba(0,0,0,0.4); padding:8px 12px; border-radius:6px; font-family:monospace; margin:8px 0; color:#38bdf8;">
        (Mg,Fe)₂SiO₄ [α-olivine] ⟶ β-(Mg,Fe)₂SiO₄ [Wadsleyite]
      </div>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Crystal Structure:</strong> Orthorhombic olivine reorganizes into modified spinel structure (Wadsleyite), increasing density by <strong>~6–8%</strong>.</li>
        <li><strong>Seismic Signature:</strong> Sharp upward jump in $V_p$ (+5%) and $V_s$ (+6%).</li>
        <li><strong>Clapeyron Slope:</strong> Positively sloped ($\frac{dP}{dT} \approx +2.5\text{ to }+3.0\text{ MPa/K}$), making it an <strong>exothermic</strong> reaction.</li>
      </ul>
    `,
    quiz: {
      question: "Because the 410 km discontinuity has a POSITIVE Clapeyron slope (dP/dT > 0), what happens to its depth inside a cold subducting lithospheric slab?",
      options: [
        "The discontinuity is depressed to greater depths (> 410 km)",
        "The discontinuity is elevated to shallower depths (< 410 km)",
        "The discontinuity completely disappears due to eclogitization",
        "The depth remains exactly 410 km because pressure is depth-dependent only"
      ],
      answer: 1,
      rationale: "For dP/dT > 0, colder temperatures mean the phase transition occurs at LOWER pressures (shallower depths). Hence, inside a cold subducting slab, the 410 km boundary is elevated to ~370–390 km, pulling the slab downward with positive buoyancy force!"
    },
    deepDive: `
      <h4>Wadsleyite Hydrous Capacity:</h4>
      <ul>
        <li>Unlike α-olivine, Wadsleyite contains non-silicate oxygen atoms ($O_2$) that readily bond with hydrogen. It can hold up to <strong>3 wt% $H_2O$</strong> in its crystal lattice!</li>
        <li>This makes the 410–520 km region a vast hidden water reservoir in Earth's deep interior.</li>
      </ul>
    `,
    eli5: "When you squeeze olivine to 410 km depth, its atoms snap together tighter like packing a suitcase, forming Wadsleyite. In cold sinking slabs, this packing happens earlier, shifting the line upward!"
  },

  // Card 207
  {
    id: 207,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC Geology"],
    title: "Mantle Transition Zone (410 to 660 km)",
    subtitle: "Water reservoir, mineral physics, and slab stagnation",
    contentHtml: `
      <p>The <strong>Transition Zone (TZ)</strong> bridges the Upper and Lower Mantle between 410 km and 660 km depth.</p>
      <table style="width:100%; font-size:0.82rem; margin:8px 0; border-collapse:collapse;">
        <tr style="border-bottom:1px solid rgba(255,255,255,0.15); color:#38bdf8;">
          <th>Depth</th><th>Phase Transition</th><th>Mineral Reaction</th><th>Clapeyron Slope</th>
        </tr>
        <tr>
          <td><strong>410 km</strong></td>
          <td>α ⟶ β</td>
          <td>Olivine ⟶ Wadsleyite</td>
          <td><span style="color:#10b981;">+2.9 MPa/K</span> (Exothermic)</td>
        </tr>
        <tr>
          <td><strong>520 km</strong></td>
          <td>β ⟶ γ</td>
          <td>Wadsleyite ⟶ Ringwoodite</td>
          <td><span style="color:#10b981;">+4.0 MPa/K</span> (Weak)</td>
        </tr>
        <tr>
          <td><strong>660 km</strong></td>
          <td>γ ⟶ Br + Fp</td>
          <td>Ringwoodite ⟶ Bridgmanite + Ferropericlase</td>
          <td><span style="color:#f43f5e;">-2.0 MPa/K</span> (Endothermic)</td>
        </tr>
      </table>
      <p style="font-size:0.82rem; color:#cbd5e1;">Majorite garnet also transforms progressively into silicate perovskite across the TZ.</p>
    `,
    deepDive: `
      <h4>Ringwoodite Diamond Inclusion Discovery (Pearson et al., 2014):</h4>
      <ul>
        <li>A terrestrial diamond from Juina, Brazil, was found containing a ringwoodite inclusion with <strong>1.4 wt% water</strong> as hydroxyl groups (OH⁻).</li>
        <li>This confirmed experimentally and observationally that the Transition Zone contains as much water as all surface oceans combined!</li>
      </ul>
    `,
    eli5: "The Transition Zone is Earth's planetary sponge. Minerals like Wadsleyite and Ringwoodite can trap ocean-scale amounts of water within their crystal structures 500 km down without a drop of liquid water being present!"
  },

  // Card 208
  {
    id: 208,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "520 km Discontinuity & Ringwoodite Genesis",
    subtitle: "The beta-to-gamma spinel transition and Ca-perovskite exsolution",
    contentHtml: `
      <p>The <strong>520 km discontinuity</strong> (~18 GPa) is a secondary transition zone boundary involving two key transformations:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Beta to Gamma Spinel:</strong> Wadsleyite ($\beta$) transforms into <strong>Ringwoodite</strong> ($\gamma-\text{(Mg,Fe)}_2\text{SiO}_4$), adopting an isotropic cubic spinel structure.</li>
        <li><strong>Ca-Perovskite Exsolution:</strong> Calcium-rich garnet exsolves into separate cubic <strong>$\text{CaSiO}_3$ perovskite</strong> phase.</li>
        <li><strong>Velocity Impact:</strong> Modest velocity step (~1.5–2% jump in $V_s$ and $V_p$).</li>
      </ul>
    `,
    quiz: {
      question: "Which crystallographic structure does the high-pressure mantle mineral RINGWOODITE possess?",
      options: [
        "Orthorhombic modified spinel structure",
        "Isometric (cubic) spinel structure",
        "Hexagonal close-packed ilmenite structure",
        "Tetragonal rutile-type structure"
      ],
      answer: 1,
      rationale: "Ringwoodite (γ-phase) has a true isometric (cubic) spinel structure (Fd3m), whereas Wadsleyite (β-phase) is orthorhombic (Imma) modified spinel, and α-olivine is orthorhombic (Pbnm)."
    },
    deepDive: `
      <h4>Splitting of the 520 km Discontinuity:</h4>
      <ul>
        <li>In hydrous or iron-rich regions, the 520 km boundary splits into two distinct reflectors: one for the Wadsleyite–Ringwoodite transition, and a deeper one for $\text{CaSiO}_3$ perovskite precipitation.</li>
        <li>High-frequency SS precursors ($S520S$) frequently document this splitting.</li>
      </ul>
    `,
    eli5: "Wadsleyite at 520 km twists into a perfect cubic crystal called Ringwoodite. It is named after Ted Ringwood, the Australian geochemist who revolutionized our understanding of Earth's mantle."
  },

  // Card 209
  {
    id: 209,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC Geology"],
    title: "660 km Discontinuity: Post-Spinel Boundary",
    subtitle: "Ringwoodite breakdown into Bridgmanite + Ferropericlase",
    contentHtml: `
      <p>The <strong>660 km discontinuity</strong> marks the definitive thermodynamic and compositional boundary between the Upper/Transition Mantle and the <strong>Lower Mantle</strong> (~23.8 GPa, ~1600 °C):</p>
      <div style="background:rgba(0,0,0,0.4); padding:8px 12px; border-radius:6px; font-family:monospace; margin:8px 0; color:#38bdf8;">
        γ-(Mg,Fe)₂SiO₄ [Ringwoodite] ⟶ (Mg,Fe)SiO₃ [Bridgmanite] + (Mg,Fe)O [Ferropericlase]
      </div>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Density Step:</strong> Dramatic increase of <strong>~9–11%</strong> (density rises from ~3.99 to ~4.38 g/cm³).</li>
        <li><strong>Seismic Velocity:</strong> Sharp upward jump in $V_p$ from ~10.2 to ~10.7 km/s; $V_s$ jumps from ~5.5 to ~5.9 km/s.</li>
        <li><strong>Endothermic Nature:</strong> Negative Clapeyron slope ($\frac{dP}{dT} \approx -2.0\text{ to }-2.8\text{ MPa/K}$).</li>
      </ul>
    `,
    deepDive: `
      <h4>Bridgmanite Dominance:</h4>
      <ul>
        <li>Bridgmanite constitutes <strong>~75–80% by volume</strong> of the lower mantle, making it the single most abundant mineral in the entire Earth!</li>
        <li>Named in 2014 after Nobel laureate Percy Bridgman, pioneer of high-pressure physics.</li>
        <li>Ferropericlase (magnesiowüstite) makes up ~17–20%, and CaSiO3 perovskite ~5%.</li>
      </ul>
    `,
    eli5: "At 660 km, the pressure is so immense that Ringwoodite can no longer survive intact. It shatters into two denser minerals: Bridgmanite and Ferropericlase, building the bedrock of the deep lower mantle."
  },

  // Card 210
  {
    id: 210,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Clapeyron Slope & Mantle Convection Barrier",
    subtitle: "Why the 660 km discontinuity resists subducting slab penetration",
    contentHtml: `
      <p>The Clapeyron equation determines how phase transition boundaries shift with temperature:</p>
      <div style="background:rgba(0,0,0,0.4); padding:6px 12px; border-radius:6px; font-family:monospace; margin:6px 0; color:#fbbf24;">
        dP / dT = ΔS / ΔV = ΔH / (T · ΔV)
      </div>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>410 km:</strong> Positive slope ($\approx +2.9\text{ MPa/K}$). Colder slabs shift transition upward $\implies$ denser phase formed earlier $\implies$ pulls slab down (promotes convection).</li>
        <li><strong>660 km:</strong> Negative slope ($\approx -2.5\text{ MPa/K}$). Colder slabs shift transition downward $\implies$ buoyant lighter phase retained deeper $\implies$ resists slab descent (buoyant resistance).</li>
      </ul>
    `,
    quiz: {
      question: "Because the post-spinel phase transition at 660 km has a NEGATIVE Clapeyron slope (dP/dT < 0), what is its mechanical effect on cold descending lithospheric slabs?",
      options: [
        "It acts as a dynamic brake, promoting slab stagnation and deflection into horizontal slabs",
        "It accelerates the slab exponentially into the outer core",
        "It elevates the boundary to 600 km, creating runaway thermal convection",
        "It produces instantaneous melting of the slab into komatiitic magma"
      ],
      answer: 0,
      rationale: "For dP/dT < 0, colder temperatures require HIGHER pressures to transform. The lower-density Ringwoodite persists to greater depths (~700 km) inside the cold slab, exerting upward buoyancy that resists penetration and causes slabs to flatten or stagnate."
    },
    deepDive: `
      <h4>Whole-Mantle vs Two-Layer Convection:</h4>
      <ul>
        <li>The negative Clapeyron slope at 660 km is a major impediment. However, seismic tomography shows that sufficiently massive slabs eventually avalanche into the lower mantle.</li>
        <li>Earth operates in a transitional regime of <strong>leaky two-layer convection</strong> or whole-mantle intermittent flushing.</li>
      </ul>
    `,
    eli5: "The 410 km gate acts like a ski slope speeding the cold slab downwards. But the 660 km gate is like a speed bump pushing back up! Many slabs get trapped, pile up flat, and only break through after accumulating immense weight."
  },

  // Card 211
  {
    id: 211,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC Geology"],
    title: "Repetti Discontinuity & Mid-Mantle Boundaries",
    subtitle: "The 800–1000 km seismic velocity gradient transition",
    contentHtml: `
      <p>The <strong>Repetti Discontinuity</strong> is an intermediate seismic boundary recognized at <strong>~800 to 1000 km depth</strong> in the upper parts of the Lower Mantle.</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Nomenclature:</strong> Discovered in 1930 by William C. Repetti, marking a distinct change in the seismic velocity gradient $dV/dz$.</li>
        <li><strong>Viscosity Jump:</strong> Modern geodynamic models show a <strong>1 to 2 order of magnitude viscosity increase</strong> at ~1000 km ($\eta \approx 10^{22}\text{ to }10^{23}\text{ Pa}\cdot\text{s}$).</li>
        <li><strong>Physical Cause:</strong> Dissolution of stishovite, iron spin-state transitions in ferropericlase, and complete homogenization of subducted oceanic crustal fragments.</li>
      </ul>
    `,
    deepDive: `
      <h4>Mnemonic for Earth Discontinuities (CMRGL):</h4>
      <div class="mnemonic-banner">
        <div class="phrase"><strong>C</strong>lever <strong>M</strong>inds <strong>R</strong>ead <strong>G</strong>eology <strong>L</strong>ogically</div>
        <div class="mnemonic-ladder">
          <div class="mnemonic-step"><span class="step-letter">C</span> Conrad (Upper/Lower Crust ~15 km)</div>
          <div class="mnemonic-step"><span class="step-letter">M</span> Mohorovičić (Crust/Mantle ~35 km)</div>
          <div class="mnemonic-step"><span class="step-letter">R</span> Repetti (Upper/Lower Mantle ~900 km)</div>
          <div class="mnemonic-step"><span class="step-letter">G</span> Gutenberg (Mantle/Outer Core ~2891 km)</div>
          <div class="mnemonic-step"><span class="step-letter">L</span> Lehmann (Outer/Inner Core ~5150 km)</div>
        </div>
      </div>
    `,
    eli5: "Repetti is the forgotten boundary between 800 and 1000 km. It is where the mantle stiffens by 100 times, like switching from honey to peanut butter, slowing down deep slab sinking."
  },

  // Card 212
  {
    id: 212,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Iron Spin Crossover in the Lower Mantle",
    subtitle: "High-spin to low-spin transition of Fe²⁺ in ferropericlase",
    contentHtml: `
      <p>Between 1000 km and 2200 km depth (pressure 40–100 GPa), iron ions ($Fe^{2+}$) in $(Mg,Fe)O$ (ferropericlase) undergo an electronic <strong>spin crossover</strong>:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>High-Spin State (HS):</strong> Electrons occupy $t_{2g}$ and $e_g$ orbitals with parallel spins (larger ionic radius).</li>
        <li><strong>Low-Spin State (LS):</strong> Under extreme pressure, $e_g$ electrons pair up into $t_{2g}$ orbitals (smaller ionic radius, higher density).</li>
        <li><strong>Consequences:</strong> Causes a 3–5% density compaction, increases radiative thermal conductivity, and changes electrical conductivity.</li>
      </ul>
    `,
    quiz: {
      question: "What is the primary geodynamic consequence of the iron spin transition (high-spin to low-spin) in lower mantle ferropericlase?",
      options: [
        "It causes complete melting and formation of super-deep magma oceans",
        "It increases radiative thermal conductivity, enhancing heat extraction from the core",
        "It causes seismic shear waves to stop propagating completely",
        "It transforms ferropericlase into pure metallic iron liquid"
      ],
      answer: 1,
      rationale: "The collapse of ionic radius and shift in electronic absorption spectra in low-spin iron makes minerals more transparent in the near-infrared, boosting radiative heat transfer and facilitating core cooling."
    },
    deepDive: `
      <h4>Quantum Effects in Geophysics:</h4>
      <ul>
        <li>Bridgmanite also experiences an iron spin transition in the $B$-site ($Fe^{3+}$), though it is more continuous and spread over a wider pressure interval than in ferropericlase.</li>
        <li>Spin pairing alters partition coefficients: $Fe$ partitions more strongly into ferropericlase at high pressures.</li>
      </ul>
    `,
    eli5: "Under crushing pressure, the electrons inside iron atoms are forced to pair up tightly (low-spin). This shrinks the atoms, turns the rocks denser, and makes them conduct heat much faster like a hot pan!"
  },

  // Card 213
  {
    id: 213,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC Geology"],
    title: "The D'' (D-Double-Prime) Layer",
    subtitle: "Earth's thermal engine and lowermost 200–300 km mantle boundary",
    contentHtml: `
      <p>The <strong>D'' layer</strong> (Bullen, 1949) is the <strong>lowermost 150 to 300 km of the silicate mantle</strong>, sitting directly above the liquid outer core (depth: ~2600–2891 km).</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Thermal Boundary Layer (TBL):</strong> Massive temperature drop of <strong>~1000 to 1500 K</strong> across just 200 km between the boiling core (~4000 K) and mantle (~2600 K).</li>
        <li><strong>Seismic Velocity Discontinuity:</strong> Top of D'' is marked by a <strong>1.5–3% jump in $V_s$ and $V_p$</strong> discovered by Lay and Helmberger (1983).</li>
        <li><strong>Strong Seismic Anisotropy:</strong> Horizontally polarized shear waves travel faster than vertically polarized waves ($V_{SH} > V_{SV}$).</li>
      </ul>
    `,
    deepDive: `
      <h4>Heterogeneity Zoo in D'':</h4>
      <ul>
        <li><strong>ULVZs:</strong> Ultra-Low Velocity Zones (partial melt patches at core contact).</li>
        <li><strong>LLSVPs:</strong> Continent-sized thermochemical piles beneath Africa and the Pacific.</li>
        <li><strong>Slab Graveyards:</strong> Ancient Farallon and Tethyan slabs stacked cold on top of the CMB.</li>
      </ul>
    `,
    eli5: "D'' is Earth's planetary frying pan. The superheated outer core is the stove flame underneath, and the cold mantle is the soup sitting on top. This intense temperature boundary generates deep mantle plumes that erupt as volcanic hotspots!"
  },

  // Card 214
  {
    id: 214,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Post-Perovskite Phase Transition in D''",
    subtitle: "Bridgmanite to CaIrO3-type sheet structure (Murakami et al., 2004)",
    contentHtml: `
      <p>In 2004, Kei Murakami et al. discovered using laser-heated diamond anvil cells that <strong>Bridgmanite</strong> undergoes a phase transition at ~125 GPa and ~2500 K:</p>
      <div style="background:rgba(0,0,0,0.4); padding:8px 12px; border-radius:6px; font-family:monospace; margin:8px 0; color:#38bdf8;">
        (Mg,Fe)SiO₃ [Perovskite] ⟶ (Mg,Fe)SiO₃ [Post-Perovskite (pPv)]
      </div>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Crystal System:</strong> Orthorhombic sheet silicate with $CaIrO_3$ structure ($Cmcm$).</li>
        <li><strong>Properties:</strong> 1.5% density jump, high shear wave anisotropy ($V_{SH} > V_{SV}$).</li>
        <li><strong>Clapeyron Slope:</strong> Steep positive slope ($\approx +7.5\text{ to }+10\text{ MPa/K}$).</li>
      </ul>
    `,
    quiz: {
      question: "Because the post-perovskite phase boundary has a steep POSITIVE Clapeyron slope and the geotherm is very steep across D'', what unusual seismic feature occurs near the CMB?",
      options: [
        "A double-crossing of the phase boundary, where post-perovskite transforms BACK into bridgmanite",
        "Total disappearance of P-waves leaving only S-waves",
        "Immediate freezing of the liquid outer core",
        "Spontaneous radioactive decomposition into iron and helium"
      ],
      answer: 0,
      rationale: "Because the geotherm in the D'' boundary layer rises faster than the phase boundary, cold slabs enter the post-perovskite stability field (first crossing: velocity jump), but right near the fiery CMB they heat up and cross BACK into bridgmanite (second crossing: velocity drop)!"
    },
    deepDive: `
      <h4>Double Crossing Model (Hernlund et al., 2005):</h4>
      <ul>
        <li>Explains why D'' exhibits a positive velocity jump at its top followed by a negative velocity gradient just a few tens of kilometers above the core-mantle boundary.</li>
        <li>Serves as an in-situ planetary thermometer for measuring absolute core-mantle heat flux (~10–15 TW).</li>
      </ul>
    `,
    eli5: "Post-perovskite is a mineral that only lives in the cold parts of the deep mantle frying pan. If you push it even closer to the scorching core, the extreme heat turns it back into normal bridgmanite!"
  },

  // Card 215
  {
    id: 215,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC Geology"],
    title: "Ultra-Low Velocity Zones (ULVZs)",
    subtitle: "Extreme partial melt lenses at the Core-Mantle Boundary",
    contentHtml: `
      <p><strong>Ultra-Low Velocity Zones (ULVZs)</strong> are thin, patchy structures directly on the Core-Mantle Boundary (CMB):</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Dimensions:</strong> Thickness <strong>5 to 40 km</strong>, lateral extent tens to hundreds of kilometers.</li>
        <li><strong>Velocity Reductions:</strong> $V_p$ drops by <strong>10% to 25%</strong>; $V_s$ drops catastrophically by <strong>30% to 50%</strong>!</li>
        <li><strong>Density Contrast:</strong> Density is <strong>10% to 20% higher</strong> than surrounding mantle.</li>
        <li><strong>Origin:</strong> Partial melting of mantle silicates due to core heat, or iron enrichment via chemical reaction with the liquid iron core ($\text{Fe}_\text{core} + \text{silicate} \rightarrow \text{Fe-rich silicate}$).</li>
      </ul>
    `,
    deepDive: `
      <h4>1:3 to 1:2 Velocity Ratio Test:</h4>
      <ul>
        <li>When velocity drop ratio $\delta \ln V_s : \delta \ln V_p \approx 3:1$, it is a diagnostic indicator of <strong>partial melt</strong> rather than purely thermal or solid composition changes.</li>
        <li>ULVZs are frequently clustered around the edges of LLSVPs where mantle plumes (like Hawaii and Iceland) originate.</li>
      </ul>
    `,
    eli5: "ULVZs are puddles of molten rock resting right on the iron floor of the outer core. They are so dense that even though they are melted, they cannot float up—they stay anchored at the bottom of the mantle."
  },

  // Card 216
  {
    id: 216,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "LLSVPs: Tuzo & Jason Superplumes",
    subtitle: "Large Low Shear Velocity Provinces: Earth's basal thermochemical anchors",
    contentHtml: `
      <p>Global seismic tomography reveals two gargantuan continent-sized structures resting on the CMB:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Two Antipodal Provinces:</strong> One beneath <strong>Africa ('Tuzo')</strong> and one beneath the <strong>central Pacific ('Jason')</strong>.</li>
        <li><strong>Volume:</strong> Span thousands of kilometers laterally and rise up to <strong>1000 km into the mantle</strong> (~8% of mantle volume).</li>
        <li><strong>Seismic Signature:</strong> Significant reduction in shear wave velocity ($\delta V_s \approx -2\text{ to }-4\%$) with sharp vertical walls.</li>
        <li><strong>Thermochemical Nature:</strong> Denser than ambient mantle despite being hot, proving chemical enrichment (high Fe/Mg ratio).</li>
      </ul>
    `,
    quiz: {
      question: "What is the currently favored geochemical hypothesis for the origin and multi-billion-year stability of the two LLSVPs?",
      options: [
        "They are bubbles of liquid water trapped during Earth accretion",
        "They are dense primordial cumulates from the basal magma ocean and/or subducted oceanic crust graveyards",
        "They are hollow caverns filled with volcanic gases",
        "They formed within the last 10,000 years due to surface climate warming"
      ],
      answer: 1,
      rationale: "LLSVPs require an intrinsic chemical density excess (1.5–3% denser than normal peridotite) to remain anchored at the CMB for over 2 billion years. They represent basal magma ocean crystallization residues and subducted MORB crust accumulation."
    },
    deepDive: `
      <h4>Plume Generation Zones (PGZs):</h4>
      <ul>
        <li>Over 80% of reconstructed Large Igneous Provinces (LIPs) and kimberlites for the past 300 million years reconstruct directly back to the <strong>margins</strong> of the African and Pacific LLSVPs!</li>
        <li>This links surface supercontinent breakup cycles directly to deep CMB mantle dynamics.</li>
      </ul>
    `,
    eli5: "Tuzo and Jason are two massive buried continents of heavy, iron-rich rock sitting at the bottom of the mantle. Hot volcanic plumes shoot up from their steep cliff edges like smoke from a factory chimney!"
  },

  // Card 217
  {
    id: 217,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET"],
    title: "Gutenberg Discontinuity (CMB at 2891 km)",
    subtitle: "The profound boundary separating silicate mantle from liquid iron core",
    contentHtml: `
      <p>Discovered in 1912 by Beno Gutenberg, the <strong>Core-Mantle Boundary (CMB)</strong> is the greatest density and composition contrast in our planet.</p>
      <table style="width:100%; font-size:0.82rem; margin:8px 0; border-collapse:collapse;">
        <tr style="border-bottom:1px solid rgba(255,255,255,0.15); color:#38bdf8;">
          <th>Parameter</th><th>Lower Mantle (2891 km)</th><th>Outer Core (2891 km)</th><th>Change</th>
        </tr>
        <tr><td><strong>State</strong></td><td>Solid silicate</td><td>Liquid metallic</td><td>Phase change</td></tr>
        <tr><td><strong>Density ($\rho$)</strong></td><td>~5.56 g/cm³</td><td>~9.90 g/cm³</td><td><span style="color:#10b981;">+78% jump</span></td></tr>
        <tr><td><strong>P-wave ($V_p$)</strong></td><td>~13.7 km/s</td><td>~8.06 km/s</td><td><span style="color:#f43f5e;">-41% drop</span></td></tr>
        <tr><td><strong>S-wave ($V_s$)</strong></td><td>~7.26 km/s</td><td>0.00 km/s</td><td><span style="color:#f43f5e;">Drops to ZERO</span></td></tr>
        <tr><td><strong>Bulk Modulus ($K$)</strong></td><td>~656 GPa</td><td>~644 GPa</td><td>Nearly continuous</td></tr>
        <tr><td><strong>Shear Modulus ($\mu$)</strong></td><td>~293 GPa</td><td>0.00 GPa</td><td>Vanishes</td></tr>
      </table>
    `,
    deepDive: `
      <h4>Why Vp Drops When Density Jumps:</h4>
      <ul>
        <li>Formula: $V_p = \sqrt{\frac{K + \frac{4}{3}\mu}{\rho}}$.</li>
        <li>Across the CMB, the rigidity $\mu$ drops to <strong>0</strong> (fluid state), and density $\rho$ jumps from 5.56 to 9.90. Even though bulk modulus $K$ is continuous, losing $\frac{4}{3}\mu$ and dividing by higher $\rho$ causes $V_p$ to plunge from 13.7 to 8.06 km/s!</li>
      </ul>
    `,
    eli5: "At the Gutenberg boundary, you leave the rock world and enter a molten iron ocean. Because liquids cannot resist shear (sideways twisting), S-waves die instantly and P-waves slow way down!"
  },

  // Card 218
  {
    id: 218,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Seismic Elastic Moduli & Fluid Outer Core",
    subtitle: "Why shear modulus vanishes while incompressibility is preserved",
    contentHtml: `
      <p>The elastic wave velocities in an isotropic elastic medium are:</p>
      <div style="background:rgba(0,0,0,0.4); padding:6px 12px; border-radius:6px; font-family:monospace; margin:6px 0; color:#38bdf8;">
        V_p = √((K + 4/3 μ) / ρ) &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; V_s = √(μ / ρ)
      </div>
      <p>where $K$ is incompressibility (bulk modulus), $\mu$ is rigidity (shear modulus), and $\rho$ is density.</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li>In liquids: shear strain produces zero restoring stress $\implies \mu = 0$.</li>
        <li>Consequently, $V_s = \sqrt{0 / \rho} = 0$.</li>
        <li>For P-waves in a liquid: $V_p = \sqrt{K / \rho} = \sqrt{\Phi}$ (acoustic sound speed).</li>
      </ul>
    `,
    quiz: {
      question: "Which observation provides the most decisive proof that Earth's Outer Core is in a liquid state rather than a high-temperature solid?",
      options: [
        "P-waves accelerate to 15 km/s upon entering the outer core",
        "Direct S-waves cannot propagate through the outer core, producing an S-wave shadow zone from 104° to 180°",
        "The outer core has zero density in gravimetric measurements",
        "Earth's magnetic dipole axis is perfectly aligned with its rotational axis"
      ],
      answer: 1,
      rationale: "Liquids have zero shear modulus (μ = 0). Since shear waves require rigidity to propagate, S-waves cannot traverse fluids, creating a global shadow zone from 104° to 180° on seismograms."
    },
    deepDive: `
      <h4>Bullen Parameter (η):</h4>
      <ul>
        <li>The homogeneity of the core is verified by Bullen's parameter: $\eta = \frac{dK}{dP} + \frac{1}{g} \frac{d\Phi}{dr}$.</li>
        <li>In adiabatic homogeneous regions like the outer core, $\eta \approx 1.0$. Deviations indicate compositional stratification.</li>
      </ul>
    `,
    eli5: "Try cutting water with a knife: it offers zero shear resistance. S-waves are shear waves that wiggle sideways. Because the outer core is liquid metal, S-waves cannot pass through it at all!"
  },

  // Card 219
  {
    id: 219,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC Geology"],
    title: "Lehmann Discontinuity & Inner Core Boundary",
    subtitle: "Inge Lehmann (1936) and the discovery of the solid inner core",
    contentHtml: `
      <p>In 1936, Danish seismologist <strong>Inge Lehmann</strong> discovered the <strong>Inner Core Boundary (ICB)</strong> at <strong>5150 km depth</strong> (~330 GPa pressure):</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>P-wave Reflection:</strong> Weak P-wave arrivals observed inside the shadow zone ($104^\circ–140^\circ$) could only be explained by reflection off a solid inner core (<strong>PKiKP</strong> phase) and refraction through it (<strong>PKIKP</strong> phase).</li>
        <li><strong>Velocity Jump:</strong> $V_p$ jumps abruptly from <strong>~10.3 km/s</strong> (liquid outer core base) to <strong>~11.0 km/s</strong> (top of solid inner core).</li>
        <li><strong>Shear Waves Reborn:</strong> Rigidity reappears ($\mu \approx 160\text{ GPa}$), allowing shear waves to propagate at <strong>$V_s \approx 3.5\text{ to }3.6\text{ km/s}$</strong>.</li>
        <li><strong>Density Step:</strong> Jumps from <strong>~12.16 g/cm³</strong> to <strong>~12.76 g/cm³</strong> (~0.6 g/cm³ jump).</li>
      </ul>
    `,
    deepDive: `
      <h4>Solidification Thermodynamics:</h4>
      <ul>
        <li>The melting point of iron increases with pressure faster than the geotherm ($dT_m/dP > dT/dP$).</li>
        <li>At 330 GPa, the actual temperature (~5500 K) drops below the iron melting point, causing iron to crystallize into the solid inner core!</li>
      </ul>
    `,
    eli5: "Inge Lehmann proved in 1936 that inside the boiling liquid iron core lies a solid iron crystal ball the size of Pluto. At 5150 km, the pressure is so crushing that even 5500 °C cannot keep iron liquid!"
  },

  // Card 220
  {
    id: 220,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "PKJKP: The Elusive Inner Core Shear Wave",
    subtitle: "Observation of S-waves traversing the solid inner core",
    contentHtml: `
      <p>The seismic phase <strong>PKJKP</strong> represents the definitive proof that the inner core is solid:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>P:</strong> P-wave through mantle.</li>
        <li><strong>K:</strong> Compressional wave through liquid outer core.</li>
        <li><strong>J:</strong> <em>Converts to shear wave (S-wave)</em> while traversing the solid inner core!</li>
        <li><strong>K:</strong> Converts back to compressional wave in outer core.</li>
        <li><strong>P:</strong> P-wave back through mantle to surface station.</li>
      </ul>
      <p style="font-size:0.82rem; color:#cbd5e1;">Because conversion efficiency at the ICB is very small, PKJKP amplitudes are minute and require array stacking to detect.</p>
    `,
    quiz: {
      question: "In seismic wave nomenclature, which letter represents a SHEAR (S) wave propagating specifically through the solid Inner Core?",
      options: [
        "K",
        "I",
        "J",
        "c"
      ],
      answer: 2,
      rationale: "By international seismological convention: K = P-wave in outer core, I = P-wave in inner core, and J = S-wave (shear wave) in the inner core. Hence PKJKP travels as an S-wave through the inner core."
    },
    deepDive: `
      <h4>Poisson's Ratio of the Inner Core:</h4>
      <ul>
        <li>With $V_p \approx 11.2\text{ km/s}$ and $V_s \approx 3.6\text{ km/s}$, the ratio $V_p / V_s \approx 3.1$.</li>
        <li>This yields an extraordinarily high <strong>Poisson's ratio $\nu \approx 0.44$</strong> (approaching 0.5 for ideal fluids), indicating that the inner core is a soft, ductile solid near its melting point!</li>
      </ul>
    `,
    eli5: "A P-wave dives through the mantle, swims through the liquid core, hits the solid inner core, and morphs into a shear wave (called 'J'). On the other side, it turns back into a P-wave and heads home!"
  }
];

// Generate cards 221 to 250
const additionalCards = [
  // Card 221
  {
    id: 221,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET"],
    title: "Hydrostatic Pressure Equation: dP/dr",
    subtitle: "Mathematical derivation of Earth's internal pressure profile",
    contentHtml: `
      <p>Inside the radially symmetric Earth, pressure $P(r)$ is purely hydrostatic due to self-gravitation:</p>
      <div style="background:rgba(0,0,0,0.4); padding:8px 12px; border-radius:6px; font-family:monospace; margin:8px 0; color:#38bdf8;">
        dP / dr = - ρ(r) · g(r)
      </div>
      <p>where $r$ is radius from center, $\rho(r)$ is density, and $g(r)$ is local gravity:</p>
      <div style="background:rgba(0,0,0,0.4); padding:8px 12px; border-radius:6px; font-family:monospace; margin:8px 0; color:#fbbf24;">
        g(r) = (G · M(r)) / r² = (G / r²) · ∫₀ʳ 4π r'² ρ(r') dr'
      </div>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li>Pressure is strictly <strong>monotonically increasing</strong> with depth ($dP/dz > 0$).</li>
        <li>Pressure at the center ($r = 0$) reaches a maximum of <strong>~364 GPa (3.64 Mbar)</strong>.</li>
      </ul>
    `,
    deepDive: `
      <h4>Pressure Gradients by Layer:</h4>
      <ul>
        <li><strong>Crust:</strong> ~27–30 MPa/km (~0.27–0.30 kbar/km).</li>
        <li><strong>Upper Mantle:</strong> ~35 MPa/km.</li>
        <li><strong>Lower Mantle:</strong> ~45–55 MPa/km.</li>
        <li><strong>Outer Core:</strong> ~85–90 MPa/km (due to heavy iron density ~10–12 g/cm³).</li>
      </ul>
    `,
    eli5: "Every rock layer presses down on the layer below it. Because density gets higher the deeper you go, the pressure piles on faster and faster until you reach 3.6 million atmospheres at Earth's center!"
  },

  // Card 222
  {
    id: 222,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Pressure Milestones Inside Earth",
    subtitle: "Key numerical pressure checkpoints tested in GATE & NET",
    contentHtml: `
      <p>Memorize these five mandatory pressure milestones for Earth interior calculations:</p>
      <table style="width:100%; font-size:0.82rem; margin:8px 0; border-collapse:collapse;">
        <tr style="border-bottom:1px solid rgba(255,255,255,0.15); color:#38bdf8;">
          <th>Boundary</th><th>Depth (km)</th><th>Pressure (GPa)</th><th>Pressure (Mbar / kbar)</th>
        </tr>
        <tr><td>Base of Continental Crust</td><td>35</td><td>~1.0 GPa</td><td>10 kbar</td></tr>
        <tr><td>Top of Transition Zone</td><td>410</td><td>~13.8 GPa</td><td>138 kbar</td></tr>
        <tr><td>Base of Transition Zone</td><td>660</td><td>~23.8 GPa</td><td>238 kbar</td></tr>
        <tr><td>Core-Mantle Boundary (CMB)</td><td>2891</td><td>~136 GPa</td><td>1.36 Mbar</td></tr>
        <tr><td>Inner Core Boundary (ICB)</td><td>5150</td><td>~330 GPa</td><td>3.30 Mbar</td></tr>
        <tr><td>Center of Earth</td><td>6371</td><td>~364 GPa</td><td>3.64 Mbar</td></tr>
      </table>
    `,
    quiz: {
      question: "What is the approximate hydrostatic pressure at the Core-Mantle Boundary (CMB, depth ~2891 km)?",
      options: [
        "13.8 GPa",
        "66 GPa",
        "136 GPa (1.36 Mbar)",
        "364 GPa (3.64 Mbar)"
      ],
      answer: 2,
      rationale: "Pressure at the CMB is ~136 GPa (~1.36 Mbar). 13.8 GPa is at 410 km, 23.8 GPa is at 660 km, and 364 GPa is at the Earth's center."
    },
    deepDive: `
      <h4>Conversion Factors for Exam Numericals:</h4>
      <ul>
        <li>$1\text{ bar} = 10^5\text{ Pa} = 0.1\text{ MPa}$.</li>
        <li>$1\text{ kbar} = 100\text{ MPa} = 0.1\text{ GPa}$.</li>
        <li>$10\text{ kbar} = 1.0\text{ GPa}$.</li>
        <li>$1\text{ Mbar} = 100\text{ GPa}$.</li>
      </ul>
    `,
    eli5: "Remember: Crust is 1 GPa, 410 is ~14 GPa, 660 is ~24 GPa, the outer core begins at 136 GPa, the inner core begins at 330 GPa, and the center is 364 GPa!"
  },

  // Card 223
  {
    id: 223,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET"],
    title: "Gravity Profile g(r): The CMB Peak",
    subtitle: "Why gravity does NOT decrease through the mantle",
    contentHtml: `
      <p>Contrary to simple intuition, gravitational acceleration $g(r)$ does <strong>not</strong> steadily decline from the surface to the center:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Surface ($r = 6371\text{ km}$):</strong> $g \approx 9.82\text{ m/s}^2$.</li>
        <li><strong>Through the Mantle:</strong> $g(r)$ remains nearly constant and actually <em>increases slightly</em>, reaching a global maximum of <strong>~10.68 m/s² at the Core-Mantle Boundary ($r = 3480\text{ km}$, depth 2891 km)</strong>!</li>
        <li><strong>Inside the Core:</strong> Inside the core, $g(r)$ plunges rapidly and linearly, reaching <strong>precisely 0 m/s² at the center ($r = 0$)</strong>.</li>
      </ul>
      <div style="background:rgba(0,0,0,0.4); padding:6px 10px; border-radius:6px; font-size:0.8rem; color:#38bdf8; margin-top:6px;">
        Newton's Shell Theorem: As you descend into the mantle, you shed low-density silicate crust/mantle shells above you, while getting closer to the ultra-dense iron core below!
      </div>
    `,
    deepDive: `
      <h4>Mathematical Criterion for dg/dr:</h4>
      <ul>
        <li>Differentiating $g(r) = \frac{G M(r)}{r^2}$: $\frac{dg}{dr} = 4\pi G \rho(r) - \frac{2g(r)}{r}$.</li>
        <li>Gravity increases with depth ($dg/dr < 0$) whenever local density $\rho(r) < \frac{2}{3}\bar{\rho}(r)$ (two-thirds of average interior density). Since mantle density (~3.3–5.5) is less than 2/3 of mean Earth density (~5.515), $g(r)$ increases downward!</li>
      </ul>
    `,
    eli5: "You might expect gravity to drop as you dig deep. But the iron core is so heavy that as you get closer to it in the mantle, it pulls on you even harder! Gravity maxes out at the core boundary (10.7 m/s²) before dropping to zero at the center."
  },

  // Card 224
  {
    id: 224,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Gravity Variation Inside Earth",
    subtitle: "Exam problem on maximum gravity location",
    contentHtml: `
      <p>A classic GATE and CSIR-NET question tests the variation of gravity inside the Preliminary Reference Earth Model (PREM).</p>
      <div style="background:rgba(0,0,0,0.4); padding:8px 12px; border-radius:6px; font-family:monospace; margin:8px 0; color:#38bdf8;">
        g(r) = (G · M(r)) / r²
      </div>
      <p>Because the core contains ~32% of Earth's total mass packed into only ~16% of its volume, the mass concentration inside $r \le 3480\text{ km}$ is exceptionally high.</p>
    `,
    quiz: {
      question: "At which location inside the Earth is the acceleration due to gravity (g) at its MAXIMUM value?",
      options: [
        "At the Earth's surface (r = 6371 km, g = 9.81 m/s²)",
        "At the 660 km mantle transition zone (g = 10.1 m/s²)",
        "At the Core-Mantle Boundary (depth 2891 km, g ≈ 10.7 m/s²)",
        "At the exact center of the Earth (r = 0 km, g = 14.2 m/s²)"
      ],
      answer: 2,
      rationale: "Gravitational acceleration peaks at the Core-Mantle Boundary (~2891 km depth, radius 3480 km) at ~10.68 m/s² because you are directly outside the super-dense metallic core without being separated by the low-density mantle."
    },
    deepDive: `
      <h4>Gravity at the Earth Center (r = 0):</h4>
      <ul>
        <li>By symmetry in Newton's Shell Theorem, at $r = 0$, equal mass surrounds an observer in every radial direction.</li>
        <li>Net gravitational field cancel out to exactly <strong>$g(0) = 0\text{ m/s}^2$</strong>. An object at Earth's center experiences total weightlessness!</li>
      </ul>
    `,
    eli5: "At Earth's core-mantle boundary, you are standing right on top of the planet's densest iron sphere—so gravity pulls hardest there (~10.7 m/s²). At the dead center, all sides pull equally, so you float weightless!"
  },

  // Card 225
  {
    id: 225,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET"],
    title: "Adams-Williamson Equation",
    subtitle: "Determining internal density from seismic wave velocities",
    contentHtml: `
      <p>The <strong>Adams-Williamson Equation</strong> (1923) allows geophysicists to compute the density profile $\rho(r)$ of Earth's interior directly from measured seismic velocities:</p>
      <div style="background:rgba(0,0,0,0.4); padding:8px 12px; border-radius:6px; font-family:monospace; margin:8px 0; color:#38bdf8;">
        dρ / dr = - (G · M(r) · ρ(r)) / (r² · Φ(r))
      </div>
      <p>where $\Phi(r)$ is the <strong>Seismic Parameter</strong>:</p>
      <div style="background:rgba(0,0,0,0.4); padding:6px 12px; border-radius:6px; font-family:monospace; margin:8px 0; color:#fbbf24;">
        Φ = V_p² - (4/3) · V_s² = K_S / ρ
      </div>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li>$K_S$ is the adiabatic bulk modulus (incompressibility).</li>
        <li><strong>Assumptions:</strong> The region must be (1) chemically homogeneous, (2) adiabatic (no superadiabatic temperature gradient), and (3) under hydrostatic self-compression.</li>
      </ul>
    `,
    deepDive: `
      <h4>Breakdown of Adams-Williamson:</h4>
      <ul>
        <li>The equation FAILS across phase transitions (410 km, 660 km), chemical boundary layers (Moho, CMB), and thermal boundary layers (LVZ, D'').</li>
        <li>In those zones, Bullen's parameter $\eta = -\frac{\Phi}{\rho g}\frac{d\rho}{dr} \ne 1.0$.</li>
      </ul>
    `,
    eli5: "We cannot drop a bucket into the mantle to weigh it. But because sound waves travel faster in stiffer rock, the Adams-Williamson equation turns wave speeds ($V_p, V_s$) into exact density numbers!"
  },

  // Card 226
  {
    id: 226,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Seismic Parameter Φ Calculation",
    subtitle: "GATE numerical on adiabatic bulk sound velocity",
    contentHtml: `
      <p>The seismic parameter $\Phi$ connects elastic body wave velocities to thermodynamic incompressibility:</p>
      <div style="background:rgba(0,0,0,0.4); padding:8px 12px; border-radius:6px; font-family:monospace; margin:8px 0; color:#38bdf8;">
        Φ = V_p² - (4/3) · V_s² = K_S / ρ
      </div>
      <p>The bulk sound velocity $V_\Phi = \sqrt{\Phi}$ represents the acoustic velocity if shear rigidity were zero.</p>
    `,
    quiz: {
      question: "At a depth of 1000 km in the lower mantle, Vp = 11.5 km/s, Vs = 6.4 km/s, and density ρ = 4.5 g/cm³ (4500 kg/m³). What is the value of the seismic parameter Φ?",
      options: [
        "77.6 km²/s²",
        "92.3 km²/s²",
        "132.2 km²/s²",
        "40.9 km²/s²"
      ],
      answer: 0,
      rationale: "Φ = Vp² - (4/3)·Vs² = (11.5)² - (4/3)·(6.4)² = 132.25 - 1.3333·(40.96) = 132.25 - 54.61 = 77.64 km²/s²."
    },
    deepDive: `
      <h4>Computing Adiabatic Bulk Modulus KS:</h4>
      <ul>
        <li>$K_S = \rho \cdot \Phi = 4500\text{ kg/m}^3 \times 77.64 \times 10^6\text{ m}^2/\text{s}^2 = 3.49 \times 10^{11}\text{ Pa} = 349\text{ GPa}$.</li>
        <li>This simple relationship is the backbone of high-pressure mineral physics calculations.</li>
      </ul>
    `,
    eli5: "The seismic parameter $\Phi$ subtracts the shear wiggles from the total wave speed, leaving pure compression speed squared. It is the purest measure of how hard it is to squeeze a rock."
  },

  // Card 227
  {
    id: 227,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC Geology"],
    title: "Bullen's Earth Shells (Zones A to G)",
    subtitle: "Classic Keith Bullen nomenclature for planetary stratification",
    contentHtml: `
      <p>In 1940–1942, Keith Bullen classified Earth's radial structure into <strong>seven alphabetical zones (A to G)</strong> based on density and velocity gradients:</p>
      <table style="width:100%; font-size:0.82rem; margin:8px 0; border-collapse:collapse;">
        <tr style="border-bottom:1px solid rgba(255,255,255,0.15); color:#38bdf8;">
          <th>Zone</th><th>Layer Name</th><th>Depth Range</th><th>Key Characteristics</th>
        </tr>
        <tr><td><strong>A</strong></td><td>Crust</td><td>0 – 35 km</td><td>Felsic to mafic crustal rocks</td></tr>
        <tr><td><strong>B</strong></td><td>Uppermost Mantle</td><td>35 – 410 km</td><td>Peridotite, includes LVZ</td></tr>
        <tr><td><strong>C</strong></td><td>Transition Zone</td><td>410 – 660 km</td><td>Wadsleyite & Ringwoodite</td></tr>
        <tr><td><strong>D'</strong></td><td>Lower Mantle (main)</td><td>660 – 2700 km</td><td>Bridgmanite + Ferropericlase</td></tr>
        <tr><td><strong>D''</strong></td><td>Lowermost Mantle</td><td>2700 – 2891 km</td><td>Post-perovskite, thermal boundary</td></tr>
        <tr><td><strong>E</strong></td><td>Outer Core</td><td>2891 – 4980 km</td><td>Liquid Fe-Ni-light element alloy</td></tr>
        <tr><td><strong>F</strong></td><td>Transition Outer/Inner</td><td>4980 – 5150 km</td><td>Pre-freezing boundary layer</td></tr>
        <tr><td><strong>G</strong></td><td>Inner Core</td><td>5150 – 6371 km</td><td>Solid crystalline hcp Fe-Ni</td></tr>
      </table>
    `,
    deepDive: `
      <h4>Historical Importance of Zone F:</h4>
      <ul>
        <li>Zone F is a 150 km-thick region directly above the inner core boundary with an anomalously low or negative P-wave velocity gradient ($dV_p/dz \le 0$).</li>
        <li>Interpreted as a mushy slurry zone of newly nucleated iron dendrites settling onto the growing inner core.</li>
      </ul>
    `,
    eli5: "Bullen alphabetized Earth like a library shelf: A is Crust, B/C/D is Mantle (with D'' at the base), E is Liquid Core, F is the Slushy Boundary, and G is the Solid Iron Center!"
  },

  // Card 228
  {
    id: 228,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Core Density Deficit & Birch's Law",
    subtitle: "Francis Birch (1952) and the light element conundrum",
    contentHtml: `
      <p>In 1952, Francis Birch formulated <strong>Birch's Law</strong>, establishing a linear relationship between compressional velocity and density for minerals of constant mean atomic weight ($\bar{M}$):</p>
      <div style="background:rgba(0,0,0,0.4); padding:6px 12px; border-radius:6px; font-family:monospace; margin:6px 0; color:#38bdf8;">
        V_p = a(\bar{M}) + b · ρ
      </div>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li>Shock-wave experiments show that pure metallic iron (Fe) or iron-nickel (Fe-Ni) at core pressures is <strong>8% to 10% denser</strong> than Earth's outer core!</li>
        <li>This <strong>Core Density Deficit</strong> proves the liquid outer core must contain ~8–10 wt% of light elements ($S, Si, O, C, H$).</li>
        <li>The solid inner core has a smaller density deficit of <strong>~2% to 4%</strong>.</li>
      </ul>
    `,
    quiz: {
      question: "According to high-pressure shockwave compression data and Birch's Law, Earth's liquid Outer Core is roughly 8–10% LESS dense than pure iron-nickel alloy at the same P-T. What is the primary cause?",
      options: [
        "The core contains thousands of cubic kilometers of empty bubble cavities",
        "Dissolution of light elements such as Silicon, Oxygen, Sulfur, Carbon, or Hydrogen",
        "The outer core is made entirely of liquid aluminum and magnesium",
        "Extreme centrifugal force from Earth's rotation dilutes core density"
      ],
      answer: 1,
      rationale: "The outer core density deficit of 8–10% requires dissolution of light elements (primarily Si, O, S, C, H) into liquid iron during planetary core segregation."
    },
    deepDive: `
      <h4>Mean Atomic Weight Values:</h4>
      <ul>
        <li>Silicate mantle: $\bar{M} \approx 21\text{ g/mol}$ (dominated by O=16, Mg=24, Si=28).</li>
        <li>Pure Iron: $\bar{M} = 55.85\text{ g/mol}$.</li>
        <li>Outer Core: $\bar{M} \approx 47–49\text{ g/mol}$ (due to light element dilution).</li>
      </ul>
    `,
    eli5: "Pure iron at core pressure should weigh about 11 g/cm³, but the outer core only weighs 10 g/cm³. That missing 10% means light elements like sulfur, silicon, and oxygen are dissolved in the iron like salt in water!"
  },

  // Card 229
  {
    id: 229,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC Geology"],
    title: "Light Elements in the Core Candidates",
    subtitle: "Geochemical comparison of Si, O, S, C, and H candidates",
    contentHtml: `
      <p>The identities of the light elements in Earth's core dictate core-mantle equilibrium conditions during accretion:</p>
      <table style="width:100%; font-size:0.82rem; margin:8px 0; border-collapse:collapse;">
        <tr style="border-bottom:1px solid rgba(255,255,255,0.15); color:#38bdf8;">
          <th>Element</th><th>Partition Behavior</th><th>Supporting Evidence</th><th>Exam Significance</th>
        </tr>
        <tr>
          <td><strong>Silicon (Si)</strong></td>
          <td>Siderophile at high P & T, highly reducing</td>
          <td>δ³⁰Si/²⁸Si isotope fractionation between mantle and chondrites</td>
          <td>Favored under high-temperature deep magma ocean (>40 GPa)</td>
        </tr>
        <tr>
          <td><strong>Oxygen (O)</strong></td>
          <td>Soluble in Fe only at very high T (>2000 °C)</td>
          <td>Abundant in mantle silicates</td>
          <td>Major contributor to density deficit; expelled during inner core freezing</td>
        </tr>
        <tr>
          <td><strong>Sulfur (S)</strong></td>
          <td>Strongly chalcophile/siderophile</td>
          <td>Depletion of volatile S in Bulk Silicate Earth (~250 ppm)</td>
          <td>Classic candidate (Murthy & Hall, 1970); forms eutectic Fe-FeS liquid</td>
        </tr>
        <tr>
          <td><strong>Carbon / Hydrogen</strong></td>
          <td>Highly siderophile, volatile</td>
          <td>Carbon in iron meteorites; H solubility in Fe at GPa</td>
          <td>Explains high density deficit with very low mass percentage</td>
        </tr>
      </table>
    `,
    deepDive: `
      <h4>Cosmochemical Consensus:</h4>
      <ul>
        <li>Current consensus favors a multi-component cocktail: ~5–6 wt% Si, ~2–3 wt% O, ~1–2 wt% S, and trace C/H.</li>
        <li>Inner core crystallization expels O and S preferentially into the liquid outer core, driving compositional buoyancy.</li>
      </ul>
    `,
    eli5: "Think of the outer core as iron soup. The seasonings are Silicon, Oxygen, and Sulfur. As the soup slowly freezes into the inner core, it spits the seasonings back into the liquid, making it lighter and stirring the geodynamo!"
  },

  // Card 230
  {
    id: 230,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Earth's Geotherm: Conduction vs Convection",
    subtitle: "Thermal gradients across planetary boundary layers",
    contentHtml: `
      <p>Heat transfer mode dictates the temperature gradient ($\frac{dT}{dz}$) through Earth's layers:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Lithosphere (Conductive):</strong> Very steep gradient: <strong>~20 to 30 °C/km</strong> (continental cratons: 10–15 °C/km; oceanic basins: up to 50 °C/km near ridges). $T$ reaches ~1300 °C at 100 km.</li>
        <li><strong>Mantle Interior (Convective):</strong> Gentle adiabatic gradient: only <strong>~0.3 to 0.5 °C/km</strong>! Heat moves by physical overturn of solid rock.</li>
        <li><strong>D'' Boundary Layer (Conductive):</strong> Steep gradient: drops <strong>~1000 to 1500 °C across ~200 km</strong> (~5–7 °C/km).</li>
        <li><strong>Outer Core (Convective):</strong> Vigorous adiabatic gradient: <strong>~0.8 °C/km</strong>.</li>
      </ul>
    `,
    quiz: {
      question: "Why is the geothermal gradient in the convective mid-mantle (depth 300 to 2600 km) so much lower (~0.4 °C/km) than in the crust (~25 °C/km)?",
      options: [
        "No heat exists in the lower mantle",
        "Heat is transported by efficient convective rock circulation along an adiabat rather than slow conduction",
        "Radioactive decay is completely absent in all regions below the Moho",
        "The mantle is in radiative thermal equilibrium with outer space"
      ],
      answer: 1,
      rationale: "Convection is orders of magnitude more efficient than conduction at transporting heat. A vigorously convecting fluid or ductile solid naturally maintains a near-isentropic (adiabatic) temperature gradient (dT/dz = α·g·T / Cp ≈ 0.3–0.5 °C/km)."
    },
    deepDive: `
      <h4>Adiabatic Gradient Equation:</h4>
      <div style="background:rgba(0,0,0,0.4); padding:6px 10px; border-radius:6px; font-family:monospace; color:#38bdf8;">
        (dT/dz)_ad = (α · g · T) / C_p
      </div>
      <p>where $\alpha$ is thermal expansion ($\sim 1.5 \times 10^{-5}\text{ K}^{-1}$), $g \approx 10\text{ m/s}^2$, $T \approx 2000\text{ K}$, and $C_p \approx 1200\text{ J/(kg K)}$. This yields $\sim 0.35\text{ K/km}$.</p>
    `,
    eli5: "Crust is like an oven mitt: it conducts heat poorly, so temperature skyrockets 25 °C every kilometer down. But the mantle is like a simmering soup pot: churning currents equalize the heat, so temperature barely rises 0.4 °C per km!"
  }
];

// Generate cards 231 to 250
const finalCards = [
  // Card 231
  {
    id: 231,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC Geology"],
    title: "Temperatures at Key Internal Checkpoints",
    subtitle: "Geotherm anchor points from Surface to Earth's Center",
    contentHtml: `
      <p>Key temperature benchmarks based on mineral phase equilibria and iron melting experiments:</p>
      <table style="width:100%; font-size:0.82rem; margin:8px 0; border-collapse:collapse;">
        <tr style="border-bottom:1px solid rgba(255,255,255,0.15); color:#38bdf8;">
          <th>Location</th><th>Depth</th><th>Temperature (approx)</th><th>Thermal Anchor Constraint</th>
        </tr>
        <tr><td>Surface</td><td>0 km</td><td>~15 °C (288 K)</td><td>Atmospheric boundary</td></tr>
        <tr><td>Moho (Continental)</td><td>35 km</td><td>~500 – 600 °C</td><td>Crustal heat production</td></tr>
        <tr><td>Lithosphere Base</td><td>100 – 150 km</td><td>~1300 – 1350 °C</td><td>Peridotite dry solidus onset</td></tr>
        <tr><td>410 km Boundary</td><td>410 km</td><td>~1400 – 1500 °C</td><td>$\alpha \rightarrow \beta$ Olivine phase loop</td></tr>
        <tr><td>660 km Boundary</td><td>660 km</td><td>~1600 – 1700 °C</td><td>Post-spinel breakdown boundary</td></tr>
        <tr><td>CMB (Mantle side)</td><td>2891 km</td><td>~2500 – 2700 K</td><td>Extrapolated mantle adiabat</td></tr>
        <tr><td>CMB (Core side)</td><td>2891 km</td><td>~3800 – 4200 K</td><td>Molten outer core liquidus</td></tr>
        <tr><td>ICB Boundary</td><td>5150 km</td><td>~5400 – 5700 K</td><td>Fe-alloy melting point at 330 GPa</td></tr>
        <tr><td>Earth Center</td><td>6371 km</td><td>~5800 – 6200 K</td><td>Core adiabat extrapolation</td></tr>
      </table>
    `,
    deepDive: `
      <h4>Thermal Power Output of Earth:</h4>
      <ul>
        <li>Earth loses heat at a total rate of <strong>~47 ± 2 TW</strong> (terawatts).</li>
        <li><strong>Radiogenic Heat:</strong> ~20 TW produced by decay of $^{238}U, ^{235}U, ^{232}Th,$ and $^{40}K$ in crust and mantle.</li>
        <li><strong>Primordial Heat:</strong> ~27 TW from gravitational accretion, core separation, and latent heat of inner core freezing.</li>
      </ul>
    `,
    eli5: "At Earth's core, it is about 6000 K—as hot as the surface of the Sun! The heat escaped from planetary accretion 4.5 billion years ago is still slowly leaking out to space through tectonic plates."
  },

  // Card 232
  {
    id: 232,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Temperature at the Inner Core Boundary (ICB)",
    subtitle: "Iron melting point calibration at 330 GPa",
    contentHtml: `
      <p>The Inner Core Boundary (depth 5150 km, pressure 330 GPa) is the most robust thermodynamic anchor in the deep Earth:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li>Because solid iron and liquid iron coexist in equilibrium at the ICB, the temperature must equal the <strong>melting temperature of the core alloy at 330 GPa</strong>.</li>
        <li>Synchrotron X-ray diffraction in laser-heated diamond anvil cells (Boehler, 1993; Anzellini et al., 2013) yields $T_m\text{(pure Fe)} \approx 6230 \pm 500\text{ K}$.</li>
        <li>Depression of melting point due to ~8–10% light element impurities drops $T_\text{ICB}$ to <strong>~5400 to 5700 K</strong>.</li>
      </ul>
    `,
    quiz: {
      question: "What is the primary physical constraint used by mineral physicists to determine the absolute temperature at the Inner Core Boundary (depth 5150 km)?",
      options: [
        "Measuring the temperature of basaltic lava erupted at mid-ocean ridges",
        "The experimental melting point of iron-light element alloy at 330 GPa pressure",
        "Direct drilling samples recovered by the Kola Superdeep Borehole",
        "Thermal imaging satellites orbiting Earth"
      ],
      answer: 1,
      rationale: "Because the solid inner core and liquid outer core are in thermodynamic phase equilibrium at the ICB, the temperature at 5150 km (330 GPa) must exactly equal the melting point (liquidus) of the core iron alloy at 330 GPa (~5500 K)."
    },
    deepDive: `
      <h4>Core-Mantle Boundary Heat Flux:</h4>
      <ul>
        <li>Extrapolating the core adiabat upward from the ICB (~5500 K) yields ~4000 K at the core side of the CMB.</li>
        <li>Since the mantle side is ~2600 K, this establishes a giant temperature contrast ($\Delta T \approx 1400\text{ K}$) across D'', driving 10–15 TW of heat flux.</li>
      </ul>
    `,
    eli5: "Water freezes at 0 °C at sea level. Iron freezes at ~5500 K under 3.3 million atmospheres of pressure. Because the inner core is freezing right at 5150 km, we know the exact temperature there must be ~5500 K!"
  },

  // Card 233
  {
    id: 233,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC Geology"],
    title: "P-Wave Shadow Zone (104° to 140°)",
    subtitle: "Snell's Law refraction and focal geometry at the CMB",
    contentHtml: `
      <p>When an earthquake occurs, direct P-waves are recorded up to an epicentral distance of <strong>$\Delta \approx 104^\circ$</strong> (~11,500 km). Between <strong>$104^\circ$ and $140^\circ$</strong>, direct P-waves disappear:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Cause:</strong> At the CMB, $V_p$ abruptly drops from 13.7 km/s to 8.06 km/s. By <strong>Snell's Law</strong> ($\frac{\sin i_1}{V_1} = \frac{\sin i_2}{V_2}$), rays refract sharply <em>inwards toward the normal</em>.</li>
        <li><strong>Refraction Gap:</strong> The ray grazing the bottom of the mantle emerges at $104^\circ$. The ray penetrating the outer core is bent so sharply downward that it emerges no closer than <strong>$140^\circ$</strong> (as <strong>PKP</strong> or <strong>PKIKP</strong>).</li>
        <li><strong>Inside the Shadow Zone:</strong> Only weak diffracted waves ($P_\text{diff}$) and reflections ($PKiKP$) are observed.</li>
      </ul>
    `,
    deepDive: `
      <h4>Snell's Law at CMB:</h4>
      <div style="background:rgba(0,0,0,0.4); padding:6px 12px; border-radius:6px; font-family:monospace; color:#38bdf8;">
        p = r · sin(i) / v = constant (Ray Parameter)
      </div>
      <p>Because $v$ drops sharply, rays bend downward into the core, creating a shadow ring around the globe.</p>
    `,
    eli5: "The core acts like a spherical glass lens that bends light inward. Because P-waves slow down upon hitting the liquid core, they bend inward so sharply that they overshoot the region between 104° and 140°, leaving a ring of silence!"
  },

  // Card 234
  {
    id: 234,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "S-Wave Shadow Zone (104° to 180°)",
    subtitle: "Why shear waves create a massive global antipodal blackout",
    contentHtml: `
      <p>Direct S-waves are recorded only up to <strong>$\Delta = 104^\circ$</strong>. From <strong>$104^\circ$ all the way to $180^\circ$</strong> (the entire opposite hemisphere), no direct S-waves are observed anywhere on Earth!</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Cause:</strong> Unlike P-waves which refract through the core and re-emerge at 140°, <strong>S-waves cannot propagate through the liquid outer core at all ($\mu = 0 \implies V_s = 0$)</strong>.</li>
        <li><strong>Angular Extent:</strong> S-wave shadow zone covers a huge <strong>$76^\circ$ arc</strong> (from 104° to 180°), encompassing over <strong>40% of Earth's surface</strong>!</li>
        <li><strong>Converted Phases:</strong> S-waves can convert to P-waves at the CMB, traverse the core as P-waves, and convert back to S in the mantle (<strong>SKS</strong> phase).</li>
      </ul>
    `,
    quiz: {
      question: "Which of the following correctly describes the angular extents of the P-wave and S-wave shadow zones measured from an earthquake epicenter?",
      options: [
        "P-wave: 104° to 140°; S-wave: 104° to 180°",
        "P-wave: 104° to 180°; S-wave: 104° to 140°",
        "P-wave: 90° to 120°; S-wave: 120° to 180°",
        "P-wave: 0° to 104°; S-wave: 140° to 180°"
      ],
      answer: 0,
      rationale: "P-wave shadow zone spans from 104° to 140° (refraction shadow). S-wave shadow zone spans from 104° all the way to 180° because liquid outer core completely blocks direct S-wave transmission."
    },
    deepDive: `
      <h4>Shadow Zone Boundaries:</h4>
      <ul>
        <li>Older textbooks often quote 103° to 143° or 105° to 142°. PREM standard defines the core grazing ray limit precisely at 104° and PKP caustic cusp at ~143°.</li>
      </ul>
    `,
    eli5: "The P-wave shadow is a blind ring (104° to 140°). But the S-wave shadow is a massive blind blanket covering the entire back of the planet (104° to 180°) because the liquid outer core swallows shear waves completely!"
  },

  // Card 235
  {
    id: 235,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET"],
    title: "Seismic Phase Nomenclature Decoded",
    subtitle: "Standard IASPEI ray path notation for competitive exams",
    contentHtml: `
      <p>Memorize these ray path naming rules for competitive seismology problems:</p>
      <table style="width:100%; font-size:0.82rem; margin:8px 0; border-collapse:collapse;">
        <tr style="border-bottom:1px solid rgba(255,255,255,0.15); color:#38bdf8;">
          <th>Symbol</th><th>Meaning / Ray Path Segment</th>
        </tr>
        <tr><td><strong>P / S</strong></td><td>Compressional (P) or Shear (S) wave in the crust & mantle</td></tr>
        <tr><td><strong>K</strong></td><td>P-wave traveling through the <em>outer core</em> (German: <em>Kern</em>)</td></tr>
        <tr><td><strong>I</strong></td><td>P-wave traveling through the <em>inner core</em></td></tr>
        <tr><td><strong>J</strong></td><td>S-wave (shear wave) traveling through the <em>inner core</em></td></tr>
        <tr><td><strong>c</strong></td><td>Reflection off the Core-Mantle Boundary (e.g., $PcP, ScS$)</td></tr>
        <tr><td><strong>i</strong></td><td>Reflection off the Inner Core Boundary (e.g., $PKiKP$)</td></tr>
        <tr><td><strong>p / s</strong></td><td>Depth phases: initial wave traveling upward to surface before diving (e.g., $pP, sS$)</td></tr>
      </table>
    `,
    deepDive: `
      <h4>Common Composite Phases:</h4>
      <ul>
        <li><strong>PcP:</strong> P-wave reflected off the CMB back to surface.</li>
        <li><strong>PKP (or PKIKP):</strong> P-wave traversing mantle $\rightarrow$ outer core $\rightarrow$ inner core $\rightarrow$ outer core $\rightarrow$ mantle.</li>
        <li><strong>ScS:</strong> S-wave reflected vertically off the outer core (useful for mantle Q and shear attenuation).</li>
      </ul>
    `,
    eli5: "Seismic phase names are like flight itineraries: P is Mantle, c is Bouncing off the CMB, K is Flying through the Outer Core, and I is Touching down in the Inner Core!"
  },

  // Card 236
  {
    id: 236,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "SKS Phase & Shear Wave Splitting",
    subtitle: "How core converted waves measure mantle anisotropy",
    contentHtml: `
      <p>The <strong>SKS phase</strong> is one of the most powerful diagnostic tools in seismology:</p>
      <div style="background:rgba(0,0,0,0.4); padding:6px 12px; border-radius:6px; font-family:monospace; margin:6px 0; color:#38bdf8;">
        S (mantle) ⟶ K (outer core as P) ⟶ S (mantle)
      </div>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li>Because the outer core is liquid, <strong>only radially polarized P-waves can exist inside it</strong>.</li>
        <li>Upon re-entering the mantle at the second CMB crossing, P converts back to S as <strong>purely SV-polarized shear wave</strong>.</li>
        <li>When this SV wave travels upward through the upper mantle, it encounters anisotropic olivine crystals and splits into two orthogonal shear waves (<strong>fast and slow</strong>).</li>
      </ul>
    `,
    quiz: {
      question: "Why is the SKS phase considered the 'gold standard' for measuring Upper Mantle seismic anisotropy beneath a seismic station?",
      options: [
        "It carries zero energy so noise cannot contaminate it",
        "It exits the liquid outer core with a known, purely radial SV polarization, so any SH energy observed at the surface must originate entirely within the receiver-side mantle",
        "It is the only wave that travels along the ocean surface",
        "It has a constant velocity of 20 km/s regardless of depth"
      ],
      answer: 1,
      rationale: "Because the liquid outer core erases all previous shear history and outputs a strictly radial SV-polarized wave, any tangential (SH) energy recorded at the surface station is guaranteed to be caused by anisotropy in the upper mantle directly beneath the receiver!"
    },
    deepDive: `
      <h4>Fast Polarization Direction (φ) and Delay Time (δt):</h4>
      <ul>
        <li>Shear wave splitting yields two parameters: $\phi$ (direction of maximum flow, matching olivine a-axis) and $\delta t$ (accumulated delay, typically 1.0–2.0 s in upper mantle).</li>
      </ul>
    `,
    eli5: "Because the liquid core washes away all previous vibrations, SKS emerges from the core as a pure, perfectly clean wave. When it hits anisotropic upper mantle rocks, it splits like light through a prism, showing which way the mantle is flowing!"
  },

  // Card 237
  {
    id: 237,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC Geology"],
    title: "Bulk Silicate Earth (BSE) Composition",
    subtitle: "Primitive mantle model after core extraction",
    contentHtml: `
      <p>The <strong>Bulk Silicate Earth (BSE)</strong> represents the composition of Earth's crust + mantle combined (i.e. Earth minus the metallic core):</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Major Oxides:</strong>
          <br>• $SiO_2 \approx 45.0\text{ wt\%}$
          <br>• $MgO \approx 37.8\text{ wt\%}$ (Mg# $\approx 89–90$)
          <br>• $FeO \approx 8.0\text{ wt\%}$
          <br>• $Al_2O_3 \approx 4.4\text{ wt\%}$
          <br>• $CaO \approx 3.5\text{ wt\%}$
        </li>
        <li><strong>Refractory Lithophile Elements (RLE):</strong> Elements like $Al, Ca, Ti, Zr, REE, U, Th$ exist in strictly chondritic ratios ($Al/Ca \approx 1.08, Al/Ti \approx 20$) because neither element entered the core or was lost to space as volatile gas.</li>
      </ul>
    `,
    deepDive: `
      <h4>Depleted MORB Mantle (DMM) vs BSE:</h4>
      <ul>
        <li>Extraction of continental crust over 4 Ga has depleted the upper mantle in incompatible trace elements (low Rb/Sr, high Sm/Nd, depleted LREE).</li>
        <li>BSE = Continental Crust + Depleted Mantle (DMM) + Enriched Mantle reservoirs.</li>
      </ul>
    `,
    eli5: "Bulk Silicate Earth is the recipe of planet Earth if you peel off and throw away the iron core. It is 45% silica and 38% magnesia—essentially an immense ball of olive-green peridotite."
  },

  // Card 238
  {
    id: 238,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Pyrolite Model of the Upper Mantle",
    subtitle: "A.E. Ringwood's synthetic basalt + harzburgite mantle mixture",
    contentHtml: `
      <p>In 1962, A.E. Ringwood proposed the <strong>Pyrolite</strong> model (PYR-oxene + OL-ivine) as the hypothetical fertile parental mantle composition capable of yielding basaltic magma upon partial melting:</p>
      <div style="background:rgba(0,0,0,0.4); padding:6px 12px; border-radius:6px; font-family:monospace; margin:6px 0; color:#38bdf8;">
        1 Part Tholeiitic Basalt + 3 Parts Refractory Harzburgite = 4 Parts Pyrolite
      </div>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Mineralogy:</strong> ~57% Olivine, ~17% Orthopyroxene, ~12% Clinopyroxene, ~14% Garnet/Spinel.</li>
        <li>Matches PREM seismic velocities $V_p \approx 8.1\text{ km/s}$ and density $\approx 3.38\text{ g/cm}^3$ at the top of the mantle.</li>
      </ul>
    `,
    quiz: {
      question: "According to Ted Ringwood's classic Pyrolite model, fertile primitive mantle is petrologically reconstituted by mixing which two rock types in a 1:3 ratio?",
      options: [
        "1 part Granite + 3 parts Dunite",
        "1 part Tholeiitic Basalt + 3 parts Refractory Harzburgite",
        "1 part Carbonatite + 3 parts Eclogite",
        "1 part Kimberlite + 3 parts Komatiite"
      ],
      answer: 1,
      rationale: "Ringwood defined pyrolite as a mixture of 1 part tholeiitic basalt (representing the extractable melt component) and 3 parts refractory harzburgite (the residual depleted mantle residue)."
    },
    deepDive: `
      <h4>Piclogite Alternative:</h4>
      <ul>
        <li>Bass and Anderson proposed <strong>Piclogite</strong> (~40% olivine, rich in clinopyroxene and garnet) as an alternative lower-olivine model for the transition zone.</li>
        <li>Current consensus confirms that pyrolite matches transition zone velocity jumps within 2% uncertainty.</li>
      </ul>
    `,
    eli5: "Ringwood asked: If oceanic crust is made by melting the mantle, what was the mantle before melting? He mixed 1 cup of melted lava (basalt) with 3 cups of leftover rock (harzburgite) to reverse-engineer the original 'Pyrolite' mantle recipe!"
  },

  // Card 239
  {
    id: 239,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC Geology"],
    title: "Element Abundance: Bulk Earth vs Crust",
    subtitle: "The famous Clarke numbers and mass percentage contrasts",
    contentHtml: `
      <p>A classic exam trap: <strong>Bulk Earth</strong> composition is dominated by iron, while <strong>Continental Crust</strong> is dominated by oxygen and silicon!</p>
      <table style="width:100%; font-size:0.82rem; margin:8px 0; border-collapse:collapse;">
        <tr style="border-bottom:1px solid rgba(255,255,255,0.15); color:#38bdf8;">
          <th>Rank</th><th>Bulk Earth (Total Planet)</th><th>Continental Crust (Clarke)</th>
        </tr>
        <tr><td><strong>1st</strong></td><td><strong>Iron (Fe)</strong> ~32.1%</td><td><strong>Oxygen (O)</strong> ~46.6%</td></tr>
        <tr><td><strong>2nd</strong></td><td><strong>Oxygen (O)</strong> ~30.1%</td><td><strong>Silicon (Si)</strong> ~27.7%</td></tr>
        <tr><td><strong>3rd</strong></td><td><strong>Silicon (Si)</strong> ~15.1%</td><td><strong>Aluminium (Al)</strong> ~8.1%</td></tr>
        <tr><td><strong>4th</strong></td><td><strong>Magnesium (Mg)</strong> ~13.9%</td><td><strong>Iron (Fe)</strong> ~5.0%</td></tr>
        <tr><td><strong>5th</strong></td><td>Nickel (Ni) ~1.8%</td><td>Calcium (Ca) ~3.6%</td></tr>
        <tr><td><strong>6th</strong></td><td>Calcium (Ca) ~1.5%</td><td>Sodium (Na) ~2.8%</td></tr>
        <tr><td><strong>7th</strong></td><td>Aluminium (Al) ~1.4%</td><td>Potassium (K) ~2.6%</td></tr>
        <tr><td><strong>8th</strong></td><td>Sulfur (S) ~1.0%</td><td>Magnesium (Mg) ~2.1%</td></tr>
      </table>
      <div class="mnemonic-banner" style="margin-top:6px;">
        <div class="phrase">Crust Clarke Mnemonic: <strong>O-Si-Al-Fe-Ca-Na-K-Mg</strong></div>
        <p style="font-size:0.75rem; color:#cbd5e1; margin:0;">"Only Silly Aliens Fear Calling Nasty Killer Monsters"</p>
      </div>
    `,
    deepDive: `
      <h4>Why Iron Drops from #1 to #4:</h4>
      <ul>
        <li>Over 85% of Earth's total iron is sequestered in the core. The silicate crust is left enriched in light, incompatible, low-density elements ($Si, Al, Na, K$).</li>
      </ul>
    `,
    eli5: "For the WHOLE Earth, Iron is King (#1 with 32%). But on the surface Crust where we live, Oxygen is #1 (46%) and Silicon is #2 (28%)! Remember: O-Si-Al-Fe-Ca-Na-K-Mg!"
  },

  // Card 240
  {
    id: 240,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Goldschmidt's Geochemical Classification",
    subtitle: "Siderophile, Lithophile, Chalcophile, and Atmophile elements",
    contentHtml: `
      <p>Victor Goldschmidt classified elements by their preferred planetary reservoir based on bonding affinity:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Siderophile (Iron-loving):</strong> Partition into metallic core ($Fe, Ni, Co, Pt, Au, Os, Ir, Re, W$).</li>
        <li><strong>Lithophile (Rock-loving):</strong> Partition into silicate mantle & crust ($Si, Al, Mg, Ca, Na, K, REE, U, Th, Ti$).</li>
        <li><strong>Chalcophile (Sulfur-loving):</strong> Partition into sulfide phases ($S, Cu, Zn, Pb, Ag, As, Cd, Hg$).</li>
        <li><strong>Atmophile (Gas-loving):</strong> Concentrate in atmosphere and oceans ($H, C, N, He, Ne, Ar, Kr, Xe$).</li>
      </ul>
    `,
    quiz: {
      question: "Which pair of elements consists ENTIRELY of highly siderophile elements (HSE) that were overwhelmingly extracted into Earth's core during planetary differentiation?",
      options: [
        "Uranium (U) and Thorium (Th)",
        "Platinum (Pt) and Iridium (Ir)",
        "Aluminium (Al) and Titanium (Ti)",
        "Sodium (Na) and Potassium (K)"
      ],
      answer: 1,
      rationale: "Platinum (Pt) and Iridium (Ir) are Highly Siderophile Elements (HSE) with metal/silicate partition coefficients D > 10⁴. Uranium, Thorium, Aluminium, and Sodium are strictly lithophile and stay entirely in the silicate crust/mantle."
    },
    deepDive: `
      <h4>Late Veneer Hypothesis:</h4>
      <ul>
        <li>Because HSEs (Pt, Ir, Os) partition completely into the core, the mantle should have zero HSEs.</li>
        <li>Yet the mantle contains ~0.008 chondritic equivalents. This proves a 'Late Veneer' of ~0.5–1.0% chondritic meteorites bombarded Earth *after* core formation ceased!</li>
      </ul>
    `,
    eli5: "Goldschmidt showed that elements have personalities: Iron-lovers (Siderophiles like Gold & Platinum) sank to the core. Rock-lovers (Lithophiles like Silicon & Uranium) floated up to make the mantle and continents!"
  },

  // Card 241
  {
    id: 241,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC Geology"],
    title: "The Geodynamo: Magnetohydrodynamics",
    subtitle: "How liquid outer core convection generates Earth's magnetic field",
    contentHtml: `
      <p>Earth's magnetic field is sustained by a self-exciting dynamo operating in the liquid outer core:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Three Essential Prerequisites:</strong>
          <br>1. <strong>Conducting Fluid:</strong> Liquid Fe-Ni alloy (electrical conductivity $\sigma \approx 10^6\text{ S/m}$).
          <br>2. <strong>Energy Source for Convection:</strong> Thermal buoyancy (cooling from core) + Compositional buoyancy (light elements expelled at ICB).
          <br>3. <strong>Coriolis Force:</strong> Rapid planetary rotation (period 24 hr) organizes convective plumes into helical, Taylor-column flow aligned with the rotational axis.
        </li>
        <li><strong>Magnetic Reynolds Number ($Rm$):</strong> $Rm = \mu_0 \sigma v L \gg 10–100$. Advection of magnetic field lines by fluid motion overcomes ohmic dissipation (magnetic diffusion).</li>
      </ul>
    `,
    deepDive: `
      <h4>Frozen-in Flux Theorem (Alfvén's Theorem):</h4>
      <ul>
        <li>In a fluid with high electrical conductivity ($\sigma \rightarrow \infty$), magnetic field lines are 'frozen' into the fluid and dragged along with convective flow, stretching and amplifying dipole lines.</li>
      </ul>
    `,
    eli5: "The outer core is a giant spinning liquid metal generator. As boiling molten iron churns, Earth's daily spin twists the liquid into vertical spirals, converting physical motion into our planetary magnetic shield!"
  },

  // Card 242
  {
    id: 242,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Inner Core Freezing as Geodynamo Engine",
    subtitle: "Compositional convection vs Thermal convection energetics",
    contentHtml: `
      <p>The energy budget of the geodynamo is powered by two distinct convective mechanisms in the liquid outer core:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Thermal Convection:</strong> Core cools through CMB heat loss ($\sim 10–15\text{ TW}$). Latent heat of crystallization ($L_H \approx 750\text{ kJ/kg}$) released as iron freezes.</li>
        <li><strong>Compositional (Chemical) Convection:</strong> As solid Fe-Ni freezes onto the inner core, light elements ($O, Si, S$) are excluded. This buoyant, light-element-rich liquid shoots upward from the ICB, driving intense convective stirring!</li>
      </ul>
    `,
    quiz: {
      question: "Which driving mechanism provides the GREATEST thermodynamic efficiency and buoyancy power for sustaining the modern geodynamo in Earth's outer core?",
      options: [
        "Tidal pulling by the Moon on the core",
        "Compositional buoyancy driven by the rejection of light elements at the Inner Core Boundary",
        "Radioactive decay of Potassium-40 dissolved in the inner core",
        "Frictional heating from meteorite impacts at the surface"
      ],
      answer: 1,
      rationale: "Compositional convection is nearly 100% thermodynamically efficient because gravitational potential energy of rising buoyant light elements converts directly into mechanical motion, whereas thermal convection is limited by Carnot engine efficiency (~15–20%)."
    },
    deepDive: `
      <h4>Age of the Inner Core:</h4>
      <ul>
        <li>Because inner core freezing is so essential, before the inner core nucleated (~0.5 to 1.5 Ga), the dynamo had to run on thermal convection alone.</li>
        <li>Paleomagnetic rocks prove a magnetic field existed as far back as 3.5 to 4.2 Ga!</li>
      </ul>
    `,
    eli5: "Freezing the inner core is like making ice cubes from salt water: the ice is pure, leaving super-light salty water behind. This buoyant liquid floats up like a hot-air balloon, powering our magnetic field!"
  },

  // Card 243
  {
    id: 243,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC Geology"],
    title: "Inner Core Seismic Anisotropy",
    subtitle: "Why polar seismic waves travel faster than equatorial waves",
    contentHtml: `
      <p>In 1986, Morelli, Dziewonski, and Woodhouse discovered that Earth's <strong>Solid Inner Core is seismically anisotropic</strong>:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Polar vs Equatorial:</strong> P-waves travelling <strong>parallel to Earth's spin axis (North-South)</strong> travel <strong>~3% to 4% faster</strong> than waves travelling in the <strong>equatorial plane</strong>!</li>
        <li><strong>Travel Time Difference:</strong> Polar ray paths ($PKIKP$) arrive <strong>4 to 6 seconds earlier</strong> than expected.</li>
        <li><strong>Physical Cause:</strong> Preferred lattice alignment (LPO) of hexagonal close-packed iron ($\epsilon\text{-Fe}$) crystals, whose fast crystallographic c-axis is aligned preferentially with Earth's rotational axis by Maxwell magnetic stress.</li>
      </ul>
    `,
    deepDive: `
      <h4>The Innermost Inner Core (IMIC):</h4>
      <ul>
        <li>In 2002, Dziewonski and Ishii discovered a distinct <strong>Innermost Inner Core (IMIC)</strong> of radius ~300–500 km, where the fast anisotropy axis tilts by ~55° away from the rotation axis!</li>
        <li>Represents a preserved record of a major change in core crystallization mode in deep Earth history.</li>
      </ul>
    `,
    eli5: "The solid inner core is made of iron crystals that are combed in one direction like brushed hair. Waves traveling North-South along the grain arrive 5 seconds faster than waves traveling East-West across the grain!"
  },

  // Card 244
  {
    id: 244,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Inner Core Super-Rotation Controversy",
    subtitle: "Differential rotation of the inner core relative to Earth's mantle",
    contentHtml: `
      <p>In 1996, Song and Richards analyzed doublet earthquakes from the South Sandwich Islands recorded in Alaska and proposed that the <strong>inner core super-rotates faster than the mantle</strong>:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Initial Rate:</strong> Proposed at <strong>~1° per year</strong> eastward relative to the mantle.</li>
        <li><strong>Mechanism:</strong> Electromagnetic torque exerted by the geodynamo outer core magnetic field pushes the inner core eastward.</li>
        <li><strong>Recent Revisions:</strong> Recent studies (Zhang et al., 2023) suggest the inner core rotation rate is much slower (~0.05°–0.1°/yr) and may even oscillate multidecadally (60–70 year period).</li>
      </ul>
    `,
    quiz: {
      question: "What physical mechanism exerts the primary torque that drives differential rotation of Earth's solid inner core relative to its mantle?",
      options: [
        "Atmospheric jet stream drag",
        "Electromagnetic Lorentz torque coupling the outer core magnetic field to the conducting inner core",
        "Gravitational attraction from the Andromeda galaxy",
        "Oceanic surface tidal friction"
      ],
      answer: 1,
      rationale: "The geodynamo generates immense toroidal magnetic fields in the fluid outer core. The electromagnetic Lorentz torque (J × B) couples into the electrically conducting solid inner core, pushing it to rotate independently of the silicate mantle."
    },
    deepDive: `
      <h4>Gravitational Viscous Coupling:</h4>
      <ul>
        <li>While electromagnetic torque pushes the inner core eastward, gravitational attraction between density bumps in the mantle and inner core pulls it back into alignment, creating an oscillatory cycle.</li>
      </ul>
    `,
    eli5: "Because the solid inner core floats in a frictionless sea of liquid iron, it doesn't have to spin at the exact same speed as the rocky mantle above. It can spin slightly faster, driven like an electric motor by the magnetic field!"
  },

  // Card 245
  {
    id: 245,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET"],
    title: "Age of Earth: Patterson 1956 Isochron",
    subtitle: "The definitive 4.54 Ga Lead-Lead isochron benchmark",
    contentHtml: `
      <p>The accepted age of planet Earth is <strong>4.54 ± 0.05 Ga (4540 Ma)</strong>, determined in 1956 by <strong>Clair Patterson</strong> using lead isotopes ($^{207}Pb / ^{206}Pb$):</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>The Canyon Diablo Troilite (CDT) Anchor:</strong> The iron meteorite Canyon Diablo contains troilite ($FeS$) with essentially zero uranium. Its lead isotopic ratios represent the <strong>primordial lead of the Solar System at $t = 0$</strong>:
          <br>• $(^{206}Pb / ^{204}Pb)_0 = 9.307$
          <br>• $(^{207}Pb / ^{204}Pb)_0 = 10.294$
        </li>
        <li><strong>Meteorite-Earth Isochron:</strong> Plotting modern terrestrial oceanic pelagic sediments on the same isochron with chondrites and achondrites yields a single straight line defining an age of <strong>4.55 ± 0.07 Ga</strong>.</li>
      </ul>
    `,
    deepDive: `
      <h4>Why Rocks on Earth Cannot Give 4.54 Ga Directly:</h4>
      <ul>
        <li>Due to continuous plate tectonics, mantle convection, and early impact bombardment, Earth's initial crust was completely recycled and destroyed.</li>
        <li>Meteorites are pristine planetary leftovers from the exact same solar nebula, providing the undisturbed initial ratio.</li>
      </ul>
    `,
    eli5: "Earth is 4.54 billion years old! Clair Patterson proved this by measuring lead in meteorites that crashed into Earth. Because meteorites and Earth were born in the same cosmic nursery, their isotopic clocks started together."
  },

  // Card 246
  {
    id: 246,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Hf-W Chronometry: Rapid Core Formation",
    subtitle: "Short-lived isotope ¹⁸²Hf → ¹⁸²W proves core formed within 30–40 Ma",
    contentHtml: `
      <p>The timing of Earth's core differentiation is constrained by the extinct radionuclide system <strong>$^{182}Hf \rightarrow {}^{182}W$</strong> (half-life $t_{1/2} = 8.9\text{ Ma}$):</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Hafnium (Hf):</strong> Strictly <strong>lithophile</strong>; stays completely in the silicate mantle.</li>
        <li><strong>Tungsten (W):</strong> Strongly <strong>siderophile</strong>; partitions aggressively into sinking metallic iron core.</li>
        <li><strong>Key Observation:</strong> Earth's mantle has an excess of $^{182}W$ ($\epsilon_{182W} \approx +1.9$) compared to chondritic meteorites!</li>
        <li><strong>Conclusion:</strong> Core formation occurred while live $^{182}Hf$ was still decaying—within the first <strong>~30 to 40 million years</strong> of solar system history.</li>
      </ul>
    `,
    quiz: {
      question: "Because Earth's silicate mantle exhibits an excess of radiogenic ¹⁸²W relative to chondritic meteorites, what does the Hafnium-Tungsten (¹⁸²Hf–¹⁸²W, t₁/₂ = 8.9 Ma) system prove about Earth's core formation?",
      options: [
        "Core formation was a slow, gradual process that completed only 1.0 billion years ago",
        "Core segregation occurred extremely rapidly, within the first ~30 to 40 million years of Earth's formation",
        "The core formed before the solar nebula even collapsed",
        "Tungsten is a lithophile gas that escaped entirely to space"
      ],
      answer: 1,
      rationale: "If core segregation took >100 Ma, all ¹⁸²Hf would have decayed before metal separation, leaving zero ¹⁸²W anomaly in the mantle. The observed positive anomaly proves core separation occurred while ¹⁸²Hf was still active (within ~30–40 Ma)."
    },
    deepDive: `
      <h4>Comparison with Mars and Moon:</h4>
      <ul>
        <li>Mars has $\epsilon_{182W} \approx +4.0$, proving the Martian core formed in under <strong>10 Ma</strong> (a planetary embryo that stalled).</li>
        <li>The Moon's tungsten isotopic signature matches Earth's mantle, supporting the Giant Impact hypothesis.</li>
      </ul>
    `,
    eli5: "Hf-W is a 9-million-year stopwatch. If Earth's iron core had taken a long time to sink, all the stopwatch ticks would have been lost. Because we can still see the leftover ticks in the mantle, the core must have separated in a flash!"
  },

  // Card 247
  {
    id: 247,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC Geology"],
    title: "The Giant Impact & Deep Magma Ocean",
    subtitle: "Theia collision (~4.51 Ga) and global mantle melting",
    contentHtml: `
      <p>At ~4.51 Ga, proto-Earth collided with a Mars-sized protoplanet named <strong>Theia</strong>:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Moon Origin:</strong> Debris ejected from the collision coalesced within weeks to form the Moon.</li>
        <li><strong>Thermal Pulse:</strong> The colossal kinetic energy melted the entire outer silicate shell of Earth, creating a <strong>Deep Magma Ocean</strong> extending 1000 to 2000 km deep.</li>
        <li><strong>Core Equilibrium:</strong> Molten iron droplets rained down through the magma ocean, equilibrating with liquid silicate at <strong>~40–50 GPa and ~3500–4000 K</strong> before joining the growing core.</li>
      </ul>
    `,
    deepDive: `
      <h4>Chemical Fingerprints:</h4>
      <ul>
        <li>This deep high-pressure equilibration explains the moderate siderophile element abundances ($Ni, Co, V, Cr$) observed in the mantle today.</li>
        <li>Solidification of the magma ocean proceeded from the bottom-up due to the steep slope of the peridotite liquidus ($dT_m/dP > dT_{ad}/dP$).</li>
      </ul>
    `,
    eli5: "A planet the size of Mars smashed into early Earth. The crash splashed out debris to make our Moon and turned our entire planet into a glowing red ocean of boiling liquid magma thousands of kilometers deep!"
  },

  // Card 248
  {
    id: 248,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Jack Hills Zircons: Oldest Earth Material",
    subtitle: "4.404 Ga detrital zircons from Western Australia",
    contentHtml: `
      <p>The oldest recognized terrestrial materials on Earth are detrital <strong>zircon crystals ($ZrSiO_4$)</strong> recovered from the Jack Hills metaconglomerate in the Yilgarn Craton, Western Australia:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Oldest Grain:</strong> High-precision U-Pb dating yields <strong>4.404 ± 0.008 Ga (4404 Ma)</strong>.</li>
        <li><strong>Oxygen Isotopes:</strong> High $\delta^{18}O$ values (up to <strong>6.5 to 7.5‰</strong>, higher than mantle value of 5.3‰) indicate interaction with <strong>low-temperature liquid surface water</strong>!</li>
        <li><strong>Hadean Cool Earth:</strong> Proves that by 4.4 Ga, Earth had already cooled sufficiently to form continental crust and oceans of liquid water.</li>
      </ul>
    `,
    quiz: {
      question: "What is the crucial scientific significance of the elevated δ¹⁸O isotope values (> 6.5‰) measured in 4.4 Ga Jack Hills zircons from Western Australia?",
      options: [
        "They prove Earth had no atmosphere or water during the Hadean Eon",
        "They indicate the magma source had interacted with low-temperature liquid surface water, proving oceans and continental crust existed by 4.4 Ga",
        "They prove that meteorites did not exist in the early solar system",
        "They indicate that the core formed after 4.4 Ga"
      ],
      answer: 1,
      rationale: "Mantle rocks have a constant δ¹⁸O of ~5.3‰. Heavy δ¹⁸O (> 6.5‰) can only be produced by clay-water interactions at low surface temperatures. Their presence in 4.4 Ga zircons proves liquid oceans and weathering crust existed just 160 Ma after Earth's formation ('Cool Early Earth')."
    },
    deepDive: `
      <h4>Oldest Intact Rock vs Oldest Mineral:</h4>
      <ul>
        <li><strong>Oldest Mineral Grain:</strong> Jack Hills Zircon (~4.404 Ga) — detrital grain in younger 3.0 Ga sedimentary rock.</li>
        <li><strong>Oldest Intact Rock:</strong> Acasta Gneiss, Slave Craton, Canada (~4.03 Ga tonalite-trondhjemite-granodiorite TTG).</li>
        <li><strong>Oldest Supracrustal (Sedimentary/Volcanic):</strong> Isua Greenstone Belt, Greenland (~3.8 Ga).</li>
      </ul>
    `,
    eli5: "The oldest piece of Earth ever held by human hands is a tiny zircon crystal from Australia, dated to 4.4 billion years ago. Inside it is chemical proof that cool oceans and sandy shores already existed back then!"
  },

  // Card 249
  {
    id: 249,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC Geology"],
    title: "Magma Ocean Solidification & Fractional Crystallization",
    subtitle: "How fractional crystallization created Earth's layered reservoirs",
    contentHtml: `
      <p>As the post-impact Magma Ocean cooled, crystallization proceeded from the <strong>mid-to-lower mantle upward</strong>:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.84rem; margin-top:4px;">
        <li><strong>Phase Liquidus vs Adiabat:</strong> Because the slope of the silicate liquidus is steeper than the convective adiabat, crystallization began near the base of the mantle (~660–1000 km) and spread both downward and upward.</li>
        <li><strong>Basal Magma Ocean (BMO):</strong> A residual layer of iron-rich melt was trapped at the Core-Mantle Boundary because it was denser than the crystallizing solid silicates. This BMO is the parent source of modern LLSVPs and ULVZs!</li>
        <li><strong>Degassing:</strong> Primordial volatile release ($H_2O, CO_2, N_2, CO, CH_4$) during crystallization formed Earth's secondary proto-atmosphere.</li>
      </ul>
    `,
    deepDive: `
      <h4>Noble Gas Reservoirs (³He/⁴He):</h4>
      <ul>
        <li>High $^{3}He/^{4}He$ ratios (> 30 times atmospheric ratio $R_A$) in ocean island basalts (OIBs like Hawaii and Iceland) prove that un-degassed primordial domains preserved from magma ocean crystallization still survive in the deep mantle today!</li>
      </ul>
    `,
    eli5: "When the giant magma ocean cooled down, it froze from the middle out! The heaviest, iron-rich liquid sank to the bottom and got trapped right against the core, forming the deep mysterious blobs we still see with seismic waves today."
  },

  // Card 250
  {
    id: 250,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_internal",
    subtopicName: "Internal Structure & Discontinuities (P-T-Density)",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET", "UPSC Geology"],
    title: "Earth's Internal Structure: Master Review",
    subtitle: "Comprehensive synthesis of boundaries, speeds, and densities",
    contentHtml: `
      <p>The definitive master scorecard of Earth's interior for GATE, CSIR-NET, and UPSC:</p>
      <table style="width:100%; font-size:0.78rem; margin:6px 0; border-collapse:collapse;">
        <tr style="border-bottom:1px solid rgba(255,255,255,0.15); color:#38bdf8;">
          <th>Discontinuity</th><th>Depth</th><th>Boundary</th><th>Key Phase / Property Change</th>
        </tr>
        <tr><td><strong>Conrad</strong></td><td>~15 km</td><td>Upper / Lower Crust</td><td>Granite $\rightarrow$ Granulite (Vp 6.0 $\rightarrow$ 6.8 km/s)</td></tr>
        <tr><td><strong>Moho</strong></td><td>~35 km</td><td>Crust / Mantle</td><td>Felsic/Mafic $\rightarrow$ Peridotite (Vp 6.8 $\rightarrow$ 8.1 km/s)</td></tr>
        <tr><td><strong>410 km</strong></td><td>410 km</td><td>Transition Zone Top</td><td>$\alpha$-Olivine $\rightarrow$ $\beta$-Wadsleyite (+2.9 MPa/K)</td></tr>
        <tr><td><strong>520 km</strong></td><td>520 km</td><td>Transition Zone Mid</td><td>$\beta$-Wadsleyite $\rightarrow$ $\gamma$-Ringwoodite</td></tr>
        <tr><td><strong>660 km</strong></td><td>660 km</td><td>Upper / Lower Mantle</td><td>Ringwoodite $\rightarrow$ Bridgmanite + Fp (-2.0 MPa/K)</td></tr>
        <tr><td><strong>Repetti</strong></td><td>~900 km</td><td>Mid-Mantle</td><td>Viscosity increase (100x), gradient shift</td></tr>
        <tr><td><strong>Gutenberg</strong></td><td>2891 km</td><td>Mantle / Outer Core</td><td>Solid silicate $\rightarrow$ Liquid Fe (Vs drops to 0)</td></tr>
        <tr><td><strong>Lehmann</strong></td><td>5150 km</td><td>Outer / Inner Core</td><td>Liquid Fe $\rightarrow$ Solid Fe (Vs reappears ~3.5 km/s)</td></tr>
      </table>
    `,
    quiz: {
      question: "Which of the following correctly pairs an Earth discontinuity with its dominant thermodynamic or petrological phase transition?",
      options: [
        "410 km: Ringwoodite breakdown into Bridgmanite and Ferropericlase",
        "660 km: Alpha-olivine transition to modified spinel Wadsleyite",
        "Gutenberg (2891 km): Disappearance of shear modulus (μ = 0) due to transition into liquid Fe-Ni core",
        "Moho: Transition from liquid peridotite to solid iron-silicon alloy"
      ],
      answer: 2,
      rationale: "Gutenberg discontinuity marks the core-mantle boundary at 2891 km where shear modulus drops to zero (μ = 0) because the outer core is liquid Fe-Ni alloy. (410 is α→β, 660 is γ→Br+Fp, Moho is crustal rock to solid peridotite)."
    },
    deepDive: `
      <h4>Golden Formulas Summary for GATE:</h4>
      <ul>
        <li>$V_p = \sqrt{\frac{K + \frac{4}{3}\mu}{\rho}}$, $V_s = \sqrt{\frac{\mu}{\rho}}$, $\Phi = V_p^2 - \frac{4}{3}V_s^2 = \frac{K}{\rho}$.</li>
        <li>Hydrostatic pressure: $\frac{dP}{dr} = -\rho g$.</li>
        <li>Adams-Williamson: $\frac{d\rho}{dr} = -\frac{G M(r) \rho(r)}{r^2 \Phi}$.</li>
        <li>Poisson's ratio: $\nu = \frac{(V_p/V_s)^2 - 2}{2[(V_p/V_s)^2 - 1]}$.</li>
      </ul>
    `,
    eli5: "You have mastered Earth's internal architecture from Crust to Core! Keep the order CMRGL in your mind, remember that S-waves cannot swim in liquids, and you are fully equipped to conquer any competitive geology exam!"
  }
];

const allInternalCards = [...cards, ...additionalCards, ...finalCards];

console.log(`Generated ${allInternalCards.length} cards for Internal structure, composition, and age P-T-Density.`);

// Write out JS file
const jsContent = `// 50 High-Yield Exam Cards for Topic: Internal Structure, Composition, and Age (P-T-Density Variation Inside Earth)
// Designed specifically for GATE Geology, CSIR-NET Earth Sciences, and UPSC Combined Geo-Scientist

export const INTERNAL_EARTH_CARDS = ${JSON.stringify(allInternalCards, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '../src/data/internalEarthCards.js'), jsContent, 'utf-8');

// Write standalone JSON
fs.writeFileSync(
  path.join(__dirname, '../internal_structure_earth_50_cards.json'),
  JSON.stringify(allInternalCards, null, 2),
  'utf-8'
);

console.log('Successfully wrote src/data/internalEarthCards.js and internal_structure_earth_50_cards.json');
