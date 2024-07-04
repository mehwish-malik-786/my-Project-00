/*
Q:Favorite Fruit:
Make an array of your favorite fruits,and then write a series of independent if statment s
that check for certain fruits in your array.
Make an array of three favorite fruits and call it favorite-fruits.
Write five if statments,Each sould check whether a certain kind of fruit is in your array.if the fruits is in your array,the if block sould print a statment,
such as you realy like bananas!
*/
// must watch video
var myFavFruits = ["apple", "mango", "banana"];
/*if (myFavFruits.includes("mango")) {
    console.log(`I would like to eat mango`);
    
}else if (myFavFruits.includes("apple")) {
    console.log(`I would like to eat apple`);
    
} else {
    console.log("fruits are not available");
    
}*/
// or second method is this 
var fruitAvailable = "mango";
if (fruitAvailable.includes(fruitAvailable)) {
    console.log("I would like to eat mango".concat(fruitAvailable));
}
else {
    console.log("fruits are not available!");
}
