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

//TODO: Put Calender Library Code here!


/******************************************************************************************************* */
                                              //PAGE TYPESCRIPT
/******************************************************************************************************* */

class ToDoItem{
    title:string;
    dueDate:Date;
    isCompleted: boolean;
}

function isValid(): boolean{
    
    return true;
}

function getToDoItem(): ToDoItem{

}

function displayToDoItem(item:ToDoItem): void{

}
//helper functions
function getById(id: string) {
    return document.getElementById(id);

}

function getInputById(id: string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}
