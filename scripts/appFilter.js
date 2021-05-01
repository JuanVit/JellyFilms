class selector{
    constructor(id, value){
    this.id = id;
    this.value = value;
    }
}

const selectorUno = new selector(`Todos`, `todos`);
const selectorDos = new selector(`Aventura`, `aventura`);
const selectorTres = new selector(`Terror`, `terror`);
const selectorCuatro = new selector(`Acción`, `accion`);
const selectorCinco = new selector(`Drama`, `drama`);
const selectorSeis = new selector(`Comedia`, `comedia`);
const selectorSiete = new selector(`Suspenso`, `suspenso`);

const selectores = [selectorUno, selectorDos, selectorTres, selectorCuatro, selectorCinco, selectorSeis, selectorSiete]

const selectFiltro = document.getElementById(`genero`);

selectores.forEach((selectores) =>{
    selectFiltro.innerHTML +=`<option value="${selectores.value}">${selectores.id}</option>`
})

let filtrarGenero = () => {
    let filtro = selectFiltro.value;
    if(filtro == `todos`){
        mostrarCards(productos)
    } else{
        mostrarCards(productos.filter( el => el.genero == filtro))
    }
}