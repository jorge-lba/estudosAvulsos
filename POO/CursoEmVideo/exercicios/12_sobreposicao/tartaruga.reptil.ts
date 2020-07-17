import Reptil from "./reptil.classe";

export default class Tartaruga extends Reptil {
  constructor(peso:number, idade:number, membros:number){
    super(peso, idade, membros)
  }

  locomover(){
    console.log('Andando bem devagar')
  }
}