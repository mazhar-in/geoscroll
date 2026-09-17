import React, { useState, useEffect, useRef, useMemo } from "react";
import TopNav from "./components/TopNav";
import FeedCard from "./components/FeedCard";
import DeepDiveModal from "./components/DeepDiveModal";
import Eli5Modal from "./components/Eli5Modal";
import SyllabusModal from "./components/SyllabusModal";

import { 
  getInitialCards, 
  saveCardsToStorage, 
  resetCardsToDefault,
  getBookmarks, 
  saveBookmarks, 
  getQuizRecords, 
  saveQuizRecord, 
  computeDailyStreak 
} from "./utils/storage";
import { sound } from "./utils/audio";

export default function App() {
  // State
  const [cards, setCards] = useState(() => getInitialCards());
  const [bookmarks, setBookmarks] = useState(() => getBookmarks());
  // Quizzes are kept in-memory only so MCQs are fresh and unchecked upon every page reload
  const [quizRecords, setQuizRecords] = useState({});
  const [streak, setStreak] = useState(() => computeDailyStreak());
  const [soundEnabled, setSoundEnabled] = useState(() => sound.enabled);

  // Clear any previously saved quiz answers from storage on mount
  useEffect(() => {
    try {
      localStorage.removeItem("geoscroll_quizzes");
    } catch (e) {
      console.error(e);
    }
  }, []);

  // Filters
  const [currentFilter, setCurrentFilter] = useState("all");
  const [selectedSubtopic, setSelectedSubtopic] = useState(null);

  // Active Index & Progress
  const [activeIndex, setActiveIndex] = useState(0);

  // Modals & Drawers
  const [activeDeepDiveCard, setActiveDeepDiveCard] = useState(null);
  const [activeEli5Card, setActiveEli5Card] = useState(null);
  const [isSyllabusOpen, setIsSyllabusOpen] = useState(false);

  // Toast
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const feedRef = useRef(null);
  const cardRefs = useRef([]);

  const triggerToast = (msg) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2400);
  };

  // Filtered Cards Memoization
  const filteredCards = useMemo(() => {
    if (currentFilter === "custom-subtopic" && selectedSubtopic) {
      return cards.filter((c) => c.subtopicId === selectedSubtopic.id);
    }
    if (currentFilter.startsWith("unit_")) {
      return cards.filter((c) => c.unitId === currentFilter);
    }
    if (currentFilter === "bookmarked") {
      return cards.filter((c) => bookmarks.has(c.id));
    }
    if (currentFilter === "quizzes") {
      return cards.filter((c) => c.type === "quiz");
    }
    return cards;
  }, [cards, currentFilter, selectedSubtopic, bookmarks]);

  // Track active card via IntersectionObserver
  useEffect(() => {
    const container = feedRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = parseInt(entry.target.getAttribute("data-index"), 10);
            if (!isNaN(idx)) {
              setActiveIndex(idx);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.6
      }
    );

    const cardsElements = container.querySelectorAll(".feed-card");
    cardsElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [filteredCards]);

  // Keyboard navigation (ArrowDown / ArrowUp / J / K / Space)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept when typing in modal inputs or textareas
      if (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT") return;

      if (e.key === "ArrowDown" || e.key === "j" || e.key === "J") {
        e.preventDefault();
        navigateToCard(activeIndex + 1);
      } else if (e.key === "ArrowUp" || e.key === "k" || e.key === "K") {
        e.preventDefault();
        navigateToCard(activeIndex - 1);
      } else if (e.key === " " && !e.repeat) {
        e.preventDefault();
        navigateToCard(activeIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, filteredCards]);

  const navigateToCard = (targetIndex) => {
    if (!feedRef.current || filteredCards.length === 0) return;
    const clampedIndex = Math.max(0, Math.min(targetIndex, filteredCards.length - 1));
    const targetElement = feedRef.current.children[clampedIndex];
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      sound.playPop();
    }
  };

  // Handlers
  const handleToggleBookmark = (cardId) => {
    const next = new Set(bookmarks);
    let isNowSaved = false;
    if (next.has(cardId)) {
      next.delete(cardId);
      triggerToast("Removed from saved bookmarks");
    } else {
      next.add(cardId);
      isNowSaved = true;
      triggerToast("Saved to your bookmarks! ❤️");
    }
    setBookmarks(next);
    saveBookmarks(next);
    sound.playPop();
  };

  const handleAnswerQuiz = (cardId, optionIndex, isCorrect) => {
    // In-memory update only: resetting or reloading will restore unchecked state
    setQuizRecords((prev) => ({
      ...prev,
      [cardId]: { selected: optionIndex, correct: isCorrect }
    }));
    if (isCorrect) {
      triggerToast("🎯 Spot on! High-yield concept mastered.");
    } else {
      triggerToast("❌ Incorrect. Read the distractor breakdown!");
    }
  };

  const handleJumpToCard = (cardId) => {
    // Check if card is in current filtered list
    const currentIdx = filteredCards.findIndex((c) => c.id === cardId);
    if (currentIdx !== -1) {
      navigateToCard(currentIdx);
    } else {
      // Switch filter to 'all' so it's present, then scroll to it
      setCurrentFilter("all");
      setSelectedSubtopic(null);
      setTimeout(() => {
        const fullIdx = cards.findIndex((c) => c.id === cardId);
        if (fullIdx !== -1) {
          navigateToCard(fullIdx);
        }
      }, 120);
    }
  };

  const handleCopySummary = (card) => {
    const text = `[GeoScroll Exam Card: ${card.title}]\nTopic: ${card.unitName} (${card.subtopicName})\n\n${card.subtitle}\n\nExam Tip: ${card.eli5 || "Master for GATE & CSIR-NET!"}`;
    navigator.clipboard.writeText(text).then(() => {
      sound.playPop();
      triggerToast("📋 Summary copied to clipboard!");
    }).catch(() => {
      triggerToast("📋 Copied!");
    });
  };

  const handleFilterSelect = (filterKey) => {
    setCurrentFilter(filterKey);
    if (filterKey !== "custom-subtopic") {
      setSelectedSubtopic(null);
    }
    sound.playPop();
    if (feedRef.current) {
      feedRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubtopicSelect = (subtopic) => {
    setSelectedSubtopic(subtopic);
    setCurrentFilter("custom-subtopic");
    sound.playPop();
    triggerToast(`Filtered by: ${subtopic.name}`);
    if (feedRef.current) {
      feedRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSaveNewCards = (newCards) => {
    setCards(newCards);
    saveCardsToStorage(newCards);
  };

  const handleResetSeedCards = () => {
    const defaultCards = resetCardsToDefault();
    setCards(defaultCards);
  };

  const handleToggleSound = () => {
    const isEnabled = sound.toggle();
    setSoundEnabled(isEnabled);
    triggerToast(isEnabled ? "Sound effects on 🔊" : "Sound muted 🔇");
  };

  // Progress calculation
  const progressPct = filteredCards.length <= 1 
    ? 100 
    : ((activeIndex + 1) / filteredCards.length) * 100;

  return (
    <>
      {/* Fixed Top Bar */}
      <TopNav
        streak={streak}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onOpenSyllabus={() => {
          sound.playPop();
          setIsSyllabusOpen(true);
        }}
        currentFilter={currentFilter}
        onSelectFilter={handleFilterSelect}
        selectedSubtopic={selectedSubtopic}
        progressPct={progressPct}
      />

      {/* Main Snap Feed Viewport */}
      <main className="feed-viewport" ref={feedRef}>
        {filteredCards.length === 0 ? (
          <div className="empty-view">
            <div style={{ fontSize: "3rem", marginBottom: "0.8rem" }}>🦕</div>
            <h3 style={{ color: "#fff", marginBottom: "0.4rem" }}>No Cards Found</h3>
            <p style={{ fontSize: "0.85rem", maxWidth: "320px" }}>
              Switch categories or open the JSON Data Studio to paste 50 new cards!
            </p>
            <button
              className="btn-primary"
              style={{ marginTop: "1rem" }}
              onClick={() => handleFilterSelect("all")}
            >
              View All Feed
            </button>
          </div>
        ) : (
          filteredCards.map((card, idx) => (
            <FeedCard
              key={card.id}
              card={card}
              index={idx}
              totalCount={filteredCards.length}
              isBookmarked={bookmarks.has(card.id)}
              onToggleBookmark={handleToggleBookmark}
              onOpenDeepDive={(c) => {
                sound.playPop();
                setActiveDeepDiveCard(c);
              }}
              onOpenEli5={(c) => {
                sound.playPop();
                setActiveEli5Card(c);
              }}
              onCopySummary={handleCopySummary}
              quizRecord={quizRecords[card.id]}
              onAnswerQuiz={handleAnswerQuiz}
              onNavigate={(dir) => navigateToCard(activeIndex + dir)}
            />
          ))
        )}
      </main>

      {/* Drawers / Modals */}
      <DeepDiveModal
        card={activeDeepDiveCard}
        onClose={() => setActiveDeepDiveCard(null)}
      />

      <Eli5Modal
        card={activeEli5Card}
        onClose={() => setActiveEli5Card(null)}
      />

      <SyllabusModal
        isOpen={isSyllabusOpen}
        onClose={() => setIsSyllabusOpen(false)}
        allCards={cards}
        bookmarks={bookmarks}
        onToggleBookmark={handleToggleBookmark}
        onJumpToCard={handleJumpToCard}
        onViewSavedFeed={() => {
          setIsSyllabusOpen(false);
          handleFilterSelect("bookmarked");
        }}
        selectedSubtopicId={selectedSubtopic?.id}
        onSelectSubtopic={handleSubtopicSelect}
      />

      {/* Floating Animated Toast */}
      <div className={`toast-bubble ${showToast ? "show" : ""}`}>
        {toastMessage}
      </div>
    </>
  );
}
