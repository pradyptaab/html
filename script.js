const container = document.querySelector("#container")
const button = document.querySelector("#changecolor")

const GenColor = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    return `rgb(${r},${g},${b})`
}

button.addEventListener("click", function(e) {
    e.stopPropagation()
    container.style.backgroundColor = GenColor()
})

container.addEventListener("click", function(e){
    container.classList.toggle('hide')
})