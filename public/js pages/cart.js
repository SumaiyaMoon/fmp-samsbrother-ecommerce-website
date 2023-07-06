function validateForm() {
    // Get form input values
    var name = document.getElementById("nameInput").value;
    var contact = document.getElementById("contactInput").value;
    var email = document.getElementById("emailInput").value;
    var address = document.getElementById("addressInput").value;
    // Add validation for other fields

    // Check if any required field is empty
    if (name === "" || contact === "" || email === "" || address === "") {
        alert("Please fill in all the required fields.");
        return false; // Prevent form submission
    }

    // All fields are filled, redirect to placed.html
    window.location.href = "placed.html";
    return true; // Allow form submission
}

  






var costSubTotal = document.getElementById("costSubTotal")
var costTax = document.getElementById("costTax")
var costDelivery = document.getElementById("costDelivery")
var costTotal = document.getElementById("costTotal")