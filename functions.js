// Function Statement aka Function declaration
function a(){
    console.log("a called")
}

// Function Expression
var b = function(){
    console.log("b called")
}


// differnce between Function Statement and Function Expression is hoisting 

// Anonymous Function
//function(){} this is wrong syntax as function should always have name and it can be used for function expression

// Named function Expression
var b = function xyz(){
    console.log("xyz called")
}
// xyz() error


// Different between params and arguments
function abc(param1, param2){

}
arg1 = 1
arg2 = 2
abc(arg1, arg2)




//  FIRST CLASS FUNCTIONS / FIRST CLASS CITIZEN
// the ability to use function as a value is known as first class function
function xyz(params){
    console.log(params)
}

xyz(function(){
    return 'hello'
})


