export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(students) || !students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be a array of strings');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError('Students must be a array of strings');
    }
    this._students = value;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._name;
  }

  get students() {
    return this._students;
  }
}
