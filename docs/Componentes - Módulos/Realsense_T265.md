# Realsense T265

> *Escrito por [João Pedro S.](https://github.com/J0t4py). Última atualização: 01/08/2022* 

>Essa documentação ainda está em progresso

Esse texto tem como intúito ensinar a instalar os drivers para a tracking camera Realsense T265 e utilizá-la em conjunto com ROS e a VIO para gerar um sistema de posicionamento inercial para um drone.

>A instalação foi feita em uma Odroid, note que os processos aqui listados podem variar caso seja utilziado outro SBC. Para informações mais genéricas de instalação leia o tutorial de [como buildar a biblioteca da source](https://github.com/i2o3dlimited/librealsense2/blob/master/doc/installation.md)

## Requisitos

Antes de baixar a biblioteca é necessário instalar uma distro do ROS e instalar o mavros em algum workspace. 

## Instalação da librealsense2

Escreva terminal: `sudo apt-get install ros-noetic-realsense2-camera`
>Para utilizar outra disribuição do ROS apenas substitua o noetic pela distro desejada. Apenas tenha em mente que todo o processo foi executado utilizando a Noetic, portanto não testamos outras distribuições.

## Instalação do VIO
Para instalar o VIO execute o seguinte código dentro do workspace:

 ``` bash
git clone https://github.com/Auterion/VIO.git
catkin build px4_realsense_bridge
```

# Como configurar a Realsense
## Configure a rotação
É necessário configurar a rotação da câmera no arquivo bridge.launch dentro dos launches do VIO, para mais informações entre [nesse link](https://docs.px4.io/v1.12/en/computer_vision/visual_inertial_odometry.html)

>Por experiência própria a Realsense T265 não parece funcionar bem se não for virada para baixo

## Configure os parâmetros na px4

Os parâmetros que devem ser mudados são: 

EKF2_AID_MASK (Ative position fusion, vision velocity fusion, vision yaw fusion e external vision)

EKF2_HGT_MODE(Coloque em Vision)

EKF2_EV_DELAY(Deixe no default)

EKF2_EV_POS_X, EKF2_EV_POS_Y, EKF2_EV_POS_Z (Coloque a distância em metros da Realsense ao centro de massa do drone)

# Troubleshooting

### A Realsense não é detectada

-Tente desativar a opção do EKF2_AID_MASK Rotate external vision  
-Verifique se o mavros está conectando com rostopic echo, caso não esteja aparecendo os parâmetros que começam com camera verifique o arquivo bridge.launch e o bridge_mavros.launch  
-Tente mexer no cabo da realsense, as vezes ele fica meio solto e não é detectado.

## Referências
https://github.com/Auterion/VIO   
https://github.com/IntelRealSense/realsense-ros   
https://docs.px4.io/v1.12/en/computer_vision/visual_inertial_odometry.html
