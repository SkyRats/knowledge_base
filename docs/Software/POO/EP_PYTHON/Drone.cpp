#include "Drone.hpp"
#include <iostream>
#include <string>
using namespace std;

Drone::Drone(string nome, Bateria bateria, double posicao){
    this->nome = nome;
    this->bateria = bateria;
    this->posicao = posicao;
    this->altura = 0;
    this->decolado = false;
}

Drone::~Drone(){
    cout << "Drone destruido com sucesso :(" << endl;
}

void Drone::takeoff(int altura){
    if(bateria->getCarga() < 10)
        co

}

void Drone::land(){

}

void Drone::set_position(int x, int y){


}

void Drone::status(){


}