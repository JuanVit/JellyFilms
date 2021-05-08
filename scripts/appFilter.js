class selector{
    constructor(id, value){
    this.id = id;
    this.value = value;
    }
}
const selectores = [new selector(`Todos`, `todos`), new selector(`Aventura`, `aventura`), new selector(`Terror`, `terror`), new selector(`Acción`, `accion`), new selector(`Drama`, `drama`), new selector(`Comedia`, `comedia`), new selector(`Suspenso`, `suspenso`)]

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