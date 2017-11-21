//print all numbers from 1 - 100
// if  divisible by 3 Fizz
// if by 5 Buzz
// if by 3 and 5 FizzBuzz

/*for (i = 1; i < 101; i++) {
    var output = "";
    if ((i % 3 == 0) && (i % 5 == 0)) {
        output += "FizzBuzz";
    } else if (i % 3 == 0) {
        output += "Fizz";
    } else if (i % 5 == 0) {
        output += "Buzz";
    } else {
        output = i;
    }
    console.log(output)
}
*/

// Refactor version

for (i = 1; i < 101; i++) {
    var output = "";
    if (i % 3 == 0)
        output += "Fizz";
    if (i % 5 == 0)
        output += "Buzz";
    console.log(output || i);
}