import inquirer from "inquirer";

let currencys:any = {
    USD : 1,
    PKR : 280,
    EUR : 0.91,
    GBP : 0.76,
    INR : 74.57
};

while(true){
let userExchange = await inquirer.prompt([
    {
        type : "list",
        name : "fromAmount",
        message :"enter your currency and exchange it:",
        choices : ["USD","PKR","EUR","GBP","INR"]
    },
    {
        type : "list",
        name : "toAmount",
        message :"enter your currency and exchange it:",
        choices : ["USD","PKR","EUR","GBP","INR"]
    },
    {
        type : "number",
        name : "amount",
        message : "enter your amount:"
    },
    {
        type: "confirm",
        name: "continue",
        message: "Do you want to perform another exchange?",
        default: true
    }
]);

let fromAmount = currencys[userExchange.fromAmount];
let toAmount = currencys[userExchange.toAmount];
let amount = userExchange.amount;

const baseAmount = amount / fromAmount;
const result = (baseAmount * toAmount).toFixed(4).replace(/\.?0+$/, '');
console.log(`here is your exchange rate ${result}`);
if (!userExchange.continue) {
    break;
}
}
