// Elaborar um programa para uma revenda de veículos. O programa deve ler modelo e preço do veículo. Apresentar como resposta o valor da entrada (50%) e o saldo em 12x. 

const form = document.querySelector("#formCalculadora")
const respostas = document.querySelector("#respostas")
const resVeiculo = respostas.querySelector("#saidaNomeVeiculo")
const resValor = respostas.querySelector("#saidaValor")
const resParcela = respostas.querySelector("#saidaParcela")
let valorPorcentagem = ""
let valorParcela = ""
let modeloDoVeiculo = ""
let precoVeiculo = ""

form.addEventListener("submit", (e) => {
    precoVeiculo = form.inPreco.value
    

    valorPorcentagem = calculaPorcentagem(precoVeiculo)
    valorParcela = calculaParcela(precoVeiculo, 12)
    modeloDoVeiculo = form.inVeiculo.value

    // preenchendo as repostas 

    resVeiculo.innerText = `SUPER PROMOÇÃO: ${modeloDoVeiculo}`
    resValor.innerText = `E 12 pequenas parcelinhas de: ${valorParcela.toFixed(2)}`
    resParcela.innerText = `Uma pequena entrada de apenas: ${valorPorcentagem}`
    e.preventDefault()
}) 




function calculaPorcentagem(valor) {
    return valor / 2 
}

function calculaParcela(valor, qtdeParcelas) {
    return (valor/2) / qtdeParcelas;
}




console.log(form)
