import { validateInput, requiredInputs } from "./validation";

const form = document.querySelector(".form");
export const allInputs = document.querySelectorAll(
  ".form-group__input--optional, .form-group__input--required",
);

form.addEventListener("submit", (event) => {
  let isValid = true;

  requiredInputs.forEach((input) => {
    if (!validateInput(input)) {
      isValid = false;
      document.querySelector(`label[for="${input.id}"]`).classList.add("error");
    }
  });

  event.preventDefault();

  if (isValid) {
    allInputs.forEach((input) => (input.value = ""));
    alert("Вы успешно заполнили форму!");
  }
});
