let newTask;

function sendData(){
    //save data
    //we will use spread opreator for copying the model data to new object
    newTask = {...task};
    newTask.taskName = taskName.value;
    newTask.taskDate = taskDate.value;
    newTask.taskTime = taskTime.value;
    newTask.saveData();
    //add new task to screen

}