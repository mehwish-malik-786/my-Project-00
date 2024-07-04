/*
Repeat Exercise 4, but this time store the famous person's name in a variable called famous-person.
 Then compose your message and store it in a new variable called message.
 prient your message.*/
 
//  concatination with famous person and qoute:

 const famousPerson: string ="Albert Einstien";
 const message: string = famousPerson + " " + `once said,"A person who never made a mistake never tried anything new "`

console.log(message);

   //  OR concatination with famous qout:

  const famousPerson: string ="Albert Einstien";
   const message: string = `once said,"A person who never made a mistake never tried anything new "`
  
  console.log(famousPerson + " " + message);

//   OR concatination with famous qout:

const famousPerson: string ="Albert Einstien";
const message: string = `${famousPerson} once said,"A person who never made a mistake never tried anything new "`
console.log(message);
