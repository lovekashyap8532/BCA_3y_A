// function greet(name){
//     console.log("HAPPY NEW YEAR !",name);
// }
// greet("Abhay");

// let name = function(){
//     console.log("Welcome Bro ");
//     console.log("Hii")
// }
// name()

// let oddeven = function(num){
//     if(num%2==0){
//         console.log(`${num} is even`)
//     }
//     else{
//         console.log(`${num} is odd`)
//     }
// }
// let hold = oddeven(prompt("Enter number to check whether it is even or odd"))
// console.log(hold)


// // SWAP by using third variabe 
// let swap1 = function(num1,num2){
//     console.log(`Before Swap : ${num1} and ${num2}`)
//     let temp = num1;
//     num1 = num2;
//     num2 = temp;
//     console.log(`After Swap : ${num1} and ${num2}`)
    
// }
// num1 = prompt("Enter the first Number")
// num2 = prompt("Enter the second Number")
// swap1(num1,num2)

// let gr=() => `Wlcome ${name}`

// console.log(gr("Kapil"))
// let sum = (a,b) => a+b
// console.log(sum(12,13))

// // IIFE Immediately Invoke Function Expression
// (function gr(name){
// console.log("Hello MOto",name)
// })(prompt("Enter your good name"))


// Function Expression
let gr= (function(name){
    return `Welcome, ${name}`
})("Lucky")
console.log(gr)

