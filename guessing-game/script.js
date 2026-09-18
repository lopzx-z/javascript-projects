const input = document.getElementById("input");
const button = document.getElementById("button");
const saida = document.getElementById("saida");
const reset = document.getElementById("reset");

let numeroAleatorio = Math.floor(Math.random() * (10 - 1 + 1)) + 1

button.addEventListener("click", () => {
    let valor = Number(input.value);
    saida.innerHTML = "";
    saida.style.color = "";

    if (input.value.trim() === "" || Number.isNaN(valor)) {
        saida.innerHTML = "Digite um número válido.";
        saida.style.color = "red";

    } else if (valor === numeroAleatorio) {
        saida.innerHTML = "Você acertou o número!"
        saida.style.color = "green";

    } else if (valor < numeroAleatorio) {
        saida.innerHTML = "Você errou, o número secreto é maior."
        saida.style.color = "orange";

    } else {
        saida.innerHTML = "Você errou, o número secreto é menor."
        saida.style.color = "orange";
    }
});

reset.addEventListener("click", () => {
    location.reload();
});