const numbers = [3, 8, 12, 5, 20, 7];

// Keep numbers greater than 6
const overSix = numbers.filter(number => number > 6);

// Double every number
const doubled = numbers.map(number => number * 2);

// Calculate the total
const total = numbers.reduce((sum, number) => sum + number, 0);

// Find the largest number
const largest = Math.max(...numbers);

console.log("Numbers over 6:", overSix);
console.log("Doubled numbers:", doubled);
console.log("Total:", total);
console.log("Largest:", largest);