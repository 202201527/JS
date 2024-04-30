"use strict";
function computeValue(portfolio) {
  let total = 0.0;
  for (let stock in portfolio) {
    // For each stock in the portfolio:
    let shares = portfolio[stock]; // get the number of shares
    let price = getQuote(stock); // look up share price
    total += shares * price; // add stock value to total value
  }
  return total;
}

// Remember
let arr = ["book", "pen", "note"]; // Array Object
let obj = { book: {}, pen: {}, note: {} };

for (let i of arr) { // in으로 바꾸면 index 출력 0 1 2
  console.log(i); //in 인데 element 출력하려면 arr[i]
}
for (let i in obj) {
  console.log("✨", i); //obj[i] 하면 값 출력 {} {} {}
}
