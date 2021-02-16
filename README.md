# Skyrats Knowledge Base

Repositório para a organização e disponibilização de conhecimentos da equipe Skyrats.

Para criar a GitHub Page que exibe a Knowledge Base, nós utilizamos esse repositório e um programa chamado [MkDocs](https://www.mkdocs.org/). Esse READ.MD serve para explicar como você pode utilizar essas ferramentas para adicionar novos conteúdos à Knowledge Base.

## Instalação do MkDocs

Primeiro, é necessário instalar o MkDocs:
```bash
$ python get-pip.py
$ pip install --upgrade pip
$ pip install mkdocs
```

## Adicionando conteúdo

Depois de instalar o MkDocs, é precisar fazer uma cópia desse repositório no seu computador. Em seguida, você deve adicionar, no lugar apropriado da pasta docs deste repositório, o conteúdo que você deseja adicionar. Por último, adicione o arquivo que você adicionou na hierarquia correta da "função" nav do arquivo mkdocs.yml. Em caso de dúvida, [siga esse guia](https://www.mkdocs.org/user-guide/writing-your-docs/).

## Teste 

Para testar se tudo funcionou, digite no terminal o seguinte:
```bash
$ mkdocs build
$ mkdocs serve
```
E digite http://127.0.0.1:8000/  no seu navegador.

## Deploy

Caso tudo esteja funcionando, tudo que você precisa fazer é enviar para a GitHub Page usando os comandos
```bash
$ mkdocs gh-deploy
```
Após alguns minutos, as mudanças serão enviadas ao site.

## Avisos

Se possível nunca edite a branch gh-pages deste repositório, o comando gh-deploy configura tudo automaticamente naquela branch para a página funcionar. As edições para adicionar, retirar ou modificar conteúdos deve ser feita na main branch.
Cuidado ao alterar parâmetros no arquivo mkdocs.yml fora da função nav. Para entender mais sobre o mkdocs.yml, [leia esse documento](https://www.mkdocs.org/user-guide/configuration/).
