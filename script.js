let numbers = [3, 4, 4];

function totalNumbers() {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(totalNumbers());

function largestNumber() {
    let largest = numbers[0];

    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

console.log(largestNumber());

function countAboveFirst() {
    let count = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[0]) {
            count++;
        }
    }

    return count;
}

console.log(countAboveFirst());

document.getElementById("show").addEventListener("click", function () {
    document.getElementById("total").textContent = totalNumbers();
    document.getElementById("big").textContent = largestNumber();
    document.getElementById("above").textContent = countAboveFirst();
});