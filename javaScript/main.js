var typed = new Typed(".type", {
    strings: ['I Love Coding so Much','Welcome To My Website','am Porosh','am a JS Developer',' am a Full Stack Web-Devoloper'],
    typeSpeed: 120,
    loop:true,
    backSpeed: 120,
    shuffle:true,
});
window.addEventListener('scroll',() =>{
    const nav = document.querySelector('.wth_out_wlcm');
    const scroll_value = window.scrollY;
    if(scroll_value>90){
        nav.style.backgroundColor = "#fff";
    }    
});
const bars = document.querySelector(".bars");
bars.addEventListener("click", () => {
    const navigation = document.querySelector("nav");
    const first_bar = document.querySelector(".barfst");
    const mdl_bar = document.querySelector(".bar_mdl");
    navigation.classList.toggle("on_click_navigation");
    first_bar.classList.toggle('fstbr');
    mdl_bar.classList.toggle('mdlbr');
});