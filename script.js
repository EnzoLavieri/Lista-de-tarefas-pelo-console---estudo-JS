// Criacao da variável tarefas, que é um array vazio. Esse array vai armazenar as tarefas que você adicionar.
let listaDeTarefas = [];

//A função adicionarTarefa recebe um parâmetro tarefa, que será uma string com a descrição da tarefa.
//A função usa o método push() para adicionar a tarefa no final do array tarefas.
//Em seguida, é exibida uma mensagem no console confirmando que a tarefa foi adicionada.
function adiconarTarefa(tarefa) {
  listaDeTarefas.push(tarefa);
  console.log(`Tarefa "${tarefa} adicionada a lista.`);
}

/*A função listarTarefas verifica se o array tarefas está vazio, 
se estiver, ela imprime uma mensagem dizendo que não há tarefas.
Se houver tarefas, ela usa o método forEach() para percorrer o 
array e imprimir cada tarefa, junto com seu número (índice + 1). */
function listarTarefas() {
  if (listaDeTarefas.length === 0) {
    console.log("Nao ha tarefas na lista.");
  } else {
    console.log("Lista de tarefas:");
    listaDeTarefas.forEach((tarefa, index) => {
      console.log(`${index + 1}. ${tarefa}`);
    });
  }
}

/*A função removerTarefa recebe um índice e verifica se ele é
válido (se está dentro do intervalo de tarefas disponíveis).
Se o índice for válido, usamos o método splice() para remover a 
tarefa correspondente ao índice (lembrando que o índice do array
começa em 0, então subtraímos 1 do índice informado).
A função imprime uma mensagem confirmando que a tarefa foi removida. */
function removerTarefa(indice) {
  if (indice < 1 || indice > listaDeTarefas.length) {
    console.log("Indice invalido");
  } else {
    let tarefaRemovida = listaDeTarefas.splice(-1, 1);
    console.log(`Tarefa ${tarefaRemovida} removida`);
  }
}

alert("Bem-vindo(a) a lista de tarefas!");
alert("Para adiconar uma nova tarefa, escreva `Adicionar`");
alert("Para Remover uma tarefa, escreva `Remover`");
alert("Para sair, escreva `Sair`");
tipoTarefa = prompt("Oque voce deseja fazer? (Adicionar | Remover | Sair)");
