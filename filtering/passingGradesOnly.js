const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];

const passGrades = grades.filter(num => num > 60);

console.log("Subset of passing grade:",passGrades);