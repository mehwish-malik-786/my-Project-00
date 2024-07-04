/*
Q:Stages of life,
write an if-else chain that determines a person's stage of life.Set a value for the variable age , and then:
IF person is less then 2 year old,print a message that the person is a baby.
IF person is at least  4 year old,but less than 4,print a message that the person is a toddler..
IF person is at least 13 year old,print a message that the person is a baby.
IF person is at least 20 year old,print a message that the person is a teenager.
IF person is in age 65 or older,print a message that the person is an elder
*/

// if we change the value according if-else

let personAge = 70;
if(personAge < 2){
    console.log(`the person is a baby`);
    
}else if(personAge >=2 && personAge < 4){
    console.log(`the person is a toodler`);

}else if(personAge  >=4 && personAge < 13){
    console.log(`the person is a kid`);

}else if(personAge  >=13 && personAge < 20){
    console.log(`the person is a teenager`);

}else if(personAge  >=20 && personAge < 65){
    console.log(`the person is an adult`);

}else if( personAge >= 65){
    console.log(`the person is an elder`);
}