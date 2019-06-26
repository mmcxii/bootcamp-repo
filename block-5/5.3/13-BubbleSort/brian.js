// 9710 => 179
// -372 => -273

function reverseNum(num) {
    let str = num.toString();

    let res = [];

    for (let i = str.length; i >= 0; i--) {
        if (str[i] === '-') {
            res[0] = str[i];
        } else {
            res.push(str[i]);
        }
    }

    return parseFloat(res.join(''));
}

console.log(reverseNum(9710));

console.log(reverseNum(-372));
