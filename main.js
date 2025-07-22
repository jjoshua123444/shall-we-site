// main.js

// Phrase list with emojis for fun vibes
const phrases = [
    'Shall we eat 🍔?',
    'Shall we go to the movies 🍿?',
    'Shall we go to the park 🌳?',
    'Shall we catch up over coffee ☕️?',
    'Shall we take a trip ✈️?',
    'Shall we try something new 🎨?',
    'Shall we stay in 🛋️?',
    'Shall we go dancing 💃?'
  ];
  
  const textEl = document.getElementById('rotating-text');
  const enterBtn = document.getElementById('enterBtn');
  
  let currentIndex = 0;
  const fadeDuration = 500; // ms
  const displayDuration = 3000; // ms
  
  /**
   * Updates the rotating text with fade out/in effect
   */
  function rotateText() {
    // Fade out
    textEl.style.opacity = 0;
  
    setTimeout(() => {
      // Update text
      textEl.textContent = phrases[currentIndex];
      currentIndex = (currentIndex + 1) % phrases.length;
  
      // Fade in
      textEl.style.opacity = 1;
    }, fadeDuration);
  }
  
  /**
   * Initialize the rotating text and set interval
   */
  function startRotation() {
    // Set initial text
    textEl.textContent = phrases[currentIndex];
    currentIndex++;
  
    // Start interval timer
    setInterval(rotateText, displayDuration);
  }
  
  /**
   * Handle Enter button click with fade out and navigation
   */
  function handleEnterClick() {
    // Add fade-out class for animation
    textEl.classList.add('fade-out');
    enterBtn.classList.add('fade-out');
  
    // After fade completes, navigate to planner page
    setTimeout(() => {
      window.location.href = 'planner.html';
    }, fadeDuration + 200); // Slightly longer than fadeDuration
  }
  
  /**
   * Setup event listeners and initialize app
   */
  function init() {
    startRotation();
  
    enterBtn.addEventListener('click', handleEnterClick);
  }
  
  // Wait until DOM is loaded before initializing
  document.addEventListener('DOMContentLoaded', init);
  