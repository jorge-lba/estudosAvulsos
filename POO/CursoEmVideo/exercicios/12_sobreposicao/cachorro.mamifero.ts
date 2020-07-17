import Mamifero from "./mamifero.classe";

export default class Cachorro extends Mamifero {
  constructor(peso:number, idade:number, membros:number){
    super(peso, idade, membros)
  }

  enterrarOsso(){
    console.log('Enterrando o osso')
  }

  abanarRabo(){
    console.log('Abanando o Rabo')
  }
}