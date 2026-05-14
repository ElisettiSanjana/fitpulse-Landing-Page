// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function() {
  navLinks.classList.toggle('open');
});

// Close menu when link clicked
navLinks.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('open');
  });
});

// ===== ACCORDION =====
const accBtns = document.querySelectorAll('.acc-btn');

accBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    const content = this.nextElementSibling;

    // Close all others
    document.querySelectorAll('.acc-content').forEach(function(item) {
      item.classList.remove('open');
    });

    // Open clicked one
    content.classList.toggle('open');
  });
});

// ===== FORM VALIDATION =====
function validateEmail() {
  const email = document.getElementById('emailInput').value;
  const msg = document.getElementById('formMsg');

  if (email === '') {
    msg.style.color = 'red';
    msg.textContent = '⚠️ Please enter your email.';
  } else if (!email.includes('@') || !email.includes('.')) {
    msg.style.color = 'red';
    msg.textContent = '⚠️ Please enter a valid email.';
  } else {
    msg.style.color = '#00e5ff';
    msg.textContent = '✅ Thank you for subscribing!';
    document.getElementById('emailInput').value = '';
  }
}