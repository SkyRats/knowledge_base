from Drone import Drone
class S1000(Drone):
    def __init__(self, nome, bateria, posicao):
        super().__init__(nome, bateria, posicao)

    def mapear(self):
        if self._decolado:
            if self._bateria.usar(10):
                print("Mapeando...")
                print("_____________________(oooo)__")
                print("___o-o______\O/________||____")
                print("_____________|_________||____")
                print("_____________/\________||____")
                print("_____________________________")
                print("Mapeamento feito!\n")
                return True
            return False
        else:
            print("Drone nao esta decolado!")
            return False