const circles = document.querySelectorAll(".circle");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");
const popupTitle = document.getElementById("popupTitle");
const popupSeason = document.getElementById("popupSeason");
const popupImage = document.getElementById("popupImage");

circles.forEach(circle => {
    circle.addEventListener("click", () => {

        const title = circle.getAttribute("data-title");
        const season = circle.getAttribute("data-season");
        const bgImage = circle.style.backgroundImage;

        popupTitle.textContent = title;
        popupSeason.textContent = season;
        popupImage.style.backgroundImage = bgImage;

        popup.classList.add("active");
    });
});

closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
});

/* ปิดเมื่อคลิกพื้นหลัง */
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.classList.remove("active");
    }
});