/*function fun(ele){
    if(ele%2!=0) return true;
    else return false;
}
let arr =[1,9,2,7,4,5,6,2,8];
console.log(arr);

let brr = arr.filter(fun);
console.log(brr);*/


//2nd solution
let arr =[1,9,2,7,4,5,6,2,8];
console.log(arr);

arr =arr.filter(function(ele){
    if(ele%2==0) return true;
    else return false ;
});
console.log(arr);