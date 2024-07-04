/*make an array of five or more username,including the name "admin". 
Imagine you are writting code that  will print a greeting to each user after they log in to a website.loop through the array,and print a greeting to each user:
if  the username is "admin",print a special greeting ,such as Hello admin,would you like to see a status report? 
Otherwise,print a genric greeting,such as Hello Eric,thank you for loggin in again*/

let userName: string[]=["ali","baba","aziz","saba"]
for (let i = 0; i < userName.length; i++) {
    if (userName[i] == "baba") {
        console.log(`hi ${userName[i]}`);
        
    }else{
    console.log(`hello ${userName[i]}`);
    
}
}