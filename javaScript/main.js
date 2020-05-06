var typed = new Typed(".type", {
  strings: [
    "Welcome To My Website",
    "I'm a Full Stack Web-Developer",
    "I'm a JavaScript Developer",
    "I am the Person you are Looking for",
  ],
  typeSpeed: 120,
  loop: !0,
  backSpeed: 10,
  shuffle: !0,
});
window.addEventListener("scroll", () => {
  const e = document.querySelector(".wth_out_wlcm");
  window.scrollY > 90 && (e.style.backgroundColor = "#fff");
  if(window.scrollY > 90){
    e.classList.add('nav_shadow')
  }
  if(window.scrollY < 90){
    e.classList.remove('nav_shadow')
  }
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
$('.navLinks').click(function(){
  const e = document.querySelector("nav")
  e.classList.remove('on_click_navigation')
  t = document.querySelector(".barfst");
  o = document.querySelector(".bar_mdl");
  t.classList.remove("fstbr");
  o.classList.remove("mdlbr");
});
