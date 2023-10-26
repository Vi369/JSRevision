// all the falsy value

//false, 0 , -0, bigInt 0n, "" empty string , undefined, null, NaN 

// truthy values 

// true 1, -1 allnegative all positive  value string value jo empty na ho 

// "0", "false", " ", [], {}, function(){}

if([]){
    console.log("hmm")
}

// array checking

const userEmail = [];

if(userEmail.length ===0){
    console.log("array is empty")
}

const emptyObject = {}

if(Object.keys(emptyObject).length === 0){
    console.log("object is empty")
}

// equal cheak 
false == 0
true
0 ==''
true
''==0
true
' ' ==0
true

// strict check 
'   ' ===0 
false
''===0
false
false ===0
false
0===''
false