const post = document.querySelector("#search");
post.addEventListener("submit", async (e) => {
  e.preventDefault();

  const KeyWord = form.elements.query.value;

  const Config = {
    params: { q: KeyWord },
  };

  document.querySelectorAll("img").forEach((img) => img.remove())
  const res = await axios.get(`http://api.tvmaze.com/search/shows` , Config)
  GetImages(res.data)
  form.elements.query.value = ""
});


const GetImages = (shows) => {
  for (let result of shows) {
    if(result.shows.image) {
      const img = document.createElement("img")
      img.src = result.shows.image.medium
      document.body.append("img")
    }
  }
}