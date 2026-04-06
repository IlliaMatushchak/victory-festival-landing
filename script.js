let btnMenu = document.querySelector(".btn-nav");
let menu = document.querySelector(".header-nav");

btnMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
});
