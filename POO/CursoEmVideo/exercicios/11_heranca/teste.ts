import Visitante from './visitante.classe'
import Aluno from '../11_heranca/aluno.classe'

console.log('\nVisitante ---------------------\n')

const visitante = new Visitante('Marcos', 19, 'Masculino')

console.log(visitante.nome)
console.log(visitante.sexo)
visitante.fazerAniversario()

console.log('\nAluno ---------------------\n')

const aluno = new Aluno('Fábio', 25, 'Masculino')

console.log(aluno.nome)
console.log(aluno.sexo)
aluno.fazerAniversario()

aluno.matricula = 59783
aluno.curso = 'Informática'
aluno.valorMensalidade = 250.20

aluno.pagarMensalidade()