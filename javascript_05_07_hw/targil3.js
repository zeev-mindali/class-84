function makeLogin(){
    //make pointer to html elements
    var uName = document.getElementById("uName");
    var uPass = document.getElementById("uPass");
    var uRemember = document.getElementById("uRemember");

    //check if it's working
    // console.log(uName.value);
    // console.log(uPass.value);
    // console.log(uRemember.checked);

    //checking if username and password is correct
    if (uName.value=="good" && uPass.value=="day!"){
        //check if the user pressed on checkbox
        if (uRemember.checked){
            //true
            alert ("user: "+uName.value+" pass:"+uPass.value+" i will remember you !!!");
        } else {
            //false
            alert ("you are not so important that i will remember you!!!");
        }
        //move to another page :)
        window.location = "https://www.johnbryce.co.il";
    } else {
        //display alert if user name or password are not correct :(
        alert ("Why who are you?")
    }
}