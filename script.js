const addPersonBtn = document.getElementById('add-person-btn');
const personNameInput = document.getElementById('person-name');
const peopleList = document.getElementById('people-list');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

addPersonBtn.addEventListener('click', function() {
    const personName = personNameInput.value.trim();
    if (personName !== '') {
        addPersonToJob(personName);
        personNameInput.value = '';
    }
});

function addPersonToJob(name) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td contenteditable="true">${name}</td>
        <td contenteditable="true">$0.00</td>
        <td><button class="edit-btn">Edit</button></td>
        <td><button class="delete-btn">Delete</button></td>
    `;
    peopleList.appendChild(newRow);
}

peopleList.addEventListener('click', function(event) {
    const target = event.target;
    if (target.classList.contains('edit-btn')) {
        const row = target.closest('tr');
        editRow(row);
    } else if (target.classList.contains('delete-btn')) {
        const row = target.closest('tr');
        deleteRow(row);
    }
});

function editRow(row) {
    // Enable content editing for the name cell
    const nameCell = row.cells[0];
    nameCell.contentEditable = true;
    nameCell.focus(); // Focus on the editable cell

    // Change the text of the "Edit" button to "Save"
    const editButton = row.querySelector('.edit-btn');
    editButton.textContent = 'Save';

    // Change the event listener to save changes on clicking "Save"
    editButton.removeEventListener('click', editRow);
    editButton.addEventListener('click', saveRow);
}

function saveRow(event) {
    const row = event.target.closest('tr');
    const nameCell = row.cells[0];
    const newName = nameCell.textContent.trim();

    // Disable content editing for the name cell
    nameCell.contentEditable = false;

    // Change the text of the "Save" button back to "Edit"
    const editButton = row.querySelector('.edit-btn');
    editButton.textContent = 'Edit';

    // Change the event listener back to editRow function
    editButton.removeEventListener('click', saveRow);
    editButton.addEventListener('click', editRow);

    // Perform your save operation here, for example, display in console
    console.log(`Saving changes for name: ${newName}`);
}

function deleteRow(row) {
    row.remove();
}

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
});
