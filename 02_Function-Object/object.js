console.log("Object");
console.log("==================================");
//object => document/window/ console

var person = {
    //key: value 
    name: "XX",
    age: 19,
    address: "Cario",
    work:{
        company: "AAST",
        JobTitle: "CS Student"
    },
    walk: function(){
        console.log("Walking..");
    },
    eat: function(){
        console.log("Eating..")
    },
    companies: ["Google", "Facebook"]
}

console.log(person);
console.log(person.age);
console.log(person['age']);
console.log(person.work.company);
console.log(person.walk());
person.walk();
console.log(person.companies[1]);

// var document = {
//     write: function(data){
        
//     },
//     getElementByID:function(id){}
// };
// document.getElementById("");

// var console = {
//     log: function(data){}
// };
// console.log("object");

// var window = {
//     alert: function(){},
//     prompt: function(){},
// }
// window.alert();
// window.prompt();

console.log(window.document);
console.log(window.person);
console.log("==================================");
