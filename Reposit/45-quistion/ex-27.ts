/*
Choose a color for an alien as you did in Ex 25,and write if-else chain,
If the alien color is green ,print a statment that players just earned 5 pointsfor shooting the alien.
If the alien color is not green ,print the statment that the player just earned 10 points
 If the alien color is not green ,print the statment that the player just earned 15 points
Write one version of this program that making sure each message is printed
for the appropriate color alien*/


let alienColor ="red";
if (alienColor =="green") {
    console.log(`the player the player earned 5 points`);
    
} else if (alienColor == "yellow"){
    console.log(`the player earned 10 points `);
    
}else if (alienColor == "red") {
    console.log(`the player earned 15 points`);
    
}else{
console.log(`the player earned 0 points`);

}