// Example 1
const outerFunction = () => {
  var a = 10;
  const innerFunction = () => {
    console.log(a);
  };
  var a = 1000;
  innerFunction();
  var a = 100;
};
outerFunction();

//Example 2
for (var i = 1; i <= 5; i++) {
  const close = (i) => {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  };
  close(i);
}

//Example 3
let funcs = [];
for (let i = 0; i < 3; i++) {
  funcs.push(() => i);
}
console.log(funcs[0](), funcs[1](), funcs[2]());

//Example 4
for (var i = 0; i < 3; i++) {
  (() => console.log(i))();
}

//Example 5
const fns = [];
for (let i = 1; i <= 3; i++) {
  fns.push(function () {
    return i * 2; //
  });
}
console.log(fns.map((f) => f()));

//Example 6
var result = [];
[10, 20, 30].forEach(function (n) {
  setTimeout(() => result.push(n), 0);
});
setTimeout(() => console.log(result), 100);

// Problem Question
const createWallet = (balance) => {
  return {
    deposit: (amount) => {
      return (balance += amount);
    },
    getBalance: () => {
      return balance;
    },
    withdraw: (debit) => {
      if (balance < debit) return "Insufficient Balance";

      balance -= debit;
      return balance;
    },
  };
};

const wallet = createWallet(100);
console.log(wallet.getBalance());
console.log(wallet.deposit(100));
console.log(wallet.getBalance());
console.log(wallet.withdraw(50));
console.log(wallet.withdraw(300)); // Tried for if condition
