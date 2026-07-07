// ========================================================
// STATE MANAGEMENT
// ========================================================
let currentQuestionIndex = 0;
let userAnswers = []; // Array of { selectedOptionIndex: null|number, status: 'unvisited'|'correct'|'wrong'|'review'|'skipped', isCorrect: null|boolean }
let timerInterval = null;
let timeLeft = 120 * 60; // 120 minutes in seconds (7200s)
let isExamSubmitted = false;

// Dynamic categories derived from questions
const SUBJECT_CATEGORIES = [
  "Pedagogy & Mental Ability",
  "Computer Fundamentals & Number Systems",
  "Programming Fundamentals (C, C++, Java, Python)",
  "Data Structures & Algorithms",
  "Operating Systems & Computer Org",
  "Database Management System (DBMS)",
  "Computer Networks & Security",
  "System Analysis and Design & IoT"
];

// Confetti Particle System Variables
let canvas, ctx;
let confettiActive = false;
let confettiParticles = [];
const confettiColors = ['#6366f1', '#10b981', '#fbbf24', '#ef4444', '#ec4899', '#3b82f6'];

// ========================================================
// INITIALIZATION
// ========================================================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize userAnswers array
  resetAnswersState();

  // Setup main DOM event listeners
  document.getElementById("start-exam-btn").addEventListener("click", startExam);
  document.getElementById("submit-exam-btn").addEventListener("click", () => triggerSubmitConfirmation());
  document.getElementById("prev-btn").addEventListener("click", showPrevQuestion);
  document.getElementById("next-btn").addEventListener("click", showNextQuestion);
  document.getElementById("skip-btn").addEventListener("click", skipQuestion);
  document.getElementById("review-btn").addEventListener("click", markForReview);
  
  // Scorecard filter buttons
  document.getElementById("filter-all").addEventListener("click", () => filterReviewList("all"));
  document.getElementById("filter-incorrect").addEventListener("click", () => filterReviewList("incorrect"));
  document.getElementById("filter-skipped").addEventListener("click", () => filterReviewList("skipped"));
  
  // Restart button
  document.getElementById("restart-test-btn").addEventListener("click", restartExam);

  // Setup modal cancel/confirm actions
  document.getElementById("modal-cancel-btn").addEventListener("click", hideModal);
  document.getElementById("modal-confirm-btn").addEventListener("click", submitExam);

  // Setup particle canvas sizes
  setupConfettiCanvas();
  window.addEventListener("resize", resizeConfettiCanvas);
});

function resetAnswersState() {
  userAnswers = Array.from({ length: QUESTIONS.length }, () => ({
    selectedOptionIndex: null,
    status: 'unvisited',
    isCorrect: null
  }));
}

// ========================================================
// VIEW TRANSITIONS
// ========================================================
function switchView(viewId) {
  // Hide all views
  document.querySelectorAll(".view-panel").forEach(panel => {
    panel.classList.remove("active");
  });
  
  // Show target view
  const target = document.getElementById(viewId);
  target.classList.add("active");
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================================
// TIMER ENGINE
// ========================================================
function startTimer() {
  timeLeft = 120 * 60; // Reset to 2 hours
  updateTimerDisplay();
  
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      showToast("Time's up! Submitting your exam.", "warning");
      submitExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  
  const formattedTime = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].join(':');
  
  const timerClock = document.getElementById("timer-clock");
  timerClock.textContent = formattedTime;
  
  // Visual urgency warnings
  if (timeLeft < 300) { // < 5 mins
    timerClock.style.color = '#ef4444';
    timerClock.classList.add('pulse');
  } else if (timeLeft < 900) { // < 15 mins
    timerClock.style.color = '#f59e0b';
  } else {
    timerClock.style.color = 'white';
    timerClock.classList.remove('pulse');
  }
}

// ========================================================
// TOAST ENGINE
// ========================================================
function showToast(message, type = "primary") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  // Choose icon based on type
  let icon = `
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="icon-left"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 111.063 1.063L12 13.062v2.25m0-10.5a.75.75 0 110-1.5.75.75 0 0 1 0 1.5zM12 21.75a9.75 9.75 0 100-19.5 9.75 9.75 0 0 0 0 19.5z" /></svg>
  `;
  if (type === "success") {
    icon = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="icon-left"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    `;
  } else if (type === "error") {
    icon = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="icon-left"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    `;
  } else if (type === "warning") {
    icon = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="icon-left"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" /></svg>
    `;
  }
  
  toast.innerHTML = `${icon} <span>${message}</span>`;
  container.appendChild(toast);
  
  // Fade out and remove toast after 3 seconds
  setTimeout(() => {
    toast.classList.add("fade-out");
    toast.addEventListener("animationend", () => {
      toast.remove();
    });
  }, 2500);
}

// ========================================================
// EXAM WORKFLOWS
// ========================================================
function startExam() {
  currentQuestionIndex = 0;
  isExamSubmitted = false;
  
  resetAnswersState();
  buildNavigatorGrid();
  loadQuestion(0);
  startTimer();
  switchView("quiz-view");
  showToast("Exam started! All the best.", "primary");
}

function restartExam() {
  hideModal();
  startExam();
}

function buildNavigatorGrid() {
  const container = document.getElementById("question-navigator-grid");
  container.innerHTML = "";
  
  for (let i = 0; i < QUESTIONS.length; i++) {
    const btn = document.createElement("button");
    btn.className = "nav-btn";
    btn.id = `nav-btn-${i}`;
    btn.textContent = i + 1;
    btn.addEventListener("click", () => {
      saveSkippedStatusIfUnvisited();
      loadQuestion(i);
    });
    container.appendChild(btn);
  }
  updateNavigatorStatusBadges();
}

function saveSkippedStatusIfUnvisited() {
  // If the user navigates away from a question they haven't answered and it's marked as unvisited,
  // we count it as 'unvisited' until they skip it or submit, but let's update badges.
}

function loadQuestion(index) {
  currentQuestionIndex = index;
  const question = QUESTIONS[index];
  const state = userAnswers[index];
  
  // Highlight active button in navigator grid
  document.querySelectorAll(".nav-btn").forEach((btn, i) => {
    if (i === index) {
      btn.classList.add("active");
      // Scroll grid item into view inside its parent container
      btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      btn.classList.remove("active");
    }
  });

  // Update labels
  document.getElementById("question-index-label").textContent = `Question ${index + 1} of ${QUESTIONS.length}`;
  document.getElementById("question-category-label").textContent = question.category;
  
  // Update question text
  document.getElementById("question-text").textContent = question.question;
  
  // Generate options
  const optionsContainer = document.getElementById("options-list");
  optionsContainer.innerHTML = "";
  
  const alphabet = ["A", "B", "C", "D"];
  
  question.options.forEach((optText, i) => {
    const optBtn = document.createElement("button");
    optBtn.className = "option-item";
    optBtn.innerHTML = `
      <span class="option-badge">${alphabet[i]}</span>
      <span class="option-text"></span>
    `;
    // Set textContent to avoid XSS issues
    optBtn.querySelector(".option-text").textContent = optText;
    
    // Check lock state
    if (state.selectedOptionIndex !== null) {
      optBtn.classList.add("locked");
      
      if (i === question.correctIndex) {
        optBtn.classList.add("correct-ans");
      } else if (i === state.selectedOptionIndex) {
        optBtn.classList.add("wrong-ans");
      } else {
        optBtn.classList.add("dimmed");
      }
    } else {
      optBtn.addEventListener("click", () => handleOptionClick(i));
    }
    
    optionsContainer.appendChild(optBtn);
  });

  // Handle instant feedback box
  const feedbackBox = document.getElementById("instant-feedback-box");
  if (state.selectedOptionIndex !== null) {
    feedbackBox.classList.remove("hidden");
    
    const feedbackTitle = document.getElementById("feedback-title");
    const feedbackText = document.getElementById("feedback-text");
    const explanationText = document.getElementById("question-explanation-text");
    
    explanationText.textContent = question.explanation;
    
    if (state.isCorrect) {
      feedbackBox.className = "feedback-box correct-feedback";
      feedbackTitle.textContent = "Correct! (+1.0 Marks)";
      feedbackText.textContent = `You correctly selected Option ${alphabet[state.selectedOptionIndex]}.`;
      document.getElementById("feedback-icon").innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width: 24px; height: 24px; color: var(--color-success);"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
      `;
    } else {
      feedbackBox.className = "feedback-box wrong-feedback";
      feedbackTitle.textContent = "Incorrect! (-0.33 Marks)";
      feedbackText.textContent = `You selected Option ${alphabet[state.selectedOptionIndex]}. The correct answer is Option ${alphabet[question.correctIndex]}.`;
      document.getElementById("feedback-icon").innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" style="width: 24px; height: 24px; color: var(--color-danger);"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
      `;
    }
  } else {
    feedbackBox.classList.add("hidden");
  }

  // Manage Prev/Next button disabled states
  document.getElementById("prev-btn").disabled = (index === 0);
  
  const nextBtn = document.getElementById("next-btn");
  if (index === QUESTIONS.length - 1) {
    nextBtn.innerHTML = `
      Submit Exam
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="icon-right"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
    `;
  } else {
    nextBtn.innerHTML = `
      Next
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="icon-right"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5 15.75 12l-7.5 7.5" /></svg>
    `;
  }
}

// ========================================================
// QUIZ CONTROLS LOGIC
// ========================================================
function handleOptionClick(selectedIndex) {
  const question = QUESTIONS[currentQuestionIndex];
  const state = userAnswers[currentQuestionIndex];
  
  if (state.selectedOptionIndex !== null) return; // Locked

  const isCorrect = (selectedIndex === question.correctIndex);
  
  // Save state
  state.selectedOptionIndex = selectedIndex;
  state.isCorrect = isCorrect;
  state.status = isCorrect ? 'correct' : 'wrong';

  // Apply colors dynamically to the option buttons
  const optionsContainer = document.getElementById("options-list");
  const buttons = optionsContainer.querySelectorAll(".option-item");
  
  buttons.forEach((btn, i) => {
    btn.classList.add("locked");
    if (i === question.correctIndex) {
      btn.classList.add("correct-ans");
    } else if (i === selectedIndex) {
      btn.classList.add("wrong-ans");
    } else {
      btn.classList.add("dimmed");
    }
  });

  // Display feedback panel immediately
  loadQuestion(currentQuestionIndex);
  
  // Update navigator color state
  updateNavigatorButtonUI(currentQuestionIndex, state.status);
  updateNavigatorStatusBadges();

  if (isCorrect) {
    triggerConfetti();
    showToast("Correct Answer! +1.0 Marks", "success");
  } else {
    showToast("Wrong Answer! -0.33 Marks", "error");
  }
}

function skipQuestion() {
  const state = userAnswers[currentQuestionIndex];
  
  // If not answered yet, mark as skipped
  if (state.selectedOptionIndex === null) {
    state.status = 'skipped';
    updateNavigatorButtonUI(currentQuestionIndex, 'skipped');
    updateNavigatorStatusBadges();
    showToast("Question skipped.", "warning");
  }
  
  showNextQuestion();
}

function markForReview() {
  const state = userAnswers[currentQuestionIndex];
  state.status = 'review';
  
  updateNavigatorButtonUI(currentQuestionIndex, 'review');
  updateNavigatorStatusBadges();
  showToast("Question marked for review.", "warning");
  
  showNextQuestion();
}

function showPrevQuestion() {
  if (currentQuestionIndex > 0) {
    loadQuestion(currentQuestionIndex - 1);
  }
}

function showNextQuestion() {
  if (currentQuestionIndex < QUESTIONS.length - 1) {
    loadQuestion(currentQuestionIndex + 1);
  } else {
    // Last question click triggers submit confirmation
    triggerSubmitConfirmation();
  }
}

function updateNavigatorButtonUI(index, status) {
  const btn = document.getElementById(`nav-btn-${index}`);
  if (!btn) return;
  
  // Clear other status classes
  btn.classList.remove('correct', 'wrong', 'review', 'skipped');
  
  if (status !== 'unvisited') {
    btn.classList.add(status);
  }
}

function updateNavigatorStatusBadges() {
  let answered = 0;
  let review = 0;
  
  userAnswers.forEach(ans => {
    if (ans.selectedOptionIndex !== null) answered++;
    if (ans.status === 'review') review++;
  });
  
  document.getElementById("answered-badge").textContent = `${answered} Ans`;
  document.getElementById("marked-badge").textContent = `${review} Rev`;
}

// ========================================================
// SUBMISSION & SCORECARD ENGINE
// ========================================================
function triggerSubmitConfirmation() {
  let answered = 0;
  let review = 0;
  let unvisited = 0;
  
  userAnswers.forEach(ans => {
    if (ans.selectedOptionIndex !== null) answered++;
    if (ans.status === 'review') review++;
    if (ans.status === 'unvisited') unvisited++;
  });
  
  const modal = document.getElementById("confirm-modal");
  const modalMsg = document.getElementById("modal-message");
  
  let msgHtml = `You have completed <strong>${answered}</strong> out of 100 questions.<br>`;
  if (review > 0) {
    msgHtml += `<strong>${review}</strong> questions are marked for review.<br>`;
  }
  if (unvisited > 0) {
    msgHtml += `<strong>${100 - answered}</strong> questions remain unanswered.<br>`;
  }
  msgHtml += `<br>Do you want to submit and view your scorecard? You will not be able to change your answers.`;
  
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
  
  // Calculate Scores
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
  
  // RSSB 1/3 negative marking
  const rawScore = correctCount * 1.0;
  const negativePenalty = wrongCount * 0.333333;
  const finalScore = Math.max(0, rawScore - negativePenalty);
  const accuracy = correctCount + wrongCount > 0 ? Math.round((correctCount / (correctCount + wrongCount)) * 100) : 0;
  
  // Populating score displays
  document.getElementById("final-score").textContent = finalScore.toFixed(2);
  document.getElementById("score-correct-cnt").textContent = correctCount;
  document.getElementById("score-wrong-cnt").textContent = wrongCount;
  document.getElementById("score-skipped-cnt").textContent = skippedCount;
  document.getElementById("score-accuracy").textContent = `${accuracy}%`;

  // Render subject-wise analysis
  renderSubjectAnalysis();

  // Populate dynamic recommendations
  generateRecommendations(correctCount, wrongCount, finalScore);

  // Populate detailed question review
  filterReviewList("all"); // Default to all

  // Switch view to scorecard
  switchView("scorecard-view");
  showToast("Exam submitted successfully!", "success");
}

function renderSubjectAnalysis() {
  const container = document.getElementById("subject-analysis-grid");
  container.innerHTML = "";
  
  // Initialize counts per category
  const categoriesStats = {};
  SUBJECT_CATEGORIES.forEach(cat => {
    categoriesStats[cat] = { total: 0, correct: 0, wrong: 0, skipped: 0 };
  });

  QUESTIONS.forEach((q, index) => {
    const cat = q.category;
    const ans = userAnswers[index];
    categoriesStats[cat].total++;
    
    if (ans.selectedOptionIndex === null) {
      categoriesStats[cat].skipped++;
    } else if (ans.isCorrect) {
      categoriesStats[cat].correct++;
    } else {
      categoriesStats[cat].wrong++;
    }
  });

  SUBJECT_CATEGORIES.forEach(cat => {
    const stats = categoriesStats[cat];
    const percentage = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0;
    
    // Determine badge and color bar style
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
  // Group by category to find weak vs strong
  const categoriesStats = {};
  SUBJECT_CATEGORIES.forEach(cat => {
    categoriesStats[cat] = { total: 0, correct: 0 };
  });
  QUESTIONS.forEach((q, index) => {
    categoriesStats[q.category].total++;
    if (userAnswers[index].isCorrect) {
      categoriesStats[q.category].correct++;
    }
  });

  const weakTopics = [];
  const strongTopics = [];
  
  SUBJECT_CATEGORIES.forEach(cat => {
    const pct = (categoriesStats[cat].correct / categoriesStats[cat].total) * 100;
    if (pct < 50) {
      weakTopics.push({ name: cat, score: pct });
    } else if (pct >= 75) {
      strongTopics.push({ name: cat, score: pct });
    }
  });

  let recText = "";
  if (finalScore >= 70) {
    recText = `Outstanding performance! Your score of **${finalScore.toFixed(2)}/100** puts you in the top tier for the RSSB Computer Operator exam. `;
    if (weakTopics.length > 0) {
      recText += `To secure a perfect rank, focus on slightly weaker areas: **${weakTopics.map(w => w.name).join(", ")}**. `;
    } else {
      recText += `You have demonstrated master-level skills across all syllabus topics. Continue taking timed practice tests to build speed.`;
    }
  } else if (finalScore >= 40) {
    recText = `Good effort! You cleared the standard 40% qualifying threshold with a score of **${finalScore.toFixed(2)}/100**. `;
    if (weakTopics.length > 0) {
      recText += `However, you have high critical weakness in: **${weakTopics.map(w => w.name).join(", ")}** (scoring under 50%). Focus your active revision on these domains. `;
    }
    if (strongTopics.length > 0) {
      recText += `Your strongest performance was in **${strongTopics.map(s => s.name).join(", ")}**. Keep it up!`;
    }
  } else {
    recText = `Your score of **${finalScore.toFixed(2)}/100** is currently below the 40% qualification mark. You need intensive revision. `;
    if (weakTopics.length > 0) {
      recText += `Prioritize studying theoretical concepts in **${weakTopics.map(w => w.name).join(", ")}** immediately. `;
    }
    recText += `Review the detailed explanation cards below for every incorrect and skipped question to clear your fundamentals.`;
  }

  // Format markdown-like bold to html tags
  document.getElementById("recommendation-text").innerHTML = recText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

// ========================================================
// DETAILED QUESTION REVIEW ENGINE
// ========================================================
let activeFilter = "all";

function filterReviewList(filterType) {
  activeFilter = filterType;
  
  // Handle active class toggle on filters
  document.querySelectorAll(".btn-filter").forEach(btn => {
    btn.classList.remove("active");
  });
  document.getElementById(`filter-${filterType}`).classList.add("active");
  
  renderReviewList();
}

function renderReviewList() {
  const container = document.getElementById("review-questions-list");
  container.innerHTML = "";
  
  let displayedCount = 0;
  const alphabet = ["A", "B", "C", "D"];

  QUESTIONS.forEach((q, index) => {
    const ans = userAnswers[index];
    
    // Filter logic
    let shouldDisplay = false;
    if (activeFilter === "all") {
      // Show skipped or wrong answers
      if (ans.selectedOptionIndex === null || !ans.isCorrect) {
        shouldDisplay = true;
      }
    } else if (activeFilter === "incorrect") {
      if (ans.selectedOptionIndex !== null && !ans.isCorrect) {
        shouldDisplay = true;
      }
    } else if (activeFilter === "skipped") {
      if (ans.selectedOptionIndex === null) {
        shouldDisplay = true;
      }
    }
    
    if (!shouldDisplay) return;
    displayedCount++;

    const item = document.createElement("div");
    item.className = "review-item";
    
    const isSkipped = (ans.selectedOptionIndex === null);
    const statusText = isSkipped 
      ? `<span class="badge badge-secondary">Skipped</span>`
      : `<span class="badge badge-danger">Incorrect (-0.33)</span>`;
      
    item.innerHTML = `
      <div class="review-item-header" onclick="toggleReviewItem(this)">
        <div class="review-header-left">
          <span class="review-category">${index + 1}. ${q.category}</span>
          <p class="review-question-text"></p>
        </div>
        <div class="review-header-right">
          ${statusText}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="review-toggle-icon"><path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
        </div>
      </div>
      <div class="review-item-body">
        <div class="review-options-summary">
          <!-- Populated options -->
        </div>
        <div class="review-explanation">
          <h6>Answer Explanation:</h6>
          <p class="explanation-text"></p>
        </div>
      </div>
    `;

    // Safeguard question text injections
    item.querySelector(".review-question-text").textContent = q.question;
    item.querySelector(".explanation-text").textContent = q.explanation;

    // Generate options in review
    const optionsContainer = item.querySelector(".review-options-summary");
    q.options.forEach((optText, oIdx) => {
      const optDiv = document.createElement("div");
      optDiv.className = "review-opt";
      optDiv.innerHTML = `
        <span class="review-opt-badge">${alphabet[oIdx]}</span>
        <span class="review-opt-text"></span>
      `;
      optDiv.querySelector(".review-opt-text").textContent = optText;
      
      // Styling correct/wrong
      if (oIdx === q.correctIndex) {
        optDiv.classList.add("correct");
      } else if (!isSkipped && oIdx === ans.selectedOptionIndex) {
        optDiv.classList.add("user-wrong");
      }
      optionsContainer.appendChild(optDiv);
    });

    container.appendChild(item);
  });

  if (displayedCount === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--color-text-muted); font-size: 14px;">
        No questions fit the chosen filter.
      </div>
    `;
  }
}

// Global click toggle helper for review items
window.toggleReviewItem = function(headerElement) {
  const item = headerElement.parentElement;
  const isExpanded = item.classList.contains("expanded");
  
  // Collapse all review items first to keep it clean (Accordion style)
  document.querySelectorAll(".review-item").forEach(el => {
    el.classList.remove("expanded");
  });
  
  if (!isExpanded) {
    item.classList.add("expanded");
  }
};

// ========================================================
// PARTY CONFETTI SYSTEM (CANVAS-BASED)
// ========================================================
function setupConfettiCanvas() {
  canvas = document.getElementById("confetti-canvas");
  ctx = canvas.getContext("2d");
  resizeConfettiCanvas();
}

function resizeConfettiCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function triggerConfetti() {
  confettiActive = true;
  confettiParticles = [];
  
  // Spawn 100 particles
  for (let i = 0; i < 120; i++) {
    confettiParticles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -100 - 10,
      size: Math.random() * 8 + 6,
      color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
      speedY: Math.random() * 4 + 4,
      speedX: Math.random() * 4 - 2,
      rotation: Math.random() * 360,
      rotationSpeed: Math.random() * 4 - 2,
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
      // Apply kinematics
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotationSpeed;
      p.opacity -= 0.005; // Fade out slowly
      
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, p.opacity);
      
      // Draw rectangular confetti particles
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.5);
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
