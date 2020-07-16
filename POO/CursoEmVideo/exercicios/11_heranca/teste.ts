import Visitante from './visitante.classe'

const visitante = new Visitante('Marcos', 19, 'Masculino')

console.log(visitante.nome)
console.log(visitante.sexo)
visitante.fazerAniversario()
