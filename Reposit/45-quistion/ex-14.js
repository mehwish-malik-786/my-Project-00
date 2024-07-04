/*
if you could invite anyone,living or deceased, to dinner,
who whould you invite? Make a list that includes at least three people you'd like to invite to dinner.
Then use your list to print a message to eachperson' inviting them to dinner.
*/
var myFrnd = ["saba", "hajra", "aliya"];
for (var i = 0; i < myFrnd.length; i++) {
    console.log("Mr.".concat(myFrnd[i], "! you are invited on my dinner once in a week \n"));
}
myFrnd.map(function (parameterbaby) {
    console.log("Mr. ".concat(parameterbaby, "!you are invited on my dinner once in a week\n"));
});
