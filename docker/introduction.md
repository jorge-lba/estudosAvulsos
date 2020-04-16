# Docker

## Linux

Intalação do snap :
    
    $ sudo apt install snapd

### Instalação

    $ snap install docker

## Primeiros Passos

**Iniciar imagem hello-world do docker:**

    $ sudo docker run hello-world

**Verificar se o grupo do docker já existe:**

    $ cat /etc/group | grep docker

**Criar um grupo docker:**

    $ sudo groupadd docker

**Adcionar usuário principal no grupo:**

    $ sudo usermod -aG docker $USER

**Verificar se o usuário foi adicionado ao grupo:**

    $ groups $USER

**Verificar se está logado no Docker:**

    $ docker info

**Ver as imagens que estão rodando:**

    $ docker images

**Listar processos:**

    $ docker ps

**Pesquisar imagens online:**

    $ docker search

**Fazer download da imagem do Ubuntu:**

    $ docker pull ubuntu

**Rodar container ubuntu:**

    $ docker run -it ubuntu bash

**Sair da maquina virtual:**

    $ exit

**Parar uma maquina:**

    $ docker stop <CONTAINER ID>

**Remover um container:**

    $ docker rm <CONTAINER_ID>

**Remover imagens:**

    $ docker rmi <IMAGE_ID>

**Iniciar um container existente:**

    $ docker start <CONTAINER_ID>

**Entrar no container ubunto:**

    # docker exec -it <CONTAINER_ID> bash

## Criando um Container

**DockerFile**

    FROM mint:19.3
    MAINTAINER Jorge Alegretti <jorgeluiz.b.alagretti@gmail.com>
    ENV PATH=/app:$PATH
    COPY runwhile.sh /app
    WORKDIR /app
    ENTRYPOINT ["./runwhile.sh"]

**Criar imagem**

    $ docker build --tag=<nome da imagem>

### Comandos

    $ sudo docker info
    $ sudo docker run hello-world