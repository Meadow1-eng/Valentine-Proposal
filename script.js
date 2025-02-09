const yesBtn = document.getElementById("yes-btn");
const definitelyBtn = document.getElementById("definitely-btn");
const responsePopup = document.getElementById("response-popup");
const closeBtn = document.getElementById("close-btn");
const flowersContainer = document.getElementById("flowers");

// Flower animation logic
function createFlower() {
    const flower = document.createElement("div");
    flower.classList.add("flower");

    // Randomize flower position
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = Math.random() * 5 + 3 + "s"; // Random duration between 3 and 8 seconds

    flowersContainer.appendChild(flower);

    // Remove the flower after the animation
    setTimeout(() => {
        flower.remove();
    }, 8000); // Remove after animation ends
}

// Generate flowers continuously
setInterval(createFlower, 150);

// Show popup on button click
yesBtn.addEventListener("click", () => {
    responsePopup.style.display = "flex";
});

definitelyBtn.addEventListener("click", () => {
    responsePopup.style.display = "flex";
});

// Close popup
closeBtn.addEventListener("click", () => {
    responsePopup.style.display = "none";
});
