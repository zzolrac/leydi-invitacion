// ==================== COUNTDOWN TIMER ====================
document.addEventListener('DOMContentLoaded', function() {
  let weddingDate = new Date('2025-08-29T18:30:00');

  // Demo: si la fecha ya pasó, se avanza al mismo día del próximo año
  while (weddingDate < new Date()) {
    weddingDate.setFullYear(weddingDate.getFullYear() + 1);
  }

  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;

    const timer = document.querySelector('.countdown-timer');
    if (!timer) return;

    if (diff <= 0) {
      timer.innerHTML = '<p style="font-family: \'Cormorant Garamond\', serif; font-size: 24px; color: inherit;">¡Hoy es el gran día!</p>';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ==================== ENVELOPE ANIMATION ====================
  document.querySelectorAll('.envelope').forEach(envelope => {
    envelope.addEventListener('click', function() {
      this.style.transform = 'scale(1.08) rotate(-4deg)';
      setTimeout(() => { this.style.transform = 'scale(1)'; }, 300);
    });
  });
});

// ==================== MAP FUNCTIONALITY ====================
function openMap(placeName, location) {
  // Detect if user is on iOS or Android/Desktop
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  const query = encodeURIComponent(`${placeName}, ${location}`);

  if (isIOS) {
    // Open Apple Maps
    window.open(`https://maps.apple.com/?q=${query}`, '_blank');
  } else {
    // Open Google Maps
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  }
}