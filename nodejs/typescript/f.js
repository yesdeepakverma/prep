var Student = (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + " " + lastName;
    }
    return Student;
}());
function greeter2(person) {
    return "user first name is " + person.firstName;
}
var user2 = { firstName: "Deepak ", lastName: "Verma" };
console.warn(greeter2(user2));
function greeter(person) {
    return "Hello ," + person.firstName + ", " + person.lastName;
}
var user = { firstName: 'Deepak', lastName: "Verma" };
console.warn(greeter(user));
