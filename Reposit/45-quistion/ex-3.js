// store a person's name in avariable,and then print that person's name in lowercase,uppercase,and titlecase.
// LOWERCASE:
var personName = "mehwish MALIK";
console.log(personName.toLowerCase());
// UPPERCASE:
console.log(personName.toUpperCase());
// TITLECASE:
var firstName = personName.charAt(0).toUpperCase();
var restLetter = personName.slice(1).toLowerCase();
var titleCase = firstName + restLetter;
console.log(titleCase);
