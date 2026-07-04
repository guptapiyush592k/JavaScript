//  CALLBACK FUNCTION
// A function that is passed inside another function is known as callback function


// Example 1
function outer(inner){ //inner is a callback function
    console.log("Hi i am Outer function")
    inner()
}

function inner(){
    console.log("Hi i am inner function")
}

outer(inner)

//Example 2
setTimeout(()=>{
    console.log("Hi I am inside setTimeout")
},5000)



