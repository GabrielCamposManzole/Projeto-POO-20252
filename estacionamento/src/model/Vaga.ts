export default class Vaga {
  private numero: number;
  private ocupada: boolean;

  constructor(numero: number) {
    this.numero = numero;
    this.ocupada = false;
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
}