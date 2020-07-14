import Pessoa from "./pessoa"
import InterPublicacao from './livro.interface'

export default class Livro implements InterPublicacao {
  private _aberto:boolean
  private _paginaAtual:number

  constructor(
    private _titulo:string,
    private _autor:Pessoa,
    private _totalDePaginas:number,
    private _leitor:Pessoa
  ){
    this._aberto = false
    this._paginaAtual = 1
  }

  public detalhes(){
    return `Livro - ${this.titulo}\n` 
      + `Quantidade de páginas: ${this.totalDePagina}\n`
      + `Pagina atual: ${this.paginaAtual}\n`
      +`Autor: ${this.autor.nome}\n`
      +`Sendo lido por ${this.leitor.nome}`
  }

  get titulo(){
    return this._titulo
  }
  
  get autor(){
    return this._autor
  }

  get totalDePagina(){
    return this._totalDePaginas
  }

  get paginaAtual(){
    return this._paginaAtual
  }

  set paginaAtual(pagina:number){
    if(pagina > 0 && pagina <= this._totalDePaginas){
      this._paginaAtual = pagina
      console.log(`Pg. ${this._paginaAtual}`)
    }else{
      console.log(`Pagina ${pagina} não é valida.`)
    }
  }

  get aberto(){
    return this._aberto
  }

  set aberto(estado:boolean){
    const valor = estado ? 'Aberto' : 'Fechado'
    
    this._aberto = estado
    console.log(`O livro está ${valor}`)
  }

  get leitor(){
    return this._leitor
  }

  public abrir(){
    this.aberto = true
  }

  public fechar(){
    this.aberto = false
  }

  public folhar(){
    const pagina = Math.floor(Math.random() * this.totalDePagina + 1)
    this.paginaAtual = pagina
  }

  public avancarPagina(){
    this.paginaAtual++
  }

  public voltarPagina(){
    this.paginaAtual--
  }

  public abrirNaPagina(pagina:number){
    this.paginaAtual = pagina
  }

}
