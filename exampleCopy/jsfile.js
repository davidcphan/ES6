document.getElementById('example').innerHTML = 'Go javascript';

//create variables a and b
var a, b;
a = 'hello';
b = a + 'world';

//change div html to hello world

document.getElementById('example').innerHTML = b;

//creation of a function
//function literals consist of function followed by fname followed by invocation
//expression.
function print(string){

console.log(string);



}
var pString = "Basic print function";
print(pString);




var multiply = function(a, b) {

  return a * b;

}

var product = multiply(3, 4);
print(product);
