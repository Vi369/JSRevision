let obj1 = {
    1: "a",
    2: "b"
}

let obj2 ={
    3: "c",
    4: "d"
}

const newObj = Object.assign({},obj1, obj2);

// console.log(newObj);

const objspread = {...obj1, ...obj2};

console.log(objspread);