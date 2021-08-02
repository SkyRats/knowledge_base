# -*- coding: utf-8 -*-
from ep import Drone, S1000, Bateria
import math

if __name__ == '__main__':
    escolha = 0 
    baterias = []
    drones = []
    while escolha != 6:
        print("-----------Drone OO Simulator V1-----------")
        print("     1. Criar bateria")
        print("     2. Comprar um S1000")
        print("     3. Montar um drone genérico")
        print("     4. Usar os drones existentes")
        print("     5. Carregar baterias")
        print("     6. Sair")

        escolha = int(input())   
        
        if escolha  ==  1:
            mah = int(input("mAh: "))
            t = int(input("Tempo de Carregamento: "))
            baterias.append(Bateria(mah, t))
            print("Bateria " + str(len(baterias)) + " criada!")
            baterias[-1].status()

        elif escolha == 2:
            baterias.append(Bateria(22000, 40))
            posicao = float(input("Posição: "))
            drones.append(S1000("S1000", baterias[-1], posicao))
            print("Drone " + str(len(drones)) + " criado!")
            drones[-1].status()

        elif escolha == 3:
            nome = str(input("Nome: "))
            if len(baterias) == 0:
                print("Antes crie uma bateria!")
            else:
                print("Escolha uma bateria: ")
                for i in range(len(baterias)):
                    print("Bateria " + str(i + 1))
                    baterias[i].status()
                id = int(input())
                posicao = float(input("Posição Inicial: "))
                drones.append(Drone(nome, baterias[id-1], posicao))
                print("Drone " + str(len(drones)) + " criado!")

        elif escolha == 4:
            print("Qual drone você quer usar?")
            it = 1
            for drone in drones:
                print(str(it) + ". ")
                drone.status()
                it += 1
            escolhaDrone = int(input())
            escolhaDrone -= 1
            droneFazer = 0
            while droneFazer != 5:
                print("O que você quer fazer?")
                print("     1. Decolar o drone    ")
                print("     2. Ir para uma posicao")
                print("     3. Pousar o drone     ")
                print("     4. Mapear             ")
                print("     5. Sair               ")
                droneFazer = int(input())
                if droneFazer == 1:
                    H = float(input("Altura: "))
                    drones[escolhaDrone].takeoff(H)
                elif droneFazer == 2:
                    print("O drone está na posição (" + str(drone[escolhaDrone]._posicao) + "," + str(drone[escolhaDrone]._altura) + ")")
                    print("Para qual posição você quer ir?")
                    X = float(input("Posicao X: "))
                    Y = float(input("Altura Y: "))
                    drones[escolhaDrone].set_position(X, Y)
                elif droneFazer == 3:
                    drones[escolhaDrone].land()
                elif droneFazer == 4:
                    drones[escolhaDrone].mapear()
                                    
        elif escolha == 5:
            tempo = int(input("Carregar por quanto tempo? "))
            for bateria in baterias:
                bateria.carregar(tempo)