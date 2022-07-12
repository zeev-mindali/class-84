var milkList = [
    "<th>name</th><th>date</th><th>milk</th><th>coffee</th><th>cake</th>",
];

function normalDate(oldDate, spt) {
    var changeDate = oldDate.split("-");
    return changeDate[2] + spt + changeDate[1] + spt + changeDate[0];
}

function updateMe(){
    //pointer to html
    var uName = document.getElementById("uName");
    var uDate = document.getElementById("uDate");
    var milk = document.getElementById("milk");
    var coffee = document.getElementById("coffee"); 
    var cake = document.getElementById("cake");    
    var milkDuty = document.getElementById("milkDuty");     

    //validation of fields.

    var myString = "<tr>";
    myString += "<td>"+uName.value+"</td>";
    myString+="<td>"+normalDate(uDate.value,"/")+"</td>";
    myString+="<td><center>"+(milk.checked?"V":"X")+"</center></td>";
    myString+="<td><center>"+(coffee.checked?"V":"X")+"</center></td>"; 
    myString+="<td><center>"+(cake.checked?"V":"X")+"</center></td>";
    myString+="</tr>";
    //add to last place in the array - lifo Last in First Out
    milkList.push(myString)

    milkDuty.innerHTML =createTable();

    resetForm();
}

function createTable() {
    myString = "";
    for (var counter=0;counter<milkList.length;counter+=1) {
        myString+=milkList[counter];
    }
    return myString;
}

function resetForm(){
    uName.value = "";
    uDate.value = new Date();
    milk.checked = false;
    coffee.checked = false;
    cake.checked = false;   
    console.log(milkList);        
}

function deleteLast(){
    //pop corn
    //take out the last place in the array
    milkList.pop();
    milkDuty.innerHTML =createTable();
}