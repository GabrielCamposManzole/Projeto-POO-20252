"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = __importDefault(require("./Veiculo"));
const TaxaHora_1 = require("./TaxaHora");
class Caminhao extends Veiculo_1.default {
    constructor(placa, modelo) {
        super(placa, modelo);
    }
    getTaxaHora() {
        return TaxaHora_1.TaxaHora.CAMINHAO;
    }
}
exports.default = Caminhao;
