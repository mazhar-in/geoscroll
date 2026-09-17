import React, { useState } from "react";
import { 
  X, 
  ChevronDown, 
  ChevronRight, 
  Check, 
  Bookmark, 
  Compass, 
  ArrowRight, 
  Trash2,
  BookOpen
} from "lucide-react";
import { SYLLABUS_HIERARCHY } from "../data/syllabus";

export default function SyllabusModal({
  isOpen,
  onClose,
  allCards = [],
  bookmarks = new Set(),
  onToggleBookmark,
  onJumpToCard,
  onViewSavedFeed,
  selectedSubtopicId,
  onSelectSubtopic
}) {
  const [activeTab, setActiveTab] = useState("syllabus"); // "syllabus" | "saved"
  const [expandedTopics, setExpandedTopics] = useState(
    SYLLABUS_HIERARCHY.reduce((acc, t) => ({ ...acc, [t.id]: true }), {})
  );

  if (!isOpen) return null;

  const savedCards = (allCards || []).filter((c) => bookmarks?.has(c.id));

  const toggleTopic = (id) => {
    setExpandedTopics((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-grabber" />
        
        {/* Header */}
        <div className="drawer-header">
          <div className="drawer-header-title">
            <h3>Menu & Navigation</h3>
          </div>
          <button className="drawer-close-btn" onClick={onClose} title="Close">
            <X size={20} />
          </button>
        </div>

        {/* Tab Switcher: Syllabus vs Saved Pages */}
        <div className="modal-tab-bar">
          <button
            className={`modal-tab-btn ${activeTab === "syllabus" ? "active" : ""}`}
            onClick={() => setActiveTab("syllabus")}
          >
            <Compass size={16} />
            <span>Syllabus (9 Topics)</span>
          </button>
          <button
            className={`modal-tab-btn ${activeTab === "saved" ? "active" : ""}`}
            onClick={() => setActiveTab("saved")}
          >
            <Bookmark size={16} />
            <span>Saved Pages ({savedCards.length})</span>
          </button>
        </div>

        <div className="drawer-body">
          {/* TAB 1: SAVED PAGES */}
          {activeTab === "saved" && (
            <div className="saved-pages-view">
              <div className="saved-pages-header-info">
                <div>
                  <h4 style={{ color: "#fff", margin: "0 0 4px 0", fontSize: "1rem" }}>
                    ❤️ Your Bookmarked Cards ({savedCards.length})
                  </h4>
                  <p style={{ margin: 0, fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                    Quickly jump to saved high-yield revision cards:
                  </p>
                </div>
                {savedCards.length > 0 && onViewSavedFeed && (
                  <button 
                    className="btn-primary" 
                    style={{ fontSize: "0.76rem", padding: "0.4rem 0.8rem", whiteSpace: "nowrap" }}
                    onClick={onViewSavedFeed}
                  >
                    View in Feed
                  </button>
                )}
              </div>

              {savedCards.length === 0 ? (
                <div className="saved-empty-state">
                  <Bookmark size={38} style={{ opacity: 0.35, marginBottom: "0.6rem" }} />
                  <h4 style={{ color: "#fff", marginBottom: "0.3rem" }}>No Saved Cards Yet</h4>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-secondary)", maxWidth: "280px" }}>
                    While scrolling through the cards, tap the <strong>Save</strong> icon on any card to bookmark it here for quick exam revision.
                  </p>
                </div>
              ) : (
                <div className="saved-cards-list">
                  {savedCards.map((card, idx) => (
                    <div key={card.id} className="saved-card-row">
                      <div 
                        className="saved-card-content"
                        onClick={() => {
                          onJumpToCard(card.id);
                          onClose();
                        }}
                      >
                        <div className="saved-card-meta">
                          <span className="saved-card-num">#{idx + 1}</span>
                          <span className="saved-card-unit">{card.unitName}</span>
                          <span className="saved-card-subtopic">{card.subtopicName}</span>
                          {card.type === "quiz" && (
                            <span className="saved-card-quiz-pill">MCQ</span>
                          )}
                        </div>
                        <div className="saved-card-title">{card.title}</div>
                        {card.subtitle && (
                          <div className="saved-card-subtitle">{card.subtitle}</div>
                        )}
                      </div>

                      <div className="saved-card-actions">
                        <button
                          className="saved-jump-btn"
                          onClick={() => {
                            onJumpToCard(card.id);
                            onClose();
                          }}
                          title="Open Card in Feed"
                        >
                          <ArrowRight size={16} />
                        </button>
                        {onToggleBookmark && (
                          <button
                            className="saved-remove-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleBookmark(card.id);
                            }}
                            title="Remove Bookmark"
                          >
                            <Trash2 size={15} />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: COMPLETE SYLLABUS */}
          {activeTab === "syllabus" && (
            <div className="syllabus-view">
              {/* Quick banner if user has saved cards */}
              {savedCards.length > 0 && (
                <div 
                  className="saved-cards-quick-banner"
                  onClick={() => setActiveTab("saved")}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <Bookmark size={15} style={{ color: "var(--accent-wrong)" }} />
                    <span>You have <strong>{savedCards.length}</strong> saved card{savedCards.length > 1 ? "s" : ""}</span>
                  </div>
                  <span style={{ fontSize: "0.75rem", color: "#38bdf8", fontWeight: 700 }}>
                    View &rarr;
                  </span>
                </div>
              )}

              <p className="syllabus-subtitle">
                Select any subtopic to instantly focus your doomscrolling feed:
              </p>

              <div className="syllabus-tree">
                {SYLLABUS_HIERARCHY.map((topic) => {
                  const isExpanded = !!expandedTopics[topic.id];
                  const topicCardCount = allCards.filter(
                    (c) => c.unitId === topic.id
                  ).length;

                  return (
                    <div key={topic.id} className="syllabus-topic-card">
                      <div
                        className="topic-card-header"
                        onClick={() => toggleTopic(topic.id)}
                      >
                        <div className="topic-card-left">
                          {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                          <span className="topic-title" style={{ color: topic.color }}>
                            {topic.title}
                          </span>
                        </div>
                        <span className="topic-count-pill">{topicCardCount} cards</span>
                      </div>

                      {isExpanded && (
                        <div className="subtopics-list">
                          {topic.subtopics.map((sub) => {
                            const count = allCards.filter(
                              (c) => c.subtopicId === sub.id
                            ).length;
                            const isSelected = selectedSubtopicId === sub.id;

                            return (
                              <div
                                key={sub.id}
                                className={`subtopic-row ${isSelected ? "selected" : ""}`}
                                onClick={() => {
                                  onSelectSubtopic(sub);
                                  onClose();
                                }}
                              >
                                <span className="subtopic-name">{sub.name}</span>
                                <div className="subtopic-right">
                                  <span className="subtopic-count">({count})</span>
                                  {isSelected && <Check size={14} className="check-icon" />}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
