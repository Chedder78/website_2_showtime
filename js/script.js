document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navList = document.querySelector('.nav-list');
  
  mobileMenuBtn.addEventListener('click', function() {
    navList.classList.toggle('active');
    this.setAttribute('aria-expanded', navList.classList.contains('active'));
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Header scroll effect
  const header = document.querySelector('.header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Service card animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.specialty-card, .service-preview').forEach(card => {
    observer.observe(card);
  });
});
