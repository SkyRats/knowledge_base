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
            print("Depois de carregar por " + str(tempo) + " tempos, a bateria ficou com " + str(self._carga) + " mah")

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
        self._altura = 0
        self._decolado = False

    def takeoff(self, altura):
        if self._bateria.getCarga() < 10:
            print("Sem bateria!")
        else:
            self._decolado = True 
            self.set_position(self._posicao, altura) 
            print("Takeoff concluido!")
        
    def land(self):
        self.set_position(self._posicao, 0)
        self._decolado = False
        print("Drone pousado!")

    def set_position(self, x, y):
        if self._decolado:
            self._posicao = x
            self._altura = y
            print("Drone indo para posicao (" + str(x) + "," + str(y) + ")")
        else:
            print("Drone nao esta decolado!")
    def mapear(self):
        print("Não consigo mapear!")

    def status(self):
        print("Drone " + self._nome)
        print("Bateria em " + str(self._bateria.getCarga()) + "mAh")
        print("Drone esta na posicao (" + str(self._posicao) + "," + str(self._altura) + ")")

class S1000(Drone):
    def __init__(self, posicao):
        bateriaS1000 = Bateria(22000, 40)
        super().__init__("S1000", bateriaS1000, posicao)

    def mapear(self):
        if self._bateria.getCarga() < 10:
            print("Sem carga")
        else:
            self._bateria.usar(10)
            print("Mapeando...")
            print("_____________________(oooo)__")
            print("___o-o______\O/________||____")
            print("_____________|_________||____")
            print("_____________/\________||____")
            print("_____________________________")
            print("Mapeamento feito!")
        self.status()

class droneSwarm():
    _N = 0
    def __init__(self, nome, qtd, posicao):
        self._nome = nome
        self._bee = []
        for i in range(qtd):
            bateriaSwarm = Bateria(4000, 20)
            self._bee.append(Drone("Bee" + str(i), bateriaSwarm, posicao + i))