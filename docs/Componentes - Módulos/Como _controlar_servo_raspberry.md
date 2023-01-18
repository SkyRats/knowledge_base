# Como controlar um servo a partir das portas GPIO da uma Raspberry Pi

> *Escrito por [Rafael Gil](https://github.com/printRafaelprog) e [Sophia Celine](https://github.com/sophi011). Última atualização: 03/01/2023*

## Introdução 

Nesse texto será discutido como controlar um servo a partir da GPIO da Raspberry Pi. Essa é uma forma de controle **autônomo** do servo. Uma documentação sobre como controlar um servo por um controle pode ser encontrada [aqui](https://skyrats.github.io/knowledge_base/docs/Componentes%20-%20M%C3%B3dulos/Como_controlar_servo_pela_controladora_de_voo). 

Para controlar o sevro será escrito um código em **Python** Utilizando como suporte a biblioteca **gpiozero**. 

> A Raspberry Pi Utilizada nesse texto foi a **4 modelo b**. O seu datasheet pode ser encontrado [aqui](https://datasheets.raspberrypi.com/rpi4/raspberry-pi-4-datasheet.pdf) 

> O Servo utilizado nesse texto foi o **SG90**, cujo datasheet pode ser encontrado [aqui](http://www.ee.ic.ac.uk/pcheung/teaching/DE1_EE/stores/sg90_datasheet.pdf)

## Set up básico

Será necessário uma fonte de tensão para alimentar o servo. Essa fonte de tensão precisa ser de 5V. POde-se utilzar o pino 5V da própria Rasp, juntamente com o GND da Rasp para alimentar o servo. 

Posteriormente, conecte o cabo de sinal na porta PWM da Rasp. 

## Instalando a biblioteca na Raspberry Pi 

Para começar, devemos atualizar as bibliotecas da Raspberry. Para isso, em um terminal, podemos rodar o comando:

```bash
sudo apt update
```

Em seguida, podemos instalar a biblioteca com o ```pip```.
```bash
sudo pip3 install gpiozero
```

Outra alternativa:

```bash
sudo apt install python3-gpiozero
```

Com isso, se não houver nenhum erro de instalação, podemos importar a biblioteca no código e começar a usá-la. 

## Utilizando classe AngularServo

Para entender o código de controle do servo, é necessário entender o funcionamento da classe AngularServo da biblioteca gpiozero. 

Essa classe cria um objeto que representa o servo conectado na Rasp. A partir dela, é possível setar um movimento máximo e mínimo que o servo consegue se mexer. 

Para setar isso, é necessário ter noção de qual é o range máximo de moviento que seu servo consegue realizar. Para isso, você pode utilizar o método max() e min() relacionado a essa classe. 

Como no exemplo

```python
from gpiozero import Servo
s = Servo(17)
s.min()
s.max()
```

O servo, quando ligado, movimentara-se automaticamente para sua posição default. Dela você consegue medir quais as posições mínimas e máximas do movimento do se servo. 

Agora você já consegue escrever um objeto da classe AngularServo. 

A classe Angularservo tem vários parâmetros, mas o único obrigatório é o pino PWM que é o sinal do seu servo. Apesar disso, os autores da documentação dessa classe orientam que seja medido o ângulo máximo e mínimo que esse servo consegue chegar. (O link para a documentação da biblioteca gpiozero está na parte referências). Medindo o Ângulo máximo e mínimo, pode-se definir esses ângulos como parâmetros da classe. 

Para a realização do nosso código, a sky manteve os parâmetros default da classe (que é 90 graus max e -90 graus min) Como visto no código abaixo:

```python
from gpiozero import AngularServo
from gpiozero.pins.pigpio import PiGPIOFactory
from time import sleep

class payload():
	def __init__(self):
		pigpio_factory = PiGPIOFactory()
		self.servo = AngularServo(13 pin_factory=pigpio_factory, min_pulse_width=0.0010, max_pulse_width=0.0017)
```

No parâmetro pin, foi utilizado o **GPIO 13** já que ele é uma porta PWM na Raspberry Pi 4 model b utilizada. 

Além disso, forma definidos os parâmetros **min_pulse_width** e **max_pulse_width**. Esses parâmetros representam, respectivamente, qual é o período de tempo em que o sinal está em high que representa a posição mínima do servo, e qual o período de tempo que o sinal está em high que representa a posição máxima do servo. Eles são dados em **unidade de segundos**. 

Para a realização desse código utilizado pela skyrats, esses parâmetros foram determinados por tentativa e erro. Ou seja, vimos qual era o valor do parâmetros mais adequado para a nossa aplicação. 

Mas se você quiser usar realmente o pulso certo para a tingir a movimentação máxima do servo, essa informação pode ser encontrada no datasheet. 

>## Adendo sobre PWM
>Um sinal de PWM é uma onda quadrada, no qual o duty cicle da onda, ou seja, o tempo que uma onda se mantém em high em relação ao período total da onda é chamado duty cicle. O comprimento das ondas PWM são dados em uma unidade de tempo, e a amplitude do sinal de PWM são dados em unidade de tensão. Equipamentos como servos motores tem sua movimentação controlada a partir do duty cicle do PWM
>
>Um exemplo de onda PWM pode ser visto abaixo:
>
>![PWM](./assets/PWM.png)
>Fonte: https://www.citisystems.com.br/pwm/ (Acessado em 02/01/2023)
>
>Observe que o duty cicle está destacado em cima de cada onda, sendo a onda (a) composta por 10%, a (b) 50% e a (c) 90%

O código da skyrats também utilizou a biblioteca **time** do python, mais especificamente a função **sleep()**. 

A função sleep para a execução do código pelo número de **segundos** dados como argumento da função. A documentação completa da biblioteca time pode ser encontrada nas referências.

O time de software também definiu métodos que iriam controlar o servo durante sua execução. Esses métodos podem ser vistos no código abaixo

```python
from gpiozero import AngularServo
from gpiozero.pins.pigpio import PiGPIOFactory
from time import sleep

class payload():
	def __init__(self):
		pigpio_factory = PiGPIOFactory()
		self.servo = AngularServo(13, pin_factory=pigpio_factory, min_pulse_width=0.0010, max_pulse_width=0.0017)

	def release(self):
		print("Releasing payload")
		self.servo.max()
		sleep(2)

	def load(self):
		print("Loading payload")
		self.servo.min()
		sleep(2)


if __name__ == "__main__":
	payload = payload()
	payload.release()
	payload.load()
```

Os métodos utilizam as funções **max()** e **min()** da biblioteca AngularServo para setar o servo para a sua posição máxima e mínima respectivamente. 

Agora, vou esplicar essa classe importada chamada **PiGPIOFactory**. 

Basicamente, para passar o número da GPIO onde nosso servo estará conectado não significa alguma coisa caso não exista algum processamento sobre esse pino. Ou seja, transformando-o em um dado qu eo python consiga trabalhar, e, portanto, controlar o componente conectado a esse pino. 

Para isso existem as **factorys**, que fazem esse trabalho de processamento sobre o pino passado. No entanto, a factory default para a Raspberry Pi é uma biblioteca chamada **RPi.GPIO**. Essa biblioteca contuma dar muitos problemas para baixar e instalar. Portanto, a equipe de software da skyrats optou por escolher outra factory para tratar os pinos passados como argumento na classe AngularServo.A biblioteca escolhida foi essa **pigpio**, a qual, assim como dito na documentação oficial da gpiozero, é uma biblioteca suportada pela classe. 


## Referências

Para escrever esse texto, consultei os seguintes links:

https://www.youtube.com/watch?v=8N-5rEclspw -> Vídeo do canal Eli The Computer Guy (Acessado em 01/01/2023)

https://github.com/SkyRats/IMAV2022Outdoor/blob/main/scripts/servocontrol.py -> Código escrito pela equipe de software da skyrats, o qual foi documentado nesse texto (Acessado em 02/01/2023)

https://gpiozero.readthedocs.io/en/stable/ -> Documentação do pacote gpiozero utilizado para fazer o código de controle do servo. (Acessado em 02/01/2023)

https://docs.python.org/pt-br/3/library/time.html#time.sleep -> documentação biblioteca time (Acessado em 02/01/2023)
