const showFormBtn = document.getElementById("showFormBtn");
const registrationForm = document.getElementById("registrationForm");

showFormBtn.addEventListener("click", () => {
  registrationForm.classList.toggle("visible");
});