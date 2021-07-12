# Configuração dos Rádio Controles (Taranis Q X7)

## Como Bindar o Controle no receptor

Para Bindar o Rádio Controle FrSky Taranis Q X7 ao Receptor FrSky Taranis X8R, pegue um objeto com ponta pois será necessário mais para frente. Ligue o Controle, mas não ligue a Controladora de voo ao qual o Receptor está conectado. 

1. Clique no `menu` (botão circular com três ricos horizintais);
2. Em seguida clique no botão `page`;
3. Ao clicar no botão page, você entrará na página de `SETUP` onde ao descer até `RxNum` você encontrará a opção`[Bnd]`;
4. Uma vez com o cursor em `[Bnd]`, tenha em mãos o objeto com ponta para eventualmente pressionar o botão minúsculo encontrado no Receptor com a escrita `F/S`;
5. Clique em `[Bnd]` e escolha a opção de canais desejada, ela começará a apitar;
6. Com a Controladora ainda desligada, pressione botãozinho com a ponta do objeto continuamente e aí sim ligue a Controladora de voo.
7. Quando uma luz verde sólida e uma luz vermelha piscando ascender no Receptor, você pode soltar o botãozinho;
8. Desligue primeiramente a Controladora de voo e depois o `[Bnd]`, parando de apitar.

Feito todos esses passos, seu Radio Controle estará bindado ao Receptor. Você pode checar isso ao ligar a Controladora de voo, e no Receptor acender uma luz sólida verde de confirmação de conexão.

OBS: Se uma luz sólida verde acender e uma luz vermelha sólida também acender, é porque há um conflito de Firmware entre o Receptor e o Transmissor. Esse erro não corresponde à um erro de versão do Firmware, mas sim que existem duas versões de Firmware, uma versão Internacional e outra versão EU, que não são compatíveis entre si. Portanto é necessário alterar o Firmware de um dos dois componentes, para que eles combinem, e depois é só Binda-los novamente.

------------------
## Como configurar os switches do Controle

Para configurar os Switches do Rádio Controle será necessário o Controle, e o Receptor, que estará conectado a uma Controladora de voo e a um computador pela Q Ground Control.
Vamos separar as instruções em duas etapas. As que serão feitas no controle, e as que serão feitas no Q Groud Control.

No Controle:

1. Clique no `menu` (botão circular com três ricos horizintais);
2. Em seguida clique no botão `page` até encontrar a página `MIXER`; 
3. Na página mixer a contagem de canais livres para serem configurados começa a partir do 5 pois os 4 primeiros são o de controle de movimentação do drone, então vamos configurar a partir do `CH5`.
4. Selecionado o `CH5` ou o canal desejado, podemos nomea-lo para identificação em `Mix name`
5. Em `Source` escolhe-se o Switch ao qual será atrelado ao canal, então seleciona-se `Source` e ativa-se o switch/clica-se no botão queremos atrelar, não precisando assim passar por toda a lista de Switches, para identificar qual você deseja.
6. Feito isso, conclui-se a parte do Controle. Você pode Configurar o máximo de Switches que vc desejar e que o Controle permitir.

Na Q Ground Control:

1. Abra o Q Ground Control, clique nas engrenagens na parte superior esquerda, e vá para `Flight Modes`
2. Em `Flight Modes` você terá uma lista de canais, ela corresponde a numeração de canais e switches que você configurou no seu controle.
3. Para cada canal, clicando na setinha para baixo, aparecem uma série de possíveis atribuições para o canal.
4. Então para configurar cada canal basta selecionar o desejado, escolher a atribuição e seleciona-la. Lembrando novamente que você só poderar configurar a partir do channel 5 pois os 4 primeiros são respectivos ao controle de voo do próprio drone.

Caso queira saber mais de como setar os switches: [How to setup Switches](https://oscarliang.com/setup-switch-opentx/).  
Caso queira saber mais de como configurar os canais: [Flight Modes](https://docs.px4.io/master/en/config/flight_mode.html).  
Explicação de cada Flight Mode: [PX4](https://docs.px4.io/v1.9.0/en/flight_modes/)  ou [Ardupilot](https://ardupilot.org/copter/docs/flight-modes.html) 