/*
Q:pizza;
Think of at least three animals that have common characterstics. Store 
the name of these animals in a list, and then use a for loop  to print out the name of each animal.

. Modify your program to print a statement  abpout each animal, such as a dog hsould make a great pet.
.Add a line at the end of your program stating what these animals have in common .you could print a sentece such as any of these animals owuld make a great pet!
*/
let petAnimals = ["cat", "rabit","cow","dog"];

// for of loop
for (const m of petAnimals) {
    console.log(m);
    
}
 for (const b of petAnimals) {
    console.log(`${b} is a Domestic Animals`);
    
 }
console.log(`all these animals ${petAnimals[0]},${petAnimals[1]},${petAnimals[2]},${petAnimals[3]} are halal`);


