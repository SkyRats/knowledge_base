# Skyrats Knowledge Base

Repositório para a organização e disponibilização de conhecimentos da equipe Skyrats.

Para criar a GitHub Page que exibe a Knowledge Base, nós utilizamos esse repositório e um programa chamado [Docusaurus 2](https://docusaurus.io/). Esse READ.MD serve para explicar como você pode utilizar essas ferramentas para adicionar novos conteúdos à Knowledge Base.

## Adicionando conteúdo

Para adicionar conteúdo à Knowledge Base é bastante simples. 

Primeiro escreva o que você deseja utilizando Markdown. Existem dois tipos de conteúdos que podem ser incluídos no nosso site: documentação e posts.

### Documentação

Caso deseja incluir alguma documentação, insira seu arquivo Markdown no diretório docs no lugar desejado. As pastas internas desse diretório servem para criar uma divisão e hierarquia na documentação.

Caso deseje utilizar uma imagem no Markdown, é necessário criar uma pasta chamada "assets" no mesmo diretório onde seu arquivo irá ficar e colocar os arquivos lá. Em alguns casos, ela já está criada.

Também é possível adicionar, no início do seu Markdown, algumas informações adicionais que dizem como o Docusaurus devem gerar o site. Para isso basta incluir.

```
---
sidebar_position: 1
id: intro
title: Introdução
---
```

- sidebar_position declara qual deverá ser a posição do seu Markdown na barra que fica no lado esquerdo do site.
- id serve para criar um código que torna mais fácil referenciar esse Markdown nos arquivos de configuração do site caso necessário.
- title indica o título que página irá deceber no site.

Caso tenha alguma dúvida, um bom exemplo para servir de guia é o arquivo intro.

### Blog

Para adicionar posts ao blog, primeiramente você deve se incluir entre os autores do blog utilizando o arquivo authors no diretório blog.

Para isso, insira seus dados após os autores já cadastrados utilizando seguinte padrão:

```
id-do-autor:
  name: Seu Nome
  title: Seu cargo na skyrats
  url: Sua página do GitHub
  image_url: Sua imagem de perfil do GitHub ou outra que desejar
```

Caso tenha alguma dúvida, siga o exemplo dos autores já cadastrados.

Após escrever o seu post em Markdown, basta colocá-lo na pasta blog e seguir alguns passos:

- Altere o nome do arquivo para o seguite padrão: YYYY-MM-DD-NOME

Isso é importante para indicar ao Docusaurus quando o post foi escrito. Um exemplo é o arquivo 2021-11-27-first-blog-post.

- Em seguida, inclua algumas informações adicionais no início do arquivo Markdown.

```
---
slug: id-do-post
title: nome-do-post
authors: id-do-autor
tags: [tag1, tag2, tag3]
---
```

Em caso de dúvida, um bom arquivo para tomar de base é o 2021-11-27-first-blog-post, que foi citado acima.

## Deploy

O deploy de novos conteúdos é feito automaticamente por meio de uma Action no GitHub na branch gh-pages. Entretanto, isso pode ser feito manualmente seguindo [esse tutorial](https://docusaurus.io/docs/deployment#deploying-to-github-pages).
