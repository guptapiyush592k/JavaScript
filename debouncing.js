// Debouncing

let counter = 0
const getData = () =>{
    console.log("Fetching data" , counter++)
}

const debounceMethod = function(fn, delay){
    let timer
    return function(...args){
        const context = this;
        clearTimeout(timer)
        timer = setTimeout(()=>{
            fn.apply(context, args)
        },delay)
    }
}

const betterFunction = debounceMethod(getData, 300)