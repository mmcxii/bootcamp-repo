const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/:operator/:numOne/:numTwo', (req, res) => {
    const { operator } = req.params;
    const numOne = parseInt(req.params.numOne);
    const numTwo = parseInt(req.params.numTwo);
    let result = 0;

    switch (operator) {
        case 'add':
        case 'sum':
        case '+':
            result = numOne + numTwo;
            break;

        case 'sub':
        case 'minus':
        case '-':
            result = numOne - numTwo;
            break;

        case 'mult':
        case 'times':
        case '*':
            result = numOne * numTwo;
            break;

        case 'div':
        case 'divide':
            result = numOne / numTwo;
            break;

        default:
            result = 'Do math nerd.';
            break;
    }

    res.send(result.toString());
});

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
