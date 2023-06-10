const Form = document.querySelector("#search")

Form.addEventListener("submit", async(e)  => {
  e.preventDefault()
  const KeyWord = Form.elements.query.value
  const Config = {params : 
    {q : KeyWord}}

    document.querySelectorAll("img").forEach((img) => img.remove())

    const res = await axios.get(`http://api.tvmaze.com/search/shows` , Config)
    GetImages(res.data)
    Form.elements.query.value = ""
})

const GetImages = (shows) => {
  for (let result of shows) {
    if(result.show.image) {
      const img = document.createElement("img")
      img.src = result.show.image.medium
      document.body.append(img)
    }
  }
}