
function calculaIMC() {
    let $inputAltura = document.getElementById('altura').value / 100;
    let $inputPeso = document.getElementById('peso').value; 

    let imc = $inputPeso / ($inputAltura ** 2);
    
    return imc;
}

function mostraResultado() {
    let imc = calculaIMC().toFixed(1);
    
    document.getElementById('resultado').innerText = 'Seu IMC: ' + imc;

    if (imc < 18.5) {
        document.getElementById('classificacao').innerText = 'Magreza';
        document.getElementById('classificacao').style.color = 'red';
    }

    else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('classificacao').innerText = 'Normal';
        document.getElementById('classificacao').style.color = 'green';
    }

    else if (imc >= 25 && imc <= 29.9) {
        document.getElementById('classificacao').innerText = 'Sobrepeso';
        document.getElementById('classificacao').style.color = 'red';
    }

    else if (imc >= 30 && imc <= 99.9) {
        document.getElementById('classificacao').innerText = 'Obesidade';
        document.getElementById('classificacao').style.color = 'red';
    }

    else if (imc > 40) {
        document.getElementById('classificacao').innerText = 'Obesidade Grave';
        document.getElementById('classificacao').style.color = 'red';
    }

    else{
        document.getElementById('classificacao').innerText = 'IMC Inválido'
        document.getElementById('classificacao').style.color = 'red';
    }


}