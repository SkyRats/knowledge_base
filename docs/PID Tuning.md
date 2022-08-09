# PID Tuning

> *Escrito por [Enzo Belém](https://github.com/b3ls). Última atualização: 05/08/2022*

## Background

Essa parte é a história de como o autor descobriu como usar o PID e deixou a equipe skyrats_drones muito feliz  (Altamente skipável).

Quando estávamos montando alguns drones para a Imav nos deparamos com um problema sério de vibração. Os drones saiam do chão tremendo como se fossem uma pessoa calorenta na Antártida, isso fazia com que os motores esquentassem, GPS não funcionasse e o drone não voasse de forma correta e elegante. A príncipio parecia que era um problema mecânico, estando os motores girando na frequência de ressonância do sistema todo. O subsistema Hardware se prontificou para ter certeza de que o problema não era relacionado aos componentes e aos softwares de controle do quadcopter. Dito isso, testamos PIDs em vários drones esperando consertar a vibração deles, contudo o resultado foi o oposto do esperado: Flipamos e quebramos (alguns) drones e pior, decepcionamos alguns subsistemas e colocamos a culpa na mecânica.
 Fomos para casa tristes com o rabo entre as pernas mas como diz o ditado, o bom filho à casa torna e lá estava eu no CITI no dia seguinte 7h30 da manhã pesquisando soluções para o problema. Toda a internet dizia que o problema era PID e sabemos que tudo que está lá é verdade, então o problema só poderia ser do controle do drone que estava com parâmetro muito mal calibrados. Assim, fui eu testar botando na mente que a segurança sempre vem em primeiro e assim, meus amigos, o resto é históra...

## Definições 

-Proportional: Quão responsivo é o drone. Quanto maior o valor, mais responsivo (sharper) ele ficará, contudo ele pode dar overshoot e acabar tendo vibrações de alta frequência (analogia humana: uma pessoa com mt frio mexe a mandíbula bem rápido). Se o valor diminuir, ele ficará menos responsivo, dando uma sensação de bobão e acabar respondendo devagar/lentamente.

-Derivative: O quanto a controladora amortecerá o overshoot causado pelo P (analogia automobilística: o amortecedor de um carro para impedir que a suspensão fique balançando depois de passar pela lombada). Se o valor for muito alto ele pode começar a causar vibração também, causando superaquecimento do motor (então tome cuidado!). Se o valor for muito baixo o drone pode ficar bobo também.

-Integral: É a responsividade do drone em relação às forças externas, por exemplo o vento e o centro de gravidade deslocado. Seria como ele ficasse bem preso à posição atual dele sem dar input no controle (incluindo a altitude). Se o valor está muito baixo é possível que ocorra drift principalmente na utilização do throttle. Se o I for muito alto é possível que o quad não responda bem e dê a sensação que ele está muito duro na hora do deslocamento (Parecido com um P baixo demais), além disso é possível que isso cause oscilções de baixa frequência.

## Calibrando

Geralmente, quando há um problema de PID, um bom exercício é ir diminuindo o P(ou K na QGround). Isso vai deixando o drone menos arisco e acaba resolvendo o problema na maioria dos casos. No entanto, ele pode ficar bem bobo, então se for necessário aumentar a responsividade pode-se aumentar levemente o P e aumentar o D cautelosamente para queimar os motores.
Se isso não der certo, o motivo da oscilação pode ser um D excessivo, então o correto é diminuir o derivativo até o ponto que ele pare e vibrar.
O I muito provavelmente não é a fonte do problema então o melhor mesmo é não mexer nele, mexa apenas por curiosidade e se tiver problema de drift (nunca deu certo comigo mas pode dar com você).

## Cautelas

- Quando estiver na QGround, coloque o Thrust Curve para 0.3, desabilite o autotune e pode começar a calibrar. Nunca esqueça de mexer tanto no Pitch quanto no Roll!!!!!
- A QGround não possui P, mas sim K. A única diferença é que o K é o overall, isso significa que ele não mexerá só no P, mas sim em todos modos (P, I e D). Então se você mover os valores de K, é necessário reduzir/aumentar os valores de D e I proporcionalmente.

## Referências

https://oscarliang.com/quadcopter-pid-explained-tuning/