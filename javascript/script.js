// Dropdown (or at least trying)

// --- toggling list
$(".dropdown .dropdown-input a").click(function() {
    $(".dropdown .dropdown-list").toggle();
});

// --- select and hide options after selection
$(".dropdown .dropdown-list a").click(function() {
    var text = $(this).html();
    $(".dropdown .dropdown-input a span").html(text);
    $(".dropdown .dropdown-list").hide();
}); 


// --- hide options if clicked anywhere else on page
$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (! $clicked.parents().hasClass("dropdown"))
        $(".dropdown .dropdown-list").hide();
});




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


//Adding and removing a row in modal (Income)

var itemRowIncome = document.querySelectorAll('.modal-content-income .row')[0];
var incomeContent = document.getElementsByClassName('modal-content-income')[0];


function addNewItemIncome(){
    var clone = itemRowIncome.cloneNode(true);
    itemRowIncome.getElementsByClassName("remove-button")[0].classList.remove("disabled");
    clone.getElementsByClassName("remove-button")[0].classList.remove("disabled");
    incomeContent.appendChild(clone);
}

function removeIncomeItem(item){
    let count = incomeContent.childElementCount;
    if (count == 2)
    {
        let removeButton = document.querySelectorAll('.modal-content-income .remove-button')[0];
        removeButton.classList.add("disabled");
    }
    item.parentElement.remove();
}

//Adding and removing a row in modal (Expense)

var itemRowExpense = document.querySelectorAll('.modal-content-expense .row')[0];
var expenseContent = document.getElementsByClassName('modal-content-expense')[0];


function addNewItemExpense(){
    var clone = itemRowExpense.cloneNode(true);
    console.log(clone);
    itemRowExpense.getElementsByClassName("remove-button")[0].classList.remove("disabled");
    clone.getElementsByClassName("remove-button")[0].classList.remove("disabled");
    expenseContent.appendChild(clone);
}

function removeExpenseItem(item){
    let count = expenseContent.childElementCount;
    console.log(count);
    
    if (count == 2)
    {
        let removeButton = document.querySelectorAll('.modal-content-expense .remove-button')[0];
        removeButton.classList.add("disabled");
    }
        item.parentElement.remove();
}


//Income tile total

var incomeTotal = document.getElementsByClassName("income-total")[0];

function updateIncome(){
    var toUpdateIncome = incomeTotal.children[1];
    var factorsIncome = document.getElementsByClassName('income-to-add');
    let finalValueIncome = 0;

    for(let index = 0; index < factorsIncome.length; ++index){
        finalValueIncome += parseFloat(factorsIncome[index].innerHTML);
    }
    toUpdateIncome.innerHTML = finalValueIncome;

}

setInterval(updateIncome, 1000);



//Economies tile total

var economiesTotal = document.getElementsByClassName("economies-total")[0];

function updateEconomies(){
    var toUpdateEconomies = economiesTotal.children[1];
    var factorsEconomies = document.getElementsByClassName('economies-to-add');
    let finalValueEconomies = 0;

    for(let index = 0; index < factorsEconomies.length; ++index){
        finalValueEconomies += parseFloat(factorsEconomies[index].innerHTML);
    }
    toUpdateEconomies.innerHTML = finalValueEconomies;

}

setInterval(updateEconomies, 1000);



//Expenses total

var cashCardTotal = document.getElementsByClassName("cashcard-total")[0];

function updateCashCard(){
    var toUpdateCashCard = cashCardTotal.children[1];
    var factorsCashCard = document.getElementsByClassName('cashcard-to-add');
    let finalValueCashCard = 0;

    for(let index = 0; index < factorsCashCard.length; ++index){
        finalValueCashCard += parseFloat(factorsCashCard[index].innerHTML);
    }
    toUpdateCashCard.innerHTML = finalValueCashCard;

}

setInterval(updateCashCard, 1000);



//Cash & card tile total

var expensesTotal = document.getElementsByClassName("expenses-total")[0];

function updateExpenses(){
    var toUpdateExpenses = expensesTotal.children[1];
    var factorsExpenses = document.getElementsByClassName('expenses-to-add');
    let finalValueExpenses = 0;

    for(let index = 0; index < factorsExpenses.length; ++index){
        finalValueExpenses += parseFloat(factorsExpenses[index].innerHTML);
    }
    toUpdateExpenses.innerHTML = finalValueExpenses;

}

setInterval(updateExpenses, 1000);


var ps = new PerfectScrollbar('.dashboard');

let dropdownLists = document.querySelectorAll('.dropdown-list');

for (let index = 0; index <= dropdownLists.length; index++) {
     var scrollBar = new PerfectScrollbar(dropdownLists[index]);
}


