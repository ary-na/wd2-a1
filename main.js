// Declare calculate function expression to run it when the user clicks on the results button.
let calculate = () => {
    let calculateBtn = document.querySelector("#calculateBtn");
    // Listen for click
    calculateBtn.addEventListener('click', (e) => {
        console.log("click");
    });
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