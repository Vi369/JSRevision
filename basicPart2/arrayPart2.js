let marval_heros = ["ironMan", "spiderman", "halk"];

let dc_heros = ["batman", "superman", "wonder women"];

// marval_heros.push(dc_heros) no way 

// console.log(marval_heros.concat(dc_heros));

// console.log(marval_heros);


let allHeros = [...marval_heros , ...dc_heros]

// console.log(allHeros);


// console.log(marval_heros);
// console.log(typeof marval_heros);

//+++++++++++++++++++++++

let anotherArray = [1,2,3,[4,5],[6,7,[8,9]]];

let combineAnotherarrayInNewArray = anotherArray.flat(3);

// console.log(anotherArray, "another");

// console.log(combineAnotherarrayInNewArray, "new combine another array using flat");


//+++++++++++++ most time useful ++++++++++


// console.log(Array.isArray("vikas"));

// console.log(Array.from("vikas"));  // using from to convert in array 


let a = 1
let b = 2
let c = 3

let newarr = Array.of(a,b,c);

// console.log(newarr);


// shalow copy and deep copy learn through example

let arr = [1,2,3,4,5];

let arr1 = arr;

arr.pop();

console.log(arr);
console.log(arr1);





