// store a person's name in avariable,and then print that person's name in lowercase,uppercase,and titlecase.

// LOWERCASE:
let personName :string = "mehwish MALIK";
 console.log(personName.toLowerCase());

// UPPERCASE:
console.log(personName.toUpperCase());

// TITLECASE:
let firstName: string = personName.charAt(0).toUpperCase();
 let restLetter: string = personName.slice(1).toLowerCase();

let titleCase = firstName + restLetter;
console.log(titleCase);  