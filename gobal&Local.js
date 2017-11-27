//Gobal variable is  any variable outside any function
// Well as Local var is any variable inside an function

var girl = "Kelsey";

let print = () => {
    console.log(girl);
}

print()
console.log(girl);


let print2 = () => {
    let boy = "Dylan"
    console.log(boy)
}
print2();