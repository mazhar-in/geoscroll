import React, { useState } from "react";
import { X, ChevronDown, ChevronRight, Check } from "lucide-react";
import { SYLLABUS_HIERARCHY } from "../data/syllabus";

export default function SyllabusModal({
  isOpen,
  onClose,
  allCards,
  selectedSubtopicId,
  onSelectSubtopic
}) {
  const [expandedTopics, setExpandedTopics] = useState(
    SYLLABUS_HIERARCHY.reduce((acc, t) => ({ ...acc, [t.id]: true }), {})
  );

  if (!isOpen) return null;

  const toggleTopic = (id) => {
    setExpandedTopics((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-grabber" />
        <div className="drawer-header">
          <div className="drawer-header-title">
            <h3>🗺️ Complete Geology Syllabus</h3>
          </div>
          <button className="drawer-close-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
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
      </div>
    </div>
  );
}
