let btn = document.getElementById("greetBtn")
let input = document.getElementById("nameInput")
let greeting = document.getElementById("greeting")

btn.addEventListener("click", function () {
    let name = input.value
    if (name !== "") {
        greeting.textContent = "Hello, " + name
    } else {
        greeting.textContent = "Hello"
    }
})

let boxes = document.querySelectorAll(".box")

boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        box.style.backgroundColor = box.textContent
        box.style.color = "white"
    })
})