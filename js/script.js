const navBtn = document.querySelector("#toggleNav");
const nav = document.querySelector(".navigation");
navBtn.addEventListener("click", function () {
  nav.classList.toggle("move-nav");
});
