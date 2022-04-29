'use strict'

function pegarEl(el){
    const elemento = document.querySelector(el);

    return elemento
}

const inputImg = pegarEl('.conteudo__input-img')

inputImg.addEventListener('click', trocarTipoInput)

function trocarTipoInput(){
    const inputSenha = pegarEl('.conteudo__input-senha')

    if( inputSenha.type === 'text'){
        inputSenha.type = 'password'
        inputImg.setAttribute('src', './assets/img_ot/icones/eye-slash-fill.svg')

    }else{
        inputSenha.type = 'text'
        inputImg.setAttribute('src', './assets/img_ot/icones/eye-fill.svg')
    }
}