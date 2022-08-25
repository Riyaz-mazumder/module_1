// Finding max number using for loop
let arr = [1, 3, 10, 300, 100, 200];
let max = arr[0];
for (var i = 0; i < arr.length; i++) {
  if (max < arr[i]) {
    max = arr[i];
  }
}
console.log(max);

// Finding Min number using for loop
let y = [1, 3, 10, 300, 100, 200];
let min = y[0];
for (var i = 0; i < y.length; i++) {
  if (y[i] < min) {
    min = y[i];
  }
}
console.log(min);

// console.log(Math.max(...y))

// // Max number By if else
// var a = 10;
// var b = 20;
// var c = 30;
// var d = 40;
// var e = 50;

// console.log("Find the Big number by if else");
// if(a>b && a>c &&a>d && a>e){
//     console.log(a);
// }else if(b>a && b>c &&b>d && b>e){
//     console.log(b);
// }else if(c>a && c>b &&c>d && c>e){
//     console.log(c);
// }else if(d>a && d>b && d>c && d>e){
//     console.log(d);
// }else if(e>a && e>b && e>c &&e>d){
//     console.log(e);
// }
