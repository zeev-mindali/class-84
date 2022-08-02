//var let const

//var
var greeter = "say hi";

function fun(){
    var hello = "hello";
    console.log(hello);
}

//console.log(hello);

//fun();
//console.log(greeter);

var zeev = "zeev";
var zeev = "zeev mindali";
zeev = "my name is zeev";
//console.log(zeev);

var rom;
//console.log(typeof rom);
rom = "mess with the best and die like the rest";
//console.log(rom);

/*
var great = "hey hi";
var times = 4;

if (times>3){
    var great = "hello to my brother from another mother";
}
*/
//console.log(great);


//let - block scoped
let hello = "say hi";
let times = 4;
if (times>3){
    let hello = "lion the king";
    //console.log(hello);
}
hello = "Hello Reut";
hello = 5;
//console.log(hello,typeof hello);


//example for lev leviov
//let userName = "zeev";
if (userName === "zeev"){
//    let userPass = "12345";
    //console.log("password",userPass);
}
//console.log(userPass);
var userName = "zeev";
if (userName === "zeev"){
    var userPass = "12345";
    //console.log("password",userPass);
}
//console.log(userPass);


for (let counter=0;counter<10;counter+=1){
    console.log("i will come to class next time!!!");
}

for (let counter=0;counter<100;counter+=1){
    console.log("Vova and Alla");
}


