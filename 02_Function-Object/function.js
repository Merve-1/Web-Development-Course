console.log("Functions");
console.log("==================================");
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

function sum (x,y){
    console.log(x+y);

}

sum(5,20)

function sum2(x,y){
    console.log(`This is result: ${x + y}`);//data interpolation 
    return x + y;
}

var result = sum2(5,78);
console.log(result);


function sayName2 (name3){
    console.log(name3);
}

sayName2();

//default parameter 
function sayName3(name = "Ali"){
    console.log(name);
}
sayName3();
sayName3("Test");

// Hoisting -> Expression vs Declaration 
// Declaration 
say1();
function say1 (){
    console.log("object");
}

//Expression 
// say2();
var say2 = function(){
    console.log("object");
}

function foo(){
    function bar() {return 3;}
    return bar();
    function bar(){return 8};//moved above the return (expression)
}

function foo2(){
    var bar = function() {return 3;}
    return bar();
    var bar = function() {return 8;}
}

console.log(foo());
console.log(foo2());


//Function Scope 
console.log("Function Scope");
//Global -  Local
console.log("Global");
var x = 5;

function say(){
    console.log(x);
    var y = 8;
    console.log("Local");
    console.log(y);
}
//console.log(y); //undefined as its a local var not global
console.log(x);
say()


//Self Invoked Function "Anonymous Function"
console.log("Self Invoked Function");
(function(){
    console.log("Self Invoked");
})()


(function(){
    var x = 20;
    console.log(x);

    function say(){
        return 3;
    }
})

console.log("==================================");
