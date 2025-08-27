"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Estacionamento {
    capacidade;
    veiculosEstacionados;
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.veiculosEstacionados = 0;
    }
    // meoto para estacionar um veiculo
    estacionarVeiculo() {
        if (this.veiculosEstacionados < this.capacidade) {
            this.veiculosEstacionados++;
            return true;
        }
        else {
            return false;
        }
    }
    //metodo para retirar um veiculo
    retirarVeiculo() {
        if (this.veiculosEstacionados > 0) {
            this.veiculosEstacionados--;
            return true;
        }
        else {
            return false;
        }
    }
    // metodo para obter a capacidade total do estacionamento
    getCapacidade() {
        return this.capacidade;
    }
    // metodo para obter o numero de veiculos estacionados
    getVeiculosEstacionados() {
        return this.veiculosEstacionados;
    }
}
exports.default = Estacionamento;
