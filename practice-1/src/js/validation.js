export const requiredInputs = document.querySelectorAll(".form-group__input--required");

export const validateInput = (input) => {
  const inputId = input.id;
  const value = input.value.trim();
  const label = document.querySelector(`label[for="${inputId}"]`);

  switch (inputId) {
    case "name":
      if (value.length < 3 || value.length > 20) {
        label.classList.add("error");
        return false;
      } else {
        label.classList.remove("error");
        return true;
      }
    case "phone":
      if (value.length !== 17) {
        label.classList.add("error");
        return false;
      } else {
        label.classList.remove("error");
        return true;
      }
    case "email":
      if (!/^[\w\.-]+@[\w\.-]+\.\w+$/.test(value)) {
        label.classList.add("error");
        return false;
      } else {
        label.classList.remove("error");
        return true;
      }
    case "direction":
    case "image":
      if (value === "") {
        label.classList.add("error");
        return false;
      } else {
        label.classList.remove("error");
        return true;
      }

    default:
      return true;
  }
};

requiredInputs.forEach((input) => {
  input.addEventListener("input", () => {
    validateInput(input);
  });
});
