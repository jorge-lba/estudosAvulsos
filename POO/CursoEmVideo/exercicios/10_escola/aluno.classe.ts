import Pessoa from './pessoa.classe'

export default class Aluno extends Pessoa {

  private _matricula:string | null = null
  private _curso:string | null = null

  constructor(nome:string, idade:number, sexo:string){
    super( nome, idade, sexo )
  }

  get matricula(){
    return this._matricula || '---'
  }

  get curso(){
    return this._curso || '---'
  }

  set matricula(id:string | null){
    this._matricula = id
  }

  set curso(nomeDoCurso:string | null){
    this._curso = nomeDoCurso
  }

  public matricular(curso:string){
    const hashCode = (nome:String) => (nome.split('')
    .reduce((a,b)=>{
      a=((a<<5)-a)+b.charCodeAt(0);return a&a
    },0) * Date.now()).toString(16)

    this.matricula = hashCode(this.nome + curso)
    this.curso = curso

    console.log(
      `Matricula de ID #${this.matricula}\n`
      +`Aluno: ${this.nome}\n`
      +`Curso: ${this.curso}`
    )
  }

  public cancelarMatricula(){
    if(!this._matricula || !this._curso){
      console.log('Não está matriculado')
      return
    }

    const idMatricula = this.matricula
    const nomeCurso = this.curso

    this.matricula = null
    this.curso = null

    console.log(
      `Matricula de ID #${idMatricula} foi cancelada\n`
      +`Aluno: ${this.nome}\n`
      +`Curso: ${nomeCurso}`
    )

  }
}
