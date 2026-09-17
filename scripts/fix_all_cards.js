import fs from 'fs';
import katex from 'katex';

const KEYWORDS = [
  'lambda', 'alpha', 'beta', 'gamma', 'Gamma', 'delta', 'Delta', 'epsilon', 'varepsilon',
  'zeta', 'eta', 'theta', 'Theta', 'iota', 'kappa', 'mu', 'nu', 'xi', 'Xi',
  'pi', 'Pi', 'rho', 'sigma', 'Sigma', 'tau', 'upsilon', 'phi', 'Phi',
  'chi', 'psi', 'Psi', 'omega', 'Omega',
  'cdot', 'times', 'div', 'pm', 'mp', 'approx', 'sim', 'propto', 'equiv',
  'll', 'gg',
  'leftarrow', 'rightarrow', 'leftrightarrow', 'Leftarrow', 'Rightarrow', 'Leftrightarrow',
  'implies',
  'partial', 'nabla', 'infty', 'sum', 'prod', 'int',
  'sqrt', 'frac', 'bar', 'hat', 'tilde', 'vec'
];

export function fixControlChars(str) {
  if (!str || typeof str !== 'string') return str;
  let s = str;
  s = s.replace(/\x09ext/g, '\\text');
  s = s.replace(/\x09au/g, '\\tau');
  s = s.replace(/\x09heta/g, '\\theta');
  s = s.replace(/\x08eta/g, '\\beta');
  s = s.replace(/\x08ar/g, '\\bar');
  s = s.replace(/\x0crac/g, '\\frac');
  s = s.replace(/\x0dightarrow/g, '\\rightarrow');
  s = s.replace(/\x0dho/g, '\\rho');

  // Handle any remaining literal backslash followed by control characters
  s = s.replace(/\\?\x09(?=ext|au|heta)/g, '\\');
  s = s.replace(/\\?\x0c(?=rac)/g, '\\');
  s = s.replace(/\\?\x08(?=eta|ar)/g, '\\');
  s = s.replace(/\\?\x0d(?=ightarrow|ho)/g, '\\');
  return s;
}

export function fixMath(mathStr) {
  let s = mathStr;

  // Replace unicode en-dash in math mode with standard minus/hyphen
  s = s.replace(/–/g, '-');

  // Replace ^{circ} or ^circ with ^{\circ}
  s = s.replace(/\^\{?circ\}?/g, '^{\\circ}');

  // Replace unescaped % inside math mode (e.g. \text{ wt%}) with \%
  s = s.replace(/(?<!\\)%/g, '\\%');

  // Fix ar{M} -> \bar{M}
  s = s.replace(/(?<![a-zA-Z\\])ar\{M\}/g, '\\bar{M}');

  // 1. Protect \text{...} blocks
  const textBlocks = [];
  s = s.replace(/\\text\{[^{}]*\}/g, (match) => {
    const id = textBlocks.length;
    textBlocks.push(match);
    return `__TEXT_TOKEN_${id}__`;
  });

  // Protect already backslashed tokens
  const cmdBlocks = [];
  s = s.replace(/\\[a-zA-Z]+/g, (match) => {
    const id = cmdBlocks.length;
    cmdBlocks.push(match);
    return `__CMD_TOKEN_${id}__`;
  });

  // 2. Prefix bare keywords with backslash
  for (const kw of KEYWORDS) {
    // keyword must not be preceded by letter or backslash, and not followed by letter
    const reg = new RegExp(`(?<![a-zA-Z\\\\])${kw}(?![a-zA-Z])`, 'g');
    s = s.replace(reg, `\\${kw}`);
  }

  // Handle special cases:
  // 'ggg' -> '\gg'
  s = s.replace(/(?<![a-zA-Z\\\\])ggg(?![a-zA-Z])/g, '\\gg');

  // Restore protected commands and text blocks
  s = s.replace(/__CMD_TOKEN_(\d+)__/g, (_, i) => cmdBlocks[Number(i)]);
  s = s.replace(/__TEXT_TOKEN_(\d+)__/g, (_, i) => textBlocks[Number(i)]);

  // Clean double slashes if any inside in-memory string
  s = s.replace(/\\\\([a-zA-Z]+)/g, '\\$1');

  return s;
}

export function processString(str) {
  if (!str || typeof str !== 'string') return str;

  // Step 1: fix all control characters across the string first
  let res = fixControlChars(str);

  // Step 2: Process $$...$$
  res = res.replace(/\$\$([\s\S]+?)\$\$/g, (m, math) => {
    return `$$${fixMath(math)}$$`;
  });

  // Step 3: Process $...$
  res = res.replace(/(?<!\\)\$([^\$\n\r]+?)\$/g, (m, math) => {
    if (/^\d+(\.\d+)?$/.test(math.trim())) return m;
    return `$${fixMath(math)}$`;
  });

  return res;
}

export function processCard(card) {
  const c = { ...card };
  if (c.title) c.title = processString(c.title);
  if (c.subtitle) c.subtitle = processString(c.subtitle);
  if (c.contentHtml) c.contentHtml = processString(c.contentHtml);
  if (c.deepDive) c.deepDive = processString(c.deepDive);
  if (c.eli5) c.eli5 = processString(c.eli5);
  if (c.quiz) {
    c.quiz = {
      ...c.quiz,
      question: processString(c.quiz.question),
      options: (c.quiz.options || []).map(opt => processString(opt)),
      rationale: processString(c.quiz.rationale)
    };
  }
  return c;
}

function run() {
  const targets = [
    {
      jsonFile: 'radiometric_dating_50_cards.json',
      jsFile: 'src/data/radiometricDatingCards.js',
      exportName: 'RADIOMETRIC_DATING_CARDS',
      header: '// 50 High-Yield Exam Cards for Topic: Radiometric Dating (Rb-Sr, Sm-Nd, 14C)\n// Designed specifically for GATE Geology, CSIR-NET Earth Sciences, and UPSC Combined Geo-Scientist\n\n'
    },
    {
      jsonFile: 'internal_structure_earth_50_cards.json',
      jsFile: 'src/data/internalEarthCards.js',
      exportName: 'INTERNAL_EARTH_CARDS',
      header: '// 50 High-Yield Exam Cards for Topic: Internal structure, composition, and age Pressure-temperature-density variation inside Earth\n// Designed specifically for GATE Geology, CSIR-NET Earth Sciences, and UPSC Combined Geo-Scientist\n\n'
    },
    {
      jsonFile: 'origin_of_solar_system_50_cards.json',
      jsFile: 'src/data/originSolarSystemCards.js',
      exportName: 'ORIGIN_SOLAR_SYSTEM_CARDS',
      header: '// 50 High-Yield Interactive Exam Cards for Origin of Solar System & Earth\n// Designed specifically for GATE Geology, CSIR-NET Earth Sciences, and UPSC Combined Geo-Scientist\n\n'
    }
  ];

  let totalMathValidated = 0;
  let katexFailures = 0;

  for (const t of targets) {
    if (!fs.existsSync(t.jsonFile)) continue;
    console.log(`\nProcessing ${t.jsonFile}...`);
    const rawText = fs.readFileSync(t.jsonFile, 'utf8');
    let cards;
    try {
      cards = JSON.parse(rawText);
    } catch (e) {
      console.error(`Failed to parse ${t.jsonFile}:`, e);
      continue;
    }

    const processedCards = cards.map(processCard);

    // Validate every single math segment with KaTeX
    for (const card of processedCards) {
      const fields = [
        card.contentHtml,
        card.deepDive,
        card.eli5,
        card.quiz?.question,
        ...(card.quiz?.options || []),
        card.quiz?.rationale
      ].filter(Boolean);

      for (const f of fields) {
        const matches = f.match(/\$([^\$\n\r]+?)\$/g) || [];
        for (const m of matches) {
          totalMathValidated++;
          const mathExpr = m.slice(1, -1).trim();
          try {
            katex.renderToString(mathExpr, { throwOnError: true });
          } catch (kErr) {
            katexFailures++;
            console.warn(`KaTeX warning in Card #${card.id} [${mathExpr}]:`, kErr.message);
          }
        }
      }
    }

    // Write updated JSON file with formatting
    const jsonOutput = JSON.stringify(processedCards, null, 2);
    fs.writeFileSync(t.jsonFile, jsonOutput, 'utf8');
    console.log(`Saved ${t.jsonFile} (Length: ${jsonOutput.length} bytes)`);

    // Write updated JS file
    const jsOutput = `${t.header}export const ${t.exportName} = ${jsonOutput};\n`;
    fs.writeFileSync(t.jsFile, jsOutput, 'utf8');
    console.log(`Saved ${t.jsFile} (Length: ${jsOutput.length} bytes)`);
  }

  console.log(`\n=== VALIDATION SUMMARY ===`);
  console.log(`Total math segments checked: ${totalMathValidated}`);
  console.log(`KaTeX failures: ${katexFailures}`);
}

run();
