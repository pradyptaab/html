// const button = document.querySelector("#click")

// button.onclick = () => {
//     console.log("hello")
// }

// const scream = () => {
//     console.log("yatim")
// }
const eventBtn = document.querySelector("#eventbtn")
eventBtn.addEventListener("click", stepSatu)
eventBtn.addEventListener("click", stepDua)


function stepSatu  (){
console.log("Hello")
}

function stepDua () {
    console.log("world")
}
// eventbtn.onclick = stepSatu
// eventbtn.onclick = stepDua
