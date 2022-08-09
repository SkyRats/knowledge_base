#ifndef BATERIA_H
#define BATERIA_H

class Bateria{

private:
    long int mah;
    long int tempoDeCarregamento;
    long int carga;
    bool uso;
    bool carregavel;

public:
    Bateria(int mah, int tempoDeCarregamento);
    ~Bateria();
    void carregar(int tempo);
    bool usar(int tempo);
    int calculaTempoDeVoo();

    int getCarga();
    int getTempoDeCarregamento();
    bool getUso();
    bool getCarregavel();

    void setUso(bool uso);
    void setCarregavel(bool carregavel);
    void status();
};

#endif
