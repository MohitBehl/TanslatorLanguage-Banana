var btnTranslate = document.querySelector("#btn-translate");
var inputTextArea = document.querySelector("#textArea");
var outputDivArea = document.querySelector("#output");
// var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslatedUrl(text) {
  return serverUrl + "?text=" + text;
}

function onClickHandler() {
  fetch(getTranslatedUrl(inputTextArea.value))
    .then(function responseHandler(response) {
      return response.json();
    })
    .then(function logJson(json) {
      outputDivArea.innerText = json.contents.translated;
    })
    .catch(errorHandler);
}

function errorHandler(error) {
  outputDivArea.innerText = "caught some server error, error code:" + error;
}

btnTranslate.addEventListener("click", onClickHandler);
