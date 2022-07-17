var dogJobs = ["<th>שם הילד המסכן</th><th>זמן הוצאה</th><th>יום בשבוע</th><th>תאריך</th><th>קקי</th><th>פיפי</th>"]
function addTask(){
    var childName = document.getElementById("childName");
    var outTime = document.getElementsByName("outTime");    
    var outDate = document.getElementById("outDate");
    var dogTable = document.getElementById("dogTable");

    var newTask = "";
    newTask+="<tr>"
    newTask+="<td>"+childName.value+"</td>";
    newTask+="<td>"+getTime(outTime)+"</td>";
    newTask+="<td>"+getDay(outDate.value)+"</td>";
    newTask+="<td>"+normalDate(outDate.value)+"</td>"
    newTask+="<td><input type='checkbox'/></td>";
    newTask+="<td><input type='checkbox'/></td>";
    newTask+="</tr>"
    dogJobs.push(newTask);

    dogTable.innerHTML = createTable();
}

function createTable(){
    var tableData="";
    for (var counter=0;counter<dogJobs.length;counter+=1){
        tableData+=dogJobs[counter];
    }
    return tableData;
}

function getTime(userTime){
    for (var counter=0;counter<userTime.length;counter+=1){
        if (userTime[counter].checked){
            switch (counter){
                case 1: return "בוקר";
                case 2: return "צוהריים";
                case 0: return "ערב";
            }
        }
    }
    return "err";
}

function getDay(userDay){
    //יצירת תאריך עם התאריך שהמשתמש הזין
    var tempDay = new Date(userDay);
    switch(tempDay.getDay()){
        case 0:
            return "ראשון";
        case 1:
            return "שני";
        case 2:
            return "שלישי";
        case 3:
            return "רביעי";
        case 4:
            return "חמישי";
        case 5:
            return "שישי";
        case 6:
            return "שאבסססס";
    }
    return "err";
}

function normalDate(oldDate) {
    var changeDate = oldDate.split("-");
    return changeDate[2] + "/" + changeDate[1] + "/" + changeDate[0];
}