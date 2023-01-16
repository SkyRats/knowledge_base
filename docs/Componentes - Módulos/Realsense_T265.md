# Realsense T265

> *Escrito por [João Pedro S.](https://github.com/J0t4py). Última atualização: 16/01/2023* 

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

# Observações
Desabilite o magnetometro no ros launch também  
O heading do drone está configurado voltado para a câmera


## Configure os parâmetros
SERIAL2_PROTOCOL=2  
SERIAL2_BAUD=921  
AHRS_EKF_TYPE=3  
EK2_ENABLE-0  
EK3_ENABLE=1  
EK3_SCR1_POSXY=6  
EK3_SCR1_VELXY=6  
EK3_SCR1_POSZ=1  
EK3_SCR1_VELZ=6  
GPS_TYPE=0  
VISO_TYPE=2  
COMPASS_USE=0  
COMPASS_USE2=0  
COMPASS_USE3=0  
EK3_SRC1_YAW=6  

### Para ligar todos os nodes utilize: ``roslaunch vision_to_mavros t265_all_nodes.launch``


# Troubleshooting

### A Realsense não é detectada

-Verifique se o mavros está conectando com rostopic echo. Caso estejam faltando apenas os parâmetros do /camera o problema está no publish do tópico, tente ver o log do comando usado para ligar todos nodes.  
-Tente mexer no cabo da realsense, as vezes ele fica meio solto e não é detectado.

### A realsense para de postar no tópico

-Esse erro ocorre por conta de alimentação da Raspberry Pi, reinicia o serviço. Estamos buscando uma solução definitiva para esse problema.

## Referências
https://ardupilot.org/dev/docs/ros-vio-tracking-camera.html  
https://github.com/IntelRealSense/realsense-ros   
https://dev.intelrealsense.com/docs/open-source-ethernet-networking-for-intel-realsense-depth-cameras  
https://ardupilot.org/copter/docs/common-vio-tracking-camera.html  
