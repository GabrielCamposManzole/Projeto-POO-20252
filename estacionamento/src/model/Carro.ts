export default class Carro {
  private placa: string;
  private modelo: string;
  private cor: string;

  constructor(placa: string, modelo: string, cor: string) {
    this.placa = placa;
    this.modelo = modelo;
    this.cor = cor;
  }

  public getPlaca(): string {
    return this.placa;
  }

  public getModelo(): string {
    return this.modelo;
  }

  public getCor(): string {
    return this.cor;
  }
}