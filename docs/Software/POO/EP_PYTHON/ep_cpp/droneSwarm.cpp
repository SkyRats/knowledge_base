#include "droneSwarm.hpp"
#include <iostream>
using namespace std;

DroneSwarm::DroneSwarm(string nome, int quantidade, double posicao){
    this->nome = nome;
}

DroneSwarm::~DroneSwarm(){
    cout << "Voce destruiu esse swarm :C" << endl;
}


/*
class droneSwarm():
    _N = 0
    def __init__(self, nome, qtd, posicao):
        self._nome = nome
        self._bee = []
        for i in range(qtd):
            bateriaSwarm = Bateria(4000, 20)
            self._bee.append(Drone("Bee" + str(i), bateriaSwarm, posicao + i))
*/