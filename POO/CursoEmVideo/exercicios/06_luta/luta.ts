import { Lutador } from "./lutador";
import lutadores from './lutadores'

export class Luta{
    private _desafiante:Lutador
    private _desafiado:Lutador
    private rounds:number = 0
    private aprovada:boolean = false 

    constructor(desafiante:Lutador, desafiado:Lutador){
        this._desafiante = desafiante
        this._desafiado = desafiado
    }

    set desafiante(desafiante:Lutador){
        this._desafiante = desafiante
    }

    set desafiado(desafiado:Lutador){
        this._desafiado = desafiado
    }

    get desafiante(){
        return this._desafiante
    }

    get desafiado(){
        return this._desafiado
    }

    private lutadoresSaoIguais(desafiante:Lutador, desafiado:Lutador){
        const lutadorDesafiante = Object.values(desafiante)
        const lutadorDesafiado = Object.values(desafiado)

        return lutadorDesafiante.reduce((previous:boolean, current:boolean, index:number) => previous && current == lutadorDesafiado[index] )
    }

    public marcarLuta(desafiante:Lutador = this.desafiante, desafiado:Lutador = this.desafiado){
        const lotadoresIguais = this.lutadoresSaoIguais(desafiante, desafiado)
        if(desafiante.categoria === desafiado.categoria && !lotadoresIguais){
            this.aprovada = true
            this.desafiante = desafiante
            this.desafiado = desafiado
        }else{
            this.aprovada = false
        }
    }

    public lutar(){
        if(this.aprovada){
            this.desafiado.apresentar()
            this.desafiante.apresentar()
            console.log(this.rounds)
            const vencedor = Math.floor(Math.random() * (3 - 0))
            switch(vencedor){
                case 0:
                    console.log('Empatou!')
                    this.desafiante.empatarLuta()
                    this.desafiado.empatarLuta()
                break
                case 1:
                    console.log(this.desafiado.nome)
                    this.desafiado.ganharLuta()                
                    this.desafiante.perderLuta()
                break
                case 2:
                    console.log(this.desafiante.nome)
                    this.desafiante.ganharLuta()
                    this.desafiado.perderLuta()                
                break

            }
        }else{
            console.log('Luta não pode acontecer')
        }
    }
}

const lutadorUm = new Lutador(lutadores[0])
const lutadorDois = new Lutador(lutadores[1])

const luta = new Luta( lutadorUm , lutadorDois )

luta.marcarLuta()
luta.lutar()

lutadorUm.status()
lutadorDois.status()