//Math Methods:
console.log("===============")
console.log("Math Methods")

// round(), ceil(), floor(), min(), max()
// pow(), random(), trunk()

var x = 500.2566;
console.log(Math.round(x));

var y = 500.555;
console.log(Math.round(y));

var z = 500.220;
console.log(Math.ceil(z));

var f = 500.500;
console.log(Math.ceil(f));

var k = 500.200;
console.log(Math.floor(k));

var i = 500.600;
console.log(Math.floor(i));

console.log(Math.min(20,50,30,80));
console.log(Math.max(20,50,30,80));
console.log(Math.pow(3,3));
console.log(2**3);
console.log(Math.random());
console.log(Math.trunc(x));

//Number Methods:
console.log("===============")
console.log("Number Methods")

//toString(), toFixed(), parseInt(), 
// isInteger() "ES6", isNaN() "ES6"
var numValue = 200;
console.log(numValue);//purple for numbers
console.log(numValue.toString());//white for strings 

var numFloat1 = 200.154;
var numFloat2 = 200.654;
console.log(numFloat1.toFixed());//string
console.log(numFloat2.toFixed());//string

var value5 = 3000.65258
console.log(Number.parseInt(value5))//object(number). call the function(parseInt())

var value6 = "300 test"
var value7 = "test 300"//willnot work 
console.log(Number.parseInt(value6))
console.log(Number.parseInt(value7))

var value8 = "3000.54"
console.log(Number.parseFloat(value8))

console.log(Number.parseInt())

console.log(5 * 5);
console.log(5* "ali");
console.log(5/ "ali");
console.log(5- "ali");
console.log(5+ "ali"); //concate

console.log(Number.isNaN());
console.log(Number.isNaN(5));
console.log(Number.isNaN("Marwa"));
console.log(Number.isNaN("Marwa" * 2));
console.log(Number.isNaN("Marwa" + 2));


//String Methods:
console.log("===============")
console.log("String")
// Access with Index, Access with charat(.), length, trim, 
// toUpperCase(), toLowerCase(), repeat(Times) [ES6]
// Split(Separator [opt], limit[opt])
// indexof(value [Mand], start [opt])
// lastidexof(Value [Mand], limit[opt])
// slice(Start[Mand], End[Opt])
var name2 = " Marwa X, T Y    "
console.log(name2.length);//space counted 
console.log(name2.at(4));
console.log(name2[2]);
console.log(name2.charAt(4));
console.log(name2.trim());
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());
console.log(name2.repeat(4));
console.log(name2.split(","));
console.log(name2.split(""));
console.log(name2.indexOf(","));
console.log(name2.indexOf("a",8));
console.log(name2.lastIndexOf("a"));
console.log(name2.slice("a"));

var name3 = name2.split("", 7);
console.log(name3.join());
console.log(name3.join("-"));
console.log(name3.join(" "));

console.log(name2.split(" ").join("*"))
console.log(name3.slice(2,5));
console.log(name3.slice(-8,-2));

//Operators:
console.log("===============")
console.log("Operators")

//Comparison Operators 
// == Equal, != Not Equal, === Identical, > Larger than, 
// >= Larger Than or Equal, < Smaller than, >= Smaller than or Equal
console.log(15 == 15);
console.log(15 == "15");
console.log(15 === "15");
console.log(15 != "15");
console.log(15 > 7);
console.log(15 < 7);
console.log(15 >= 15);
console.log(15 <= 15);

//Logical Operators 
// ! Not, && AND, || or 
console.log(15 == 15 && 7 == 7)
console.log(15 == 15 && 7 == 6)

console.log(15 == 15 || 7 == 7)
console.log(15 == 15 || 6 == 7)

console.log(!(15 == 15 || 6 == 7))


//If condition 
console.log("===============")
console.log("Conditions")
//if(condition){}
var i = 9;
if(i == 5)
    console.log("Yes");
//----------------------
if(i == 5)
    console.log("Yes")
else
    console.log("No")
//----------------------
if(i == 3)
    console.log(i)
else if(i == 9)
    console.log(i)
else
    console.log("number")
//----------------------
if(i < 1000)
    if(i < 100)
        console.log(i + " is less than 100");
    else
        console.log(i + " is greater than 100");
//----------------------
//Switch
var grade = "A"
switch(grade){
    case "A":
    case "A-":
        console.log("Excellent");
        break;
    case "B":
    case "B-":
        console.log("Very Good");
        break;
    case "C":
        console.log("Fair");
        break;
    default: 
        console.log("Failed");
}
//----------------------
//For, While, Do While, Foreach, Forin, For of
console.log("===============")
console.log("Loops")
for(var i = 0; i< 10; i++){
    console.log(i);
}
console.log("===============")
        //0,1,2,3,4
var arr =[8,2,3,4,5]
console.log("For");
for(var i = 0; i< arr.length; i++)
    console.log(arr[i]);
console.log("===============")
console.log("For-In");
for(item in arr)//use index
    console.log(arr[item])
console.log("===============")
console.log("For-Of");
for(var i of arr)//element loop not index 
    console.log(i)
console.log("===============")
console.log("While");
var i = 0;
while(i< arr.length){
    console.log(arr[i]);
    i++;
}
console.log("===============")
console.log("Do-While");
var i = 0;
do{
    console.log(arr[i])
    i++;
}while(i<arr.length)


//Ternary & Nulish & Or:
