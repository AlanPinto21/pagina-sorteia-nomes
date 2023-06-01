//SELECIONOU AS TAGS 
// INTERCEPTAR O CLIQUE NO BOTÃO 
// PEGAR AS INFORMAÇÕES QUE ESTÃO DENTRO DO CAMPO 

const btnSortear = document.querySelector(".botaosortear")
const textarea = document.querySelector("textarea")
const tagResultado = document.querySelector(".resultado p")
const popUpResultado = document.querySelector(".resultado")
const btnFechar = document.querySelector(".fechar")

//PEGANDO DADOS DO FORMULÁRIO
function pegarDadosFormulario() {
    const valorCampo = textarea.value
    const listaNomes = valorCampo.split(",")
    const tamanhoArray = listaNomes.length
    const posicaoNome = gerarNumeroAlaeatorio(tamanhoArray)
    const nome = listaNomes[posicaoNome]
    mostrarResultado(nome)

    textarea.value = ""

}

btnSortear.addEventListener("click", pegarDadosFormulario)

function gerarNumeroAlaeatorio(tamanhoArray) {
    return Math.floor(Math.random() * (tamanhoArray - 0) + 0)

}

function mostrarResultado(nome) {
    tagResultado.innerText = `PARABÉNS ${nome}`
    popUpResultado.classList.add("mostrarResultado")
}

function fecharPopUp() {
    popUpResultado.classList.remove("mostrarResultado")

}

btnFechar.addEventListener("click", fecharPopUp)