# Realsense T265

> *Escrito por [João Pedro S.](https://github.com/J0t4py). Última atualização: 27/07/2022* 

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

## Referências
https://github.com/Auterion/VIO.git
https://github.com/IntelRealSense/realsense-ros
