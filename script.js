const container = document.querySelector("#container")

const IMGurl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

for (let i=1; i<=500; i++) {

    const PokeBAll = document.createElement("div")
    PokeBAll.classList.add("pokemon")

    const PokeIMG = document.createElement("img")
    PokeIMG.src = `${IMGurl}${i}.png`

    const label = document.createElement("span")
    label.innerText = `#${i}`

    PokeBAll.appendChild(label)
    PokeBAll.appendChild(PokeIMG)
    container.appendChild(PokeBAll)
}