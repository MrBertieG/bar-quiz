//Hamburger Menu Effect
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const navLinksLi = document.querySelectorAll('.nav-links li');
const closeNavLinksLi = document.querySelectorAll('.x-btn');

/*
* This allows for the overlay effect to take place
* once the hamburger menu was clicked
*/
if (hamburger != null) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(link => {
      link.classList.toggle('fade');
    });
  });
}

/*
* This allows for the overlay effect to take place
* once the each navigation bar link has been clicked
*/
navLinksLi.forEach(link => {
  link.addEventListener("click", () => {
  const overlay = document.querySelector(".overlay");
  overlay.classList.add("active");
  });
  });

// This closes the overlay effect
closeNavLinksLi.forEach(link => {
  link.addEventListener("click", () => {
  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("active");
  });
  });

const openRulesButtons = document.querySelectorAll('[data-rules-target]');
const closeRulesButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementsByClassName('overlay');

//Rules Animation Window once clicked
openRulesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const rules = document.querySelector(button.dataset.rulesTarget);
    openRules(rules);
  });
});

//Close Rules Window once clicked
closeRulesButtons.forEach(button => {
  button.addEventListener('click', () => {
    const rules = button.closest('.rules');
    closeRules(rules);
  });
});

// This will open the modal and add an overlay background
function openRules(rules) {
  if (rules == null) 
  return;
    rules.classList.add('active');
    if (overlay.classList != undefined) {
      overlay.classList.add('active');
    }
}

// This closes the modal and removes the overlay
function closeRules(rules) {
  if (rules == null) 
  return;
  rules.classList.remove('active');
  if (overlay.classList != undefined) {
    overlay.classList.remove('active');
  }
}

// Start Quiz Animation Window when clicked
const openGameButtons = document.querySelectorAll('[data-game-target]');
const closeGameButtons = document.querySelectorAll('[data-close-button]');

/*
* This allows for the overlay effect to take place
* once the Start Link in the nav bar was clicked
*/
openGameButtons.forEach(button => {
  button.addEventListener('click', () => {
    const game = document.querySelector(button.dataset.gameTarget);
    const overlay = document.querySelector(".overlay");
    overlay.classList.add("active");
    openGame(game);
  });
});

// Openes the quiz page and adds backgroubd overlay
function openGame(game) {
  if(game == null) 
  return;
  game.classList.add('active');
  if (overlay.classList != undefined) {
    overlay.classList.push('active');
  }  
}

// Closes the quiz page and removes the background overlay
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

//Contact Animation Window openes when clicked
const openContactButtons = document.querySelectorAll('[data-contact-target]');
const closeContactButtons = document.querySelectorAll('[data-close-button]');

openContactButtons.forEach(button => {
  button.addEventListener('click', () => {
    const contact = document.querySelector(button.dataset.contactTarget);
    openContact(contact);
  });
});

//Close Contact Window closes when clicked
closeContactButtons.forEach(button => {
  button.addEventListener('click', () => {
    const contact = button.closest('.contact');
    closeContact(contact);
  });
});

// This openes the contact window with an background overlay
function openContact(contact) {
  if (contact == null) 
  return;
    contact.classList.add('active');
    if (overlay.classList != undefined) {
      overlay.classList.add('active');
    }
}

// This closes the contact window with an background overlay
function closeContact(contact) {
  if (contact == null) 
  return;
  contact.classList.remove('active');
  if (overlay.classList != undefined) {
    overlay.classList.remove('active');
  }
}

// Exit button Animation when clicked
const openExitButtons = document.querySelectorAll('[data-exit-target]');
const closeExitButtons = document.querySelectorAll('[data-close-i]');

openExitButtons.forEach(i => {
  i.addEventListener('click', () => {
    const exit = document.querySelector(i.dataset.exitTarget);
    openExit(exit);
  });
});
//Close Exit Window when clicked
closeExitButtons.forEach(span => {
  span.addEventListener('click', () => {
    const exit = span.closest('.exit-container');
    closeExit(exit);
  });
});

// Openes the modal
function openExit(exit) {
  if (exit == null) 
  return;
  exit.classList.add('active');
  if (overlay.classList != undefined) {
    overlay.classList.add('active');
  }
}

// Closes the modal
function closeExit(exit) {
  if (exit == null) 
  return;
  exit.classList.remove('active');
  if (overlay.classList != undefined) {
    overlay.classList.remove('active');
  }
}