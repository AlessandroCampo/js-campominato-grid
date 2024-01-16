const gridHTML = document.getElementById("grid")
const button = document.querySelector("button")
const levelHTML = document.getElementById("level")
let root = document.documentElement
let colNumberCSS

let randomNumbers = []


levelHTML.addEventListener("change", () => {
    button.addEventListener("click", () => {
        if (levelHTML.value == "medium") {
            console.log("medium")
            root.style.setProperty('--col-number', 9)
        } else if (levelHTML.value == "easy") {
            console.log("easy")
            root.style.setProperty('--col-number', 10)
        } else if (levelHTML.value == "hard") {
            console.log("hard")
            root.style.setProperty('--col-number', 7)
            console.log(getComputedStyle(root).getPropertyValue("--col-number"))
        }
        createGrid()
    })



})
button.addEventListener("click", createGrid)



function createGrid() {
    // let boxes = document.querySelectorAll(".box")
    // boxes.forEach((box) => {
    //     console.log("removed")
    //     box.remove()
    // })
    gridHTML.innerHTML = ""
    colNumberCSS = getComputedStyle(root).getPropertyValue("--col-number")

    for (let i = 0; i < colNumberCSS ** 2; i++) {
        randomizeArray()
        const box = document.createElement("div")
        box.className = "box"
        gridHTML.appendChild(box)
        let boxspan = document.createElement("span")
        box.appendChild(boxspan)
        boxspan.innerText = randomNumbers[i]
        box.addEventListener("click", (e) => {
            console.log(boxspan.innerText)
            box.classList.toggle("active")
        })

    }

}

function randomizeArray() {
    randomNumbers = []
    do {
        let randomNumber = Math.floor(Math.random() * colNumberCSS ** 2) + 1
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber)
        }
    } while (randomNumbers.length < colNumberCSS ** 2)
}



console.log(randomNumbers)