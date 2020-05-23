import { Controlador } from "./interface"

export class ControleRemoto implements Controlador {
    private _volume:number
    private _ligado:boolean
    private _tocando:boolean

    constructor(){
        this._volume = 50
        this._ligado = false
        this._tocando = false
    }

    private get volume(){
        return this._volume
    }

    private get ligado(){
        return this._ligado
    }

    private get tocando(){
        return this._tocando
    }

    private set volume(volume:number){
        this._volume = volume
    }

    private set ligado(ligado:boolean){
        this._ligado = ligado
    }

    private set tocando(tocando:boolean){
        this._tocando = tocando
    }

    public ligar():void{
        this.ligado = true
    }

    public desligar(){
        this.ligado = false
    }

    public abrirMenu(){
        console.log('\n < ------------ MENU ------------ >')
        console.log(`\nEstá ligado? ${this.ligado ? 'SIM' : 'NÂO'} `)
        console.log(`Está tocando? ${this.tocando ? 'SIM' : 'NÃO'}`)

        let barraDeVolume:string = ''

        for(let i=0; i < this.volume; i+=10){
            barraDeVolume += '|'
        }
         console.log(`Volume: ${this.volume} ${barraDeVolume}\n`)
    }
    
    public fecharMenu(){
        console.log('Fechando menu...')
    }

    public maisVolume(){
        this.ligado
            ? this.volume += 5
            : console.log('\nErro - Não posso aumentar o volume!')
    }

    public menosVolume(){
        this.ligado
            ? this.volume -= 5
            : console.log('\nErro - Não posso abaixar o volume!')
    }

    public ligarMudo(){
        if(this.ligado && this.volume > 0) this.volume = 0
    }   

    public desligarMudo(){
        if(this.ligado && this.volume === 0) this.volume = 50
    }

    public play(){
        if(this.ligado && !this.tocando) this.tocando = true
    }

    public pause(){
        if(this.ligado && this.tocando) this.tocando = false
    }
}
