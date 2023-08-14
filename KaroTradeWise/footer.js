const privacyBtn = document.getElementById("privacyBtn");
const workStructureBtn = document.getElementById("workStructureBtn");
const privacyModal = document.getElementById("privacyModal");
const workStructureModal = document.getElementById("workStructureModal");
const closePrivacyModal = document.getElementById("closePrivacyModal");
const closeWorkStructureModal = document.getElementById("closeWorkStructureModal");

privacyBtn.addEventListener("click", () => {
  privacyModal.style.display = "block";
});

workStructureBtn.addEventListener("click", () => {
  workStructureModal.style.display = "block";
});

closePrivacyModal.addEventListener("click", () => {
  privacyModal.style.display = "none";
});

closeWorkStructureModal.addEventListener("click", () => {
  workStructureModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === privacyModal) {
    privacyModal.style.display = "none";
  }

  if (event.target === workStructureModal) {
    workStructureModal.style.display = "none";
  }
});