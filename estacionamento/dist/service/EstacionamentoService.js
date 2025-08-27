"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EstacionamentoService {
    vagasTotais;
    vagasOcupadas;
    constructor(vagasTotais) {
        this.vagasTotais = vagasTotais;
        this.vagasOcupadas = 50;
    }
    ocuparVaga() {
        if (this.vagasOcupadas < this.vagasTotais) {
            this.vagasOcupadas++;
            return true;
        }
        return false;
    }
    liberarVaga() {
        if (this.vagasOcupadas > 0) {
            this.vagasOcupadas--;
            return true;
        }
        return false;
    }
    getVagasDisponiveis() {
        return this.vagasTotais - this.vagasOcupadas;
    }
}
exports.default = EstacionamentoService;
