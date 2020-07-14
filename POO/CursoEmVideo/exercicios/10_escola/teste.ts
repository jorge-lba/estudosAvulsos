import Pessoa from './pessoa.classe'

const pessoa = new Pessoa(
  'Jorge',
  18,
  'Feminino'
)

pessoa.nome += ' Alegretti'
pessoa.idade = 28
pessoa.sexo = 'Masculino'

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.sexo)

pessoa.fazerAniversario()