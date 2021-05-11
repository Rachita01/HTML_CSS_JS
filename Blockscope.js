var c = 190;
let a = 10;
const b = 100;
{   
    var c = 200;
    let a = 11;
    const b = 111;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
console.log(b);
console.log(c);

let d = 10;
function x(){
    var d = 20;
}