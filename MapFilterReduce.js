/*let arr =[1,6,3,8];
console.log(arr);
let brr =[];
for (const ele of arr){
    brr.push(ele*ele);
}
console.log(brr);*/


//2nd peogram

/*function twice(ele){
    return 2*ele;
}
function square(ele){
    return ele*ele;
}
function add10(ele){
    return ele+10;
}
let arr =[1,-6,-3,8];
console.log(arr);
let brr =arr.map(add10);
console.log(brr);*/


//3rd solution

let arr =[1,-6,-3,8];
console.log(arr);
arr =arr.map(ele => ele*-1);
console.log(arr);