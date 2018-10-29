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

var itemRowExpense = document.getElementsByClassName('row')[1];
var expenseContent = document.getElementsByClassName('expense-content')[0];


function addNewItemExpense(){
    var clone = itemRowExpense.cloneNode(true);
    expenseContent.appendChild(clone);
}

function removeExpenseItem(item){
    let count = expenseContent.childElementCount;
    console.log(count)
    if(count != 1)
    {
        item.parentElement.remove();
    }
}



//Adding and removing a row in modal (Income)

var itemRowIncome = document.getElementsByClassName('row')[0];
var incomeContent = document.getElementsByClassName('income-content')[0];


function addNewItemIncome(){
    var clone = itemRowIncome.cloneNode(true);
    incomeContent.appendChild(clone);
}

function removeIncomeItem(item){
    let count = incomeContent.childElementCount;
    if(count != 1)
    {
        item.parentElement.remove();
    }

}

var incomeTotal = document.getElementsByClassName("income-total")[0];

function updateIncome(){
    var toUpdate = incomeTotal.children[1];
    var factors = document.getElementsByClassName('income-to-add');
    let finalValue = 0;

    for(let index = 0; index < factors.length; ++index){
        finalValue += parseFloat(factors[index].innerHTML);
    }
    toUpdate.innerHTML = finalValue;

}

setInterval(updateIncome, 1000);
