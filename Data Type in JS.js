//There are two types of data type in JS
//Primitive & Non primitive
//Primitive - Number, String, Boolean, Undefined, Null, Symbol
//Non Primitive - Function, Object literal, Array
//Everything excet primitive data type is object in JS
let myarr=[]
console.log("Type of Array : "+typeof myarr)
let myname = 'Atush'
console.log("Type of String : "+typeof myname)
let d;
console.log("Type of Undeclared variable : "+typeof d)
let e = null
// This will also show as object which is error in JS
console.log("Type of Null : "+typeof e)
let f = () =>{
  console.log("Checking")
}
console.log("Type of Function : "+typeof f)
f.attr1 = "I am also an object yaar!!!"
//Since function is also tread as an object in JS therefore we can set attribute even in function
console.log(f.attr1)
