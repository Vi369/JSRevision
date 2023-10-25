let myArr = new Array(0,1,2,4,5);

// console.log(myArr)

// console.log(myArr.indexOf(4))


const newArr = myArr.join();

// console.log(newArr);

// console.log(typeof newArr)


//+++++++++++++++ important ++++++++++++
console.log("original arr",myArr)
let newArr1 = myArr.slice(1,3);

console.log(newArr1, "slice value", "and", myArr, "original arr")



// console.log(newArr1);

let newArr2 = myArr.splice(1,2);

console.log(newArr2, "splice value");

console.log(newArr2, "splice value", myArr, "after splice original arr")

// splice manipulate original array 