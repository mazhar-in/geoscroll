import React from "react";
import { 
  Layers, 
  Menu, 
  Volume2, 
  VolumeX, 
  Bookmark, 
  Flame, 
  HelpCircle,
  FolderOpen
} from "lucide-react";
import { SYLLABUS_HIERARCHY } from "../data/syllabus";

export default function TopNav({
  streak,
  soundEnabled,
  onToggleSound,
  onOpenSyllabus,
  onOpenJsonStudio,
  currentFilter,
  onSelectFilter,
  selectedSubtopic,
  progressPct
}) {
  return (
    <header className="top-nav-container">
      <div className="top-row">
        {/* Brand */}
        <div className="app-brand" onClick={() => onSelectFilter("all")}>
          <Layers className="brand-icon" />
          <span className="brand-title">GeoScroll</span>
          <span className="brand-badge">GATE • NET</span>
        </div>

        {/* Action Controls */}
        <div className="top-actions">
          {/* Daily Streak */}
          <div className="streak-pill" title="Daily Revision Streak">
            <Flame className="streak-icon" />
            <span>{streak}d</span>
          </div>

          {/* Syllabus Drawer Trigger */}
          <button 
            className="icon-btn" 
            onClick={onOpenSyllabus} 
            title="Browse All 9 Topics & Subtopics"
          >
            <Menu size={18} />
          </button>

          {/* Audio Synthesizer Toggle */}
          <button 
            className="icon-btn" 
            onClick={onToggleSound} 
            title={soundEnabled ? "Mute Sound" : "Enable Sound"}
          >
            {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>
        </div>
      </div>

      {/* Horizontal Filter Carousel */}
      <div className="filter-scroll-wrapper">
        <button
          className={`filter-pill ${currentFilter === "all" ? "active" : ""}`}
          onClick={() => onSelectFilter("all")}
        >
          🌟 All Feed
        </button>

        {selectedSubtopic && (
          <button
            className={`filter-pill subtopic-active ${currentFilter === "custom-subtopic" ? "active" : ""}`}
            onClick={() => onSelectFilter("custom-subtopic")}
          >
            <FolderOpen size={13} />
            <span>{selectedSubtopic.name.length > 18 ? selectedSubtopic.name.slice(0, 18) + "..." : selectedSubtopic.name}</span>
          </button>
        )}

        {SYLLABUS_HIERARCHY.map((unit) => (
          <button
            key={unit.id}
            className={`filter-pill ${currentFilter === unit.id ? "active" : ""}`}
            onClick={() => onSelectFilter(unit.id)}
            style={{
              borderColor: currentFilter === unit.id ? unit.color : undefined
            }}
          >
            {unit.title.split(" ")[1]} {unit.shortName}
          </button>
        ))}

        <button
          className={`filter-pill ${currentFilter === "bookmarked" ? "active" : ""}`}
          onClick={() => onSelectFilter("bookmarked")}
        >
          <Bookmark size={13} /> Saved
        </button>

        <button
          className={`filter-pill ${currentFilter === "quizzes" ? "active" : ""}`}
          onClick={() => onSelectFilter("quizzes")}
        >
          <HelpCircle size={13} /> MCQs Only
        </button>
      </div>

      {/* Realtime Reading Progress Indicator */}
      <div className="progress-bar-track">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${Math.min(100, Math.max(0, progressPct))}%` }} 
        />
      </div>
    </header>
  );
}
