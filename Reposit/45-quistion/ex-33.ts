/*
Q: No users:
Add an if test t Ex 30 to make sure the list of users is not empty.
. If the list is empty, print the message We need to find some users!
. Remove all of the usernames from your array,and make sure the correct message is printed.
*/

let userNAme2: string[] = ["ali","hamza","fayaz","baba"];
// to remove all member
userNAme2 = [];
console.log(userNAme2);

if (userNAme2.length > 0) {
    for (let i = 0; i < userNAme2.length; i++) {
        
        if (userNAme2[i] =="hamza" ) {
            console.log(`\n hello ${userNAme2[i]}`);
            
        }else{
            console.log(`we need to find some users!`);
            
        }
    }
}


