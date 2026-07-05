// Used to limit the rate of function call
const expensive = () =>{
    console.log("Expensive")
}

const throttle =(fn, delay) =>{
    let flag = true
    return function(...args){
        let context = this
        if(flag){
            fn.apply(context, args)
            flag=false
            setTimeout(()=>{
                flag = true
            }, delay)
        }
        
    }
}





const betterExpensive = throttle(expensive,3000)
window.addEventListener('resize',betterExpensive)