
let welcomeUser = () =>{
    username = localStorage.getItem(`username`);
    password = localStorage.getItem(`password`);
    if((username != null) && (password != null)){
        let userLogged = document.getElementById(`usuarioLoggeado`);
        userLogged.innerHTML = `
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle loggedButton" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-user-circle mr-2 userIconLogged"></i>
            ${username}
            </button>
            <div class="dropdown-menu loggedDropdown" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#" onclick="verMiLista()">Mi lista</a>
                <a class="dropdown-item" href="#" onclick="cerrarSesion()">Cerrar Sesión</a>
                <a class="dropdown-item" href="#">Ayuda</a>
            </div>
        </div>`}
    }
welcomeUser()   

let ingresarUsuario = () => {
    let username = document.getElementById(`inputUsuario`).value;
    let password = document.getElementById(`inputPassword`).value;
    if((username != null && password != null) && (username != `` && password != ``)){
        localStorage.setItem(`username`, username);
        localStorage.setItem(`password`, password);
        backIndex()
    } else {
        alert(`No ha ingresado los datos correctamente`)
    }
}

let backIndex = () =>{
    window.location.href = "index.html";
}

let cerrarSesion = () =>{
    localStorage.removeItem(`password`);
    localStorage.removeItem(`username`);
    location.reload();
}



