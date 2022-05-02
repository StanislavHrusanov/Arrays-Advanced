function searchForNumbers(arrOne, arrTwo) {
    let result = arrOne.splice(0, arrTwo[0]);
    result.splice(0, arrTwo[1]);
    let counter = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] == arrTwo[2]) {
            counter++;
        }
    }
    console.log(`Number ${arrTwo[2]} occurs ${counter} times.`);
}
searchForNumbers([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
);