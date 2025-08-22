// A CLASSE VEICULO SERVE COMO BASE PARA OUTRAS CLASSES DE VEICULOS, COMO CARRO, MOTO, CAMINHAO, ETC.
export abstract class Veiculo {
    protected placa: string;
    protected modelo: string;
    protected cor: string;

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