// (() => {
//   const refs = {
//     openModalBtn: document.querySelector(".button"),
//     closeModalBtn: document.querySelector(".modal-close"),
//     modal: document.querySelector(".modal"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();
const openModal = document.querySelector(".button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal-close");

openModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal--show");
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal--show");
});
