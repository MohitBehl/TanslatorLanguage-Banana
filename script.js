var btnTranslate = document.querySelector("#btn-translate");
var inputTextArea = document.querySelector("#textArea");
var outputDivArea = document.querySelector("#output");

function onClickHandler() {
  if (inputTextArea.value.length === 0) {
    outputDivArea.innerText = "enter text to translate";
  } else {
    outputDivArea.innerText = inputTextArea.value;
  }
}

btnTranslate.addEventListener("click", onClickHandler);
