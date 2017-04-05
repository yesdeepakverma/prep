// typescripts functions
function FunExample(name, email) {
    var others = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        others[_i - 2] = arguments[_i];
    }
    console.warn([name, email]);
    console.warn(others);
}
FunExample("deepak verma");
FunExample(email = "myemail", name = "my name");
FunExample("deepak verma", "deepak.verma@mediaagility.com");
FunExample("deepak verma", "deepak.verma@mediaagility.com", 123, 123, 123, 123, 123333);
