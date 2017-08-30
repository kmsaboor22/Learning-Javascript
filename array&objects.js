// array of todo items
var toDos = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];

//displing todo list function
function displayToDos() {
    console.log('My Todos list: ', toDos);
}
//adding a new todo
function addTodo(todo) {
    toDos.push(todo);
    displayToDos();
}
//it should have a function to chnage a todo
function changeTodo(index, newValue) {
    toDos[index] = newValue;
    displayToDos();
}
//delete todos
deleteTodos = (index) => {
        toDos.splice(index, 1);
        displayToDos();
    }
    // exmaple of an object
var myComputer = {
        OS: 'Mac',
        screenSize: '15 inches',
        purchaseYear: 2011
    }
    // how to call an item  
    // in an object
    //console.log(myComputer.OS)

var khalil = {
        name: 'Khalil',
        height: '5 foot 9',
        sayName: function() {
            console.log(this.name);
        }
    }
    // this is an example of how 
    //to call an function in an object
    //khalil.sayName();