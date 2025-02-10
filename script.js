const yesBtn = document.getElementById('yes-btn');
const definitelyBtn = document.getElementById('definitely-btn');
const noBtn = document.getElementById('no-btn');
const response = document.getElementById('response');
const flowerAnimation = document.getElementById('flower-animation');
const popup = document.getElementById('popup'); // Make sure this is correctly referenced
const closePopup = document.getElementById('close-popup');

// Ensure popup is hidden initially
popup.style.display = 'none';

function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
  noBtn.style.position = 'absolute';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('click', moveNoButton);

function createFlowers() {
  for (let i = 0; i < 50; i++) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.top = `${Math.random() * 100}vh`;
    flower.style.animationDuration = `${Math.random() * 3 + 2}s`; // Randomize animation speed
    flowerAnimation.appendChild(flower);
  }
}

function showPopup() {
  popup.style.display = 'flex'; // This makes sure the popup appears
}

yesBtn.addEventListener('click', () => {
  response.textContent = "Yay! You made me the happiest person! 💖";
  noBtn.style.display = 'none';
  createFlowers();
  setTimeout(showPopup, 1000); // Show popup after 1 second
});

definitelyBtn.addEventListener('click', () => {
  response.textContent = "I knew you'd say definitely! 💖";
  noBtn.style.display = 'none';
  createFlowers();
  setTimeout(showPopup, 1000); // Show popup after 1 second
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none'; // Hide popup on close button click
});
