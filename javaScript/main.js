const about_sec_img =document.querySelector('.about_sec_img');
about_sec_img.addEventListener('mouseenter',()=>{
    about_sec_img.style.transform = "rotate(360deg)";
    about_sec_img.style.transition = "3s";
    setTimeout(()=>{
        about_sec_img.src = '/image/own_img_C.png' },2100);
});
var typed=new Typed(".type",{strings:["UI UX Designer","JS Devoloper","Web App Devoloper","Full Stack Web Devoloper"],typeSpeed:120,loop:!0,backSpeed:120});const all_barr=document.querySelector(".all_bars"),navigation=document.querySelector(".navigation_links");all_barr.addEventListener("click",()=>{navigation.classList.toggle("on_click_navigation")});