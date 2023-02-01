var studentOne = {
    firstName: 'Jemimah',
    lastName: 'Mmboga',
    age: 24,
    location: 'Nairobi'
};
var studentTwo = {
    firstName: 'Michelle',
    lastName: 'Ambogo',
    age: 11,
    location: 'Vihiga',
};
var studentsList = [studentOne, studentTwo];
var table = document.getElementById("myTable");
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var nameCell = row.insertCell(0);
    var locationCell = row.insertCell(1);
    nameCell.innerHTML = "".concat(student.firstName, " ").concat(student.lastName);
    locationCell.innerHTML = student.location;
});
//# sourceMappingURL=main.js.map