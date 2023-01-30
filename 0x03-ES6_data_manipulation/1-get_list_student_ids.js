export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const studentId = students.map((element) => `${element.id}`);
  const numberId = studentId.map((elem) => Number(elem));
  return numberId;
}
