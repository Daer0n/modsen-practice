const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }

    return arr;
};

const numbers = [12, 5, 2, 4, 10, 1];
console.log(bubbleSort(numbers)); // [ 1, 2, 4, 5, 10, 12 ]
