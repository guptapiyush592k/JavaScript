const name = {
    firstName: 'Piyush',
    lastName: 'Gupta',
}


const name2 = {
    firstName: 'Ritik',
    lastName: 'Gupta',
}

let printFullName = function(hometown, state){
    console.log(this.firstName + " " + this.lastName +" from " + hometown + " in " + state)
}

// Function Borrowing
printFullName.call(name, 'Bareilly', 'UP')
printFullName.call(name2, 'New Delhi', "NCR")
printFullName.apply(name2, ['New Delhi', "NCR"]) // in apply we need to pass arguments in array

// Bind method does not execute directly instead it return a binded function with updated this so that it can be called later
let printMyName = printFullName.bind(name, 'Bareilly', 'UP')
printMyName()