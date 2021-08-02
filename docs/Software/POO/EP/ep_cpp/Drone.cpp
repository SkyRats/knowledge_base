#include "Drone.hpp"
#include <iostream>
#include <string>
#include <math.h>
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
        setPosition(posicao, altura);
        cout << "Takeoff concluido!";
    }

}

void Drone::land(){
        setPosition(posicao, 0);
        decolado = false;
        cout << "Drone pousado!" << endl;
}

void Drone::setPosition(double x, double y){
    int tempo;
    if (decolado){
        tempo = (sqrt(pow((posicao - x),2) + pow((altura - y),2)))/60;
        cout << "tempo usado " << tempo << endl;
        bateria->usar(tempo);
        posicao = x;
        altura = y;
        cout << "Drone indo para a posicao (" << x << "," << y << ")" << endl;
    }
    else
        cout << "Drone nao esta decolado" << endl;
}

double Drone::getPosicao(){
    return posicao;
}

double Drone::getAltura(){
    return altura;
}

int Drone::mapear(){
    cout << "Nao consigo mapear!" << endl;
    return 1;
}

void Drone::status(){
    cout << "Drone: " << nome << endl;
    cout << "Bateria em " << bateria->getCarga() << " mAh" << endl;
    cout << "Drone esta na posicao (" << posicao << "," << altura << ")" << endl;
}
