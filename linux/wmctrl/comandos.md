# Comandos wmctrl
__[Comandos](http://tripie.sweb.cz/utils/wmctrl/)__

## Ações

- -m [Mostra informações sobre o gerenciamento de janelas e ambiente]
- -l [Lista as janelas abertas]
- -d [Lista as areas de trabalhos (* - area atual)]
- -s [Altera para a area de trabalho especifica (telas selecionada por indice em array iniciando em 0)]
- -a [Vai para a janela apontada (ex. wmctrol -a Google Chrome // Vai para janela idempandente de qual area você está)]
- -c [Fecha a janela (ex. wmctrol -c Google Chrome // Feicha o Chrome)]
- -R [Move a janela para area de trablho atual (e. wmctrol -R Google Chrome // Traz a janela para minha area de trabalho)]
- -r <Nome da Janela> -t <Numero da Area de Trabalho> [Move uma janela para uma area especifica (wmctrol -e Google Chrome -t 1 // Move o Chrome para a segunda area de trabalho) ]
- -r <Nome da Janela> -e <Configurações da Janela> [Seleciona uma Janela e configura sue tipo, posição e tamanho (ex. wmctrl -r code -e 0,0,0,800,650 // Deixa o vc Code mondo atual, posições x=0 e y=0, tamanhos lagura=800, altura=650)]