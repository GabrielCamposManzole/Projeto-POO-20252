import Veiculo from './Veiculo';
// Caminho correto para importação
import { TaxaHora } from './TaxaHora';

export default class Moto extends Veiculo {

  constructor(placa: string, modelo: string) {
    super(placa, modelo);
  }

  public getTaxaHora(): number {
    return TaxaHora.MOTO; 
}
}