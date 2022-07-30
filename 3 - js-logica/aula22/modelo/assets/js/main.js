const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');


function criaLista(){
    const li = document.createElement('li');
    return li;
};
function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
};
function criaTarefa(textInput){
    const li = criaLista();
    li.innerHTML = textInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
};
function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
};
function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    localStorage.setItem('tarefas', JSON.stringify(listaDeTarefas));

};
function adicionaTarefas(){
    const tarefas = localStorage.getItem('tarefas');
    if (tarefas) {
        const listaDeTarefas = JSON.parse(tarefas);
        for (let tarefa of listaDeTarefas) {
            criaTarefa(tarefa);
        }
    }
};
inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});
btnTarefa.addEventListener('click', function(){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});
document.addEventListener('click', function(e){
    if(e.target.classList.contains('apagar')){
        e.target.parentElement.remove();
        salvarTarefas();
    }
});  

adicionaTarefas();