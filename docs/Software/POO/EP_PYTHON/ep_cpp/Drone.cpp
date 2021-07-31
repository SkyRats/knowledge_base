#include "Drone.hpp"
#include <iostream>
#include <string>
using namespace std;

Drone::Drone(string nome, Bateria* bateria, double posicao){
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
    if (bateria->getCarga() < 10)
        cout << "Sem bateria!" << endl;
    else {
        decolado = true;
        set_position(posicao, altura);
        cout << "Takeoff concluído!";
    }

}

void Drone::land(){
        set_position(posicao, 0);
        decolado = false;
        cout << "Drone pousado!" << endl;
}

void Drone::set_position(int x, int y){
    if (decolado){
        posicao = x;
        posicao = y;
        cout << "Drone indo para a posicao (" << x << "," << y << ")" << endl;
    }
    else
        cout << "Drone nao esta decolado" << endl;
}

void Drone::mapear(){
    cout << "Não consigo mapear!" << endl;
}

void Drone::status(){
    cout << "Drone: " << nome << endl;
    cout << "Bateria em " << bateria->getCarga() << " mAh" << endl;
    cout << "Drone esta na posicao (" << posicao << "," << altura << ")" << endl;
}
