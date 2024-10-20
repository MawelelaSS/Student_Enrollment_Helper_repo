// Get form element
const form = document.getElementById("aps-form");

// Add event listener to form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get module marks
    const marks = [
        parseInt(document.getElementById("mark-1").value),
        parseInt(document.getElementById("mark-2").value),
        parseInt(document.getElementById("mark-3").value),
        parseInt(document.getElementById("mark-4").value),
        parseInt(document.getElementById("mark-5").value),
        parseInt(document.getElementById("mark-6").value),
        parseInt(document.getElementById("mark-7").value),
        parseInt(document.getElementById("mark-8").value)
    ];

    // Calculate APS score
    const apsScore = marks.reduce((acc, mark) => acc + calculateAPS(mark), 0);

    // Display APS score
    document.getElementById("aps-score").textContent = `Your APS Score: ${apsScore}`;

    // Display mark results
    marks.forEach((mark, index) => {
        const resultSpan = document.getElementById(`result-${index + 1}`);
        resultSpan.textContent = getResultText(mark);
        resultSpan.className = getResultClass(mark);
    });
});

// Function to calculate APS score for a single mark
function calculateAPS(mark) {
    if (mark >= 90) return 10;
    else if (mark >= 80) return 9;
    else if (mark >= 70) return 8;
    else if (mark >= 60) return 7;
    else if (mark >= 50) return 6;
    else if (mark >= 40) return 5;
    else if (mark >= 30) return 4;
    else if (mark >= 20) return 3;
    else if (mark >= 10) return 2;
    else return 1;
}

// Function to get result text for a mark
function getResultText(mark) {
    if (mark >= 90) return "Strong";
    else if (mark >= 80) return "Good";
    else if (mark >= 70) return "Better";
    else return "Bad";
}

// Function to get result class for a mark
function getResultClass(mark) {
    if (mark >= 90) return "strong";
    else if (mark >= 80) return "good";
    else if (mark >= 70) return "better";
    else return "bad";
}