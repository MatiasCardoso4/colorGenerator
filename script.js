const generateBtn = document.getElementById("generate-btn");
const colorContainer = document.querySelector(".color-container");
const colorId = document.querySelector(".color-id");

generateBtn.addEventListener("click", function () {
  const copyIcon = document.createElement('img')
  copyIcon.src = './assests/copy.png'
  const hexColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
  colorContainer.style.backgroundColor = hexColor;
  colorId.style.color = hexColor;
  colorId.textContent = hexColor;
  colorId.append(copyIcon)
});

colorId.addEventListener("click", () => {
  const copiedAlert = document.createElement("span");
  copiedAlert.classList.add("copy");
  copiedAlert.textContent = "Copied!";
  setTimeout(() => copiedAlert.classList.remove("copy"), 1000);
  navigator.clipboard.writeText(colorId.textContent);
  colorId.append(copiedAlert);
});
