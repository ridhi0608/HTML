let marks = prompt("Enter your marks (out of 100):");

marks = parseFloat(marks);

if (marks >= 90) {
  alert("Grade: A+");
} else if (marks >= 80) {
  alert("Grade: A");
} else if (marks >= 70) {
  alert("Grade: B");
} else if (marks >= 60) {
  alert("Grade: C");
} else if (marks >= 50) {
  alert("Grade: D");
} else if (marks >= 0) {
  alert("Grade: F");
} else {
  alert("Invalid input. Please enter a number between 0 and 100.");
}
