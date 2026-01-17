const colorPicker = document.querySelector("#ColorPicker");
const previewColor = document.querySelector("#previewColor");
const colorList = document.querySelector("#colorList");
const clearHistoryBtn = document.querySelector("#clearHistoryBtn");

colorPicker.addEventListener("input", function () {
  previewColor.style.backgroundColor = colorPicker.value;
  const selectedColor = document.createElement("li");

  selectedColor.textContent = colorPicker.value;

  colorList.appendChild(selectedColor);

  clearHistoryBtn.addEventListener("click", function () {
    colorList.textContent = "";
  });
});
