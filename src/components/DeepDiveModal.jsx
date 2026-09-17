import React from "react";
import { X, BookOpen, AlertCircle } from "lucide-react";

export default function DeepDiveModal({ card, onClose }) {
  if (!card) return null;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-grabber" />
        <div className="drawer-header">
          <div className="drawer-header-title">
            <BookOpen className="text-amber" size={20} />
            <h3>{card.title}</h3>
          </div>
          <button className="drawer-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
          <div className="drawer-badges">
            <span className="badge-unit">{card.unitName}</span>
            <span className="badge-subtopic">{card.subtopicName}</span>
          </div>

          <div className="deep-dive-section">
            <h4>📖 Core High-Yield Exam Notes</h4>
            {card.deepDive ? (
              <div 
                className="rich-text-content" 
                dangerouslySetInnerHTML={{ __html: card.deepDive }} 
              />
            ) : (
              <p>Additional GATE/NET notes will be populated soon.</p>
            )}
          </div>

          {card.quiz && (
            <div className="deep-dive-section rationale-highlight">
              <h4>
                <AlertCircle size={16} className="inline-icon" /> 
                Exam Distractor Breakdown
              </h4>
              <p>{card.quiz.rationale}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
