document.querySelector('#boton-enviar-cantidad-familiares').onclick = function () {

    for (let i = 1; i <= document.querySelector('#cantidad-familiares').value; i++) {
        const $nuevoLabel = document.createElement('label');

        //Creo un div para poder manejar de manera libre a cada familiar
        const $nuevoDiv = document.createElement('div');
        $nuevoDiv.className = 'familiar';

        //$nuevoLabel.propiedad....
        $nuevoLabel.for = 'integrante' + i;
        $nuevoLabel.textContent = `Edad del familiar numero ${i}:`;
        const $nuevoInput = document.createElement('input');
        //nuevoInput.propiedad...
        $nuevoInput.className = 'edad';
        $nuevoInput.id = 'integrante' + (i);
        $nuevoInput.min = '0';
        $nuevoInput.max = '120';
        $nuevoInput.placeholder = 'Edad';
        $nuevoInput.type = 'number';


        $nuevoDiv.appendChild($nuevoLabel);
        $nuevoDiv.appendChild($nuevoInput);
        document.querySelector('#familiares').appendChild($nuevoDiv);
        document.querySelector('form').appendChild(document.createElement('br'));
    }
    document.querySelector('#boton-calcular').style.display = '';
}

document.querySelector('#boton-calcular').onclick = function () {

    let edadInputs = document.getElementsByClassName('edad');
    let edades = [];

    for (let i = 0; i < edadInputs.length; i++) {
        edades.push(parseInt(edadInputs[i].value, 10)); 
    }

    const mayorEdad = Math.max(...edades);
    const menorEdad = Math.min(...edades);

    //Algoritmo para promedio

    let promedio = 0;
    for (let i = 0; i < edades.length; i++)
    {   
    promedio += edades[i];
    }

    const promedioEdad = promedio / edades.length;

    document.querySelector('#mayor-edad').textContent = 'La mayor edad es ' + mayorEdad;
    document.querySelector('#menor-edad').textContent = 'La menor edad es ' + menorEdad;
    document.querySelector('#promedio-edad').textContent = 'El promedio de edad es ' + promedioEdad;

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

/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/


/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
