/*
Q:pizza;
Think of at least three animals that have common characterstics. Store
the name of these animals in a list, and then use a for loop  to print out the name of each animal.

. Modify your program to print a statement  abpout each animal, such as a dog hsould make a great pet.
.Add a line at the end of your program stating what these animals have in common .you could print a sentece such as any of these animals owuld make a great pet!
*/
var petAnimals = ["cat", "rabit", "cow", "dog"];
// for of loop
for (var _i = 0, petAnimals_1 = petAnimals; _i < petAnimals_1.length; _i++) {
    var m = petAnimals_1[_i];
    console.log(m);
}
for (var _a = 0, petAnimals_2 = petAnimals; _a < petAnimals_2.length; _a++) {
    var b = petAnimals_2[_a];
    console.log("".concat(b, " is a Domestic Animals"));
}
console.log("all these animals ".concat(petAnimals[0], ",").concat(petAnimals[1], ",").concat(petAnimals[2], ",").concat(petAnimals[3], " are halal"));
