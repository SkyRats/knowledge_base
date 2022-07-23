#ifndef S1000_H
#define S1000_H
#include "Drone.hpp"

class S1000: public Drone{

private:

public:
    S1000(string nome, Bateria* bateria, double posicao);
    ~S1000();
    int mapear();
};

#endif
