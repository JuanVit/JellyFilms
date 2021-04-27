
let login= () => {
    let username = localStorage.getItem(`username`);
    let password = localStorage.getItem(`password`);
    if(username != null && password != null){
        loggedIn(username);
    }
    else{
        ingresarUsuario()
    }
}

let ingresarUsuario = () => {
    username = prompt(`Ingrese su usuario`)
    if ((username != null) && (username != ``)) {
        localStorage.setItem(`username`, username);
        let password = prompt(`Ingrese su contraseña`);
        if ((password != null) && (password != ``)) {
            localStorage.setItem(`password`, password);
            login();
        } else{
            alert(`No ha ingresado una contraseña valida`)
        }
    } else{
        alert(`No ha ingresado un usuario válido`);
    }
}

let loggedIn = (username) =>{
    let userLogged = document.getElementById(`usuarioLoggeado`);
    userLogged.innerHTML = `<h1 class="pr-5" style="color: white; font-size: 23px">${username}</h1>`;
}
