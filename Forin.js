let x ={
    name:"Raghav",
    age:4,
    percentage:92.4,
    'is Married':false
};
/* for (const key in x){
console.log(key,x[key]);
}  */
for(const key in x){
    if(Object.hasOwnProperty.call(x,key)){
        console.log(key,x[key]);
    }
}