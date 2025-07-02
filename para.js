function greetUser(name) {
  let message = "Hello, " + name + "! Welcome to JavaScript 😊";
  document.getElementById("output").innerText = message;
}

let userName = prompt("Enter your name:");

greetUser(userName);
