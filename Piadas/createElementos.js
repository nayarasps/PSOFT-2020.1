import {getData, piada, resposta} from './geraPiada.js'

export function geraPiada(piadaP, respostaP){
    getData();
    piadaP.innerHTML = piada;
    respostaP.innerHTML = resposta;
}

