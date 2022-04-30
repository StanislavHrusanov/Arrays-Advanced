function arrayManipulatior(intArr, commandsArr) {
    let index = 0;
    let command = commandsArr[index++];
    while (command != 'print') {
        let commandAsArr = command.split(' ');
        let manipulation = commandAsArr[0];

        if (manipulation == 'add') {
            intArr.splice(Number(commandAsArr[1]), 0, Number(commandAsArr[2]));
        } else if (manipulation == 'addMany') {
            let startIndex = Number(commandAsArr[1]);
            for (let i = 2; i < commandAsArr.length; i++) {
                intArr.splice(startIndex, 0, Number(commandAsArr[i]));
                startIndex++;
            }
        } else if (manipulation == 'contains') {
            let contains = intArr.indexOf(Number(commandAsArr[1]));
            console.log(contains);
        } else if (manipulation == 'remove') {
            let removed = intArr.splice(Number(commandAsArr[1]), 1);
        } else if (manipulation == 'shift') {
            for (let i = 0; i < Number(commandAsArr[1]); i++) {
                let shifted = Number(intArr.shift());
                intArr.push(shifted);
            }
        } else if (manipulation == 'sumPairs') {
            let sumArr = [];
            for (let i = 0; i < intArr.length; i += 2) {
                if (intArr.length % 2 != 0 && i == intArr.length - 1) {
                    sumArr.push(intArr[i]);
                    break;
                }
                sumArr.push(intArr[i] + intArr[i + 1]);
            }
            intArr = sumArr;
        }
        command = commandsArr[index++];
    }

    console.log(`[ ${intArr.join(', ')} ]`);
}
arrayManipulatior([1, 2, 3, 4, 5],
    ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]);