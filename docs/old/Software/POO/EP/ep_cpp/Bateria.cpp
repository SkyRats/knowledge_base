#include "Bateria.hpp"
#include <iostream>
using namespace std;

Bateria::Bateria(int mah, int tempoDeCarregamento){
    this->mah = mah;
    this->tempoDeCarregamento = tempoDeCarregamento;
    this->carga = 0;
    this->carregavel = true;
    this->uso = false;
}

Bateria::~Bateria(){
    cout << "Bateria destruida com sucesso" << endl;
}

void Bateria::carregar(int tempo){
    if (carga == mah)
        cout << "Bateria ja esta carregada!" << endl;
    else {
        carga = carga + (mah * tempo) / tempoDeCarregamento;
        if(carga > mah)
            carga = mah;
        cout << "Depois de carregar por " << tempo << "tempos, a bateria ficou com " << carga << "mah" << endl;

    }
}

bool Bateria::usar(int tempo){
    if(carga == 0){
        cout << "bateria descarregada :c" << endl;
        return false;
    }
    else{
        int cargaTemp  = carga - (mah * tempo) / tempoDeCarregamento;
        if (cargaTemp < 0)
            return false;
        else{
            carga = cargaTemp;
            return true;
        }
    }
}

int Bateria::getCarga(){
    return carga;
}

int Bateria::getTempoDeCarregamento(){
    return tempoDeCarregamento;
}

int Bateria::calculaTempoDeVoo(){
    return (tempoDeCarregamento * carga)/mah;
}

void Bateria::status(){
    cout << "Especificacoes: " << endl << "\tmAh: " << mah << endl;
    cout << "\tTempo de carregamento: " << tempoDeCarregamento << endl;
    cout << "\tAtualmente com carga: " << carga << " e tempo de voo restante: " << this->calculaTempoDeVoo() << endl;
    cout << "\tÉ carregavel: " << carregavel << endl;
    cout << "\tEstá sendo usada: " << uso << endl;
}

bool Bateria::getUso(){
    return uso;
}

bool Bateria::getCarregavel(){
    return carregavel;
}

void Bateria::setUso(bool uso){
    this->uso = uso;
}

void Bateria::setCarregavel(bool carregavel){
    this->carregavel = carregavel;
}
