function firstAndLastKNumber(arr) {
    let k = arr.shift();
    let firstK = [];
    let lastK = [];
    for (let i = 0; i < k; i++) {
        firstK.push(arr[i]);
    }
    for (let i = arr.length - 1; i >= arr.length - k; i--) {
        lastK.unshift(arr[i]);
    }
    console.log(firstK.join(' ') + '\n' + lastK.join(' '));
}
firstAndLastKNumber([2,
    7, 8, 9]
);