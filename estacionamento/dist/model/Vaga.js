"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vaga {
    numero;
    ocupada;
    constructor(numero) {
        this.numero = numero;
        this.ocupada = false;
    }
    isOcupada() {
        return this.ocupada;
    }
    ocupar() {
        this.ocupada = true;
    }
    desocupar() {
        this.ocupada = false;
    }
    getNumero() {
        return this.numero;
    }
}
exports.default = Vaga;
