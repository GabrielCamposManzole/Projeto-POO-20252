import Veiculo from './Veiculo';
import { TaxaHora } from './TaxaHora';

export default class Carro extends Veiculo {

  constructor(placa: string, modelo: string) {
    super(placa, modelo);
  }
  public getTaxaHora(): number {
      return TaxaHora.CARRO; 
  }
}