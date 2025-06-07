//print 1 to 10 but with with delay of 1 sec after each number gets printed
function hello(){
    console.log("hello");
}
function mello(){
    console.log("mello");
}
setTimeout(hello,10*1000);
setTimeout(mello,3*1000);