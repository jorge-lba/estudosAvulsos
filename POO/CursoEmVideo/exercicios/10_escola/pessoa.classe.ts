export default class Pessoa{
  constructor(
    private _nome:string,
    private _idade:number,
    private _sexo:string
  ){}

  get nome(){
    return this._nome
  }

  get idade(){
    return this._idade
  }

  get sexo(){
    return this._sexo
  }

  set nome(nome:string){
    this._nome = nome
  }

  set idade(idade:number){
    this._idade = idade
  }

  set sexo(sexo:string){
    this._sexo = sexo
  }

  public fazerAniversario(){
    this.idade ++
    console.log(`${this.nome} fez ${this.idade}`)
  }

}