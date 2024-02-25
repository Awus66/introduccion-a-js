let horas = 0, minutos = 0, segundos = 0;

document.querySelector('#boton-calcular-tiempo').onclick = function () {


    horas += Number(document.querySelector('#horas').value);
    minutos += Number(document.querySelector('#minutos').value);
    segundos += Number(document.querySelector('#segundos').value);

    if (minutos >= 60) {
        horas++;
        minutos = minutos - 60;
    }
    
    if (segundos >= 60) {
        minutos++;
        segundos = segundos - 60;
    }

    document.querySelector('#contador').textContent = `${horas} horas, ${minutos} minutos, ${segundos} segundos.`;
}
