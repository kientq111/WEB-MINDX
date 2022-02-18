let btnAdd = document.getElementById('btnAdd');
let btnDisplay = document.getElementById('btnDisplay');
let formAdd = document.getElementById('addForm');
let tblDisplay = document.getElementById('tblDisplay');
let $tblList = document.getElementsByTagName('tbody')[0];
let listTodo = JSON.parse(localStorage.getItem('todolist'));
listTodo = listTodo.sort((a, b) => a.deadline.localeCompare(b.deadline));


console.log(listTodo);
if (listTodo == null) {
    listTodo = [];
}

btnAdd.addEventListener("click", function() {
    btnAdd.style.color = 'green';
    btnDisplay.style.color = 'white';
    formAdd.style.display = 'block';
    tblDisplay.style.display = 'none';
});

btnDisplay.addEventListener("click", function() {
    btnAdd.style.color = 'white';
    btnDisplay.style.color = 'green';
    formAdd.style.display = 'none';
    tblDisplay.style.display = 'block';
});



for (let i = 0; i < listTodo.length; i++) {
    let $colCheckbox = document.createElement('td');
    let $colContent = document.createElement('td');
    let $colDate = document.createElement('td');
    let $colDel = document.createElement('td');
    let cbxDone = document.createElement('input');
    let btnDel = document.createElement('input');

    btnDel.type = 'button';
    btnDel.value = 'Delete';
    $colDel.append(btnDel);

    cbxDone.type = 'checkbox'
    cbxDone.checked = listTodo[i].isDone;

    $colContent.innerHTML = listTodo[i].content;
    $colDate.innerHTML = listTodo[i].deadline;

    $colCheckbox.append(cbxDone);

    cbxDone.addEventListener('change', function() {
        if (this.checked) {
            listTodo[i].isDone = true;
            localStorage.setItem('todolist', JSON.stringify(listTodo));
        } else {
            listTodo[i].isDone = false;
            localStorage.setItem('todolist', JSON.stringify(listTodo));
        }

    })

    btnDel.onclick = () => {
        let text = "Are you sure?";
        if (confirm(text) == true) {
            listTodo.splice(i, 1);
            localStorage.setItem('todolist', JSON.stringify(listTodo));
            location.reload();
        }
    };

    let $row = document.createElement('tr');
    $row.append($colCheckbox, $colDate, $colContent, $colDel);
    $tblList.append($row);

}


// ---------------------insert---------------------------------
let btnInsert = document.getElementById('$insert');
let txtContent = document.getElementById('$txtContent');
let txtDate = document.getElementById('$txtDate');

btnInsert.addEventListener("click", function() {
    let todo = {
        isDone: false,
        deadline: txtDate.value,
        content: txtContent.value
    }
    listTodo.push(todo);
    localStorage.setItem("todolist", JSON.stringify(listTodo));
});