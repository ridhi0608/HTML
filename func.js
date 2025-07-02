function displayInfo(name, course) {
  let extra = arguments[2]; // Accessing the 3rd argument manually

  let result = "Name: " + name + "<br>" +
               "Course: " + course + "<br>" +
               "University (3rd argument): " + extra;

  document.getElementById("output").innerHTML = result;
}

displayInfo("Ridhi", "MCA", "Lovely Professional University");
