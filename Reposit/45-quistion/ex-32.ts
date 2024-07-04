/*
 Make a list of five usernames called current-users.
. Loop through the new-users list to see if new username has already been used. if it has, print a message that the person will need to enter a new username. if a username has not been 
used, print a message saying that the username is available.
. Make sure your comerisn is case insensitive. if "if john" has been used,"JOHNshould not be accepted,"*/
 
let current_user = ["ali" ,"baba","ahmad","hassan","hussain"]
let new_user =["ahmad", "manzoor","madad","hadad","ayaz"]
// we will use .forEach method 
new_user.forEach(new_user=>{
    let new_userLower = new_user_user.toLowerCase()

    // we will use .some() method for matching

let bestName = current_user.some(current_user => current_user.toLocaleLowerCase()===new_userLower);      //true or false
// noww we will aply condition 
if (bestName) {
   console.log(`${new_user} need to choose a new user name cause it's already taken`);
}else{
    console.log(`${new_user}new member added`);
    current_user.push(new_user)   //add new user to current user array


}

})
    console.log(current_user);

