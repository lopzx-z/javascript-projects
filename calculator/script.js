const numero = document.querySelectorAll(".numero");
const operador = document.querySelectorAll(".operador");
const delet = document.getElementById("delete");
const igual = document.getElementById("igual");
const saida = document.getElementById("saida")


function soma(primeiroValor, segundoValor) {
    return primeiroValor + segundoValor;
}

function subtracao(primeiroValor, segundoValor) {
    return primeiroValor - segundoValor;
}

function multiplicacao(primeiroValor, segundoValor) {
    return primeiroValor * segundoValor;
}

function divisao(primeiroValor, segundoValor) {
    return primeiroValor / segundoValor;
}


// fora das funções para não zerar
let numeroSalvo = "";
let operadorSalvo = "";
let operadorText = "";
let igualText = "";

let primeiroValor = "";
let segundoValor = "";

function iniciarCalculadora() {

    // DIGITANDO UM NÚMERO
    numero.forEach(button => {
        button.addEventListener("click", (event) => {

            let valorClicado = String(event.target.value);

            numeroSalvo += valorClicado;

            mostrarValores()
        });
    });

    // CLICOU NO OPERADOR
    operador.forEach(button => {
        button.addEventListener("click", (event) => {

            primeiroValor = numeroSalvo;

            numeroSalvo = "";

            operadorSalvo = String(event.target.value);

            operadorText = String(event.target.textContent);

            mostrarValores()
        })
    });

    // CLICOU NO IGUAL
    igual.addEventListener("click", (event) => {

        segundoValor = numeroSalvo;

        igualText = String(event.target.textContent)

        numeroSalvo = "";

        if (operadorSalvo === "soma") return saida.textContent = soma(Number(primeiroValor), Number(segundoValor))

        if (operadorSalvo === "subtracao") return saida.textContent = subtracao(Number(primeiroValor), Number(segundoValor))

        if (operadorSalvo === "multiplicacao") return saida.textContent = multiplicacao(Number(primeiroValor), Number(segundoValor))

        if (operadorSalvo === "divisao") return saida.textContent = divisao(Number(primeiroValor), Number(segundoValor))

        mostrarValores();

    });

    // CLICOU NO DELETAR
    delet.addEventListener("click", () => {
        numeroSalvo = "";
        operadorSalvo = "";
        operadorText = "";
        igualText = "";

        primeiroValor = "";
        segundoValor = "";

        mostrarValores()
    });
}

function mostrarValores() {

    if (primeiroValor === "") {
        return saida.innerText = numeroSalvo
    } else {
        return saida.innerHTML = primeiroValor + operadorText + numeroSalvo
    }
}

iniciarCalculadora()
