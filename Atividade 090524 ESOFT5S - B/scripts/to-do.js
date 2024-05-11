function adicionarTarefa() {

    let input = document.querySelector('#writeTask');
    let button = document.querySelector('#addTask');

    let listaTarefas = JSON.parse(localStorage.getItem('todoList')) || { tasks: [] };
    if (listaTarefas == null) { listaTarefas = { tasks: [] }; }

    for (let i= 0; i< listaTarefas.tasks.length; i++) {
        let a = document.createElement("p");
        a.textContent = `${i+1}. ${listaTarefas.tasks[i]}`
        document.querySelector("main").appendChild(a);
    }
            
    button.addEventListener('click', () => {
        button.style.backgroundColor = "red";
        setTimeout(() => {
            button.style.backgroundColor = "#0074d9";
        }, 100);

        let text = input.value.trim();
        
        if (text !== '') {

            listaTarefas.tasks.push(text);
            localStorage.setItem('todoList', JSON.stringify(listaTarefas));

            input.value = '';

            listaTarefas = JSON.parse(localStorage.getItem('todoList'));

            let p = document.createElement("p");
            p.textContent = `${listaTarefas.tasks.length}. ${listaTarefas.tasks[listaTarefas.tasks.length -1]}`
            document.querySelector("main").appendChild(p);
        }
    });
}