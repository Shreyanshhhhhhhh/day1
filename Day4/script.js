function showMessage() {
    alert("This is an external JavaScript file.");
}
showMessage();

let a = 10, b = 5;

 Arithmetic Operators
console.log("Addition: " + (a + b));
console.log("Subtraction: " + (a - b));
console.log("Multiplication: " + (a * b));
console.log("Division: " + (a / b));
console.log("Modulus: " + (a % b));

 Relational Operators
console.log("Equal: " + (a == b));
console.log("Not Equal: " + (a != b));
console.log("Greater Than: " + (a > b));
console.log("Less Than: " + (a < b));

 Logical Operators
console.log("AND: " + (a > 0 && b > 0));
console.log("OR: " + (a > 0 || b < 0));
console.log("NOT: " + !(a > 0));

 Assignment Operators
let c = a;
console.log("Assigned Value: " + c);

 Increment/Decrement
console.log("Increment: " + (++a));
console.log("Decrement: " + (--b));

 Bitwise Operators
console.log("Bitwise AND: " + (a & b));
console.log("Bitwise OR: " + (a | b));


let currentDate = new Date();

console.log("Current Date and Time: " + currentDate);
console.log("Year: " + currentDate.getFullYear());
console.log("Month: " + (currentDate.getMonth() + 1));  Months are 0-based
console.log("Date: " + currentDate.getDate());
console.log("Day: " + currentDate.getDay());
console.log("Hours: " + currentDate.getHours());
console.log("Minutes: " + currentDate.getMinutes());
console.log("Seconds: " + currentDate.getSeconds());
console.log("Milliseconds: " + currentDate.getMilliseconds());
console.log("Time since Epoch: " + currentDate.getTime());


let str = "Hello, JavaScript!";

 String Length
console.log("Length: " + str.length);

 Convert to Uppercase
console.log("Uppercase: " + str.toUpperCase());

 Convert to Lowercase
console.log("Lowercase: " + str.toLowerCase());

 Substring
console.log("Substring (0, 5): " + str.substring(0, 5));

 Replace
console.log("Replace 'JavaScript' with 'World': " + str.replace("JavaScript", "World"));
