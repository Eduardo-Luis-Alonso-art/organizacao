let prevScrollPos = window.pageYOffset;
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
  const currentScrollPos = window.pageYOffset;
  if (header) {
    header.style.top = prevScrollPos > currentScrollPos ? "0" : "-100px";
  }
  prevScrollPos = currentScrollPos;
});