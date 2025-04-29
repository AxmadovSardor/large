function showNotification() {
    const notif = document.getElementById('notification');
    notif.classList.remove('hidden');
    setTimeout(() => {
      notif.style.opacity = 1;
      createParticles();
    }, 100);
    setTimeout(() => {
      notif.style.opacity = 0;
      setTimeout(() => {
        notif.classList.add('hidden');
      }, 500);
    }, 3000); // 3 seconds visible
  }
  
  function createParticles() {
    const particlesContainer = document.getElementById('particles');
    particlesContainer.innerHTML = '';
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDuration = (0.5 + Math.random()) + 's';
      particlesContainer.appendChild(particle);
    }
  }
  