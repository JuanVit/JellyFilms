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
    verLista.innerHTML += `<div class="col-12 col-md-2 px-1">
    <div class="card card-movie">
        <img src="${el.imagen}" class="img-card" alt="..." height="250">
        <div class="card-body">
            <button id= "quitarLista" class="btn btn-primary" onclick='quitarLista(${el.id})'>Quitar de Mi Lista</button>
        </div>
    </div>
    </div>` })
}




