// Array Iteration: 8 methods

//for each
['Fish', 'Chips', 'Chicken', 'Waffles', 'Rice', 'Salmon'].forEach(function(item, index) {
    // item = elements index = where it is located
    console.log(item, index);
});

//map
//The map() method creates a new array with the results of 
//calling a provided function on every element in the calling array.
const three = [1, 2, 3];
const doubled = three.map(function(item) {
    return item * 2;
});
console.log(doubled);

//filter
//The filter() method creates a new array with all elements 
//that pass the test implemented by the provided function.
const words = ['Key', 'Name', 'Present', 'Happy', 'exberant', 'destruction', 'Elite']

let longWords = words.filter(words => words.length > 6);
let shortWords = words.filter(words => words.length < 6);

console.log(longWords, shortWords);

//reduce


//some