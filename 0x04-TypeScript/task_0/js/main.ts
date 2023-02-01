/*
an interface defines the syntax that any entity must adhere to
Interfaces define properties, methods, and events, which are the members of the interface
Interfaces contain only the declaration of the members.
It is the responsibility of the deriving class to define the members.
helps in providing a standard structure that the deriving classes would follow.
The interface keyword is used to declare an interface.
*/
interface Student {
  firstName: string,
  lastName: string,
  age: number,
  location: string
}

const studentOne: Student = {
  firstName: 'Jemimah',
  lastName: 'Mmboga',
  age: 24,
  location: 'Nairobi'
}
const studentTwo: Student = {
  firstName: 'Michelle',
  lastName: 'Ambogo',
  age: 11,
  location: 'Vihiga',
}

const studentsList: Student[] = [studentOne, studentTwo];

const table = document.getElementById("myTable") as HTMLTableElement;
studentsList.forEach(student => {
  const row = table.insertRow();
  const nameCell = row.insertCell(0);
  const locationCell = row.insertCell(1);
  nameCell.innerHTML = `${student.firstName} ${student.lastName}`;
  locationCell.innerHTML = student.location;
});
