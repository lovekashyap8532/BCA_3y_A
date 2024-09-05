// // && Operator
// console.log("Hello" && "Welcome")
// console.log("Hello" && "")
// console.log("Hello" && 15)
// console.log(!"Hello" && 10)
// console.log(!!"Hello" && 10)
// console.log(0 && 10)

// // || Operator
// console.log("Hello" || "Welcome")
// console.log("" || "Welcome")
// console.log("null" || 25)

// // TYpe of operator
// console.log(typeof("hello"))
// console.log(typeof(""))
// console.log(typeof(null))
// console.log(typeof(undefined))
// console.log(typeof(12.4))
// console.log(typeof(true))
// console.log(typeof({id:20,name:"Ravi"}))
// console.log(typeof([12,"hii"]))

// // Calulation 
// let o = prompt("Enter the Symbol : '+' '-' '*' '/' ")
// let x = parseFloat(prompt("Enter the Symbol"))
// let y = parseFloat(prompt("Enter the Symbol"))
// if(o==="+"){
//     document.write(`The Sum is `,x+y)
// }
// else if(o==="-"){
//     document.write(`The subtraction is `,x-y)
// }
// else if(o==="*"){
//     document.write(`The Multiplication is `,x*y)
// }
// else if(o==="/"){
//     document.write(`The Divison is `,x/y)
// }
// else{
//     document.write("Invalid Input")
// }


//  SWITCH 

// let uname = prompt("Enter Your Name")
// switch(uname){
//     case "Kapil":
//         document.write("Kapil is a Good Bachha")
//         break;
//     case "Love":
//         document.write("Love is a good Boy")
//         break;
//     default:
//         document.write("Name not Found")
//         break;

// }

let day=prompt("Enter the no of days")
switch(day){
    case 28 || 29: document.write("This month is Febraury")
    break;
    case 30 : document.write("This may be April, June, September, Novemver")
    break;
    case 31 : document.write("This may be January, March, May, July, August, October, December")
    break;
    default: document.write("Enter the days between 28, 29, 30 and 31")
    break;

}