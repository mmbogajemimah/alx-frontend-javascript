import { is } from "@babel/types";

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
        return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee (salary: number | string): Teacher | Director {
    if (salary > 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

//console.log(createEmployee(200));
//console.log(createEmployee(1000));
//console.log(createEmployee('$500'));

function isDirector(employee: TeacherInterface | DirectorInterface): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
}

function executeWork(employee: DirectorInterface | TeacherInterface): string {
    let result = undefined;
    (isDirector(employee)) ? result = employee.workDirectorTasks() : result = employee.workTeacherTasks();
    // if (isDirector(employee)) {
    //     return employee.workDirectorTasks()
    // } else {
    //     return employee.workTeacherTasks()
    // }
    return result;
}

//console.log(executeWork(createEmployee(200)));
//console.log(executeWork(createEmployee(1000)));

type Subjects = 'Math' | 'History';
function teachClass (todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
}

console.log(teachClass('Math'));
console.log(teachClass('History'));