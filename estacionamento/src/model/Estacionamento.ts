export default class Estacionamento {
  private capacidade: number;
  private veiculosEstacionados: number;

  constructor(capacidade: number) {
    this.capacidade = capacidade;
    this.veiculosEstacionados = 0;
  }

  public estacionarVeiculo(): boolean {
    if (this.veiculosEstacionados < this.capacidade) {
      this.veiculosEstacionados++;
      return true;
    } else {
      return false;
    }
  }

  public retirarVeiculo(): boolean {
    if (this.veiculosEstacionados > 0) {
      this.veiculosEstacionados--;
      return true;
    } else {
      return false;
    }
  }

  public getCapacidade(): number {
    return this.capacidade;
  }

  public getVeiculosEstacionados(): number {
    return this.veiculosEstacionados;
  }
}