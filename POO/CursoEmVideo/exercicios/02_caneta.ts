class Caneta {
    public modelo?:string
    public cor?:string

    constructor(
        private ponta:number,
        protected carga:number,
        protected tampada:boolean
    ){}

    public caracteristicas(){
        console.log(this.modelo)
        console.log(this.cor)
        console.log(this.ponta)
        console.log(this.carga)
        console.log(this.tampada)

    }
    
    public escrever():void{
        if(!this.tampada){
            console.log('Escrevendo...')
            this.carga = this.carga - this.ponta
        }else{
            console.log('A caneta está tampada!')
        }
    }

    public rabiscar():void{
        if(!this.tampada){
            console.log('Rabiscando...')
            this.carga = this.carga - this.ponta
        }else{
            console.log('A caneta está tampada!')
        }
    }

    public tampar():void{
        this.tampada = true
    }

    public destampar(){
        this.tampada = false
    }

}

const canetaVermelha = new Caneta(0.5, 100, true)

canetaVermelha.cor = 'Vermelha'
canetaVermelha.modelo = 'BIC'
canetaVermelha.escrever()

canetaVermelha.destampar()

Array(10).fill(10).forEach(() => canetaVermelha.escrever())
console.log(canetaVermelha)

Array(5).fill(5).forEach(() => canetaVermelha.rabiscar())
canetaVermelha.tampar()
console.log(canetaVermelha)

export = {}