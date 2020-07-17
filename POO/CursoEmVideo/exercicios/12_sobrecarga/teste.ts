import Mamifero from './mamifero.classe'

const mamifero = new Mamifero(14, 4, 4)

console.log('\nMamífero -------\n')

mamifero.corDoPelo = 'Preto'

console.log(mamifero.corDoPelo)
console.log(mamifero.peso)
console.log(mamifero.idade)
console.log(mamifero.membros)

mamifero.alimentar()
mamifero.emitirSom()
mamifero.locomover()
