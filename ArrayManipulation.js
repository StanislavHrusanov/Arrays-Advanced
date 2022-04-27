function arrayManipulation(arr) {
    let arraytoManipulate = arr.shift().split(' ');
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');

        switch (command[0]) {
            case 'Add': arraytoManipulate.push(command[1]); break;
            case 'Remove': arraytoManipulate = arraytoManipulate.filter((a) => a != command[1]); break;
            case 'RemoveAt': arraytoManipulate.splice(Number(command[1]), 1); break;
            case 'Insert': arraytoManipulate.splice(Number(command[2]), 0, command[1]); break;
        }
    }
    console.log(arraytoManipulate.join(' '));
}
arrayManipulation(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']
);