var btnTranslate = document.querySelector("#btn-translate");
var inputTextArea = document.querySelector("#textArea");

function onClickHandler() {
  alert("clicked " + inputTextArea.value);
}

btnTranslate.addEventListener("click", onClickHandler);
