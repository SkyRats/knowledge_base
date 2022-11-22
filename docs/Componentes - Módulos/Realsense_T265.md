# Realsense T265

> *Escrito por [João Pedro S.](https://github.com/J0t4py). Última atualização: 22/11/2022* 

Esse texto tem como intúito ensinar a instalar os drivers para a tracking camera Realsense T265 e utilizá-la em conjunto com ROS e a VisionToMavros para gerar um sistema de posicionamento inercial para um drone.

>A instalação foi feita em uma Raspberry , note que os processos aqui listados podem variar caso seja utilziado outro SBC. Para informações mais genéricas de instalação leia o tutorial de [como buildar a biblioteca da source](https://github.com/i2o3dlimited/librealsense2/blob/master/doc/installation.md).

Documentação ainda em execução
## Requisitos

Antes de baixar a biblioteca é necessário instalar uma distro do ROS e instalar o mavros em algum workspace. 

## Instalação da librealsense2

Utilize o guia de como buildar da source acima. Na hora de rodar o CMAKE adicione as seguintes flags: 
-DBUILD_NETWORK_DEVICE=ON
-DFORCE_RSUSB_BACKEND=ON

## Instalação do VisionToMavros
Para instalar o VisionToMavros execute o seguinte código dentro do workspace:

 ``` git clone https://github.com/hoangthien94/vision_to_mavros.git
cd ..
catkin_make
source ~/.bashrc
echo "source ~/catkin_ws/devel/setup.bash"
```

# Como configurar a Realsense
Desabilite o magnetometro
## Configure a rotação


## Configure os parâmetros


# Troubleshooting

### A Realsense não é detectada

-Verifique se o mavros está conectando com rostopic echo, caso não esteja aparecendo os parâmetros que começam com camera verifique o arquivo bridge.launch e o bridge_mavros.launch  
-Tente mexer no cabo da realsense, as vezes ele fica meio solto e não é detectado.

### A realsense para de postar no tópico

-Esse erro ocorre por conta de alimentação da Raspberry Pi, reinicia o serviço. Estamos buscando uma solução definitiva para esse problema.

## Referências
https://ardupilot.org/dev/docs/ros-vio-tracking-camera.html
https://github.com/IntelRealSense/realsense-ros   
https://dev.intelrealsense.com/docs/open-source-ethernet-networking-for-intel-realsense-depth-cameras
