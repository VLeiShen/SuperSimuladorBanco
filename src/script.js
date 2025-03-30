var balance = 0;
var balanceElement = document.getElementById("balance");
var amountInput = document.getElementById("amount");
var messageElement = document.getElementById("message");
function updateBalance() {
    balanceElement.textContent = balance.toFixed(2);
    messageElement.textContent = "";
    amountInput.value = "";
}
function deposit() {
    var amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        messageElement.textContent = "Por favor, ingresa una cantidad válida.";
        return;
    }
    balance += amount;
    updateBalance();
    messageElement.textContent = "Has depositado $".concat(amount.toFixed(2), " con \u00E9xito.");
}
function withdraw() {
    var amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        messageElement.textContent = "Por favor, ingresa una cantidad válida.";
        return;
    }
    if (amount > balance) {
        messageElement.textContent = "Fondos insuficientes.";
        return;
    }
    balance -= amount;
    updateBalance();
    messageElement.textContent = "Has retirado $".concat(amount.toFixed(2), " con \u00E9xito.");
}
