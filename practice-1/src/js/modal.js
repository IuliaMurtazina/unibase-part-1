import { allInputs } from "./form";

const btnStart = document.querySelector("#btn-start");
const btnCancel = document.querySelector(".btn-cancel");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");

let isModalOpen = false;

const openModalHandler = () => {
  isModalOpen = true;

  const paddingOffset = `${window.innerWidth - document.body.clientWidth}px`;
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
  document.body.style.paddingRight = paddingOffset;
};

const closeModalHandler = () => {
  isModalOpen = false;

  overlay.classList.add("hidden");
  modal.classList.add("hidden");
  document.body.style.paddingRight = "0";

  allInputs.forEach((input) => {
    input.value = "";
    setTimeout(() => {
      const label = document.querySelector(`label[for="${input.id}"]`);
      if (label) label.classList.remove("error");
    }, 0);
  });
};

btnStart.addEventListener("click", openModalHandler);
btnCancel.addEventListener("click", closeModalHandler);
