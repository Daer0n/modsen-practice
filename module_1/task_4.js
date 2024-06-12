const sumOfFirstHalf = (arr) => {
    const halfLength = Math.ceil(arr.length / 2);
    const reduceArr = arr.slice(0, halfLength);
    const sum = reduceArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    return sum;
};

const numbers = [1, 2, 4, 5, 5];
console.log(sumOfFirstHalf(numbers)); // 7
