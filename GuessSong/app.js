let positionSong = Math.floor(Math.random() * 16);
let count = 1;

function getData(){
    fetch('https://raw.githubusercontent.com/nayarasps/PSOFT-2020.1/master/GuessSong/songs.json')
    .then(response => response.json())
    .then(data => iniciaJogo(data.songs[positionSong]))
    .catch(err => console.error('Falha em conseguir informações', err))
}

function mostrarDicas(data) {
    console.log('opa');
    count += 1;
    let dicas = data.trechos;

    if (count > data.trechos.length) {
        alert('Dicas Esgotadas!');
    }
    else {
        let novaDica = document.createElement('p');
        document.getElementById('dicas').appendChild(novaDica);
        novaDica.innerText = "\"" + dicas[count-1] + "\""
    }
}

function verificaResposta(resposta) {
    let chute = document.getElementById('resposta').value;
    resposta = resposta.toLowerCase().trim();
    chute = chute.toLowerCase().trim();
    let result = document.getElementById('resultado');
    result.hidden = false;

    if (resposta == chute){
        result.innerText = 'Correto';
        document.getElementById('submit').hidden = true;
        document.getElementById('gerarDicas').hidden = true;
    }
    else {
        result.innerText = 'Incorreto';
    }
}

function iniciaJogo(data){
    document.getElementById('main').hidden = false;
    document.getElementById('regras').hidden = true;
    
    let musica = data.titulo;

    document.getElementById('dica1').innerText = "\"" + data.trechos[0] + "\"";
    
    document.getElementById('gerarDicas').addEventListener("click", function() {
        mostrarDicas(data);
    });

    document.getElementById('submit').addEventListener("click", function() {
        verificaResposta(musica);
    });

}

