// Display the next section and hide the current section.
function displaySection(currentSection, nextSection) {
    let current = document.querySelector(currentSection);
    let next = document.querySelector(nextSection);
    // Add hidden class to the current section.
    current.classList.add("hidden");
    // Remove hidden class from the current section.
    next.classList.remove("hidden");
}