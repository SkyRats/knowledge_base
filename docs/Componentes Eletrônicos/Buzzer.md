# Buzzer

> *Escrito por [Felipe Beserra](https://github.com/Beserrovsky). Última atualização: 09/08/2022*

Este artigo pretende expor a relação do componente buzzer com a equipe SkyRats e seus usos no nosso dia a dia.
O componente em questão é utilizado para gerar SOM 🔊 a partir de eletricidade ⚡

Caso queira uma leitura interessante e MUITO mais completa sobre o tema, veja [Introduction to Buzzers](https://www.seeedstudio.com/blog/2020/12/22/introduction-to-buzzers-piezo-and-magnetic-buzzers/)

## Tipos de Buzzer

Um buzzer tem um funcionamento interessantíssimo e que super vale a pena dar uma olhada, PORÉM, como o intuito é mais prática do que teoria, vamos aos tipos de buzzer:

### Buzzer Ativo

Utilizado com sinais binários, o buzzer ativo recebe energia e emite um som em uma fequência específica, pode ser alterada fisicamente pelo ambiente, como colocando uma fita em cima para abafar o som, muito útil como indicador de erros ou sucessos.

### Buzzer Passivo

Utilizado com sinais, o buzzer passivo recebe uma frequência e emite um som correspondente, muito útil para projetos musicais.

## Utilização

O uso de um buzzer varia para os casos onde busca-se reproduzir diferentes frequências sonoras e o caso onde ele será utilizado apenas como indicador sonoro.

É sempre importante ter em mente a tensão nominal de seu buzzer, normalmente é 5V.

### Amplificação com Transistor

No caso do uso de um Buzzer com uma Odroid XU4 sem ShifterShield, como a voltagem de suas portas GPIO lógicas é de apenas 1.8V é necessária a adição de um transistor para amplificação do sinal.
Normalmente utiliza-se um transistor comum que agirá como interruptor eletrônico em um circuito que liga o buzzer à fonte de energia com tensão correta.

![Buzzer e transistor](./assets/Buzzer.png)
> *Buzzer com circuito amplificador de transistor*

Veja mais em [Exemlo controle de um buzzer](./Transistor.md#exemplo-controle-de-um-buzzer-com-a-odroid-xu4)

## Uso com Microcontrolador

Muitas vezes a aplicação do Buzzer será regrada por um microcontrolador, como um Arduino (ATMega) ou ESP.

### Ativo - Microcontrolador

Conexão: Porta digital, verificar necessidade de [Circuito amplificador](#amplificação-com-transistor)

```cpp
#define BUZZER_PIN 10

void setup() {
    pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
    digitalWrite(BUZZER_PIN, HIGH); // Liga Buzzer
    delay(300);
    digitalWrite(BUZZER_PIN, LOW);  // Desliga Buzzer
    delay(1000);
}
```

> *Alterar valor da varíavel BUZZER_PIN*

### Passivo - Microcontrolador

Uso documentado em [USE a BUZZER MODULE (PIEZO SPEAKER) USING ARDUINO UNO](https://create.arduino.cc/projecthub/SURYATEJA/use-a-buzzer-module-piezo-speaker-using-arduino-uno-89df45)

Conexão: Porta digital, verificar necessidade de [Circuito amplificador](#amplificação-com-transistor)

```cpp
#define BUZZER_PIN 10

void setup() {
    pinMode(BUZZER_PIN, OUTPUT);
}

void loop() {
    tone(BUZZER_PIN, 1000); // Envia 1KHz
    delay(300);
    noTone(BUZZER_PIN);     // Desliga Buzzer
    delay(1000);
}
```

> *Alterar valor da varíavel BUZZER_PIN*
> *Analisar frequência que deseja ser enviada*

## Uso com SBC

É muito comum o uso de Buzzers com *Single Board Computers*(SBCs), como produtos Odroid e Raspberry, tal uso é realizado à partir das portas GPIO.

### Ativo - SBC (Odroid XU4)

Conexão: Porta digital GPIO, verificar necessidade de [Circuito amplificador](#amplificação-com-transistor)

Dependências: [WiringPi](https://wiki.odroid.com/odroid-xu4/application_note/gpio/wiringpi)

```python
import odroid_wiringpi as wpi

PIN = 26

class Buzzer:
    def __init__(self):
        self.pin = PIN
        wpi.wiringPiSetup()
        wpi.pinMode(self.pin, 1)

    def on(self, time):
        wpi.digitalWrite(self.pin, 1)
        wpi.delay(time)
        wpi.digitalWrite(self.pin, 0)

buzzer = Buzzer()
buzzer.on(300)
```

> *Verificar pinagem definida em wpi.wiringPiSetup()*
> *Alterar variável do pino*

### Passivo - SBC (Odroid XU4)

TODO: Se você fez os testes, adicionar doc aqui!

## Referências

- [ACTIVE VS. PASSIVE BUZZER: THE DIFFERENCES](https://nerdytechy.com/active-vs-passive-buzzer/)
- [Introduction to Buzzers](https://www.seeedstudio.com/blog/2020/12/22/introduction-to-buzzers-piezo-and-magnetic-buzzers/)
- [USE a BUZZER MODULE (PIEZO SPEAKER) USING ARDUINO UNO](https://create.arduino.cc/projecthub/SURYATEJA/use-a-buzzer-module-piezo-speaker-using-arduino-uno-89df45)
