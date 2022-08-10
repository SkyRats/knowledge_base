# ROS2

Guia simples de como rodar um script offboard em um drone com ROS2. 

## Antes de tudo... 

Considerando que o drone deve estar pronto para voar em quesitos de Hardware, é importante lembrar de deixar o Software pronto para o vôo. 

### No computador de bordo:

**Dependências obrigatórias**

- ROS2
- MAVROS2
- Python 3
- Repositórios clonados:
    - [WifiConnection](https://github.com/SkyRats/WifiConnection)
    - [Mavbase2](https://github.com/SkyRats/mavbase2)

**Demais dependências**

Lembre-se de checar quais são as bibliotecas que seu código importa e tenha certeza de ter instalado todas elas no computador de bordo

## Voo offboard
O vôo offboard é feito de forma que o script da missão roda no computador de bordo do drone, e nós nos conectamos a ele remotamente por ssh. 

Para realizar o vôo offboard:

1. Gerar um hotspot no computador que não é embarcado no drone: ```./WIFICONNECTION start``` (dentro do repositório do wifi connection)
2. Conectar pelo computador de bordo no hotspot chamado *SkyratsHotspot* (a senha é *voadronezinho*)
    - Lembre-se de checar se o computador de bordo está com um adaptador de wifi)
    - Para facilitar basta rodar ```source firstofall.sh``` e ```./connection```

3. Conectar no computador de bordo por ssh
    - Ache o ip do computador de bordo na rede local com ```nnmap -sP 10.42.0.0/24```
    - Se conecte com ```sudo ssh odroid@10.41.0.x``` (Será preciso rodar esse comando em cada aba do terminal a ser usada)
4. Checar os protocolos de segurança do drone
5. Checar se ele precisa ser calibrado
6. Checar se ele está armando normalmente
    - Se não estiver, você pode olhar na QGroundControl para saber que erro está sendo retornado
7. Rodar ```ros2 launch mavbase2 px4_usb.launch.py``` em um dos terminais do computador de bordo
8. Rodar o script de teste em outro terminal do computador de bordo

## Voo onboard
O vôo onboard é feito de forma que o script da missão roda em um computador que não é embarcado no drone, ou seja, ele roda à distância. Para 
1. Conectar uma antena de telemetria no computador
2. Checar o endereço da porta USB na qual a telemetria está conectada
/dev/
    - Ao acessar essa pasta, deve aparecer algum nome em cor de destaque, o que significa que é uma porta ativa
    - Você também pode rodar o comando ```demesg``` no terminal, que mostra as conexões recentes feitas no computador
3. Indicar esse endereço no arquivo ```config/px4_telemetry.yaml``` da mavbase2
    - Você pode editar o arquivo usando o comando ```sudo nano px4_telemetry.yaml```
    - Edite a seguinte linha: 
        ```fcu_url: /dev/ttyUSB0:57600```
    - Substitua a indicação da porta ```USB0``` pela porta ```USBX``` correspondente a que a telemetria está conectada
4. Checar os protocolos de segurança do drone
5. Checar se ele precisa ser calibrado
6. Checar se ele está armando normalmente
    - Se não estiver, você pode olhar na QGroundControl para saber que erro está sendo retornado
7. Agora é só rodar ```ros2 launch mavbase2 px4_telemetry.launch.py``` em um dos terminais do computador
8. E, por fim, rodar o script de teste em outro terminal

