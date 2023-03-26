function receiveAFunction(callback){
    //call the callback function
    callback();
}
console.log("General energy")

function theReturnFunction(){
//return a named function
return function namedFunction(){
    return "The antelope"
}
}
console.log(theReturnFunction())

function anonymousFunction(){
    //return an anonymous function
    return function(){
        return "The great hunt!"
    }
}
console.log(anonymousFunction);