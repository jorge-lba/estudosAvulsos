import Pessoa from './pessoa.abstrata'

export default class Aluno extends Pessoa {
  
  private _matricula:number = 0
  private _curso:string = ''
  private _valorMensalidade:number = 0

  constructor(nome:string, idade:number, sexo:string){
    super(nome, idade, sexo)
  }

  get matricula(){
    return this._matricula
  }

  get curso(){
    return this._curso
  }

  get valorMensalidade(){
    return this._valorMensalidade
  }

  set matricula(id:number){
    this._matricula = id
  }

  set curso(curso:string){
    this._curso = curso
  }

  set valorMensalidade(valor:number){
    this._valorMensalidade = valor
  }

  pagarMensalidade(){
    console.log(`Mensalidade no valor de ${this.valorMensalidade} foi paga`)
  }
}