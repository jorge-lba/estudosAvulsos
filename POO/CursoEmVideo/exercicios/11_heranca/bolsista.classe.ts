import Aluno from './aluno.classe'

export default class Bolsista extends Aluno {
  
  private _porcentagemDaBolsa:number = 10
  
  constructor(nome:string, idade:number, sexo:string){
    super(nome, idade, sexo)
  }

  get porcentagemDaBolsa(){
    return this._porcentagemDaBolsa
  }

  set porcentagemDaBolsa(porcentagem:number){
    this._porcentagemDaBolsa = porcentagem
  }

  renovarBolsa(){
    console.log('Sua bolsa foi renovada')
  }

  pagarMensalidade(){
    const valorTotal = this.valorMensalidade/100 * (100 - this.porcentagemDaBolsa)

    console.log(`Mensalidade no valor de ${valorTotal.toFixed(2)} foi paga`)
  }

}