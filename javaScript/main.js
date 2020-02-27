
// var typed = new Typed(".abut_des", {
//     strings: ["UI UX Designer", "JS Devoloper","MD Jamil Kashem Porosh","Web App Devoloper", "Full Stack Web Devoloper"],
//     typeSpeed: 120,
//     loop:true,
//     backSpeed: 120
// });
const all_barr = document.querySelector(".all_bars"),
    navigation = document.querySelector(".navigation_links");
all_barr.addEventListener("click", () => {
    navigation.classList.toggle("on_click_navigation")
});