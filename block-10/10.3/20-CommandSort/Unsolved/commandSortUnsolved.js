// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

const userInput = process.argv.slice(2);
const sortedInput = [];

function sortInputs() {
    for (let i = 0; i < userInput.length; i++) {
        sortedInput.push(userInput[i]);
    }

    sortedInput.sort(abSort);

    console.log(sortedInput);
}

function abSort(a, b) {
    return a - b;
}

sortInputs();
