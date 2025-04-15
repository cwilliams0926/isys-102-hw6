const processButton = document.querySelector("#process");
processButton.addEventListener("click", makeStringArray); //getInput is placeholder

function makeStringArray() {
    const input = document.querySelector("#sentence").value;

    // trim input string and split into array
    const stringArray = input.trim().split(" ");

    // filter array for numbers
    const numberArray = stringArray.filter(str => /\d/.test(str));
    // filter array for words
    const wordArray = stringArray.filter(str => !/\d/.test(str));
    
    listNumbers(numberArray);
    listWords(wordArray);
}

function listNumbers() {
    // iterate through number array
    // append each element to number-words <ul>
}

function listWords() {
    // iterate through word array
    // append each element to non-number-words <ul>
}

