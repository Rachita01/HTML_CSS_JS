    var d = 0;
    var c = 7;
    var e = 2;
    var i = 0;
function main() {
    var depth = 128;
    while(d<=depth)
    {  
       d=d+c;
       if(d>=depth)
       {
           i++;
           break;
       }
       else{
           d = d-e;
           i++;
       }
    }
} 
main();
console.log(i);