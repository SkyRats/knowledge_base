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
    Drone(string nome, Bateria bateria, double posicao);
    ~Drone();
    
    void takeoff(int altura);
    void land();
    void set_position(int x, int y);
    void status();
};

#endif