# Sensores de distância

> *Escrito por [João P. Soares](https://github.com/J0t4py). Última atualização: 03/02/2023*

Atualmente utilizamos 2 tipos de sensores de distância, o US100 e HC-SR04. Esse texto busca explicitar a diferença entre os dois e ensinar a usá-los.

## US100

O US100 é um sensor de distância que trabalha com 2 protocolos de comunicação, serial(ECHO,TRIG) e UART.

### TRIG ECHO
 
 Esse é o modo mais analógico de utilizar, através de um cálculo com a velocidade do som. Segue abaixo o diagrama de como funciona:
 
 ![Esquema TRIG ECHO](./assets/Work-principle-of-the-HC-SR04-sensor-39.jpg)
 
 Segue abaixo um código para usar o sensor desse modo:
 
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

 Esse método é mais recomendado de ser usado pois os cálculos são feitos dentro do sensor e utilizam a temperatura como parâmetro para determinar a velocidade do ar. Através desse método também é possível obter a temperatura.
 
 ```
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

# create UART connection
uart = board.UART

# create DistanceSensor object
distance_sensor = DistanceSensor(uart)

# loop to continuously measure distance and temperature and print results
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
 
 
