class Drone():
    def __init__(self, nome, bateria, posicao):
        self._nome = nome
        self._bateria = bateria
        self._bateria._uso = True
        self._posicao = posicao
        self._altura = 0.0
        self._decolado = False

    def takeoff(self, altura):
        self._decolado = True
        if self.set_position(self._posicao, altura):
            self._bateria._carregavel = False
            print("Takeoff concluido!\n")
        else:
            self._decolado = False

    def set_position(self, x, y):
        if y <= 0:
            print("\nDrone nao pode ir para menores ou iguais a 0\n")
            return False
        else:
            tempo = (((self._posicao - x)**2 + (self._altura - y)**2)**0.5)/60
            if self._decolado:
                if self._bateria.usar(tempo):
                    self._posicao = x
                    self._altura = y
                    print("\nDrone indo para posicao (" + str(x) + "," + str(y) + ")...")
                    print("Tempo usado: " + str(tempo) +"\n")
                    return True
                return False
            else:
                print("Drone nao esta decolado!")
                return False
            
    def land(self):
        self._altura = 0
        self._decolado = False
        self._bateria._carregavel = True
        print("Drone pousado!\n")

    def mapear(self):
        if self._decolado:
            print("Não consigo mapear!")
        else:
            print("Drone nao esta decolado!")
        return False

    def status(self):
        print("Nome " + self._nome)
        print("Bateria com " + str(self._bateria._carga) + " mAh")
        print("Tempo de Voo restante " + str(self._bateria.calculaTempoDeVoo()))
        print("Drone esta na posicao (" + str(self._posicao) + "," + str(self._altura) + ")")
