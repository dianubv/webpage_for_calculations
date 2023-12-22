var num1, num2, num3, num4, num5, num6, testRequirement;

    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('startButton').addEventListener('click', calculateAverage);
    });

    function calculateAverage() {
      var resultDiv = document.getElementById("result");
      var enteredValuesDiv = document.getElementById("enteredValues");
      var num1Display = document.getElementById("num1Display");
      var num2Display = document.getElementById("num2Display");
      var num3Display = document.getElementById("num3Display");
      var num4Display = document.getElementById("num4Display");
      var num5Display = document.getElementById("num5Display");
      var num6Display = document.getElementById("num6Display");
      var testRequirementDisplay = document.getElementById("testRequirementDisplay");

    num1 = parseFloat(prompt("Enter first test result: "));
    num2 = parseFloat(prompt("Enter second test result: "));
    num3 = parseFloat(prompt("Enter third test result: "));
    testRequirement = parseFloat(prompt("Enter Test Stated Requirement: "));
    
    num1Display.textContent = "First test result: " + num1;
    num2Display.textContent = "Second test result: " + num2;
    num3Display.textContent = "Third test result: " + num3;
    testRequirementDisplay.textContent = "Test Stated Requirement: " + testRequirement;

    enteredValuesDiv.style.display = "block";
    
    var averageFirstThree = (num1 + num2 + num3) / 3;

    resultDiv.innerHTML = "Average of first three test results: " + averageFirstThree.toFixed(2);

    if (averageFirstThree >= testRequirement) {
        resultDiv.innerHTML += "<br><span class='goodResult'>Good</span>";
    } else if (averageFirstThree < testRequirement && averageFirstThree > testRequirement * 0.7) {
        resultDiv.innerHTML += "<br><span class='retestResult'>Retest</span>";
        promptForAdditionalNumbers();
    } else {
        resultDiv.innerHTML += "<br><span class='rejectResult'>Reject</span>";
    }
    }

    function promptForAdditionalNumbers() {
      num4 = parseFloat(prompt("Enter fourth test result: "));
      num5 = parseFloat(prompt("Enter fifth test result: "));
      num6 = parseFloat(prompt("Enter sixth test result: "));
      
      var num4Display = document.getElementById("num4Display");
      var num5Display = document.getElementById("num5Display");
      var num6Display = document.getElementById("num6Display");
      
      num4Display.textContent = "Fourth test result: " + num4;
      num5Display.textContent = "Fifth test result: " + num5;
      num6Display.textContent = "Sixth test result: " + num6;

      // Calculate the average of all entered values
      var total = num1 + num2 + num3 + num4 + num5 + num6;
    var averageAll = total / 6;
    var resultDiv = document.getElementById("result");

    resultDiv.innerHTML += "<br>Average of all six test results: " + averageAll.toFixed(2);

    // Update the final decision based on the new average
    if (averageAll >= testRequirement) {
        resultDiv.innerHTML += "<br><span class='goodResult'>Good</span>";
    } else {
        resultDiv.innerHTML += "<br><span class='rejectResult'>Reject</span>";
    }
    }