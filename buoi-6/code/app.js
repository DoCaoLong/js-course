const array = [1, 2, 3, 4];

//  1 + 2 + 3 + 4
const initialValue = [];
const sumWithInitial = array.reduce((accumulator, currentValue) => {
    return initialValue
});

console.log(sumWithInitial);