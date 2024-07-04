
/*
  you just found out that your new dinner table won't arrive in time for the dinner,
and you have space for only two guist.
1st start with your program from Ex 16.Add a new line that print a message saying that you can invite only two people for dinner.
2nd Remove guest from your list one at a time until only two names remain in your list .
Each time you pop a name from your FileList,print a message to that person letting them know you're sorry you can't invite them to dinner.
Remove the last two names from your list,so you have an empity list Print your list to make sure you actully have an empty list at the end of your program.*/

// say sorry to friend:
const myFriend: string[] = ["aliya","saba","aliya","mehwish","mehtab"];
// console.log(`i'm sorry ${myFriend} that i can only invite 2 friend`);


// Remove my 3 friends are not invited
let myFriend1 = myFriend.pop();
console.log(`sorry my friend Mr.${myFriend1} that i can invite only two friends `);

let myFriend2 = myFriend.pop();
console.log(`sorry my friend Mr.${myFriend2} that i can invite only two friends `);

let myFriend3 = myFriend.pop();
 console.log(`sorry my friend Mr.${myFriend3} that i can invite only two friends `);


//  name of those who are not comming and who are comming:
for (let i = 0; i < myFriend.length; i++) {
  console.log(`you are  ${myFriend[i]} invited friends`);
  
  
}


// name of those who are invited but now not they're:
myFriend.pop()
myFriend.pop()
console.log(myFriend);
