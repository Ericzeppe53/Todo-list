// Hämta element från DOM
const taskInput = document.getElementById('taskInput');
const submitBtn = document.getElementById('submitBtn');
const taskList = document.getElementById('taskList');

// Eventlistener för att lägga till en uppgift
submitBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Rensa inputfältet efter tillägg
    }
});

// Funktion för att lägga till en uppgift
function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    // Skapa redigera och ta bort knappar
    const buttonsDiv = document.createElement('div');
    buttonsDiv.classList.add('buttons');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Redigera';
    editBtn.addEventListener('click', () => editTask(li));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Ta bort';
    deleteBtn.addEventListener('click', () => deleteTask(li));

    buttonsDiv.appendChild(editBtn);
    buttonsDiv.appendChild(deleteBtn);

    li.appendChild(buttonsDiv);
    taskList.appendChild(li);
}

// Funktion för att redigera en uppgift
function editTask(li) {
    const newTaskText = prompt('Redigera uppgift:', li.firstChild.textContent);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        li.firstChild.textContent = newTaskText;
    }
}

// Funktion för att ta bort en uppgift
function deleteTask(li) {
    taskList.removeChild(li);
}