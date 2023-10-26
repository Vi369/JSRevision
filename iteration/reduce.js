const nums = [1,2,3];

// let mytotals = nums.reduce( function(acc, crr){
    
//     console.log(`${acc} acc value and ${crr} value`);
//     return acc + crr;
// },8)


let mytotals = nums.reduce(
    (acc, crr)=>(acc+crr),0
)

// console.log(mytotals)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 13999
    },
]

let totalPrice = shoppingCart.reduce( (acc, item)=> (acc + item.price),0
)

console.log(totalPrice)