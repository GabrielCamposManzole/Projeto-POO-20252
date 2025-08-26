import Cliente from './Cliente';    

export default class ClienteMensalista extends Cliente {
  constructor(nome: string, cpf: string, tipo: string) {
    super(nome, cpf, tipo);
  }
}