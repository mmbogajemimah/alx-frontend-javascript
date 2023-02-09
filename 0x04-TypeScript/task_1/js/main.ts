// CREATING AN INTERFACE
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}
// EXTENDING AN INTERFACE
interface Directors extends Teacher {
  numberOfReports: number;
}
// CREATING A FUNCTION
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`
}
// CREATING AN INTTERFACE FOR THE FUNCTION
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
//console.log(printTeacher("John", "Doe"));

