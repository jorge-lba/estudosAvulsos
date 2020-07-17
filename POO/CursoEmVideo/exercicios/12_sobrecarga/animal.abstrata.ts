export default abstract class Animal {
  constructor(
    private _peso:number,
    private _idade:number,
    private _membros:number
  ){}

  set peso(peso:number){
    this._peso = peso
  }

  set idade(idade:number){
    this._idade = idade
  }

  set membros(membros:number){
    this._membros = membros
  }

  get peso(){
    return this._peso
  }

  get idade(){
    return this._idade
  }

  get membros(){
    return this._membros
  }

  abstract locomover():void
  abstract alimentar():void
  abstract emitirSom():void

}