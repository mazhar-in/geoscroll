// 50 High-Yield Exam Cards for Topic: Origin of Solar System & Earth
// Designed specifically for GATE Geology, CSIR-NET Earth Sciences, and UPSC Combined Geo-Scientist

export const ORIGIN_SOLAR_SYSTEM_CARDS = [
  {
    id: 101,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET"],
    title: "Age of the Solar System & CAIs",
    subtitle: "The definitive 4.567 Ga isotopic benchmark",
    contentHtml: `
      <p>The accepted age of the Solar System is <strong>4.567 Ga (4567 ± 0.6 Ma)</strong>, determined via high-precision Pb-Pb dating of <strong>Calcium-Aluminium-rich Inclusions (CAIs)</strong> found in carbonaceous chondrites (e.g., the Allende meteorite).</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem; margin-top:4px;">
        <li><strong>CAIs:</strong> The earliest high-temperature condensates from the solar nebula (~1500–1800 K). Composed of refractory minerals: <em>hibonite, corundum, perovskite, grossite, spinel, and melilite</em>.</li>
        <li><strong>Chondrules:</strong> Silicate spherules formed 1 to 3 Ma <em>after</em> CAIs by rapid flash-heating and quenching of dust aggregates in the protoplanetary disk.</li>
      </ul>
    `,
    deepDive: `
      <h4>High-Precision Geochronology:</h4>
      <ul>
        <li><strong>Decay Scheme:</strong> ²⁰⁷Pb/²⁰⁶Pb isochron system using ²³⁵U → ²⁰⁷Pb (t₁/₂ = 704 Ma) and ²³⁸U → ²⁰⁶Pb (t₁/₂ = 4.47 Ga).</li>
        <li><strong>Extinct Radionuclides:</strong> ²⁶Al → ²⁶Mg (t₁/₂ = 0.72 Ma). The initial (²⁶Al/²⁷Al)₀ ratio in CAIs was ~5.2 × 10⁻⁵, serving as a high-resolution chronometer for the first 5 Ma of the solar system.</li>
      </ul>
    `,
    eli5: "CAIs are the very first mineral sparks that solidified when the boiling gas cloud cooled down. Everything else in the solar system, including Earth, formed after them!"
  },
  {
    id: 102,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "CI Carbonaceous Chondrites as Solar Proxy",
    subtitle: "Why Ivuna and Orgueil represent the primary bulk composition",
    contentHtml: `
      <p>CI chondrites (Carbonaceous Ivuna-type) are considered the most primitive meteorites because their elemental abundance closely mirrors the solar photosphere, with the exception of gaseous volatiles (H, He, C, N, O, and noble gases).</p>
    `,
    quiz: {
      question: "Why are CI carbonaceous chondrites considered the closest chemical proxy to the bulk solar system, despite lacking chondrules?",
      options: [
        "They formed at ultra-high pressures exceeding 50 GPa in Jupiter's core",
        "Their refractory and volatile element ratios match the solar photosphere 1:1",
        "They have undergone total melting and high-grade magmatic differentiation",
        "They are rich in metallic Fe-Ni alloys matching the Earth's inner core"
      ],
      answer: 1,
      rationale: "Except for gaseous elements (H, He, noble gases, C, N, O), the relative abundances of all lithophile, siderophile, and chalcophile elements in CI chondrites match the spectroscopic composition of the solar photosphere with remarkable 1:1 precision."
    },
    deepDive: `
      <h4>CI Chondrite Petrology:</h4>
      <ul>
        <li>CI chondrites contain up to ~10–20 wt% water in hydrated phyllosilicates (serpentine, smectite) and up to ~3–5 wt% organic carbon.</li>
        <li>They never experienced thermal metamorphism above ~150°C, preserving primitive nebular dust subjected only to low-temperature aqueous alteration on their asteroid parent body.</li>
      </ul>
    `,
    eli5: "CI chondrites are like the batter left on the spoon before the solar system cake was baked. They preserve the original recipe of the Sun!"
  },
  {
    id: 103,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC"],
    title: "Nebular Condensation Sequence",
    subtitle: "Order of mineral precipitation as the solar nebula cooled from 1800 K",
    contentHtml: `
      <table style="width:100%; font-size:0.75rem; border-collapse:collapse; margin-top:4px;">
        <tr style="border-bottom:1px solid #333; color:#9da1b4;">
          <th style="padding:4px;">Condensation T (at 10⁻⁴ bar)</th>
          <th style="padding:4px;">Condensing Mineral Phase</th>
          <th style="padding:4px;">Element Group</th>
        </tr>
        <tr>
          <td style="padding:4px; color:#f43f5e;">> 1650 K</td>
          <td style="padding:4px;">Corundum (Al₂O₃), Hibonite</td>
          <td style="padding:4px;">Refractory Oxides</td>
        </tr>
        <tr>
          <td style="padding:4px; color:#f59e0b;">1650 – 1400 K</td>
          <td style="padding:4px;">Perovskite (CaTiO₃), Melilite, Spinel</td>
          <td style="padding:4px;">Refractory Titanates/Silicates</td>
        </tr>
        <tr>
          <td style="padding:4px; color:#38bdf8;">1450 – 1350 K</td>
          <td style="padding:4px;">Metallic Fe-Ni alloy (Kamacite)</td>
          <td style="padding:4px;">Siderophiles</td>
        </tr>
        <tr>
          <td style="padding:4px; color:#10b981;">1400 – 1200 K</td>
          <td style="padding:4px;">Forsterite (Mg₂SiO₄), Enstatite (MgSiO₃)</td>
          <td style="padding:4px;">Major Rock Silicates</td>
        </tr>
        <tr>
          <td style="padding:4px; color:#a855f7;">1000 – 650 K</td>
          <td style="padding:4px;">Alkali Feldspars, Troilite (FeS)</td>
          <td style="padding:4px;">Moderately Volatile</td>
        </tr>
        <tr>
          <td style="padding:4px; color:#06b6d4;">< 200 K</td>
          <td style="padding:4px;">H₂O, NH₃, CH₄ ices</td>
          <td style="padding:4px;">Highly Volatiles (Snow line)</td>
        </tr>
      </table>
    `,
    deepDive: `
      <h4>Condensation Physics:</h4>
      <p>Thermodynamic calculation assumes chemical equilibrium in a gas of solar composition at P = 10⁻³ to 10⁻⁵ bar. Refractory Lithophile Elements (RLE: Al, Ca, Ti, Sc, REE) condense first at T > 1400 K and remain unfractionated in bulk planetary bodies.</p>
    `,
    eli5: "As the fiery solar nebula cooled, aluminum and calcium metals froze out first like iron slag, followed by rock silicates (olivine), and finally water ice froze out far away beyond Jupiter!"
  },
  {
    id: 104,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "The Angular Momentum Paradox",
    subtitle: "Why 99% of mass does not hold 99% of the spin",
    contentHtml: `
      <p>In the Solar System:</p>
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li>The <strong>Sun contains ~99.86%</strong> of total solar system mass, but possesses only <strong>~1–2%</strong> of total angular momentum!</li>
        <li>The <strong>Planets contain ~0.14%</strong> of mass, but hold <strong>~98–99%</strong> of the angular momentum (primarily in the orbital motions of Jupiter, Saturn, Uranus, and Neptune).</li>
      </ul>
    `,
    quiz: {
      question: "What primary astrophysical mechanism explains the transfer of angular momentum outward from the proto-Sun to the protoplanetary disk?",
      options: [
        "Magnetic braking via stellar winds and magnetic field coupling with ionized disk gas",
        "Gravitational tidal capture of interstellar rogue planetesimals",
        "Nuclear fusion shockwaves during the deuterium-burning phase",
        "Direct photon radiation pressure from the solar core"
      ],
      answer: 0,
      rationale: "Magnetic braking (Alfvén waves and magnetized stellar winds coupling the spinning proto-Sun to the surrounding ionized accretion disk) efficiently transferred rotational angular momentum outward, slowing the Sun's rotation rate."
    },
    deepDive: `
      <h4>Nebular Model Evolution:</h4>
      <p>Kant (1755) and Laplace (1796) proposed the original nebular hypothesis. However, the classical model failed to explain why the central star rotates slowly. Modern magneto-hydrodynamic (MHD) disk models resolved this via magnetic torque and stellar wind outflows.</p>
    `,
    eli5: "The Sun is huge but spins like a lazy top, while Jupiter whips around in a giant orbit carrying all the spinning energy. Magnetic tethers acted like brakes, slowing the Sun down and throwing the momentum outward!"
  },
  {
    id: 105,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET", "UPSC"],
    title: "Giant Impact Hypothesis (Theia Collision)",
    subtitle: "The origin of Earth-Moon system ~4.51 Ga",
    contentHtml: `
      <div class="svg-diagram-wrap">
        <svg viewBox="0 0 300 90">
          <circle cx="80" cy="45" r="28" fill="#38bdf8"/>
          <text x="80" y="49" fill="#000" font-size="9" font-weight="bold" text-anchor="middle">Proto-Earth</text>
          
          <circle cx="160" cy="25" r="16" fill="#f43f5e"/>
          <text x="160" y="28" fill="#fff" font-size="8" font-weight="bold" text-anchor="middle">Theia</text>
          <line x1="140" y1="28" x2="105" y2="40" stroke="#f59e0b" stroke-width="2" stroke-dasharray="3"/>
          
          <circle cx="250" cy="45" r="12" fill="#9da1b4"/>
          <text x="250" y="48" fill="#000" font-size="7" font-weight="bold" text-anchor="middle">Moon</text>
          <text x="250" y="70" fill="#f59e0b" font-size="7" text-anchor="middle">Silicate Debris Disk</text>
        </svg>
      </div>
      <ul style="margin-left:1.1rem; line-height:1.5; font-size:0.8rem;">
        <li><strong>Theia:</strong> Mars-sized planetary embryo (~0.1 Earth mass) struck the differentiated proto-Earth in an oblique glancing impact at ~4.51 Ga.</li>
        <li>Theia's iron core merged into Earth's core. A vaporized silicate debris disk condensed rapidly to form the Moon.</li>
      </ul>
    `,
    deepDive: `
      <h4>Compelling Geochemical Proofs for Theia Impact:</h4>
      <ul>
        <li><strong>Low Lunar Density & Small Core:</strong> Moon bulk density is 3.34 g/cm³ (vs Earth's 5.51 g/cm³). The Moon's metallic core is < 1–3% of its total mass (Earth's core is ~32%).</li>
        <li><strong>Volatile Depletion:</strong> Severe depletion in volatile elements (K, Na, Zn, H₂O) due to vaporization in the giant impact plume.</li>
        <li><strong>Identical Oxygen Isotopes:</strong> Earth and Moon fall on the exact same Terrestrial Fractionation Line (Δ¹⁷O = 0.000 ± 0.005‰), proving thorough isotopic homogenization.</li>
      </ul>
    `,
    eli5: "A runaway rogue planet the size of Mars smashed sideways into young Earth. Its iron melted right into Earth's core, while the rocky splash of melted mantle ringed the planet and clumped together to make our Moon!"
  },
  {
    id: 106,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Hf-W Chronometry of Core Segregation",
    subtitle: "Determining that Earth's core formed within ~30 Ma of solar origin",
    contentHtml: `
      <p>The <strong>¹⁸²Hf – ¹⁸²W decay system</strong> is the gold standard for dating planetary core formation:</p>
      <div style="background:rgba(0,0,0,0.4); padding:6px; border-radius:4px; font-family:monospace; color:#38bdf8; font-size:0.82rem; margin:6px 0;">
        ¹⁸²Hf → ¹⁸²W + 2β⁻  (Half-life t₁/₂ = 8.9 Ma)
      </div>
      <ul style="margin-left:1.1rem; font-size:0.8rem; line-height:1.5;">
        <li><strong>Hafnium (Hf):</strong> Strongly lithophile; remains entirely in the silicate mantle.</li>
        <li><strong>Tungsten (W):</strong> Moderately siderophile; partitions preferentially into the metallic Fe-Ni core.</li>
      </ul>
    `,
    quiz: {
      question: "The silicate mantle of Earth has an excess of radiogenic ¹⁸²W compared to chondritic meteorites (ε¹⁸²W ≈ +1.9). What does this establish about Earth's core differentiation?",
      options: [
        "Core formation occurred after all ¹⁸²Hf had completely decayed (> 60 Ma)",
        "Core formation took place early, while parent isotope ¹⁸²Hf was still actively decaying (< 30 Ma)",
        "Tungsten is a lithophile element that concentrated in the crust during weathering",
        "Earth's core formed cold at 3.0 Ga during the Archaean Eon"
      ],
      answer: 1,
      rationale: "Because Tungsten partitioned into the metallic core early, the mantle had a high Hf/W ratio while ¹⁸²Hf was still alive (within the first ~30 Ma). Subsequent decay of remaining ¹⁸²Hf produced radiogenic ¹⁸²W excess in the mantle."
    },
    deepDive: `
      <h4>Hf-W Systematics on Other Bodies:</h4>
      <ul>
        <li><strong>Asteroid 4 Vesta:</strong> Core formed extremely rapidly within ~1 to 3 Ma of CAIs!</li>
        <li><strong>Mars:</strong> Core formed within ~2 to 10 Ma.</li>
        <li><strong>Earth:</strong> Protracted accretion and core segregation took ~30–40 Ma, punctuated by the giant Moon-forming impact.</li>
      </ul>
    `,
    eli5: "Hafnium loves rock; Tungsten loves metal. If the metal sank into the core early while Hafnium was still ticking and decaying into Tungsten, the mantle is left with an extra radioactive fingerprint. That proves Earth's core formed in its first 30 million years!"
  },
  {
    id: 107,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC"],
    title: "Goldschmidt's Geochemical Classification",
    subtitle: "Affinity-based partitioning during planetary differentiation",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Lithophile ('Rock-loving'):</strong> Affinity for oxygen and silicate melts. Concentrate in crust and mantle: <em>Si, Al, Ca, Mg, Na, K, Ti, U, Th, REE, Zr</em>.</li>
        <li><strong>Siderophile ('Iron-loving'):</strong> Affinity for metallic iron; partitioned into Earth's core: <em>Fe, Ni, Co, Au, Pt, Os, Ir, Ru, Re, W</em>.</li>
        <li><strong>Chalcophile ('Sulfur-loving'):</strong> Affinity for sulfide phases; concentrate in sulfide ores: <em>Cu, Zn, Pb, Ag, As, Hg, Cd, Mo</em>.</li>
        <li><strong>Atmophile ('Gas-loving'):</strong> Volatile elements in atmosphere/hydrosphere: <em>H, N, C (as CO/CO₂), noble gases (He, Ne, Ar, Kr, Xe)</em>.</li>
      </ul>
    `,
    deepDive: `
      <h4>The Highly Siderophile Elements (HSE) & 'Late Veneer':</h4>
      <p>During core formation, HSEs (Pt, Os, Ir, Ru, Rh, Au) should have partitioned almost 100% into the core (D > 10⁴). Yet, Earth's mantle has a small but uniform excess of HSE (~0.008 chondritic). This requires a <strong>'Late Veneer'</strong>: ~0.5–1 wt% of chondritic meteorite bombardment after core segregation ceased!</p>
    `,
    eli5: "Goldschmidt divided elements into personality clubs: Lithophiles hang out in granite rocks, Siderophiles sink straight into the molten iron core, Chalcophiles bond with stinky sulfur, and Atmophiles escape as gases!"
  },
  {
    id: 108,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "The Frost Line (Snow Line)",
    subtitle: "The physical divider between rocky terrestrials and gas giants",
    contentHtml: `
      <p>The <strong>Snow Line</strong> (at ~2.7 to 3.0 AU, within the asteroid belt) marks the orbital distance where temperatures in the protoplanetary disk dropped below ~150–170 K, allowing water vapor to condense into solid ice grains.</p>
    `,
    quiz: {
      question: "Why did the outer Jovian planets grow to massive sizes (15–300 Earth masses) compared to the inner terrestrial planets?",
      options: [
        "Beyond the snow line, volatile ices (H₂O, NH₃, CH₄) were abundant solid building blocks that accelerated rapid core accretion",
        "The Sun's gravity was stronger beyond 5 AU, pulling in heavy refractory metals",
        "Solar wind blew heavy silicates outward to condense exclusively at Jupiter's orbit",
        "Outer planets formed from dense tungsten-iron meteorites that never melted"
      ],
      answer: 0,
      rationale: "Beyond the frost line, H₂O, NH₃, and CH₄ ices condensed as solids. This increased the available surface density of solid planetesimals by ~4–10 fold, allowing proto-Jupiter to rapidly reach the ~10 Earth mass threshold needed for runaway gas capture."
    },
    deepDive: `
      <h4>Core Accretion Threshold:</h4>
      <p>Once a rocky-icy protoplanet reaches ~10 Earth masses (M_E), its gravity can bind nebular H and He directly from the disk. This triggered <strong>runaway gas accretion</strong>, ballooning Jupiter to 318 M_E before the solar wind cleared the nebular disk.</p>
    `,
    eli5: "Inside the snow line it was too hot for ice, so planets could only build with rocks. Outside the snow line, water ice was everywhere like snowdrifts, giving outer planets 10 times more bricks to build giants!"
  },
  {
    id: 109,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC"],
    title: "Bulk Earth vs. Crustal Elemental Abundances",
    subtitle: "Top 8 elements by mass percentage",
    contentHtml: `
      <table style="width:100%; font-size:0.75rem; border-collapse:collapse; margin-top:4px;">
        <tr style="border-bottom:1px solid #333; color:#9da1b4;">
          <th style="padding:4px;">Rank</th>
          <th style="padding:4px;">Whole Bulk Earth (wt%)</th>
          <th style="padding:4px;">Continental Crust (wt%)</th>
        </tr>
        <tr>
          <td style="padding:4px;">1</td>
          <td style="padding:4px; font-weight:bold; color:#f43f5e;">Iron (Fe) ~32.1%</td>
          <td style="padding:4px; font-weight:bold; color:#38bdf8;">Oxygen (O) ~46.6%</td>
        </tr>
        <tr>
          <td style="padding:4px;">2</td>
          <td style="padding:4px; font-weight:bold; color:#38bdf8;">Oxygen (O) ~30.1%</td>
          <td style="padding:4px; font-weight:bold; color:#10b981;">Silicon (Si) ~27.7%</td>
        </tr>
        <tr>
          <td style="padding:4px;">3</td>
          <td style="padding:4px;">Silicon (Si) ~15.1%</td>
          <td style="padding:4px;">Aluminum (Al) ~8.1%</td>
        </tr>
        <tr>
          <td style="padding:4px;">4</td>
          <td style="padding:4px;">Magnesium (Mg) ~13.9%</td>
          <td style="padding:4px;">Iron (Fe) ~5.0%</td>
        </tr>
        <tr>
          <td style="padding:4px;">5</td>
          <td style="padding:4px;">Nickel (Ni) ~1.8%</td>
          <td style="padding:4px;">Calcium (Ca) ~3.6%</td>
        </tr>
        <tr>
          <td style="padding:4px;">6</td>
          <td style="padding:4px;">Calcium (Ca) ~1.5%</td>
          <td style="padding:4px;">Sodium (Na) ~2.8%</td>
        </tr>
        <tr>
          <td style="padding:4px;">7</td>
          <td style="padding:4px;">Aluminum (Al) ~1.4%</td>
          <td style="padding:4px;">Potassium (K) ~2.6%</td>
        </tr>
        <tr>
          <td style="padding:4px;">8</td>
          <td style="padding:4px;">Sulfur (S) ~1.9%</td>
          <td style="padding:4px;">Magnesium (Mg) ~2.1%</td>
        </tr>
      </table>
    `,
    deepDive: `
      <h4>Mnemonic for Continental Crust Elements:</h4>
      <p><strong>"O Si Al Fe Ca Na K Mg"</strong> (Oxygen, Silicon, Aluminum, Iron, Calcium, Sodium, Potassium, Magnesium). Note that <strong>Iron is #1 in Bulk Earth</strong> (due to the iron core), but drops to #4 in the continental crust!</p>
    `,
    eli5: "For the whole planet Earth, Iron is king because of the massive metal ball at the center. But for the surface rocks we walk on, Oxygen and Silicon make up almost three-quarters of everything!"
  },
  {
    id: 110,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Oxygen 3-Isotope Systematics",
    subtitle: "Δ¹⁷O and the Terrestrial Fractionation Line (TFL)",
    contentHtml: `
      <p>Oxygen has three stable isotopes: ¹⁶O (99.76%), ¹⁷O (0.04%), and ¹⁸O (0.20%).</p>
      <ul style="margin-left:1.1rem; line-height:1.5; font-size:0.8rem;">
        <li>All terrestrial rocks and lunar samples fall along a single line with slope ≈ 0.52: <strong>The Terrestrial Fractionation Line (TFL)</strong>.</li>
        <li>Deviation from TFL is quantified as: <code>Δ¹⁷O = δ¹⁷O - 0.52 × δ¹⁸O</code>.</li>
      </ul>
    `,
    quiz: {
      question: "Which extraterrestrial sample group has Δ¹⁷O ≈ 0.00‰ and plots precisely ON the Terrestrial Fractionation Line?",
      options: [
        "Carbonaceous chondrites (Allende, Murchison)",
        "Lunar return samples (Apollo basalts and anorthosites)",
        "Martian meteorites (SNC clan)",
        "Ordinary chondrites (H, L, LL)"
      ],
      answer: 1,
      rationale: "Lunar samples plot precisely on the Terrestrial Fractionation Line (Δ¹⁷O = 0.00‰), whereas Martian meteorites have Δ¹⁷O ≈ +0.32‰, Carbonaceous chondrites have negative Δ¹⁷O down to -5‰, and ordinary chondrites have Δ¹⁷O ≈ +0.7 to +1.2‰."
    },
    deepDive: `
      <h4>Cosmochemical Significance:</h4>
      <p>Mass-independent fractionation (CO self-shielding by UV radiation in the solar nebula) created distinct Δ¹⁷O reservoirs. The fact that Earth and Moon share identical Δ¹⁷O proves that Theia and Proto-Earth thoroughly mixed or originated from the same orbital zone.</p>
    `,
    eli5: "Oxygen isotopes are like an planetary passport. Mars, asteroids, and comets all have different stamps. But the Moon and Earth have the exact same passport stamp!"
  },
  {
    id: 111,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC"],
    title: "Iron Meteorites & Widmanstätten Patterns",
    subtitle: "Evidence of slow cooling inside differentiated metallic cores",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Octahedrites:</strong> The most common class of iron meteorites (6–14 wt% Ni). Show classic <strong>Widmanstätten patterns</strong> when etched with dilute nitric acid (nital).</li>
        <li><strong>Mineral Lamellae:</strong> Intergrowth of low-Ni <strong>Kamacite</strong> (α-iron, BCC) and high-Ni <strong>Taenite</strong> (γ-iron, FCC).</li>
        <li><strong>Hexahedrites:</strong> Low Ni (< 6 wt%). Lack Widmanstätten pattern; show fine parallel shock lines called <strong>Neumann bands</strong>.</li>
        <li><strong>Ataxites:</strong> High Ni (> 16 wt%), entirely taenite with no macroscopic pattern.</li>
      </ul>
    `,
    deepDive: `
      <h4>Cooling Rate Calculation:</h4>
      <p>Widmanstätten patterns cannot be replicated in normal laboratory furnaces because they require extremely slow cooling rates of <strong>1°C to 100°C per million years</strong>! This conclusively proves they formed inside the thermally insulated metal cores of shattered planetesimals (50–500 km diameter).</p>
    `,
    eli5: "The criss-cross metal pattern on etched iron meteorites takes millions of years of ultra-slow cooling inside a planetary core to grow. It's a genuine cosmic steel fingerprint!"
  },
  {
    id: 112,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Origin of Earth's Water: D/H Ratio Fingerprint",
    subtitle: "Carbonaceous chondrites vs Comets as primary sources",
    contentHtml: `
      <p>The origin of Earth's water is diagnosed by comparing the <strong>Deuterium to Hydrogen ratio (D/H)</strong> of terrestrial ocean water (Standard Mean Ocean Water, VSMOW = 1.558 × 10⁻⁴) with cosmic reservoirs.</p>
    `,
    quiz: {
      question: "Which cosmic reservoir matches the D/H isotopic ratio of Earth's oceans most closely?",
      options: [
        "Oort Cloud comets (e.g., Comet Halley, Hyakutake)",
        "Carbonaceous chondrites (asteroidal water in phyllosilicates)",
        "Jupiter's atmospheric hydrogen gas",
        "The Solar Photosphere"
      ],
      answer: 1,
      rationale: "Most Oort Cloud comets show D/H ratios approximately twice that of Earth's oceans (~3 × 10⁻⁴). In contrast, carbonaceous chondrite clay minerals match the terrestrial VSMOW D/H ratio closely, indicating asteroid delivery during accretion."
    },
    deepDive: `
      <h4>Enstatite Chondrite Water:</h4>
      <p>Recent high-precision measurements revealed that enstatite chondrites (which match Earth in O, Cr, Ti, and Ni isotopes) also contain sufficient hydrogen in their silicate lattice with Earth-like D/H to have provided virtually all of Earth's water locally during accretion.</p>
    `,
    eli5: "Comets were once blamed for filling our oceans, but their water is twice as 'heavy' (rich in deuterium) as Earth's water! Asteroid clay minerals have the exact same water recipe as your glass of drinking water!"
  },
  {
    id: 113,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC"],
    title: "Sources of Heat in Early Earth",
    subtitle: "The driving forces of the Iron Catastrophe & Magma Ocean",
    contentHtml: `
      <ol style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Short-Lived Extinct Radionuclides (First 10 Ma):</strong>
          <br>• ²⁶Al → ²⁶Mg (t₁/₂ = 0.72 Ma)
          <br>• ⁶⁰Fe → ⁶⁰Ni (t₁/₂ = 2.6 Ma)
          <br>These generated intense heat, melting bodies > 20 km in diameter within the first 2 Ma.
        </li>
        <li><strong>Accretionary Kinetic Energy:</strong> Conversion of kinetic energy into heat upon collision: <code>E = ½mv²</code>. Giant impacts deposited enough thermal energy to melt entire planetary hemispheres.</li>
        <li><strong>Gravitational Potential Energy (Core Segregation):</strong> The sinking of dense molten iron to form the core released ~2 × 10³⁰ Joules, heating the planet by ~1500°C!</li>
        <li><strong>Long-Lived Radionuclides (Continuing today):</strong> ²³⁵U, ²³⁸U, ²³²Th, and ⁴⁰K.</li>
      </ol>
    `,
    deepDive: `
      <h4>The Iron Catastrophe:</h4>
      <p>Once interior temperature exceeded the Fe-FeS eutectic melting point (~1000°C at low P), molten iron accumulated into giant diapirs. As they sank through the silicate mantle toward the center, the runaway release of gravitational potential energy completely liquefied the mantle into a global <strong>Magma Ocean</strong>.</p>
    `,
    eli5: "Early Earth was cooked by a triple whammy: radioactive aluminum baking it inside, giant planetary asteroids crashing outside, and trillions of tons of heavy iron dropping to the center like hot lead sinkers!"
  },
  {
    id: 114,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "The Oldest Terrestrial Material: Jack Hills Zircons",
    subtitle: "4.404 Ga grains preserving evidence of liquid water in the Hadean",
    contentHtml: `
      <p>The oldest recognized fragments of the Earth are detrital <strong>zircon (ZrSiO₄) grains</strong> extracted from the Jack Hills metaconglomerate in the Yilgarn Craton, Western Australia, dated up to <strong>4.404 Ga</strong>.</p>
    `,
    quiz: {
      question: "What geochemical evidence preserved within Jack Hills zircons (4.4–4.0 Ga) implies the presence of liquid water oceans on early Earth during the Hadean?",
      options: [
        "Heavy δ¹⁸O values (> +6.5‰ to +7.5‰) indicating protolith weathering by liquid water",
        "Presence of liquid oil fluid inclusions inside the zircon crystals",
        "Abundant metallic iron inclusions proving dry vacuum conditions",
        "Zero radiogenic lead content in the core of the grains"
      ],
      answer: 0,
      rationale: "Unmelted mantle zircons have δ¹⁸O = +5.3 ± 0.3‰. Many Hadean Jack Hills zircons possess elevated δ¹⁸O up to +7.5‰. High δ¹⁸O requires interaction of the igneous protolith with low-temperature liquid water before anatectic remelting into granitic magmas."
    },
    deepDive: `
      <h4>The 'Cool Early Earth' Hypothesis:</h4>
      <p>Prior to Jack Hills zircon analyses, the Hadean was envisioned as a boiling, dry sea of lava. The 'Cool Early Earth' model proposes that by 4.4 Ga, a solid continental crust and liquid water oceans already existed, enabling weathering and sediment recycling!</p>
    `,
    eli5: "Zircons are microscopic geological diamonds that never die. By measuring the oxygen trapped inside a 4.4-billion-year-old zircon, scientists proved there were cool water oceans splashing on early Earth only 150 million years after it formed!"
  },
  {
    id: 115,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET", "UPSC"],
    title: "Primitive vs Secondary Atmosphere Evolution",
    subtitle: "From Primordial Nebula Gas to Volcanic Degassing",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Primary Atmosphere:</strong> Captured directly from the solar nebula (dominated by H₂, He, CH₄). Rapidly stripped away by intense solar extreme ultraviolet (EUV) radiation and T-Tauri solar winds, aided by low planetary escape velocity.</li>
        <li><strong>Secondary Atmosphere:</strong> Produced by <em>volcanic degassing</em> and impact vapor plumes. Dominated by: <strong>H₂O (steam ~60–80%), CO₂ (~10–20%), N₂ (~1–5%), and SO₂/H₂S</strong>. Free O₂ was <em>completely absent</em> (reducing/neutral).</li>
        <li><strong>Tertiary (Modern) Atmosphere:</strong> Formed when oceans condensed (drawing down CO₂ as limestone) and oxygenic photosynthetic cyanobacteria evolved (GOE ~2.4 Ga).</li>
      </ul>
    `,
    deepDive: `
      <h4>Atmospheric Noble Gas Depletion:</h4>
      <p>Earth's atmosphere has extreme depletion of non-radiogenic noble gases (²⁰Ne, ³⁶Ar, ⁸⁴Kr, ¹³⁰Xe) compared to solar composition (by factors of 10⁶ to 10¹⁰). This is the definitive proof that Earth completely lost its primary primordial envelope.</p>
    `,
    eli5: "Earth's first gas blanket (hydrogen and helium) was blown away by violent young solar winds. Our second blanket was burped out by thousands of erupting volcanoes—mostly steam and carbon dioxide without a single breath of oxygen!"
  },
  {
    id: 116,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "The Faint Young Sun Paradox",
    subtitle: "Why early Earth didn't freeze solid under a 30% dimmer Sun",
    contentHtml: `
      <p>Standard stellar evolution models indicate that 4.0 Ga ago, the Sun's luminosity was only about <strong>70% of its current value</strong> (30% fainter), because hydrogen had not yet converted into dense helium in the core.</p>
    `,
    quiz: {
      question: "How did the early Archean Earth maintain liquid water oceans without freezing into a global snowball under a 30% fainter young Sun?",
      options: [
        "Massive atmospheric greenhouse effect driven by elevated concentrations of CO₂ and CH₄",
        "Geothermal heat from Earth's core alone maintained surface water temperature",
        "Earth's orbit was located much closer to the Sun at 0.5 AU",
        "Extreme volcanic dust reflected 90% of all solar radiation"
      ],
      answer: 0,
      rationale: "The Faint Young Sun Paradox is resolved by a much stronger greenhouse effect. In the absence of extensive continents and free oxygen (which destroys methane), high levels of CO₂ (10–100 times present) and biogenic/volcanic CH₄ kept temperatures above freezing."
    },
    deepDive: `
      <h4>Methane as Super-Greenhouse Gas:</h4>
      <p>Methane is ~28 times more potent per molecule than CO₂ over a century. In an anoxic Archean atmosphere, methane's atmospheric residence time was ~10,000 years (compared to ~10 years today), creating a potent thermal shield.</p>
    `,
    eli5: "The baby Sun was 30% weaker than today, which should have turned Earth into a frozen ice cube. But thick blankets of volcano-burped greenhouse gases (carbon dioxide and methane) trapped every bit of heat to keep oceans warm!"
  },
  {
    id: 117,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC"],
    title: "T-Tauri Phase of the Proto-Sun",
    subtitle: "The violent solar wind that cleared the nebular disk",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>T-Tauri Stars:</strong> Pre-main sequence stars (< 10 Ma old) prior to the onset of core hydrogen fusion.</li>
        <li><strong>Extreme Ultraviolet (EUV) & X-rays:</strong> Radiation flux was 100 to 1,000 times higher than the present quiet Sun.</li>
        <li><strong>Super Solar Winds:</strong> Mass loss rates of ~10⁻⁷ to 10⁻⁸ solar masses per year (millions of times stronger than the current solar wind).</li>
        <li><strong>Disk Clearing:</strong> This intense wind blew away all remnant unaccreted gas (H, He) within ~3 to 5 Ma, halting giant planet gas growth and freezing planetary masses in place.</li>
      </ul>
    `,
    deepDive: `
      <h4>Planetary Implications:</h4>
      <p>If gas clearing took 20 Ma instead of 3–5 Ma, Earth might have accreted a massive gas envelope like Neptune. The fast clearance of nebular gas preserved the terrestrial planets as rocky bodies.</p>
    `,
    eli5: "The teenage Sun went through a violent tantrum called the T-Tauri phase. It blasted out gigantic solar hurricanes that swept all remaining free gas right out of the solar system!"
  },
  {
    id: 118,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Chondrule Formation & Flash Melting",
    subtitle: "Millimeter-sized silicate spheres that dominate stony meteorites",
    contentHtml: `
      <p><strong>Chondrules</strong> are millimeter-sized, once-molten spherical droplets composed of olivine, pyroxene, and glass, found in chondritic meteorites.</p>
    `,
    quiz: {
      question: "Petrological textures such as 'Barred Olivine' and 'Porphyritic Pyroxene' in chondrules prove that they experienced:",
      options: [
        "Ultra-slow cooling over millions of years at the base of the mantle",
        "Rapid flash heating to > 1500–1800°C followed by quenching in hours to days",
        "Hydrothermal deposition by boiling brine solutions at 200°C",
        "Sedimentary precipitation in a shallow hypersaline lake"
      ],
      answer: 1,
      rationale: "Barred olivine and radial pyroxene textures can only form by rapid supercooling from a flash-melted liquid droplet (heated to ~1600–1900 K in seconds and cooled at rates of 10–1000 K/hr), likely produced by nebular shock waves."
    },
    deepDive: `
      <h4>Trigger Mechanisms:</h4>
      <p>The origin of the transient flash-heating events remains one of astronomy's greatest questions. Leading models include: nebular shock waves driven by gravitational instability, planetesimal collisions, or magnetic reconnection flares from the young Sun.</p>
    `,
    eli5: "Chondrules are tiny glass and rock droplets that were zapped in space by cosmic flash-heating, melting in seconds and freezing into micro-marbles before they could even hit an asteroid!"
  },
  {
    id: 119,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC"],
    title: "Meteorite Classification Hierarchy",
    subtitle: "Chondrites, Achondrites, Stony-Irons & Irons",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.5; font-size:0.8rem;">
        <li><strong>Chondrites (Undifferentiated, ~86% of falls):</strong>
          <br>• Carbonaceous (CI, CM, CV, CO, CR, CK)
          <br>• Ordinary (H = High iron, L = Low iron, LL = Low iron & low metal)
          <br>• Enstatite (EH, EL: extremely reducing conditions)
        </li>
        <li><strong>Achondrites (Differentiated Crust/Mantle, ~8%):</strong>
          <br>• HED clan: Howardite, Eucrite (basalt), Diogenite (orthopyroxenite) from Vesta
          <br>• SNC clan: Shergottite, Nakhlite, Chassignite from Mars
          <br>• Lunar meteorites (anorthosites)
        </li>
        <li><strong>Stony-Irons (Core-Mantle Boundary, ~1%):</strong>
          <br>• Pallasites (gem olivine crystals in Fe-Ni metal matrix)
          <br>• Mesosiderites (brecciated silicates + metal)
        </li>
        <li><strong>Irons (Differentiated Cores, ~5%):</strong> Hexahedrites, Octahedrites, Ataxites.</li>
      </ul>
    `,
    deepDive: `
      <h4>Metamorphic Grades in Chondrites:</h4>
      <p>Van Schmus and Wood classification uses petrologic types 1 to 6. Types 1–2 experienced aqueous alteration (CI is type 1). Type 3 is pristine (unaltered). Types 4–6 experienced increasing thermal metamorphism (recrystallization of glass into minerals).</p>
    `,
    eli5: "Chondrites are raw space dust clods that never melted. Achondrites are melted volcanic crusts, Stony-Irons are the shiny boundary zones, and Irons are pure melted asteroid cores!"
  },
  {
    id: 120,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Pallasites: The Cosmic Core-Mantle Boundary",
    subtitle: "Magnesium olivine crystals floating in metallic Fe-Ni",
    contentHtml: `
      <p><strong>Pallasites</strong> are spectacular stony-iron meteorites containing large, translucent crystals of yellow-green <strong>forsteritic olivine</strong> embedded in a continuous network of metallic Fe-Ni alloy.</p>
    `,
    quiz: {
      question: "Geochemically and structurally, pallasites are widely interpreted to represent samples of:",
      options: [
        "The frozen core-mantle boundary zone of a differentiated asteroid",
        "The upper continental crust of an ocean-bearing dwarf planet",
        "Unmelted primordial dust from the outer Kuiper Belt",
        "Surface volcanic lava flows erupted on the Moon"
      ],
      answer: 0,
      rationale: "Pallasites represent the transition zone between the molten metallic core and the dense silicate olivine mantle of a differentiated asteroid that was later pulverized by a catastrophic collision."
    },
    deepDive: `
      <h4>Olivine Composition in Pallasites:</h4>
      <p>The olivine is remarkably uniform in composition: Fo₈₈ to Fo₉₂ (forsterite), identical to the mantle olivine expected in deep planetary interiors. The metallic host displays Widmanstätten patterns, indicating very slow cooling under an insulating mantle blanket.</p>
    `,
    eli5: "Pallasites look like stained-glass windows: green olivine gemstones trapped inside solid iron. They are real pieces of the boundary line where a melted asteroid's rocky mantle met its iron core!"
  },
  {
    id: 121,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET"],
    title: "Planetary Accretion Stages",
    subtitle: "From sub-micron dust to 6000 km rocky planets",
    contentHtml: `
      <ol style="margin-left:1.1rem; line-height:1.6; font-size:0.8rem;">
        <li><strong>Stage 1: Dust Coagulation (0 to 10⁴ yr):</strong> Sub-micron grains collide at low relative velocities, sticking via van der Waals forces to form centimeter-to-meter sized pebbles.</li>
        <li><strong>Stage 2: Planetesimal Formation (10⁴ to 10⁵ yr):</strong> Streaming instabilities and gravitational collapse of pebble swarms overcome the 'meter-size barrier', directly forming 10–100 km planetesimals.</li>
        <li><strong>Stage 3: Runaway & Oligarchic Growth (10⁵ to 10⁶ yr):</strong> Largest bodies experience gravitational focusing, growing rapidly into Moon-to-Mars sized planetary embryos (~1000–5000 km).</li>
        <li><strong>Stage 4: Giant Impacts (10 to 100 Ma):</strong> Chaotic, highly energetic collisions between ~50–100 planetary embryos clear the remaining orbits to assemble Earth and Venus.</li>
      </ol>
    `,
    deepDive: `
      <h4>The 'Meter-Size Barrier':</h4>
      <p>Objects ~1 meter in size experience strong aerodynamic gas drag, causing their orbits to decay rapidly into the proto-Sun in just ~100 years! <strong>Streaming instability</strong> solves this paradox by concentrating pebbles into dense clouds that collapse gravitationally into 100 km planetesimals instantly.</p>
    `,
    eli5: "Dust sticks together by static cling into pebbles. Pebble clouds collapse under gravity into asteroids. Asteroids smash together like demolition derbies until only 4 big rocky planets survive!"
  },
  {
    id: 122,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "UPSC"],
    title: "Titius-Bode Law",
    subtitle: "The geometric semi-major axis formula that predicted the Asteroid Belt",
    contentHtml: `
      <p>The <strong>Titius-Bode Law</strong> is an empirical geometric relationship for the semi-major axis (distance in AU) of planets from the Sun:</p>
      <div style="background:rgba(0,0,0,0.4); padding:6px; border-radius:4px; font-family:monospace; color:#38bdf8; font-size:0.85rem; margin:6px 0;">
        a = 0.4 + 0.3 × 2ⁿ  (for n = -∞, 0, 1, 2, 3, 4, ...)
      </div>
    `,
    quiz: {
      question: "Which major solar system object was discovered at a distance of 2.8 AU (n = 3) following the mathematical prediction of Bode's Law in 1801?",
      options: [
        "Dwarf Planet Ceres in the Asteroid Belt",
        "Neptune",
        "Pluto",
        "Uranus"
      ],
      answer: 0,
      rationale: "Bode's law predicted a missing planet at a = 0.4 + (0.3 × 2³) = 2.8 AU. In 1801, Giuseppe Piazzi discovered Ceres (the largest asteroid / dwarf planet) at 2.77 AU, confirming the gap was populated by the Asteroid Belt."
    },
    deepDive: `
      <h4>Failure of Bode's Law:</h4>
      <p>While Bode's law worked remarkably well from Mercury through Uranus (predicted 19.6 AU, actual 19.2 AU), it completely failed for <strong>Neptune</strong> (predicted 38.8 AU, actual 30.1 AU) and Pluto (predicted 77.2 AU, actual 39.5 AU), proving it is a byproduct of orbital resonance, not an immutable cosmic law.</p>
    `,
    eli5: "Bode noticed a neat number trick where doubling numbers predicted every planet's distance from the Sun. It had a blank spot at 2.8 AU, and when astronomers pointed their telescopes there, they found Ceres and the Asteroid Belt!"
  },
  {
    id: 123,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET"],
    title: "Kirkwood Gaps in the Asteroid Belt",
    subtitle: "Orbital resonances driven by Jupiter's gravitational perturbations",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Kirkwood Gaps:</strong> Distinct dips/depletions in the distribution of asteroid semi-major axes within the main belt (between 2.1 and 3.3 AU).</li>
        <li><strong>Orbital Resonances with Jupiter:</strong> Occur at integer orbital period ratios:
          <br>• <strong>3:1 Resonance (~2.50 AU):</strong> Asteroid orbits 3 times for every 1 Jupiter orbit.
          <br>• <strong>5:2 Resonance (~2.82 AU)</strong>
          <br>• <strong>7:3 Resonance (~2.95 AU)</strong>
          <br>• <strong>2:1 Resonance (~3.28 AU):</strong> Marks the outer boundary of the main belt.
        </li>
      </ul>
    `,
    deepDive: `
      <h4>How Meteorites Reach Earth:</h4>
      <p>Asteroids colliding in the main belt drift into Kirkwood gaps via the <strong>Yarkovsky effect</strong> (thermal photon thrust). Once in resonance, repeated gravitational kicks from Jupiter pump up their orbital eccentricities until they cross Earth's orbit as meteoroids!</p>
    `,
    eli5: "Kirkwood gaps are empty lanes in the asteroid belt. Every time an asteroid tries to park in those lanes, giant Jupiter's gravity gives it a rhythmic shove like a playground swing until it gets kicked out toward Earth!"
  },
  {
    id: 124,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "SNC Meteorites: Rocks from Mars",
    subtitle: "Shergottite, Nakhlite & Chassignite young crystallization ages",
    contentHtml: `
      <p>The <strong>SNC clan</strong> (Shergottite, Nakhlite, Chassignite) consists of achondritic igneous rocks ejected from the surface of Mars by giant hypervelocity impacts.</p>
    `,
    quiz: {
      question: "Which definitive evidence proved beyond doubt that SNC meteorites originate from the planet Mars rather than ancient asteroids?",
      options: [
        "Noble gas and nitrogen isotopic ratios trapped in impact glass match the Martian atmosphere measured by the Viking landers",
        "They are 4.56 Ga old and identical to primitive carbonaceous chondrites",
        "They contain abundant fossils of macroscopic marine ammonites",
        "They lack any silicates and are made of pure metallic gold"
      ],
      answer: 0,
      rationale: "Shock-melted glass (e.g., in the EET A79001 shergottite) trapped tiny pockets of ambient atmosphere. The ratios of ⁴⁰Ar/³⁶Ar, ¹²⁹Xe/¹³²Xe, and N₂ matched the in-situ atmospheric measurements of the Viking 1 and 2 Martian landers with 100% fidelity."
    },
    deepDive: `
      <h4>Young Crystallization Ages:</h4>
      <p>Unlike ancient 4.5 Ga asteroids, many shergottites have young crystallization ages of <strong>180 to 575 Ma</strong>. Only a large, volcanically active planetary body like Mars could produce basaltic magma so recently in solar system history!</p>
    `,
    eli5: "When an asteroid slammed into Mars, it melted tiny glass beads that trapped gulps of Martian air. When those rocks fell to Earth, scientists analyzed the trapped bubbles and found they matched NASA's Martian rover air tests!"
  },
  {
    id: 125,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC"],
    title: "Asteroid 4 Vesta & the HED Achondrite Clan",
    subtitle: "A differentiated miniature protoplanet in the Asteroid Belt",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Howardite-Eucrite-Diogenite (HED):</strong> Represent a complete volcanic and plutonic crustal sequence from Asteroid 4 Vesta (~525 km diameter), confirmed by NASA's Dawn spacecraft.</li>
        <li><strong>Eucrites:</strong> Basalts and gabbros composed of pigeonite and calcic plagioclase (Vesta's volcanic upper crust).</li>
        <li><strong>Diogenites:</strong> Coarse-grained orthopyroxenites (cumulate rocks from magma chambers in Vesta's lower crust).</li>
        <li><strong>Howardites:</strong> Regolith breccias formed by meteorite impacts mixing eucrite and diogenite fragments on Vesta's surface.</li>
      </ul>
    `,
    deepDive: `
      <h4>Vesta's Rapid Differentiation:</h4>
      <p>Hf-W and ²⁶Al dating proves Vesta completed its iron core segregation, magma ocean, and basaltic crust formation in less than <strong>3 to 4 million years</strong> after CAIs!</p>
    `,
    eli5: "Asteroid Vesta is a frozen mini-Earth! Eucrites are its volcanic lava crust, Diogenites are its deep magma crystals, and Howardites are the pulverized crushed gravel from its surface!"
  },
  {
    id: 126,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Pre-Solar Grains: Stardust in Chondrites",
    subtitle: "Pristine minerals that predate our Sun",
    contentHtml: `
      <p><strong>Pre-solar grains</strong> are microscopic refractory crystals that condensed in the stellar winds of asymptotic giant branch (AGB) stars and supernovae <em>before</em> the birth of our solar system, surviving inside carbonaceous chondrites without melting.</p>
    `,
    quiz: {
      question: "Which pre-solar mineral grain is famous for containing extreme non-solar isotopic anomalies such as pure ²²Ne (Neon-E) and anomalous ¹²C/¹³C ratios?",
      options: [
        "Silicon Carbide (SiC / Moissanite)",
        "Halite (NaCl)",
        "Calcite (CaCO₃)",
        "Gypsum"
      ],
      answer: 0,
      rationale: "Pre-solar Silicon Carbide (SiC), diamond, and graphite grains preserve wildly non-solar isotopic ratios (e.g., ¹²C/¹³C from 2 to 7000 vs solar 89), proving they formed directly in distinct ancient red giant and supernova outflows before the Sun existed."
    },
    deepDive: `
      <h4>Extraction Technique:</h4>
      <p>Edward Anders described extracting pre-solar grains as 'burning down the haystack to find the needle': kilograms of carbonaceous chondrite are dissolved in boiling HF and HCl. Only diamond, SiC, and refractory oxides survive this acid digestion.</p>
    `,
    eli5: "Before our Sun was born, ancient dying stars puffed out real microscopic stardust crystals (like silicon carbide). These tiny specks floated through space, got trapped in meteorites, and are older than our entire solar system!"
  },
  {
    id: 127,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC"],
    title: "Late Heavy Bombardment (LHB) & The Nice Model",
    subtitle: "The ~3.9 Ga spike in lunar cratering and giant planet migration",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Lunar Cataclysm (~3.9–3.8 Ga):</strong> Apollo lunar samples showed an apparent spike in impact melt ages at ~3.9 Ga, corresponding to the excavation of the giant lunar impact basins (Imbrium, Serenitatis, Orientale).</li>
        <li><strong>The Nice Model (Planetary Migration):</strong>
          <br>• Outer giant planets originally formed in a more compact configuration (5.5 to 17 AU).
          <br>• Jupiter and Saturn crossed the <strong>2:1 Mean-Motion Orbital Resonance</strong>.
          <br>• This destabilized Uranus and Neptune, flinging Neptune into the primordial Kuiper Belt and scattering millions of comets and asteroids toward the inner planets!
        </li>
      </ul>
    `,
    deepDive: `
      <h4>Impact on Earth:</h4>
      <p>During the LHB, Earth received ~20–50 times more impacts than the Moon due to its larger gravitational cross-section. These impacts would have repeatedly vaporized the surface oceans and melted the upper crust, repeatedly sterilizing early life.</p>
    `,
    eli5: "Jupiter and Saturn got into an orbital wrestling match that sent Neptune careening like a bowling ball into the outer ice belt. Millions of giant comets and asteroids showered the Moon and Earth around 3.9 billion years ago!"
  },
  {
    id: 128,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Enstatite Chondrites & Earth's Isotopic Twins",
    subtitle: "Why EH and EL chondrites share identical isotopic DNA with Earth",
    contentHtml: `
      <p>While carbonaceous chondrites match Earth's chemical ratios, <strong>Enstatite Chondrites (EC)</strong> are Earth's isotopic twins across virtually all elements (O, Ti, Cr, Ni, Ca, Mo, Ru).</p>
    `,
    quiz: {
      question: "What unique geochemical condition characterized the formation of enstatite chondrites in the innermost solar nebula?",
      options: [
        "Extremely reducing, oxygen-depleted conditions with high C/O ratio (~1.0)",
        "Extremely oxidizing conditions with excess free ozone",
        "Low temperature crystallization in methane ice lakes",
        "Deep subduction zone metamorphism in an island arc"
      ],
      answer: 0,
      rationale: "Enstatite chondrites formed under extremely reducing (low oxygen fugacity) conditions. Silicon was forced into metallic iron-nickel alloys, and elements normally lithophile (like Ca, Mg, Mn) formed exotic sulfides (e.g., Oldhamite CaS, Niningerite MgS)."
    },
    deepDive: `
      <h4>The Earth Formation Enigma:</h4>
      <p>Because enstatite chondrites match Earth in mass-independent isotope ratios (Δ¹⁷O, ε⁵⁴Cr, ε⁵⁰Ti), modern models propose that Earth was primarily built from local reducing enstatite-like material, with a minor wet carbonaceous veneer added later.</p>
    `,
    eli5: "Enstatite chondrites formed where oxygen was so scarce that silicon was forced into metal! Their isotopic fingerprints match Earth better than any other meteorite in the universe!"
  },
  {
    id: 129,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC"],
    title: "Terrestrial Planets: Comparative Anatomy",
    subtitle: "Core mass fractions, atmospheric densities, and planetary dynamos",
    contentHtml: `
      <table style="width:100%; font-size:0.75rem; border-collapse:collapse; margin-top:4px;">
        <tr style="border-bottom:1px solid #333; color:#9da1b4;">
          <th style="padding:3px;">Planet</th>
          <th style="padding:3px;">Density (g/cm³)</th>
          <th style="padding:3px;">Core Mass %</th>
          <th style="padding:3px;">Surface P</th>
          <th style="padding:3px;">Global Dynamo</th>
        </tr>
        <tr>
          <td style="padding:3px; font-weight:bold; color:#f59e0b;">Mercury</td>
          <td style="padding:3px;">5.43 (Uncomp ~5.3)</td>
          <td style="padding:3px; color:#f43f5e;">~70% (Giant core)</td>
          <td style="padding:3px;">~10⁻¹⁴ bar</td>
          <td style="padding:3px; color:#10b981;">Yes (Weak)</td>
        </tr>
        <tr>
          <td style="padding:3px; font-weight:bold; color:#ec4899;">Venus</td>
          <td style="padding:3px;">5.24 (Uncomp ~4.0)</td>
          <td style="padding:3px;">~32%</td>
          <td style="padding:3px; color:#f43f5e;">92 bar (CO₂)</td>
          <td style="padding:3px; color:#f43f5e;">No</td>
        </tr>
        <tr>
          <td style="padding:3px; font-weight:bold; color:#38bdf8;">Earth</td>
          <td style="padding:3px;">5.51 (Uncomp ~4.1)</td>
          <td style="padding:3px;">~32.5%</td>
          <td style="padding:3px;">1 bar (N₂-O₂)</td>
          <td style="padding:3px; color:#10b981;">Yes (Strong)</td>
        </tr>
        <tr>
          <td style="padding:3px; font-weight:bold; color:#f43f5e;">Mars</td>
          <td style="padding:3px;">3.93 (Uncomp ~3.7)</td>
          <td style="padding:3px;">~18–20%</td>
          <td style="padding:3px;">0.006 bar (CO₂)</td>
          <td style="padding:3px; color:#f43f5e;">No (Crustal only)</td>
        </tr>
      </table>
    `,
    deepDive: `
      <h4>Mercury's Giant Iron Core:</h4>
      <p>Mercury's high uncompressed density proves its core takes up ~70% of the planet's mass (and ~85% of its radius). This is explained by: (1) giant impact stripping of its silicate mantle, or (2) high-temperature evaporation of silicates in the inner solar nebula.</p>
    `,
    eli5: "Mercury is basically a giant cannonball with a tiny sliver of rock on outside. Venus is Earth's suffocating twin with 92 atmospheres of crushing carbon dioxide. Mars is a small, cold desert planet whose magnetic dynamo died billions of years ago!"
  },
  {
    id: 130,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Lunar Magma Ocean & Anorthositic Highlands",
    subtitle: "Why the Moon's crust is made of floating plagioclase feldspar",
    contentHtml: `
      <p>The bright lunar highlands are dominated by <strong>anorthosite</strong> (> 90% calcic plagioclase, <em>anorthite</em>).</p>
    `,
    quiz: {
      question: "According to the Lunar Magma Ocean model, how did the pure anorthosite crust of the lunar highlands form?",
      options: [
        "Low-density plagioclase crystals floated to the top of the molten magma ocean while denser olivine and pyroxene sank to the bottom",
        "Granitic continental crust was deposited by massive lunar rivers",
        "Volcanic carbonatite ash was blown into the upper atmosphere",
        "Pure calcium metal was reduced by solar wind hydrogen"
      ],
      answer: 0,
      rationale: "As the global Lunar Magma Ocean crystallized, dense olivine and pyroxene sank to form the lunar mantle. Once ~75–80% of magma solidified, plagioclase feldspar began crystallizing. Plagioclase had a lower density than the iron-rich residual melt, so it floated upward to form the primary anorthositic flotation crust."
    },
    deepDive: `
      <h4>Europium Anomaly Proof:</h4>
      <p>Lunar highland anorthosites have a strong <strong>positive Europium anomaly</strong> (Eu²⁺ replaces Ca²⁺ in plagioclase). In contrast, younger lunar mare basalts have a pronounced <strong>negative Europium anomaly</strong>, proving their mantle source was depleted in plagioclase when the highlands crust floated away!</p>
    `,
    eli5: "When the molten Moon was a ball of glowing lava, heavy dark minerals sank like stones, but lightweight white plagioclase crystals floated like icebergs to the surface, creating the bright white Moon rocks we see today!"
  },
  {
    id: 131,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC"],
    title: "Sm-Nd & Lu-Hf Cosmochemical Systematics",
    subtitle: "The reference Chondritic Uniform Reservoir (CHUR)",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>CHUR (Chondritic Uniform Reservoir):</strong> Model assumption that bulk Earth has refractory lithophile element ratios identical to chondritic meteorites.
          <br>• For Sm-Nd: (¹⁴⁷Sm/¹⁴⁴Nd)<sub>CHUR</sub> = 0.1967; (¹⁴³Nd/¹⁴⁴Nd)<sub>CHUR, present</sub> = 0.512638.
          <br>• For Lu-Hf: (¹⁷⁶Lu/¹⁷⁷Hf)<sub>CHUR</sub> = 0.0336.
        </li>
        <li><strong>Epsilon Notation (εNd):</strong>
          <br><code>εNd(t) = [ ( (¹⁴³Nd/¹⁴⁴Nd)<sub>sample</sub> / (¹⁴³Nd/¹⁴⁴Nd)<sub>CHUR</sub> ) - 1 ] × 10⁴</code>
        </li>
        <li><strong>Positive εNd (> 0):</strong> Depleted mantle (melt extraction left high Sm/Nd).</li>
        <li><strong>Negative εNd (< 0):</strong> Enriched continental crust (low Sm/Nd).</li>
      </ul>
    `,
    deepDive: `
      <h4>Decay Constants for Exams:</h4>
      <p>¹⁴⁷Sm → ¹⁴³Nd + α (Half-life = 106 Ga, λ = 6.54 × 10⁻¹² yr⁻¹). Unlike Rb-Sr, Sm and Nd are both light REEs and highly resistant to metamorphic resetting and weathering.</p>
    `,
    eli5: "CHUR is our baseline standard: what Earth would look like if it was pure well-stirred chondrite dough. Positive epsilon means the rock came from a depleted mantle that already gave away its crust!"
  },
  {
    id: 132,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Extinct Radioactivity: 26Al as Primary Heat Engine",
    subtitle: "Why miniature asteroids melted in the first 2 million years",
    contentHtml: `
      <p><strong>²⁶Al</strong> decays to <strong>²⁶Mg</strong> via positron emission and electron capture with a half-life of <strong>717,000 years</strong>.</p>
    `,
    quiz: {
      question: "What critical observation in CAIs demonstrated that ²⁶Al was alive in the early solar system rather than inherited as dead daughter ²⁶Mg?",
      options: [
        "A linear isochron correlation between excess ²⁶Mg/²⁴Mg and parent Al/Mg ratio (²⁷Al/²⁴Mg)",
        "The complete absence of magnesium in all solar system meteorites",
        "Presence of liquid water within diamond inclusions",
        "Equal amounts of ²⁶Al and ²⁶Mg in all modern volcanic rocks"
      ],
      answer: 0,
      rationale: "Lee, Papanastassiou, and Wasserburg (1976) showed that in CAIs, excess radiogenic ²⁶Mg/²⁴Mg correlates linearly with ²⁷Al/²⁴Mg across different minerals, yielding an initial ratio (²⁶Al/²⁷Al)₀ ≈ 5.2 × 10⁻⁵. This proved ²⁶Al was alive in the minerals when they crystallized."
    },
    deepDive: `
      <h4>Supernova Injection:</h4>
      <p>Because ²⁶Al has such a short half-life (0.72 Ma), it must have been synthesized in a nearby core-collapse supernova or asymptotic giant branch (AGB) star and injected into the presolar molecular cloud just ~0.1–1 Ma before collapse!</p>
    `,
    eli5: "Aluminum-26 was an explosive nuclear battery that burned out completely in a few million years. Because it was so super-hot, any baby asteroid bigger than a city melted from the inside out!"
  },
  {
    id: 133,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC"],
    title: "Acasta Gneiss & Earth's Oldest Intact Rocks",
    subtitle: "The 4.03 Ga preserved crustal benchmark in NW Canada",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Acasta Gneiss (Slave Craton, Canada):</strong> Oldest known intact rock complex on Earth: <strong>4.031 ± 0.003 Ga</strong> (U-Pb zircon).</li>
        <li><strong>Petrology:</strong> Tonalite, trondhjemite, and granodiorite (TTG) gneisses, along with amphibolites.</li>
        <li><strong>Isua Supracrustal Belt (Greenland):</strong> Oldest volcano-sedimentary succession: <strong>~3.7–3.8 Ga</strong>. Famous for hosting early Banded Iron Formations (BIFs) and contested carbon isotope biosignatures.</li>
        <li><strong>Nuvvuagittuq Greenstone Belt (Canada):</strong> Contested faux-amphibolite dates claim ages up to ~4.28 Ga using ¹⁴²Nd systematics.</li>
      </ul>
    `,
    deepDive: `
      <h4>Rock vs Mineral distinction:</h4>
      <p>Remember this classic exam trap: <strong>Oldest Mineral</strong> = Jack Hills Zircon (~4.404 Ga, Australia). <strong>Oldest Rock</strong> = Acasta Gneiss (~4.031 Ga, Canada)!</p>
    `,
    eli5: "Jack Hills zircons are the oldest single grains (sand grains in a younger rock). Acasta Gneiss is the oldest complete slab of rock you can hammer off a Canadian cliff face: 4.03 billion years old!"
  },
  {
    id: 134,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "142Nd Anomalies & Early Earth Differentiation",
    subtitle: "Evidence of mantle differentiation within the first 30 million years",
    contentHtml: `
      <p>The <strong>¹⁴⁶Sm – ¹⁴²Nd system</strong> (half-life = 68 Ma) tracks differentiation events that occurred exclusively in the first ~300 Ma of the solar system.</p>
    `,
    quiz: {
      question: "All modern terrestrial rocks have an excess of ¹⁴²Nd (ε¹⁴²Nd ≈ +18 ppm) relative to chondritic meteorites. What does this signify?",
      options: [
        "Earth's accessible silicate mantle segregated from a low Sm/Nd reservoir within the first 30 Ma of solar system history",
        "Samarium is volatile and boiled away during atmospheric escape",
        "Neodymium does not exist in meteorite samples",
        "Earth formed 2 billion years after chondritic meteorites"
      ],
      answer: 0,
      rationale: "The +18 ppm excess of ¹⁴²Nd proves that the accessible silicate mantle experienced a major differentiation event (such as magma ocean crystallization) while ¹⁴⁶Sm was alive (< 30 Ma), leaving the upper mantle with a higher-than-chondritic Sm/Nd ratio."
    },
    deepDive: `
      <h4>Boyet & Carlson (2005) Paradigm:</h4>
      <p>This discovery showed that the accessible Earth is not strictly chondritic in Sm/Nd, implying either: (1) a hidden enriched reservoir exists in the deep D″ layer at the core-mantle boundary, or (2) Earth's building blocks had non-chondritic nucleosynthetic composition.</p>
    `,
    eli5: "A tiny 18 parts-per-million difference in Neodymium-142 proves Earth's entire mantle separated into layers while the planet was still brand new and dripping wet with magma!"
  },
  {
    id: 135,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC"],
    title: "Core Composition & The Light Element Paradox",
    subtitle: "Why the core is ~10% less dense than pure Fe-Ni",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Birch's Law & PREM:</strong> Seismic wave velocities and equation-of-state measurements prove the outer liquid core is <strong>~8–10% less dense</strong> than pure liquid iron at core pressures (~136–330 GPa).</li>
        <li><strong>The Inner Solid Core:</strong> Is ~3–5% less dense than pure solid iron.</li>
        <li><strong>Candidate Light Elements in Core:</strong>
          <br>• <strong>Silicon (Si):</strong> Favored under reducing accretion conditions.
          <br>• <strong>Oxygen (O):</strong> Readily dissolves in Fe at ultra-high temperatures (> 3000 K).
          <br>• <strong>Sulfur (S):</strong> Forms low-melting eutectic iron-sulfide liquid.
          <br>• <strong>Carbon (C) & Hydrogen (H).</strong>
        </li>
      </ul>
    `,
    deepDive: `
      <h4>Inner Core Crystallization:</h4>
      <p>As the inner core freezes out nearly pure Fe-Ni crystals, it expels light elements into the overlying liquid outer core. This buoyant chemical release drives <strong>compositional convection</strong>, which powers the geodynamo that sustains Earth's magnetic shield!</p>
    `,
    eli5: "Earth's core isn't 100% pure heavy iron. About 10% of it is made of lighter elements like sulfur, silicon, and oxygen dissolved like salt in soup. As pure iron freezes into the solid center, it stirs the outer soup and powers our magnetic field!"
  },
  {
    id: 136,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "TTG Suites & Earliest Continental Crust",
    subtitle: "Tonalite-Trondhjemite-Granodiorite genesis in the Archaean",
    contentHtml: `
      <p>Over 80% of preserved Archaean continental crust is composed of grey gneisses belonging to the <strong>TTG suite (Tonalite-Trondhjemite-Granodiorite)</strong>.</p>
    `,
    quiz: {
      question: "What diagnostic geochemical signature characterizes TTG magmas, proving they were generated by partial melting of hydrated basalt at depths where garnet was stable in the residue?",
      options: [
        "Extremely high Sr/Y and La/Yb ratios with strong heavy REE (HREE) depletion and no negative Eu anomaly",
        "Strong negative Ce anomaly with low silica (< 40%)",
        "Enriched heavy REEs with flat chondritic profiles",
        "Zero sodium content and high potassium (K₂O > 8%)"
      ],
      answer: 0,
      rationale: "Garnet strongly partitions heavy rare earth elements (HREE: Yb, Lu) and Yttrium. When hydrated basalt melts at depths > 30–40 km (P > 1.2–1.5 GPa), garnet remains in the residue, leaving TTG melts heavily depleted in HREE (steep REE slope, very high La/Yb and Sr/Y)."
    },
    deepDive: `
      <h4>Absence of Negative Eu Anomaly:</h4>
      <p>Because melting occurred at high pressure outside the stability field of plagioclase (or where plagioclase broke down into garnet and clinopyroxene), TTGs lack the negative Eu anomaly that characterizes modern Phanerozoic granites.</p>
    `,
    eli5: "Archaean granite continents were born by melting wet, sinking basaltic seafloors deep underground. Garnet crystals stayed behind and hoarded all the heavy rare earth elements, leaving the fresh continent with a telltale geochemical fingerprint!"
  },
  {
    id: 137,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC"],
    title: "Komatiites: Ultra-Hot Archaean Magmatism",
    subtitle: "High-Mg volcanic rocks that disappeared after the Proterozoic",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Komatiite Definition:</strong> Ultramafic volcanic rock containing <strong>MgO > 18 wt%</strong> (often up to 30 wt% MgO). First described from the Komati River, Barberton Greenstone Belt, South Africa.</li>
        <li><strong>Spinifex Texture:</strong> Skeletal, bladed, intersecting crystals of olivine and pyroxene caused by rapid thermal quenching of superheated ultramafic lava.</li>
        <li><strong>Eruption Temperature:</strong> Exceeded <strong>1550°C to 1650°C</strong> (compared to modern basalts at ~1150°C to 1250°C).</li>
        <li><strong>Significance:</strong> Requires an Archaean mantle potential temperature ~250°C to 300°C hotter than today!</li>
      </ul>
    `,
    deepDive: `
      <h4>Economic Link:</h4>
      <p>Komatiite lava channels frequently thermal-erode and melt underlying sulfidic shales, precipitating massive <strong>magmatic Ni-Cu-PGE sulfide deposits</strong> (e.g., Kambalda in Western Australia).</p>
    `,
    eli5: "Archaean Earth was so hot that pure mantle rock could melt and erupt at the surface as komatiite lava over 1600°C! As it cooled in seconds, olivine crystals shot out like spiky spinifex grass needles!"
  },
  {
    id: 138,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Atmospheric Escape: Jeans vs Hydrodynamic Escape",
    subtitle: "How light gases leak from planetary gravity wells",
    contentHtml: `
      <p>Atmospheric escape determines whether a planet retains its atmosphere over billions of years.</p>
    `,
    quiz: {
      question: "According to Jeans escape physics, a gas species will be permanently retained in a planetary atmosphere over geological time if its root-mean-square thermal velocity (v_th) is:",
      options: [
        "Less than approximately 1/6th of the planetary escape velocity (v_th < v_esc / 6)",
        "Greater than twice the speed of light",
        "Exactly equal to the planetary rotational velocity",
        "Higher than the solar escape velocity at 1 AU"
      ],
      answer: 0,
      rationale: "Due to the Maxwell-Boltzmann tail distribution, if the mean thermal velocity of a gas molecule exceeds ~15–20% of escape velocity (v_th > v_esc / 6), the high-energy tail readily escapes, stripping the gas completely in less than 1 billion years."
    },
    deepDive: `
      <h4>Hydrodynamic Blow-Off:</h4>
      <p>In young planets exposed to intense solar EUV flux, light gases (H₂) escape so rapidly as a collective fluid flow that they drag along heavier species (noble gases, nitrogen, and oxygen) in a process called <strong>hydrodynamic drag escape</strong>.</p>
    `,
    eli5: "Gas atoms buzz around like excited bees. If their top speed is more than one-sixth of the rocket escape speed, the fastest bees constantly jump out of Earth's gravitational yard and fly away into space!"
  },
  {
    id: 139,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET", "UPSC"],
    title: "Origin of Life: Prebiotic Milestones",
    subtitle: "From Miller-Urey synthesis to 3.7 Ga biosignatures",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.5; font-size:0.8rem;">
        <li><strong>Miller-Urey Experiment (1953):</strong> Electric discharge through reducing gas mixture (H₂O, CH₄, NH₃, H₂) synthesized 20+ amino acids and organic compounds.</li>
        <li><strong>Deep-Sea Hydrothermal Vents:</strong> Alkaline serpentinizing hydrothermal mounds (Lost City type) provide chemical proton gradients (pH) and Fe-S mineral catalysts for prebiotic metabolism.</li>
        <li><strong>Oldest Microfossils:</strong> Apex Chert (contested ~3.46 Ga) and Strelley Pool stromatolites (~3.43 Ga), Pilbara Craton, Australia.</li>
        <li><strong>Oldest Carbon Biosignature:</strong> Graphitic carbon in Isua metasediments (Greenland, ~3.7 Ga) with light δ¹³C values (~ -20‰ to -30‰) indicative of enzymatic RuBisCO carbon fixation.</li>
      </ul>
    `,
    deepDive: `
      <h4>Carbon Isotope Fractionation:</h4>
      <p>Inorganic marine carbonate precipitates with δ¹³C ≈ 0‰. Autotrophic organisms using the Calvin cycle preferentially consume lighter ¹²C, producing organic carbon with strongly depleted δ¹³C (-15‰ to -35‰).</p>
    `,
    eli5: "Life loves light carbon (¹²C) because it takes less energy to chew. When scientists find 3.7-billion-year-old graphite with super-light carbon-12 fingerprints in Greenland, that's the calling card of ancient microbes!"
  },
  {
    id: 140,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Great Oxidation Event (GOE) & Mass-Independent Sulfur",
    subtitle: "The irreversible disappearance of MIF-S at 2.4 Ga",
    contentHtml: `
      <p>The transition from an anoxic atmosphere to one with free oxygen is recorded by <strong>Mass-Independent Fractionation of Sulfur isotopes (MIF-S)</strong>.</p>
    `,
    quiz: {
      question: "Why did Mass-Independent Fractionation of Sulfur (Δ³³S ≠ 0) completely disappear from sedimentary rock records around 2.45 to 2.40 Ga?",
      options: [
        "Accumulation of ozone (O₃) in the atmosphere shielded volcanic SO₂ from ultraviolet (UV) photolysis",
        "Volcanoes stopped erupting sulfur into the atmosphere",
        "All sulfur on Earth sank into the iron core",
        "Global glaciations froze all chemical reactions in the atmosphere"
      ],
      answer: 0,
      rationale: "MIF-S (Δ³³S anomalies) requires unattenuated solar UV photolysis (< 200 nm) of volcanic SO₂ gas in a completely oxygen-free atmosphere (O₂ < 10⁻⁵ PAL). The rise of biogenic O₂ created an ozone (O₃) screen that blocked UV light, terminating MIF-S permanently around 2.4 Ga."
    },
    deepDive: `
      <h4>Detrital Uranyl Proof:</h4>
      <p>Before the GOE (2.4 Ga), sediments contain rounded, water-transported pebbles of <strong>uraninite (UO₂), pyrite (FeS₂), and siderite (FeCO₃)</strong>. In the presence of even trace oxygen, uraninite oxidizes to soluble U⁶⁺ and dissolves completely, proving ancient rivers ran under anoxic skies!</p>
    `,
    eli5: "Before 2.4 billion years ago, raw UV light from space hit volcanic gases and produced a strange sulfur fingerprint (MIF-S). When cyanobacteria made enough oxygen to form an ozone sunscreen, that cosmic sulfur fingerprint vanished forever!"
  },
  {
    id: 141,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC"],
    title: "Plate Tectonics vs. Stagnant Lid Regimes",
    subtitle: "How did early Earth lose its tremendous internal heat?",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Stagnant Lid Tectonics:</strong> The outer lithosphere remains a single, unbroken rigid shell. Heat escapes via giant mantle plumes, 'heat-pipe' volcanism, and conduction (modern Mars and Venus).</li>
        <li><strong>Mobile Lid (Plate Tectonics):</strong> Subduction of cold oceanic lithosphere into the deep mantle.</li>
        <li><strong>Onset of Modern Plate Tectonics:</strong> Fiercely debated! Most geologists date global subduction between <strong>~3.0 Ga and ~2.5 Ga</strong> based on:
          <br>• First appearance of high-pressure metamorphic rocks (blueschists and eclogites).
          <br>• Preservation of bona fide ophiolite complexes.
          <br>• Major peak in crustal zircon formation.
        </li>
      </ul>
    `,
    deepDive: `
      <h4>Why Archaean Subduction was Difficult:</h4>
      <p>A hotter Archaean mantle produced thick oceanic crust (> 20 km vs 7 km today) via extensive partial melting. Thick oceanic crust is highly buoyant and resists subduction until it transforms into dense eclogite.</p>
    `,
    eli5: "Early Earth was probably covered by one giant rigid shell like a cracked egg (stagnant lid), shooting out heat through volcanic pipes. It took over a billion years for the crust to cool and start diving down into subduction trenches!"
  },
  {
    id: 142,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Origin of the Geodynamo & Planetary Magnetism",
    subtitle: "Thermal vs compositional convection inside the molten outer core",
    contentHtml: `
      <p>Earth's global dipole magnetic field is generated by a self-exciting dynamo in the liquid iron outer core.</p>
    `,
    quiz: {
      question: "Which of the following conditions is mandatory to sustain an active planetary geodynamo?",
      options: [
        "An electrically conducting liquid layer undergoing rapid convection, influenced by Coriolis forces from planetary rotation",
        "A completely solid crystalline iron core with zero internal convection",
        "A thick crust made exclusively of ferromagnetic magnetite crystals",
        "A runaway greenhouse atmosphere rich in sulfur dioxide"
      ],
      answer: 0,
      rationale: "A planetary dynamo requires: (1) an electrically conducting fluid (liquid iron-nickel), (2) vigorous thermal and compositional convection exceeding adiabatic heat conduction, and (3) planetary rotation to provide Coriolis force to organize convection into helical convective columns."
    },
    deepDive: `
      <h4>Why Venus Lacks an Intrinsic Dynamo:</h4>
      <p>Venus is nearly identical in size and core mass to Earth, yet has zero intrinsic magnetic field. Why? Venus lacks plate tectonics to cool its mantle from above. Without efficient core-mantle heat extraction, thermal convection in its core shut down!</p>
    `,
    eli5: "To make a planet-sized magnetic shield, you need three things: a spinning planet, liquid metal that conducts electricity, and heat boiling from below to stir the metal into swirling whirlpools!"
  },
  {
    id: 143,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["CSIR-NET", "UPSC"],
    title: "The Oort Cloud vs. Kuiper Belt",
    subtitle: "Long-period vs short-period cometary reservoirs",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Kuiper Belt (30 to 50 AU):</strong>
          <br>• Flat, donut-shaped disk aligned with the ecliptic plane.
          <br>• Source of <strong>Short-Period Comets</strong> (orbital period < 200 years, e.g., Comet Halley).
          <br>• Contains dwarf planets: Pluto, Eris, Haumea, Makemake.
        </li>
        <li><strong>Oort Cloud (2,000 to 100,000 AU):</strong>
          <br>• Vast, spherical icy shell extending nearly halfway to Proxima Centauri (~1–2 light years).
          <br>• Source of <strong>Long-Period Comets</strong> (periods > 200 to millions of years, e.g., Hale-Bopp).
          <br>• Formed by icy planetesimals ejected from the giant planet region by Jupiter and Saturn.
        </li>
      </ul>
    `,
    deepDive: `
      <h4>Perturbation Triggers:</h4>
      <p>Oort cloud comets are so weakly bound gravitationally that passing stars, giant molecular clouds, and galactic tidal forces nudge them out of deep freeze, sending them diving toward the Sun.</p>
    `,
    eli5: "The Kuiper belt is an icy asteroid belt right behind Neptune that gives us short-orbit comets. The Oort cloud is a giant fuzzy bubble of trillions of frozen comets wrapping the outer edge of our entire solar system!"
  },
  {
    id: 144,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Crater Density & Age Dating of Planetary Surfaces",
    subtitle: "Crater Size-Frequency Distribution (CSFD) on the Moon & Mars",
    contentHtml: `
      <p>Without returning rock samples to a lab, planetary surface ages are determined using <strong>impact crater counting (CSFD)</strong>.</p>
    `,
    quiz: {
      question: "On a planetary surface lacking active plate tectonics and liquid water erosion, a geological unit with a higher density of impact craters is:",
      options: [
        "Older and has been exposed to the cosmic impact flux for a longer time",
        "Much younger and formed by recent volcanic eruptions",
        "Composed of soft, unconsolidated sediment that repels impacts",
        "Located at a higher elevation on a mountain summit"
      ],
      answer: 0,
      rationale: "Impact cratering is a cumulative Poisson process. Older planetary surfaces accumulate more craters over time. By calibrating crater counts against radiometric ages from returned Apollo lunar samples, crater densities can date surfaces across the solar system."
    },
    deepDive: `
      <h4>Crater Saturation Equilibrium:</h4>
      <p>Once a surface reaches <strong>saturation equilibrium</strong>, every new impact crater obliterates an existing crater on average. At this point, crater counting only yields a minimum age limit (e.g., lunar highlands at ~4.0 Ga).</p>
    `,
    eli5: "Think of an old metal road sign that has been shot at by BB guns. The more bullet dents it has, the longer it has been standing on the roadside! Smooth surfaces are fresh paint; heavily pitted surfaces are ancient."
  },
  {
    id: 145,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC"],
    title: "The Roche Limit & Planetary Rings",
    subtitle: "Tidal destruction of moons within fluid and rigid thresholds",
    contentHtml: `
      <p>The <strong>Roche Limit (d)</strong> is the minimum distance to which a satellite held together by gravity can approach a primary body without being torn apart by tidal forces:</p>
      <div style="background:rgba(0,0,0,0.4); padding:6px; border-radius:4px; font-family:monospace; color:#38bdf8; font-size:0.85rem; margin:6px 0;">
        d ≈ 2.44 × R_M × (ρ_M / ρ_m)¹/³
      </div>
      <ul style="margin-left:1.1rem; line-height:1.5; font-size:0.8rem;">
        <li><code>R_M</code> = Radius of central planet; <code>ρ_M</code> and <code>ρ_m</code> = densities of planet and moon.</li>
        <li><strong>Saturn's Rings:</strong> Lie almost entirely inside Saturn's Roche limit, where tidal shear prevents icy fragments from coalescing into a single moon!</li>
        <li><strong>Phobos:</strong> Mars' inner moon is slowly spiraling inward and will cross Mars' Roche limit in ~30–50 Ma, breaking apart into a Martian ring.</li>
      </ul>
    `,
    deepDive: `
      <h4>Fluid vs Rigid Roche Limit:</h4>
      <p>For a rigid satellite held by tensile rock strength, the limit is ~1.44 R. For a fluid or rubble-pile asteroid held solely by gravity, the limit expands to ~2.44 R.</p>
    `,
    eli5: "If a moon wanders too close to a giant planet, gravity pulls harder on its front side than its back side. Inside the Roche limit, the planet tears the moon apart into billions of pieces, turning it into a ring!"
  },
  {
    id: 146,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "129Xe Excess & Iodine-129 Extinct System",
    subtitle: "Constraining planetary degassing to within the first 100 million years",
    contentHtml: `
      <p><strong>¹²⁹I decays to ¹²⁹Xe</strong> via beta decay with a half-life of <strong>15.7 million years</strong>.</p>
    `,
    quiz: {
      question: "Earth's mantle xenon has an excess of radiogenic ¹²⁹Xe compared to air. What does this 'iodine-xenon' constraint prove about Earth's early atmosphere?",
      options: [
        "Major mantle degassing and atmosphere formation occurred very early, within the first 50–100 Ma of the solar system",
        "The atmosphere was created 100 Ma ago during the Cretaceous period",
        "Xenon is a lithophile element concentrated in granite rocks",
        "Earth's atmosphere has never exchanged gas with the mantle"
      ],
      answer: 0,
      rationale: "Because ¹²⁹I was only alive for the first ~80 Ma of the solar system, any difference in ¹²⁹Xe/¹³⁰Xe between the atmosphere and mantle must have been established during that brief window. If degassing had occurred later, the mantle and atmosphere would share identical xenon isotopic ratios."
    },
    deepDive: `
      <h4>I-Pu-Xe Chronology:</h4>
      <p>Combining the short-lived ¹²⁹I system with the spontaneous fission of extinct ²⁴⁴Pu (t₁/₂ = 81 Ma) confirms that Earth's catastrophic degassing was complete by ~4.45 Ga.</p>
    `,
    eli5: "Iodine-129 lived for only a blink of cosmic time (16 million years) before turning into Xenon gas. The fact that the air and the deep mantle have different xenon fingerprints proves the Earth burped its main atmosphere out before Iodine-129 died!"
  },
  {
    id: 147,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "UPSC"],
    title: "Banded Iron Formations (BIFs) & Early Oceans",
    subtitle: "The great rust events of the Archaean and Paleoproterozoic",
    contentHtml: `
      <ul style="margin-left:1.1rem; line-height:1.6; font-size:0.82rem;">
        <li><strong>Petrology:</strong> Alternating millimeter-to-centimeter bands of iron-rich minerals (magnetite Fe₃O₄, hematite Fe₂O₃) and chert (microcrystalline quartz SiO₂).</li>
        <li><strong>Deposition Mechanism:</strong>
          <br>1. Anoxic oceans dissolved vast quantities of soluble <strong>ferrous iron (Fe²⁺)</strong> from submarine hydrothermal vents.
          <br>2. Oxygen produced by early cyanobacteria (or photo-ferrotrophic oxidation) oxidized soluble Fe²⁺ into insoluble <strong>ferric iron (Fe³⁺)</strong>:
          <br><code>4Fe²⁺ + O₂ + 10H₂O → 4Fe(OH)₃ ↓ + 8H⁺</code>
          <br>3. Rust precipitated onto the seafloor, sequestering oxygen and buffering the atmosphere until all oceanic iron was consumed!
        </li>
      </ul>
    `,
    deepDive: `
      <h4>Algoma vs Superior Type BIFs:</h4>
      <p><strong>Algoma-type:</strong> Archean greenstone belts, small scale, directly associated with volcanic rocks and submarine vents (e.g., Kudremukh). <strong>Superior-type:</strong> Paleoproterozoic (~2.4–1.8 Ga), vast continental shelf deposits covering hundreds of thousands of km² (e.g., Lake Superior, Singhbhum, Hamersley).</p>
    `,
    eli5: "Early oceans were like a giant green soup full of dissolved iron. As the first microbes produced oxygen bubbles, the entire ocean rusted out, dumping striped iron beds onto the seafloor until the oceans were cleared of iron!"
  },
  {
    id: 148,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET"],
    title: "Gas Giants vs Ice Giants: Compositional Boundary",
    subtitle: "Hydrogen-Helium envelopes vs Water-Methane-Ammonia mantles",
    contentHtml: `
      <p>The outer Solar System contains two fundamentally distinct planetary classes:</p>
      <ul style="margin-left:1.1rem; line-height:1.5; font-size:0.8rem;">
        <li><strong>Gas Giants (Jupiter, Saturn):</strong> Massive H₂-He gaseous envelopes making up > 90% of planet mass.</li>
        <li><strong>Ice Giants (Uranus, Neptune):</strong> Small H₂-He envelopes (~10–20%), dominated by deep supercritical ionic mantles of <strong>H₂O, CH₄, and NH₃</strong>.</li>
      </ul>
    `,
    quiz: {
      question: "Why did Uranus and Neptune fail to accrete massive gas envelopes like Jupiter and Saturn?",
      options: [
        "Orbital periods at 20–30 AU were much slower, so their core accretion was delayed until the solar nebula gas had already dissipated",
        "Temperatures at 20 AU were too hot to allow gas to condense",
        "They formed by gravitational direct fragmentation of pure iron asteroids",
        "The Sun's magnetic field pulled all hydrogen away from the outer solar system"
      ],
      answer: 0,
      rationale: "Orbital velocities decrease with distance (Kepler's third law). Accretion took much longer at 20–30 AU (~10–20 Ma). By the time Uranus and Neptune's cores reached the critical ~10 Earth mass threshold, the solar wind had already blown away the nebular gas disk."
    },
    deepDive: `
      <h4>Superionic Water Inside Uranus & Neptune:</h4>
      <p>At the high P-T conditions inside ice giants (P > 100 GPa, T > 2000–5000 K), water transitions into a <strong>superionic state</strong>: oxygen atoms freeze into a rigid crystalline lattice while hydrogen protons flow freely like a liquid, conducting electricity and generating bizarre off-axis, multipolar magnetic fields!</p>
    `,
    eli5: "Jupiter and Saturn finished building their rocky cores early while the nursery cloud was still full of hydrogen gas, so they ballooned into monsters. Uranus and Neptune grew too slowly and arrived at the party just as the gas was blown away!"
  },
  {
    id: 149,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "cheat_sheet",
    examTags: ["GATE", "CSIR-NET", "UPSC"],
    title: "Complete Cosmic Geochronology Timeline",
    subtitle: "From the Big Bang to the Rise of Oxygen",
    contentHtml: `
      <div class="mnemonic-banner">
        <div class="phrase">The Golden Time Sequence for Competitive Exams</div>
        <div class="mnemonic-ladder">
          <div class="mnemonic-step"><span class="step-letter">1</span><strong>13.8 Ga:</strong> Big Bang (H, He nucleosynthesis)</div>
          <div class="mnemonic-step"><span class="step-letter">2</span><strong>4.567 Ga:</strong> CAI condensation (Solar System Zero Age)</div>
          <div class="mnemonic-step"><span class="step-letter">3</span><strong>4.564 Ga:</strong> Chondrule formation (flash-heating events)</div>
          <div class="mnemonic-step"><span class="step-letter">4</span><strong>4.54–4.51 Ga:</strong> Earth core segregation & Theia Moon-forming impact</div>
          <div class="mnemonic-step"><span class="step-letter">5</span><strong>4.404 Ga:</strong> Jack Hills detrital zircon (Cool Early Earth with oceans)</div>
          <div class="mnemonic-step"><span class="step-letter">6</span><strong>4.031 Ga:</strong> Acasta Gneiss (oldest intact preserved rock)</div>
          <div class="mnemonic-step"><span class="step-letter">7</span><strong>3.9–3.8 Ga:</strong> Late Heavy Bombardment (lunar impact cataclysm)</div>
          <div class="mnemonic-step"><span class="step-letter">8</span><strong>3.7–3.5 Ga:</strong> Earliest biogenic carbon (Isua) & Pilbara stromatolites</div>
          <div class="mnemonic-step"><span class="step-letter">9</span><strong>2.45–2.2 Ga:</strong> Great Oxidation Event (GOE & MIF-S disappearance)</div>
        </div>
      </div>
    `,
    deepDive: `
      <h4>Exam Master Tip:</h4>
      <p>Memorize this sequence in exact chronological order. Multi-statement GATE and CSIR-NET questions frequently ask you to arrange CAIs → Moon formation → Jack Hills zircon → Acasta gneiss → LHB → GOE.</p>
    `,
    eli5: "The whole story of Earth in 9 steps: First the Sun's birth at 4.567 Ga, then the Moon crash at 4.51 Ga, the first zircon at 4.4 Ga, oldest rock at 4.03 Ga, asteroid barrage at 3.9 Ga, and the first oxygen breath at 2.4 Ga!"
  },
  {
    id: 150,
    unitId: "unit_1",
    unitName: "The Planet Earth",
    subtopicId: "earth_origin",
    subtopicName: "Origin of Solar System & Earth",
    type: "quiz",
    examTags: ["GATE", "CSIR-NET", "UPSC"],
    title: "Grand Synthesis: Why Earth is a Living Planet",
    subtitle: "The convergence of planetary mass, water, and magnetic protection",
    contentHtml: `
      <p>Earth's unique ability to harbor life for over 3.7 billion years stems from an interconnected planetary system:</p>
      <ul style="margin-left:1.1rem; line-height:1.5; font-size:0.8rem;">
        <li><strong>Right Mass:</strong> Sufficient gravity to hold N₂ and H₂O without retaining a crushing hydrogen atmosphere.</li>
        <li><strong>Right Distance (Habitable Zone):</strong> Allows water to exist in liquid, vapor, and solid phases simultaneously.</li>
        <li><strong>Plate Tectonics:</strong> Recycles carbon dioxide over millions of years via the carbonate-silicate geochemical cycle, acting as a planetary thermostat.</li>
        <li><strong>Active Geodynamo:</strong> Deflects lethal solar cosmic rays and coronal mass ejections.</li>
      </ul>
    `,
    quiz: {
      question: "Which geological feedback mechanism acts as Earth's long-term thermostat, preventing both runaway greenhouse (Venus) and permanent global glaciation (Snowball Earth)?",
      options: [
        "The Urey Carbonate-Silicate Weathering Cycle: CaSiO₃ + CO₂ ⇌ CaCO₃ + SiO₂",
        "Complete freezing of the liquid outer core",
        "Periodic explosive volcanism covering 100% of continents with basalt",
        "Direct gravitational capture of solar hydrogen by the ocean"
      ],
      answer: 0,
      rationale: "The Urey reaction (CaSiO₃ + CO₂ ⇌ CaCO₃ + SiO₂) regulates atmospheric CO₂. When Earth gets hotter and rainfall increases, silicate chemical weathering accelerates, drawing down CO₂ and cooling the climate. When Earth cools, weathering slows, allowing volcanic CO₂ to build up and warm the planet."
    },
    deepDive: `
      <h4>Walker Feedback Loop:</h4>
      <p>Discovered by Walker, Hays, and Kasting (1981), this negative feedback loop has stabilized Earth's surface temperature within the liquid water window for over 4 billion years, despite a 30% increase in solar output!</p>
    `,
    eli5: "Earth has a built-in thermostat! When the planet gets too hot, rain dissolves rocks faster and washes carbon dioxide into limestone, cooling the planet down. When it gets too cold, volcanoes keep pumping carbon back in until it warms up!"
  }
];
