import { ControleRemoto } from "./controle";

const controle = new ControleRemoto

controle.ligar()
controle.play()
controle.maisVolume()

controle.abrirMenu()
controle.fecharMenu()

controle.desligar()
controle.maisVolume()
controle.menosVolume()

controle.ligar()
controle.ligarMudo()
controle.pause()

controle.abrirMenu()

console.log()
console.log(controle)