# Ardupilot for Skyrats
Usamos como firmware secundário, quando é necessária alguma função ou especificação que não existe na PX4, como por exemplo, usar a porta CAM, como UAVCAM para usar informações de GPS.
Caso não tenha ele baixado ainda, realize as instruções do guia de instalações.

## Compilar

```bash
#Instala dependências necessárias do firmware:
. ~/src/ardupilot/Tools/environment_install/install-prereqs-ubuntu.sh -y
. ~/.profile

#Instala dependências necessárias do python:
pip install future

#Lista todas as placas nas quais o ardupilot pode ser compilado
./waf list_boards

#Escolher a controladora de vôo
./waf configure --board Pixhawk4

#Escolher tipo de veículo
./waf copter

#Fazer o upload da última config de Firmware compilada
./waf --targets bin/<nome_do_arquivo> --upload
```