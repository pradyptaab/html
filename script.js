const container = document.querySelector("#container")
const IMGURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for (let i = 1; i <= 500; i++) {
    const PokeBall = document.createElement("div")
    PokeBall.classList.add("pokemon")

    const PokeIMG = document.createElement("img")
    PokeIMG.src = `${IMGURL}${i}.png`

    const label = document.createElement("span")
    label.innerText = `#${i}`

    PokeBall.appendChild(label)
    PokeBall.appendChild(PokeIMG)
    container.appendChild(PokeBall)
}