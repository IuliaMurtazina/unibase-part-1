const inputFile = document.querySelector(".input-file__input");
const labelImage = document.querySelector(".input-file__label--image");
const iconClear = document.querySelector(".input-file__icon-clear");

inputFile.addEventListener("change", () => {
  const file = inputFile.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      labelImage.src = event.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    labelImage.src = "./img/input-file.png";
  }
});

iconClear.addEventListener("click", () => {
  inputFile.value = "";
  labelImage.src = "./img/input-file.png";
});