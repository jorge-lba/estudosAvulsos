export default interface InterfaceLivro{
  abrir():void,
  fechar():void,
  folhar():void,
  avancarPagina():void,
  voltarPagina():void,
  abrirNaPagina(pagina:number):void
}