/* ==========================================================================
   Globetrotter CIOS IBPV Quiz App - Game Logic
   ========================================================================== */

// Game State
let gameState = {
  playerName: "Student",
  avatar: "🏃",
  totalScore: 0,
  visitedCountries: [], // list of country keys
  visitedContinents: new Set(), // set of visited continents
  activeCountry: null,
  currentQuestionIndex: 0,
  countryCorrectAnswers: 0,
  audioEnabled: true
};

// Web Audio API context for sound effects
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

// Sound Effects Synthesizer
function playSound(type) {
  if (!gameState.audioEnabled) return;
  initAudio();
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.connect(gain);
  gain.connect(audioCtx.destination);

  const now = audioCtx.currentTime;

  if (type === 'correct') {
    // Joyful upward arpeggio
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
    osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc.start(now);
    osc.stop(now + 0.35);
  } else if (type === 'incorrect') {
    // Low buzzer sound
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(130, now); // C3
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  } else if (type === 'victory') {
    // Grand success fanfare
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 1046.50]; // C4, E4, G4, C5, E5, C6
    notes.forEach((freq, idx) => {
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.connect(g);
      g.connect(audioCtx.destination);
      o.type = 'triangle';
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.06, now + idx * 0.1);
      g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.5);
      o.start(now + idx * 0.1);
      o.stop(now + idx * 0.1 + 0.5);
    });
  } else if (type === 'move') {
    // Soft swoosh sound
    osc.type = 'sine';
    osc.frequency.setValueAtTime(200, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.4);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    osc.start(now);
    osc.stop(now + 0.4);
  }
}

// DOM Elements
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const gameOverScreen = document.getElementById("game-over-screen");
const studentNameInput = document.getElementById("student-name");
const startBtn = document.getElementById("start-btn");
const audioToggle = document.getElementById("audio-toggle");
const totalScoreEl = document.getElementById("total-score");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const visitedCountriesList = document.getElementById("visited-countries-list");
const quizModal = document.getElementById("quiz-modal");
const modalCountryTitle = document.getElementById("modal-country-title");
const modalContinentTitle = document.getElementById("modal-continent-title");
const questionText = document.getElementById("question-text");
const optionsBox = document.getElementById("options-box");
const explanationBox = document.getElementById("explanation-box");
const explanationText = document.getElementById("explanation-text");
const nextQuestionBtn = document.getElementById("next-question-btn");
const currentQuestionNum = document.getElementById("current-question-num");
const miniProgressFill = document.getElementById("mini-progress-fill");
const resultName = document.getElementById("result-name");
const finalScore = document.getElementById("final-score");
const finalVisited = document.getElementById("final-visited");
const restartBtn = document.getElementById("restart-btn");
const playerAvatarBadge = document.getElementById("player-avatar-badge");
const playerNameBadge = document.getElementById("player-name-badge");

// Leaflet Map Variables
let map = null;
let avatarMarker = null;
let markers = {};

// Geographic coordinates database
const countryCoords = {
  nederland: { coords: [52.13, 5.29], continent: "Europa" },
  spanje: { coords: [40.46, -3.75], continent: "Europa" },
  duitsland: { coords: [51.17, 10.45], continent: "Europa" },
  frankrijk: { coords: [46.22, 2.21], continent: "Europa" },
  italie: { coords: [41.87, 12.57], continent: "Europa" },
  verenigd_koninkrijk: { coords: [55.38, -3.44], continent: "Europa" },
  aruba: { coords: [12.52, -69.97], continent: "Amerika" },
  bonaire: { coords: [12.18, -68.24], continent: "Amerika" },
  curacao: { coords: [12.17, -68.99], continent: "Amerika" },
  brazilie: { coords: [-14.24, -51.93], continent: "Amerika" },
  suriname: { coords: [3.92, -56.03], continent: "Amerika" },
  colombia: { coords: [4.57, -74.30], continent: "Amerika" },
  kenia: { coords: [-1.29, 36.82], continent: "Afrika" },
  zuid_afrika: { coords: [-30.56, 22.94], continent: "Afrika" },
  oeganda: { coords: [1.37, 32.29], continent: "Afrika" },
  indonesie: { coords: [-0.79, 113.92], continent: "Azië" },
  australie: { coords: [-25.27, 133.78], continent: "Oceanië" }
};

// Avatar Selection
const avatarOptions = document.querySelectorAll(".avatar-option");
avatarOptions.forEach(opt => {
  opt.addEventListener("click", () => {
    avatarOptions.forEach(o => o.classList.remove("active"));
    opt.classList.add("active");
    gameState.avatar = opt.dataset.avatar;
  });
});

// Audio Toggle
audioToggle.addEventListener("click", () => {
  gameState.audioEnabled = !gameState.audioEnabled;
  const icon = audioToggle.querySelector("i");
  if (gameState.audioEnabled) {
    icon.className = "fa-solid fa-volume-high";
  } else {
    icon.className = "fa-solid fa-volume-xmark";
  }
});

// Start Game
startBtn.addEventListener("click", () => {
  const name = studentNameInput.value.trim();
  if (!name) {
    alert("Voer a.b.v. eerst je naam in!");
    return;
  }
  gameState.playerName = name;
  
  // Set badge values
  playerNameBadge.textContent = name;
  playerAvatarBadge.textContent = gameState.avatar;
  
  initAudio();
  playSound('victory');
  
  startScreen.classList.remove("active");
  gameScreen.classList.add("active");
  
  // Initialize or update Leaflet map
  if (!map) {
    initMap();
  } else {
    updateAvatarMarkerEmoji();
    avatarMarker.setLatLng(countryCoords.nederland.coords);
    map.setView(countryCoords.nederland.coords, 2);
  }
});

// Map Navigation & Interaction using Leaflet
function initMap() {
  // Create map centered on a good view of the world
  map = L.map('map', {
    center: [20, 0],
    zoom: 2,
    minZoom: 2,
    maxZoom: 6,
    zoomControl: true,
    attributionControl: false
  });
  
  // Add CartoDB Voyager tile layer for a beautiful colorful map
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19
  }).addTo(map);
  
  // Plot all country markers
  plotCountryMarkers();
  
  // Add avatar marker starting in the Netherlands
  createAvatarMarker();
}

function plotCountryMarkers() {
  Object.keys(countryCoords).forEach(key => {
    const data = countryCoords[key];
    const countryName = QUESTIONS[key].title;
    
    // Create custom div icon
    const icon = L.divIcon({
      className: 'custom-country-marker',
      html: `
        <div class="marker-container" id="marker-${key}">
          <div class="marker-pulse"></div>
          <div class="marker-dot"></div>
          <div class="marker-label">${countryName}</div>
        </div>
      `,
      iconSize: [20, 20],
      iconAnchor: [10, 10]
    });
    
    const marker = L.marker(data.coords, { icon: icon }).addTo(map);
    
    // Add click event
    marker.on('click', () => {
      onCountryClick(key, data.continent, data.coords);
    });
    
    markers[key] = marker;
  });
}

function createAvatarMarker() {
  const avatarIcon = L.divIcon({
    className: 'custom-avatar-marker',
    html: `<div class="avatar-emoji-marker">${gameState.avatar}</div>`,
    iconSize: [36, 36],
    iconAnchor: [18, 18]
  });
  
  avatarMarker = L.marker(countryCoords.nederland.coords, { 
    icon: avatarIcon, 
    zIndexOffset: 1000 
  }).addTo(map);
}

function updateAvatarMarkerEmoji() {
  if (avatarMarker) {
    const avatarIcon = L.divIcon({
      className: 'custom-avatar-marker',
      html: `<div class="avatar-emoji-marker">${gameState.avatar}</div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 18]
    });
    avatarMarker.setIcon(avatarIcon);
  }
}

function onCountryClick(countryKey, continent, coords) {
  // Check if already visited
  if (gameState.visitedCountries.includes(countryKey)) {
    alert("Je hebt dit land al succesvol bezocht!");
    return;
  }
  
  // Block clicks if avatar is currently moving or quiz is open
  if (gameState.activeCountry !== null) {
    return;
  }
  
  gameState.activeCountry = countryKey;
  playSound('move');
  
  const startLatLng = avatarMarker.getLatLng();
  const endLatLng = L.latLng(coords);
  
  // Smoothly glide avatar to destination
  animateMarker(avatarMarker, startLatLng, endLatLng, 800, () => {
    // Open quiz on arrival
    startQuiz(countryKey, continent);
  });
}

// Custom animation function for smooth translation of Leaflet marker
function animateMarker(marker, startLatLng, endLatLng, duration, callback) {
  const startTime = performance.now();
  
  function update() {
    const elapsed = performance.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // easeOutQuad interpolation
    const easeProgress = progress * (2 - progress);
    
    const lat = startLatLng.lat + (endLatLng.lat - startLatLng.lat) * easeProgress;
    const lng = startLatLng.lng + (endLatLng.lng - startLatLng.lng) * easeProgress;
    
    marker.setLatLng([lat, lng]);
    
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      if (callback) callback();
    }
  }
  
  requestAnimationFrame(update);
}


// Quiz Engine
function startQuiz(countryKey, continent) {
  gameState.activeCountry = countryKey;
  gameState.currentQuestionIndex = 0;
  gameState.countryCorrectAnswers = 0;
  
  const countryData = QUESTIONS[countryKey];
  modalCountryTitle.textContent = countryData.title;
  modalContinentTitle.textContent = continent;
  
  showQuestion();
  quizModal.classList.add("active");
}

function showQuestion() {
  const countryData = QUESTIONS[gameState.activeCountry];
  const question = countryData.questions[gameState.currentQuestionIndex];
  
  currentQuestionNum.textContent = gameState.currentQuestionIndex + 1;
  miniProgressFill.style.width = `${((gameState.currentQuestionIndex + 1) / 5) * 100}%`;
  
  questionText.textContent = question.question;
  explanationBox.classList.add("hidden");
  
  // Populate options
  optionsBox.innerHTML = "";
  Object.keys(question.options).forEach(key => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.dataset.opt = key;
    btn.innerHTML = `<span class="bullet">${key}</span><span class="text">${question.options[key]}</span>`;
    
    btn.addEventListener("click", () => selectOption(btn, key, question));
    optionsBox.appendChild(btn);
  });
}

function selectOption(selectedBtn, selectedKey, question) {
  const isCorrect = selectedKey === question.correct;
  
  // Disable all option buttons and color correct/incorrect ones
  const allButtons = optionsBox.querySelectorAll(".option-btn");
  allButtons.forEach(btn => {
    btn.classList.add("disabled");
    if (btn.dataset.opt === question.correct) {
      btn.classList.add("correct");
    }
  });
  
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    playSound('correct');
    gameState.countryCorrectAnswers++;
    gameState.totalScore += 20; // 20 points per correct answer
    totalScoreEl.textContent = gameState.totalScore;
  } else {
    selectedBtn.classList.add("incorrect");
    playSound('incorrect');
  }
  
  // Show explanation
  explanationText.textContent = question.explanation;
  explanationBox.classList.remove("hidden");
}

nextQuestionBtn.addEventListener("click", () => {
  gameState.currentQuestionIndex++;
  const countryData = QUESTIONS[gameState.activeCountry];
  
  if (gameState.currentQuestionIndex < countryData.questions.length) {
    showQuestion();
  } else {
    finishCountry();
  }
});

function finishCountry() {
  quizModal.classList.remove("active");
  
  const countryKey = gameState.activeCountry;
  const continent = countryCoords[countryKey].continent;
  
  // Mark marker as completed
  const markerEl = document.querySelector(`#marker-${countryKey}`);
  if (markerEl) {
    markerEl.classList.add("completed");
  }
  
  // Add to visited list
  gameState.visitedCountries.push(countryKey);
  gameState.visitedContinents.add(continent);
  
  // Add to sidebar list
  const li = document.createElement("li");
  li.className = "country-item";
  li.innerHTML = `<span><i class="fa-solid fa-earth-europe"></i> ${QUESTIONS[countryKey].title} (${continent})</span> <span>${gameState.countryCorrectAnswers}/5 goed</span>`;
  visitedCountriesList.appendChild(li);
  
  // Update progress
  updateProgress();
  
  // Check win condition
  checkGameEnd();
  
  // Reset active country so player can select another country
  gameState.activeCountry = null;
}

function updateProgress() {
  const visitedCount = gameState.visitedContinents.size;
  progressFill.style.width = `${(visitedCount / 5) * 100}%`;
  progressText.textContent = `${visitedCount} / 5 continenten bezocht`;
}

function checkGameEnd() {
  // Win condition: Player must visit at least one country in each of the 5 continents
  const requiredContinents = ["Europa", "Amerika", "Afrika", "Azië", "Oceanië"];
  const allContinentsVisited = requiredContinents.every(cont => gameState.visitedContinents.has(cont));
  
  if (allContinentsVisited) {
    setTimeout(() => {
      endGame();
    }, 1000);
  }
}

// Game Over & Celebration Confetti
function endGame() {
  gameScreen.classList.remove("active");
  gameOverScreen.classList.add("active");
  playSound('victory');
  
  resultName.textContent = gameState.playerName;
  finalScore.textContent = gameState.totalScore;
  finalVisited.textContent = gameState.visitedCountries.length;
  
  startConfetti();
}

function startConfetti() {
  const container = document.getElementById("confetti-container");
  container.innerHTML = "";
  
  const colors = ["#009fdf", "#10b981", "#ffd700", "#ff007f", "#00ffff"];
  
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = `${Math.random() * 3}s`;
    confetti.style.width = `${Math.random() * 8 + 5}px`;
    confetti.style.height = `${Math.random() * 15 + 5}px`;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(confetti);
  }
}

// Restart Game
restartBtn.addEventListener("click", () => {
  // Reset state
  gameState.totalScore = 0;
  gameState.visitedCountries = [];
  gameState.visitedContinents.clear();
  gameState.activeCountry = null;
  gameState.currentQuestionIndex = 0;
  
  totalScoreEl.textContent = "0";
  progressFill.style.width = "0%";
  progressText.textContent = "0 / 5 continenten bezocht";
  visitedCountriesList.innerHTML = "";
  
  // Reset Leaflet markers
  Object.keys(countryCoords).forEach(key => {
    const markerEl = document.querySelector(`#marker-${key}`);
    if (markerEl) {
      markerEl.classList.remove("completed");
    }
  });
  
  // Move avatar back to home position (Netherlands)
  if (avatarMarker) {
    avatarMarker.setLatLng(countryCoords.nederland.coords);
  }
  if (map) {
    map.setView(countryCoords.nederland.coords, 2);
  }
  
  // Clear Confetti
  document.getElementById("confetti-container").innerHTML = "";
  
  gameOverScreen.classList.remove("active");
  startScreen.classList.add("active");
});
