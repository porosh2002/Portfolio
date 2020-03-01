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
const crnt_yr =  new Date().getFullYear();
const current_Year = document.querySelector('.current_Year').innerHTML =crnt_yr;
// image 
const image_own = document.querySelector('.own_img');
image_own.addEventListener('mouseenter',()=>{
    image_own.style.transform = "rotate(360deg)";
    image_own.style.transition = " linear 3s";
    image_own.style.zIndex = "0";
    setTimeout(()=>{
    image_own.src = "/image/own_img_CF.png";
    },3500);
});


