# Introdução ao Hardware

## Componentes e Montagem

### Motores, ESCs e Hélices

1. Motores:

Boa parte dos motores p/ drones são brushless, eles são conectados aos ESCs. Em um drone, metade dos motores precisam girar em um sentido, e a outra metade em outro, assim evita que o drone tenha um torque desigual, fazendo ele girar no próprio eixo. (Mesma função da pazinha pequena no rabo do helicóptero).

2. ESCs:


Tem a função de transformar o sinal de PWM (Controle de velocidade por pulsos), de baixa potência, que vem da controladora de voo, em um sinal de alta potência, usando a energia da bateria.

3. Hélices:

Elas existem de dois tipos, para motores que vão rodar em sentido horário e antihorário.

### Controladora de vôo e PMB

1. Controladora de voo:

É um dos principais componentes do drone. É responsável por receber e processar sinais de entrada dos sensores e as saídas para os motores e eventuais outros atuadores. Normalmente possuem sensores importantes embarcados nativamente, como giroscópio, acelerômetro, bússola entre outros. Sua principal função é mapear os comandos recebidos para controlar os movimentos de ROLL, PITCH e YAW do drone, além de estabilizar o voo.

2. PMB:

_Power Management Board _é a placa responsável por distribuir a potência pelo drone, alimentando todos os componentes necessários, e no caso da Pixhawk 4 esta placa também é responsável por medir o consumo de corrente e a tensão da bateria bem como distribuir os sinais para os ESCs e outros componentes que usem entradas de FMU.

### Baterias:

As baterias têm uma função super importante na criação de drones, elas são as responsáveis pela quantidade de tempo que o drone permanecerá no céu! Quanto mais carga a bateria possui, mais tempo de voo (desconsiderando o peso é claro).

### Telemetria:

Responsável por transmitir informações e comandos do Drone para o solo e vice-versa. Pode ser utilizada para transmitir o status da bateria, posição atual, imagens e vídeos capturados e comandar o drone caso o computador de bordo não esteja funcionando como deveria.

### GPS:

Permite descobrir a latitude, longitude, velocidade e direção do drone baseado em uma constelação de satélites.

### Controle e Receptor 

1. Rádio Controle:

Componente que transmite pilotar o drone manualmente, através da transmissão de informações que alteram sua posição, permitindo que ele execute tarefas como Roll, Pitch e Yaw, assim como trocar modos de voo e tomar medidas de segurança.

2. Receptor:

Componente que recebe as informações dadas pelo Rádio Controle, e as transmite para a Controladora de voo.

### Computador de bordo

1. Ele vai rodar um sistema operacional próprio e alguns scripts, e assim, conectado à controladora de voo, podendo deixar o drone autônomo.

### Sensores e outros componentes

1. Lidar:

É um método de sensoriamento que utiliza pulsos de laser para medir distâncias dando assim uma visão  tridimensional para nosso drone com altíssima precisão.

2. Câmera térmica:

Cria imagens baseado na quantidade de radiação emitida pelos corpos, o que nos permite estimar a sua temperatura. Nós utilizamos para identificar pessoas (ou dummies) em lugares com baixa visibilidade.

3. Optical Flow:

É uma câmera que mede o movimento do drone baseado na movimentação dos pontos presentes na imagem.

## **O Drone (1p)**

1. Ground Station

 1. Q Ground Control:


É a interface gráfica utilizada em um computador/notebook/celular para obter uma comunicação drone-piloto que vai além do que apenas um rádio controle. Ela permite calibrar o drone, configurar parâmetros, monitorar, fazer voo simples e criar planejamentos de voos.

2. Firmware

Firmware é o software embarcado na controladora de voo, e tem a função de fazer o controle mais básico e de baixo nível do drone.

Exemplos:

 1. PX4	

 2. Ardupilot

## Boas práticas de Hardware (1p)

1. Não queimar o amiguinho com ferro de solda? goxto rs 

2. Muito cuidado ao manusear as baterias LiPo pois são muito voláteis, sempre respeitando os procedimentos para carregamento e os níveis de descarga recomendados (descarga máxima 20%)

3. Verificar as ligações de acordo com os devidos circuitos esquemáticos antes de energizar qualquer circuito a fim de evitar a queima de componentes ou riscos ao operador

4. Sempre se atentar para a qualidade e segurança das ligações ao testar componentes isolados em bancada, evitando curtos e danos aos equipamentos.

## Boas práticas de vôo (1p)

### Protocolo de vôo

Sempre usar o nosso protocolo de vôo antes de pilotar algum drone feito pela equipe(https://skyrats.github.io/knowledge_base/Introdução/preflightcheck/), caso seja um drone comercial, usar o próprio protocolo de vôo.

### Modos de vôo básicos da PX4 (https://docs.px4.io/v1.9.0/en/flight_modes/)

1. Position

 1. O throttle fica no meio do canal

 2. Usa o GPS para controlar e ajustar sua posição

 3. Mais fácil de controlar

2. Stabilized

 1. O throttle fica na parte inferior do canal

 2. Não usa GPS para ajustar posição

 3. Meio difícil de controlar

3. Altitude

 1. Igual o stabilized, porém mantém a altitude do drone controlada

4. Manual

 1. Controle 100% manual do drone, sem estabilizações.

 2. Muito difícil de controlar

5. Todos esses modos existem no ardupilot, só que com alguns outros nomes: [https://ardupilot.org/plane/docs/flight-modes.html](https://ardupilot.org/plane/docs/flight-modes.html)
