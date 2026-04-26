// 1. Write a function called sayHello that takes a name and prints: Hello, Name.
function sayHello(name){
    console.log("Hello, " + name);
}

sayHello("Ahmed");

// 2. Write a function that takes two numbers and returns the larger one. 
function getLarger(a, b){
    return a > b? a:b;
}

var value = getLarger(5,10);
console.log(value);

// 3. Write a function that checks if a number is even or odd. 
function isEvenOrOdd(num){
    if(num % 2 === 0){
        return "Even";
    }else{
        return "Odd";
    }
}

var value2 = isEvenOrOdd(47);
console.log(value2);

// 4. Write a function that returns a grade (A, B, C, F) based on score. 
function getGrade(score){
    if(score>= 90) return "A";
    else if (score>=80) return "B";
    else if (score>=70) return "C";
    else return "F";
}

var value3 = getGrade(85);
console.log(value3);

// 5. Write a function that counts characters in a string without using length. 
function countChars(str){
    let count = 0;
    for (let char of str){
        count++;
    }
    return count;
}

var value4 = countChars("HELLOO");
console.log(value4);

// 6. Write a function that returns the sum of numbers in an array. 
function sumArray(arr){
    let sum = 0;
    for(let num of arr){
        sum += num;
    }
    return sum;
}
var arr = [3,4,5,6,3];
var value5 = sumArray(arr);
console.log(value5)

// 7. Write a function that returns how many even numbers are in an array. solve this js questions
function countEvens(arr){
    let count = 0;
    for(let num of arr){
        if(num % 2 === 0){
            count++;
        }
    }
    return count;
}
var value6 = countEvens(arr);
console.log(value6);