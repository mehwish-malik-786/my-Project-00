/*
think of your favorit mode of transportation,such as a motercycle or a car, and make a list that stores several examples.
Use your list to print a series of statments about these items, 
 Such as "I would like to own a Honda motorcycle. */ 


 let myTrans: string[] = ["car","bus", "cycle",];

//  1st method to make list in array with for(loop);
for (let i = 0; i <= 2; i++) {
    console.log(`I would like to own a ${myTrans[i]}`);
    
}

// or array list (loop) with .length
for (let i = 0; i < myTrans.length; i++) {
    console.log(`I would like to own a ${myTrans[i]}`);
    
}

// 2nd method to make list in array with function;
myTrans.map((baby)=>{
    console.log(`I would like to own a ${baby}`);
    
})
