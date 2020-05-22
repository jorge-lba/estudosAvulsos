class ContaBanco {
    protected _tipo:string
    private _numeroConta:number
    private _saldo:number
    private _estado:boolean

    constructor(private _dono:string){
        this._numeroConta = 0
        this._saldo = 0
        this._estado = false
        this._tipo = ''
        console.log('Conta criada com sucesso.')
    }

    public abrirConta(tipo:string){
        if(this._estado){
            console.log('Sua conta já está aberta')
            return
        }

        this.tipo = tipo
        this._estado = true

        if(tipo === 'CC'){
            this._saldo = 50
        }else if(tipo === 'CP'){
            this._saldo = 150
        }else{
            console.log('Tipo de conta invalido.')
        }      
    }

    public fecharConta(){
        if(this.saldo > 0){
            console.log('Conta com saldo')
        }else if(this.saldo < 0){
            console.log('Conta com débito')
        }else{
            this.estado = false
        }
    }

    public depositar(valor:number){
        if(this.estado){
            this.saldo = this.saldo + valor
            console.log(`Deposito de R$ ${valor.toFixed(2)} autorizado na conta da ${this.dono}. Saldo atual: R$ ${this.saldo.toFixed(2)}. `)
        }else{
            console.log('Impossível depositar, consta está fechada')
        }
    }

    public sacar(valor:number){
        if(this.estado){
            if(this.saldo >= valor){
                this.saldo = this.saldo - valor
                console.log(`Saque de R$ ${valor.toFixed(2)} autorizado na conta da ${this.dono}. Saldo atual: R$ ${this.saldo.toFixed(2)}. `)
            }else{
                console.log('Saldo insuficiente')
            }
        }else{
            console.log('Impossível sacar, conta está fechada')
        }
    }

    public pagarMensal(){
        let valor:number = 0
        
        if(this.tipo === 'CC'){
            valor = 12
        }else if(this.tipo === 'CP'){
            valor = 20
        }

        if(this.estado){
            if(this.saldo >= valor){
                this.saldo = this.saldo - valor
                console.log(`Debito de R$ ${valor.toFixed(2)} autorizado na conta da ${this.dono}. Saldo atual: R$ ${this.saldo.toFixed(2)}. `)
            }else{
                console.log('Saldo insuficiente')
            }

        }else{
            console.log('Impossível pagar, conta está fechada')
        }
    }

    get dono(){
        return this._dono
    }

    set numeroConta(numero:number){
        this._numeroConta = numero
    }

    get numeroConta(){
        return this._numeroConta
    }

    set tipo(tipo:string){
        this._tipo = tipo
    }

    get tipo(){
        return this._tipo
    }

    set estado(estado:boolean){
        this._estado = estado
    }

    get estado(){
        return this._estado
    }

    set saldo(valor:number){
        this._saldo = valor
    }

    get saldo(){
        return this._saldo
    }
}

const usuario1 = new ContaBanco('Jubileu')
usuario1.abrirConta('CC')
usuario1.numeroConta = 1111
usuario1.depositar(300)
usuario1.pagarMensal()
usuario1.sacar(338)
usuario1.fecharConta()
usuario1.depositar(200)

const usuario2 = new ContaBanco('Creusa')
usuario2.abrirConta('CP')
usuario2.numeroConta = 2222
usuario2.depositar(500)
usuario2.sacar(100)
usuario2.pagarMensal()
usuario2.fecharConta()

console.log(usuario1)
console.log(usuario2)

export ={}