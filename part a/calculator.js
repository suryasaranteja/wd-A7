$(document).ready(function() {
    // Initialize error messages to be hidden
    $(".error-message").hide();
  
    $("#add").on("click", calculate);
    $("#subtract").on("click", calculate);
    $("#multiply").on("click", calculate);
    $("#divide").on("click", calculate);
  
    function calculate(event) {
      event.preventDefault();
  
      // Get user input
      var num1 = $("#number1").val();
      var num2 = $("#number2").val();
  
      // Validate input
      if (!isValidNumber(num1)) {
        $("#number1-error").text("Invalid input. Please enter a valid number.");
        $("#number1-error").show();
        return;
      }
      if (!isValidNumber(num2)) {
        $("#number2-error").text("Invalid input. Please enter a valid number.");
        $("#number2-error").show();
        return;
      }
  
      // Parse input as numbers
      var n1 = parseFloat(num1);
      var n2 = parseFloat(num2);
  
      // Calculate result based on the clicked button
      var operation = event.target.id;
      var result;
      switch (operation) {
        case "add":
          result = n1 + n2;
          break;
        case "subtract":
          result = n1 - n2;
          break;
        case "multiply":
          result = n1 * n2;
          break;
        case "divide":
          if (n2 === 0) {
            $("#number2-error").text("Division by zero is not allowed.");
            $("#number2-error").show();
            return;
          }
          result = n1 / n2;
          break;
        default:
          result = "Error";
      }
  
      // Display the result
      $("#number1-error").hide();
      $("#number2-error").hide();
      $("#calc-result").text(result);
    }
  
    function isValidNumber(value) {
      var regex = /^[0-9]*\.?[0-9]*$/;
      return regex.test(value);
    }

    const cookies = document.cookie.split(';');
    let username = null;
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'username') {
            username = value;
            break;
        }
    }

    if (username) {
        $('#username-display').text(`Welcome, ${username}!`);
    }



  });
  