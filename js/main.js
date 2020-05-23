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
function isAllDataValid() {
    var isValid = true;
    var title = getInputById("title").value;
    if (title == "") {
        isValid = false;
    }
    return isValid;
}
function getToDoItem() {
}
function displayToDoItem(item) {
}
function getById(id) {
    return document.getElementById(id);
}
function getInputById(id) {
    return document.getElementById(id);
}
function createErrorMessage() {
}
