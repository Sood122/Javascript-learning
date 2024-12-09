// console.log("Hello world to Js");
// Data types in Js: number,string,boolean,undefine,Null,Bigint,Symbol.
// variables
// var , let, const
let age =102;
let name ="BAWA"
let a =null;
let x =BigInt("123");
let y=Symbol("Hello");
const e=2.5;
// objec : it is the collection of values.
const student={
    name:"Sood",
    age:20,
    cgpa:805,
    ispass:true,
};
// to access any value of obj
// obj.key OR obj["key"]
// example:
// console.log(student.age),
//console.log(student["age"])
// to update:
student["age"]=student["age"]+1;
student["name"]="Bawa";
console.log(student["age"]);
console.log(student["name"]);
// we can update a let variable but we can not update value of const,
// we can update const by :
// const obj->key.
// pactice question:
// Q.) Create a const obj called "Product" to store  information shown in the picture?
// sol:
const product={
    name:"Pen",
    rating:4,
    offer:5,
    price:270,
};
console.log(product);
// Question solved