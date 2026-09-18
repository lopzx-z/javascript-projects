const meuInput = document.getElementById("input");
const button = document.getElementById("button");
const saida = document.getElementById("saida");

button.addEventListener("click", () => {
    let valor = Number(meuInput.value);

    saida.innerHTML = "";
    saida.style.color = "";

    if (meuInput.value === "" || Number.isNaN(valor)) {
        saida.innerText = "Digite um número válido";
        saida.style.color = "red";

    } else {
        for (let i = 1; i <= 10; i++) {
            saida.innerHTML += `${valor} x ${i} = ${valor * i} <br>`
        }

    }

});
