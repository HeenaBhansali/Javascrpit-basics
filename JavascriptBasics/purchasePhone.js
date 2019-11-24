/* Page- 26 (UP and going) ydkjs
Write a program to calculate total price of your phone puchase */

const tax_rate = 9.99
const phone_price = 960
const accessory_price = 59.99
const spending_threshold = 500.0
const bank_account_balance = 1000
let total_price = 0

function calculateTotalPrice(amount) {
  total_price = amount + (amount * tax_rate) / 100
  if (total_price < bank_account_balance) {
    console.log("Total Price is $" + String(total_price.toFixed(2)))
    console.log("Can Afford it")
  } else console.log("Can't afford it")
}

let amount = phone_price
while (amount <= spending_threshold) {
  amount += accessory_price
}

if (amount < bank_account_balance) calculateTotalPrice(amount)
else console.log("Can't afford it")
