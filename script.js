var overlay = document.getElementsByClassName('overlay')[0];
var cancel = document.getElementsByClassName('cancel')[0];
var itemRow = document.getElementsByClassName("row")[2];
var expenseContent = document.getElementsByClassName("expense-content")[0];

function openExpenseModal(){
    overlay.style.display = "flex";
}

function closeExpenseModal(){
    overlay.style.display = "none";
}

function addNewItem(){
    var clone = itemRow.cloneNode(true);
    expenseContent.appendChild(clone);
}

function removeItem(item){
    item.parentElement.remove();
}
