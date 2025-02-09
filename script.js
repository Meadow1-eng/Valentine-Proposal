
const yesBtn = document.getElementById("yes-btn");
const definitelyBtn = document.getElementById("definitely-btn");
const responsePopup = document.getElementById("response-popup");
const closeBtn = document.getElementById("close-btn");

yesBtn.addEventListener("click", () => {
    responsePopup.style.display = "flex";
});

definitelyBtn.addEventListener("click", () => {
    responsePopup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    responsePopup.style.display = "none";
});
