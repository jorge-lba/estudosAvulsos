import Pessoa from './pessoa.classe'

export default class Professor extends Pessoa {
  private _especialista:string = ''
  private _salario:number = 0
  constructor(nome:string, idade:number, sexo:string){
    super(nome, idade, sexo)
  }

  set especialista(especialidade:string){
    this._especialista = especialidade
  }

  set salario(valor:number){
    this._salario = valor
  }

  get especialista(){
    return this._especialista
  }

  get salario(){
    return this._salario
  }

  public receberAumento(valor:number){
    this.salario += valor
    console.log(`Salário atual é de R$ ${this.salario.toFixed(2)}`)
  }
}
