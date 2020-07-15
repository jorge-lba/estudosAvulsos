import Pessoa from './pessoa.classe'

export default class Funcionario extends Pessoa {

  private _setor:string = ''
  private _trabalhando:boolean = false

  constructor(nome:string, idade:number, sexo:string){
    super(nome, idade, sexo)
  }

  set setor(setor:string){
    this._setor = setor
  }

  set trabalhando(trabalhando:boolean){
    this._trabalhando = trabalhando
  }

  get setor(){
    return this._setor
  }

  get trabalhando(){
    return this._trabalhando
  }

  public mudarTrabalho(){
    this.trabalhando = !this.trabalhando
  }

}
