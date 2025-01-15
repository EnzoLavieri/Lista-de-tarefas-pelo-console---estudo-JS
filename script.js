// Criacao da variável tarefas, que é um array vazio. Esse array vai armazenar as tarefas que você adicionar.
let listaDeTarefas = [];

//A função adicionarTarefa recebe um parâmetro tarefa, que será uma string com a descrição da tarefa.
//A função usa o método push() para adicionar a tarefa no final do array tarefas.
//Em seguida, é exibida uma mensagem no console confirmando que a tarefa foi adicionada.
function adiconarTarefa(tarefa) {
  listaDeTarefas.push(tarefa);
  console.log(`Tarefa "${tarefa} adicionada a lista.`);
}

alert("Bem-vindo(a) a lista de tarefas!");
alert("Para adiconar uma nova tarefa, escreva `Adicionar`");
alert("Para Remover uma tarefa, escreva `Remover`");
alert("Para sair, escreva `Sair`");
tipoTarefa = prompt("Oque voce deseja fazer? (Adicionar | Remover | Sair)");
