const myArray = [1,2,3,4,5];

// for (const num of myArray) {
//     console.log(num)
// }

//+++++++++++++++

const countriesCode = new Map()

countriesCode.set('In', "India")
countriesCode.set('Fr', "France")
countriesCode.set('Usa', "united states of Amerika");

// console.log(countriesCode);

// for (const [key, value] of countriesCode) {
    // console.log(key, ":=>", value)
// }

const myObj = {
    name: "vikas",
    age: 18
}

for (const [key, value] of myObj) {
    console.log(key, value)
}

// objects iterables nahi hote hai itterate kar sakte hai pr aise nahi