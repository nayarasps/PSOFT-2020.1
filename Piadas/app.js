import {getData, piada} from './geraPiada.js'

let $piada = document.querySelector('#main #piada'),
    $piadaButton = document.querySelector('#main #proximaPiada'),



function geraPiada(piada){
    getData();
    piadaP.innerHTML = piada;
}

$piadaButton.addEventListener('click', function(){
    geraPiada($piada);
});
