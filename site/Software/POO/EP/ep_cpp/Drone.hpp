#ifndef DRONE_H
#define DRONE_H
#include "Bateria.hpp"
#include <string>
using namespace std;
class Drone{

protected:
    string nome;
    Bateria* bateria;
    double posicao;
    double altura;
    bool decolado;

public:
    Drone(string nome, Bateria* bateria, double posicao);
    virtual ~Drone();

    void takeoff(int altura);
    void land();
    bool setPosition(double x, double y);
    double getPosicao();
    double getAltura();
    virtual int mapear();
    void status();
};

#endif
