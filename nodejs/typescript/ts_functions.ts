// typescripts functions

function FunExample(name:string, email?:string, ...others:number[]){
        console.warn([name, email]);
        console.warn(others);
}
FunExample("deepak verma");
FunExample(email="myemail", name="my name");
FunExample("deepak verma", "deepak.verma@mediaagility.com");
FunExample("deepak verma", "deepak.verma@mediaagility.com", 123,123,123,123,123333);