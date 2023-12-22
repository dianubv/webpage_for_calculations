document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('startButton').addEventListener('click', initialTestEvaluation);
});

function initialTestEvaluation() {
    // Get values from input fields
    num1 = parseFloat(document.getElementById("num1").value) || 0;
    num2 = parseFloat(document.getElementById("num2").value) || 0;
    num3 = parseFloat(document.getElementById("num3").value) || 0;
    testRequirement = parseFloat(document.getElementById("testRequirement").value) || 0;

    updateEnteredValuesDisplay();

    // Immediate rejection if any of the first three results is below 70% of the test requirement
    if (num1 < testRequirement * 0.7 || num2 < testRequirement * 0.7 || num3 < testRequirement * 0.7) {
        updateResultDisplay("Reject", 'rejectResult');
        return;
    }

    // Calculate the average of the first three results
    var averageFirstThree = (num1 + num2 + num3) / 3;

    // If the average is good, accept the results
    if (averageFirstThree >= testRequirement) {
        updateResultDisplay("Good", 'goodResult');
    } 
    // If the average is between 70% of the requirement and the requirement, prompt for additional tests
    else if (averageFirstThree >= testRequirement * 0.7) {
        updateResultDisplay("Retest", 'retestResult');
        showAdditionalInputs();
    }
}

function showAdditionalInputs() {
    // Show inputs for the second set of tests
    document.getElementById("num4").style.display = "block";
    document.getElementById("num5").style.display = "block";
    document.getElementById("num6").style.display = "block";
    // Change the event listener to a function that will handle all six tests
    document.getElementById('startButton').removeEventListener('click', initialTestEvaluation);
    document.getElementById('startButton').addEventListener('click', completeTestEvaluation);
}

function completeTestEvaluation() {
    // Get all six test results
    num4 = parseFloat(document.getElementById("num4").value) || 0;
    num5 = parseFloat(document.getElementById("num5").value) || 0;
    num6 = parseFloat(document.getElementById("num6").value) || 0;

    updateEnteredValuesDisplay();

    // Calculate the new average with all six results
    var total = num1 + num2 + num3 + num4 + num5 + num6;
    var averageAll = total / 6;

    // Make the final decision based on the new average
    if (averageAll >= testRequirement) {
        updateResultDisplay("Good", 'goodResult');
    } else {
        updateResultDisplay("Reject", 'rejectResult');
    }
}

function updateEnteredValuesDisplay() {
    // Update the display of entered values
    // ... (existing code from updateEnteredValuesDisplay function)
}

function updateResultDisplay(text, className) {
    var resultDiv = document.getElementById("result");
    resultDiv.textContent = text;
    resultDiv.className = className;
}
