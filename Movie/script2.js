const movieDetail = document.querySelector("#movieDetail");
const movieSearch = document.querySelector("#movieSearch");

movieSearch.addEventListener("input", async (event) => {
  const movieTitle = event.target.value.trim();
  if (movieTitle.length > 0) {
    await getMovieSearch(movieTitle);
  }
});

function resetMovieDetails() {
  getMovies();
  movieSearch.value = "";
}

async function getMovies() {
  try {
    const res = await fetch("https://www.omdbapi.com/?apikey=a407a7b3&s=all");
    const data = await res.json();
    renderResult(data.Search);
  } catch (err) {
    console.log("err", err);
  }
}

getMovies();

async function getMovieSearch(title) {
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?apikey=a407a7b3&s=${title}&limit=1`
    );
    const data = await res.json();
    renderResult(data.Search);
  } catch (err) {
    console.log("err", err);
  }
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
