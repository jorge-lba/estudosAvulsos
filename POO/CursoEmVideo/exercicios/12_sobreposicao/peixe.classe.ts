import Animal from './animal.abstrata'

export default class Peixe extends Animal {
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
    console.log('Comendo Substâncias')
  }

  emitirSom(){
    console.log('Peixe não faz som')
  }

  locomover(){
    console.log('Nadando')
  }

  soltarBolhas(){
    console.log('Soltou uma bolha')
  }
}