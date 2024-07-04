/*
car:
Write a function that stores information about a car  in an object. The function should always receive a manufacturer and a model name, 
it should then accept then accept an arbitrary number of keyword arguments. Calls the function with the required information and other name-value pairs, such as a color or an optional feature.Print the Object that,s returned to make sure all the 
the information was storred correctly.*/


function carDetails(manufacturer: string,modelsName:string, ...maltiInfo){

const car1 = {manufacturer,modelsName,...Object.fromEntries
(multiInfo)}
return car1;
};
const myCarDeatils = carDetails("toyota""corolla",['color','blue'],['year',2022])

console.log(myCarDetails);
