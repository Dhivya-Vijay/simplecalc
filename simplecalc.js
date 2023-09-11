
// ADD
var add = document.getElementById("add")
console.log(add)
add.addEventListener("click",function(){
    var num1 = document.getElementById("num1").value
    console.log(num1)
    
    var num2 = document.getElementById("num2").value
    var sum = Number(num1) +Number(num2)
    console.log(sum)
    console.log(typeof sum)
    
    var result = document.getElementById("result")
    result.textContent = `This is your Addition ${sum}`
    var whole = document.getElementById("whole")
    whole.style.display = "block"
} )

// SUB
var sub = document.getElementById("sub")
console.log(sub)
sub.addEventListener("click",function(){
    var num1 = document.getElementById("num1").value
    console.log(num1)

    var num2 = document.getElementById("num2").value
    var sub= Number(num1) - Number(num2)
    console.log(sub)
    console.log(typeof sub)
    
    var result = document.getElementById("result")
    result.textContent = `This is your Subtraction ${sub}`

    var whole = document.getElementById("whole")
    whole.style.display = "block"
} )

// MULTI
var multi = document.getElementById("multi")
console.log(multi)
multi.addEventListener("click",function(){
    var num1 = document.getElementById("num1").value
    console.log(num1)

    var num2 = document.getElementById("num2").value
    var multi = Number(num1) * Number(num2)
    console.log(multi)
    console.log(typeof multi)
    
    var result = document.getElementById("result")
    result.textContent = `This is your Multiplication ${multi}`

    var whole = document.getElementById("whole")
    whole.style.display = "block"
} )

// DIV
var div = document.getElementById("div")
console.log(div)
div.addEventListener("click",function(){
    var num1 = document.getElementById("num1").value
    console.log(num1)

    var num2 = document.getElementById("num2").value
    var div = Number(num1) / Number(num2)
    console.log(div)
    console.log(typeof div)
    
    var result = document.getElementById("result")
    result.textContent = `This is your Division ${div}`

    var whole = document.getElementById("whole")
    whole.style.display = "block"
} )

function res1(){
    var restart = document.getElementById("restart")
    window.location.reload()
}


    