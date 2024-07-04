/* 
Q:Large shirt:
modify the make-shirt() function so that shirt are lage by default with a message that read ,I love typescipt.  
make a large shirt and a medium shirt with a default message,
and a shirt of any size with a diffrent message.*/

function make_shirt(size:string,label:string){
return size + label
}
let myFun1 = make_shirt("large", "i love typescript")
console.log(myFun1);

// by default method
function make_shirt(label:string ,size:string = "large"){
    return size + label
    }
    let myFun2 = make_shirt("i love typescript")
    console.log(myFun2);
    
    function make_shirt(label:string ,size:string = "medium"){
        return size + label
        }
        let myFun2 = make_shirt("i love typescript")
        console.log(myFun2);
        
        
        function make_shirt(size:string ,label:string){
            return size + label
            }
            let myFun3 = make_shirt("any size", "i love typescript")
            console.log(myFun3);
            
            
