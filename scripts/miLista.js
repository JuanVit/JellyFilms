const miLista = [];
let agregarLista = (id) =>{
    let agregarPelicula = peliculas.find(el => el.id == id);
    miLista.push(agregarPelicula);
    let btnLista = document.getElementById(`agregarMiLista(${id})`);
    btnLista.remove();
}

let quitarLista = (id) =>{
    let quitarElemento = miLista.find(el => el.id == id);
    let indice = miLista.indexOf(quitarElemento);

    miLista.splice(indice, 1)
    console.log(miLista);
    verMiLista();
}

let verMiLista = () =>{
$("#carousel").hide();
let sectionTitle = document.getElementById('sectionTitle');
sectionTitle.classList.add('pt-5');
sectionTitle.classList.add('mt-5');
document.getElementById(`sectionTitle`).innerHTML = `<strong>Mi Lista</strong>`;
let verLista = document.getElementById(`contenedorCards`);
verLista.innerHTML = ``;
miLista.forEach ((el) => {
    let dateArray = el.release_date.split("");
    let date= (dateArray.splice(0, 4)).join(``)
    let plotArray = el.overview.split(" ");
    let plot= (plotArray.splice(0, 15)).join(` `)
    verLista.innerHTML += 
    `<div class="col-12 col-md-2 cards-peliculas">
        <div class="card card-movie">
            <div class="img-container">
                <img src="${img_url}${el.poster_path}" alt="...">
            </div>
            <div class="card-body d-flex flex-column">
                <strong class="movieTitle my-0">${el.title}</strong>
                <p class="mb-0">${date}</p>
                <p class="age mb-0">${age(el.adult)}</p>
                <p class="hd">HD</p>
                <p class="movie-plot">${plot} ...</p>
                <button type="button"  class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Quitar de Mi Lista" id= "quitarLista" onclick='quitarLista(${el.id})'><i class="fas fa-ban"></i> Quitar de Mi Lista</button>
            </div>
        </div>
    </div>` })
}


document.getElementById(`miListaNav`).addEventListener(`click`, verMiLista);
