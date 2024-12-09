
//Esto agrega a la pantalla el valor del boton de la calculadora que toquemos
function addcheck(valor) {

    document.getElementById('pantalla').value += valor

}


function borrar() {

    document.getElementById('pantalla').value = ''
}

function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
    
    
}

function memoria() {

    document.getElementById('pantallaParaMemoria').value = document.getElementById('pantalla').value
}

function usarDatomemoria () {
    document.getElementById('pantalla').value += valor  = document.getElementById('pantallaParaMemoria').value;
    document.getElementById('pantallaParaMemoria').value = '';
    
}



