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

function listNumbers(numArray) {
    const numberList = document.querySelector(".number-list");

    // iterate through number array
    // create a new <li> and put the number in it
    numArray.forEach((num) => {
        const numberItem = document.createElement("li");
        numberItem.textContent = num;
        numberList.appendChild(numberItem);
    })
}

function listWords(wordArray) {
    const wordList = document.querySelector(".non-number-list");

    // iterate through word array
    // create a new <li> and put the word in it
    wordArray.forEach((word) => {
        const wordItem = document.createElement("li");
        wordItem.textContent = word;
        wordList.appendChild(wordItem);
    })
}

