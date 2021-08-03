#include "Drone.hpp"
#include <iostream>
#include <string>
#include <math.h>

using namespace std;

Drone::Drone(string nome, Bateria* bateria, double posicao){
    this->nome = nome;
    this->bateria = bateria;
    bateria->setUso(false);
    this->posicao = posicao;
    this->altura = 0;
    this->decolado = false;
}

Drone::~Drone(){
    cout << "Drone destruido com sucesso :(" << endl;
}

void Drone::takeoff(int altura){
        setPosition(posicao, altura);
        decolado = true;
        bateria->setCarregavel(false);
        cout << "Takeoff concluido!";
}

void Drone::land(){
        altura = 0;
        decolado = false;
        cout << "Drone pousado!" << endl;
}

void Drone::setPosition(double x, double y){
    if(y <= 0){
        cout << "Drone não pode ir para alturas menores ou iguais a 0" << endl;
    }
    int tempo;
    if (decolado){
        tempo = (sqrt(pow((posicao - x),2) + pow((altura - y),2)))/60;
        if(bateria->usar(tempo)){
            posicao = x;
            altura = y;
            cout << "Drone indo para a posicao (" << x << "," << y << ")" << endl;
            cout << "tempo usado " << tempo << endl;
        }
        else{
            cout << "Drone nao pode decolar" << endl;
        }
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
    cout << "Bateria em " << bateria->getCarga() << " mAh e com tempo de voo de " << bateria->calculaTempoDeVoo() << " minutos" << endl;
    cout << "Drone esta na posicao (" << posicao << "," << altura << ")" << endl;
}
