//datepicker-js code
// @ts-ignore - Lack of IntelliSense
var picker = datepicker("#due-date");
//MomentJS library Code
const clock = document.getElementById('clock');
        setInterval(() => {
            // @ts-ignore - Lack of IntelliSense
           const now = moment();
           const humanReadable = now.format('hh:mm:ssA');
           clock.textContent = humanReadable;
        }, 1000 )




/******************************************************************************************************* */
                                              //PAGE TYPESCRIPT
/******************************************************************************************************* */

class ToDoItem{
    title:string;
    dueDate:Date;
    isCompleted: boolean;
}

window.onload = function() {
    let addTask = getById("addTask");
    addTask.onclick = addToDoListItem;
}

function isAllDataValid(): boolean{
    let isValid = true;
    
    let title = getInputById("title").value;
    if(title ==""){
        isValid = false;
        createErrorMessage("Title is required!");
    }
    
    
    return isValid;
}

function addToDoListItem(){
    if(isAllDataValid()){
        clearAllErrors();
        let item = getToDoItem();
        displayToDoItem(item);
    }
}

function getToDoItem(): ToDoItem{
    let tdItems = new ToDoItem();

    //gets the title
    let titleInput = getInputById("title");
    tdItems.title = titleInput.value;
    
   

    //get due date
    let dueDateInput = getInputById("due-date");
    tdItems.dueDate = new Date(dueDateInput.value);

    //get isCompleted
    let isCompleted = getInputById("is-complete");
    tdItems.isCompleted = isCompleted.checked;

    return tdItems;


}

function displayToDoItem(item:ToDoItem): void{
    let itemText = document.createElement("h3");
    itemText.innerText = item.title;

    let itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toString();

    let itemDiv = document.createElement("div");

    
    if(item.isCompleted){
        itemDiv.classList.add("completed");
    }
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);
    
    if(item.isCompleted){
        let completedTasks = document.getElementById("completed-tasks");
        completedTasks.appendChild(itemDiv);
    }
    else{
        let incompleteTasks = document.getElementById("incomplete-tasks");
        incompleteTasks.appendChild(itemDiv);
    }

    
}
//helper functions
function getById(id) {
    return document.getElementById(id);

}

function getInputById(id):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

function createErrorMessage(errMsg:string){
    let errSummary = getById("validation");
    let errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}

function clearAllErrors() {
    let errSummary = getById("validation");
    errSummary.innerText = "";
}

function clearAllTasks() {
    let clearCompleteTasks = getById("completed-tasks");
    clearCompleteTasks.innerText ="";
    let clearIncompleteTasks = getById("incomplete-tasks");
    clearIncompleteTasks.innerText="";

}

function hideClockElement(){
    var x = getInputById("clock");
    if(x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }

}


