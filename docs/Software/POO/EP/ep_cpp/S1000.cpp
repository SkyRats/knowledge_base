#include "S1000.hpp"
#include <iostream>
using namespace std;

S1000::S1000(string nome, Bateria* bateria, double posicao) : Drone(nome, bateria, posicao){
}

S1000::~S1000(){
    cout << "S1000 destruido" << endl;
}

int S1000::mapear(){
    if(decolado == false){
        cout << "Drone esta no chao" << endl;
        return 1;
    }
    if(bateria->getCarga() < 10){
        cout << "sem carga" << endl;
        return 1;
    }
    else{
        bateria->usar(10);
        cout << "Mapeando..." << endl;
        cout << "_________________________" << endl;
        cout << "___o-o_______________/\\__" << endl;
        cout << "_____________________||__" << endl;
        cout << "___________\\O/_______||__" << endl;
        cout << "____________|________||__" << endl;
        cout << "____________/\\_______||__" << endl;
        cout << "_____________________||__" << endl;
        cout << "Mapeamento realizado" << endl;
        return 0;
    }
}
