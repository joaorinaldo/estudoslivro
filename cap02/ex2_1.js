const frm = document.querySelector("Form");
const resp = document.querySelector("h3");
console.log('teste')
//ouvinte que controlar o click do botao

frm.addEventListener("submit", (e) => {
    const nome = frm.inNome.value
    resp.innerText = `Olá ${nome}`;
    e.preventDefault()
})