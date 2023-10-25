// object.create() constructor

const mySym = Symbol("mykey1");

const jsUser = {
    name: "vikas",
    age: 18,
    [mySym]: "mykey1",
    "full name" : "vikas singh varma"
}

console.log(jsUser[mySym])
console.log(jsUser)

// console.log(jsUser.age)
// console.log(jsUser["full name"]);
// console.log(jsUser["age"]);