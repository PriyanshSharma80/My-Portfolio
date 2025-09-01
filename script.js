document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
  
  initProgressBars();
});

const sidenav = document.getElementById('sidenav');
const overlay = document.getElementById('overlay');
const navToggle = document.querySelector('.nav-toggle');
const navClose = document.querySelector('.nav-close');
const mainContent = document.querySelector('.main-content');
const navLinks = document.querySelectorAll('.nav-link');

function toggleNav() {
  sidenav.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('no-scroll');
}

function closeNav() {
  sidenav.classList.remove('active');
  overlay.classList.remove('active');
  document.body.classList.remove('no-scroll');
}

navToggle.addEventListener('click', toggleNav);
navClose.addEventListener('click', closeNav);
overlay.addEventListener('click', closeNav);

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      if (sidenav.classList.contains('active')) {
        closeNav();
      }
      
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      navLinks.forEach(navLink => navLink.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
  if (window.scrollY > 500) {
    backToTopBtn.classList.add('active');
  } else {
    backToTopBtn.classList.remove('active');
  }
  
  updateActiveNavLink();
});

backToTopBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function updateActiveNavLink() {
  const sections = document.querySelectorAll('.section');
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (window.scrollY >= sectionTop - 200 && 
        window.scrollY < sectionTop + sectionHeight - 200) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
}

function initProgressBars() {
  const progressBars = document.querySelectorAll('.progress-bar');
  
  progressBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    bar.style.width = width;
  });
}

const animatedElements = document.querySelectorAll('.skill-box, .project-card, .experience-item');

const elementObserver = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.1 });

animatedElements.forEach(element => {
  elementObserver.observe(element);
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
  });
}

window.onload = function() {
  document.body.classList.add('loaded');
  
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 100);
};

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;
  const background = document.querySelector('body');
  background.style.backgroundPosition = `50% ${scrollPosition * 0.3}px`;
});

const profileImg = document.querySelector('.my-img');
if (profileImg) {
  profileImg.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.05) rotate(0deg)';
  });
  
  profileImg.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1) rotate(0deg)';
  });
}

    const typingText = document.querySelector('.typing-text');
    const words = ["Front-end Developer", "Web Developer", "UI/UX Designer", "Webflow Developer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isEnd = false;
    
    function type() {
        const currentWord = words[wordIndex];
        const currentChar = currentWord.substring(0, charIndex);
        
        typingText.textContent = currentChar;
        
        if (!isDeleting && charIndex < currentWord.length) {
            charIndex++;
            setTimeout(type, 100);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, 50);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                wordIndex = (wordIndex + 1) % words.length;
            }
            setTimeout(type, 1000);
        }
    }
    
    setTimeout(type, 1000);

    const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px)';
    this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.12)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.08)';
  });
});