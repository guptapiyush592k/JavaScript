// Closure basic example
// function outer(){
//     var a = 5
//     function inner(){
//         console.log(a)
//     }
//     return inner
// }

// outer()()

// function outer(){
//     let a = 5
//     function inner(){
//         console.log(a)
//     }
//     return inner
// }

// outer()()

// let a = 5
// function outer(){
//     function inner(){
//         console.log(a)
//     }
//     return inner
// }

// outer()()

// setTimeOut examples
// var i = 10
// function outer(){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
//     console.log("Hello")
// }
// outer()

// function outer(){
//     for(var i=0 ; i<=5; i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i * 1000)
//     }
//     console.log("Hello")
// }
// outer()    // this code print 6 as closures stores the ref of variable and by the time it ran the value of i is 6

// function outer(){
//     for(let i=0 ; i<=5; i++){
//         setTimeout(()=>{
//             console.log(i)
//         },i * 1000)
//     }
//     console.log("Hello")
// }
// outer() // this code print 0,1,...5 as here we use let and let is block scope. so every setTimeOut is having a ref of new variable

// function outer(){
//     for(var i=0 ; i<=5; i++){
//         function inner(x){
//             setTimeout(()=>{
//                 console.log(x)
//             },i * 1000)
//         }
//         inner(i)
//     }
//     console.log("Hello")
// }
// outer() // this code will work as above as now inner() has its own variable and it and it will be new for every setTimeOut


// Example of closure 

//data hiding
// function counter(){
//     var count = 0
//     function incrementCounter(){
//         count++
//         console.log(count)
//     }
//     return incrementCounter
// }


// var counter1 = counter()
// counter1()
// counter1()
// counter1()

// var counter2 = counter() // New closure is created
// counter2()
// counter2()


// Example of closure using constructor function
function Counter(){
    var count = 0
    this.incrementCounter = function(){
        count++
        console.log(count)
    }
    this.decrementCounter = function(){
        count--
        console.log(count)
    }
}


var counter1 = new Counter()
counter1.incrementCounter()
counter1.incrementCounter()
counter1.decrementCounter()


// garbage collection is done by the javascript engine automatically
// it is done by the javascript engine when the variable is not in use
// so it saves the memory and prevents the memory leak
