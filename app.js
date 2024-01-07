document.addEventListener('DOMContentLoaded', function () {
    loadItems();
});

function addItem() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const tarea = document.getElementById('tarea').value;

    if (firstName && lastName && email) {
        const newItem = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            tarea: tarea,
        };

        let items = getItemsFromStorage();
        items.push(newItem);
        localStorage.setItem('crudData', JSON.stringify(items));

        loadItems();
        clearForm();
    }
}

function loadItems() {
    const dataList = document.getElementById('data-list');
    dataList.innerHTML = '';

    const items = getItemsFromStorage();

    items.forEach((item, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${index + 1}</td>
                        <td>${item.firstName}</td>
                        <td>${item.lastName}</td>
                        <td>${item.email}</td>
                        <td>${item.tarea}</td>
                        <td>
                            <button onclick="editItem(${index})">Editar</button>
                            <button onclick="deleteItem(${index})">Eliminar</button>
                        </td>`;
        dataList.appendChild(row);
    });
}

function editItem(index) {
    const items = getItemsFromStorage();
    
    const indexEdit = document.getElementById('indexEdit');
    const editFirstName = document.getElementById('editFirstName');
    const editLastName = document.getElementById('editLastName');
    const editEmail = document.getElementById('editEmail');
    const edittarea = document.getElementById('edittarea');

    indexEdit.value = index;
    editFirstName.value = items[index].firstName;
    editLastName.value = items[index].lastName;
    editEmail.value = items[index].email;
    edittarea.value = items[index].tarea;
}
function saveItem() {
    let items = getItemsFromStorage();
    const indexEdit = document.getElementById('indexEdit').value;
    const editFirstName = document.getElementById('editFirstName');
    const editLastName = document.getElementById('editLastName');
    const editEmail = document.getElementById('editEmail');
    const edittarea = document.getElementById('edittarea');
console.log(indexEdit)

        items[indexEdit].firstName = editFirstName.value;
        items[indexEdit].lastName = editLastName.value;
        items[indexEdit].email = editEmail.value;
        items[indexEdit].tarea = edittarea.value;

        localStorage.setItem('crudData', JSON.stringify(items));
        loadItems();
        clearEditForm();
    ;
}

function deleteItem(index) {
    const items = getItemsFromStorage();
    items.splice(index, 1);
    
    localStorage.setItem('crudData', JSON.stringify(items));
    loadItems();
    
}

function getItemsFromStorage() {
    return JSON.parse(localStorage.getItem('crudData')) || [];
}

function clearForm() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('tarea').value = '';
}

function clearEditForm() {
    document.getElementById('editFirstName').value = '';
    document.getElementById('editLastName').value = '';
    document.getElementById('editEmail').value = '';
    document.getElementById('edittarea').value = '';
}

