"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    placa;
    modelo;
    horaEntrada;
    constructor(placa, modelo) {
        this.placa = placa;
        this.modelo = modelo;
    }
    getPlaca() {
        return this.placa;
    }
    getModelo() {
        return this.modelo;
    }
    setHoraEntrada(hora) {
        this.horaEntrada = hora;
    }
}
exports.default = Veiculo;
