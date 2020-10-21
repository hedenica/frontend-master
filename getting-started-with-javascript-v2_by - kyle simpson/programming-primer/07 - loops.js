var students = ['John', 'Luke', 'Peter'];

function greetStudent(student){
  return `Hello! ${student}`
}

for (let i = 0; i < students.length; i++) {
  console.log(greetStudent(students[i]));
}

for (let student of students) {
  console.log(greetStudent(student));
}

while (students.length > 0) {
  let student = students.pop();
  console.log(student)
  console.log(greetStudent(student))
}