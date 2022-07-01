const menu = document.querySelector(".menu");
const menuBar = document.querySelector(".menu-bar");
const closeMenu = document.getElementById("close");

closeMenu.addEventListener("click", () => {
  menuBar.classList.add("hidden");
});

menu.addEventListener("click", () => {
  menuBar.classList.remove("hidden");
});
