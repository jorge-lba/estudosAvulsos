export default abstract class Pessoa {
  constructor(
    private _nome:string,
    private _idade:number,
    private _sexo:string
  ){}

  set nome(nome:string){
    this._nome = nome
  }

  set idade(idade:number){
    this._idade = idade
  }

  set sexo(sexo:string){
    this._sexo = sexo
  }

  get nome(){
    return this._nome
  }

  get idade(){
    return this._idade
  }

  get sexo(){
    return this._sexo
  }

  fazerAniversario(){
    this.idade++
    console.log(this.idade)
  } 
}
