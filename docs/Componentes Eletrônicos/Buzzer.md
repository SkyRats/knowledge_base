# Buzzer

*Autor: [Felipe Beserra](https://github.com/Beserrovsky)*\
*Atualizado em 22/07/2022*

## Introdução

Este artigo pretende expor a relação do componente buzzer com a equipe SkyRats e seus usos no nosso dia a dia.\
O componente em questão é utilizado para gerar SOM 🔊 a partir de eletricidade ⚡\
Caso queira uma leitura interessante e MUITO mais completa sobre o tema, veja [Introduction to Buzzers](https://www.seeedstudio.com/blog/2020/12/22/introduction-to-buzzers-piezo-and-magnetic-buzzers/)

## Tipos de Buzzer

Um buzzer tem um funcionamento interessantíssimo e que super vale a pena dar uma olhada, PORÉM, como o intuito é mais prática do que teoria, vamos aos tipos de buzzer:

### Buzzer Ativo

**TODO**

### Buzzer Passivo

**TODO**

## Utilização

Normalmente o uso de um buzzer varia para os casos onde busca-se reproduzir diferentes frequências sonoras e o caso onde ele será utilizado apenas como indicador sonoro.\
É sempre importante ter em mente a tensão nominal de seu buzzer, normalmente é 5V.


- ## Uso com um microcontrolador

**TODO**

- ## Uso com um SBC (Single Board Computer)

**TODO**

## Amplificação com Transistor

No caso do uso de um Buzzer com uma Odroid XU4 sem ShifterShield, como a voltagem de suas portas GPIO lógicas é de apenas 1.8V é necessária a adição de um transistor ou mosfet para amplificação do sinal.\
Normalmente utiliza-se um transistor comum que agirá como interruptor eletrônico em um circuito que liga o buzzer à fonte de energia com tensão correta.

**TODO**