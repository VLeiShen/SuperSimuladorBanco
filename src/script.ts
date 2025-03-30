let balance: number = 0;
const balanceElement = document.getElementById("balance") as HTMLSpanElement;
const amountInput = document.getElementById("amount") as HTMLInputElement;
const messageElement = document.getElementById("message") as HTMLParagraphElement;

function updateBalance(): void {
    balanceElement.textContent = balance.toFixed(2);
    messageElement.textContent = "";
    amountInput.value = "";
}

function deposit(): void {
    const amount: number = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) {
        messageElement.textContent = "Por favor, ingresa una cantidad válida.";
        return;
    }
    balance += amount;
    updateBalance();
    messageElement.textContent = `Has depositado $${amount.toFixed(2)} con éxito.`;
}

function withdraw(): void {
    const amount: number = parseFloat(amountInput.value);
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
    messageElement.textContent = `Has retirado $${amount.toFixed(2)} con éxito.`;
}