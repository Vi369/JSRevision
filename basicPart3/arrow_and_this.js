const user = {
    username: "hitesh",
    price: 999,

   welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// console.log()
// console.log(user.username);

// user.username = "vikas"

// user.welcomeMessage()


// this 

// function chai(){
//     let username = "vikas"
//     // console.log(this)
// }

// chai()

// const chai = function(){
//     console.log(this)
// }

// chai()

// console.log(this);

// const chai = ()=>{
//     console.log(this)
// }


//++++++++++ arrow function implicite return 

const add = (num1, num2)=> num1 + num2 // impicite return me return keyword nahi likhna padta or nahi hi scope dena hota hai jaise
// {} scope diye return likhna hi padega agar jyda value return karna hai to () prenthisis ka use kar sakte hai ;

// console.log(add(3,4))


const multiply = (num1, num2)=> ({name: "vikas"}); // object ko direct return nahi kar kakte kiuki curly barcket hai yrr 
// prenthisis me wrap karke karte hai

console.log(multiply(6,5));

// commit