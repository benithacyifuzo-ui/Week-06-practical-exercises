function createBankAccount(initial) {
    let money = initial;

    return {
        deposit(amount) {
            if (amount > 0) {
                money = money + amount;
                return true;
            }
            return false;
        },

        withdraw(amount) {
            if (amount > 0 && amount <= money) {
                money = money - amount;
                return true;
            }
            return false;
        },

        balance() {
            return money;
        }
    };
}

// Test the bank account
const account = createBankAccount(10000);

console.log(account.balance());

console.log(account.deposit(5000));
console.log(account.balance());

console.log(account.withdraw(3000));
console.log(account.balance());

console.log(account.withdraw(20000));
console.log(account.balance());