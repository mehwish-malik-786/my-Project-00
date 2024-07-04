/*
Q:seeing the world;
Think of 5 places in the world you'd like to vist.
1st store the location in an array.make sure that array is not in alphabatical order.
2nd Print your array in it's orignal order.
3rd show that your array is still in it's original order by printing it.
4th print your array in reverse alphabetical order by printing it.
5th show that your array is still in it's original order by printing it again.
6th reverse the order of your list. print the array that it's order has changed.
7th reverse the order of your list again.Print the list to show it's back its original order.
8th Sort your array so it'stored inalphabatical order.print the array to show that it order has been  changed.
9th Sort to change your array so it'stored in alphabatical order.print the list to show that it's order has changed.
10th print your array in alphabatical order without modify the actual list*/
var favPlace = ["pishawer", "gilgit baltistan", "japan", "saudiarabia", "dubai"];
console.log(favPlace);
//  favPLace array  copy in  order by .slice() mean it is the same thing in const favPlace : 
var copyOfArray = favPlace.slice();
// arry in alphabatical order by .sort() mean it will in a, b, c order in sequence:
var orderOfArray = copyOfArray.sort();
console.log(orderOfArray);
// array in orignal order:
console.log(favPlace);
// reverse orignal alphabatical order.reverse() mean now, by .slice:
// let copyMyArray=orderOfArray.slice()
// let reverseMyArray =copyMyArray .reverse();
// console.log(reverseMyArray);
// .reverse orignal array by .slice:
// let printMyArray = favPlace.slice()
// console.log(printMyArray);
// let reverseOrignalArray = printMyArray.reverse();
// console.log(reverseOrignalArray);
// .reverse orignal arry by .Sort
var printOfArray = favPlace.sort();
// console.log(printOfArray);
var reverseOrignalArray = printOfArray.reverse();
console.log(reverseOrignalArray);
