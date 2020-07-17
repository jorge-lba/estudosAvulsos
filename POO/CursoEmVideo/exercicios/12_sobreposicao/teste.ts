import Mamifero from './mamifero.classe'
import Reptil from './reptil.classe'

console.log('\nMamífero -------\n')

const mamifero = new Mamifero(14, 4, 4)

mamifero.corDoPelo = 'Preto'

console.log(mamifero.corDoPelo)
console.log(mamifero.peso)
console.log(mamifero.idade)
console.log(mamifero.membros)

mamifero.alimentar()
mamifero.emitirSom()
mamifero.locomover()

console.log('\nRéptil -------\n')

const reptil = new Reptil(.250, 1, 4)

reptil.corDaEscama = 'Verde'

console.log(reptil.corDaEscama)
console.log(reptil.peso)
console.log(reptil.idade)
console.log(reptil.membros)

reptil.alimentar()
reptil.emitirSom()
reptil.locomover()
