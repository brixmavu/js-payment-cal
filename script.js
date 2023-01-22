let remainingBalance = 0;
function calculateRemainingBalance() {
    // Get the values of total cost, deposit and payment
    let totalCost = document.getElementById("totalCost").value;
    let deposit = document.getElementById("deposit").value;
    let payment = document.getElementById("payment").value;

    // Calculate remaining balance
    remainingBalance = totalCost - deposit - payment;

    if (remainingBalance < 0) {
        alert("Payment cannot be greater than remaining balance!");
        remainingBalance = totalCost - deposit;
        document.getElementById("payment").value = "";
    } else {
        // Display remaining balance in the input field
        document.getElementById("remainingBalance").value = remainingBalance;
    }
}
