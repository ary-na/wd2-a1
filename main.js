// Get user budget.
let budget = document.querySelector("#budgetInput").value;


// Declare calculate function expression to run it when the user clicks on the results button.
let calculate = () => {
    let calculateBtn = document.querySelector("#calculateBtn");
    // Listen for click.
    calculateBtn.addEventListener('click', (e) => {
        let total = calculateTotalExpenses();
        calculateNetResult(total);
    });
}

// Calculate total and average expenses.
function calculateTotalExpenses() {
    let expensesCatOneSubtotal = calculateSubtotalPerCat("cat1Inputs");
    let expensesCatTwoSubtotal = calculateSubtotalPerCat("cat2Inputs");
    let expensesCatThreeSubtotal = calculateSubtotalPerCat("cat3Inputs");
    // Sum the subtotals and store the total in the total variable.
    let total = expensesCatOneSubtotal + expensesCatTwoSubtotal + expensesCatThreeSubtotal;
    // Divide the total by nine expenses and store the average cost per expense variable.
    let averageCostPerExpense = total / 9;
    return total;
}

// Calculate subtotal expenses per category.
function calculateSubtotalPerCat(category) {
    // Get expenses for each category.
    let expensesCat1 = document.querySelector(`#${category} #expense1`).value;
    let expensesCat2 = document.querySelector(`#${category} #expenses2`).value;
    let expensesCat3 = document.querySelector(`#${category} #expenses3`).value;
    // Sum the expenses and return the total.
    return expensesCat1 + expensesCat2 + expensesCat3;
}

// Calculate the net result and display either happy or sad image based on the result.
function calculateNetResult(total) {
    let netResult = budget - total;
    if (netResult <= 0) {

    } else {

    }
}

// Display the next section and hide the current section.
function displaySection(currentSection, nextSection) {
    let current = document.querySelector(currentSection);
    let next = document.querySelector(nextSection);
    // Add hidden class to the current section.
    current.classList.add("hidden");
    // Remove hidden class from the current section.
    next.classList.remove("hidden");

    // Calculate if the user clicks on the results button.
    if (nextSection === "#expensesThree") {
        calculate();
    }
}