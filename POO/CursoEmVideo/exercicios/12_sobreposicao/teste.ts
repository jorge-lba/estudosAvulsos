import Mamifero from './mamifero.classe'
import Reptil from './reptil.classe'
import Peixe from './peixe.classe'
import Ave from './ave.classe'
import Canguru from './canguru.mamifero'
import Cachorro from './cachorro.mamifero'
import Cobra from './cobra.reptil'
import Tartaruga from './tartaruga.reptil'
import GoldFish from './goldFish.peixe'
import Arara from './arara.ave'

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

console.log('\nCanguru -------\n')

const canguru = new Canguru(70, 3, 4)

canguru.corDoPelo = 'Caramelo'

console.log(canguru.corDoPelo)
console.log(canguru.peso)
console.log(canguru.idade)
console.log(canguru.membros)

canguru.alimentar()
canguru.emitirSom()
canguru.locomover()
canguru.usarBolsa()

console.log('\nCachorro -------\n')

const cachorro = new Cachorro(35, 3, 4)

cachorro.corDoPelo = 'Branco'

console.log(cachorro.corDoPelo)
console.log(cachorro.peso)
console.log(cachorro.idade)
console.log(cachorro.membros)

cachorro.alimentar()
cachorro.emitirSom()
cachorro.locomover()
cachorro.enterrarOsso()
cachorro.abanarRabo()

console.log('\nCobra -------\n')

const cobra = new Cobra(12, 3, 0)

cobra.corDaEscama = 'Verde Escuro'

console.log(cobra.corDaEscama)
console.log(cobra.peso)
console.log(cobra.idade)
console.log(cobra.membros)

cobra.alimentar()
cobra.emitirSom()
cobra.locomover()

console.log('\nTartaruga -------\n')

const tartaruga = new Tartaruga(80, 93, 4)

tartaruga.corDaEscama = 'Verde Escuro'

console.log(tartaruga.corDaEscama)
console.log(tartaruga.peso)
console.log(tartaruga.idade)
console.log(tartaruga.membros)

tartaruga.alimentar()
tartaruga.emitirSom()
tartaruga.locomover()

console.log('\nGoldFish -------\n')

const goldFish = new GoldFish(.532, 1, 2)

goldFish.corDaEscama = 'Azul'

console.log(goldFish.corDaEscama)
console.log(goldFish.peso)
console.log(goldFish.idade)
console.log(goldFish.membros)

goldFish.alimentar()
goldFish.emitirSom()
goldFish.locomover()
goldFish.soltarBolhas()

console.log('\nArara -------\n')

const arara = new Arara(.132, 3, 2)

arara.corDaPena = 'Amarela'

console.log(arara.corDaPena)
console.log(arara.peso)
console.log(arara.idade)
console.log(arara.membros)

arara.alimentar()
arara.emitirSom()
arara.locomover()
arara.fazerNinho()