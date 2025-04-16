const processButton = document.querySelector("#process");
processButton.addEventListener("click", makeStringArray); //getInput is placeholder

function makeStringArray() {
    removeList(); // Remove previous list items

    const input = document.querySelector("#sentence").value;

    // trim input string and split into array
    const stringArray = input.trim().split(" ");

    // filter array for numbers
    const numberArray = stringArray.filter(str => 
        /[0-9]/.test(str) &&         // test for one number digit
        !/,/.test(str) &&         // can't contain a comma
        !/[a-zA-Z]/.test(str)     // can't contain any letters
      );
    // filter array for words
    const wordArray = stringArray.filter(str => 
        /[a-zA-Z]/.test(str) ||
        /,/.test(str)
    );
    
    listNumbers(numberArray);
    listWords(wordArray);
}

// We should remove the previous list on button press
function removeList() {
    const listItems = document.querySelectorAll("li");
    listItems.forEach((item) => item.remove());
}

function listNumbers(numArray) {
    const numberList = document.querySelector(".number-list");
    numArray.sort((a, b) => a - b);

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
    wordArray.sort();

    // iterate through word array
    // create a new <li> and put the word in it
    wordArray.forEach((word) => {
        const wordItem = document.createElement("li");
        wordItem.textContent = word;
        wordList.appendChild(wordItem);
    })
}

