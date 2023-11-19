const BASE_URL = 'https://api.frontendexpert.io/api/fe/glossary-suggestions'

let timeoutID;

const input = document.getElementById('input');
const suggestionsList = document.getElementById('suggestions-list');

// add an event listener to the input
input.addEventListener('input',onType);

function onType(){
    if(input.ariaValueMax.length === 0){
        clearSuggestions();
        return;
    }

    clearTimeout(timeoutID);
    timeoutID = setTimeout(fetchAndAppendSuggestions, 500);
}

function fetchAndAppendSuggestions(){

}

function clearSuggestions(){
    // clear the timeout
    clearTimeout(timeoutID);
    suggestionsList.innerHTML='';
}