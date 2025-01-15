// Criacao da variável tarefas, que é um array vazio. Esse array vai armazenar as tarefas que você adicionar.
let listaDeTarefas = [];

/*A função prompt() abre uma caixa de diálogo para o usuário digitar a tarefa.
Se o usuário digitar algo (i.e., tarefa não for null nem uma string vazia), a tarefa é adicionada ao array.
Caso o usuário cancele o prompt ou não digite nada, uma mensagem é exibida no console. */
function adiconarTarefa() {
  let tarefa = prompt("Digite a tarefa que deseja adicionar:");
  if (tarefa) {
    listaDeTarefas.push(tarefa);
    console.log(`Tarefa "${tarefa}" adicionada a lista.`);
  } else {
    console.log("Voce nao escreveu uma tarefa.");
  }
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
function removerTarefa() {
  listarTarefas();
  let indice = prompt("Digite o numero da tarefa que deseja remover:");
  // Convertemos o valor digitado para um número inteiro
  indice = parseInt(indice, 10);
  if (isNaN(indice) || indice < 1 || indice > listaDeTarefas.length) {
    console.log("Indice invalido");
  } else {
    let tarefaRemovida = listaDeTarefas.splice(-1, 1);
    console.log(`Tarefa ${tarefaRemovida} removida`);
  }
}

function menu() {
  let opcao;
  do {
    opcao = prompt(
      "Escolha uma opção:\n1. Adicionar Tarefa\n2. Listar Tarefas\n3. Remover Tarefa\n4. Sair "
    );
    switch (opcao) {
      case `1`:
        adiconarTarefa();
        break;
      case `2`:
        listarTarefas();
        break;
      case `3`:
        removerTarefa();
        break;
      case `4`:
        alert("Saindo...");
        break;
      default:
        alert("Opcao invalida.");
    }
  } while (opcao !== `4`);
}

alert("Bem-vindo(a) a lista de tarefas!");
menu();
