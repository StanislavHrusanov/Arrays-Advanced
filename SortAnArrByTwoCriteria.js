function sortAnArrByTwoCriteria(arr) {
    arr.sort();
    arr.sort(function (a, b) {
        return a.length - b.length
    });
    console.log(arr.join('\n'));
}
sortAnArrByTwoCriteria(['test',
    'Deny',
    'omen',
    'Default']);