export default function getStudentsByLocation(students, city) {
  const sameCity = students.filter((student) => student.location === city);
  return sameCity;
}
