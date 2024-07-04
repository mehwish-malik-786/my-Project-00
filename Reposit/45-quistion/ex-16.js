/*
you just found a bigger table,so now more space is availble.think of three more guest
to invite to dinner.
1st start with your program from exercise 15. Add a print statment to the end of your
of your program informing people that you found a bigger dinner table.
2nd add one new gust to the beginning of your table.
3rd add new guest to the middle of your array.
4th Use append() to add one new guest to end of your list.
5th print a new set of invitation messages, one for each person in your list.*/
var myFriend = ["mehwish", "saba", "ayshah", "asiya", "maham", "rubina"];
console.log(myFriend);
console.log("we have 3 more friends to invite on dinner\n");
myFriend.unshift("mehtab");
console.log(myFriend);
myFriend.splice(3, 0, "rabiya");
console.log(myFriend);
myFriend.push("hasina");
console.log(myFriend);
// for (let i = 0; i < myFriend.length; i++) {
// console.log(`all my friend you are ${myFriend[i]} invited`);
// }
