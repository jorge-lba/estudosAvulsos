import Mamifero from "./mamifero.classe";

export default class Canguru extends Mamifero {
  constructor(peso:number, idade:number, membros:number){
    super(peso, idade, membros)
  }

  usarBolsa(){
    console.log('Usando a bolsa')
  }

  locomover(){
    console.log('Saltando')
  }
}