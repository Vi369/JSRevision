// Dates

let myDate = new Date()

// console.log(myDate.getFullYear());

// console.log(myDate.getDay())

// console.log(myDate.getMilliseconds())
// console.log(myDate.getMinutes())
// console.log(myDate.getMonth())
// console.log(myDate.getSeconds())
// console.log(myDate.getTime())


// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString())

// console.log(myDate.toLocaleTimeString())

// console.log(myDate.toTimeString())

// console.log(myDate.toUTCString())



//++++++++++++++++++++++ create ++++++++++++


let myCreateDate = new Date("01-14-2023");

// console.log(myCreateDate.toLocaleDateString())


let myTimeStamp = Date.now()

// console.log(myTimeStamp)

// console.log(myCreateDate.getTime())

// console.log(Math.floor(Date.now()/1000))


let newDate = new Date();

// console.log(newDate);

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric"
}))
