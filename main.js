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
    calculateTotalExpenses();
}

// Calculate total and average expenses.
function calculateTotalExpenses() {
    let expensesCat1Subtotal = calculateSubtotalPerCat(cat1expenses);
    let expensesCat2Subtotal = calculateSubtotalPerCat(cat2expenses);
    let expensesCat3Subtotal = calculateSubtotalPerCat(cat3expenses);
    // Sum the subtotals and store the total in the total variable.
    let total = expensesCat1Subtotal + expensesCat2Subtotal + expensesCat3Subtotal;
    // Divide the total by nine expenses and store the average cost per expense variable.
    let averageCostPerExpense = total / 9;
    let netResult = calculateNetResult(total);
    display(expensesCat1Subtotal, expensesCat2Subtotal, expensesCat3Subtotal, total, averageCostPerExpense, netResult);
}

// Calculate subtotal expenses per category.
function calculateSubtotalPerCat(category) {
    // Return the sum of the expenses per category.
    return category[0] + category[1] + category[2];
}

// Calculate the net result and display either happy or sad image based on the result.
function calculateNetResult(total) {
    let netResult = budget - total;
    let iconImage = document.querySelector("#results img");
    let resultPara = document.querySelector("#results .center > p");
    if (netResult < 0) {
        iconImage.setAttribute("src", "images/sad.png");
        iconImage.setAttribute("alt", "A sad face icon.");
        resultPara.innerHTML = "Oh no, you have exceeded your budget.";
    } else {
        iconImage.setAttribute("src", "images/smile.png");
        iconImage.setAttribute("alt", "A smiley face icon.");
        resultPara.innerHTML = "Congratulations! You have stayed within your budget.";
    }
    return netResult;
}

// Display the results in the results table.
function display(expensesCat1Subtotal, expensesCat2Subtotal, expensesCat3Subtotal, total, averageCostPerExpense, netResult) {

}