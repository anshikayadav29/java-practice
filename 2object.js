/*var details =["Raghav",24,92.5,false];
details[0] ='Rohan';// if this line(console.log(details)) is here print rohan
console.log(details);
let x={
    name:"Raghav",
    age:24,
    percentage:92.5,
    'is Married':false
};
console.log(x['age']);*/

var details =["Raghav",24,92.5,false];
details[0] ='Rohan';
console.log(details);
let x={
    name:"Raghav",
    age:24,
    percentage:92.5,
    'is Married':false
};
console.log(x.age);//console.log(x['age']);
x['age']=30;
console.log(x['age']);
