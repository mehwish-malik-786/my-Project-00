/*
Write a fuction that accepts an array of items a person wants on
on a sandwich.The fuction should have one parameter
that collects as many items as the fuction call provides, and it should print a summary 
of the sandwich that is being ordered,
call the fuction three times,using a different number of arguments each time.*/

// array as a parameter
function mySandwiches(...item:string []){
    return `i want sandwitch of ${items}`;
};
let collection1 = mysandwiches("mayoni", "cheez", "lettuce")
// add as many you wish
let collection2 = mySandwiches("turkey","swiss")
let collection3 = mySandwiches()
 
console.log(collection1);
console.log(collection1);
console.log(collection3);
