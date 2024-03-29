import math

class Bateria():
    def __init__(self, mah, tempoDeCarregamento):
        self._mah = mah
        self._tempoDeCarregamento = tempoDeCarregamento
        self._carga = 0
    
    def carregar(self, tempo):
        if self._carga == self._mah:
            print("Bateria ja esta carregada!")
        else:
            self._carga = self._carga + (self._mah * tempo) / self._tempoDeCarregamento
            if self._carga > self._mah:
                self._carga = self._mah
            print("Depois de carregar por " + str(tempo) + " tempos, a bateria ficou com " + str(self._carga) + " mAh")

    def usar(self, tempo):
        if self._carga == 0:
            print("Bateria descarregada :C")
        else:
            self._carga = self._carga - (self._mah * tempo) / self._tempoDeCarregamento
            if self._carga < 0:
                self._carga = 0

    def getCarga(self):
        return self._carga

    def getTempoDeVoo(self):
        return (self._tempoDeCarregamento * self._carga) / self._mah 

    def status(self):
        print("mAh: " + str(self._mah) + " e Tempo de Carregamento: " + str(self._tempoDeCarregamento))
        print("Com carga: " + str(self._carga) + " e tempo de voo restante: " + str(self.getTempoDeVoo()))

class Drone():
    def __init__(self, nome, bateria, posicao):
        self._nome = nome
        self._bateria = bateria
        self._posicao = posicao
        self._altura = 0.0
        self._decolado = False

    def takeoff(self, altura):
        if self._bateria.getCarga() < 10:
            print("Sem carga!")
        else:
            self._decolado = True
            self.set_position(self._posicao, altura) 
            print("Takeoff concluido!")
        
    def land(self):
        self._altura = 0
        self._decolado = False
        print("Drone pousado!")

    def set_position(self, x, y):
        if self._bateria.getCarga() > 10:
            if self._decolado:
                tempo = (((self._posicao - x)**2 + (self._altura - y)**2)**0.5)/60
                self._bateria.usar(tempo)
                self._posicao = x
                self._altura = y
                print("Drone indo para posicao (" + str(x) + "," + str(y) + ")...")
            else:
                print("Drone nao esta decolado!")
            self.status()
        else:
            print("Sem carga!")
            self.land()

    def mapear(self):
        if self._decolado:
            print("Não consigo mapear!")
        else:
            print("Drone nao esta decolado!")
        self.status()

    def status(self):
        print("Drone " + self._nome)
        print("Bateria com " + str(self._bateria.getCarga()) + " mAh")
        print("Drone esta na posicao (" + str(self._posicao) + "," + str(self._altura) + ")")

class S1000(Drone):
    def __init__(self, nome, bateria, posicao):
        super().__init__(nome, bateria, posicao)

    def mapear(self):
        if self._bateria.getCarga() < 10:
            print("Sem carga!")
            self.land()
        else:
            if self._decolado:
                self._bateria.usar(5)
                print("Mapeando...")
                print("_____________________(oooo)__")
                print("___o-o______\O/________||____")
                print("_____________|_________||____")
                print("_____________/\________||____")
                print("_____________________________")
                print("Mapeamento feito!")
            else:
                print("Drone nao esta decolado!")
        self.status()