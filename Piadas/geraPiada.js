export let piada;

export async function getData(){
    fetch('https://raw.githubusercontent.com/nayarasps/PSOFT-2020.1/master/Piadas/piadas.json')
    .then(response => response.json())
    .then(data => piada = piadaAleatoria(data.piadas))
    .catch(erro => console.error('Falha em conseguir informações', erro))
}

function piadaAleatoria(piadas) {
    let index = Math.floor(Math.random() * piadas.length);
    return piadas[index].piada;
}

getData();
