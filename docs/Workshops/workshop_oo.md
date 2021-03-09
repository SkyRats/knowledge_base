# Workshop de Programação Orientada a Objetos
SOMOS O FELIPE E O BENTO E ESTAMOS DE REC NA MATERIA QUE VAMOS DAR PARA VOCES!
https://github.com/SkyRats/workshops/tree/object_oriented_prog_cpp

TEMOS QUE FALAR UM POUCO DE COMO CRIAR UMA MAIN EU ACHO.

## 1.0 Paradigmas de Programação 
Paradigma é o jeito que a linguagem de programação é programada, por exemplo, o que vocês viram no workshop de introdução era o paradigama imperativo, onde você manda um "passo a passo" para o programa rodar.

O que vamos aprender é o paradigma de orientação a objetos, onde vai surgir a ideia de classes e objetos, que vão ser um nível de abstração a mais!

Por exemplo, ao invés de você criar uma varíavel inteira com o nome 
```cpp
int Valor_Combustível_Carro_1 = 90;
```
Você pode criar um objeto carro e indicar seu combustivel.
```cpp
carro[1]->setCombustivel(90);
```
... Viu? Mais fácil!

## 2.0 Básicos de C++
Depois do workshop de introdução a programação vocês já devem estar brabos em C e python hehe então aqui temos umas novidades da linguagem C++ (que é o C com MAIS MAIS coisas).

### 2.1 CIN e COUT
Essas são as funções de impressão e leitura do C++! 

Em C para usar os famosos printf e scanf era necessário dar o famoso #include <stdio.h>, agora aqui em C++ para usar o cin (C in) e cout (C out), de #include <iostream>.

A cin substitui o scanf, com ela podemos pegar dados do nosso teclado e atribui-los a uma variável.

A cout substitui o printf, com ela podemos imprimir coisas no monitor.

Mas pera ai, se o C++ é um complemento do C, eu ainda posso usar o printf e scanf?? 

Sim!! Você pode continuar usando, mas os desenvolvedores criaram essas novas funções para serem mais intuitvas, pois nelas o fluxo que o dado percorre é mostrado com o "<<".

- Obs: o "endl" (end line) pula uma linha, assim como o "\n".

Exemplo:

```cpp
#include <iostream>
using namespace std;
        
int main(){
    int minhaIdade;
    cin >> minhaIdade;
    cout << "Tenho" << minhaIdade << " anos!" << endl;
}

>>> ./SkyratsIostream.exe
>>> Tenho 19 anos!
>>> 
```
    
### 2.2 String

Existe uma biblioteca chamada <string.h>, com ela você para representar palavras, frases e outras coisas, sem ter que usar o tal do Char. A string é como se fosse um vetor de caracteres, mas muito mais simples, por exemplo, o programa a seguir:

```cpp
#include <string>
using namespace std;

int main(){
    string frase = "A skyrats é a melhor equipe da POLI!"
    cout << frase << endl;
}

Vai ter como saída isso:
>>> ./SkyratsString.exe
>>> A skyrats é a melhor equipe da POLI!
>>>
```
    
 - Obs: Para usar o "cin e cout" e as "strings" é necessaário além da inclusão das respectivas bibliotecas o uso do namespaece "std" que será explicado mais pra frente do porquê.


## 3.0 Conceitos Básicos de OO
A programação orientada a objeto veio para abstrair a realidade! Nela transformamos conceitos da vida real em classes e métodos, visando simplificar a implementação de algumas coisas. 

Pra você que ta criando o código o trampo ainda é grande, mas quem for usar ele vai te agradecer bastante.
### 3.1 Classe
A classe vai ser um molde com diversas caracteristicas.
Por exemplo, podemos criar a classe pizza que terá um atributo que indica o seu sabor e outro que indica a quantidade de fatias que ela tem.

### 3.2 Objetos
O objeto é a instância da classe, ou seja, se usarmos o molde(classe) da pizza, podemos criar diversas pizzas(objeto) e todas elas terão um sabor(atributo) e uma quantidade de fatias(atributo).

### 3.3 Atributos
São as propriedades e estados de uma classe.

### 3.4 Métodos
São a implementação dos serviços disponibilizados pelos objetos.
Podemos criar para a classe pizza o metódo "retirar_fatia()", agora podemos diminuir o numero de fatias que ela tem por meio de um método! 

```cpp
#include <string>
using namespace std;

class Pizza{//Classe
public:
    void retirar_fatia();//Método

private:
    string sabor;//Atributo
    int fatias;//Atributo
};

  int main(){
      Pizza *pizza1;//Criação de um objeto Pizza
  }
```
    
### 3.4 Revisão de Ponteiros ("->" ou "."?, e NULL)
O ponteiro é uma variável que guarda um endereço de memória. Por exemplo, um ponteiro para o "int valor", será algo parecido com 09x6453.
Para declarar um ponteiro, é so colocar um "*", desse jeito:
```cpp
int *x;
cout << x << endl;

Saída:
>>> ./Ponteiro.exe
>>> 05x3257
>>>
```
E se quisermos pegar o endereço de uma variável ja existente? Usa o "&", desse jeito:
```cpp
int x = 10;
cout << &x << " - " << x << endl;

Saída:
>>> ./Ponteiro2.exe
>>> 01x7652 - 10
>>>
```
Mas e agora, e se quisermos ir até a variável tendo o endereço dela? Usaremos também o "*", desse jeito:
```cpp
int x = 10;
int* y = &x;
cout << x << " - " << *y << endl;

Saída:
>>> ./Ponteiro3.exe
>>> 10 - 10
>>>
```
Certo, sabendo disso podemos agora falar como isso tudo de ponteiros interfere em objetos.
Um objeto não deixa de ser uma variável, ele só possui um nível de abstração a mais. Logo, podemos criar variáveis para guardar objetos e pegar seus endereços guardando em ponteiros, porém, temos que tomar um certo cuidado, pois ao mesmo tempo que existe coisas para facilitar, de começo pode confundir um pouco.
Quando vamos criar uma variável para guardar um objeto, fazemos igual em um INT, por exemplo: "Carro celtinha;", desse jeito eu criei uma variável do tipo carro com o nome celtinha. Mas tem uma coisa, objetos funcionam igual variáveis, certo? SIM!, então saindo de algum escopo ele também deixa de existir? SIM!, mas temos como resolver isso, que é atravéz dos ponteiros! Pois se usarmos continuamente o endereço na qual o objeto está ele não vai deixar de existir, e assim podemos trabalhar de uma forma mais ampla com ele, podemos fazer assim: "Carro* celtinha;", e nesse ponteiro celtinha, vamos guardar o ponteiro que aponta para o objeto, MAS PRESTE ATENÇÃO!!!, devemos tomar MUITO cuidado em como vamo chamar os métodos e atributos. Assim, se temos apenas um objeto("Carro celtinha;), chamamos os métodos e atributos usando ".", por exemplo:

```cpp
Carro celtinha = Carro(); //Esse método é um construtor, não se preocupe com ele agora, vamos explicar mais para a frente, apenas saiba que estamos colocando um objeto do tipo Carro na variável
celtinha.buzinar(); // Esse método retorna no terminal a buzina
cout << "Ano do carro: " << celtinha.ano << endl; // Aqui ele chama o atributo que guarda o ano do carro

Saída:
>>> ./PonteiroCeltinha.exe
>>> Biiii Biiiiiii
>>> Ano do carro: 2006
>>>
```
Mas agora, se vamos guardar um objeto numa variável de ponteiro, teremos que chamar os métodos e atributos desreferenciando o ponteiro, assim: "(*celtinha).buzinar();". Mas em C++ existe uma coisa que facilita muito mais do que ficar desreferenciando o ponteiro toda hora, que é so usar uma setinha("->"), assim, podemos chamar o método desse jeito: "celtinha->buzinar();".
```cpp
Carro celtinha = Carro();
Carro *ponteiroCeltinha = &celtinha;

(*ponteiroCeltinha).buzinar();
ponteiroCeltinha->buzinar();

cout << "Ano do carro: " << (*ponteiroCeltinha).ano << endl;
cout << "Ano do carro: " << ponteiroCeltinha->ano << endl;

Saída:
>>> ./PonteiroCeltinha.exe
>>> Biiii Biiiiiii
>>> Biiii Biiiiiii
>>> Ano do carro: 2006
>>> Ano do carro: 2006
>>>
```
E mais uma última coisa! E se quisermos guardar um "nada" dentro de um ponteiro, como fazemos? Usamos "NULL"!!!
```cpp
Carro *ponteiroCeltinha = NULL;
ponteiroCeltinha->buzinar();
Saída:
>>> ./PonteiroCeltinha.exe
>>> Runtime Error :C
>>>
```

## 4.0 Encapsulamento
### 4.1 Private
Os atributos e métodos "encapsulados" dentro do "private", só podem ser acessados dentro de métodos da própria classe, nem mesmo de classes filhas, coisas que veremos mais para a frente.

### 4.2 Public
Os atributos e métodos "encapsulados" dentro do "public", podem ser acessados em qualquer lugar, seja na main, em métodos de outros objetos, etc...

### 4.3 Protected
Os atributos e métodos "encapsulados" dentro do "protected", é parecido com o "private", mas 

### 4.4 Headers(.h e .hpp) e Sources(.cpp)
Uma das grandes vantagens da OO é a modularização dos códigos, ou seja, cada parte pode ser compilada individualmente. Na prática isso significa que caso seja feito uma pequena alteração, só precisamos compilar o código modificado. 

Além disso, uma boa prática é criar arquivos diferentes para a definição e implementação de uma classe.

O arquivo de definição é o Header (.h).

O arquivo de implementação é o Source (.cpp)

Ex: Relógio.h
```cpp 
class Relogio{
    private:
        int hora;
        int minuto;
    public:
        int getHora();
        int getMinuto();
}

```
Ex: Relógio.cpp
```cpp 
#include "Relogio.h"

int Relogio::getHora(){
    return hora;
}

int Relogio::getMinuto(){
    return minuto;
}

```


### 4.5 "#ifndef - #endif" e "#define"
Quando programamos é normal incluirmos varios arquivos no inicio do programa, porém no meio desse monte de inclusão é muito fácil acabarmos incluindo duas vezes a mesma coisa, o que pode ocasionar em um erro de definirmos multiplas vezes a mesma coisa. 

Para evitar isso, é recomendado que sempre que criarmos um Header usarmos o modelo:

```cpp
#ifndef CLASSE_H        // Se a classe não estiver definida
#define CLASSE_H        // Define a classe

class Classe{
    ...
};

#endif                  //Fim do ifndef
```i

## 5.0 Getters e Setter
Normalmente na programação orientada a objetos, os atributos serão privados por uma questão de segurança, e para outras classes poderem acessa-los usaremos os métodos (normalmente públicos) getters e setters.
s
 Os getter sãos métodos usdos para retornar valores de atributos, e os setters para aplicar valores neles. Como é bem simples, com o exemplo é entendível sua utilidade:

```cpp
class carro{
    public:
        int getCombustivel(){
            return combustivel;
        }
        void setCombustivel(int valor){
            combustivel = valor;
        }
    private:
        int combustivel;
}

int main() {
    Carro Celtinha = Carro();
    Celtinha.setCombustivel(30);
    cout << "Combustivel: " << Celtinha.getCombustivel() << endl;
}    

Tem como saída:
>>> ./Celtinha.exe
>>> Combustível: 30
```

## 6.0 Construtor e Destrutor
### 6.1 Construtor
Quando você cria um objeto, exemplo: "Carro* Celtinha = new Carro()", ele cria um objeto e atribui seu "Ponteiro" ná variável Celtinha, isso é um construtor. Mas e se quisermos fazer construtores com mais coisas? Podemos? SIMMM!
Quando estamos fazendo a classe podemos escrever um código para o construtor, e nisso podemos setar valores, criar variáveis, dar uns couts, uns cins, e fazer todo o possível para uma função normal, para isso devemos criar um método com o nome da própria classe.
- Obs: Para setarmos valores para a própria classe, usamos o "this->", para assim podermos diferenciar variáveis com mesmo nome.
```cpp
class carro{
    public:
        Carro(string nome, int ano){
            this->nome = nome;
            this->ano = ano;
            cout << "Carro " << nome << " do ano " << ano << " construído!!!" << endl;
        }

    private:
        int combustivel;
}

int main() {
    Carro Celtinha = Carro("Celta", 2006);
}  

Saída:
>>> ./ConstrutorDoCeltinha.exe
>>> Carro Celta do ano 2006 construído!!!
```
### 6.2 Destrutor
Se você criou um objeto, ele vai ocupar espaço na memória! Portanto, é bom sabermos que podemos destruí-los, e para isso usamos o comando "delete", e esse comando chama uma função bemmm parecida com o construtor, só que com um tio atrás, "~NomeDaClasse()", ele funciona assim:
```cpp
class Comida{
    public:
        Comida(string nome, bool vencida){
            this->nome = nome;
            this->vencida = vencida;
        }
        ~Comida(){
            if(vencida == true)
                cout << "Parabéns!, você jogou sua(seu) " << nome << " vencida(o) fora!" << endl;
            else
                cout << "Que feio! você jogou sua(seu) " << nome << " nova(o) fora! Não desperdice comida >:"
        }
    private:
        string nome;
        bool vencida;
}

int main(){
    Comida* cenoura = new Comida("Cenoura", true);
    Comida* beringela = new Comida("Beringela", false);
    delete cenoura;
    delete beringela;
}

Saída:
>>> ./Comida.exe
>>> Parabéns!, você jogou sua(seu) Cenoura vencida(o) fora!
>>> Que feio! você jogou sua(seu) Beringela nova(o) fora! Não desperdice comida >:
```

## 7.0 Vetor de Objetos
Em C++, como podemos criar vetores de variáveis simples, como INTs, FLOATs... e PONTEIROS! Podemos criar um vetor de objetos também, guardando em cada posição do vetor um ponteiro para esse objeto, e podemos fazer isso de duas formas, estáticamente ou dinamicamente:
```cpp
Construcao* predios[tamanho]; //Estática
predios[2] = PredioAzul;
if(predios[2] == PredioAzul) cout << "Primeiro deu certo!" << endl;

Construção** predios2 = new Construcao*[tamanho];
predios2[2] = PredioAzul;
if(predios[2] == PredioAzul) cout << "Segundo deu certo!" << endl;

>>> ./Predios.exe
>>> Primeiro deu certo!
>>> Segundo deu certo!
>>> 
```
Obs: Para destruir vetores dinâmicos, já que ele não deixa de ser um tipo de objeto, você usa o "delete[] nomeDoVetor;".

## 8.0 Herança e Polimorfismo

### 8.1 O que é um filho

### 8.2 Princípio da Substituição

### 8.3 Protected 

## Ultimo.0 Informações a mais
### Ultimo.0.1 Const

### Ultimo.0.2 Virtual

### Namespace e STD



Definição e Paradigma 
Conceito 