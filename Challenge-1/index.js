function studentGrade() {
    let marks = prompt("Enter the student's marks (0-100):");
    marks = Number(marks);

let grade;
if (marks > 79) {
    grade = 'A';
}
else if (marks >= 60 && marks < 79) {
    grade = 'B';
}
else if (marks >= 49 && marks < 59 ) {
    grade = 'C';
}
else if (marks >= 40 && mark < 49 ) {
    grade = 'D';
}
else {
    grade = 'E'
}

console.log(`The student's grade is: ${grade}`);
}

studentGrade(85);