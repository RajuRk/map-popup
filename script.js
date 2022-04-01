var modal = document.querySelector(".modal");
var swimmingId = document.querySelector("#swimming-pool");
var playGround = document.querySelector("#play-ground");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

swimmingId.addEventListener("click", toggleModal);
playGround.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
