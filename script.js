console.log("Hello world");
/* Data types 
Undefined  Null  Boolean String Symbol Number and Object */

/*
A STRING is basically any type of text
A NUMBER is just a number 
UNDEFINED is anything that hasn't been defined yet..You may have a variable that is not yet defined
NULL means nothing,so you've set it to be something and that thing is nothing
A BOOLEAN means true or false
A SYMBOL is an immutable primitive value that is unique
An OBJECT can store a lot of different value pairs
*/

/* To declare a variable,you can use different ways ie:Using the var key word
var can be used through out your whole program*/
var myName = "Margaret";
myName = 8;

/*The second way is use of let to declare a variable
let will only be used within a scope of what you declared that */
let ourName = "Royals";

/*The lasy way is the use of const 
Const is a variable that should never change through out your code/program */
const pi = 3.14;

/* lets declare a variable */
var a;
/* Apart from declaring we can also assign a variable,Below we assign another variable to a number*/
var b = 2;
/*We can also say that */
a = 7;
/* We then use console.log to view our js code in the console,The console displays 7 because we assigned var a to a number 7*/ 
console.log(a)
/* If we console.log the first variable a,the console will display null because we didn't assign it to any value at first*/
/* we use an assignment opperator which is the equal sign to assign a variable to its value */
 var a = 5;
 var b = 10;
 var c = "I am a ";
 
 a = a + 1;
 b = b + 5;
 c = c + "String!"

 // Declarations 
 var studLyCapVar;
 var properCamelCase;
 var titleCaseOver;

 //Assignments
 studLyCapVar = 10;
 properCAmelCAse = "A String";
 titleCaseOver = 9000;
 
 //Adding two numbers 
 var sum = 10 + 1;  
 console.log(sum)
 //Subtraction
 var difference = 45 - 3;
 console.log(difference)
 //Multiplucation 
 var product = 8*0;
 console.log(product)
 //Division
 var quotient = 66 / 0;
 console.log(quotient)
 //Incrementing. To increment a number means to add one to it
 var myVar = 10;
 myVar = myVar + 1;
 console.log(myVar)
 //The above line shows incrementing but there is a shorter way to do that:
 myVar++
 console.log(myVar)
 // Decrementing
 var myVar = 11;
 myVar = myVar - 1;
 //OR
 myVar--
 console.log(myVar)
 //Decimal numbers or floating point numbers or floats
 var ourDecimal = 5.7;
 var myDecimal = 0.009
 //We can also multiply,add or devide decimals
 var product = 2.0 * 2.5;
 console.log(product)
 //Finding the remainder. The remainder is what is left after the devision of two numbers
 var remainder;
 remainder = 11 % 3;
 console.log(remainder) 

 var a = 3;
 var b = 17;
 var c =12;

 a = a + 12;
 b = 9 + b;
 c = c +7; 
 //The above lines can be simplified by putting both the addition sig (or any other sighn that you are using)next to the equal sign
 a += 12;
 b += 9; 
 c += 7;

 //Strings
 var firstName = "Margaret";
 var lastName = "Kimani"; 
 var myStr = "I am a \"double quoted\" string inside \"double quotes\""
 console.log(myStr)
 //Putting a back slash before the quotation mark shows java script that the quotation mark is just a quitation mark on its own and not the end of the string
 //A string can either be surrounded with a double quotes or a single quotes
 /*****
  Code Output with escape charachters
  \' single quote 
  \" double quote
  \\ backslash
  \n new line
  \r carriage return
  \t tab
  \b backspace 
  \f form feed
  */
 var myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
 console.log(myStr)
// Concatination
var ourStr = "I come first." + "I come second";
var myStr = "This is the start. " + "This is the end";
console.log(myStr)
//We can also concatinate a string using the += operatoe
var ourStr = "I come first. ";
ourStr += "I come second.";
console.log(ourStr)
//Concatinating strings with variable
var myName = "freeCodeCamp";
var myStr = "Hello, our name is " + myName + ", how are you?";
console.log(myStr)
//Finding the length of a string
var firstNameLength = 0;
var firstName = "Margaret";

firstNameLength = firstName.length;
console.log(firstNameLength)
//Bracket notation is a way to get a charachter within a specific index in a string
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName)
//J.S uses 0 number based indexing,which means that we start counting from 0 and not 1
