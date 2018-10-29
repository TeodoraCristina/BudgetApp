//Income modal

var overlayIncome = document.getElementsByClassName('overlay')[0];
var cancelIncome = document.getElementsByClassName('cancel')[0];

function openIncomeModal(){
    overlayIncome.style.display = "flex";

}

function closeIncomeModal(){
    overlayIncome.style.display = "none";
}



//Expense modal

var overlayExpense = document.getElementsByClassName('overlay')[1];
var cancelExpense = document.getElementsByClassName('cancel')[0];

function openExpenseModal(){
    overlayExpense.style.display = "flex";

}

function closeExpenseModal(){
    overlayExpense.style.display = "none";
}



//Adding and removing a row in modal (Expense)

var itemRow = document.getElementsByClassName('row')[0];
var expenseContent = document.getElementsByClassName('expense-content')[0];


function addNewItemExpense(){
    var clone = itemRow.cloneNode(true);
    expenseContent.appendChild(clone);
}

function removeItem(item){
    item.parentElement.remove();
}



//Adding and removing a row in modal (Income)

var itemRow = document.getElementsByClassName('row')[0];
var incomeContent = document.getElementsByClassName('income-content')[0];


function addNewItemIncome(){
    var clone = itemRow.cloneNode(true);
    incomeContent.appendChild(clone);
}

function removeItem(item){
    item.parentElement.remove();
}