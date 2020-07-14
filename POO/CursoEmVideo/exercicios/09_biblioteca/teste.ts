import Pessoa from "./pessoa"
import Livro from "./livro"

const autor = new Pessoa('Jorge', 28, 'Masculino')
const leito = new Pessoa('Karen', 28, 'Feminino')

const livro = new Livro(
  'Javascript',
  autor,
  200,
  leito
)

livro.abrirNaPagina(1)
console.log(livro.detalhes())