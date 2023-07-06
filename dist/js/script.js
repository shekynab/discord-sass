const toggleBtn = document.querySelector(".toggle_menu");
const headerNav = document.querySelector(".header_nav");
const dim = document.querySelector(".dim");
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("open");
  headerNav.classList.toggle("open");
  dim.classList.toggle("open");
});