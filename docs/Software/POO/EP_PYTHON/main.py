# -*- coding: utf-8 -*-
from ep import Drone, S1000, droneSwarm, Bateria

if __name__ == '__main__':
    escolha = 0 
    baterias = []
    drones = []
    swarms = []
    while escolha != 7:
        print("-----------Drone OO Simulator V1-----------")
        print("O que quer fazer?")
        print("1. Criar bateria")
        print("2. Comprar um S1000")
        print("3. Montar um swarm")
        print("4. Montar um drone genérico")
        print("5. Usar os drones existentes")
        print("6. Carregar baterias")
        print("7. Sair")

        escolha = int(input("Insira o número: "))        
        
        if escolha  ==  1:
            mah = int(input("mAh: "))
            t = int(input("Tempo de Carregamento: "))
            baterias.append(Bateria(mah, t))
            print("Bateria " + str(len(baterias)) + " criada!")

        elif escolha == 2:
            posicao = int(input("Posicao: "))
            drones.append(S1000(posicao))
            print("Drone " + str(len(drones)) + " criado!")
            
        elif escolha == 3:
            nome = str(input("Nome: "))
            posicao = int(input("Posicao: "))
            qtd = int(input("Quantidade: "))
            swarms.append(droneSwarm(nome, qtd, posicao)) 
            print("Swarm " + str(len(swarms)) + " criado!")

        elif escolha == 4:
            nome = str(input("Nome: "))
            if len(baterias) == 0:
                print("Antes crie uma bateria!")
            else:
                print("Escolha uma bateria: ")
                for i in range(len(baterias)):
                    print("Bateria " + str(i + 1))
                    baterias[i].status()
                id = int(input("Insira o número: "))
                posicao = int(input("Posição Inicial: "))
                drones.append(Drone(nome, baterias[id-1], posicao))
                print("Drone " + str(len(drones)) + " criado!")

        elif escolha == 5:
            print("Escolha o tipo:")
            print("1. Swarm")
            print("2. Outros")
            print("3. Sair")
            escolhaTipo = int(input())

            if escolhaTipo == 1:
                print("Agora, escolha o swarm que você vai voar: ")
                j = 0
                for swarm in swarms:
                    print(str(j) + ". " + swarm._nome)
                    j = j + 1
                escolhaDrone = int(input("Qual o número: "))
                droneFazer = 0
                while droneFazer != 4:
                    print("O que você quer fazer?")
                    print("1. Dar takeoff        ")
                    print("2. Ir para uma posicao")
                    print("3. Pousar             ")
                    print("4. Sair               ")
                    droneFazer = int(input())
                    if droneFazer == 1:
                        H = int(input("Altura: "))
                        for bee in swarms[escolhaDrone]._bee:
                            bee.takeoff(H)
                    elif droneFazer == 2:
                        X = int(input("Posicao X: "))
                        Y = int(input("Posicao Y: "))
                        j = 0
                        for bee in swarms[escolhaDrone]._bee:
                            bee.set_position(X + j, Y)
                            j = j + 1
                    elif droneFazer == 3:
                        for bee in swarms[escolhaDrone]._bee:
                            bee.land()

            elif escolhaTipo == 2:
                print("Agora, escolha seu drone")
                it = 0
                for drone in drones:
                    print(str(it) + ". ")
                    drone.status()
                    it = it + 1
                escolhaDrone = int(input())
                droneFazer = 0
                while droneFazer != 4:
                    print("O que você quer fazer?")
                    print("1. Dar takeoff        ")
                    print("2. Ir para uma posicao")
                    print("3. Pousar             ")
                    print("4. Mapeamento         ")
                    print("5. Sair               ")
                    droneFazer = int(input())
                    if droneFazer == 1:
                        H = int(input("Altura: "))
                        drones[escolhaDrone].takeoff(H)
                    elif droneFazer == 2:
                        X = int(input("Posicao X: "))
                        Y = int(input("Posicao Y: "))
                        drones[escolhaDrone].set_position(X, Y)
                    elif droneFazer == 3:
                        drones[escolhaDrone].land()
                    elif droneFazer == 4:
                        drones[escolhaDrone].mapear()
                                    
        elif escolha == 6:
            tempo = int(input("Carregar por quanto tempo? "))
            for bateria in baterias:
                bateria.carregar(tempo)
            for drone in drones:
                drone._bateria.carregar(tempo)
            for swarm in swarms:
                for bee in swarm._bee:
                    bee._bateria.carregar(tempo)
        