/*
Q:Great magicians:
Start with a copy of your program from question/ Ex 41.Write function called make_great()
that modifaies the array of magician by adding the great toeach magicians name. Call show_magicians[]to see that the list has actully been modified,
*/


let otherMagicians =["Ayaz","fayaz","ajmal","jamal"];

// making a sopy of array
let megicianNamesCopy =[...otherMagicians]

function show_magicians(greet:string){
let withGreeting ="";

for(let item of magicianNamesCopy){
    withGreeting +=`${greet} ${item}`
}
return withGreeting;
}
let myGreeting = show_magicians("hello friend")
let makeArray = myGreeting.split();
console.log(makeArray);

