
let y = [1, 3, 10, 300, 100, 200];

for(y; y.length; y++){
    console.log(Math.max(...y))
}


// Max number By if else
var a = 10;
var b = 20;
var c = 30;
var d = 40;
var e = 50;

console.log("Find the Big number by if else");
if(a>b && a>c &&a>d && a>e){
    console.log(a);
}else if(b>a && b>c &&b>d && b>e){
    console.log(b);
}else if(c>a && c>b &&c>d && c>e){
    console.log(c);
}else if(d>a && d>b && d>c && d>e){
    console.log(d);
}else if(e>a && e>b && e>c &&e>d){
    console.log(e);
}