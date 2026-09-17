import React from "react";
import { X, Lightbulb } from "lucide-react";

export default function Eli5Modal({ card, onClose }) {
  if (!card) return null;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-grabber" />
        <div className="drawer-header">
          <div className="drawer-header-title">
            <Lightbulb className="text-cyan" size={20} />
            <h3>ELI5: {card.title}</h3>
          </div>
          <button className="drawer-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
          <div className="eli5-card">
            <div className="eli5-tag">🧠 Intuitive Mental Model</div>
            <p className="eli5-text">
              {card.eli5 || "Think of this geological concept like a physical kitchen recipe where temperature and pressure transform raw ingredients into stratified layers!"}
            </p>
          </div>

          <div className="eli5-footer-tip">
            💡 <strong>Exam Memory Hook:</strong> Use this simple analogy to quickly eliminate nonsensical distractors in high-pressure MCQ questions!
          </div>
        </div>
      </div>
    </div>
  );
}
