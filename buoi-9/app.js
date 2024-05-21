const app = document.querySelector("#app")

const container = document.createElement("div")
container.className = "grid"
container.style.display = "grid"
container.style.gridTemplateColumns = "repeat(5, 1fr)"
container.style.height = "100px"
container.style.width = "100%"
container.style.backgroundColor = "aqua"

const item = document.createElement("div")

item.className = "item"
item.style.height = "100%"
item.style.width = "100%"
item.style.backgroundColor = "red"
item.style.display = "flex"
item.style.alignItems = "center"
item.style.justifyContent = "center"

app.appendChild(container)
container.appendChild(item)
item.addEventListener("click", function () {
    item.style.backgroundColor = "green"
})

item.textContent = "Long"