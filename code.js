const formModal = document.querySelector(".form-modal");
const cancelBtn = document.querySelector(".cancel-button");
let formMsg = document.getElementById("form-msg");
const boquetsBtn = document.querySelector(".bouquetBtn");
const eventsBtn = document.querySelector(".eventBtn");


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

boquetsBtn.addEventListener("click", ()=>{
  if(document.getElementById("subject").value !== "I want a Reservation"){
    document.getElementById("subject").value = "Contact for bouquet";
  }
  if (formMsg.textContent !== "Contact us for your bouquet"){
    formMsg.textContent = "Contact us for your bouquet";
  }
  openModal(formModal);
});

eventsBtn.addEventListener("click", ()=>{
if(document.getElementById("subject").value !== "I want Information"){
  document.getElementById("subject").value = "Contact for event";
}
if (formMsg.textContent !== "Contact us for your event"){
  formMsg.textContent = "Contact us for your event";
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


