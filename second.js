// // // Chapters: Conditions/Operators:
// // // Arithmetic  Operators: +,*,-,/
let a = 5;
let b = 3;
console.log("a = ", a);
console.log("b = ", b);
// // // let c=a - b;
// // // console.log(c);
// console.log("a + b = ",a + b);
// console.log("a - b = ",a - b);
// console.log("a * b = ",a * b);
// console.log("a / b = ",a / b);
// console.log("a % b = ",a % b);
// console.log("a ** b = ",a ** b);

// // // uniry operator

// // increment: post
// console.log("a+1 =",a+1);
// //         OR
// console.log("a++ =",a++);
// console.log("a =",a);

// // increment: pre
// console.log("++a =",++a);

// //---------------------------------
// //  decrement: post
// console.log("b-- =",b--);
// console.log("b-- =",b);
// // decrement : pre
// console.log("--b = ",--b);
// // we can also use this to apply decrement
// //console.log("b - 1 = ",b-1);

// //  Assigment operator

// console.log("a +=",a+=4); // 9
// console.log("a -=",a-=4); // 1
// console.log("a *=",a*=4); // 20
// console.log("a /=",a/=4); // 1.5
// console.log("a %=",a%=4); // 1
// console.log("a %=",a%=4); // 1
// console.log("a**4= ",a**=4);  // 625

// // comparion Operators: always return True or false

// // == comparing two values.
// console.log("a == b ",a==b);  // false
// // != not equal .
// console.log("a != b ",a!=b);  // True
// // !== not equal .
// console.log("a !== b ",a!==b);  // True
// //=== compairing value data type.
// console.log("a === b ",a===b);  // false
// // > : compair values from a to b
// console.log("a > b ",a>b);  // True
// // < : compair values from a to b
// console.log("a < b ",a<b);  // False
// // <= : compair values from a to b or equal too
// console.log("a <= b ",a<=b);  // False
// // >= : compair values from a to b or equal too
// console.log("a >= b ",a>=b);  // True

// Logical Operator:

// A |  B  |   &&  |    ||    |
// T |  T  |    T  |     T    |
// T |  F  |    F  |     T    |
// F |  F  |    F  |     T    |
// F |  F  |    F  |     F    |

// It always return True or False.

// // && : AND
//  console.log("cond1 && cond2 = ",a<b && a===b);
//  // || : OR
//  console.log("cond1 && cond2 = ",a>b || a===b);
//  //  ! : NOT
//  console.log("a < b = ",!(a<b));

// Conditional statements:
// IF condition:

if (a = b) {
  console.log("Pass1");
}

//  If-Else Conditional Statements:
let age =16;

if (age >= 18) {
  console.log("Vote");
}else{
    console.log("No vote");
}

// Let take one more example: 

let num=15;

if(num%2==0){
    console.log(num ," is Even");
}else{
    console.log(num,"is Odd");
}

// Else-If statements;
if(age<18){
console.log("junior")
}else if(age>60){
    console.log("Senior");
}else{
    console.log("middle");
}
//
