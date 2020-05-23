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
    addTask.onclick = addToDoListItem();
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
    var isCompleted = getInputById("is-completed");
    tdItems.isCompleted = isCompleted.checked;
    return tdItems;
}
function displayToDoItem(item) {
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
