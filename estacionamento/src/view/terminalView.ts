import PromptSync from "prompt-sync";

export default class TerminalView {

    constructor() {
        this.exibirMenu();
    }

    private prompt = PromptSync();

// Exibe o menu principal do terminal
  public exibirMenu(): void {

    let continues: boolean = true;
    while (continues) {
      console.log("\n=== Menu do Estacionamento ===");
      console.log("1. Estacionar Veículo");
      console.log("2. Retirar Veículo");
      console.log("3. Ver Vagas Disponíveis");
      console.log("4. Cadastrar Cliente Mensalista");
      console.log("5. Sair");
  
      const escolha = this.prompt("Escolha uma opção: ");
  
      switch (escolha) {
        case "1":
          console.log("Opção 1 selecionada: Estacionar Veículo");
          break;
        case "2":
          console.log("Opção 2 selecionada: Retirar Veículo");
          break;
        case "3":
          console.log("Opção 3 selecionada: Ver Vagas Disponíveis");
          break;
        case "4":
          console.log("Opção 4 selecionada: Cadastrar Cliente Mensalista");
            break;
        case "5":
          console.log("Saindo...");
          continues = false;
          break;
        default:
          console.log("Opção inválida. Tente novamente.");
      }
    }
    
  }

  //
  public exibirVagasDisponiveis(vagas: number): void {
    console.log(`Vagas disponíveis: ${vagas}`);
  }
}
