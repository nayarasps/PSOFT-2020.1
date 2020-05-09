import {geraPiada} from './createElementos.js'

let $piada = document.querySelector('#main #piada'),
    $piadaButton = document.querySelector('#main #piadaButton'),
    $resposta = document.querySelector('#main #resposta'),
    $respostaButton = document.querySelector('#main #respostaButton');


$piadaButton.addEventListener('click', function(){
    geraPiada($piada,$resposta);
    $resposta.hidden = true;
});

$respostaButton.addEventListener('click', function(){
    $resposta.hidden= false;
});