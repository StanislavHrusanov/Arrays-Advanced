function bombNumbers(sequence, bomb) {
    let bombNumber = bomb[0];
    let power = bomb[1];

    for (let i = 0; i < sequence.length; i++) {
        let indexOfBomb;
        if (sequence[i] == bombNumber) {
            indexOfBomb = i;
            let startIndex = Math.max(indexOfBomb - power, 0);
            sequence.splice(indexOfBomb, power + 1);
            sequence.splice(startIndex, power);
            i = -1;
        }
    }

    let sum = 0;
    for (let i = 0; i < sequence.length; i++) {
        sum += sequence[i];
    }
    console.log(sum);
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2]
);