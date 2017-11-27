let doFirst = () => {
    console.log("I am first")
        //second()
}
let second = () => {
    console.log("2")
        //doFirst()
}

let start = () => {
    doFirst()
    second()
}

start();