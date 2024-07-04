/*
if you could invite anyone,living or deceased, to dinner,
who whould you invite? Make a list that includes at least three people you'd like to invite to dinner.
Then use your list to print a message to eachperson' inviting them to dinner.
*/



let myFrnd: string [] = ["saba", "hajra","aliya"];
for(let i=0; i < myFrnd.length; i++){
    console.log(`Mr.${myFrnd[i]}! you are invited on my dinner once in a week \n`);
    
}


myFrnd.map((parameterbaby)=>{
    console.log(`Mr. ${parameterbaby}!you are invited on my dinner once in a week\n`);
    
})