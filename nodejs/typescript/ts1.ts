function greeter(person: string){
        return 'Hello, '+ person;
}

var user = "Deepak Verma";
document.body.innerHTML = greeter(user);

console.log(greeter([1,2,3]));