// Declare variables
let budget = 0;
let cat1expenses = [];
let cat2expenses = [];
let cat3expenses = [];

// Get input value and display the next section while hiding the current section.
function processInputs(currentSection, nextSection) {
    let current = document.querySelector(currentSection);
    let next = document.querySelector(nextSection);
    // Add hidden class to the current section.
    current.classList.add("hidden");
    // Remove hidden class from the current section.
    next.classList.remove("hidden");

    switch (nextSection) {
        case ("#cat1Inputs"):
            budget = document.querySelector("#budgetInput").value;
            break;
        case ("#cat2Inputs"):
            let cat1expense1 = Number(document.querySelector("#cat1Inputs .expense1Input").value);
            let cat1expense2 = Number(document.querySelector("#cat1Inputs .expense2Input").value);
            let cat1expense3 = Number(document.querySelector("#cat1Inputs .expense3Input").value);
            cat1expenses.push(cat1expense1);
            cat1expenses.push(cat1expense2);
            cat1expenses.push(cat1expense3);
            break;
        case ("#cat3Inputs"):
            let cat2expense1 = Number(document.querySelector("#cat2Inputs .expense1Input").value);
            let cat2expense2 = Number(document.querySelector("#cat2Inputs .expense2Input").value);
            let cat2expense3 = Number(document.querySelector("#cat2Inputs .expense3Input").value);
            cat2expenses.push(cat2expense1);
            cat2expenses.push(cat2expense2);
            cat2expenses.push(cat2expense3);
            break;
        case ("#results"):
            let cat3expense1 = Number(document.querySelector("#cat3Inputs .expense1Input").value);
            let cat3expense2 = Number(document.querySelector("#cat3Inputs .expense2Input").value);
            let cat3expense3 = Number(document.querySelector("#cat3Inputs .expense3Input").value);
            cat3expenses.push(cat3expense1);
            cat3expenses.push(cat3expense2);
            cat3expenses.push(cat3expense3);
            calculate();
            break;
        default:
            console.log("No input");
    }
}

// Declare calculate function expression to run it when the user clicks on the results button.
let calculate = () => {
    let total = calculateTotalExpenses();
    calculateNetResult(total);
}

// Calculate total and average expenses.
function calculateTotalExpenses() {
    let expensesCatOneSubtotal = calculateSubtotalPerCat(cat1expenses);
    let expensesCatTwoSubtotal = calculateSubtotalPerCat(cat2expenses);
    let expensesCatThreeSubtotal = calculateSubtotalPerCat(cat3expenses);
    // Sum the subtotals and store the total in the total variable.
    let total = expensesCatOneSubtotal + expensesCatTwoSubtotal + expensesCatThreeSubtotal;
    console.log(total);
    // Divide the total by nine expenses and store the average cost per expense variable.
    let averageCostPerExpense = total / 9;
    return total;
}

// Calculate subtotal expenses per category.
function calculateSubtotalPerCat(category) {

    let subtotal = category[0] + category[1] + category[2];
    console.log(subtotal + " - ");
    // Sum the expenses and return the total.
    return subtotal;
}

// Calculate the net result and display either happy or sad image based on the result.
function calculateNetResult(total) {
    let netResult = budget - total;
    if (netResult <= 0) {

    } else {

    }
}