// Allow multiple accounts to be created
// Each account can have many transactions
// Allow withdrawals and deposits into accounts
// Allow us to retrieve the transaction history of an account (all withdrawals and deposits)
// Allow us to retrieve the current balance of the account at any time
// Don't allow withdrawals that exceed the remaining balance of the account

// let balance = 500.0;

class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
    // Have the account balance start at $0 since that makes more sense.
    // this.balance = 0;
  }
  get balance() {
    // Calculate the balance using the transaction objects.
    let balance = 0;
    for (let t of this.transactions) {
      balance += t.value;
    }
    return balance;
  }
  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }
  commit() {
    if (!this.isAllowed()) return false;
    this.time = new Date();
    ///account is an object with a balance property and the withdrawa outputs a value
    // this.account.balance += this.value;
    this.account.addTransaction(this);
    return true;
  }

  toString() {
    return `This transaction is for ${this.amount}`;
  }
}

class Withdrawal extends Transaction {
  // constructor(amount, account) {
  //   this.amount = amount;
  //   this.account = account;
  // }
  get value() {
    // if ()
    return -this.amount;
  }
  isAllowed() {
    //note how it has access to this.account b/c of parent
    return this.account.balance - this.amount >= 0;
  }
}

class Deposit extends Transaction {
  // constructor(amount, account) {
  //   this.amount = amount;
  //   this.account = account;
  // }
  get value() {
    return this.amount;
  }
  isAllowed() {
    return true;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected
const myAccount = new Account("snow-patrol");

console.log("Starting Balance:", myAccount.balance);

t3 = new Deposit(120.0, myAccount);
t3.commit();
console.log("Transaction 3:", t3);

t1 = new Withdrawal(50.25, myAccount);
t1.commit();
console.log("Transaction 1:", t1);

t2 = new Withdrawal(9.99, myAccount);
t2.commit();
console.log("Transaction 2:", t2);

for (let x of myAccount.transactions) {
  console.log(x.toString());
}

console.log("Ending Balance:", myAccount.balance);
console.log("my balance:", myAccount.balance);
