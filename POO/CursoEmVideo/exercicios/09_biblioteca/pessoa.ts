export default class Pessoa {
  constructor(
    private _nome:string,
    private _idade:number,
    private _sexo:string
  ){}

  set idade(idade:number){
    this._idade = idade
  }

  get idade(){
    return this._idade
  }

  get nome(){
    return this._nome
  }

  get sexo(){
    return this._sexo
  }

  fazerAniversario(){
    return ++this.idade
  }

}
