const movieDetail = document.querySelector("#movieDetail");
const movieSearch = document.querySelector("#movieSearch");

movieSearch.addEventListener("keydown", (event) => {
  const movieTitle = event.target.value; //this.value
  if (event.key === "Enter") {
    getMovieSearch(movieTitle);
    event.target.value = ""; //this.value = "";
  }
});

function getMovies() {
  const myPromises = fetch("https://www.omdbapi.com/?apikey=a407a7b3&s=all");

  myPromises
    .then((res) => res.json())
    .then((data) => {
      renderResult(data.Search);
    })
    .catch((err) => {
      console.log("err", err);
    });
}

getMovies();

function getMovieSearch(title) {
  const myPromises = fetch(
    `http://www.omdbapi.com/?apikey=a407a7b3&s=${title}&limit=1`
  );

  myPromises
    .then((res) => {
      const dataPromises = res.json();
      return dataPromises;
    })
    .then((data) => {
      renderResult(data.Search);
    })
    .catch((err) => {
      console.log("err", err);
    });
}

function renderResult(movies) {
  console.log(movies);

  movieDetail.innerHTML = movies
    ?.map(
      (movie) => `<div class="d-flex gap-5 my-5 border shadow">
      <img width="400" height="300" style="object-fit: cover"  src="${movie.Poster}" />
  
      <div class="p-5">
      <h1>${movie.Title}</h1>
      <h2>${movie.Type}</h2>
      <h2>${movie.Year}</h2>
      </div>
    </div>`
    )
    .join("");
}
