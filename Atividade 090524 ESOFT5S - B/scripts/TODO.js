window.onload = function () {
    let inputTitulo = document.querySelector('#tituloTarefa');
    let inputDescricao = document.querySelector('#descricao-tarefa');
    let button = document.querySelector('#addTask');

    // Carregar tarefas existentes do localStorage ao carregar a pÃ¡gina
    let listaTarefas = JSON.parse(localStorage.getItem('TODO')) || { tasks: [] };
    for (let i = 0; i < listaTarefas.tasks.length; i++) {
        let a = document.createElement("p");
        a.innerHTML = `${i + 1}. titulo: <strong> ${listaTarefas.tasks[i].titulo} </strong> - descricao: ${listaTarefas.tasks[i].descricao} `
        document.querySelector("main").appendChild(a);
    }

    button.addEventListener('click', () => {
        let titulo = inputTitulo.value.trim();
        let descricao = inputDescricao.value.trim();

        if (titulo !== '' && descricao !== '') {
            let exists = listaTarefas.tasks.some(task => task.titulo === titulo && task.descricao === descricao);
            if (exists) {
                alert('Esta tarefa jÃ¡ existe!');
                return;
            }

            // Adicionar a tarefa Ã  lista de tarefas
            listaTarefas.tasks.push({ titulo: titulo, descricao: descricao });
            localStorage.setItem('TODO', JSON.stringify(listaTarefas));

            // Limpar os inputs
            inputTitulo.value = '';
            inputDescricao.value = '';

            // Atualizar a lista de tarefas na pÃ¡gina
            //primeiro remove todos os elementos p
            let pElements = document.querySelectorAll("p");
            pElements.forEach((p) => {
                p.parentNode.removeChild(p);
            });
            //depois adiciona a lista de tarefas atualizada
            for (let i = 0; i < listaTarefas.tasks.length; i++) {
                let a = document.createElement("p");
                a.innerHTML = `${i + 1}. Titulo: <strong> ${listaTarefas.tasks[i].titulo} </strong> - descricao: ${listaTarefas.tasks[i].descricao} `
                document.querySelector("main").appendChild(a);
            }
        }
    });
}
