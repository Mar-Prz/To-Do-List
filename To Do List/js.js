let toDo = document.getElementById('tasks');
let addButton = document.getElementById('addbutton');
let tasks = document.getElementById('task-container');
let removeButton = document.querySelector('xbutton')

addButton.addEventListener('click', addTask)

toDo.addEventListener('keyup', (event) => {
    if(event.which === 13) {
        addTask();
    }
});

function addTask(){

    let toDoValue = toDo.value;

    if(toDoValue === "") {
        setErrorFor(toDo, 'Input cannot be blank');
        paragraph.classList.add('noparagraphstyle');
    }

    if(toDoValue !=="") {
        setErrorFor(toDo, '');

        console.log(toDoValue);
    }


    function setErrorFor(input, message) {
        const inputControl = input.parentElement;
        const small = inputControl.querySelector('small'); 

        small.innerText = message;

        inputControl.className = 'inputControl error';
    }


    let paragraph = document.createElement('p')
    paragraph.innerText = toDo.value; 
    paragraph.classList.add('paragraphstyle');
    tasks.appendChild(paragraph);
    let removeButton = document.createElement("button")
    removeButton.innerText = "X";
    removeButton.classList.add('xbutton'); 
    paragraph.appendChild(removeButton);
    toDo.value = "";

    paragraph.addEventListener('click', lineThrough)

    function lineThrough() {
        paragraph.style.textDecoration = "line-through"
    }

    removeButton.addEventListener('click', fadeTask) 
    
    function fadeTask() {
        paragraph.style.textDecoration = "none"
        paragraph.classList.add('fadeoutparagraphstyle');
        removeButton.classList.add('xbuttonfadeout');

        setTimeout(() => {
            tasks.removeChild(paragraph);
            paragraph.removeChild(xbutton);
        }, 2000);
    }
}



