# GIT E GITHUP

 - __Profº:__ [Mayk Brito](https://github.com/maykbrito)
 - __Github:__ [Rocketseat](https://github.com/Rocketseat/youtube-git-guia-pratico-iniciante)
 - __Aula:__ [Como usar Git e Github na prática](https://www.youtube.com/watch?v=2alg7MQ6_sI&t=530s)

## Guia prático para iniciantes.

### Intalação

[GIT](https://git-scm.com/download)

### SCENES

- [x] Você deseja criar pontos na história da produção do seu projeto.
- [x] Você deseja verificar mudanças feitas no seu projeto.

- [x] Você começa um nova funcionalidade no seu projeto, sem estragar o que já foi feito.
- [x] Você adiciona as novas funcionalidades ao seu projeto em produção.
- [x] Você quer deletar a branch da nova funcionalidade, depois de aplicar em seu projeto.

- [x] Você quer colocar seu projeto na nuvem.

- [x] Você vai pegar um projeto já iniciado, para trabalhar com um time.
- [x] Você precisa resolver um conflito.
- [x] Antes de enviar a resolução, precisamos atualizar o projeto loca.

- [x] Você precisa voltar um arquivo para um determinado momento da linha do tempo.
- [x] Você precisa recuperar algo deletado.

### COMANDS

1. __git init__ Inicia um repositório -  Local onde todas as alterações seram gravadas.
2. __git add__
    1. __.__ Adiciona todos os arquivos alterados ao contêiner para serem salvos (cria o ponto na hitória).
    2. __fileName__ Adiciona o arquivo ecolhido ao contêiner para ser salvo.
3. __git commit__
    1. __-m "Add comment"__ Adiciona um comentário ao contêiner.
    2. __-am__ Faz o comando git add. e cria o comentário.
4. __git log__ Mostra todos os pontos que foram alterados. *(para sair do log precione a tecla __q__)*
5. __git status__ Mostra os estados que os arquivos estão. 
6. __git show__ Mostra as alterações feitas no ultimo commit.
    1. __numberCommit__ Mostra as alterações feitas em um ponto específico.
7. __git branch__ Revela quantos ramos tem o seu projeto. 
    1. __name__ Cria um ramo secundário do projeto.
    2. __-D name__ Deleta o ramos escolhido.
8. __git checkout__ 
    1. __nameBranc__ Altera para o branch escolida. (status mostra em qual branch você está)
    2. __-b name__ Cria uma branch nova e entra nela.
    3. __idCommit -- file__ Recupera arquivo alterado na linha do tempo escolhida.
    4. __-- file__ Recupera o arquivo do ultimo commit.
9. __git merge nameBranch__ Une o ramo escolhido com o ramo atual.
10. __git remote__
    1. __-v__ Mostra onde o seu repositório esta hospedado.
    2. __add origin link__ Cria um repositório na nuvem.
11. __git push__ Envia o repositório para a nuvem.
    1. __-u origin master__ Define a branch master do repositório em nuvem.
    2. __origin branchName__ Envia a branch para o repositório em nuvem.*
    3. __origin --delete branchName__ Deleta branch indicada da nuvem.*
12. __git clone link__ Faz um clone de um repositório em nuvem.
13. __git pull__ Puxa as atualizações feitas no repositório em nuvem.


__OBS:__ Todos os comandos marcados com __*__ foram encontrados nos seguintes locais:

* [__origin branchName__ ;  __origin --delete branchName__](https://medium.com/@andgomes/git-trabalhando-com-branches-remotos-c79aabf3a2e5)
