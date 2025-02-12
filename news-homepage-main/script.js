const openBtn = document.querySelector(".nav-open-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const menu = document.querySelector(".nav-menu");
const filter = document.querySelector(".filter");

openBtn.addEventListener("click", () => {
  menu.classList.add("active");
  filter.classList.add("active");
  document.body.classList.add("toggle");

  setTimeout(() => {
    menu.classList.add("anim");
    filter.classList.add("anim");
  }, 1);
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("anim");
  filter.classList.remove("anim");
  document.body.classList.remove("toggle");

  setTimeout(() => {
    menu.classList.remove("active");
    filter.classList.remove("active");
  }, 500);
});
