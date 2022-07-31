let myTasks = [];

//local storage -> stringfy json.parse
function saveTasks(newTask){ 
    myTasks.push(newTask);   
    localStorage.setItem("myTasks",JSON.stringify(myTasks));
    //ajax
    //mongoDB
    //mySQL
}

function loadTasks(){
    myTasks = JSON.parse(localStorage.getItem("myTasks"));
}

//roee 2005 
function sayHello (userName){
    console.log(userName);
    return "Hello "+userName;
}

//roee 2022
const sayHello2 = (userName)=>{
    console.log(userName);
    return "Hello "+userName;
}

//bad bad bad
function sayHi(userName){
    console.log(userName);
    const thiz=this;
    function addStar(){
        console.log("* ",thiz.userName," *");
    }
}
