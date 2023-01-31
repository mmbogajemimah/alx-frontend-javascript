export default function getStudentIdsSum(students) {
  const totalValue = students.reduce((acc, student) => acc + student.id, 0);
  return totalValue;
}
