function log() {
    console.log("Hello World");
}

function throttle(callback, wait) {
    let isThrottling = false;
    return function () {
        if (isThrottling) return; // 2, 3, 4 come here
        isThrottling = true; // 1 come here
        setTimeout(() => {
            callback();
            isThrottling = false;
        }, wait);
    };
}
const throttledLog = throttle(log, 2000);
// 0 -> 500
throttledLog(); // set timeout 500 --> call --> turn of flag throttle
throttledLog(); // check throttling --> ignore
throttledLog(); // check throttling --> ignore
throttledLog(); // check throttling --> ignore
// 600 --> 1100
setTimeout(throttledLog, 600); // start throttling
setTimeout(throttledLog, 600);
setTimeout(throttledLog, 600);
setTimeout(throttledLog, 600);
setTimeout(throttledLog, 700);
setTimeout(throttledLog, 700);
