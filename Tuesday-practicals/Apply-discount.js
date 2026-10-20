function applyDiscount(prices, rule) {
    let discountedPrices = [];

    for (const price of prices) {
        discountedPrices.push(rule(price));
    }

    return discountedPrices;
}

const prices = [20000, 60000, 80000, 40000];

// Rule 1: 10% off every item
const tenPercentOff = (price) => price * 0.90;

// Rule 2: Take off 5,000 RWF if the price is over 50,000 RWF
const fiveThousandOff = (price) => {
    if (price > 50000) {
        return price - 5000;
    }

    return price;
};

console.log(applyDiscount(prices, tenPercentOff));
console.log(applyDiscount(prices, fiveThousandOff));