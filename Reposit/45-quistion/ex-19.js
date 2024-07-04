/*
working with one of the program from Ex 14 through 18, print a message indicating the numbeer people you are inviting to dinner.*/
var myFriends = ["saba", "yasir", "hina", "mariya"];
// message to my friends to inviting them on dinner:
console.log("hello! my friend ".concat(myFriends, " you are comming on dinner"));
// number of frends start with 1
for (var i = 0; i < myFriends.length; i++) {
    // console.log(myFriends[i]);
    // itration(i) 0+1 = 1:and both concatination are multipling
    console.log("".concat(i + 1, ". ").concat(myFriends[i]));
}
