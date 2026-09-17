import { DEFAULT_SEED_CARDS } from "../data/seedCards";

const KEYS = {
  CARDS: "geoscroll_cards_custom",
  BOOKMARKS: "geoscroll_bookmarks",
  QUIZ: "geoscroll_quizzes",
  STREAK: "geoscroll_streak",
  LAST_VISIT: "geoscroll_last_visit",
  LAST_CARD: "geoscroll_last_card_idx"
};

export function getInitialCards() {
  try {
    const saved = localStorage.getItem(KEYS.CARDS);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length >= DEFAULT_SEED_CARDS.length && parsed.some((c) => c.id === 301)) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Failed to load cards from localStorage", e);
  }
  saveCardsToStorage(DEFAULT_SEED_CARDS);
  return DEFAULT_SEED_CARDS;
}

export function saveCardsToStorage(cards) {
  try {
    localStorage.setItem(KEYS.CARDS, JSON.stringify(cards));
  } catch (e) {
    console.error("Failed to save cards to localStorage", e);
  }
}

export function resetCardsToDefault() {
  localStorage.removeItem(KEYS.CARDS);
  return DEFAULT_SEED_CARDS;
}

export function getBookmarks() {
  try {
    return new Set(JSON.parse(localStorage.getItem(KEYS.BOOKMARKS) || "[]"));
  } catch {
    return new Set();
  }
}

export function saveBookmarks(bookmarkSet) {
  localStorage.setItem(KEYS.BOOKMARKS, JSON.stringify(Array.from(bookmarkSet)));
}

export function getQuizRecords() {
  try {
    return JSON.parse(localStorage.getItem(KEYS.QUIZ) || "{}");
  } catch {
    return {};
  }
}

export function saveQuizRecord(cardId, optionIndex, isCorrect) {
  const current = getQuizRecords();
  current[cardId] = { selected: optionIndex, correct: isCorrect, timestamp: Date.now() };
  localStorage.setItem(KEYS.QUIZ, JSON.stringify(current));
  return current;
}

export function computeDailyStreak() {
  try {
    const today = new Date().toISOString().split("T")[0];
    const lastVisit = localStorage.getItem(KEYS.LAST_VISIT);
    let streak = parseInt(localStorage.getItem(KEYS.STREAK) || "1", 10);

    if (!lastVisit) {
      streak = 1;
    } else if (lastVisit === today) {
      // Visited already today
    } else {
      const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
      if (lastVisit === yesterday) {
        streak += 1;
      } else {
        streak = 1; // missed
      }
    }
    localStorage.setItem(KEYS.LAST_VISIT, today);
    localStorage.setItem(KEYS.STREAK, streak.toString());
    return streak;
  } catch {
    return 1;
  }
}
