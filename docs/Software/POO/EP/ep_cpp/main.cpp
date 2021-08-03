#include <iostream>
#include <string>
#include <vector>
#include "S1000.hpp"
using namespace std;

int main(){
    int escolha = 0;
    vector<Bateria*> *vetorBaterias = new vector<Bateria*>();
    vector<Drone*> *vetorDrones = new vector<Drone*>();

    while(escolha != 8){
        cout << endl;
        cout << "-----------Drone OO Simulator V1-----------" << endl << endl;
        cout << "O que quer fazer?"           << endl;
        cout << "\t1. Comprar bateria"            << endl;
        cout << "\t2. Comprar um S1000"         << endl;
        cout << "\t3. Montar um drone generico" << endl;
        cout << "\t4. Usar os drones existentes"<< endl;
        cout << "\t5. Carregar baterias"        << endl;
        cout << "\t6. Listar drones"                     << endl;
        cout << "\t7. Listar baterias"                     << endl;
        cout << "\t8. Sair"                     << endl;
        cin >> escolha;
        switch(escolha){
            case 1:{
                cout << "Especificacoes da bateria" << endl;
                int mAh, t;
                cout << "mAh: ";
                cin >> mAh;
                cout << "Tempo de Carregamento: ";
                cin >> t;
                Bateria *bat = new Bateria(mAh, t);
                vetorBaterias->push_back(bat);
                }break;

            case 2:{
                double posicao;
                cout << "Seu S1000 chegou, onde colocar ele?" << endl;
                cout << "Posicao: ";
                cin >> posicao;
                Bateria *bateria = new Bateria(22000, 40);
                vetorBaterias->push_back(bateria);
                S1000 *smilson = new S1000("S1000", bateria, posicao);
                vetorDrones->push_back(smilson);
                cout << "Drone " << vetorDrones->size() << " pronto" << endl;
                }break;
            case 3:{
                string nomeDrone;
                int id;
                double posicao;
                cout << "Vamos monta-lo!" <<endl;
                cout << "Nome: ";
                cin >> nomeDrone;
                if(vetorBaterias->size() == 0)
                    cout << "Antes compre uma bateria" << endl;
                else{
                    cout << "Escolha uma bateria: " << endl;
                    for(int c = 0; c < vetorBaterias->size(); c++){
                        cout <<"Bateria " << c + 1 << endl;
                        vetorBaterias->at(c)->status();
                        cout << endl;
                    }
                cin >> id;
                cout << "Posicao inicial: ";
                cin >> posicao;
                Drone *drone = new Drone(nomeDrone, vetorBaterias->at(id-1), posicao);
                vetorDrones->push_back(drone);
                cout << "Drone " << vetorDrones->size() << " pronto" << endl;
                }
                }break;
            case 4:{
                int escolhaDrone = 0;
                int escolhaFazer = 0;
                if(vetorDrones->size() == 0){
                    cout << "Sem drones disponiveis" << endl;
                    break;
                }
                cout << "Escolha o drone que deseja utilizar: " << endl;
                for(int c = 0; c < vetorDrones->size(); c++){
                    cout << c+1 << ". ";
                    vetorDrones->at(c)->status();
                    cout << endl;
                }
                cin >> escolhaDrone;
                while( escolhaFazer != 5){
                    cout << "\tO que voce quer fazer? "<<endl;
                    cout << "\t1. Takeoff" << endl;
                    cout << "\t2. Ir para uma posicao " << endl;
                    cout << "\t3. Pousar " << endl;
                    cout << "\t4. Mapeamento " << endl;
                    cout << "\t5. Voltar" << endl;
                    cin >> escolhaFazer;

                    switch(escolhaFazer){
                        case 1:{
                            double altura;
                            cout << "Altura: ";
                            cin >> altura;
                            vetorDrones->at(escolhaDrone - 1)->takeoff(altura);
                        }break;
                        case 2:{
                        double x,y;
                        cout << "Posicao atual: " << vetorDrones->at(escolhaDrone - 1)->getPosicao() << " , " << vetorDrones->at(escolhaDrone - 1)->getAltura() << endl;
                        cout << "Posicao horizontal desejada: ";
                        cin >> x;
                        cout << "Altura desejada:";
                        cin >> y;
                        vetorDrones->at(escolhaDrone - 1)->setPosition(x,y);


                        }break;
                        case 3:{
                            vetorDrones->at(escolhaDrone - 1)->land();

                        }break;
                        case 4:{
                            vetorDrones->at(escolhaDrone - 1)->mapear();
                        }break;
                    }
                    vetorDrones->at(escolhaDrone - 1)->status();
                }
                }break;
            case 5:{
                int tempo; bool flag;
                cout << "Carregar por quanto tempo?" << endl;
                cin >> tempo;
                for(int c = 0; c < vetorBaterias->size(); c++){
                    if(vetorBaterias->at(c)->getCarregavel() && vetorBaterias->at(c)->getUso())
                        vetorBaterias->at(c)->carregar(tempo);
                    else
                        cout << "Não é possivel carregar a bateria " << c << endl;
                }
            }break;

            case 6:{
                cout << "  Listndo drones:" << endl; 
                for(int i = 0; i < vetorDrones->size(); i++){
                    cout << "Drone: " << i << endl;
                    vetorDrones->at(i)->status();
                }
            }break;

            case 7:{
                cout << "  Listndo baterias:" << endl; 
                for(int i = 0; i < vetorBaterias->size(); i++){
                    cout << "Bateria: " << i << endl;
                    vetorBaterias->at(i)->status();
                }
            };
            }
        }
        for(int c = 0; c < vetorBaterias->size(); c++){
                    delete vetorBaterias->at(c);
                }
        for(int c = 0; c < vetorDrones->size(); c++){
                    delete vetorDrones->at(c);
                }


    return 0;
}
