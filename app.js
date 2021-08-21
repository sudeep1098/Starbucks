function clicking(anything) {
  document.querySelector(".clicking").src = anything;
}
function circlecolor(color) {
  const circle = document.querySelector(".circle");
  const btn = document.querySelector(".btn");
  const span = document.querySelector(".span");

  circle.style.background = color;
  btn.style.background = color;
  span.style.color = color;
}
function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  const toggle = document.querySelector(".toggle");

  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
}
