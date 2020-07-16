import Pessoa from './pessoa.abstrata'

export default class Visitante extends Pessoa {
  constructor(nome:string, idade:number, sexo:string){
    super(nome, idade, sexo)
  }
}