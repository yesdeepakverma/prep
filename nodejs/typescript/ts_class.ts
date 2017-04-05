class Student{
        fullName: string;
        constructor(public firstName, public lastName){
                this.fullName = firstName+" "+lastName;
        }
}

interface Person{
        firstName: string;
        lastName: string;
}

function greeter2(person: Person){
        return "user first name is "+person.firstName;
}

var user2 = {firstName: "Deepak ", lastName: "Verma"};
console.warn(greeter2(user2));