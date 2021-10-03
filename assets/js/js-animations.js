//Hamburger Menu Effect
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade');
  });
});

//Rules Selector
const openRulesButtons = document.querySelectorAll('[data-rules-target]');
const closeRulesButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementsByClassName('overlay');

openRulesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const rules = document.querySelector(button.dataset.rulesTarget);
    openRules(rules);
  });
});

closeRulesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const rules = button.closest('.rules');
    closeRules(rules);
  });
});

function openRules(rules) {
  if (rules == null) 
  return
    rules.classList.add('active'),
    overlay.classList.add('active');
  };

function closeRules(rules) {
  if (rules == null) 
  return 
  rules.classList.remove('active'),
  overlay.classList.remove('active');
};

//Contact Selector
const openContactButtons = document.querySelectorAll('[data-contact-target]');
const closeContactButtons = document.querySelectorAll('[data-close-button]');

openContactButtons.forEach(button => {
  button.addEventListener('click', () => {
    const contact = document.querySelector(button.dataset.contactTarget);
    openContact(contact);
  });
});

closeContactButtons.forEach(button => {
  button.addEventListener('click', () => {
    const contact = button.closest('.contact');
    closeRules(contact);
  });
});

function openContact(contact) {
  if (contact == null) 
  return
    contact.classList.add('active'),
    overlay.classList.add('active');
  };

  function closeContact(contact) {
    if (contact == null) 
    return 
    contact.classList.remove('active'),
    overlay.classList.remove('active');
  };