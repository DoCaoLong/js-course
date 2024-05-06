function createCounter(initValue = 0) {
    let value = initValue; // private variable
    function increase() {
        value++;
    }
    function decrease() {
        value--;
    }
    function getValue() {
        return value;
    }
    return {
        getValue,
        increase,
        decrease,
    };
}

const counter = createCounter(10);
console.log(counter.increase())
console.log(counter.increase())
console.log(counter.increase())
console.log(counter.increase())
console.log(counter.increase())
console.log(counter.increase())
console.log(counter.increase())
console.log(counter.increase())
console.log(counter.increase())
console.log(counter.increase())
console.log(counter.getValue());


// counter.increase();
// counter.increase();
// counter.getValue(); // 2
// counter.decrease();
// counter.getValue(); // 1
// console.log(counter.value); // undefined
