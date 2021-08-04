# RPLidar 360 S1
![Lidar360](/imgs/LIDAR.jpg)
É um Lidar rotativo, mede as distâncias entre o ambiente em 360 graus e o próprio lidar, permitindo mapeamento e localização indoor, além de desvio de obstáculos

## 1. Conexão em Hardwre
É praticamente um "plug 'n play", ele vem com três cabos e um adaptador. O adaptador você consegue regular a baudrate de comunicação, e a entrada dele é conectada no USB do computador, e a outra seria um cabo de alimentação, que no caso não precisa ser conectado. Já a outra ponta do adaptador é só conectar no Lidar.
Obs: A alimentação do Lidar é de 5V e com consumo máximo de 3A (Para nós nunca uma usb de 1A deixou de ser suficiente)

## 2. Driver/Firmwre/SDK
O driver que utilizamos para conectarmos diretamente o Lidar com o ROS é o feito pela Slamtec, em que a Skyrats tem um Fork específico dele com a versão mais recente do SDK(https://github.com/SkyRats/rplidar_ros). O que no repositório principal ainda está desatualizado.

Além disso, algumas vezes, testando conexões diferentes acabamos tendo problemas com a versão do Firmware interno do Lidar que veio de fábrica, e p/ isso a Slamtec ja fornece no site deles um instalador que faz o trabalho de compilar e dar upload do firmware(https://www.slamtec.com/en/Support), precisando apenas informar a porta e baudrate.

Dentro desse mesmo site a Slamtec fornece o SDK p/ todos os sistemas, e caso você queira fazer algo que não esteja implementado no driver p/ ROS, todo o resto está implementado em mais baixo nível la.

## 3. Conexão com ROS
O package rplidar_ros já vem pronto para ser clonado em um catkin workspace e utilizado através do comando roslaunch, como o nosso lidar é o S1, o arquivo que deve ser utilizado para nossas aplicações é o rplidar_s1.launch 

Para testes a respeito da leitura do sensor, também pode ser usado o view_rplidar_s1.launch, que consiste na mesma coisa que o comando anterior com adição de uma janela do rviz já configurada para obter a leitura do laser

![RViz](/imgs/LIDAR360RVIZ.gif)
Caso alguém tenha interesse no funcionamento do node ROS com mais detalhes, o código fonte pode ser encontrado em src/node.cpp e é o unico presente neste package

Em termos de tópicos publicados, o funcionamento desse node é simples, contendo apenas um publisher. O tópico criado tem o nome de "scan" e recebe constantemente a leitura do sensor em formato sensor_msgs/LaserScan, que pode ser encontrado em http://docs.ros.org/en/api/sensor_msgs/html/msg/LaserScan.html

Já em serviços ROS, temos apenas dois: stop_motor e start_motor, ambos os quais recebem std_srvs/Empty e funcionam para ligar e desligar o motor do lidar

Finalmente, quanto aos parametros, podem ser encontrados serial_port (string, default: /dev/ttyUSB0), serial_baudrate (int, default: 115200), frame_id (string, default: laser_frame), inverted (bool, default: false), angle_compensate (bool, default: false), scan_mode (string, default: std::string()). Exemplos de configuração desses parametros podem ser encontrados em diversos arquivos na pasta /launch e podem ser alterados para usos especificos.
Um destaque especial deve ser feito ao scan_mode, visto que o valor default não está disponível para o RPLidar 360 S1, e deve ser trocado para Standard ou Boost quanto iniciado através de um .launch fora desse package.

## Aplicações externas
Aplicações externas comumente vão depender do tópico publicado, uma coisa importante para se lembrar é que muitas delas utilizam como padrão um tópico /laser/scan (é o que aparece para os casos de lidar simulado!), que deve ser trocado para apenas scan. Outro detalhe que complica o uso de softwares externos é o uso do ROS package tf2, que funciona para gerar diversos sistemas de coordenadas no robô controlado, o que, por exemplo, é muito util para aplicações de localização e mapeamento (SLAM). Para esses casos, recomenda-se um estudo dos links do robô em questão e do laser para configurar corretamente o node que se deseja utilizar, a documentação pode ser encontrada em http://wiki.ros.org/tf2
Uma solução para uso em cima de nosso drone já foi implementada e pode ser encontrada no reposítorio motion_planning em nosso github (note que a configuração está tanto em mapping_default.launch quanto em mapping.launch)






















































<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
Tags: RPLidar 360 S1, Lidar 360 ROS, Drone, PX4, PX4 Lidar 360