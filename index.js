const transferFee = .5; //exchange fee
const closeOrderFee = .3; //30%
const openOrderFee = .002; //.2%
const investedAmount = 18.57; //amount to trade
const profitPercent = .015; // 1.5% total profit per trade

var arr = [];
for(let i = 0; i <= 30; i++){

    }

function openOrder(investment){
    const feeAmount =  investment * openOrderFee;
    return investment - feeAmount; //return order amount
}
const profitAmount = "";
function closeOrder(TotalProfit){
   const profit = closeOrderFee * TotalProfit;
   return profit;
}
function compute(investment, formula){
   return formula(investment);
}
const ammountOnTrade = compute(investedAmount, openOrder);
const computeProfit = profitPercent * ammountOnTrade;
const closeOrderFeeAmount = compute(computeProfit, closeOrder);
const orderFee = investedAmount - ammountOnTrade;
const totalProfAmount = computeProfit - closeOrderFeeAmount;

console.log("investment", investedAmount);
console.log("fee .2%", orderFee); 
console.log("on trade",ammountOnTrade);
console.log("initial profit", computeProfit);
console.log("Bot fee", closeOrderFeeAmount);
console.log("Total profit", totalProfAmount);


    