// Higher order Functions are those functions which take another function in an parameters

radius = [2,4,5,6]

// The below code is not a good way to write code
// function calculateArea(radius){
//     output = []
//     for(i=0; i<radius.length; i++){
//         calculation = Math.PI * radius[i] * radius[i]
//         output.push(calculation)
//     }
//     return output
// }

// console.log(calculateArea(radius))

// function calculateCircumference(radius){
//     output = []
//     for(i=0; i<radius.length; i++){
//         calculation = 2 * Math.PI * radius[i]
//         output.push(calculation)
//     }
//     return output
// }

// console.log(calculateCircumference(radius))

// function calculateDiameter(radius){
//     output = []
//     for(i=0; i<radius.length; i++){
//         calculation = 2 * radius[i]
//         output.push(calculation)
//     }
//     return output
// }

// console.log(calculateDiameter(radius))

//OPTIMISED way as per HOF/DRY Principle

function area(radius){
    return Math.PI * radius * radius
}

function diameter(radius){
    return 2 * radius
}

function circumference(radius){
    return 2 * Math.PI * radius 
}


function calculate(radius, logic){
    output = []
    for(i=0; i<radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius, area))
console.log(calculate(radius, diameter))
console.log(calculate(radius, circumference))


//MAP
console.log(radius.map(area))

// covert our function to work as map

Array.prototype.MapClone = function(logic){
    output = []
    for(i=0; i<this.length; i++){
        output.push(logic(this[i]))
    }
    return output
}

console.log(radius.MapClone(area))