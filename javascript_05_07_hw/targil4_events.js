function makeStory(){
    var name1= document.getElementById("text1");
    var name2= document.getElementById("text2");
    var place= document.getElementById("text3");
    var msg=document.getElementById("msg");

    if (name1.value.length<1 || name2.value.length<1 || place.value.length<1){
        msg.innerHTML = "please enter values on all fields";
        return;
    } 
    msg.innerHTML = name1.value+" and "+name2.value+" sitting on a "+place.value+"<br/><h2>K I S S I N G !!!!</h2>";
}