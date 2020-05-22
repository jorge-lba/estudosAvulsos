class Caneta {
    constructor(
        private _modelo:string,
        private _cor:string,
        private _ponta:number,
        private _carga:number,
        private _tampada:boolean
    ){}

    public rabiscar():void{
        if(this._tampada){
            console.log('ERRO')  
        }else{
            console.log('Rabiscar')
            this._carga--
        } 
    }

    public tampar():void{
        this._tampada = true
    }

    public destampar():void{
        this._tampada = false
    }

    get tampada():boolean{
        return this._tampada
    }

    get modelo():string{
        return this._modelo
    }
    get cor():string{
        return this._cor
    }
    get ponta():number{
        return this._ponta
    }
    get carga():number{
        return this._carga
    }
}

function run(){
    const canetaVermelha = new Caneta('Bic', 'Vermelha', 0.8, 100, true)

    canetaVermelha.rabiscar()
    canetaVermelha.destampar()
    canetaVermelha.rabiscar()
    canetaVermelha.tampar()
    canetaVermelha.rabiscar()

    if(canetaVermelha.tampada) canetaVermelha.destampar()
    canetaVermelha.rabiscar()
    canetaVermelha.tampar()

    console.log(canetaVermelha.modelo, canetaVermelha.cor, canetaVermelha.ponta, canetaVermelha.carga, canetaVermelha.tampada)

}

run()