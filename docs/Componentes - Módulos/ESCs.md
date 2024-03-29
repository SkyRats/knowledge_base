# Como escolher um ESC?

## Individual ou 4 em 1?

São dois tipos, um ESC que controla um motor só, o individual ou os que controlam mais de um motor, os 4 em 1.

### Vantagens x Desvantagens:

O ESC múltiplo é mais caro que 4 ESCs, e se quebrar tem que trocar inteiro, ao invés de trocar só um ESC, porém ele é menor e mais leve.

## Tensão e Corrente

Devemos levar em consideração a corrente máxima do motor, pois é ela que pode danificar o ESC, e a partir dela decidir o valor do ESC que vai comprar.

Primeiro, ver se a corrente estiver muito próxima de um número redondo(30, 40, 50... etc), para cima, pode usar um ESC arredondado para baixo, pois o próprio vento das hélices faz um grande resfriamento já, mas porém se a corrente estiver mais afastada, como um com máximo de 45, 46, é melhor arredondar para cima, por questões de segurança e vida útil do ESC, por mais que o peso e o tamanho sejam maiores.

Com relação a tensão, deve-se escolher um ESC de acordo com a tensão da bateria LiPO, seja de 4s, 6s, etc...

## Calibragem de ESCs

Durante a CBR 2022 um problemão foi detectado no drone. Um dos motores estava se comportando completamente diferente dos outros, às vezes, mudar configs da controladora como o min. PWM e max. PWM ajuda, mas o que realmente solucionou o problema foi calibrar os ESCs.

É um processo super simples e rápido, feito com auxílio do controle remoto, deve ser feito **SEMPRE** na construção de drones, pois define o minímo e máximo throttle para a o ESC funcionar de maneira efetiva.

Para calibrar:

- [no Ardupilot](https://ardupilot.org/copter/docs/esc-calibration.html)
- [na PX4](https://docs.px4.io/main/en/advanced_config/esc_calibration.html)

# Referências

- [https://dronenodes.com/drone-esc-electronic-speed-controller/](https://dronenodes.com/drone-esc-electronic-speed-controller/)
- [https://oscarliang.com/choose-esc-racing-drones/#:~:text=The first thing to look,with your ESC in flames](https://oscarliang.com/choose-esc-racing-drones/#:~:text=The%20first%20thing%20to%20look,with%20your%20ESC%20in%20flames)!
