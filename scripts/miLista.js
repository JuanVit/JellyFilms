const miLista = [];
let agregarLista = (title) =>{
    let agregarPelicula = peliculas.find(el => el.title == title);
    miLista.push(agregarPelicula);
    let btnLista = document.getElementById(`agregarMiLista(id${title})`);
    btnLista.remove();
    console.log(miLista)
}

let quitarLista = (id) =>{
    let quitarElemento = miLista.find(el => el.id == id);
    let indice = miLista.indexOf(quitarElemento);

    miLista.splice(indice, 1)
    console.log(miLista);
    verMiLista();
}

let verMiLista = () =>{
$("#carousel").remove();
$(`#genero`).remove();
let sectionTitle = document.getElementById(`sectionTitle`);
sectionTitle.classList.add(`pt-5`);
document.getElementById(`sectionTitle`).innerHTML = `<strong>Mi Lista</strong>`;
let verLista = document.getElementById(`contenedorCards`);
verLista.innerHTML = ``;
miLista.forEach ((el) => {
    verLista.innerHTML += 
    `<div class="col-12 col-md-2 cards-peliculas">
        <div class="card card-movie">
            <div class="img-container">
                <img src="${el.imagen}" alt="...">
            </div>
            <div class="card-body d-flex align-items-center">
                <button type="button"  class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Quitar de Mi Lista" id= "quitarLista" onclick='quitarLista(${el.id})'><i class="fas fa-ban"></i></button>
            </div>
        </div>
    </div>` })
}


document.getElementById(`miListaNav`).addEventListener(`click`, verMiLista);
