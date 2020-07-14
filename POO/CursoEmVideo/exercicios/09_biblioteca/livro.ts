import Pessoa from "./pessoa";

export class Livro {
  constructor(
    private _titulo:string,
    private _autor:Pessoa,
    private _totalDePaginas:number,
    private _paginaAtual:number,
    private _aberto:boolean,
    private _leitor:Pessoa
  ){}

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
    this._aberto = estado
  }

  get leitor(){
    return this._leitor
  }
}