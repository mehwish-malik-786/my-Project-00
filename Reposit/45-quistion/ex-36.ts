/*
Write a function callefd make_shirt ( )that accept a size and the 
text of a message that should be printed on the shirt. The function should print a sentence summaaaaaaarizing the size of the 
size of the shirt and the message printed on it. call the function.*/


function make_shirt (size:number ,label:string ){
    return size + label;
}
let myFun = make_shirt(63, " the sunny day")
console.log(myFun);


// or another method of errow function 
let myFunction =(size:number , label:string )=>{
    return size + label 

}
console.log(myFun(36," The cool day"));

