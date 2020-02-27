
// var typed = new Typed(".abut_des", {
//     strings: ["UI UX Designer", "JS Devoloper","MD Jamil Kashem Porosh","Web App Devoloper", "Full Stack Web Devoloper"],
//     typeSpeed: 120,
//     loop:true,
//     backSpeed: 120
// });
const bars = document.querySelector(".bars");
bars.addEventListener("click", () => {
    const navigation = document.querySelector("nav");
    const first_bar = document.querySelector(".barfst");
    const mdl_bar = document.querySelector(".bar_mdl");
    navigation.classList.toggle("on_click_navigation");
    first_bar.classList.toggle('fstbr');
    mdl_bar.classList.toggle('mdlbr');
});