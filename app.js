var btn = document.querySelector(".toggle-btn");
var clas = document.querySelector(".active");

btn.addEventListener("click",()=>{
    clas.classList.toggle("active");
})
