#ifndef DRONESWARM_H
#define DRONESWARM_H
#include "Bateria.hpp"
#include "Drone.hpp"
class DroneSwarm{
    
private:
    static int N;
    Bateria* bateriaSwarm;
    Drone** bee;

public:
    DroneSwarm(int quantidade, double posicao);
    ~DroneSwarm();
};

#endif