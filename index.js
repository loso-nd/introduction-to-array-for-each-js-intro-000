<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
const index-test.js = require('./index-test.js');


>>>>>>> 47de4d30ac0d0264e75bcc1cc9e48d4e0ae72e00
>>>>>>> 27fe42f782762a89a8521190a38879eb7233e811
// Add your doToElementsInArray() function here:
function doToElementsInArray(array, callback) {
  array.forEach(callback);
}

// Add your changeCompletely() function here:
function changeCompletely(element, index, array) {
  array[index] = Math.floor(Math.random() * 100 + 2).toString() + ` ${array[index]}s!!!`;
}

/**
var animals = ["dog", "cat", "squirrel"];

doToElementsInArray(animals, changeCompletely);

// log out animals -- 
console.log(animals);
*/
