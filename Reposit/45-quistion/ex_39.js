/*
Q:City names
write a function called city_country()that takes in the name of a cityand its country.
the function should return a string formated like this "lahore,"pakistan call your function with at least three city country pairs,
and print the value that's returned*/
function city_country(city, country) {
    return "".concat(city).concat(country);
}
// console.log(`"${city}",${country}"`);
var mycity = city_country("karachi", "pakistan");
console.log(mycity);
console.log("dubai", " UAE");
console.log("lahore", " pakistan");
console.log("dehli", " india");
