// Curring using bind
let multiply = function(x,y){
    console.log(x * y)
}

let multiplyByTwo = multiply.bind(this, 2)
multiplyByTwo(3)

let multiplyByThree = multiply.bind(this, 3)
multiplyByThree(4)



// Curring using closures
let multiplyNew = function(x){
    return function(y){
        console.log(x * y)
    }
}

let multiplyByTwoNew = multiplyNew(2)
multiplyByTwoNew(3)

multiplyNew(3)(4)



