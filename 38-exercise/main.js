const toggleBtn = document.querySelector(".toggle-button");
const navbar = document.querySelector(".navbar");

toggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
});
