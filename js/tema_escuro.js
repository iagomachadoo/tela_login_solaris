'use strict'

function pegarElemento(el){
    const elemento = document.querySelector(el);
    return elemento
}

function toggleClasse(el, classe){
    el.classList.toggle(classe)
}

const btnMudarTema = pegarElemento('.cabecalho__btn--tema')

btnMudarTema.addEventListener('click', mudarTema)
btnMudarTema.addEventListener('touchstart', mudarTema)

function mudarTema(evento){
    if(evento.type === 'touchstart') {
        evento.preventDefault()
    }
    
    const body = pegarElemento('.body')

    const imgBtnLoginGoogle = pegarElemento('.conteudo__login--img')

    toggleClasse(body, 'is-black')

    if(btnMudarTema.innerText === 'modo escuro'){
        btnMudarTema.innerText = 'modo claro'

        imgBtnLoginGoogle.src = "./assets/img_ot/icones/icone_dark/google-dark.svg"

    }else{
        btnMudarTema.innerText = 'modo escuro'

        imgBtnLoginGoogle.src = "./assets/img_ot/icones/google-padrão.svg"
    }
}