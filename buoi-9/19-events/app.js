const btn = document.querySelector(".btn")

if (btn) {
    function handleClick() {
        alert("thank you! :P");
    }
}

btn.addEventListener("click", handleClick);

let handleClick = () => {
    alert("Minh")
    console.log("ok")
}

var handleClick2 = function() {
        alert("Minh");
}

//  (function () {
//      alert("Minh");
//  })();



// btn.removeEventListener("click", handleClick);
