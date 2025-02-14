// Elaboar um programa para um cinema que leia o titulo e a duração de um filme em minutos. Exiba o titulo do filme e converta a duração para horas e minutos. 

const frm = document.querySelector("#formFilme")
const nomeFilme = document.querySelector("#tituloDoFilme")
const duracaoConvertida = document.querySelector("#tempoDoFilme")
console.log(frm)


frm.addEventListener("submit", (e) => {
    const titulo = frm.inTitulo.value
    const duracao = Number(frm.inDuracao.value)
    console.log({titulo, duracao})

    const resultado = converteMinutosemHoraeMinutos(duracao);

    nomeFilme.innerText = titulo
    duracaoConvertida.innerText = `O filme tem ${resultado.horas} horas e ${resultado.minutos} minutos`

    e.preventDefault(e)
})

function converteMinutosemHoraeMinutos(qtdminutos) {
    const horas = Math.floor(qtdminutos / 60)
    const minutos = qtdminutos % 60
    return {minutos, horas}
}


console.log(converteMinutosemHoraeMinutos(100))