function houseParty(arr) {
    let list = [];
    for (let i = 0; i < arr.length; i++) {
        let typeOfStringAsArr = arr[i].split(' ');
        let guest = typeOfStringAsArr[0];
        if (typeOfStringAsArr[2] == 'not') {
            if (list.includes(guest)) {
                list = list.filter((a) => a != guest)
            } else {
                console.log(`${guest} is not in the list!`);
            }
        } else {
            if (!list.includes(guest)) {
                list.push(guest);
            } else {
                console.log(`${guest} is already in the list!`);
            }
        }
    }
    console.log(list.join('\n'));

}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
);