// CALLBACK
//A callback is a function passed as an argument to another function
//This technique allows a function to call another function
//A callback function can run after another function has finished
function add(num1,num2){
  let res = num1 + num2;
  displayres(res);
}
function displayres(result){
  console.log(result)
}
add(2,5);
//Problem is that you have to call two functions to display the result

function displayfinal(a){
  console.log(a)
}
function sum(num1,num2,myCallback){
  let final = num1 + num2;
  myCallback(final);
}
sum(5,5,displayfinal)
