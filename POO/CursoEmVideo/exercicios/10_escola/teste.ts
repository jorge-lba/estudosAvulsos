import Pessoa from './pessoa.classe'
import Aluno from './aluno.classe'
import Professor from './professor.classe'

console.log('\nPessoa ------------------------ \n')

const pessoa = new Pessoa(
  'Jorge',
  18,
  'Feminino'
)

pessoa.fazerAniversario()

console.log('\nAluno ------------------------ \n')

const aluno = new Aluno('Jorge', 28, 'Masculino')

aluno.matricular('informática')

console.log('\n------------------------ \n')

aluno.cancelarMatricula()

console.log('\nProfessor ------------------------ \n')

const professor = new Professor('Marcos', 38, 'Masculino')

professor.receberAumento(25.28983)
professor.especialista = 'Programação'

console.log(professor.nome)
console.log(professor.especialista)
