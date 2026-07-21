// ========================================================
// MULTI-TEST STATE MANAGEMENT & TCS iON EXAM ENGINE
// Supports: SSC CGL 2026 & IBPS SO IT Officer 2026
// ========================================================

let activeExamKey = "ssc"; // "ssc" or "ibps"
let activeQuestions = [];
let activeExamConfig = {};

let currentQuestionIndex = 0;
// userAnswers[i] = { selectedOptionIndex: null|number, status: 'unvisited'|'answered'|'not_answered'|'marked'|'ans_marked', isCorrect: null|boolean }
let userAnswers = [];
let timerInterval = null;
let timeLeft = 120 * 60; // seconds
let isExamSubmitted = false;
let practiceMode = "instant"; // "instant" or "exam"

// Confetti Particle System (Restrained non-purple color palette)
let canvas, ctx;
let confettiActive = false;
let confettiParticles = [];
const confettiColors = ['#2563eb', '#16a34a', '#ea580c', '#dc2626', '#0284c7'];

// Web Audio API Sound Synthesizer
let audioCtx = null;

function getAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

function playVictorySound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.2, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.35);
    });
  } catch (e) {
    console.log("Audio playback error:", e);
  }
}

function playSadTromboneSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const pitches = [293.66, 277.18, 261.63, 220.00];
    pitches.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      const startTime = now + idx * 0.14;
      const duration = idx === 3 ? 0.5 : 0.15;
      
      osc.frequency.setValueAtTime(freq, startTime);
      if (idx === 3) {
        osc.frequency.exponentialRampToValueAtTime(140, startTime + duration);
      }
      
      gain.gain.setValueAtTime(0.25, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.start(startTime);
      osc.stop(startTime + duration);
    });
  } catch (e) {
    console.log("Audio playback error:", e);
  }
}

// ========================================================
// INITIALIZATION
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  selectTestTrack("ssc");

  // Setup DOM Listeners
  document.getElementById("start-exam-btn").addEventListener("click", startExam);
  document.getElementById("submit-exam-btn").addEventListener("click", triggerSubmitConfirmation);
  
  const paletteSubmit = document.getElementById("submit-from-palette-btn");
  if (paletteSubmit) paletteSubmit.addEventListener("click", triggerSubmitConfirmation);

  // TCS iON Action Buttons
  document.getElementById("next-btn").addEventListener("click", saveAndNext);
  document.getElementById("prev-btn").addEventListener("click", showPrevQuestion);
  document.getElementById("clear-resp-btn").addEventListener("click", clearResponse);
  document.getElementById("mark-review-next-btn").addEventListener("click", markForReviewAndNext);
  document.getElementById("save-review-btn").addEventListener("click", saveAndMarkForReview);

  // Mode Switcher
  const modeSelect = document.getElementById("practice-mode-toggle");
  if (modeSelect) {
    modeSelect.addEventListener("change", (e) => {
      practiceMode = e.target.value;
      loadQuestion(currentQuestionIndex);
      showToast(`Mode switched: ${practiceMode === 'instant' ? 'Instant Feedback' : 'Real Exam Mode'}`, "primary");
    });
  }

  // Filter Buttons
  document.getElementById("filter-all").addEventListener("click", () => filterReviewList("all"));
  document.getElementById("filter-incorrect").addEventListener("click", () => filterReviewList("incorrect"));
  document.getElementById("filter-skipped").addEventListener("click", () => filterReviewList("skipped"));
  document.getElementById("restart-test-btn").addEventListener("click", returnToHome);

  // Modal Buttons
  document.getElementById("modal-cancel-btn").addEventListener("click", hideModal);
  document.getElementById("modal-confirm-btn").addEventListener("click", submitExam);

  setupConfettiCanvas();
  window.addEventListener("resize", resizeConfettiCanvas);
});

// ========================================================
// MULTI-TEST SELECTION HUB LOGIC
// ========================================================
window.selectTestTrack = function(examKey) {
  activeExamKey = examKey;
  activeExamConfig = EXAMS_DATA[examKey];
  activeQuestions = activeExamConfig.questions;

  // Toggle active card state
  document.querySelectorAll(".test-card").forEach(card => card.classList.remove("active"));
  const activeCard = document.getElementById(`test-card-${examKey}`);
  if (activeCard) activeCard.classList.add("active");

  // Update card status labels
  document.querySelectorAll(".test-card .select-label").forEach(el => el.textContent = "Select Track");
  if (activeCard) {
    const activeLabel = activeCard.querySelector(".select-label");
    if (activeLabel) activeLabel.textContent = "Selected Track";
  }

  // Update selected test details block
  document.getElementById("selected-exam-title").textContent = activeExamConfig.name;
  document.getElementById("selected-exam-sub").textContent = activeExamConfig.subName;
  document.getElementById("stat-val-mcqs").textContent = activeExamConfig.questions.length;
  document.getElementById("stat-val-duration").textContent = `${activeExamConfig.durationMinutes} Min`;
  document.getElementById("stat-val-penalty").textContent = `1/${Math.round(1/activeExamConfig.negativeMark)} (${activeExamConfig.negativeText})`;
  document.getElementById("stat-label-penalty").textContent = `${examKey.toUpperCase()} Negative Marking`;

  // Render syllabus grid
  const syllabusGrid = document.getElementById("syllabus-grid");
  syllabusGrid.innerHTML = "";
  activeExamConfig.categories.forEach(cat => {
    const div = document.createElement("div");
    div.className = "syllabus-item";
    div.innerHTML = `<span class="bullet"></span> ${cat}`;
    syllabusGrid.appendChild(div);
  });

  // Render rules text
  const rulesList = document.getElementById("rules-list");
  rulesList.innerHTML = `
    <li>Each correct answer awards <strong>+${activeExamConfig.positiveMark.toFixed(2)} mark</strong>. Each incorrect answer carries a <strong>${activeExamConfig.negativeText} marks</strong> penalty.</li>
    <li>Total time allocated: <strong>${activeExamConfig.durationMinutes} minutes</strong> for 100 questions.</li>
    <li>Click <strong>Save & Next</strong> to lock your answer and proceed to the next question.</li>
    <li>Click <strong>Clear Response</strong> to remove your option selection.</li>
    <li>Click <strong>Save & Mark for Review</strong> or <strong>Mark for Review & Next</strong> to flag questions for review.</li>
    <li>Toggle between <strong>Instant Feedback Mode</strong> (with explanations & celebrations) and <strong>Real Exam Mode</strong> (pure examination simulation).</li>
  `;
};

function resetAnswersState() {
  userAnswers = Array.from({ length: activeQuestions.length }, () => ({
    selectedOptionIndex: null,
    status: 'unvisited',
    isCorrect: null
  }));
}

// ========================================================
// VIEW ENGINE
// ========================================================
function switchView(viewId) {
  document.querySelectorAll(".view-panel").forEach(panel => {
    panel.classList.remove("active");
  });
  const target = document.getElementById(viewId);
  target.classList.add("active");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function returnToHome() {
  hideModal();
  clearInterval(timerInterval);
  switchView("welcome-view");
}

// ========================================================
// TIMER ENGINE
// ========================================================
function startTimer() {
  timeLeft = activeExamConfig.durationMinutes * 60;
  updateTimerDisplay();
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showToast("Time expired. Submitting examination.", "warning");
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  
  const formatted = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].join(':');
  
  const clock = document.getElementById("timer-clock");
  if (clock) clock.textContent = formatted;
}

// ========================================================
// TOAST & PENALTY ENGINE
// ========================================================
function showToast(message, type = "primary") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add("fade-out");
    toast.addEventListener("animationend", () => toast.remove());
  }, 2500);
}

function triggerBadCelebration() {
  const overlay = document.getElementById("bad-celebration-overlay");
  const text = document.getElementById("bad-celebration-text");
  const badge = document.getElementById("bad-celebration-badge");

  if (!overlay) return;

  if (text) text.textContent = `Negative Marking Penalty Applied (${activeExamConfig.negativeText} Marks)`;
  if (badge) badge.textContent = `${activeExamConfig.id.toUpperCase()} Exam Scheme`;

  playSadTromboneSound();
  overlay.classList.remove("hidden");

  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 1400);
}

// ========================================================
// EXAM WORKFLOWS
// ========================================================
function startExam() {
  currentQuestionIndex = 0;
  isExamSubmitted = false;
  resetAnswersState();

  // Update TCS iON Header
  document.getElementById("tcs-exam-title").textContent = activeExamConfig.name;
  document.getElementById("tcs-sub-title").textContent = activeExamConfig.subName;
  document.getElementById("tcs-sys-id").textContent = activeExamConfig.labId;
  document.getElementById("tcs-cand-subject").textContent = activeExamConfig.subject;
  document.getElementById("tcs-tab-label").textContent = activeExamKey === 'ssc' ? "General Awareness" : "Professional Knowledge";
  document.getElementById("tcs-mark-pos").textContent = `+${activeExamConfig.positiveMark.toFixed(2)}`;
  document.getElementById("tcs-mark-neg").textContent = activeExamConfig.negativeText;

  buildNavigatorGrid();
  loadQuestion(0);
  startTimer();
  switchView("quiz-view");
  showToast(`${activeExamConfig.name} started.`, "primary");
}

function buildNavigatorGrid() {
  const container = document.getElementById("question-navigator-grid");
  container.innerHTML = "";
  
  for (let i = 0; i < activeQuestions.length; i++) {
    const btn = document.createElement("button");
    btn.className = "nav-btn status-unvisited";
    btn.id = `nav-btn-${i}`;
    btn.textContent = i + 1;
    btn.addEventListener("click", () => {
      if (userAnswers[currentQuestionIndex].status === 'unvisited') {
        userAnswers[currentQuestionIndex].status = 'not_answered';
      }
      loadQuestion(i);
    });
    container.appendChild(btn);
  }
  updatePaletteSummaryCounts();
}

function loadQuestion(index) {
  currentQuestionIndex = index;
  const question = activeQuestions[index];
  const state = userAnswers[index];

  if (state.status === 'unvisited') {
    state.status = 'not_answered';
  }

  document.querySelectorAll(".nav-btn").forEach((btn, i) => {
    if (i === index) {
      btn.classList.add("active");
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      btn.classList.remove("active");
    }
  });

  document.getElementById("question-index-label").textContent = `Question No. ${index + 1}`;
  document.getElementById("question-category-label").textContent = question.category;
  document.getElementById("question-text").textContent = question.question;

  const optionsContainer = document.getElementById("options-list");
  optionsContainer.innerHTML = "";
  const alphabet = ["A", "B", "C", "D"];

  question.options.forEach((optText, optIdx) => {
    const optBtn = document.createElement("button");
    optBtn.className = "option-item";
    optBtn.innerHTML = `
      <span class="option-badge">${alphabet[optIdx]}</span>
      <span class="option-text"></span>
    `;
    optBtn.querySelector(".option-text").textContent = optText;

    if (state.selectedOptionIndex === optIdx) {
      optBtn.classList.add("selected");
    }

    if (practiceMode === "instant" && state.selectedOptionIndex !== null) {
      optBtn.classList.add("locked");
      if (optIdx === question.correctIndex) {
        optBtn.classList.add("correct-ans");
      } else if (optIdx === state.selectedOptionIndex) {
        optBtn.classList.add("wrong-ans");
      }
    } else {
      optBtn.addEventListener("click", () => handleOptionClick(optIdx));
    }

    optionsContainer.appendChild(optBtn);
  });

  const feedbackBox = document.getElementById("instant-feedback-box");
  if (practiceMode === "instant" && state.selectedOptionIndex !== null) {
    feedbackBox.classList.remove("hidden");
    const feedbackTitle = document.getElementById("feedback-title");
    const feedbackText = document.getElementById("feedback-text");
    const explanationText = document.getElementById("question-explanation-text");
    
    explanationText.textContent = question.explanation;
    
    if (state.isCorrect) {
      feedbackBox.className = "feedback-box correct-feedback";
      feedbackTitle.textContent = `Correct Answer (+${activeExamConfig.positiveMark.toFixed(2)} Mark)`;
      feedbackText.textContent = `Selected Option ${alphabet[state.selectedOptionIndex]}.`;
    } else {
      feedbackBox.className = "feedback-box wrong-feedback";
      feedbackTitle.textContent = `Incorrect Answer (${activeExamConfig.negativeText} Penalty)`;
      feedbackText.textContent = `Selected Option ${alphabet[state.selectedOptionIndex]}. Correct answer is Option ${alphabet[question.correctIndex]}.`;
    }
  } else {
    feedbackBox.classList.add("hidden");
  }

  document.getElementById("prev-btn").disabled = (index === 0);
  const nextBtn = document.getElementById("next-btn");
  nextBtn.textContent = index === activeQuestions.length - 1 ? "Save & Submit" : "Save & Next";

  updatePaletteButtonUI(index);
  updatePaletteSummaryCounts();
}

function handleOptionClick(optIdx) {
  const question = activeQuestions[currentQuestionIndex];
  const state = userAnswers[currentQuestionIndex];

  state.selectedOptionIndex = optIdx;
  state.isCorrect = (optIdx === question.correctIndex);

  const buttons = document.querySelectorAll("#options-list .option-item");
  buttons.forEach((btn, i) => {
    if (i === optIdx) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  });

  if (practiceMode === "instant") {
    state.status = state.isCorrect ? 'answered' : 'not_answered';
    loadQuestion(currentQuestionIndex);

    if (state.isCorrect) {
      triggerConfetti();
      playVictorySound();
      showToast(`Correct Answer (+${activeExamConfig.positiveMark.toFixed(2)} Mark)`, "success");
    } else {
      triggerBadCelebration();
      showToast(`Incorrect Answer (${activeExamConfig.negativeText} Penalty)`, "error");
    }
  }
}

// ========================================================
// TCS iON CONTROL ACTIONS
// ========================================================
function saveAndNext() {
  const state = userAnswers[currentQuestionIndex];
  
  if (state.selectedOptionIndex !== null) {
    state.status = 'answered';
  } else {
    state.status = 'not_answered';
  }
  
  updatePaletteButtonUI(currentQuestionIndex);
  updatePaletteSummaryCounts();

  if (currentQuestionIndex < activeQuestions.length - 1) {
    loadQuestion(currentQuestionIndex + 1);
  } else {
    triggerSubmitConfirmation();
  }
}

function clearResponse() {
  const state = userAnswers[currentQuestionIndex];
  state.selectedOptionIndex = null;
  state.isCorrect = null;
  state.status = 'not_answered';

  loadQuestion(currentQuestionIndex);
  showToast("Response cleared.", "warning");
}

function markForReviewAndNext() {
  const state = userAnswers[currentQuestionIndex];
  
  if (state.selectedOptionIndex !== null) {
    state.status = 'ans_marked';
  } else {
    state.status = 'marked';
  }
  
  updatePaletteButtonUI(currentQuestionIndex);
  updatePaletteSummaryCounts();

  if (currentQuestionIndex < activeQuestions.length - 1) {
    loadQuestion(currentQuestionIndex + 1);
  } else {
    triggerSubmitConfirmation();
  }
}

function saveAndMarkForReview() {
  const state = userAnswers[currentQuestionIndex];
  state.status = 'ans_marked';
  
  updatePaletteButtonUI(currentQuestionIndex);
  updatePaletteSummaryCounts();

  if (currentQuestionIndex < activeQuestions.length - 1) {
    loadQuestion(currentQuestionIndex + 1);
  } else {
    triggerSubmitConfirmation();
  }
}

function showPrevQuestion() {
  if (currentQuestionIndex > 0) {
    loadQuestion(currentQuestionIndex - 1);
  }
}

function updatePaletteButtonUI(index) {
  const btn = document.getElementById(`nav-btn-${index}`);
  if (!btn) return;

  const status = userAnswers[index].status;
  btn.className = `nav-btn status-${status}`;
  if (index === currentQuestionIndex) {
    btn.classList.add("active");
  }
}

function updatePaletteSummaryCounts() {
  let answered = 0;
  let notAnswered = 0;
  let unvisited = 0;
  let marked = 0;
  let ansMarked = 0;

  userAnswers.forEach(ans => {
    if (ans.status === 'answered') answered++;
    else if (ans.status === 'not_answered') notAnswered++;
    else if (ans.status === 'unvisited') unvisited++;
    else if (ans.status === 'marked') marked++;
    else if (ans.status === 'ans_marked') ansMarked++;
  });

  document.getElementById("cnt-answered").textContent = answered;
  document.getElementById("cnt-not-answered").textContent = notAnswered;
  document.getElementById("cnt-not-visited").textContent = unvisited;
  document.getElementById("cnt-marked").textContent = marked;
  document.getElementById("cnt-ans-marked").textContent = ansMarked;
}

// ========================================================
// SUBMISSION & SCORECARD ENGINE
// ========================================================
function triggerSubmitConfirmation() {
  let answered = 0;
  let marked = 0;
  let unvisited = 0;

  userAnswers.forEach(ans => {
    if (ans.selectedOptionIndex !== null) answered++;
    if (ans.status === 'marked' || ans.status === 'ans_marked') marked++;
    if (ans.status === 'unvisited') unvisited++;
  });

  const modal = document.getElementById("confirm-modal");
  const modalMsg = document.getElementById("modal-message");

  let msgHtml = `You have answered <strong>${answered}</strong> out of ${activeQuestions.length} questions.<br>`;
  if (marked > 0) msgHtml += `<strong>${marked}</strong> questions marked for review.<br>`;
  if (unvisited > 0) msgHtml += `<strong>${unvisited}</strong> questions remain unvisited.<br>`;
  msgHtml += `<br>Are you sure you want to final submit?`;

  modalMsg.innerHTML = msgHtml;
  modal.classList.remove("hidden");
}

function hideModal() {
  document.getElementById("confirm-modal").classList.add("hidden");
}

function submitExam() {
  clearInterval(timerInterval);
  isExamSubmitted = true;
  hideModal();

  let correctCount = 0;
  let wrongCount = 0;
  let skippedCount = 0;

  userAnswers.forEach(ans => {
    if (ans.selectedOptionIndex === null) {
      skippedCount++;
    } else if (ans.isCorrect) {
      correctCount++;
    } else {
      wrongCount++;
    }
  });

  const rawScore = correctCount * activeExamConfig.positiveMark;
  const negativePenalty = wrongCount * activeExamConfig.negativeMark;
  const finalScore = Math.max(0, rawScore - negativePenalty);
  const accuracy = correctCount + wrongCount > 0 ? Math.round((correctCount / (correctCount + wrongCount)) * 100) : 0;

  document.getElementById("scorecard-exam-title").textContent = activeExamConfig.name;
  document.getElementById("scorecard-exam-sub").textContent = activeExamConfig.subName;
  document.getElementById("final-score").textContent = finalScore.toFixed(2);
  document.getElementById("score-correct-cnt").textContent = correctCount;
  document.getElementById("score-wrong-cnt").textContent = wrongCount;
  document.getElementById("score-penalty-stat-label").textContent = `Incorrect (${activeExamConfig.negativeText} Each)`;
  document.getElementById("score-skipped-cnt").textContent = skippedCount;
  document.getElementById("score-accuracy").textContent = `${accuracy}%`;
  document.getElementById("scorecard-penalty-text").textContent = `Calculated with 1/${Math.round(1/activeExamConfig.negativeMark)} (${activeExamConfig.negativeText}) negative marking penalty.`;

  renderSubjectAnalysis();
  generateRecommendations(correctCount, wrongCount, finalScore);
  filterReviewList("all");

  switchView("scorecard-view");
  showToast("Examination submitted successfully.", "success");
}

function renderSubjectAnalysis() {
  const container = document.getElementById("subject-analysis-grid");
  container.innerHTML = "";

  const categoriesStats = {};
  activeExamConfig.categories.forEach(cat => {
    categoriesStats[cat] = { total: 0, correct: 0, wrong: 0, skipped: 0 };
  });

  activeQuestions.forEach((q, index) => {
    const cat = q.category;
    const ans = userAnswers[index];
    if (categoriesStats[cat]) {
      categoriesStats[cat].total++;

      if (ans.selectedOptionIndex === null) {
        categoriesStats[cat].skipped++;
      } else if (ans.isCorrect) {
        categoriesStats[cat].correct++;
      } else {
        categoriesStats[cat].wrong++;
      }
    }
  });

  activeExamConfig.categories.forEach(cat => {
    const stats = categoriesStats[cat] || { total: 0, correct: 0, wrong: 0, skipped: 0 };
    const percentage = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;

    let badgeClass = "badge-danger";
    let badgeText = "Weak Area";
    let barColorClass = "fill-danger";

    if (percentage >= 75) {
      badgeClass = "badge-success";
      badgeText = "Strong Area";
      barColorClass = "fill-success";
    } else if (percentage >= 50) {
      badgeClass = "badge-warning";
      badgeText = "Average Area";
      barColorClass = "fill-warning";
    }

    const card = document.createElement("div");
    card.className = "subject-analysis-card";
    card.innerHTML = `
      <div class="subject-name">${cat}</div>
      <div class="subject-progress">
        <div class="progress-bar-wrapper">
          <div class="progress-bar-fill ${barColorClass}" style="width: ${percentage}%"></div>
        </div>
        <div style="font-size: 12px; color: var(--color-text-muted); margin-top: 4px;">
          Score: ${stats.correct}/${stats.total} (${percentage}%) • Correct: ${stats.correct} • Wrong: ${stats.wrong}
        </div>
      </div>
      <div class="subject-badge-wrap">
        <span class="badge ${badgeClass}">${badgeText}</span>
      </div>
    `;
    container.appendChild(card);
  });
}

function generateRecommendations(correctCount, wrongCount, finalScore) {
  const categoriesStats = {};
  activeExamConfig.categories.forEach(cat => { categoriesStats[cat] = { total: 0, correct: 0 }; });
  activeQuestions.forEach((q, index) => {
    if (categoriesStats[q.category]) {
      categoriesStats[q.category].total++;
      if (userAnswers[index].isCorrect) categoriesStats[q.category].correct++;
    }
  });

  const weakTopics = [];
  const strongTopics = [];

  activeExamConfig.categories.forEach(cat => {
    const stats = categoriesStats[cat];
    if (stats && stats.total > 0) {
      const pct = (stats.correct / stats.total) * 100;
      if (pct < 50) weakTopics.push({ name: cat, score: pct });
      else if (pct >= 75) strongTopics.push({ name: cat, score: pct });
    }
  });

  let recText = "";
  if (finalScore >= 70) {
    recText = `Score of **${finalScore.toFixed(2)}/100**. Excellent command over ${activeExamConfig.name} domains. `;
    if (weakTopics.length > 0) recText += `Focus revision on: **${weakTopics.map(w => w.name).join(", ")}**. `;
  } else if (finalScore >= 40) {
    recText = `Score of **${finalScore.toFixed(2)}/100**. `;
    if (weakTopics.length > 0) recText += `Target critical gaps in: **${weakTopics.map(w => w.name).join(", ")}**. `;
  } else {
    recText = `Score of **${finalScore.toFixed(2)}/100**. `;
    if (weakTopics.length > 0) recText += `Systematic study required in: **${weakTopics.map(w => w.name).join(", ")}**. `;
  }

  document.getElementById("recommendation-text").innerHTML = recText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

let activeFilter = "all";

function filterReviewList(filterType) {
  activeFilter = filterType;
  document.querySelectorAll(".btn-filter").forEach(btn => btn.classList.remove("active"));
  document.getElementById(`filter-${filterType}`).classList.add("active");
  renderReviewList();
}

function renderReviewList() {
  const container = document.getElementById("review-questions-list");
  container.innerHTML = "";
  let displayedCount = 0;
  const alphabet = ["A", "B", "C", "D"];

  activeQuestions.forEach((q, index) => {
    const ans = userAnswers[index];
    let shouldDisplay = false;

    if (activeFilter === "all" && (ans.selectedOptionIndex === null || !ans.isCorrect)) shouldDisplay = true;
    if (activeFilter === "incorrect" && ans.selectedOptionIndex !== null && !ans.isCorrect) shouldDisplay = true;
    if (activeFilter === "skipped" && ans.selectedOptionIndex === null) shouldDisplay = true;

    if (!shouldDisplay) return;
    displayedCount++;

    const item = document.createElement("div");
    item.className = "review-item";
    const isSkipped = (ans.selectedOptionIndex === null);
    const statusText = isSkipped 
      ? `<span class="badge badge-secondary">Skipped</span>`
      : `<span class="badge badge-danger">Incorrect (${activeExamConfig.negativeText})</span>`;

    item.innerHTML = `
      <div class="review-item-header" onclick="toggleReviewItem(this)">
        <div class="review-header-left">
          <span class="review-category">${index + 1}. ${q.category}</span>
          <p class="review-question-text"></p>
        </div>
        <div class="review-header-right">${statusText}</div>
      </div>
      <div class="review-item-body">
        <div class="review-options-summary"></div>
        <div class="review-explanation">
          <h6>Answer Explanation:</h6>
          <p class="explanation-text"></p>
        </div>
      </div>
    `;

    item.querySelector(".review-question-text").textContent = q.question;
    item.querySelector(".explanation-text").textContent = q.explanation;

    const optionsContainer = item.querySelector(".review-options-summary");
    q.options.forEach((optText, oIdx) => {
      const optDiv = document.createElement("div");
      optDiv.className = "review-opt";
      optDiv.innerHTML = `<span class="review-opt-badge">${alphabet[oIdx]}</span> <span class="review-opt-text"></span>`;
      optDiv.querySelector(".review-opt-text").textContent = optText;

      if (oIdx === q.correctIndex) optDiv.classList.add("correct");
      else if (!isSkipped && oIdx === ans.selectedOptionIndex) optDiv.classList.add("user-wrong");

      optionsContainer.appendChild(optDiv);
    });

    container.appendChild(item);
  });

  if (displayedCount === 0) {
    container.innerHTML = `<div style="text-align: center; padding: 40px; color: var(--color-text-muted);">No questions fit the chosen filter.</div>`;
  }
}

window.toggleReviewItem = function(headerElement) {
  const item = headerElement.parentElement;
  const isExpanded = item.classList.contains("expanded");
  document.querySelectorAll(".review-item").forEach(el => el.classList.remove("expanded"));
  if (!isExpanded) item.classList.add("expanded");
};

// Canvas Confetti
function setupConfettiCanvas() {
  canvas = document.getElementById("confetti-canvas");
  ctx = canvas.getContext("2d");
  resizeConfettiCanvas();
}

function resizeConfettiCanvas() {
  if (canvas) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
}

function triggerConfetti() {
  confettiActive = true;
  confettiParticles = [];
  for (let i = 0; i < 100; i++) {
    confettiParticles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -100 - 10,
      size: Math.random() * 7 + 5,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      speedY: Math.random() * 3 + 3,
      speedX: Math.random() * 3 - 1.5,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 3 - 1.5,
      opacity: 1
    });
  }
  requestAnimationFrame(updateAndDrawConfetti);
}

function updateAndDrawConfetti() {
  if (!confettiActive) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  let liveCount = 0;

  confettiParticles.forEach(p => {
    if (p.opacity > 0) {
      liveCount++;
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.006;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.opacity);
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.4);
      ctx.restore();
    }
  });

  if (liveCount > 0) {
    requestAnimationFrame(updateAndDrawConfetti);
  } else {
    confettiActive = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
