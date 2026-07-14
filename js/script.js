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

    // ── PROJECT CARD HOVER / FOCUS FOR ACCESSIBILITY ──
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
      card.addEventListener('mouseenter', () => card.classList.add('hovered'));
      card.addEventListener('mouseleave', () => card.classList.remove('hovered'));

      // show overlay when any focusable child receives focus
      card.addEventListener('focusin', () => card.classList.add('hovered'));
      card.addEventListener('focusout', () => card.classList.remove('hovered'));
    });

    // ── TIMELINE ANIMATION ──
    const timeline = document.querySelector('.timeline');
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (timeline && timelineItems.length) {
      const tlObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            timeline.classList.add('in-view');
            // reveal items with stagger
            timelineItems.forEach((item, i) => {
              setTimeout(() => item.classList.add('visible'), i * 160);
            });
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      tlObserver.observe(timeline);
    }

    // ── HERO PARALLAX (mouse) & respects reduced motion ──
    const hero = document.querySelector('#hero');
    const glowEl = document.getElementById('glow');
    const profileCard = document.querySelector('.profile-card');

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReduced && hero && glowEl) {
      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 -> 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        // Move glow slightly
        glowEl.style.transform = `translate3d(${x * 40}px, ${y * 40}px, 0)`;

        // Tilt profile card
        if (profileCard) {
          const rotateX = (y * 6).toFixed(2);
          const rotateY = (x * -8).toFixed(2);
          profileCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
      });

      hero.addEventListener('mouseleave', () => {
        glowEl.style.transform = '';
        if (profileCard) profileCard.style.transform = '';
      });
    }

    // ── BUTTON RIPPLE EFFECT ──
    document.querySelectorAll('.btn, .project-link, .social-link').forEach(el => {
      el.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 700);
      });
    });

    // ── BACK TO TOP BUTTON ──
    const scrollTop = document.createElement('button');
    scrollTop.className = 'scroll-top';
    scrollTop.setAttribute('aria-label', 'Voltar ao topo');
    scrollTop.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 15l7-7 7 7"/></svg>';
    document.body.appendChild(scrollTop);

    window.addEventListener('scroll', () => {
      if (window.scrollY > 420) scrollTop.classList.add('show'); else scrollTop.classList.remove('show');
    }, { passive: true });

    scrollTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      scrollTop.blur();
    });
