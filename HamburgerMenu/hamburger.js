const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");
const bars = document.querySelectorAll(".bar");
let navState = 0



function handleNavbar(){
  hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if(navState==0){
      navState++
      closeOutside();
    } else {
      navState--
    }
  }); 
}

function closeOutside(){
      document.addEventListener("click", (e)=>{
        if(e.target!=navbar && e.target!=navMenu && e.target!=hamburger && e.target!=bars[0] && e.target!=bars[1]&&e.target!=bars[2]){
          hamburger.classList.remove("active");
          navMenu.classList.remove("active");
        }
      })
  }
handleNavbar();
