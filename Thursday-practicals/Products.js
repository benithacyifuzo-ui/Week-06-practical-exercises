const products = [
    { id: 1, name: "Running shoes", category: "shoes", price: 45000, stock: 12 },
    { id: 2, name: "Backpack", category: "bags", price: 30000, stock: 0 },
    { id: 3, name: "Sandals", category: "shoes", price: 15000, stock: 25 },
    { id: 4, name: "Cap", category: "accessories", price: 8000, stock: 40 }
];

// Find shoes costing less than 20,000 RWF
const affordableShoes = products
    .filter(product => product.category === "shoes" && product.price < 20000)
    .map(product => product.name);

// Find the product with the highest stock
const highestStock = products.reduce((highest, product) => {
    if (product.stock > highest.stock) {
        return product;
    }

    return highest;
});

// Calculate average price
const totalPrice = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);

const averagePrice = totalPrice / products.length;

console.log("Affordable shoes:", affordableShoes);
console.log("Highest stock:", highestStock.name);
console.log("Stock quantity:", highestStock.stock);
console.log("Average price:", averagePrice);