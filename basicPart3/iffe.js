(function chai(){
    console.log("db connection");
})();

// (function chai2(){
//     console.log("db connection");
// })()

// iffe function end kha huwa ye engine ko pta ni chalta isliye ; jaruri hota ye batan ke liye ki yanha se function end ho rha 

(function chai(){
    // named iffe
    console.log("db connection 2");
})();


// no name iffe
(()=>{
    console.log("db connection 3 arrow");
})();

// parameter pass in iffe 
((name)=>{
    console.log("db connection 3 arrow", name);
})("vikas");