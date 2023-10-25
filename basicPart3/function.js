// with object 

function shopProductCalculatePrice(val1,val2, ...num1){
    return num1;
}

// console.log(shopProductCalculatePrice(100,200,300,400500,3000, 60))


function handleObject(username){
    return `${username.name} hanji maja aa rha ${username.age}`
}

console.log(handleObject({
    name: "vikas",
    age: 18
}))

function handleArray(arr){
    return arr[1];
}

console.log(handleArray(
    [100,"vikas",2000]
))