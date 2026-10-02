function viewTasks() {
  const div = document.getElementById("div");

  // Pega as tarefas salvas
  const tasks = JSON.parse(localStorage.getItem("task")) || [];

  // Passa por cada tarefa
  for (let i = 0; i < tasks.length; i++) {
    // Cria um card com os dados da tarefa
    div.innerHTML += `
        <div class="card">
            <p class="title">title: ${tasks[i].title}</p>
            <p class="description">description: ${tasks[i].description}</p>

            <!-- ID da tarefa fica no value dos botões -->
            <button class="delet" value="${tasks[i].id}">Delete</button>
            <button class="edit" value="${tasks[i].id}">Edit</button>
        </div>`;
  }
}

function deleteTasks() {
  // Pega todos os botões de deletar
  const buttons = document.getElementsByClassName("delet");

  // Pega as tarefas salvas
  const tasks = JSON.parse(localStorage.getItem("task")) || [];

  // Passa por cada botão
  for (let i = 0; i < buttons.length; i++) {
    // Quando clicar em um botão
    buttons[i].addEventListener("click", (event) => {
      // Pega o ID da tarefa pelo value do botão
      const valorId = event.target.value;

      // Cria uma nova lista sem a tarefa desse ID
      const novaLista = tasks.filter((item) => item.id != valorId);

      // Salva a nova lista
      localStorage.setItem("task", JSON.stringify(novaLista));

      // Atualiza a página
      location.reload();
    });
  }
}

viewTasks();
deleteTasks();
