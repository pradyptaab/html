const form = document.querySelector("#search");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const KeyWord = form.elements.query.value;

  const Config = {
    params: { q: KeyWord },
  };
  const res = await axios.get(`http://api.tvmaze.com/search/shows`, Config);
  GetImages(res.data);
  forms.elements.query.vale = "";
});

const GetImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const Image = document.createElement("img");
      Image.src = result.show.image.medium;
      document.body.append(Image);
    }
  }
};
