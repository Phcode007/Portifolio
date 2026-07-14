// ── GLOW CURSOR ──
    const glow = document.getElementById('glow');
    
    document.addEventListener('mousemove', (e) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    });
    
    // ── HEADER BLUR ON SCROLL ──
    const header = document.getElementById('header');
    
        let lastScrollY = window.scrollY;
        const delta = 10;

        window.addEventListener('scroll', () => {
          const currentY = window.scrollY;

          if (currentY > 60) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }

          // hide on scroll down, show on scroll up
          if (Math.abs(currentY - lastScrollY) <= delta) return;

          if (currentY > lastScrollY && currentY > 120) {
            header.classList.add('hidden');
          } else {
            header.classList.remove('hidden');
          }

          lastScrollY = currentY;
        }, { passive: true });
    
    // ── REVEAL ANIMATION ──
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
    
    // ── HAMBURGER MENU ──
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      nav.classList.toggle('active');
    });
    
    // Close menu when clicking a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
      });
    });
    
    // ── COPYRIGHT YEAR ──
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // ── TYPING EFFECT ──
    const typingElements = document.querySelectorAll('.typing-text');
    const heroButtons = document.querySelector('.hero-buttons');
    
    function typeWriter(element, index = 0) {
      const text = element.getAttribute('data-text');
      if (!text) return;
      
      if (index < text.length) {
        element.textContent = text.substring(0, index + 1);
        setTimeout(() => typeWriter(element, index + 1), 80);
      }
    }
    
    // Start typing effect after page load
    setTimeout(() => {
      let delay = 0;
      typingElements.forEach((el, i) => {
        delay = i * 400;
        setTimeout(() => {
          el.textContent = '';
          typeWriter(el);
        }, delay);
      });
      
      // Show buttons after all typing is done
      setTimeout(() => {
        heroButtons.classList.add('visible');
      }, delay + 1500);
    }, 500);
