function firstAndLastKNumber(arr) {
    let k = arr.shift();
    let firstK = arr.slice(0, k);
    let lastK = arr.slice(arr.length - k, arr.length);

    console.log(firstK.join(' ') + '\n' + lastK.join(' '));
}
firstAndLastKNumber([3,
    6, 7, 8, 9, 2, 1]

);