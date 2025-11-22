const popup = document.getElementById("popup");
const togglePopup = document.getElementById("togglePopup");
const closePopup = document.getElementById("closePopup");

togglePopup.addEventListener("click", () => {
  popup.classList.add("active");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
});

// Закрытие по клику на фон
popup.addEventListener("click", (e) => {
  if (e.target === popup) popup.classList.remove("active");
});
