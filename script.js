const container = document.querySelector("#container");
const Container = document.querySelector("#container")

const ImgURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const ImgURL = "https://"
for (let i = 1; i <= 500; i++) {
	const PokeBall = document.createElement("div")

	PokeBall.classList.add("pokemon");

const ImgPoke = document.createElement("img")
ImgPoke.src = `${ImgURL}${i}.png`;

const label = document.createElement("span")
label.innerText = `#${i}`;

PokeBall.appendChild(label)
PokeBall.appendChild(ImgPoke)
Container.appendChild(PokeBall)
}