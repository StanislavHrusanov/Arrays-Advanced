function sorting(arr) {
    arr.sort((a, b) => b - a);
    let result = [];
    while (arr.length > 0) {
        let biggest = arr.shift();
        let smallest = arr.pop();
        result.push(biggest);
        result.push(smallest);
    }
    console.log(result.join(' '));
}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);