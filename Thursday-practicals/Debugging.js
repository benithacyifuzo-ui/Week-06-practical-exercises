const users = [
    { name: "Aline", age: 24 },
    { name: "Eric", age: 17 }
];

// Keep users aged 18 or older
const adults = users.filter(user => user.age >= 18);

// Create an array containing the names
const names = users.map(user => user.name);

// Sort a copy alphabetically without changing the original
const sorted = [...users].sort((a, b) =>
    a.name.localeCompare(b.name)
);

console.log("Adults:", adults);
console.log("Names:", names);
console.log("Sorted users:", sorted);
console.log("First sorted name:", sorted[0].name);