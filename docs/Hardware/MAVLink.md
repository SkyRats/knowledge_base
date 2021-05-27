# MAVLINK

## Introdução

MAVLink é um protocolo utilizado para a comunicação de veículos aereos não tripulados entre si e com o computador de bordo e a estação de controle.

Existem duas versões. Na MAVLink v1.0, cada mensagem possui entre 8 e 263 bytes, sendo 255 de carga útil máxima. Na versão 2.0, as mensagens variam entre 11 e 279 bytes, tendo a mesma carga útil.

Por meio da MAVLink, é possível mandar comandos para tirar foto, pedir para o drone ir até um ponto, realizar download do log de voo e requisitar informações como altitude, velocidade, posição etc.

A MAVLink também é uma parte fundamental da QGroundControl. A QGC funciona como uma interface gráfica que recebe, exibe e envia as informações do drone por meio do protocólo MAVLink

## Mensagens

As mensagens já prontas da MAVLink se dividem por alguns serviços.

### Heartbeat/Connection Protocol

Esse serviço é responsável por conectar o Drone à Ground Station. Por meio dele, o Drone envia regularmente uma mensagem chamada Heartbeat que serve para avisar que o drone está conectado e disponível

### Mission Protocol

Serve para realizar download, upload e modificar planos de voo.

### Parameter Protocols

Esse serviço serve para exibir os parâmetros utilizados pelo drone e seus componentes. Ele é bastante útil porque permite que a gente visualize todos os parâmetros por meio da QGroundControl e da Mission Planner.

### Command Protocol

Permite mandar comandos para o drone. Por exemplo, vá para o ponto x.

## Bibliotecas

O projeto MAVLink possui algumas bibliotecas que podem ser utilizadas para transmitir e receber mensagens utilizando o protocolo.

A primeira e de mais baixo nível é a [MAVLink](https://mavlink.io/en/). Ela é a oficial da equipe que desenvolve o protocolo, porém usá-la é bastante trabalhoso. Só vale a pena para escrever mensagens personalizadas, o que é um caso raro já que as mensagens já disponíveis por padrão na PX4 costumam ser suficientes. Por isso utilizamos outras ferramentas:

### MAVSDK

É uma API criada pela equipe que mantem a MAVLink para facilitar o envio e recebimento de mensagens. Com ela, é possível programar em [C++](https://mavsdk.mavlink.io/main/en/cpp/api_reference/) e [Python](http://mavsdk-python-docs.s3-website.eu-central-1.amazonaws.com/).

Para instalar a versão para Python é simples, basta digitar no terminal:

```bash
pip3 install mavsdk
pip3 install aioconsole
```

### Pymavlink

Outra alternativa, disponível apenas com Python, é a [Pymavlink](https://pypi.org/project/pymavlink/). Ela é a mais simples de todas e é a que utilizamos para fazer a transmissão de dados do TFMini na Odroid para a PX4.

## Projetos ja feitos:

## Distance sensor externo a FCU (TFMini)

### Driver TFMini

O TFMini por ser serial foi conectado ao GPIO da Odroid xu4, mais precisamente nos pinos 4 e 6, respectivamente RX e TX da Odroid.
Para fazer a leitura dos dados do GPIO foi utilizada a biblioteca Odroid Wiring Pi.

```Python
#!/usr/bin/env python
import odroid_wiringpi as wpi
import time
```
No código então foi criado uma classe "TFMini", p/ que ela possa ser utilizada facilmente em outros códigos, precisando apenas ser incluida e inicializada.

A conexão com o TFMini fica dentro do construtor, onde ele abre a porta serial em que está conectado fisicamente o TFMini e declara a Baudrate; e é encerrada a conexão em seu destrutor.

```Python
class tfmini:

	def __init__(self):
		self.serial = wpi.serialOpen('/dev/ttySAC0', 115200)

	def __del__(self):				
		wpi.serialClose(self.serial)	
```

O método medir fica responsável por pegar as informações recebidas pela serial, onde ele transforma os respectivos bits recebidos em cada pacote em sua informação, cujos valores e significados estão no datasheet do sensor.

Também existe uma main, porém ela roda apenas quando o script é rodado direto.

```python=
	def medir(self):
		cont = 0
		cont2 = 0
		cont3 = 0
		distancia = -1
		strenght = -1
		bit3 = 0
		bit4 = 0
		bit5 = 0
		bit6 = 0
		wpi.serialFlush(self.serial)
		while cont < 9:
			output = wpi.serialGetchar(self.serial)
			cont += 1
			if cont == 3 or cont == 4:
				#print(output)
				cont2 += 1

				#Leitura de bits ( 3 e 4 distance, 5 e 6 strenght )
				if cont == 3:
					bit3 = output
				if cont == 4:
					bit4 = output

				# Calcular distance
				if cont2 == 2:
					cont2 = 0
					distancia = bit3 + ( bit4 * 256 )

			if cont == 5 or cont == 6:
				#print(output)
				cont2 += 1

				#Leitura de bits ( 5 e 6 strenght )
				if cont == 5:
					bit5 = output
				if cont == 6:
					bit6 = output
				# Calcular distance e strenght
				if cont2 == 2:
					cont2 = 0
					strenght = bit5 + ( bit6 * 256 )

		#print('Distance = ' + str(distancia) + ' || Strenght = ' + str(strenght))
		return [distancia, strenght]				

if __name__ == '__main__':
	tfmini = tfmini()
	medidas = tfmini.medir()
	print('Distance = ' + str(medidas[0]) + ' || Strenght = ' + str(medidas[1]))
	#print(medidas)
```

Agora, a conexão com a FCU foi feita atravez de MAVLink, com a biblioteca mavutil, que envia a msg de "distance_sensor", onde estabelecemos a conexão com a FCU usando o comando "mavlink_connection" da biblioteca mavutil, usando no caso de USB a respectiva porta conectada, a ACM0. Mas caso ele não conecte com as portas citadas abaixo, seja qual for a forma de conexão, ela pode ser detectada utilizando o comando ```bash dmesg ```.

```python=
#!/usr/bin/env python3

from pymavlink import mavutil
import time
import tfmini as lidar
 
if __name__ == "__main__":
	#Telemetria:
	mav = mavutil.mavlink_connection("/dev/ttyUSB0", autoreconnect=True, baud=57600)

	#USB:
	#mav = mavutil.mavlink_connection("/dev/ttyACM0", autoreconnect=True, baud=57600)

	#Gazebo:
	#mav = mavutil.mavlink_connection('udpin:localhost:1450')

	print("Conectou")

	for i in range(3):
		print("Testando:")
		print(mav.wait_heartbeat())
		time.sleep(1)
	
	tfmini = lidar()
	
	while(True):
		distance = tfmini.medir()
		#'time_boot_ms', 'min_distance', 'max_distance', 'current_distance', 'type', 'id', 'orientation', and 'covariance'
		mav.mav.distance_sensor_send(10, 20, 1200, distance, 0, 0, 25, 255)
		print("SENT")
		#print(dir(mav.mav.distance_sensor_send()))
	
```
