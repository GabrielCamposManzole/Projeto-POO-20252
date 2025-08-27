export default class Vaga {
  private numero: number;
  private ocupada: boolean;
  private tipoVaga: 'coberta' | 'descoberta';

  constructor(numero: number, tipoVaga: 'coberta' | 'descoberta') {
    this.numero = numero;
    this.ocupada = false;
    this.tipoVaga = tipoVaga;
  }

  public isOcupada(): boolean {
    return this.ocupada;
  }

  public ocupar(): void {
    this.ocupada = true;
  }

  public desocupar(): void {
    this.ocupada = false;
  }

  public getNumero(): number {
    return this.numero;
  }

  public getTipoVaga(): 'coberta' | 'descoberta' {
    return this.tipoVaga;
  }
}