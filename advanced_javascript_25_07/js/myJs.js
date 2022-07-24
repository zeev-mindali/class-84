var myName = "zeev mindali";
var myCity = "Qiryat yam";
var workPlace = "John Bryce";
var workPosition = "Lecturer";
var workClass = "class 84";

//vladimir 2000;
var str="";
str+=" my name is "+myName;
str+=" i live in "+myCity;
str+=" i working in "+workPlace;
str+=" my job is "+workPosition;
str+=" and i tech "+workClass;

console.log(str);

//Vladmir 2020;
var strBT=` 
my name is ${myName} and i live in ${myCity} 
and i work in ${workPlace} my job is ${workPosition}  
and i tech ${workClass}

`;

strBT+=`Mess with the best and die like the rest (${workClass})

`;

strBT+="All you need is Ilya in life";


console.log(strBT);

var itamer=`
    <table >
        <tr>
            <td style="border:1px solid">${workClass}</td>
            <td style="border:1px solid">${myName}</td>
        </tr>
    </table>
`;

var myRes = document.getElementById('res');
res.innerHTML=itamer;


var arr;
var arr=[];
var arr=[1,2,3,4,5];


function myCalc(){
    num1=4;
    if (num1==4){
        var num1=3;
    }
}
myCalc()
console.log(num1);

var a = !a;  //var
let b = !b; //reference error


const func=function(){
    console.log(myVar); //ok
}

// function func(){
//     console.log(myVar);
// }

console.log(myVar); //error
let myVar=3;
func();
