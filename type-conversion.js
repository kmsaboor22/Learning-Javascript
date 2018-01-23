//Type Conversion
/*
1. Take notes
2. Cut and paste to new JS file.
3. Repeat
*/

let val;

/* 
  numbers to string

val = 5;

*/

//Turn into string by using the string func

val = String(5);
val = String(5 + 5);

//Bool to string
val = String(true)

//Date to String
val = String(new Date())

//Array to String
val = String([1, 2, 3, 4, 5])

//To String method
val = (5).toString();
val = (true).toString();

//String to Number
val = Number('5');

//Bool to Number
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');
val = Number([1, 2, 3]);

val = parseInt('100');
val = parseFloat('1.99')

//Output
console.log(val);
console.log(typeof val);
//console.log(val.length);
console.log(val.toFixed(2));

const val1 = 5;
const val2 = 5;

const sum = val1 + val2;

console.log(sum);
console.log(typeof sum)