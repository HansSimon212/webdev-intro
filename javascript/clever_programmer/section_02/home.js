// performs some basic I/O
//console.log('hello');
//console.log(2); console.log(2);
//alert('Harambe was guilty');


// declaring some simple data
let x = 5;
let str = "Hello, World!";

//experimenting with string concatenation in JavaScript
//console.log(str + x + 5);

//document.getElementById("arbitraryElement").innerHTML = "Test Test Test";

let firstName = prompt("What is your first name?");
let middleName = prompt("What is your middle name?");
let lastName = prompt("What is your last name?");

document.getElementById("userFirstName").innerHTML = "First: " + firstName;
document.getElementById("userMiddleName").innerHTML = "Middle: " + middleName;
document.getElementById("userLastName").innerHTML = "Last: " + lastName;
