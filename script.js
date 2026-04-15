function addCourse() {
  const courseDiv = document.createElement("div");
  courseDiv.classList.add("course");

  courseDiv.innerHTML = `
    <input type="number" placeholder="Grade Point" class="grade">
    <input type="number" placeholder="Credit Unit" class="credit">
  `;

  document.getElementById("courses").appendChild(courseDiv);
}

function calculateCGPA() {
  let grades = document.querySelectorAll(".grade");
  let credits = document.querySelectorAll(".credit");

  let totalPoints = 0;
  let totalCredits = 0;

  for (let i = 0; i < grades.length; i++) {
    let grade = parseFloat(grades[i].value) || 0;
    let credit = parseFloat(credits[i].value) || 0;

    totalPoints += grade * credit;
    totalCredits += credit;
  }

  let cgpa = totalCredits ? (totalPoints / totalCredits) : 0;

  document.getElementById("result").innerText =
    "Your CGPA: " + cgpa.toFixed(2);
}
