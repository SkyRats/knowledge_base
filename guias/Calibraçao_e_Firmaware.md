# Compilamento do Firmware e Calibração do Drone

## Compilando Firmware 

O primeiro passo antes de começar a compilar o Firmware é conectar o drone ao seu computador, portanto conecte-os utilizando-se de um cabo USB. 

**OBS**: Utilize o cabo pra conectar o drone ao computador! Não faça pela telemetria pois compilar o firmware é uma tarefa pesada para se fazer por telemetria.

Depois de conectados, abra seu navegador de arquivos e vá até sua pasta de drivers: `/Firmware/src/drivers`. Lá se encontram todos os seus drivers. Caso não encontre o driver que procuras, baixe-o e salve nesta pasta. 
Depois de encontrar a pasta do Driver desejado, abra-o e procure pelo arquivo dos parâmetros, como por exemplo `parameters.c` e altere o parâmetro de acordo com sua necessidade, desabilitando-o, habilitando-o e fazendo isso de acordo com seu tipo de entrada. 

Com os parâmetros do Firmware alterados, vá para `/Firmware/boards`. Cada pasta encontrada aqui é um Firmware diferente, escolha portanto o Firmware o qual você utiliza. Escolhido um Firmware, selecione a versão que você possui. No nosso caso o nosso caminho foi `/Firmware/boards/px4/fmu-v2/`.
Nessa paste procure pelo arquivo o qual apresenta todos os drives habilitados ou não habilitados, no nosso caso ele se chama `multicopter.cmake`, mas ele pode apresentar outro nome no seu computador, isso também  de acordo com o Firmware que você utiliza. Faça uma copia dele e o renomeie da forma que for mais prática para você, pois você irá utiliza-lo.

A pixhawk, controladora o qual usamos, apresenta uma memória limitada, uma característica de sistemas embarcados, e portanto geralmente habilita-se apenas os Drivers necessários para compilar. 
Habilite então os drivers que você precisar, isso dentro do arquivo copiado e renomeado, pois não queremos alterar o arquivo original. 

Feito isso, abra seu terminal e dê `/Firmware`. Dado o comando, compile o Firmware utilizando-se do arquivo que você editou, no nosso caso o comando foi `make px4_fmu-v2_multicoptereditado`. 
Ele pode demorar um pouco, mas isso ocorre porque é um comando pesado.
Mas uma vez compilado, não é necessário compila-lo novamente a não ser que haja mudanças nos Drivers ou no Firmware utilizado. 

Enquanto ele compila, é recomendável que se salve os parâmetros de sua controladora antes de dar o upload do Firmware novo. Ele é um arquivo `.params` e pode ser salvado pelo QGroundControl.
Com o QGroundControl abra o `Vehicle Setup` (três engrenagens na parte superios esquerda), desça até os `Parameters`, clique em `Tools` (na parte superior direita), e selecione `Save to file .params`

Depois de compilado, basta dar o upload. No nosso caso o comando foi `make px4_fmu-v2_multicoptereditado upload`. 
Concluído o upload, seu Firmware está compilado e instalado na sua controladora de voo.

Caso precise de ajuda com o compilamento acesse: [Building the code - PX4](https://dev.px4.io/master/en/setup/building_px4.html).  


--------------
## Calibração

Para calibração, iremos primeiro carregar o arquivo `.params` que foi salvo anteriormente, ou que possuímos salvado no computador. Iremos então rebootar para que o processo se complete. 
Uma forma bacana de fazer isso é abrindo o `Analyze` (desenho de um papel com uma lupinha ao lado), indo em `MavLink Console` e digitando na barra de comando inferior `reboot`. 

Carregado os parâmetros e rebootado, precisamos selecionar o tipo de veiculo utilizado, portanto vá em `Vehicle Setup`, abra o `Airframe` e selecione o que condiz com o seu. 

Feito isso, é necessário calibrar os sensores, então vá em `Sensors`. Note que alguns deles apresentarão bolinhas vermelhas ao seu lado, este serão os sensores que você precisará calibrar. 

Para calibrar, será necessário movimentar o drone, portanto é recomendável que utilize-se da Telemetria pra estabelecer a comunicação entre o drone e o QGroundControl. Desconecte o cabo USB entre o drone e o computador, e também o USB que liga a Jetson à Pixhawk, conecte a Ground station no seu computador e ligue o seu drone. Concluído isso eles deveriam se conectar.

Uma vez conectados, note que no `Summary` aparecem os mais variados itens, no qual se a bolinha apresenta-se vermelha, é necessário uma correção antes de executar um voo.

Novamente, em `Sensors`, cheque os sensores que se apresentam em vermelho e os calibre. Clique no Sensor, aparecerá uma barra sua lateral direita, lá clique em `OK` e ele te redirecionará para a página de calibração do sensor. Cada sensor possui tarefas específicas para que a calibração seja feita, execute-as de acordo com as instruções e pronto, este sensor estará calibrado. 

Um problema o que você pode se deparar é que sua controla de voo possui direções pré definidas como Yaw, Pitch e Roll, mas que não condizem com a orientação o qual você está usando. Para corrigir, a aba que aparece a sua direita possui a opção de rotacionar essas orientações girando determinada quantidade de graus entorno de tal eixo. Após selecionada a opção adequada é necessário rebootar, depois de rebootar veja se o problema foi corrigido.

Caso precise de ajuda com as orientações acesse: [Roll, Pitch and Yaw - PX4](https://docs.px4.io/master/en/config/flight_controller_orientation.html).
