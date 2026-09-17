import React from "react";
import confetti from "canvas-confetti";
import { 
  Bookmark, 
  BookOpen, 
  Lightbulb, 
  Share2, 
  ChevronUp, 
  ChevronDown, 
  CheckCircle2, 
  XCircle 
} from "lucide-react";
import { sound } from "../utils/audio";

export default function FeedCard({
  card,
  index,
  totalCount,
  isBookmarked,
  onToggleBookmark,
  onOpenDeepDive,
  onOpenEli5,
  onCopySummary,
  quizRecord,
  onAnswerQuiz,
  onNavigate,
  cardRef
}) {
  const isQuiz = card.type === "quiz" && card.quiz;
  const q = card.quiz;

  const handleOptionClick = (optIdx) => {
    if (quizRecord) return; // Already answered

    const isCorrect = (optIdx === q.answer);
    onAnswerQuiz(card.id, optIdx, isCorrect);

    if (isCorrect) {
      sound.playCorrect();
      confetti({
        particleCount: 55,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#10b981", "#38bdf8", "#fbbf24"]
      });
    } else {
      sound.playWrong();
    }
  };

  return (
    <article className="feed-card" ref={cardRef} data-index={index}>
      {/* Subject Radial Ambient Glow */}
      <div className="card-glow" />
      <div className="card-grid-pattern" />

      {/* Main Content Area */}
      <div className="card-content-area">
        {/* Unit & Subtopic Badges */}
        <div className="card-meta-tags">
          <span className="badge-unit">
            {card.unitName}
          </span>
          <span className="badge-subtopic">
            {card.subtopicName}
          </span>
          {(card.examTags || []).map((t) => (
            <span key={t} className="badge-exam">
              {t}
            </span>
          ))}
        </div>

        {/* Card Headline */}
        <h2 className="card-title">{card.title}</h2>
        {card.subtitle && <p className="card-subtitle">{card.subtitle}</p>}

        {/* Core Digestible Content Box */}
        <div className="card-core-box">
          {card.contentHtml && (
            <div 
              className="card-html-body" 
              dangerouslySetInnerHTML={{ __html: card.contentHtml }} 
            />
          )}

          {/* Interactive MCQ Engine */}
          {isQuiz && (
            <div className="quiz-container">
              <div className="quiz-question-title">
                🎯 {q.question}
              </div>
              <div className="quiz-options-grid">
                {q.options.map((opt, optIdx) => {
                  const letter = String.fromCharCode(65 + optIdx);
                  let stateClass = "";
                  if (quizRecord) {
                    if (optIdx === q.answer) {
                      stateClass = "correct disabled";
                    } else if (optIdx === quizRecord.selected) {
                      stateClass = "wrong disabled";
                    } else {
                      stateClass = "disabled";
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      className={`quiz-opt-btn ${stateClass}`}
                      onClick={() => handleOptionClick(optIdx)}
                      disabled={!!quizRecord}
                    >
                      <span className="opt-prefix">{letter}</span>
                      <span className="opt-text">{opt}</span>
                      {quizRecord && optIdx === q.answer && (
                        <CheckCircle2 size={16} className="opt-icon-feedback text-emerald" />
                      )}
                      {quizRecord && optIdx === quizRecord.selected && !quizRecord.correct && (
                        <XCircle size={16} className="opt-icon-feedback text-rose" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Distractor Rationale Feedback */}
              {quizRecord && (
                <div className="quiz-rationale-box">
                  <div className="rationale-header">
                    <strong>Official Exam Rationale:</strong>
                  </div>
                  <p>{q.rationale}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right-Side TikTok Floating Action Dock */}
      <div className="action-dock">
        {/* Bookmark Action */}
        <button 
          className={`dock-btn ${isBookmarked ? "active-bookmarked" : ""}`}
          onClick={() => onToggleBookmark(card.id)}
          title={isBookmarked ? "Remove Bookmark" : "Save Card"}
        >
          <div className="dock-icon-bubble">
            <Bookmark size={20} />
          </div>
          <span className="dock-label">{isBookmarked ? "Saved" : "Save"}</span>
        </button>

        {/* Deep Dive Notes */}
        <button 
          className="dock-btn"
          onClick={() => onOpenDeepDive(card)}
          title="Comprehensive Exam Notes"
        >
          <div className="dock-icon-bubble">
            <BookOpen size={20} />
          </div>
          <span className="dock-label">Notes</span>
        </button>

        {/* ELI5 Analogy */}
        <button 
          className="dock-btn"
          onClick={() => onOpenEli5(card)}
          title="Explain Like I'm 5"
        >
          <div className="dock-icon-bubble">
            <Lightbulb size={20} />
          </div>
          <span className="dock-label">ELI5</span>
        </button>

        {/* Copy / Share */}
        <button 
          className="dock-btn"
          onClick={() => onCopySummary(card)}
          title="Copy Concept Summary"
        >
          <div className="dock-icon-bubble">
            <Share2 size={20} />
          </div>
          <span className="dock-label">Share</span>
        </button>

        {/* Floating Quick Navigation */}
        <div className="dock-nav-arrows">
          <button 
            className="arrow-nav-btn" 
            onClick={() => onNavigate(-1)} 
            title="Previous (ArrowUp or K)"
          >
            <ChevronUp size={18} />
          </button>
          <button 
            className="arrow-nav-btn" 
            onClick={() => onNavigate(1)} 
            title="Next (ArrowDown or J)"
          >
            <ChevronDown size={18} />
          </button>
        </div>
      </div>

      {/* Bottom Card Index Counter */}
      <div className="card-counter-badge">
        #{index + 1} / {totalCount}
      </div>
    </article>
  );
}
