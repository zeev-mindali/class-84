function resetMe(){
    
    //get the check box 
    var myCheckBox = document.getElementById("myCB");
    //get check box array
    var myRadioButton = document.getElementsByName("myRadio");
    //reset checbox
    myCheckBox.checked = false;
    //reset radio button
    for (var counter=0;counter<myRadioButton.length;counter+=1){
        myRadioButton[counter].checked = false;
    }
}