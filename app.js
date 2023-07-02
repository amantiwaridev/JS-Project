var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(input){

    return serverURL + "?" + "text=" + input

}



function clickHandler(){   
        var inputText = txtInput.value;

        //calling server for translation
        fetch(getTranslationURL(inputText))
            .then(promise => promise.json())
            .then(json => {
                // var translatedText = json.contents.translated;
                // outputDiv.innerText = translatedText;
                console.log(json)
            })
    }

btnTranslate.addEventListener("click", clickHandler);