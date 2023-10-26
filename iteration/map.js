const myNums = [1,2,3,4,5,6,7,8,9,10];

const newNum = myNums.map((num)=>{
    return num + 10
})


// chaining 

const newNums2 = myNums
                    .map( (num)=>(num+10))
                    .map( (num)=>(num*2))
                    .filter( (num)=>(num>30))
                    .map((num)=>(num*3))
                    .filter((num)=>(num>100))
                    .map((num)=>(num*100));


console.log(newNums2)