let name={
    firstname: 'Piyush',
    lastName: 'Gupta'
}

function printName(city, country){
    console.log(this.firstname + " " + this.lastName, ' , ', city, ' , ', country)
}

let printMyName = printName.bind(name, 'bareilly')
printMyName('India')

// Polyfill for bind
Function.prototype.mybind = function(...args){
    let obj = this
    params = args.slice(1)
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]) 
    }

}


let printMyName1 = printName.mybind(name, 'bareilly')
printMyName1('India')