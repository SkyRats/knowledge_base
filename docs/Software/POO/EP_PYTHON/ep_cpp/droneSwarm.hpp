#ifndef DRONESWARM_H
#define DRONESWARM_H
#include <string>
#include "Bateria.hpp"
#include "Drone.hpp"

class DroneSwarm{    
private:
    static int N;
    Bateria* bateriaSwarm;
    string nome;

public:
    Drone** bee;
    DroneSwarm(int quantidade, double posicao);
    ~DroneSwarm();
};

#endif