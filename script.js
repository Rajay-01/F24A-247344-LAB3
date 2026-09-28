let numbers = [3, 4, 4];

function totalNumbers() {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(totalNumbers());