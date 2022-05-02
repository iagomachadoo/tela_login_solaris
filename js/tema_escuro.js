'use strict'

function pegarElemento(el){
    const elemento = document.querySelector(el);
    return elemento
}

/* function addClasse(el, classe){
    el.classList.add(classe)
}

function removerClasse(el, classe){
    const cabecalho = pegarElemento('.cabecalho')

    const cabecalhoContemClasseIsBlack = cabecalho.classList.contains('is-black')
    

    if(cabecalhoContemClasseIsBlack){
        el.classList.remove(classe)
    }else{
        addClasse()
    }
} */

function toggleClasse(el, classe){
    el.classList.toggle(classe)
}

const btnMudarTema = pegarElemento('.cabecalho__btn--tema')

btnMudarTema.addEventListener('click', mudarTema)

function mudarTema(){
    const cabecalho = pegarElemento('.cabecalho')

    /* const cabecalhoMarca = pegarElemento('.cabecalho__marca')

    const cabecalhoMarcaSpan = pegarElemento('.cabecalho__detalhe')

    const cabecalhoLista = pegarElemento('.cabecalho__lista')
 */
    toggleClasse(cabecalho, 'is-black')

    if(btnMudarTema.innerText === 'modo escuro'){
        btnMudarTema.innerText = 'modo claro'
        
    }else{
        btnMudarTema.innerText = 'modo escuro'
    }

    
    /*addClasse(cabecalhoMarca, 'cor-p6')
    removerClasse(cabecalhoMarca, 'cor-p6')

    
     addClasse(cabecalhoMarcaSpan, 'cor-p5')
    removerClasse(cabecalhoMarcaSpan, 'cor-p5') 

    
     addClasse(cabecalhoLista, 'cor-p6')
    removerClasse(cabecalhoLista, 'cor-p6') */
}