const book = {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    year: 1958,
    genres: ["Fiction", "Historical Fiction"],

    summary() {
        return `${this.title} was written by ${this.author}.`;
    }
};

// Add a rating
book.rating = 4.5;

// Update the publication year
book.year = 1959;

console.log(book.summary());
console.log("Rating:", book.rating);

// Display all properties
for (const [key, value] of Object.entries(book)) {
    console.log(key, ":", value);
}