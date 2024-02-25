document.querySelector('#boton-agregar').onclick = function () {

    //Creo un div para poder manejar de manera libre a cada familiar
    const $nuevoDiv = document.createElement('div');
    $nuevoDiv.className = 'familiar';

    //$nuevoLabel.propiedad....
    const $nuevoLabel = document.createElement('label');
    index = (document.getElementsByClassName('familiar').length)
    $nuevoLabel.for = 'integrante' + index;
    $nuevoLabel.textContent = `Sueldo del familiar numero ${index}:`;

    //nuevoInput.propiedad...
    const $nuevoInput = document.createElement('input');
    $nuevoInput.className = 'sueldo';
    $nuevoInput.id = 'integrante' + (index);
    $nuevoInput.min = '1';
    $nuevoInput.placeholder = 'Sueldo';
    $nuevoInput.type = 'number';


        $nuevoDiv.appendChild($nuevoLabel);
        $nuevoDiv.appendChild($nuevoInput);
        document.querySelector('#familiares').appendChild($nuevoDiv);
        document.querySelector('form').appendChild(document.createElement('br'));
    
    document.querySelector('#boton-calcular').style.display = '';
}

document.querySelector('#boton-quitar').onclick = function () {
    //Quito el último miembro familiar de la lista
    const $familiares = document.querySelectorAll('.familiar');
    const index = document.getElementsByClassName('familiar').length - 1;
    $familiares[index].remove();

    //Evaluo si quedaron integrantes o no para esconder el boton de calcular
    if (document.getElementsByClassName('familiar').length === 0){  
        document.querySelector('#boton-calcular').style.display = 'none';
    }

}

document.querySelector('#boton-calcular').onclick = function () {

    let sueldosInputs = document.getElementsByClassName('sueldo');
    let sueldos = [];

    for (let i = 0; i < sueldosInputs.length; i++) {
        if(parseInt(sueldosInputs[i].value, 10) > 0){
            sueldos.push(parseInt(sueldosInputs[i].value, 10)); 
        }
    }

    const mayorSueldo = Math.max(...sueldos);
    const menorSueldo = Math.min(...sueldos);

    //Algoritmo para promedio

    let promedio = 0;
    for (let i = 0; i < sueldos.length; i++)
    {
        promedio += sueldos[i];
    }

    const promedioSueldo = promedio / sueldos.length;

    document.querySelector('#mayor-sueldo').textContent = 'El mayor sueldo es ' + mayorSueldo;
    document.querySelector('#menor-sueldo').textContent = 'El menor sueldo es ' + menorSueldo;
    document.querySelector('#promedio-sueldo').textContent = 'El promedio de sueldo es ' + promedioSueldo;

    document.querySelector('#resultados').style.display = '';   
}

document.querySelector('#boton-resetear').onclick = resetear;

function limpiarFamiliares(){
    //Borrar familiares anteriores
    const $familiares = document.querySelectorAll('.familiar');
    for (let i = 0; i < $familiares.length; i++) {
      $familiares[i].remove();
    }
};

function ocultarBotonCalculo(){
    document.querySelector('#boton-calcular').style.display = 'none';
}

function ocultarResultados(){
    document.querySelector('#resultados').style.display = 'none';
}

function resetear(){
    limpiarFamiliares();
    ocultarBotonCalculo();
    ocultarResultados();
}
