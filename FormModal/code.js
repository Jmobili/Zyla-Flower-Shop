const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 700,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const modalSwiper = new Swiper(".fullScreenSwiper", {
    slidesPerView: 1,
    spaceBetween: 1,
    speed: 700,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
    },
  });

const modal = document.getElementById("simpleModal");
const mainSwiper = document.querySelector(".swiper-wrapper");
const formModal = document.querySelector(".form-modal");
const reservationBtn = document.querySelector(".buttons__reservation-button");
const informationBtn = document.querySelector(".buttons__information-button");
const cancelBtn = document.querySelector(".cancel-button");
let formMsg = document.getElementById("form-msg");

function openModal(targetModal){
  targetModal.removeAttribute("close");
  targetModal.setAttribute("open", "");
}

function closeModal(targetModal){
  targetModal.removeAttribute("open");
  targetModal.setAttribute("closing", "");
  targetModal.addEventListener("animationend", ()=>{
  targetModal.removeAttribute("closing");
  targetModal.setAttribute("close", "");
  }, {once: true});
}

//swiper modal
  mainSwiper.addEventListener("click", ()=>{
    openModal(modal);
  })
  
  window.addEventListener("click", (e)=>{
    if(e.target==modal) {
      closeModal(modal);
    }
  })


  //form modal
  reservationBtn.addEventListener("click", ()=>{
      if(document.getElementById("subject").value !== "I want a Reservation"){
        document.getElementById("subject").value = "I want a Reservation";
      }
      if (formMsg.textContent !== "CONTACT US FOR YOUR RESERVATION"){
        formMsg.textContent = "CONTACT US FOR YOUR RESERVATION";
      }
      openModal(formModal);
  });

  informationBtn.addEventListener("click", ()=>{
    if(document.getElementById("subject").value !== "I want Information"){
      document.getElementById("subject").value = "I want Information";
    }
    if (formMsg.textContent !== "CONTACT US FOR INFORMATION"){
      formMsg.textContent = "CONTACT US FOR INFORMATION";
    }
    openModal(formModal);
  });

  cancelBtn.addEventListener("click",  ()=>{
    closeModal(formModal);
  });

  window.addEventListener("click", (e)=>{
    if(e.target==formModal) {
      closeModal(formModal);
    }
  })



