export default class Estacionamento {
  private capacidade: number;
  private veiculosEstacionados: number;

  constructor(capacidade: number) {
    this.capacidade = capacidade;
    this.veiculosEstacionados = 0;
  }
// meoto para estacionar um veiculo
  public estacionarVeiculo(): boolean {
    if (this.veiculosEstacionados < this.capacidade) {
      this.veiculosEstacionados++;
      return true;
    } else {
      return false;
    }
  }
//metodo para retirar um veiculo
  public retirarVeiculo(): boolean {
    if (this.veiculosEstacionados > 0) {
      this.veiculosEstacionados--;
      return true;
    } else {
      return false;
    }
  }
// metodo para obter a capacidade total do estacionamento
  public getCapacidade(): number {
    return this.capacidade;
  }
// metodo para obter o numero de veiculos estacionados
  public getVeiculosEstacionados(): number {
    return this.veiculosEstacionados;
  }
}