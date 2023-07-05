const hamburger = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn ");
const sidenav = document.querySelector(".sidenav");

closeBtn.onclick = () => {
  sidenav.style.width = "0";
};
hamburger.onclick = () => {
  sidenav.style.width = "250px";
};
