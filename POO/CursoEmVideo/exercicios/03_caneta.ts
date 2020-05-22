class Caneta {
    private _tampada:boolean = false

    constructor(
        protected _modelo:string,
        protected _ponta:number,
        protected _cor:string
    ){
        this.tampar()
    }

    public tampar(){
        this._tampada = true
    }

    public destampar(){
        this._tampada = false
    }

    get tampada(){
        return this._tampada
    }

    get cor(){
        return this._cor
    }

    get modelo(){
        return this._modelo
    }

    set modelo(modelo:string){
        this._modelo = modelo
    }

    get ponta(){
        return this._ponta
    }

    set ponta(ponta:number){
        this._ponta = ponta
    }

}

const caneta = new Caneta('BIC', 0.4, 'Vermelha')
const canet2 = new Caneta('KKKK', 0.8, 'Azul')


console.log(caneta)

// caneta.setPont(0.8)
// caneta.setModelo('BIC')

console.log(canet2)

canet2.modelo = 'JVC'

// console.log(caneta.modelo)
// console.log(caneta.getPonta())


console.log(caneta.tampada)
caneta.destampar()
console.log(caneta.tampada)

console.log(`Eu tenho uma caneta ${caneta.modelo} ${caneta.cor} de ponta ${caneta.ponta}`)
console.log(`Eu tenho uma caneta ${canet2.modelo} ${canet2.cor} de ponta ${canet2.ponta}`)


export = {}