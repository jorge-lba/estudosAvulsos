import Animal from './animal.abstrata'

export default class Mamifero extends Animal {

  private _corDoPelo:string = ''

  constructor(peso:number, idade:number, membros:number){
    super(peso, idade, membros)
  }

  set corDoPelo(cor:string){
    this._corDoPelo = cor
  }

  get corDoPelo(){
    return this._corDoPelo
  }

  alimentar(){
    console.log('Mamando')
  }

  emitirSom(){
    console.log('Som de Mamífero')
  }

  locomover(){
    console.log('Correndo')
  }

}