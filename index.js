let capasity = 5
let consumption = 1

let interval = setInterval( () =>{
    capasity -= consumption
    console.log(`${capasity}`)
    if (capasity === 0){
        clearInterval(interval);
    }
    
} , 1000)


