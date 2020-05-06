let song,
    currentSong,
    indice,
    count = 1,
    $inputResultado = document.getElementById('resposta'),
    $outputResultado = document.getElementById('resultado'),
    $primeiraDica = document.getElementById('dica1'),
    $main = document.getElementById('main'),
    $regras = document.getElementById('regras'),
    $buttonSubmit = document.getElementById('submit'),
    $buttonDica = document.getElementById('gerarDicas'),
    $marcaPontos = document.getElementById('pontos'),
    $divDicas = document.getElementById('dicas');

function getData(){
    fetch('https://raw.githubusercontent.com/nayarasps/PSOFT-2020.1/master/GuessSong/songs.json')
    .then(response => response.json())
    .then(data => {
        song = data;
        geraInformacaoInicial();
    })
    .catch(erro => console.error('Falha em conseguir informações', erro))
}

function geraInformacaoInicial() {
    indice = Math.floor(Math.random() * song.songs.length);
    currentSong = song.songs[indice];
    $primeiraDica.innerText = '\"' + currentSong.trechos[0] + '\"';
}

function geraDica() {
    if (count >= currentSong.trechos.length) {
        alert('Dicas Esgotadas!');
    }
    else {
        count += 1;
        var novaDica = (document.createElement('p'));
        $divDicas.appendChild(novaDica);
        novaDica.innerText = '\"' + currentSong.trechos[count - 1] + '\"';
        $marcaPontos.textContent = Number($marcaPontos.textContent) - 1;
    }
}

function verificaResposta() {
    if (song.songs.length < 1) {
        alert('Você Ganhou! Sua pontuação é : ' + Number($marcaPontos.textContent));
    }
    if ($inputResultado.value.toLowerCase().trim() == currentSong.titulo.toLowerCase().trim()) {
        $outputResultado.innerText = 'CORRETO!';
        $marcaPontos.textContent = Number($marcaPontos.textContent) + 5;
        song.songs.splice(indice,1);
        setTimeout(function(){reiniciaJogo();},1100);
    }
    else {
        $outputResultado.innerText = 'INCORRETO!';
    }

}

function deleteDicas() {
    var child = $divDicas.lastElementChild;
    while(child){
        $divDicas.removeChild(child);
        child = $divDicas.lastElementChild;
    }
}

function mudarMenu() {
    document.getElementById('main').hidden = false;
    document.getElementById('regras').hidden = true;
}

function reiniciaJogo() {
    $inputResultado.value = '';
    count = 1;
    $outputResultado.innerText = '';
    deleteDicas();
    geraInformacaoInicial();
}


$buttonSubmit.addEventListener('click', function() {
    verificaResposta();
});

$inputResultado.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        $buttonSubmit.click();
    }
})

$buttonDica.addEventListener('click', function() {
    geraDica()
})

getData();