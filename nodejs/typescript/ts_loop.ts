// TS for loop examples

var a:any = 'a,b,c';
var ii:number = 1234;
var ass:string;

for (var i=0;i<ii;i++){
        console.warn(i)
}
for (ass in a){
        console.warn([ass, a[ass]]);
}