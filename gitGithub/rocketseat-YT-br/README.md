# GIT E GITHUP

 - __Profº:__ Mayk Brito.
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

### COMANDS

1. __git init__ Inicia um repositório -  Local onde todas as alterações seram gravadas.
2. __git add__
    1. __.__ Adiciona todos os arquivos alterados ao contêiner para serem salvos (cria o ponto na hitória).
    2. __fileName__ Adiciona o arquivo ecolhido ao contêiner para ser salvo.
3. __git commit -m "Add comment"__ Adiciona um comentário ao contêiner.
4. __git log__ Mostra todos os pontos que foram alterados. *(para sair do log precione a tecla __q__)*
5. __git status__ Mostra os estados que os arquivos estão. 
6. __git show__ Mostra as alterações feitas no ultimo commit.
    1. __numberCommit__ Mostra as alterações feitas em um ponto específico.
7. __git branch__ Revela quantos ramos tem o seu projeto. 
    1. __name__ Cria um ramo secundário do projeto.
    2.__-D name__ Deleta o ramos escolhido.
8. __git checkout nameBranc__ Altera para o branch escolida. (status mostra em qual branch você está)
9. __git merge nameBranch__ Une o ramo escolhido com o ramo atual.
10. __git remote__
    1. __-v__ Mostra onde o seu repositório esta hospedado.
    2. __add origin link__ Cria um repositório na nuvem.
11. __git push__ Envia o repositório para a nuvem.
    1. __-u origin master__ Define a branch master do repositório em nuvem.
    2. __origin branchName__ Envia a branch para o repositório em nuvem.
    3. __origin --delete branchName__ Deleta branch indicada da nuvem.
    
