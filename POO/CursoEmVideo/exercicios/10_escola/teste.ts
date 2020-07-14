import Pessoa from './pessoa.classe'
import Aluno from './aluno.classe'

const pessoa = new Pessoa(
  'Jorge',
  18,
  'Feminino'
)

pessoa.fazerAniversario()

const aluno = new Aluno('Jorge', 28, 'Masculino')

aluno.matricular('informática')
aluno.cancelarMatricula()
