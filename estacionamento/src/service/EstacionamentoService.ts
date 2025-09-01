export default class EstacionamentoService {
  
  private vagasTotais: number;
  private vagasOcupadas: number;

  constructor(vagasTotais: number) {
    this.vagasTotais = vagasTotais;
    this.vagasOcupadas = 50;
  }

  public ocuparVaga(): boolean {
    if (this.vagasOcupadas < this.vagasTotais) {
      this.vagasOcupadas++;
      return true;
    }
    return false;
  }

  public liberarVaga(): boolean {
    if (this.vagasOcupadas > 0) {
      this.vagasOcupadas--;
      return true;
    }
    return false;
  }

  public getVagasDisponiveis(): number {
    return this.vagasTotais - this.vagasOcupadas;
  }
}