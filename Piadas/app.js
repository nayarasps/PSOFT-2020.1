import {piada, getData} from './geraPiada.js'

let $piadaParagrafo = document.querySelector('#main #piada'),
    $piadaButton = document.querySelector('#main #proximaPiada');

function geraPiada(){
    getData();
    $piadaParagrafo.innerText = piada;
}

$piadaButton.addEventListener('click', function(){
    geraPiada();
});

setTimeout(function(){geraPiada();}, 100);