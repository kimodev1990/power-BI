const consultClick = document.getElementById("consult-click");
const consulting = document.getElementById("consulting-popup-situation");
const solutionsClick = document.getElementById("solutions-click");
const solutions = document.getElementById("solutions-popup-situation");

consultClick.addEventListener("click", () => {
  consulting.classList.toggle("hidden");
});
solutionsClick.addEventListener("click", () => {
  solutions.classList.toggle("hidden");
});
