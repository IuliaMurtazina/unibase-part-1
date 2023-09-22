// Phone

const phoneInput = document.querySelector("#phone");

const prefix = (e) => {
  if (e.target.value.trim() === "") e.target.value = "+7(";
};

const phoneMask = (e) => {
  const value = e.target.value.replace(/\D+/g, "");
  const numberLength = 11;
  let result = "+7(";

  for (let i = 0; i < value.length && i < numberLength; i++) {
    switch (i) {
      case 0:
        continue;
      case 4:
        result += ") ";
        break;
      case 7:
        result += "-";
        break;
      case 9:
        result += "-";
        break;
      default:
        break;
    }
    result += value[i];
  }
  e.target.value = result;
};

phoneInput.addEventListener("focus", prefix);
phoneInput.addEventListener("input", phoneMask);

// Social

const inputs = document.querySelectorAll("input[data-prefix]");

const addPrefix = (e) => {
  const input = e.target;
  const prefix = input.getAttribute("data-prefix");

  if (prefix && input.value.trim() === "") {
    input.value = prefix;
  }
};

const notRemovalPrefix = (e) => {
  const input = e.target;
  const prefix = input.getAttribute("data-prefix");

  if (prefix && input.value.indexOf(prefix) !== 0) {
    input.value = prefix;
  }
};

const clearInput = (e) => {
  const input = e.target;
  const prefix = input.getAttribute("data-prefix");

  if (prefix && input.value === prefix) {
    input.value = "";
  }
};

inputs.forEach((input) => {
  input.addEventListener("focus", addPrefix);
  input.addEventListener("input", notRemovalPrefix);
  input.addEventListener("blur", clearInput);
});
