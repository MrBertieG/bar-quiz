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

const openRulesButtons = document.querySelectorAll('[data-rules-target]');
const closeRulesButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementsByClassName('overlay');

//Rules Animation Window
openRulesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const rules = document.querySelector(button.dataset.rulesTarget);
    openRules(rules);
  });
});

//Close Rules Window
closeRulesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const rules = button.closest('.rules');
    closeRules(rules);
  });
});

function openRules(rules) {
  if (rules == null) 
  return;
    rules.classList.add('active');
    overlay.classList.add('active');
}

function closeRules(rules) {
  if (rules == null) 
  return;
  rules.classList.remove('active');
  overlay.classList.remove('active');
}

// Start Quiz Animation Window
const openGameButtons = document.querySelectorAll('[data-game-target]');
const closeGameButtons = document.querySelectorAll('[data-close-button]');
//Close Quiz Window
openGameButtons.forEach(button => {
  button.addEventListener('click', () => {
    const game = document.querySelector(button.dataset.gameTarget);
    openGame(game);
  });
});

function openGame(game) {
  if(game == null) 
  return;
  game.classList.add('active');
  if (overlay.classList != undefined) {
    overlay.classList.push('active');
  }  
}


closeGameButtons.forEach(button => {
  button.addEventListener('click', () => {
    const game = button.closest('.game');
    closeGame(game);
  });
});

function closeGame(game) {
  if(game == null) return;
  game.classList.remove('active');
  if (overlay.classList != undefined) {
    overlay.classList.remove('active');
  }
}


//Contact Animation Window
const openContactButtons = document.querySelectorAll('[data-contact-target]');
const closeContactButtons = document.querySelectorAll('[data-close-button]');

openContactButtons.forEach(button => {
  button.addEventListener('click', () => {
    const contact = document.querySelector(button.dataset.contactTarget);
    openContact(contact);
  });
});
//Close Contact Window
closeContactButtons.forEach(button => {
  button.addEventListener('click', () => {
    const contact = button.closest('.contact');
    closeContact(contact);
  });
});

function openContact(contact) {
  if (contact == null) 
  return;
    contact.classList.add('active');
    if (overlay.classList != undefined) {
      overlay.classList.add('active');
    }
}

function closeContact(contact) {
  if (contact == null) 
  return;
  contact.classList.remove('active');
  if (overlay.classList != undefined) {
    overlay.classList.remove('active');
  }
}

// Exit button Animation
const openExitButtons = document.querySelectorAll('[data-exit-target]');
const closeExitButtons = document.querySelectorAll('[data-close-i]');

openExitButtons.forEach(i => {
  i.addEventListener('click', () => {
    const exit = document.querySelector(i.dataset.exitTarget);
    openExit(exit);
  });
});
//Close Exit Window
closeExitButtons.forEach(span => {
  span.addEventListener('click', () => {
    const exit = span.closest('.exit-container');
    closeExit(exit);
  });
});

function openExit(exit) {
  if (exit == null) 
  return;
  exit.classList.add('active');
  if (overlay.classList != undefined) {
    overlay.classList.add('active');
  }
}

function closeExit(exit) {
  if (exit == null) 
  return;
  exit.classList.remove('active');
  if (overlay.classList != undefined) {
    overlay.classList.remove('active');
  }
}