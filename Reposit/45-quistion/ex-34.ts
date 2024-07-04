/*
Think of at least three kinds o fyour favorite pizza names in an array,
and then use a forloop to print the name of each pizza. 
. Modify your loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.For each pizza you should have one line of output containg asimple statment like I like pepperoni pizza.
. Add a line at the end of your program, outside the for loop, that states how  much you like pizza, you like and then an additional sentence, 
such as I realiy love pizza!*/


let orderPizza:String[]= ["cheez pizza","vege piza","pepperoni pizza"];
// print only name of pizza;
for (let I = 0; I < orderPizza.length; I++) {
    console.log(orderPizza[i]);
    
    
}

// printing name and sentence/msg
for (let i = 0; i < orderPizza.length; i++) {
    console.log(`i like to eat ${myPizza[i]}`);
    
    
}
console.log(`i realy love pizza`);


