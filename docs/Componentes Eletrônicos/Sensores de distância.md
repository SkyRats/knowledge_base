# Sensores de distância

> *Escrito por [João P. Soares](https://github.com/J0t4py). Última atualização: 27/03/2023*

Atualmente utilizamos 2 tipos de sensores de distância, o US100 e HC-SR04. Esse texto busca explicitar a diferença entre os dois e ensinar a usá-los.

## US100

O US100 é um sensor de distância que trabalha com 2 protocolos de comunicação, serial(ECHO,TRIG) e UART. O modo pode ser selecionado curtando 2 pinos na placa do sensor, quando eles estão curtados o modo usado sera o UART (por padrão ele vem curtado)

### Requisitos

É necessário instalar algumas bibliotecas, que podem ser instaladas com pip. Segue abaixo como instalar e quais instalar

```bash
sudo apt update
pip3 install RPi.GPIO
pip3 install Adafruit-Blinka
pip3 install adafruit-circuitpython-us100 #Essa segunda biblioteca só é usada para o modo UART
```

### Analógico (TRIG ECHO)
 
 Esse é o modo mais analógico de utilizar, através de um cálculo com a velocidade do som. O HC-SR04 funciona exatamente dessa forma e o código presente aqui deve funcionar nele.
 
 Segue abaixo o diagrama de como funciona:
 
 ![Esquema TRIG ECHO](./assets/Work-principle-of-the-HC-SR04-sensor-39.jpg)
 
 Segue abaixo um código para usar o sensor desse modo (utiliza o circuitpython blinka):
 
 ```python3
import RPi.GPIO as GPIO
import time
GPIO.setmode(GPIO.BOARD)
# set pins for trigger and echo
trig = 16
echo = 18
# set up pins as output/input
GPIO.setup(trig,GPIO.OUT)
GPIO.setup(echo,GPIO.IN)
# set trigger pin to low
GPIO.output(trig, False)
print("Waiting for sensor to settle")
time.sleep(2)
# send a 10us pulse to trigger
GPIO.output(trig, True)
time.sleep(0.00001)
GPIO.output(trig, False)
# measure echo duration
while GPIO.input(echo)==0:
  pulse_start = time.time()
while GPIO.input(echo)==1:
  pulse_end = time.time()
pulse_duration = pulse_end - pulse_start
# calculate distance (in centimeters)
distance = pulse_duration * 17150
# round distance to 2 decimal places
distance = round(distance, 2)
print("Distance:", distance, "cm")
GPIO.cleanup()
```

### UART

 Esse método é mais recomendado de ser usado pois os cálculos são feitos dentro do sensor e utilizam a temperatura como parâmetro para determinar a velocidade do som no ar. Através desse método também é possível obter a temperatura. No código a seguir usamos uma biblioteca própria para o sensor, o adafruit_us100 e o circuitpython (blinka). essas 2 bibliotecas podem ser instaladas por pip
 
 ```python3
import time
import board
import adafruit_us100

class DistanceSensor:
    def __init__(self, uart):
        self._us100 = adafruit_us100.US100(uart)

    def get_distance(self):
        return self._us100.distance

    def get_temperature(self):
        return self._us100.temperature

uart = board.UART
distance_sensor = DistanceSensor(uart)

try:
    while True:
        # read distance and temperature values
        distance = distance_sensor.get_distance()
        temperature = distance_sensor.get_temperature()

        # print distance and temperature values
        print("Distance:", round(distance, 2), "cm")
        print("Temperature:", round(temperature, 2), "°C")
        time.sleep(1)

except KeyboardInterrupt:
    pass
```
 
 
