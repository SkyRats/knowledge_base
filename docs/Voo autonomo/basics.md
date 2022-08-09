# Vôo Autônomo

Guia simples de como rodar um script offboard em um drone. 

## Antes de tudo... 

Considerando que o drone deve estar pronto para voar em quesitos de Hardware, é importante lembrar de deixar o Software pronto para o vôo. 

### No computador de bordo:

**Dependências obrigatórias**

- ROS
- MAVROS
- Python 3
- Repositórios clonados:
    - [WifiConnection](https://github.com/SkyRats/WifiConnection)
    - [Mavbase](https://github.com/SkyRats/mavbase) (na branch *hardware*)

**Demais dependências**

Lembre-se de checar quais são as bibliotecas que seu código importa e tenha certeza de ter instalado todas elas no computador de bordo

## Voo offboard
O vôo offboard é feito de forma que o script da missão roda no computador de bordo do drone, e nós nos conectamos a ele remotamente por ssh. 

Para realizar o vôo offboard:

1. Gerar um hotspot no computador de bordo: ```./WIFICONNECTION start``` (dentro do repositório do wifi connection)
    - Lembre-se de checar se o computador de bordo está com um adaptador de wifi)


2. Conectar pelo pc (o que não é embarcado) no hotspot chamado *SkyratsHotspot* (a senha é *voadronezinho*)

3. Conectar no computador de bordo por ssh (```sudo ssh odroid@10.41.0.1```)
    - Será preciso rodar esse comando em cada aba do terminal a ser usada
4. Checar os protocolos de segurança do drone
5. Checar se ele precisa ser calibrado
6. Checar se ele está armando normalmente
    - Se não estiver, você pode olhar na QGroundControl para saber que erro está sendo retornado
7. Rodar ```roslaunch mavros px4.launch``` em um dos terminais do computador de bordo
8. Rodar o script de teste em outro terminal do computador de bordo

## Voo onboard
O vôo onboard é feito de forma que o script da missão roda em um computador que não é embarcado no drone, ou seja, ele roda à distância. Para 
1. Conectar uma antena de telemetria no computador
2. Checar o endereço da porta USB na qual a telemetria está conectada
/dev/
    - Ao acessar essa pasta, deve aparecer algum nome em cor de destaque, o que significa que é uma porta ativa
    - Você também pode rodar o comando ```demesg``` no terminal, que mostra as conexões recentes feitas no computador
3. Indicar esse endereço no arquivo ```px4.launch``` da mavros
    - Você pode acessar esse arquivo com o comando roscd mavros/launch, que levará à pasta onde ele está 
    - Você pode editar o arquivo usando o comando ```sudo nano px4.launch``` (precisamos usar o ```sudo``, porque a mavros não permite editar os arquivos sem privilégios da root)
    - Edite a seguinte linha: 
    
        ```<arg name="fcu_url" default="/dev/ttyACM0:57600" />```
    - Substitua a indicação da porta ```ACM0``` pela porta ```USB``` correspondente a que a telemetria está conectada (normalmente a porta é ```ACM0``` ou ```USB0``` ou ```USB1```)
4. Checar os protocolos de segurança do drone
5. Checar se ele precisa ser calibrado
6. Checar se ele está armando normalmente
    - Se não estiver, você pode olhar na QGroundControl para saber que erro está sendo retornado
7. Agora é só rodar ```roslaunch mavros px4.launch``` em um dos terminais do computador
8. E, por fim, rodar o script de teste em outro terminal

