class Bateria():
    def __init__(self, mah, tempoDeCarregamento):
        self._mah = mah
        self._tempoDeCarregamento = tempoDeCarregamento
        self._carga = 0
        self._uso = False
        self._carregavel = True
    
    def carregar(self, tempo):
        if self._carga == self._mah:
            print("Bateria ja esta carregada!")
            return False
        else:
            self._carga = self._carga + (self._mah * tempo) / self._tempoDeCarregamento
            if self._carga > self._mah:
                self._carga = self._mah
            print("Depois de carregar por " + str(tempo) + " tempos, a bateria ficou com " + str(self._carga) + " mAh")
            return True

    def usar(self, tempo):
        if self._carga < (self._mah * tempo) / self._tempoDeCarregamento:
            print("Bateria insuficiente :C\n")
            return False
        else:
            self._carga = self._carga - (self._mah * tempo) / self._tempoDeCarregamento
            return True

    def calculaTempoDeVoo(self):
        return (self._tempoDeCarregamento * self._carga) / self._mah 
    
    def status(self):
        print("Especificacoes:")
        print("     mAh: " + str(self._mah))
        print("     Tempo de Carregamento: " + str(self._tempoDeCarregamento))
        print("     Carga Atual: " + str(self._carga))
        print("     Tempo de Voo restante: " + str(self.calculaTempoDeVoo()))
        print("     Pode ser carregada no momento: " + str(self._carregavel))
        print("     Esta sendo usada: " + str(self._uso))