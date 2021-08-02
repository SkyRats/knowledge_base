#ifndef BATERIA_H
#define BATERIA_H

class Bateria{

private:
    int mah;
    int tempoDeCarregamento;
    int carga;

public:
    Bateria(int mah, int tempoDeCarregamento);
    ~Bateria();
    void carregar(int tempo);
    void usar(int tempo);
    int getCarga();
    int getTempoDeVoo();
    int getTempoDeCarregamento();
    void status();
};

#endif
