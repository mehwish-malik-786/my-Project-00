/*
Changimg guist list:
you just hear that 1 of your guests can't make dinner,so you need to send out a new set of invitition,
you'll have to think of someone else to invite.
1st Start with your program from Exercise 14.Add a print statement at the end of your program stating the name of the guest who can't make it.
2nd Modify your list,replacing the name of the guest who can't make it with name of the person you are inviting.
3rd proint a second set of invitation,one for each person who i still in your list.
*/

// A new set of invitation:
const myFriend: string[] = ["saba" ,"mehtab", "aliya"];
// Mehtab message me she is not comming:
console.log(`name of my who is not comminmg ${myFriend[1]} at dinner`);
myFriend[1] = "mehwish";
// console.log(myFriend[1]);

// name of those friends who are invited:
// console.log(`Name of inviting friends`);
console.log(`Name of my friend who is comming\n`);

for (let i = 0; i < myFriend.length; i++) {
    
    console.log(`${i}.${myFriend[i]}`);
    
}
// but i fwe don't want to start with 0, we want to start with 1 then,
// console.log(`${i + 1}.${myFriend[i]}`)       