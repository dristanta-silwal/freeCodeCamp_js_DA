function palindrome(str) {
    const alphanumericOnly = str
        // 1) Lowercase the input
        .toLowerCase()
        // 2) Strip out non-alphanumeric characters
        .match(/[a-z0-9]/g);

    // 3) return string === reversedString
    return alphanumericOnly.join('') ===
        alphanumericOnly.reverse().join('');
}

function convertToRoman(num) {
    const map = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    let result = '';
    for (const i in map) {
        const numValue = map[i]
        // console.log(numValue)
        while (numValue <= num) {
            num -= numValue;
            result += i;
        }
    }
    return result;
}

function rot13(message) {
    return message.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13 : -13)));
}


function telephoneCheck(str) {
    var re = /^([+]?1[\s]?)?((?:[(](?:[2-9]1[02-9]|[2-9][02-8][0-9])[)][\s]?)|(?:(?:[2-9]1[02-9]|[2-9][02-8][0-9])[\s.-]?)){1}([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2}[\s.-]?){1}([0-9]{4}){1}$/;
    return re.test(str);
}

var denom = [
    { name: 'ONE HUNDRED', val: 100 },
    { name: 'TWENTY', val: 20 },
    { name: 'TEN', val: 10 },
    { name: 'FIVE', val: 5 },
    { name: 'ONE', val: 1 },
    { name: 'QUARTER', val: 0.25 },
    { name: 'DIME', val: 0.1 },
    { name: 'NICKEL', val: 0.05 },
    { name: 'PENNY', val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
    var output = { status: null, change: [] };
    var change = cash - price;
    var register = cid.reduce(function (acc, curr) {
        acc.total += curr[1];
        acc[curr[0]] = curr[1];
        return acc;
    }, { total: 0 });
    if (register.total === change) {
        output.status = 'CLOSED';
        output.change = cid;
        return output;
    }
    if (register.total < change) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }
    var change_arr = denom.reduce(function (acc, curr) {
        var value = 0;
        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;
            change = Math.round(change * 100) / 100;
        }
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc;
    }, []);
    if (change_arr.length < 1 || change > 0) {
        output.status = 'INSUFFICIENT_FUNDS';
        return output;
    }
    output.status = 'OPEN';
    output.change = change_arr;
    return output;
}



function per1() {
    var item = document.getElementById('myOne').value
    document.querySelector('#result1').innerText = `Result: ${palindrome(item)}`
}
function per2() {
    var item = document.getElementById('myTwo').value
    document.querySelector('#result2').innerText = `Result: ${convertToRoman(item)}`
}
function per3() {
    var item = document.getElementById('myThree').value
    document.querySelector('#result3').innerText = `Result: ${rot13(item)}`
}
function per4() {
    var item = document.getElementById('myFour').value
    document.querySelector('#result4').innerText = `Result: ${telephoneCheck(item)}`
}
function per5() {
    var item = document.getElementById('myFive').value
    document.querySelector('#result5').innerText = `Result: ${telephoneCheck(item)}`
}