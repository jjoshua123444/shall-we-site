const activities = {
    "$": ["Visit a local park", "Go on a hike", "Window shopping downtown", "Have a picnic", "Go geocaching"],
    "$$": ["Grab coffee at a local cafe", "Try a food truck", "Visit a museum", "Bowling", "Thrift shopping"],
    "$$$": ["Dinner at a mid-range restaurant", "Go to the movies", "Escape room", "Mini golf", "Trivia night at a bar"],
    "$$$$": ["Theater show", "High-end restaurant", "Paint & sip class", "Cooking class", "Virtual reality arcade"],
    "$$$$$": ["Spa day", "Helicopter tour", "Luxury dining", "Private boat rental", "Day trip getaway"]
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const findBtn = document.getElementById('findBtn');
    const results = document.getElementById('results');
    const loading = document.getElementById('loading');
  
    findBtn.addEventListener('click', () => {
      const budget = document.getElementById('budget').value;
      results.innerHTML = '';
      loading.style.display = 'block';
  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const { latitude, longitude } = position.coords;
  
          const suggestions = activities[budget];
          const selected = suggestions.sort(() => 0.5 - Math.random()).slice(0, 3);
  
          loading.style.display = 'none';
  
          selected.forEach(item => {
            const div = document.createElement('div');
            div.className = 'activity-card';
            div.innerHTML = `<strong>${item}</strong><br><small>Near (${latitude.toFixed(2)}, ${longitude.toFixed(2)})</small>`;
  
            // Navigate to invite.html with selected activity
            div.addEventListener('click', () => {
              const encoded = encodeURIComponent(item);
              localStorage.setItem('selectedActivity', item); // optional fallback
              window.location.href = `invite.html?activity=${encoded}`;
            });
  
            results.appendChild(div);
          });
  
        }, () => {
          loading.style.display = 'none';
          alert('We need your location to suggest local activities.');
        });
      } else {
        loading.style.display = 'none';
        alert('Geolocation is not supported in your browser.');
      }
    });
  });
  