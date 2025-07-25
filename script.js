const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

  function showSection(targetId) {
    sections.forEach(section => {
      if (section.id === targetId) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }
  
  // Optional: show home by default
  showSection('home');

// Handle clicks on nav links
navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('data-target'); // Fixed: was 'href'
    showSection(targetId);
  });
});

// Initially show only Home
document.addEventListener('DOMContentLoaded', () => {
  showSection('home');
  startTyping();
});

// Typing animation
const texts = ["Junior Front‑End Developer", "Software Engineer", "Python Developer"];
let count = 0, index = 0;

function type() {
  const typingElement = document.getElementById('typing');
  if (!typingElement) return;

  if (count === texts.length) count = 0;
  const current = texts[count];
  typingElement.textContent = current.slice(0, ++index);

  if (index === current.length) {
    count++;
    index = 0;
    setTimeout(type, 1500); // pause before next word
  } else {
    setTimeout(type, 100); // typing speed
  }
}

function startTyping() {
  type();
}


  const menuToggle = document.getElementById('menu-toggle');
  const nav_Links = document.getElementById('nav-links');
  

  menuToggle.addEventListener('click', () => {
    nav_Links.classList.toggle('show');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});