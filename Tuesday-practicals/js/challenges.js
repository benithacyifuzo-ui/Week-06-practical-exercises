// challenges.js

export function checkGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid score";
    } else if (score >= 80) {
        return "A";
    } else if (score >= 70) {
        return "B";
    } else if (score >= 60) {
        return "C";
    } else if (score >= 50) {
        return "D";
    } else {
        return "F";
    }
}

export function sumNumbers(numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}