import Animal from './animal.abstrata'

export default class Ave extends Animal {
  private _corDaPena:string = ''

  constructor(peso:number, idade:number, membros:number){
    super(peso, idade, membros)
  }

  get corDaPena(){
    return this._corDaPena
  }

  set corDaPena(cor:string){
    this._corDaPena = cor
  }

  alimentar(){
    console.log('Comendo Frutas')
  }

  emitirSom(){
    console.log('Som de Ave')
  }

  locomover(){
    console.log('Voando')
  }

  fazerNinho(){
    console.log('Construiu um ninho')
  }
}