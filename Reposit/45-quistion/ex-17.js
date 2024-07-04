/*
  you just found out that your new dinner table won't arrive in time for the dinner,
and you have space for only two guist.
1st start with your program from Ex 16.Add a new line that print a message saying that you can invite only two people for dinner.
2nd Remove guest from your list one at a time until only two names remain in your list .
Each time you pop a name from your FileList,print a message to that person letting them know you're sorry you can't invite them to dinner.
Remove the last two names from your list,so you have an empity list Print your list to make sure you actully have an empty list at the end of your program.*/
// say sorry to friend:
var myFriend = ["aliya", "saba", "aliya", "mehwish", "mehtab"];
// console.log(`i'm sorry ${myFriend} that i can only invite 2 friend`);
var myFriend1 = myFriend.pop();
console.log("sorry my friend Mr.".concat(myFriend1, " that i can invite only two friends "));
var myFriend2 = myFriend.pop();
console.log("sorry my friend Mr.".concat(myFriend2, " that i can invite only two friends "));
var myFriend3 = myFriend.pop();
console.log("sorry my friend Mr.".concat(myFriend3, " that i can invite only two friends "));
for (var i = 0; i < myFriend.length; i++) {
    console.log("you are  ".concat(myFriend[i], " invited friends"));
}
myFriend.pop();
myFriend.pop();
console.log(myFriend);
