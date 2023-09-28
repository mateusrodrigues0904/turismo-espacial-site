const menuTopo = document.getElementById("menuTopo");
const menuNav = document.getElementById("menuNav");
const icoFecharNav = document.getElementById("icoFecharNav");

menuTopo.addEventListener("click", () => {
  menuNav.classList.remove("animate-fadeDir");
  menuNav.classList.add("animate-fadeEsq");
  menuNav.classList.remove("hidden");
  menuNav.classList.add("block");
});

icoFecharNav.addEventListener("click", () => {
  menuNav.classList.remove("animate-fadeEsq");
  menuNav.classList.add("animate-fadeDir");
  menuNav.classList.add("block");
});
