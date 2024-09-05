// Four type to print an OUTPUT
// innerHTML
// console.log
// document.write
// window.alert




// window.alert("Show Document")
// let ip=window.prompt("Enter Your Name")
// document.getElementById("demo").innerHTML= `<h1>Hello, ${ip} </h1>`
// document.write("Thank You !!")


// function show(ip){
//     document.getElementById("demo").innerHTML= `<h1>Hello, ${ip} </h1>`
// }

//////////////////////////////////    Two type to take INPUT


// if (window.confirm("Do you want to enter your name"))
//     window.prompt("Enter your Name")
// else
//     window.alert("Thank You !!")




// For-in-Loop
// It is used for Objects
const std={
    r:101,
    name:"Love",
    age:6
}
for (let key in std){
    console.log(`${key} : ${std[key]}`)
}



// For-of-Loop
// It is used for Arrays
var x=[10,20,30,40,50]
for(let i of x){
    console.log(i)
}
