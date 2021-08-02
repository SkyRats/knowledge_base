#include "Bateria.hpp"
#include <iostream>
using namespace std;

Bateria::Bateria(int mah, int tempoDeCarregamento){
    this->mah = mah;
    this->tempoDeCarregamento = tempoDeCarregamento;
    this->carga = 0;

}

Bateria::~Bateria(){
    cout << "Bateria destruida com sucesso" << endl;
}

void Bateria::carregar(int tempo){
    if (carga == mah)
        cout << "Bateria ja esta carregada!" << endl;
    else{
        carga = carga + (mah * tempo) / tempoDeCarregamento;
        if(carga > mah)
            carga = mah;
        cout << "Depois de carregar por " << tempo << "tempos, a bateria ficou com " << carga << "mah" << endl;

    }
}

void Bateria::usar(int tempo){
    if(carga == 0)
        cout << "bateria descarregada :c" << endl;
    else{
        carga = carga - (mah * tempo) / tempoDeCarregamento;
        if (carga < 0)
            carga = 0;
    }

}

int Bateria::getCarga(){
    return carga;
}

int Bateria::getTempoDeCarregamento(){
    return tempoDeCarregamento;
}

int Bateria::getTempoDeVoo(){
    return (tempoDeCarregamento * carga)/mah;
}

void Bateria::status(){
    cout << "Especificacoes: " << endl << "\tmAh: " << mah << endl;
    cout << "\tTempo de carregamento: " << tempoDeCarregamento << endl;
    cout << "\tAtualmente com carga: " << carga << " e tempo de voo restante: " << this->getTempoDeVoo() << endl;
}
