export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudents = students.filter((student) => student.location === city);
  return cityStudents.map((student) => {
    const gradesFiltered = newGrades.filter((grade) => grade.studentId === student.id);
    if (gradesFiltered.length > 0) {
      return {
        ...student,
        grade: gradesFiltered[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
}
