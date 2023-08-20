let searchForm = document.querySelector(".search-form");
let searchIcon = document.querySelector("#search-btn");
let hiddenDiv = document.querySelector(".hidden");
let loginForm= document.querySelector(".login-form");
let timesIcon =document.querySelector(".fas fa-times");
let menuBar= document.querySelector("#menu-bar");
let navBar=document.querySelector("header .nav");
let videobtn= document.querySelectorAll(".video-btn ");
let videobtnact= document.querySelector(".video-btn active ");
let videoSlider = document.querySelector("#video-slider");

function showup(){
    hiddenDiv.classList.toggle("active");
    searchIcon.classList.toggle("fa-times"); 
}
function showdown(){
    loginForm.classList.add("active");
    
}
function hideForm(){
    loginForm.classList.remove("active");
}
function showmenu(){
    menuBar.classList.toggle("fa-times");
    navBar.classList.toggle("active");
}
videobtn.forEach((btn)=>{
    btn.addEventListener("click" , function(){
        videobtn.forEach((btn)=>btn.classList.remove("active"));
        this.classList.add("active") ;
        const videosrc=btn.getAttribute("data-src");
        videoSlider.src=videosrc; 
    })
})
var swiper = new Swiper(".review-slider", {
    spaceBetween:20,
    loop:true,
    AutoPlay:{
        delay:2500
    },
    Breakpont:{
        640:{
            slidesPerView:1,
        },
        768:{
            slidesPerView:2,
        },
        1024:{
            slidesPerView:3,
        }
    }
});