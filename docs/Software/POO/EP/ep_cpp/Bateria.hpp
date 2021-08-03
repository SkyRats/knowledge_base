#ifndef BATERIA_H
#define BATERIA_H

class Bateria{

private:
    int mah;
    int tempoDeCarregamento;
    int carga;
    bool uso;
    bool carregavel;

public:
    Bateria(int mah, int tempoDeCarregamento);
    ~Bateria();
    void carregar(int tempo);
    bool usar(int tempo);

    int getCarga();
    int getTempoDeVoo();
    int getTempoDeCarregamento();
    bool getUso();
    bool getCarregavel();

    void setUso(bool uso);
    void setCarregavel(bool carregavel);
    void status();
};

#endif
