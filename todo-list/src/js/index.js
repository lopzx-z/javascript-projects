function viewTasks() {
  // Pega as tarefas salvas
  const tasks = JSON.parse(localStorage.getItem("task")) || [];

  const view = document.getElementById("view");

  // Passa por cada tarefa
  for (let i = 0; i < tasks.length; i++) {
    // Cria um card com os dados da tarefa
    view.innerHTML += `
        <div class="card">
            <p class="title">${tasks[i].title}</p>
            <p class="description">Descrição: ${tasks[i].description}</p>

            <!-- ID da tarefa fica no value dos botões -->
            <div class="flexButtons">
              <button class="delet" value="${tasks[i].id}">Delete</button>
              <button class="edit" value="${tasks[i].id}">Edit</button>
            </div>
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

function editTasks() {
  const edit = document.getElementById("edit");
  const view = document.getElementById("view");

  // Pega todos os botões de edit
  const buttons = document.getElementsByClassName("edit");

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (event) => {
      let task = JSON.parse(localStorage.getItem("task"));

      view.style.display = "none";

      edit.innerHTML = `
      <div class="editArea">
      
        <label>Novo Título:</label>
        <input type="text" id="title" class="inputEdit" placeholder="ex: jogar bola">

        <label>Nova Descrição:</label>
        <input type="text" id="description" class="inputEdit" placeholder="ex: levar camisa de time">

          <button type="submit" id="button">Editar</button>
      </div>
        `;

      const button = document.getElementById("button");

      button.addEventListener("click", (event) => {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;

        task[i].title = title;
        task[i].description = description;

        localStorage.setItem("task", JSON.stringify(task));

        location.reload();
      });
    });
  }
}

viewTasks();
deleteTasks();
editTasks();
