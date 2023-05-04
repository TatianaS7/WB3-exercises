function displayMailingLabel(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(city + ", " + state + " " + zip);
}

function addNumbers(num1, num2) {
    let result = num1 + num2;

    return result;
}

function displayReceipt(totalDue, amountPaid) {
    let change = totalDue - amountPaid;
        if (amountPaid >= totalDue) {
            return change;
        }
        else {
            console.log(change + ' ' + 'more needs to be paid');
    }
}

console.log(displayMailingLabel('Tatiana Stewart', '323 Peachtree Street', 'Conyers', 'GA', '30012'));
console.log(displayMailingLabel('May Whitman', '555 Clover Blvd', 'Bronx', 'NY', '10012'));

console.log(addNumbers(5, 5));
console.log(addNumbers(6, 7));

console.log(displayReceipt(15, 20));
console.log(displayReceipt(36, 36));
console.log(displayReceipt(7, 5));