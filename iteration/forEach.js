const coding = ['cpp','python','javascrip'];

// coding.forEach(
//     function(item){
//         console.log(item)
//     }
// )

// coding.forEach(
//     (item)=> console.log(item)
// )

// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme);


// coding.forEach(
//     (item, index, arr)=>{
//         console.log(item, index, arr)
//     }
// )


const myCoding = [
    {
        languageName: "javascrip",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

myCoding.forEach(
    (item)=>{
        console.log(item.languageName)
    }
)