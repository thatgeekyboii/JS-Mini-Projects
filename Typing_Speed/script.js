// Getting quotes in the box
const RANDOM_QUOTE_API_URL = "https://api.quotable.io/random"
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('quoteInput')
const timerElement = document.getElementById('timer')

//Listening to character
quoteInputElement.addEventListener('input',() => {
   const arrayQuote = quoteDisplayElement.querySelectorAll('span');
   const arrayValue = quoteInputElement.value.split('');
   let correct = true;
   arrayQuote.forEach((characterSpan,index)=>{
    const character = arrayValue[index];
    if(character == null){
        characterSpan.classList.remove('correct');
        characterSpan.classList.remove('incorrect')
        correct = false;

    }
    else if(character === characterSpan.innerText){
        characterSpan.classList.add('correct');
        characterSpan.classList.remove('incorrect');

    }else{
        characterSpan.classList.remove('correct');
        characterSpan.classList.add('incorrect');
        correct = false;

    }
   })
   // Generates new quote after correct filling
   if(correct) renderNewQuote();
})

function getRandomQuote(){
    return fetch(RANDOM_QUOTE_API_URL)
    .then(response => response.json())
    .then(data => data.content)
}

// printing the quote
async function renderNewQuote(){
const quote = await getRandomQuote();
// putting inside container
quoteDisplayElement.innerHTML = '';
// getting new value for every quore re-rencder
quote.split('').forEach(character => {
    const characterSpan = document.createElement('span');
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan)
})
quoteInputElement.value = null;
startTimer();
}

// hooking up timer
let startTime;
function startTimer(){
    timerElement.innerText = 0;
    startTime = new Date(); // gives current time
    setInterval(() => {
        timer.innerText=getTimerTime();
    }, 1000);
}

function getTimerTime(){
    return Math.floor((new Date()-startTime)/1000);
}
renderNewQuote();