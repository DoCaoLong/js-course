function map(arr) {
    let mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        newItem = arr[i] / 2
        mappedArray.push(newItem);
    }
    return mappedArray;
}

let numbers = [2, 6, 10, 4, 5];
console.log(map(numbers)); // Kết quả: [1, 4, 9, 16, 25]