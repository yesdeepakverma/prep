function greeter(person) {
    return "Hello ," + person.firstName + ", " + person.lastName;
}
var user = { firstName: 'Deepak', lastName: "Verma" };
console.warn(greeter(user));
