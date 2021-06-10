const genres =  {
    "genres":[
        {
            "id":28,
            "name":"Action"
        },
        {
            "id":12,
            "name":"Adventure"
        },
        {
            "id":16,
            "name":"Animation"
        },
        {
            "id":35,
            "name":"Comedy"
        },
        {
            "id":80,
            "name":"Crime"
        },
        {
            "id":99,
            "name":"Documentary"
        },
        {
            "id":18,
            "name":"Drama"
        },
        {
            "id":10751,
            "name":"Family"
        },
        {
            "id":14,
            "name":"Fantasy"
        },
        {
            "id":36,
            "name":"History"
        },
        {
            "id":27,
            "name":"Horror"
        },
        {
            "id":10402,
            "name":"Music"
        },
        {
            "id":9648,
            "name":"Mystery"
        },
        {
            "id":10749,
            "name":"Romance"
        },
        {
            "id":878,
            "name":"Science Fiction"
        },
        {
            "id":10770,
            "name":"TV Movie"
        },
        {
            "id":53,
            "name":"Thriller"
        },
        {
            "id":10752,
            "name":"War"
        },
        {
            "id":37,
            "name":"Western"
        }
        ]
    }

const sectionPeliculas = document.getElementById('sectionPeliculas')

sectionPeliculas.addEventListener('click', () =>{
    showMovieSection()
})
const selectedGenre = []
const showMovieSection = ()  =>{
    console.log(genres)
    let carousel = document.getElementById('carousel');
    if(carousel){
        carousel.remove();
    }
    callApi(api_url)
    let genreTitle = document.getElementById('sectionTitle');
    genreTitle.classList.add('pt-5', 'mt-5');
    genreTitle.innerHTML='<div class="d-flex flex-column"><strong class="mb-4">Buscar por Género:</strong> <div id="genreSelect" class="mt-2"></div></div>'
    genres.genres.forEach(genre => {
        let aux= document.createElement('button');
        aux.classList.add('btn-filter')
        aux.innerHTML=`${genre.name}`;
        document.getElementById('genreSelect').appendChild(aux)
        aux.addEventListener('click', () =>{
            callApi(`${api_url}&with_genres=${encodeURI(genre.id)}`)
            }
        )
    });
}
