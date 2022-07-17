function init(){
    //point to object
    var myMsg = document.getElementById("msg");
    //change innerHTML
    myMsg.innerHTML = "Connecting to server...";

    //set timeout for 3 seconds
    var serverTimeout = setTimeout(function () {
        //display the message after 3 seconds
        myMsg.innerHTML = "Can not connect to server.";
        //time in milliseconds , 1000 milliseconds = 1 second
        }, 3000);
 
        //set timeout for 1500 milliseconds
    setTimeout(function(){
        //display the message after 1500 seconds
        myMsg.innerHTML = "connection was established successfully";
        //cancel the serverTimeout timeout.
        clearTimeout(serverTimeout);
    },1500);
}