let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")

let add = document.getElementById("add")
let sub = document.getElementById("sub")
let mul = document.getElementById("mul")
let div = document.getElementById("div")
let clear = document.getElementById("clear")
let clear_last = document.getElementById("clear_last")
let memory_plus = document.getElementById("memory_plus")
let memory_minus = document.getElementById("memory_minus")
let pad = document.querySelector(".pad")
let equal = document.getElementById("equal")

pad.addEventListener("click", display)
clear.addEventListener("click",clearHistory)
equal.addEventListener("click",result)


let input = document.querySelector(".pad")
let finalResult = document.querySelector("#input")
result.finalResult = ""

document.body.addEventListener("keypress",keypress)

// //////////////////////////////////////////       functions       ////////////////////////////////////////////
function display(e){
    let span = document.querySelector("#span")
    if(e.target.value===undefined){
        span.innerHTML = span.innerHTML+""
    }else{
        span.innerHTML = span.innerHTML+e.target.value;
    }
    
}

function clearHistory(){
    let span = document.querySelector("#span")
    let finalResult = document.querySelector("#input")
    span.innerHTML=""
    finalResult.value = "0"
}


function result(){
    let span = document.querySelector("#span"); 
    let finalResult = document.querySelector("#input")
    finalResult.value = eval(span.innerText); 
}

function calculation(num1,operator,num2){
    if(operator === "+"){
        return[num1+num2]
    }else if(operator === "-"){
        return num1-num2    
    }else if(operator === "*"){
        return num1*num2
    }else if(operator === "/"){
        return num1/num2
    }
}

function keypress(e){
    let span = document.querySelector("#span");
    if((e.key<10 && e.key>=0) || e.key==="*" || e.key==="-" || e.key==="+" || e.key==="/" ){
        span.innerText += e.key
    }else if(e.key==="Enter"){
        result()
    }
}
