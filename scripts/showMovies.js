const api_key = `api_key=5cec20904392ae99eaf77cb7c2a572e5`;
const base_url = `https://api.themoviedb.org/3`;
const api_url = `${base_url}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&${api_key}`;
const img_url = `https://image.tmdb.org/t/p/w300`;
const search_url = `${base_url}/search/movie?${api_key}`
const showCards = document.getElementById(`contenedorCards`);
const peliculas = [];
const formSearch = document.getElementById(`formSearch`)
const search = document.getElementById(`search`)

console.log(search.value)
const callApi = (url) =>{
    fetch(url).then(res => res.json()).then(data =>{
        showMovies (data.results);
    })
}

callApi(api_url)


const showMovies = (data) => {
    showCards.innerHTML =``;
    data.forEach(movie => {
        peliculas.push()
        const {title, poster_path, realese_date, adult, original_lenguage} = movie;
        showCards.innerHTML+= `
			<div class="col-12 col-md-3 col-lg-2 cards-peliculas">
				<div class="card card-movie">
					<div class="img-container">
						<img src=${img_url}${poster_path} class="img-card" alt=${title} >
					</div>
					<div class="card-body d-flex flex-column  align-items-center">
						<p class="movieTitle my-0">${title}</p>
						<button type="button" class="btn btn-primary"><i class="fas fa-play-circle"></i></button>
						<button type="button" class="btn btn-primary" id=agregarMiLista(id${title}) onclick='agregarLista(${movie.title})'><i class="fas fa-plus-circle"></i></i></button>
						
					</div>
				</div>
				</div>`
    });
}

formSearch.addEventListener('submit', (e)=>{
    e.preventDefault();

    const searchKey = search.value
    if(searchKey !== null & searchKey !== ``){
        callApi(`${search_url}&query=${searchKey}`)
    }   else{
        callApi(api_url)
    }
    
})


