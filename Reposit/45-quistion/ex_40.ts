/*
Q:Album;
Write a function called make_album() that bulds an object ixscribing a music album.The
fuction should take an artist name and album title ,and it should return a object containing these two pieces of information.
USe the function to make three dictionries representing diffrent albums. print each return  val.ue  to show  that object are storing the album information correctly.
.Add an optional parameter to make_albm() that allowa you to store the album. if the callin line includes a value  for the number of traks on an album . if the calling line includes a value for the number of tracks, add that value to the album's object .
Make at least one new function call that includes the number of tracks on an album.*/


function myAlbum(artistName: string,albumTitle: string){
return {artistName,albumTitle}

}

let album1 =myAlbum("ali","Rang-e-mohabat ")
let album2 =myAlbum("Madad","Rang-e-mohabat ")
let album3 =myAlbum("kallil","Rang-e-mohabat ")

console.log(myAlbum1);
console.log(myAlbum2);
console.log(myAlbum3);


// or 2nd method number of tracks

function myAlbum4(artistName: string,albumTitle: string,numberOfTracks?:number){
    return {artistName,albumTitle,numberOfTracks}
    
    }
    
    let album1 =myAlbum("ali","Rang-e-mohabat ")
    let album2 =myAlbum("Madad","Rang-e-mohabat ")
    let album3 =myAlbum("kallil","Rang-e-mohabat ")
    
    console.log(myAlbum1);
    console.log(myAlbum2);
    console.log(myAlbum3);

