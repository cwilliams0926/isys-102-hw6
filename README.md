# isys-102-hw6
Website that takes a user-input sentence and picks out numbers and non-numbers and sorts them into lists. For the isys-102 course at WVU Tech.

# How it's made
**Tech Used**: HTML, CSS, JavaScript

The HTML creates a layout with a header, main section, and an area for the lists. In CSS, flexbox is used to align everything, along with some padding and some other styles. The main portion is the JavaScript. 

An event listener is added to the process button. When clicked, it activates the makeStringArray() function. This function removes the previous lists in case there was one there before the new one, then it takes the user's input in the text box and splits it into an array of strings. This array is filtered into two new arrays, one containing numbers and the other containing words. This is done using RegEx. Finally, the functions listNumbers and listWords are called using those arrays respectively. These functions simply sort the numbers and words, and then make them into <li> items and append them to their respective <ul> element.

# Lessons learned
I had never used text input in HTML before so that was something I had to learn while making this. Using filter() to filter the arrays took up a good amount of time. Using the RegEx was fairly difficult and I had to reference the JavaScript RegEx.
