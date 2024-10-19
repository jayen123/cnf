const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");
const closeButton = document.getElementById("closeButton");

menuButton.addEventListener("click", () => {
  sidebar.style.transform = "translateX(0)";
});

closeButton.addEventListener("click", () => {
  sidebar.style.transform = "translateX(-100%)";
});

// Dropdown for desktop menu
const committeDropdown = document.getElementById("committeDropdown");
const committeMenu = document.getElementById("committeMenu");
const infoDropdown = document.getElementById("infoDropdown");
const infoMenu = document.getElementById("infoMenu");
const moreDropdown = document.getElementById("moreDropdown");
const moreMenu = document.getElementById("moreMenu");

committeDropdown.addEventListener("click", () => {
  committeMenu.classList.toggle("hidden");
});

infoDropdown.addEventListener("click", () => {
  infoMenu.classList.toggle("hidden");
});

moreDropdown.addEventListener("click", () => {
  moreMenu.classList.toggle("hidden");
});

// Dropdown for mobile menu
const mobileCommitteDropdown = document.getElementById(
  "mobileCommitteDropdown"
);
const mobileCommitteMenu = document.getElementById("mobileCommitteMenu");
const mobileInfoDropdown = document.getElementById("mobileInfoDropdown");
const mobileInfoMenu = document.getElementById("mobileInfoMenu");
const mobileMoreDropdown = document.getElementById("mobileMoreDropdown");
const mobileMoreMenu = document.getElementById("mobileMoreMenu");

mobileCommitteDropdown.addEventListener("click", () => {
  mobileCommitteMenu.classList.toggle("hidden");
});

mobileInfoDropdown.addEventListener("click", () => {
  mobileInfoMenu.classList.toggle("hidden");
});

mobileMoreDropdown.addEventListener("click", () => {
  mobileMoreMenu.classList.toggle("hidden");
});

// hero carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  navText: [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right-long"></i>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 1,
    },
  },
});
$("#prevButton").click(function () {
  owl.trigger("prev.owl.carousel");
});

$("#nextButton").click(function () {
  owl.trigger("next.owl.carousel");
});
