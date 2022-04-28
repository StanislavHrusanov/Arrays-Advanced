function lastKNumbersSequence(n, k) {
    let sequence = [1];

    for (let i = 1; i < n; i++) {
        let kSumArr = [];
        if (sequence.length < k) {
            kSumArr = sequence.slice(0, sequence.length);
        } else {
            kSumArr = sequence.slice(sequence.length - k, sequence.length);
        }
        let sum = kSumArr.reduce((a, b) => a + b);
        sequence.push(sum);
    }
    console.log(sequence.join(' '));
}

lastKNumbersSequence(8, 2);