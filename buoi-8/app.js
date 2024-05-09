function debounce(callback, wait) {
    let timeoutId;
    return function () {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(callback, wait);
    };
}

function log() {
    console.log("tada");
}

// log tada 5 times
const debounceLog = debounce(log, 10000);
debounceLog();
