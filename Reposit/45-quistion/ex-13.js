/*
think of your favorit mode of transportation,such as a motercycle or a car, and make a list that stores several examples.
Use your list to print a series of statments about these items,
 Such as "I would like to own a Honda motorcycle. */
var myTrans = ["car", "bus", "cycle",];
//  1st method to make list in array with for(loop);
for (var i = 0; i <= 2; i++) {
    console.log("I would like to own a ".concat(myTrans[i]));
}
// or array list (loop) with .length
for (var i = 0; i < myTrans.length; i++) {
    console.log("I would like to own a ".concat(myTrans[i]));
}
// 2nd method to make list in array with function;
myTrans.map(function (baby) {
    console.log("I would like to own a ".concat(baby));
});
