tipoTarefa = prompt("Oque voce deseja fazer? (Adicionar | Remover)");
switch (tipoTarefa) {
  case "Adicionar":
    novaTarefa = prompt("Escreva a tarefa que deseja fazer");
    console.log(novaTarefa);
    break;
  case "Remover":
    console.log("logica de remocao");
    break;
  default:
    console.log("Opcao invalida, escreva `Adicionar` ou `Remover`");
}
