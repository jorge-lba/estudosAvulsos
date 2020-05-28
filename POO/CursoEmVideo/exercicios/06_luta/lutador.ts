import { InterfaceLutador } from "./interfaces"
import { TypeLutador } from "./types"
import { Lutadores } from "./lutadores"

const ApresentarLutador:any = {
    nome: "Lutador: ##",
    nacionalidade: "Origem: ##",
    idade: " ## anos",
    altura: " ## m de altura",
    peso: "Pesando ## Kg",
    vitorias: " ## Vitórias",
    derrotas: " ## Derrotas",
    empates: " e ## Empates",
    categoria: ' é um peso ##, ele tem '
}

export class Lutador implements InterfaceLutador{
    private _nome:string
    private _nacionalidade:string
    private _idade:number
    private _altura:number
    private _peso:number
    private _categoria:string
    private _vitorias:number
    private _derrotas:number
    private _empates:number

    constructor( lutador:TypeLutador ){
        this._nome = lutador.nome
        this._nacionalidade = lutador.nacionalidade
        this._idade = lutador.idade
        this._altura = lutador.altura
        this._peso = lutador.peso
        this._vitorias = lutador.vitorias
        this._derrotas = lutador.derrotas
        this._empates = lutador.empates
        this._categoria = this.selectCategoria()
    }

    get nome(){return this._nome}
    get nacionalidade(){return this._nacionalidade}
    get idade(){return this._idade}
    get altura(){return this._altura}
    get peso(){return this._peso}
    get categoria(){return this._categoria}
    get vitorias(){return this._vitorias}
    get derrotas(){return this._derrotas}
    get empates(){return this._empates}

    set peso(peso:number){
        this._peso = peso
        this._categoria = this.selectCategoria()
    }

    public selectCategoria(){
        if(this._peso < 52.2){
            return 'Inválido'
        }else if(this._peso <= 70.3){
            return 'Leve'
        }else if(this._peso <= 83.9){
            return 'Médio'
        }else if(this._peso <= 120.2){
            return 'Pesado'
        }else{
            return 'Inválido'
        }
    }
    

    public apresentar():TypeLutador{
        const lutador = {
            nome:this._nome,
            nacionalidade:this._nacionalidade,
            idade:this._idade,
            altura:this._altura,
            peso:this._peso,
            vitorias:this._vitorias,
            derrotas:this._derrotas,
            empates:this._empates,
        }

        Object.entries(lutador).forEach(([key, value]) => {
            console.log(ApresentarLutador[key].replace('##', value))
        })

        return lutador
    }

    public status(){
        const lutador = {
            nome:this._nome,
            categoria:this._categoria,
            vitorias:this._vitorias,
            derrotas:this._derrotas,
            empates:this._empates,
        }

        const apresentacao = Object.entries(lutador).reduce((previous:any, [key, value]) => {
            if(key === "nome") return previous += value
            return previous += ApresentarLutador[key].replace('##', value)
        },"")
        console.log(apresentacao)        

        return lutador
    }
    public ganharLuta(){
        this._vitorias++
    }

    public perderLuta(){
        this._derrotas++
    }

    public empatarLuta(){
        this._empates++
    }

}

const lutador = Lutadores.map(lutador => new Lutador(lutador))

lutador[0].status()
lutador[1].status()
lutador[2].status()
lutador[3].status()
lutador[4].status()
lutador[5].status()

console.log(lutador[3].categoria)
