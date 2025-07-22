// planner.js

const activities = {
    "$": ["Visit a local park", "Go on a hike", "Window shopping downtown", "Have a picnic", "Go geocaching"],
    "$$": ["Grab coffee at a local cafe", "Try a food truck", "Visit a museum", "Bowling", "Thrift shopping"],
    "$$$": ["Dinner at a mid-range restaurant", "Go to the movies", "Escape room", "Mini golf", "Trivia night at a bar"],
    "$$$$": ["Theater show", "High-end restaurant", "Paint & sip class", "Cooking class", "Virtual reality arcade"],
    "$$$$$": ["Spa day", "Helicopter tour", "Luxury dining", "Private boat rental", "Day trip getaway"]
  };
  
  const findBtn = document.getElementById('findBtn');
  const budgetInput = document.getElementById('budget');
  const resultsEl = document.getElementById('results');
  const loadingEl = document.getElementById('loading'); // optional loading indicator
  
  function showLoading(show) {
    if (loadingEl) loadingEl.style.display = show ? 'block' : 'none';
  }
  
  function showAlert(message) {
    resultsEl.innerHTML = `<div class="alert">${message}</div>`;
  }
  
  function generateActivityCards(suggestions, lat, lon) {
    resultsEl.innerHTML = ''; // Clear previous
  
    selected.forEach(item => {
        const div = document.createElement('div');
        div.className = 'activity-card';
        div.innerHTML = `<strong>${item}</strong><br><small>Near (${latitude.toFixed(2)}, ${longitude.toFixed(2)})</small>`;
      
        // 👇 Add click event to go to invite.html with activity in query param
        div.addEventListener('click', () => {
          // Option 1: Use query parameter (recommended for links)
          const encoded = encodeURIComponent(item);
          window.location.href = `invite.html?activity=${encoded}`;
      
          // Option 2 (optional): Also store in localStorage if you want
          localStorage.setItem('selectedActivity', item);
        });
      
        results.appendChild(div);
      });
  }
  
  function handleLocationSuccess(position) {
    const budget = budgetInput.value;
    const { latitude, longitude } = position.coords;
  
    const suggestions = activities[budget];
    const selected = suggestions.sort(() => 0.5 - Math.random()).slice(0, 3);
  
    generateActivityCards(selected, latitude, longitude);
    showLoading(false);
  }
  
  function handleLocationError(error) {
    showLoading(false);
    showAlert('⚠️ Location access denied. Please enable location services.');
  }
  
  function handleFindClick() {
    resultsEl.innerHTML = '';
    showLoading(true);
  
    if (!navigator.geolocation) {
      showLoading(false);
      showAlert('⚠️ Geolocation not supported by your browser.');
      return;
    }
  
    navigator.geolocation.getCurrentPosition(
      handleLocationSuccess,
      handleLocationError,
      { timeout: 10000 }
    );
  }

  div.addEventListener('click', () => {
    localStorage.setItem('selectedActivity', item);
    window.location.href = 'invite.html';
  });
  
  
  findBtn.addEventListener('click', handleFindClick);
  