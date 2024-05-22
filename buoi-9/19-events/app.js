const selectMenu = document.getElementById("selectMenu");
const output = document.getElementById("output");

selectMenu.addEventListener("change", function (event) {
    output.textContent = `You selected: ${event.target.value}`;
});
