
function addNumbers(num1, num2) {
  let sum = num1 + num2;
  document.getElementById("result").innerText = "The sum is: " + sum;
}


let n1 = parseFloat(prompt("Enter first number:"));
let n2 = parseFloat(prompt("Enter second number:"));

addNumbers(n1, n2);
