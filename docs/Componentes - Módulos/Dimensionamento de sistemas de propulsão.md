# Dimensionamento de sistema de propulsão
> *Escrito por [Artur Paparounis](https://github.com/artur-papas). Última atualização: 19/01/2023*

O dimensionamento do sistema de propulsão é a principal etapa para definir a massa, autonomia, agilidade, velocidade e tamanho de seu drone. Os componentes a se dimensionar são as hélices, motores, ESCs e a bateria a ser utilizada.


## Restrições / Requisitos

Para iniciar seu dimensionamento é importante estar atento a quais requisitos mínimos e restrições são impostas pelo resto do drone ou pelo seu uso. Entre as principais restrições estão:

 - Tamanho da hélice limitado pelo tamanho do frame já desenvolvido ou idealizado
 - Peso máximo do drone limitado por regras de uma competição
 - Tamanho da bateria limitado pelo espaço disponível no drone
 - Orçamento disponível para o projeto

Já entre os principais requisitos estão:

 - Autonomia de tempo de voo ou de distância mínima para realizar tarefa
 - Relação de empuxo peso mínima para agilidade do drone
 - Velocidade máxima capaz de realizar tarefa dentro de restrição de tempo

## Tradeoffs e guias para o dimensionamento de cada componente

O dimensionamento do sistema de propulsão consiste em ajustar alguns parâmetros de cada componente de forma a obter a combinação que melhor sirva para as necessidades e gere vantagens nas missões realizadas. No geral, pode-se realizar esse processo de forma puramente iterativa, observando todas as combinações possíveis de componentes e analisando qual resultado elas geram. Contudo, saber na teoria quais são os efeitos de cada mudança podem agilizar muito esse processo e gerar um resultado mais barato e efetivo.

### Bateria

Para o dimensionamento da bateria, alguns parâmetros da bateria devem ser levados em consideração. Aqui assumo o uso de baterias LiPo, por serem as mais usadas na equipe pela sua taxa de descarga, tempo de vida e densidade de carga. Entre os parâmetros principais estão:

 - **Tensão** - Determinada pelo número de células da bateria, quanto maior a tensão maior será a velocidade máxima de rotação do motor e assim maior será seu empuxo máximo. Há uma leve perda de eficiência quando há uma subida de tensão de bateria, da ordem de 4 a 8% por célula. Essa perda varia muito por torque, voltagem realmente utilizada, qual o aumento de voltagem que está se avaliando, etc.
 - **Taxa de descarga** - A taxa de decarga da bateria consiste na corrente máxima que sua bateria pode fornecer. Baterias com uma taxa de descarga maior permitem drones mais potentes. Esse valor normalmente é dado como XC, onde o numero X de unidade C deve ser multiplicado pela capacidade em Ah da bateria para obter a taxa de descarga. Por exemplo, uma bateria de 4000mAh com uma taxa de descarga de 20C pode fornecer 80A no máximo. Baterias com mais taxa de descarga tendem a ser mais caras e não recomenda-se deixar a bateria com um consumo próximo de sua taxa máxima por periodos extensos de tempo.
 - **Capacidade** - A capacidade da bateria é dada por sua quantidade de Wh disponíveis, contudo, nas baterias os Ah são mostrados e devem ser multiplicados pela tensão para se chegar no valor real. Assim, uma bateria de 4000mAh e 6s(25,2V) tem a mesma capacidade de uma bateria de 6000mAh e 4s(16,8V), que é 151,2Wh. Quanto maior a capacidade da bateria maior o tempo de voo possível com o drone, contudo, baterias maiores são mais pesadas, diminuindo o empuxo peso, aumentando o RPM necessário, aumentando o consumo de energia e possívelmente diminuindo a eficiência. Assim, baterias menores as vezes são vantajosas para a própria autonomia do drone. No geral as baterias de LiPo apresentam uma densidade de carga constante, aumentando seu peso linearmente com a capacidade, mas essa relação não se mantém sempre e normalmente baterias menores tem densidade de carga um pouco maior.

### Hélice
- **Diâmetro** - O diâmetro da hélice é representado pelos primeiros 2 digitos de seu nome, sendo sempre exposta em polegadas. Logo, uma hélice 7030 tem 7 polegadas de diâmetro. Hélices maiores são um dos maiores ganhos de eficiência em drones, além de também gerarem mais empuxo máximo para um mesmo motor. Contudo, hélices maiores necessitam de mais torque e tem um consmo máximo maior, podendo gerar superaquecimento ou um consumo excessivo de potência que não é suportado pelo motor, podendo gerar danos. Por fim, o aumento de diâmetro também aumenta o momento de inércia da hélice, diminuindo a agilidade do drone.
- **Pitch** - O pitch da hélice é sua inclinação, dado pelos ultimos 2 digitos do nome da hélice. Assim, uma hélice 6040 tem 4 polegadas de pitch (o pitch é dado em polegadas e não em unidades angulares, mas isso não afeta a escolha). Um pitch maior faz com que uma hélice gere mais empuxo máximo para um mesmo motor e diâmetro, mas também gera maior consumo e uma perda de eficiência.
- **Corda** - A corda da hélice consiste na distância entre a borda de ataque e a borda de fuga. Essa distância não é dada no nome da hélice mas pode ser encontrada para a maioria das hélices. A corda da hélice aumenta o empuxo máximo da hélice, mas também diminui eficiência e aumenta o consumo máximo. Ademais, aumentar a corda da hélice aumenta o momento de inércia, tornando mudanças de velocidade um pouco mais lentas e assim tornando o drone menos ágil.
- **Número de pás** - O número de pás normalmente é fornecido após o nome da hélice ou assumido como 2 pás. O aumento nessa quantidade tem um efeito muito similar ao do aumento de corda, mas a perda de eficiência é mais pronunciada, visto que há mais vórtices gerados nas pontas das pás.

### Motor
- **Altura e diâmetro** - A altura e o diâmetro do motor são apresentados nos 4 digtos de seu nome, sendo os 2 primeiros o diâmetro (em mm) e os 2 últimos a altura do rotor (em mm). O aumento do volume total do rotor é proporcional ao torque gerado, gerando também um aumento em potência e eficiência. Contudo, motores maiores são mais pesados, aumentando a massa do drone e seu momento de inércia, diminuindo a agilidade do drone. Por fim, a razão entre o diâmetro e a altura do rotor é importante, pois quanto maior esse número aumenta as capacidades de resfriamento mas também o momento de inércia do rotor. Idealmente, esse número deveficar entre 3:1 e 5:1, mas razões menores são viáveis.
- **KV** - O KV do motor é a outra informação normalmente dada acompanhando seu nome. Seu significado é a rotação do motor (em rpm) para cada Volt aplicado. Ou seja um motor de 1000KV, com 100% de throttle e uma bateria de 4s (16,8V) roda a 16800 rpm. O aumento de KV tem um efeito similar ao aumento de tensão da bateria, aumentando a velocidade máxima de rotação e o empuxo máximo, porém sem a perda teórica de eficiência. Contudo, na prática, principalmente quando lidando com KVs mas altos (acima de 2000), há sim uma perda de eficiência que se deve a uma diminuição na qualidade de constução do motor, visto que KVs mais altos são mais dificeis de serem produzidos de forma perfeitamente eficiente. Essa perda de eficiência é menor do que a gerada no aumento de tensão na bateria para KVs abaixo de 2000 e maior para KVs acima de 4000, mas isso pode variar muito, princpalmente com motores de qualidade maior, nos quais esse efeito é menos pronunciado.
 

## Processo iterativo de dimensionamento


### Uso do Ecalc
Apesar de ser possível ter uma noção de quais são os efeitos de cada mudança nos parâmetros dos componentes, o processo de dimensionamento acaba sendo iterativo, pois não é possível achar o valor teórico que otimiza os resultados. Logo, é necessário escolher uma configuração inicial e ir variando os componentes e observando o resultado obtido até achar uma configuração satisfatória.
Para analisar esses resultados usamos o Ecalc Xcopter, um programa online e pago que permite ao usuário selecionar as configurações do drone e obter resultados como:

 - Tempo de voo em diferentes tipos de uso
 - Distância máxima alcançável
 - Relação empuxo-peso
 - Eficiência
 - Consumo de bateria
 - Temperatura alcançada pelo motor
 - Potência máxima e utilizada do motor

Ao usar o ecalc, 2 métricas nunca devem ser excedidas, a temperatura crítica e a potência máxima do motor. Mesmo que a configuração testada apresente ótimo desempenho, se ela exceder esses parâmetros ela não será viável ou gerará danos aos componentes do drone.

![Input](./assets/Input.jpg)

No geral, só é preciso modificar os seguintes campos: peso; quais componentes são considerados no peso colocado; célula da bateria; número de células; tipo de ESC; fabricante do motor; modelo do motor; tipo de hélice; diâmetro da hélice; pitch da hélice; número de pás.
O campo de procurar motores abre uma janela onde é possível pesquisar motores por peso, tamanho, kv, marca e potência máxima.

![Resumo](./assets/Resumo.jpg)

Aqui estão dispostos os principais resultados de desempenho do drone. Os dados de tempo de voo pairando e empuxo-peso são as principais métricas de desempenho a serem avaliadas no drone. Já os valores de potência elétrica e temperatura mostram se a configuração é viável ou se danificará os componentes.

![Detalhado](./assets/Detalhado.jpg)

Aqui estão todos os dados gerados pelo Ecalc, como consumo, eficiência, corrente, empuxo e peso do drone em diferentes condições de voo.

![Alcance](./assets/Alcance.jpg)

Esse gráfico mostra o alcance e o tempo de voo do drone em diferentes velocidades constantes diferentes.

 ### Etapas do dimensionamento
O processo de dimensionamento deve ser feito, normalmente, nessa ordem:
	 1 - Determinar a massa aproximada do drone sem os componentes de propulsão. Ou seja, a soma do frame, controladora de voo, computador de bordo, telemetria, receptor RC, PMBs, UBECs, sensores, etc.
	 2 - Determinar diâmetro máximo da hélice que faz sentido com o frame e a utilização prevista
3 - Determinar o requisito mínimo de voo e o requisito a ser máximizado. Por exemplo, ter um empuxo-peso mínimo de 2,5 e maximizar o tempo de voo, ou voar por 10 minutos mas ter um empuxo maior possível para carregar um Payload mais pesado.
4 - Colocar no ecalc o peso do drone estimado sem os componentes, o diâmetro máximo da hélice (colocar tipo genérico de hélice).
5 - Testar variações de motor e bateria que temos na equipe com varições aleatórias de pitch e numero de pás das hélices (hélices são mais baratas e variadas do que os outros componentes). Observar nessa etapa quais são os efeitos da capacidade da bateria, kv do motor, pitch da hélice e número de pás nas métricas de voo, buscando observar tendências e inferir pontos de máximo.
6 - Procurar e testar motores e baterias que não temos na equipe mas que sigam mais as tendências e se aproximem mais dos pontos de máximo de performance observados na etapa anterior. Sempre buscar motores de maior qualidade (marcas conhecidas, maior limite de potência e mais leves). Aqui deve-se observar se é possível um ganho muito significativo caso novas compras sejam feitas, ou se o que ja temos é próximo o suficiente de otimizado. Novamente pode-se variar o pitch e numero de pás livremente para achar a melhor performance.

Ao final do processo, será possível encontrar a melhor combinação de motor, hélice e bateria possível para a aplicação, além da melhhor que ja temos disponível. Caso o ganho de performance seja grande, pode ser interessante adquirir alguns componentes que proporcionem esse ganho.
Ao final do processo, deve observar-se qual o consumo máximo de corrente de cada motor, como dado pelo ecalc, e a partir disso escolher um ESC com especificação de corrente acima da prevista. É interessante deixar no mínimo cerca de 15-20% de sobra, pois problemas elétricos, ruídos e ineficiências podem gerar uma pequena subida na corrente e queimar um ESC que foi dimensionado para operar muito próximo do consumo previsto.

	 
## Drone silencioso

Na maioria das situações tentamos otimizar o drone para características de voo, como estabilidade, empuxo-peso, tempo de voo, eficiência, agilidade, etc. Mas em algumas aplicações, como para uma das missões da IMAV 2022, é interessante otimizar o drone para diminuir o barulho gerado. 
O som alto e característico dos drones tem 2 fontes principais: a rotação do motor e a rotação das hélices.
No geral, motores e hélices que exercem menos força e rodam em menor velocidade geram menos barulho. Assim, uma das principais maneiras de se diminuir o som do drone é diminuir seu peso, assim diminuindo o empuxo necessário para manntê-lo parado ou para acelerá-lo.
### Barulho do motor
O som da rotação do motor é principalmente elétrico, e se da pelos ruídos e imperfeições na velocidade angular, que não é constante quando um ESC comum é utilizado para controlar o motor. Isso porque ESCs comuns utilizam ondas quadradas para mover o motor, assim gerândo ineficiências e pequenas variações de aceleração angular durante 1 revolução.
Uma forma de mitigar esse efeito é o uso de ESCs FOC, que usam ondas senoidais para controlar o motor, evitando essas eficiências e variações que geram ruídos.
Motores que rodam mais devagar também geram menos ruídos, assim, motores de menor KV tem muita vantagem nesse aspecto.
### Barulho das hélices
O som da rotação da hélice se da pela perturbação que ela gera no ar, gerando ruídos de alta frequência e volume. Esse som é mais alto do que o gerado pelos motores, assim diminuí-lo é mais crucial para deixar o drone mais silencioso. Para diminuir esses ruídos, deve-se minimizar a parturbação que a hélice gera no ar. Assim, as principais modificações que diminuem o ruído são:

 - **Aumentar o diâmetro** - Hélices maiores geram o mesmo empuxo rodando mais devagar, assim também gerando menos barulho.
 - **Diminuição de pitch** - Hélices com menos pitch perturbam menos o ar a cada rotação, assim gerando menos ruído sonoro.
 - **Aumento de corda e número de pás** - Para possibilitar o voo do drone com o mínimo de pitch possível, é necessário aumentar a área em contato com o ar. O aumento do número de pás e da corda delas pode gerar um empuxo similar enquanto permite uma diminuição de pitch e assim de ruídos.
 - **Escolha de hélice mais aerodinamicamente eficiente** - Algumas hélices, principalmente as que tem mais arredondamento e aerodinâmica em suas pontas, são mais eficientes aerodinâmicamente, podendo gerar menos ruídos. Já hélices mais retas e truncadas geram mais empuxo para o mesmo diâmetro, mas tambêm geram maiores ruídos.
 - **Preocupação com o frame abaixo da hélice** - Caso as hélices, e principalmente suas pontas, passem muito próximas verticalmente de outras partes do drone, gerarão zonas de maior pressão e perturbação no ar, aumentando o ruído. Assim, é interessante deixar um espaço livre abaixo das hélices para que possam passar longe de outros componentes e estruturas.

## Observações e dicas finais
Para descobrir boas marcas de motor é interessante pesquisar na internet, mas na aba de procura de motor no ecalc, motores com mais pontência máxima e menos peso normalmente são melhores.
Para alguns usos, o tempo de voo variado é mais indicativo da real autonomia do drone do que o tempo do voo pairando. Esses valores variam normalmente juntos, mas podem variar em sentidos opostos em alguns casos.


## Referências
**Canais sobre eficiência e desempenho de motores, hélices e baterias** 

 - https://www.youtube.com/@SiieeFPV
 - https://www.youtube.com/@PawelSpychalski

**Site do Ecalc**

 - https://www.ecalc.ch/xcoptercalc.php
