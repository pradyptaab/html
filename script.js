const Button = document.querySelector("#clickme")

const Heading = document.querySelector("h1")

Button.addEventListener("click", () => {
	const NewColor = generateRandomColor();
	document.body.style.backgroundColor = NewColor
	Heading.innerText =NewColor
})

const generateRandomColor = () => {
	const r = Math.floor(Math.random() * 255)
	const g = Math.floor(Math.random() * 255)
	const b = Math.floor(Math.random() * 255)

	return  `rgb(${r}, ${g}, ${b})`
}