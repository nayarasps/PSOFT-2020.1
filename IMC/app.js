
function calculaIMC() {
    let inputAltura = document.getElementById('altura').value / 100;
    let inputPeso = document.getElementById('peso').value; 

    let imc = inputPeso / (inputAltura ** 2);

    return imc;
}

function mostraResultado() {
    let imc = calculaIMC();
    document.getElementById('resultado').innerText = 'Seu IMC: ' + imc.toFixed(2);

    if (imc < 18.5) {
        document.getElementById('classificacao').innerText = 'Magreza';
    }

    else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('classificacao').innerText = 'Normal';
        document.getElementById('classificacao').style.color = 'green';
    }

    else if (imc >= 25 && imc <= 29.9) {
        document.getElementById('classificacao').innerText = 'Sobrepeso';
    }

    else if (imc >= 30 && imc <= 99.9) {
        document.getElementById('classificacao').innerText = 'Obesidade';
    }

    else if (imc > 40) {
        document.getElementById('classificacao').innerText = 'Obesidade Grave';
    }

    else{
        document.getElementById('classificacao').innerText = 'IMC Inválido'
    }


}