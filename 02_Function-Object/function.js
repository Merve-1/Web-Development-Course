// Functions 
function funcName(){
    //statements
}

// parameters
function sayHello(){
    console.log("Hello");
}

//call
//arguments
sayHello();

function sayName(name){
    console.log(name);
}

sayName('ahmed');


// Hosting -> Expression vs Declaration 
// Declaration 
say1();
function say1 (){
    console.log("object");
}

//Expression 
say2();
var say2 = function(){
    console.log("object");
}