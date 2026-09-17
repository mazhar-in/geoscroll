import React, { useState, useEffect } from "react";
import { X, Copy, Download, Upload, RefreshCw, AlertTriangle, Check } from "lucide-react";

export default function JsonStudioModal({
  isOpen,
  onClose,
  currentCards,
  onSaveNewCards,
  onResetSeedCards,
  onShowToast
}) {
  const [jsonText, setJsonText] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setJsonText(JSON.stringify(currentCards, null, 2));
      setCopied(false);
    }
  }, [isOpen, currentCards]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(jsonText).then(() => {
      setCopied(true);
      onShowToast("📋 JSON copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleDownload = () => {
    const blob = new Blob([jsonText], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `geoscroll_cards_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    onShowToast("💾 Downloaded JSON file!");
  };

  const handleMerge = () => {
    try {
      const parsed = JSON.parse(jsonText);
      if (!Array.isArray(parsed)) {
        alert("Root element must be a JSON array of card objects.");
        return;
      }
      // Merge with existing by card ID
      const cardMap = new Map(currentCards.map((c) => [c.id, c]));
      parsed.forEach((c) => cardMap.set(c.id, c));
      const merged = Array.from(cardMap.values());

      onSaveNewCards(merged);
      onShowToast(`✅ Merged! Total cards now: ${merged.length}`);
      onClose();
    } catch (e) {
      alert("JSON Syntax Error: " + e.message);
    }
  };

  const handleReplaceAll = () => {
    if (!window.confirm("Replace ALL current cards with the JSON content in this box?")) return;
    try {
      const parsed = JSON.parse(jsonText);
      if (!Array.isArray(parsed)) {
        alert("Root element must be a JSON array of card objects.");
        return;
      }
      onSaveNewCards(parsed);
      onShowToast(`✅ Replaced with ${parsed.length} cards!`);
      onClose();
    } catch (e) {
      alert("JSON Syntax Error: " + e.message);
    }
  };

  const handleReset = () => {
    if (!window.confirm("Reset all cards back to the default seed dataset?")) return;
    onResetSeedCards();
    onShowToast("🔄 Reset to default seed cards.");
    onClose();
  };

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-panel json-modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-grabber" />
        <div className="drawer-header">
          <div className="drawer-header-title">
            <h3>💾 JSON Data Studio</h3>
          </div>
          <button className="drawer-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
          <p className="json-instructions">
            Paste your 50 cards per subtopic array below. You can merge new cards or completely overwrite. All data syncs with <code>localStorage</code> offline.
          </p>

          <textarea
            className="json-code-editor"
            value={jsonText}
            onChange={(e) => setJsonText(e.target.value)}
            spellCheck={false}
          />

          <div className="json-actions-toolbar">
            <button className="btn-primary" onClick={handleMerge}>
              <Upload size={15} />
              <span>Load & Merge JSON</span>
            </button>

            <button className="btn-secondary" onClick={handleCopy}>
              {copied ? <Check size={15} className="text-emerald" /> : <Copy size={15} />}
              <span>{copied ? "Copied!" : "Copy JSON"}</span>
            </button>

            <button className="btn-secondary" onClick={handleDownload}>
              <Download size={15} />
              <span>Download File</span>
            </button>

            <button className="btn-danger" onClick={handleReplaceAll}>
              <AlertTriangle size={15} />
              <span>Replace All</span>
            </button>

            <button className="btn-ghost" onClick={handleReset}>
              <RefreshCw size={15} />
              <span>Reset to Default</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
