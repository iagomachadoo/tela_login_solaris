'use strict'

/* definindo a largura mínima da tela */
const tamanhoWindow = window.matchMedia('(max-width: 750px)').matches

/* função construtora */
function ModificaDom(seletor, classe1){
    this.seletor = seletor
    this.classe1 = classe1
}

/* método para pegar elementos */
ModificaDom.prototype.pegarElemento = function(){
    let elemento = document.querySelector(this.seletor);

    return elemento
}

const menuNavegacao = new ModificaDom('nav')

const listaMenu = new ModificaDom('ul', 'is-flex')

const btnTema = new ModificaDom('.cabecalho__btn--tema', 'is-flex')

const cabecalhoItem = new ModificaDom('.cabecalho__item')

const cabecalhoBloco = new ModificaDom('.cabecalho__bloco')

/*  */

/* método para criar elementos */
ModificaDom.prototype.criarElemento = function(){
    let novoElemento = document.createElement(this.seletor);

    return novoElemento
}

const btnMenuMobile = new ModificaDom('cabecalho__btn--menu--mobile', 'cabecalho__btn--menu--mobile')

/*  */

/* método para criar classe */
ModificaDom.prototype.criarClasse = function(){
    this.pegarElemento().classList.toggle(this.classe1)
}

/*  */

if(tamanhoWindow){
    menuNavegacao.pegarElemento().insertBefore(btnMenuMobile.criarElemento(), listaMenu.pegarElemento())

    btnMenuMobile.criarClasse()
}

/*  */

/* add evento ao btn menu mobile */
if(btnMenuMobile.pegarElemento() !== null){
    btnMenuMobile.pegarElemento().addEventListener('click', addClasse)
}

function addClasse(){
    listaMenu.criarClasse()

    btnTema.criarClasse()

    addElemento()
}

/*  */

/* clonando um li da ul cabecalho__lista */

function clonarEl(){
    const liCabecalhoItemClonado = cabecalhoItem.pegarElemento().cloneNode(false)

    return liCabecalhoItemClonado
}

/*  */

/* add o html do btn menu mobile dentro do li clonado */

function addElemento(){
    if(listaMenu.pegarElemento().querySelector('.cabecalho__btn--tema') === null){
        const pegarHtmlBtnTema = cabecalhoBloco.pegarElemento().removeChild(btnTema.pegarElemento()).outerHTML
        
        listaMenu.pegarElemento().appendChild(clonarEl()).innerHTML = pegarHtmlBtnTema
    }
}

/*  */