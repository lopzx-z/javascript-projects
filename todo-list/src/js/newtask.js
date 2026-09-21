/// NEWTASK
const titleInput = document.getElementById("titleInput");
const description = document.getElementById("description");
const form = document.getElementById("taskForm");
const msg = document.getElementById("msg")

// Verifica se a chave task o valor esta vazio
if (localStorage.getItem("task") == null) {
    // Cria um localStorage chamado task com o valor vazio
    localStorage.setItem("task", JSON.stringify([]));
}

function newTask() {
    // Recebe o valor que está no input
    let valorTitle = titleInput.value
    let valorDescription = description.value

    // Validação para não salvar tasks vazias
    if (valorTitle == "" || valorDescription == "") {
        msg.innerText = "Os campos não podem ser enviados vazios";
        msg.style.color = "rgb(214, 0, 0)"

    } else {
        msg.innerText = ""
        // Busca a lista existente no localStorage. Se não existir nada, cria uma lista vazia []
        let tasksave = JSON.parse(localStorage.getItem("task")) || [];

        // Cria o objeto da NOVA tarefa
        const newTasks = {
            id: Date.now(),
            title: valorTitle,
            description: valorDescription
        }

        // Adiciona a nova tarefa na lista que veio do localStorage
        tasksave.push(newTasks);

        // Salva a lista atualizada de volta no localStorage
        localStorage.setItem("task", JSON.stringify(tasksave));

        // Limpa os campos após salvar
        titleInput.value = "";
        description.value = "";
    }

}

form.addEventListener("click", (event) => {
    // Garante que a página não vai atualizar
    event.preventDefault();
    newTask()
});