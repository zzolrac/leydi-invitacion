// ==================== TABS FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', function() {
  const tabBtns = document.querySelectorAll('.tab-btn');
  const designs = document.querySelectorAll('.design');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const targetTab = this.getAttribute('data-tab');
      
      // Remove active class from all buttons and designs
      tabBtns.forEach(b => b.classList.remove('active'));
      designs.forEach(d => d.classList.remove('active'));
      
      // Add active class to clicked button and target design
      this.classList.add('active');
      document.getElementById(targetTab).classList.add('active');
      
      // Scroll to top when switching tabs
      window.scrollTo(0, 0);
    });
  });

  // ==================== COUNTDOWN TIMER ====================
  const weddingDate = new Date('2025-08-29T18:30:00');
  
  function updateCountdown() {
    const now = new Date();
    const diff = weddingDate - now;
    
    if (diff <= 0) {
      // Wedding day or past
      document.querySelectorAll('.countdown-timer').forEach(timer => {
        timer.innerHTML = '<p style="font-family: \'Cormorant Garamond\', serif; font-size: 24px; color: inherit;">¡Hoy es el gran día!</p>';
      });
      return;
    }
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    // Design 1
    const d1Days = document.getElementById('d1-days');
    const d1Hours = document.getElementById('d1-hours');
    const d1Minutes = document.getElementById('d1-minutes');
    const d1Seconds = document.getElementById('d1-seconds');
    
    if (d1Days) d1Days.textContent = String(days).padStart(2, '0');
    if (d1Hours) d1Hours.textContent = String(hours).padStart(2, '0');
    if (d1Minutes) d1Minutes.textContent = String(minutes).padStart(2, '0');
    if (d1Seconds) d1Seconds.textContent = String(seconds).padStart(2, '0');
    
    // Design 2
    const d2Days = document.getElementById('d2-days');
    const d2Hours = document.getElementById('d2-hours');
    const d2Minutes = document.getElementById('d2-minutes');
    const d2Seconds = document.getElementById('d2-seconds');
    
    if (d2Days) d2Days.textContent = String(days).padStart(2, '0');
    if (d2Hours) d2Hours.textContent = String(hours).padStart(2, '0');
    if (d2Minutes) d2Minutes.textContent = String(minutes).padStart(2, '0');
    if (d2Seconds) d2Seconds.textContent = String(seconds).padStart(2, '0');
  }
  
  // Update countdown immediately and then every second
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ==================== ENVELOPE ANIMATION ====================
  const envelopes = document.querySelectorAll('.envelope');
  envelopes.forEach(envelope => {
    envelope.addEventListener('click', function() {
      this.style.transform = 'scale(1.1) rotate(-5deg)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 300);
    });
  });

  // ==================== MUSIC PLAYER DEMO ====================
  const playBtns = document.querySelectorAll('.play-btn');
  
  playBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      const musicInner = this.closest('.music-inner');
      const isPlaying = musicInner ? musicInner.classList.toggle('playing') : false;
      this.textContent = isPlaying ? '⏸' : '▶';
      
      // Animate progress bar
      const progressBars = this.closest('.music-inner, .design2-section')?.querySelectorAll('.progress') || [];
      progressBars.forEach(bar => {
        if (isPlaying) {
          bar.style.animation = 'progressAnim 30s linear infinite';
        } else {
          bar.style.animation = 'none';
        }
      });
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

// ==================== WHATSAPP FUNCTIONALITY ====================
// WhatsApp links are handled directly in HTML via href
// This function can be extended for custom messages
function sendWhatsAppMessage(phoneNumber, message) {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

// ==================== SMOOTH SCROLL FOR INTERNAL LINKS ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ==================== ADD PROGRESS ANIMATION CSS ====================
const style = document.createElement('style');
style.textContent = `
  @keyframes progressAnim {
    0% { width: 0%; }
    100% { width: 100%; }
  }
`;
document.head.appendChild(style);
