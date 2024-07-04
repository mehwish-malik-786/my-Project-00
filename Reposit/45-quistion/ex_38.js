/*Q:Cities;
write a function called discribe_city () that accept the name of a name of a city and its country.The function should print a simple
sentence. such as karachi in pakistan.Give the parameter for the ocuntry a default value. call your funtion for three different cities, at least one of  which  is
in the default country.*/
// 
// call function method/named function
function describe_city(nameOfCity, nameOfcountry) {
    if (nameOfcountry === void 0) { nameOfcountry = "pakistan"; }
    return "".concat(nameOfCity, " is  in  ").concat(nameOfcountry);
}
// console.log(describe_city("karachi","pakistan"));
// console.log(describe_city("lahore","pakistan"));
// console.log(describe_city("islamabad","pakistan"));
// or another method
// anonymus fuction/artificial calling name
var city1 = describe_city("karachi");
var city2 = describe_city("lahoe");
var city3 = describe_city("islamabad");
console.log(city1);
console.log(city2);
console.log(city3);
