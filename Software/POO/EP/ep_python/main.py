from Bateria import Bateria
from Drone import Drone
from S1000 import S1000
import math

if __name__ == '__main__':
    escolha = 0 
    baterias = []
    drones = []
    while escolha != 8:
        print("\n-----------Drone OO Simulator-----------\n")
        print("     1. Comprar bateria")
        print("     2. Comprar um S1000")
        print("     3. Montar um drone generico")
        print("     4. Usar os drones existentes")
        print("     5. Carregar baterias")
        print("     6. Listar drones")
        print("     7. Listar baterias")
        print("     8. Sair\n")

        escolha = int(input())   
        
        if escolha  ==  1:
            print("\nEspecificacoes da bateria: ")
            mah = int(input("mAh: "))
            t = int(input("Tempo de Carregamento: "))
            if mah >= 0 and t >= 0:
                baterias.append(Bateria(mah, t))
                print("\nBateria " + str(len(baterias)) + " criada!")
                baterias[-1].status()
            else:
                print("Nao aceita valor negativo")

        elif escolha == 2:
            print("\nSeu S1000 chegou, onde colocar ele?")
            baterias.append(Bateria(22000, 40))
            posicao = float(input("Posicao: "))
            drones.append(S1000("S1000", baterias[-1], posicao))
            print("\nDrone " + str(len(drones)) + " pronto!")
            drones[-1].status()

        elif escolha == 3:
            print("\nVamos montar!")
            nome = str(input("Nome: "))
            if len(baterias) == 0:
                print("\nAntes compre uma bateria!")
            else:
                print("\nEscolha uma bateria: ")
                for i in range(len(baterias)):
                    print("\nBateria " + str(i + 1))
                    baterias[i].status()
                id = int(input())
                if baterias[id-1]._uso == True:
                    print("\nEssa bateria ja esta sendo usada!")
                else:
                    posicao = float(input("Posicao Inicial: "))
                    drones.append(Drone(nome, baterias[id-1], posicao))
                    print("\nDrone " + str(len(drones)) + " pronto!")
                    drones[-1].status()

        elif escolha == 4:
            if len(drones) == 0:
                print("\nSem drones disponiveis")
            else:
                print("\nQual drone voce quer usar?")
                for i in range(len(drones)):
                    print("\nDrone " + str(i + 1))
                    drones[i].status()
                escolhaDrone = int(input("\n"))
                escolhaDrone -= 1
                droneFazer = 0
                while droneFazer != 5:
                    print("\nO que voce quer fazer?")
                    print("     1. Decolar o drone    ")
                    print("     2. Ir para uma posicao")
                    print("     3. Pousar o drone     ")
                    print("     4. Mapear             ")
                    print("     5. Sair             \n")
                    droneFazer = int(input())
                    if droneFazer == 1:
                        h = float(input("\nAltura: "))
                        drones[escolhaDrone].takeoff(h)
                    elif droneFazer == 2:
                        print("\nPosicao Atual: (" + str(drones[escolhaDrone]._posicao) + "," + str(drones[escolhaDrone]._altura) + ")")
                        print("Para qual posicao voce quer ir?")
                        x = float(input("Posicao X: "))
                        y = float(input("Altura Y: "))
                        drones[escolhaDrone].set_position(x, y)
                    elif droneFazer == 3:
                        drones[escolhaDrone].land()
                    elif droneFazer == 4:
                        drones[escolhaDrone].mapear()
                    drones[escolhaDrone].status()
                                    
        elif escolha == 5:
            if len(baterias) == 0:
                print("\nNao tem baterias para carregar!\n")
            else:
                tempo = int(input("\nCarregar por quanto tempo? "))
                if tempo >= 0:
                    i = 0
                    for bateria in baterias:
                        print("\nBateria " + str(i+1))
                        if bateria._carregavel:
                            bateria.carregar(tempo)
                        else:
                            print("Nao eh possivel carregar")
                        i += 1
                else:
                    print("Tempo nao pode ser negativo")

        elif escolha == 6:
            if len(drones) == 0:
                print("Nao temos drones!")
            else:
                print("\nListando drones: ")
                for i in range(len(drones)):
                    print("\nDrone " + str(i+1))
                    drones[i].status()
                
        elif escolha == 7:
            if len(baterias) == 0:
                print("Nao temos baterias!")
            else:
                print("\nListando baterias: ")
                for i in range(len(baterias)):
                    print("\nBateria " + str(i+1))
                    baterias[i].status()

        elif escolha == 8:
            print("\nEncerrando Drone OO Simulator...")
