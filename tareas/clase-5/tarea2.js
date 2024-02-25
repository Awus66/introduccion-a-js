document.querySelector('#boton-saludo').onclick = function() {
    const nombreUsuario = document.querySelector('#primer-nombre-usuario').value + ' ' + document.querySelector('#segundo-nombre-usuario').value;
    //const primerNombre = document.querySelector('#primer-nombre-usuario').value;
    //const segundoNombre = document.querySelector('#segundo-nombre-usuario').value;
    const apellido = document.querySelector('#apellido-usuario').value;
    const edad = Number(document.querySelector('#edad-usuario').value);
    let $h2 = document.querySelector('#informacion-usuario');
    $h2.textContent = `${nombreUsuario} ${apellido}, ${edad} años`;
    $h2.style.display = 'block';
    document.querySelector('#saludo').textContent = `Bienvenido ${nombreUsuario}!`;

    return false;
}
