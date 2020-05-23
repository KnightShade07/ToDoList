var picker = datepicker("#due-date");
var clock = document.getElementById('clock');
setInterval(function () {
    var now = moment();
    var humanReadable = now.format('hh:mm:ssA');
    clock.textContent = humanReadable;
}, 1000);
var ToDoItem = (function () {
    function ToDoItem() {
    }
    return ToDoItem;
}());
window.onload = function () {
    var addTask = getById("addTask");
    addTask.onclick = addToDoListItem;
};
function isAllDataValid() {
    var isValid = true;
    var title = getInputById("title").value;
    if (title == "") {
        isValid = false;
        createErrorMessage("Title is required!");
    }
    return isValid;
}
function addToDoListItem() {
    if (isAllDataValid()) {
        clearAllErrors();
        var item = getToDoItem();
        displayToDoItem(item);
    }
}
function getToDoItem() {
    var tdItems = new ToDoItem();
    var titleInput = getInputById("title");
    tdItems.title = titleInput.value;
    var dueDateInput = getInputById("due-date");
    tdItems.dueDate = new Date(dueDateInput.value);
    var isCompleted = getInputById("is-complete");
    tdItems.isCompleted = isCompleted.checked;
    return tdItems;
}
function displayToDoItem(item) {
    var itemText = document.createElement("h3");
    itemText.innerText = item.title;
    var itemDate = document.createElement("p");
    itemDate.innerText = item.dueDate.toString();
    var itemDiv = document.createElement("div");
    if (item.isCompleted) {
        itemDiv.classList.add("completed");
    }
    itemDiv.appendChild(itemText);
    itemDiv.appendChild(itemDate);
    if (item.isCompleted) {
        var completedTasks = document.getElementById("completed-tasks");
        completedTasks.appendChild(itemDiv);
    }
    else {
        var incompleteTasks = document.getElementById("incomplete-tasks");
        incompleteTasks.appendChild(itemDiv);
    }
}
function getById(id) {
    return document.getElementById(id);
}
function getInputById(id) {
    return document.getElementById(id);
}
function createErrorMessage(errMsg) {
    var errSummary = getById("validation");
    var errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
function clearAllErrors() {
    var errSummary = getById("validation");
    errSummary.innerText = "";
}
function clearAllTasks() {
    var clearCompleteTasks = getById("completed-tasks");
    clearCompleteTasks.innerText = "";
    var clearIncompleteTasks = getById("incomplete-tasks");
    clearIncompleteTasks.innerText = "";
}
