const form = document.getElementById('form-tarefa');
const listaTarefa = document.getElementById('divTarefa');

form.onsubmit = function(e) {
    e.preventDefault();
    const inputTarefa = document.getElementById('inputTarefa');
    addTarefa(inputTarefa.value);
    form.reset();
};

function addTarefa(nome) {
    const div = document.createElement('div');
    const novaTarefa = document.createElement('input');
    const labelTarefa = document.createElement('label');
    const descricaoTarefa = document.createTextNode(nome);

    novaTarefa.setAttribute('type', 'checkbox');
    novaTarefa.setAttribute('name', nome);
    novaTarefa.setAttribute('id', nome);

    labelTarefa.setAttribute('for', nome);
    labelTarefa.appendChild(descricaoTarefa);

    div.classList.add('t');
    div.appendChild(novaTarefa);
    div.appendChild(labelTarefa);

    listaTarefa.appendChild(div);
}