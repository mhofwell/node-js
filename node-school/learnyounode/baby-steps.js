function tallyArray(num, currTotal) {
        return num + currTotal;
}

const array = process.argv
        .splice(2)
        .map(item => Number(item))
        .reduce(tallyArray, 0);

console.log(array);
