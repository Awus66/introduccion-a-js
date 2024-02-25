//TAREA: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

let listaNumeros = document.querySelectorAll('#lista-numeros li');
let numeros = [];

//Declaro el array de números para que su valor sea el textContent de cada <li> (o sea, nada mas la parte donde está el número)
for (let i = 0; i < listaNumeros.length; i++)
{
    numeros[i] = Number(listaNumeros[i].textContent);
}

//Declaración de variables
let promedio = 0, numeroMasPequeño = numeros[0], numeroMasGrande = numeros[0], numeroMasFrecuente = [];


//Algoritmo para promedio
for (let i = 0; i < numeros.length; i++)
{
    promedio += numeros [i];
}

promedio = promedio / numeros.length;

//Algoritmos para numero mas grande y numero mas pequeño
for (let i = 0; i < numeros.length; i++)
{
    if (numeros[i] > numeroMasGrande)
    {  
        numeroMasGrande = numeros[i];
    }
}

for (let i = 0; i < numeros.length; i++)
{
    if (numeros[i] < numeroMasPequeño)
    {  
        numeroMasPequeño = numeros[i];
    }
}

//Establezco el valor de los contadores a 0
let contadorNumeros = [];

for (let i = 0; i < numeros.length; i++)
{
    contadorNumeros[i] = 0;
}

//Algoritmo para evaluar la frecuencia máxima
let maxFrecuencia = 0;

for (let i = 0; i < numeros.length; i++)
{
    for (let j = 0; j < numeros.length; j++)
    {
        if (numeros[i] == numeros[j])
        {
            contadorNumeros[i]++;
        }
    }

    if (contadorNumeros[i] > maxFrecuencia)
    {
        maxFrecuencia = contadorNumeros[i];
    }
}

//Utilizo numeroMasFrecuente como un array para evaluar el caso en el que haya al menos dos números que tengan la misma frecuencia
for (let i = 0; i < numeros.length; i++)
{
    if (contadorNumeros[i] == maxFrecuencia)
    {
        numeroMasFrecuente.push(numeros[i]);
    }
}

//Creo un set para eliminar duplicados
numeroMasFrecuente = [...new Set(numeroMasFrecuente)];

document.querySelector('#promedio').textContent = 'El promedio es ' + promedio;
document.querySelector('#numero-mas-pequeño').textContent = 'El número más pequeño es ' + numeroMasPequeño;
document.querySelector('#numero-mas-grande').textContent = 'El número más grande es ' + numeroMasGrande;
document.querySelector('#numero-mas-frecuente').textContent = 'El número más frecuente es ' + numeroMasFrecuente;
