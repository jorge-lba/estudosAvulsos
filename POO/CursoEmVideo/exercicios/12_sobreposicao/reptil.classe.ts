import Animal from './animal.abstrata'

export default class Reptil extends Animal {
  private _corDaEscama:string = ''

  constructor(peso:number, idade:number, membros:number){
    super(peso, idade, membros)
  }

  get corDaEscama(){
    return this._corDaEscama
  }

  set corDaEscama(cor:string){
    this._corDaEscama = cor
  }

  alimentar(){
    console.log('Comendo Vegetais')
  }

  emitirSom(){
    console.log('Som de Réptil')
  }

  locomover(){
    console.log('Rastejando')
  }
}