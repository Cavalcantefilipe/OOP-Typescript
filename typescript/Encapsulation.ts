class BankAccount {
  private _balance: number;

  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this._balance += amount;
    } else {
      throw new Error("Deposit amount must be positive");
    }
  }

  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this._balance) {
      this._balance -= amount;
    } else {
      throw new Error("Invalid withdrawal amount");
    }
  }

  public get balance(): number {
    return this._balance;
  }
}

console.log("Encapsulation Example");
let account = new BankAccount(1000);
account.deposit(500);
console.log(`Current Balance: ${account.balance}`);
account.withdraw(200);
console.log(`Balance after withdrawal: ${account.balance}`);
console.log(`Final Balance: ${account.balance}`);
