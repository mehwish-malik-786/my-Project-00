/*
Q:Ordinal numbers,
Ordinal numbers indicate their position in a array, such as 1st or 2nd.Most ordinal numbers
end in th,except 1,2,and 3.
Store the numbers 1 through 9 in array.
loop through the array.
Use an if-else chain inside the to print the proper ordinal ending for each number.
your output should read "1st 2nd 3rd 4th 5th 6th 8th 9th",and each result should be on separate line.*/

let myNum1 = [1,2,3,4,5,6,7,8,9];

// for loop()
for (let i = 0; i < myNum1.length; i++){

    // now we use conditions
    if (myNum1[i] == 1) {
        console.log(`${myNum1[i]}st`);
        
    }else if (myNum1[i]==2){
       console.log(`${myNum1[i]}nd`);
        
    } else if(myNum1[i] == 3){
        console.log(`${myNum1[i]}rd`);
        
    }else if(myNum1[i] >= 4 && myNum1[i] <= 9){
        console.log(`${myNum1[i]}th`);
        
    }
}

