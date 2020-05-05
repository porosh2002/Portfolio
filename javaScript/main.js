var typed = new Typed(".type", {
  strings: [
    "I Love Coding so Much",
    "Welcome To My Website",
    "I'm Porosh",
    "I'm a JS Developer",
    "I'm a Full Stack Web-Devoloper",
  ],
  typeSpeed: 120,
  loop: !0,
  backSpeed: 120,
  shuffle: !0,
});
window.addEventListener("scroll", () => {
  const e = document.querySelector(".wth_out_wlcm");
  window.scrollY > 90 && (e.style.backgroundColor = "#fff");
});
const bars = document.querySelector(".bars");
bars.addEventListener("click", () => {
  const e = document.querySelector("nav"),
    t = document.querySelector(".barfst"),
    o = document.querySelector(".bar_mdl");
  e.classList.toggle("on_click_navigation"),
    t.classList.toggle("fstbr"),
    o.classList.toggle("mdlbr");
});
const crnt_yr = new Date().getFullYear(),
  current_Year = (document.querySelector(".current_Year").innerHTML = crnt_yr),
  image_own = document.querySelector(".own_img");
image_own.addEventListener("mouseenter", () => {
  (image_own.style.transform = "rotate(360deg)"),
    (image_own.style.transition = " linear 3s"),
    (image_own.style.zIndex = "0"),
    setTimeout(() => {
      image_own.src = "image/own_img_CF.png";
    }, 3500);
});
