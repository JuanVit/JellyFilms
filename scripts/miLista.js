const miLista = [];


let agregarLista = (id) =>{
    let agregarPelicula = productos.find(el => el.id == id);
    miLista.push(agregarPelicula);
    console.log(miLista);
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
document.getElementById(`sectionTitle`).innerHTML = `<strong>Mi Lista</strong>`;
let verLista = document.getElementById(`contenedorCards`);
verLista.innerHTML = ``;
miLista.forEach ((el) => {
    verLista.innerHTML += 
    `<div class="col-12 col-md-2 cards-peliculas">
        <div class="card card-movie">
            <img src="${el.imagen}" class="img-card" alt="...">
            <div class="card-body d-flex align-items-center">
                <button type="button"  class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Quitar de Mi Lista" id= "quitarLista" onclick='quitarLista(${el.id})'><i class="fas fa-ban"></i></button>
            </div>
        </div>
    </div>` })
}
