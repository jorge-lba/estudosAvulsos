import Mamifero from './mamifero.classe'
import Reptil from './reptil.classe'
import Peixe from './peixe.classe'
import Ave from './ave.classe'

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

console.log('\nPeixe -------\n')

const peixe = new Peixe(.532, 1, 2)

peixe.corDaEscama = 'Azul'

console.log(peixe.corDaEscama)
console.log(peixe.peso)
console.log(peixe.idade)
console.log(peixe.membros)

peixe.alimentar()
peixe.emitirSom()
peixe.locomover()
peixe.soltarBolhas()

console.log('\nAve -------\n')

const ave = new Ave(.132, 3, 2)

ave.corDaPena = 'Amarela'

console.log(ave.corDaPena)
console.log(ave.peso)
console.log(ave.idade)
console.log(ave.membros)

ave.alimentar()
ave.emitirSom()
ave.locomover()
ave.fazerNinho()
