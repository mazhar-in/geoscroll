import katex from "katex";
import "katex/dist/katex.min.css";

function sanitizeMath(str) {
  if (!str) return str;
  let s = str;
  // Fix control chars from single slash escapes in JSON strings
  s = s.replace(/\x09ext/g, '\\text');
  s = s.replace(/\x09au/g, '\\tau');
  s = s.replace(/\x09heta/g, '\\theta');
  s = s.replace(/\x08eta/g, '\\beta');
  s = s.replace(/\x08ar/g, '\\bar');
  s = s.replace(/\x0crac/g, '\\frac');
  s = s.replace(/\x0dightarrow/g, '\\rightarrow');
  s = s.replace(/\x0dho/g, '\\rho');
  s = s.replace(/–/g, '-');
  s = s.replace(/\^\{?circ\}?/g, '^{\\circ}');
  s = s.replace(/(?<![a-zA-Z\\])ar\{M\}/g, '\\bar{M}');
  return s.trim();
}

/**
 * Parses a string containing LaTeX formulas in $...$ (inline) or $$...$$ (display mode)
 * and replaces them with HTML rendered by KaTeX.
 */
export function formatMath(text) {
  if (!text || typeof text !== "string") return text || "";

  try {
    // 1. Render display math $$...$$
    let formatted = text.replace(/\$\$([\s\S]+?)\$\$/g, (match, math) => {
      try {
        return katex.renderToString(sanitizeMath(math), {
          displayMode: true,
          throwOnError: false
        });
      } catch (err) {
        console.warn("KaTeX display error:", err);
        return match;
      }
    });

    // 2. Render inline math $...$
    // Ensure we don't match currency like $100 or empty $$
    formatted = formatted.replace(/(?<!\\)\$([^\$\n\r]+?)\$/g, (match, math) => {
      // If it looks purely like currency (e.g. $10 or $25.50), leave it alone
      if (/^\d+(\.\d+)?$/.test(math.trim())) {
        return match;
      }
      try {
        return katex.renderToString(sanitizeMath(math), {
          displayMode: false,
          throwOnError: false
        });
      } catch (err) {
        console.warn("KaTeX inline error:", err);
        return match;
      }
    });

    return formatted;
  } catch (e) {
    console.error("formatMath failed:", e);
    return text;
  }
}
