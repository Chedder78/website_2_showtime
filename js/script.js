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
// Check for WebGL support
if (!WEBGL.isWebGLAvailable()) {
  document.getElementById('3d-designer').innerHTML = 
    '<p>Try our simplified 2D planner instead</p>';
}
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

  // Gallery modal functionality
  const modal = document.getElementById('image-modal');
  const modalImg = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-description');
  const closeModal = document.querySelector('.close-modal');

  // Sample data for modal content (replace with your actual data)
  const galleryData = {
    'theater-1': {
      title: 'Beverly Hills Cinema',
      description: 'This luxury home theater features a 4K Dolby Atmos system with acoustic wall treatments and custom seating for 10.',
      image: 'images/projects/theater-1.jpg'
    },
    'theater-2': {
      title: 'Newport Beach Media Room',
      description: '8-seat theater with acoustic treatment and a 120" screen, perfect for family movie nights.',
      image: 'images/projects/theater-2.jpg'
    },
    'theater-3': {
      title: 'Hollywood Hills Theater',
      description: 'Custom star ceiling installation with motorized masking system for multiple aspect ratios.',
      image: 'images/projects/theater-3.jpg'
    },
    'audio-1': {
      title: 'Laguna Beach Estate',
      description: '12-zone audio system with in-ceiling speakers and outdoor rock speakers.',
      image: 'images/projects/audio-1.jpg'
    },
    'audio-2': {
      title: 'Malibu Outdoor System',
      description: 'Weatherproof speakers integrated into the landscape design for seamless outdoor entertainment.',
      image: 'images/projects/audio-2.jpg'
    }
  };

  // Open modal when gallery item is clicked
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
      const itemId = this.getAttribute('data-modal');
      const itemData = galleryData[itemId];
      
      modalImg.src = itemData.image;
      modalImg.alt = itemData.title;
      modalTitle.textContent = itemData.title;
      modalDesc.textContent = itemData.description;
      
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  closeModal.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  });

  // Close modal when clicking outside content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  });

  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Here you would normally send the form data to your server
      // For demo purposes, we'll just show an alert
      alert('Thank you for your message! We will contact you soon.');
      this.reset();
    });
  }

  // Newsletter subscription
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = this.querySelector('input[type="email"]');
      alert(`Thank you for subscribing with ${emailInput.value}!`);
      emailInput.value = '';
    });
  }

  // Animate elements when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.glass-card, .service-card, .testimonial-card, .blog-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };

  // Set initial styles for animated elements
  document.querySelectorAll('.glass-card, .service-card, .testimonial-card, .blog-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  // Run once on load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);
});
