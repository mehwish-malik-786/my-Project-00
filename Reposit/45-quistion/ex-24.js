/*
more conditional test:
you don't have to limit the number of tests you creat to 10.If you want to try more comparisons,
Write more tests.:have one true and one false
result of each pf the following:

Tests of equality and inequality with strings
tests using the lower case function
numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
and less than or equal to
Tests using "and" and "or" operators
Tests whether an item is an array
Tests whether an item is not an array
*/
// equlity and inequality
var myName = "ali";
console.log(myName == "ali");
console.log(myName !== "Ali");
// letnumerical
var myNum = 10;
console.log(myNum == 10);
console.log(myNum !== 10);
console.log(myNum < 5);
console.log(myNum > 5);
console.log(myNum <= 5);
console.log(myNum >= 5);
// and "&&" ,or ,||
var num1 = 10;
var num2 = 5;
console.log(num1 > 9 && num2 < 5);
console.log(num1 > 9 || num2 < 5);
var myArray = [2, 5, "ali"];
var myString = "yasir";
console.log(Array.isArray(myArray));
console.log(Array.isArray(myString));
