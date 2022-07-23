# Workshop de Programação Orientada a Objetos

## 1 Paradigmas de Programação 
Paradigma é o jeito que a linguagem de programação é programada, por exemplo, o que vocês viram no workshop de introdução era o paradigama imperativo, onde você manda um "passo a passo" para o programa rodar.

Agora, o que vamos aprender é o paradigma de orientação a objetos, em que vai surgir a ideia de classes e objetos, que vão ser um nível de abstração a mais!

## 2 Básicos de C++
Depois do workshop de introdução a programação vocês já devem estar brabos em C e python hehe então aqui temos umas novidades da linguagem C++ (que é o C com MAIS MAIS coisas).

### 2.1 CIN e COUT
Essas são as funções de impressão e leitura do C++! 

Em C para usar os famosos printf e scanf era necessário dar o `#include <stdio.h>`, agora aqui em C++ para usar o cin (C in) e cout (C out), de `#include <iostream>`.

A função cin substitui o scanf, com ela podemos pegar dados do nosso teclado e atribui-los a uma variável.

A função cout substitui o printf, com ela podemos imprimir coisas no monitor.

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
    cout << "Tenho " << minhaIdade << " anos!" << endl;
}

>>> ./SkyratsIostream.exe
>>> 19  //deixar de outra cor eh o fuco
>>> Tenho 19 anos!
>>> 
```
    
### 2.2 String

Existe uma biblioteca chamada string.h, com ela você pode representar palavras, frases ou textos, sem ter que usar o tal do Char. A string é como se fosse um vetor de caracteres, mas muito mais simples, por exemplo, o programa a seguir:

```cpp
#include <iostream>
#include <string>

using namespace std;

int main(){
    string frase = "A skyrats é a melhor equipe da POLI!";
    cout << frase << endl;
}

Vai ter como saída isso:
>>> ./SkyratsString.exe
>>> A skyrats é a melhor equipe da POLI!
>>>
```
    
 - Obs: Para usar o "cin e cout" e as "strings" é necessaário além da inclusão das respectivas bibliotecas o uso do namespaece "std" que será explicado mais pra frente do porquê.


## 3 Conceitos Básicos de OO
A programação orientada a objeto veio para abstrair a realidade! Nela transformamos conceitos da vida real em classes e métodos, visando simplificar a implementação de algumas coisas. 

Pra você que ta criando o código, o trampo ainda é grande, mas quem for usar ele vai te agradecer bastante.

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
    void retirar_fatia(){ //Método
        fatias--;
    }

private:
    string sabor;//Atributo
    int fatias;//Atributo
};

  int main(){
      Pizza *pizza1;//Criação de um objeto Pizza
  }
```
    
### 3.4 Revisão de Ponteiros ("->" ou "."?, e NULL)
O ponteiro é uma variável que guarda um endereço de memória. Por exemplo, um ponteiro para o "int valor", será algo parecido com 0x6453.
Para declarar um ponteiro, é so colocar um "*", desse jeito:
```cpp
int *x;
cout << x << endl;

Saída:
>>> ./Ponteiro.exe
>>> 0x32a57c
>>>
```
E se quisermos pegar o endereço de uma variável ja existente? Usa o "&", desse jeito:
```cpp
int x = 10;
cout << &x << " - " << x << endl;

Saída:
>>> ./Ponteiro2.exe
>>> 0x7b65d2 - 10
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

Um objeto não deixa de ser uma variável, ele só possui um nível de abstração a mais. Logo, podemos criar variáveis para guardar objetos e pegar seus endereços guardando em ponteiros.

 Tome cuidado, pois ao mesmo tempo que existe coisas para facilitar, de começo pode confundir um pouco.

Quando vamos criar uma variável para guardar um objeto, fazemos igual em um INT, por exemplo:
 ```cpp
 Carro celtinha;
 ```
 Desse jeito eu criei uma variável do tipo carro com o nome celtinha.
 
  Mas tem uma coisa, objetos funcionam igual variáveis, certo? 
  
  SIM! Então saindo de algum escopo ele também deixa de existir? 
  
  SIM! Mas temos como resolver isso, que é através dos ponteiros! Pois se usarmos continuamente o endereço na qual o objeto está ele não vai deixar de existir, e assim podemos trabalhar de uma forma mais ampla com ele, podemos fazer assim: 
  ```cpp
  Carro* celtinha;
  ```
  E nesse ponteiro celtinha, vamos guardar o ponteiro que aponta para o objeto, MAS PRESTE ATENÇÃO!!! Devemos tomar MUITO cuidado em como vamo chamar os métodos e atributos. Assim, se temos apenas um objeto("Carro celtinha;), chamamos os métodos e atributos usando ".", por exemplo:

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
Mas agora, se vamos guardar um objeto numa variável de ponteiro, teremos que chamar os métodos e atributos desreferenciando o ponteiro, assim: 
```cpp
(*celtinha).buzinar(); 
```
Mas em C++ existe uma coisa que facilita muito mais do que ficar desreferenciando o ponteiro toda hora, que é so usar uma setinha("->"), assim, podemos chamar o método desse jeito:
```cpp
celtinha->buzinar();
```
Exemplo completo:
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

E mais uma última coisa! E se quisermos guardar um "nada" dentro de um ponteiro, como fazemos?

 Usamos "NULL", assim o ponteiro não estará apontando para nenhum lugar.
```cpp
Carro *ponteiroCeltinha = NULL;
ponteiroCeltinha->buzinar();
Saída:
>>> ./PonteiroCeltinha.exe
>>>
```

## 4 Encapsulamento
Encapsulamento é indicar quem tem acesso a um método ou atributo.
### 4.1 Private
Os atributos e métodos "encapsulados" dentro do "private", só podem ser acessados dentro de métodos da própria classe, nem mesmo de classes filhas, coisas que veremos mais para a frente.

### 4.2 Public
Os atributos e métodos "encapsulados" dentro do "public", podem ser acessados em qualquer lugar, seja na main, em métodos de outras classes, etc...

### 4.3 Protected
Os atributos e métodos "encapsulados" dentro do "protected", tem acesso parecido com os encapsulados em "private", mas neste, métodos e atributos podem ser acessados apenas por ela mesma e por classes filhas (explicadas mais para frente). 

### 4.4 Headers(.h e .hpp) e Sources(.cpp)
Uma das grandes vantagens da OO é a modularização dos códigos, ou seja, cada parte pode ser compilada individualmente. Na prática isso significa que caso seja feito uma pequena alteração, só precisamos compilar o código modificado. 

Além disso, uma boa prática é criar arquivos diferentes para a definição e implementação de uma classe.

O arquivo de definição é o Header (.h) e (.hpp).

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
};

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
Quando programamos é normal incluirmos varios arquivos no inicio do programa, porém no meio desse monte de inclusão é muito fácil acabarmos incluindo o mesmo Header mais de uma vez, pois dentro de classes incluimos outras classes, o que pode ocasionar em um erro de definirmos multiplas vezes a mesma coisa. 

Para evitar isso, é recomendado que sempre que criarmos um Header usarmos o modelo:

```cpp
#ifndef CLASSE_H        // Se a classe não estiver definida
#define CLASSE_H        // Define a classe

class Classe{
    ...
};

#endif                  //Fim do ifndef
```

## 5 Getters e Setter
Normalmente na programação orientada a objetos, os atributos serão privados por uma questão de segurança, e para outras classes poderem acessa-los usaremos os métodos (normalmente públicos) getters e setters.

Os getter sãos métodos usados para retornar valores de atributos, e os setters para aplicar valores neles. Como é bem simples, com o exemplo é entendível sua utilidade:

```cpp
class Carro{
    public:
        int getCombustivel(){
            return combustivel;
        }
        void setCombustivel(int valor){
            combustivel = valor;
        }
    private:
        int combustivel;
};

int main() {
    Carro Celtinha = Carro();
    Celtinha.setCombustivel(30);
    cout << "Combustivel: " << Celtinha.getCombustivel() << endl;
}    

Tem como saída:
>>> ./Celtinha.exe
>>> Combustível: 30
```

## 6 Construtor e Destrutor
### 6.1 Construtor
O construtor é a primeira função que é executada quando instanciamos um objeto, nela serão iniciadas alguns atributos.
Existem duas principais formas de fazer esse processo:

Alocação Dinâmica: 
```cpp
Carro* Celtinha = new Carro();
```
Ele cria um objeto e atribui seu "Ponteiro" dinamicamente, ou seja, a variável será mantida mesmo depois do fechamento de escopo, assim, precisa ser desalocada manualmente. 

Alocação Estática:
```cpp
Carro* Celtinha = &(Carro());
```
Aqui a o ponteiro do objeto construído é atribuído à variável Celtinha, e por ser alocação estática, ele não precisa ser destruído manualmente, embora seja possível.

Quando estamos fazendo a classe podemos escrever um código para o construtor, e nisso podemos setar valores, criar variáveis, dar uns couts, uns cins, e fazer todo o possível para uma função normal, para isso devemos criar um método com o nome da própria classe.

- Obs: Usamos o "this->" para nos referirmos a um atributo ou método do objeto que o chamou. Podemos assim diferenciar coisas com o mesmo nome.

```cpp
class carro{
    public:
        carro(string nome, int ano){
            this->nome = nome; //O "this->nome" se refere ao atributo da classe.
            this->ano = ano;
            cout << "Carro " << nome << " do ano " << ano << " construído!!!" << endl;
        }

    private:
        string nome; //Atributo
        int ano;
};

int main() {
    carro Celtinha = carro("Celta", 2006);
}  

Saída:
>>> ./ConstrutorDoCeltinha.exe
>>> Carro Celta do ano 2006 construído!!!
```
### 6.2 Destrutor
Se você criou um objeto, ele vai ocupar espaço na memória! Portanto, é bom sabermos que podemos destruí-los, e para isso usamos o comando "delete", e esse comando chama o destrutor, uma função bemmm parecida com o construtor, só que com um til atrás, "~NomeDaClasse()", ele funciona assim:
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

## 7 Vetor de Objetos
Em C++, podemos criar vetores de variáveis simples, como: INTs, FLOATs... e PONTEIROS! Mas também podemos criar um vetor de objetos, guardando em cada posição do vetor um ponteiro para esse objeto, e podemos fazer isso de duas formas, estáticamente ou dinamicamente:
```cpp
Construcao* predios[tamanho]; //Estática
predios[2] = PredioAzul;
if(predios[2] == PredioAzul) cout << "Deu certo!" << endl;

Construcao** predios2 = new Construcao*[tamanho];
predios2[2] = PredioAzul;
if(predios2[2] == PredioAzul) cout << "Deu certo!" << endl;

>>> ./Predios.exe
>>> Deu certo!
>>> Deu certo!
>>> 
```
Obs: Para destruir vetores dinâmicos, já que ele não deixa de ser um tipo de objeto, você usa o "delete[] nomeDoVetor;".

## 8 Herança e Polimorfismo

### 8.1 O que é um filho
Ter filhos... É quando você cria uma classe a partir de outra, lógico...

Lembrem-se: USEM PROTEÇÃO!!! Coloquem os atributos em private...

Quando você cria uma classe filha de uma outra, essa classe filha vai herdar todas as características da classe pai, métodos, atributos, etc... E além disso você pode colocar mais coisas ainda. É mais fácil de entender com exemplo:

```cpp
#include <string>
#include <iostream>

using namespace std;

    class Pessoa {
        public:
            Pessoa(string nome, int idade){
                this->nome = nome;
                this->idade = idade;
            }
        protected:
            string nome;
            int idade;
    };

    class Bento : public Pessoa { //Para indicarmos que a classe é Bento é filha de Pessoa
        public:
            Bento(string nome, int idade, bool Politreco) : Pessoa("Bento", idade) { // Colocamos o ":" e chamamos o construtor da classe Pai e mandamos nesse construtor os atributos que vão para a classe Pai
                this->Politreco = Politreco;
            }
            void bentoPolitreco() {
                if(Politreco)
                    cout << "Bento eh politreco" << endl;
                else
                    cout << "Bento nao eh politreco" << endl;
            }
        private:
            bool Politreco;
    };

    int main() {
        Bento* bento = new Bento("Bento", 19, true);
        bento->bentoPolitreco();
    }

Saída:
>>> ./Bento.exe
>>> Bento eh politreco
>>>
```

### 8.2 Princípio da Substituição
Se F é filha de P, os objetos  do tipo F devem se comportar com P caso sejam tratados como P.

Ou seja, o filho tem tudo que o pai tem, então se usarmos o filho tratando ele como pai, deve se comportar como pai.

Pensa assim, se você usar o C++ pensando que ta programando em C, ele vai se comportar igualzinho como C!

### 8.3 Protected 
Agora que sabemos o que são filhos e pais no meio do OO, podemos entender o encapsulamento Protected, que como explicado antes, funciona igual o "Private", mas a diferença é que ele pode ser acessado pelos filhos, por exemplo, se eu tenho uma classe Pai, com um atributo Private Nome e um Protected Idade, e uma classe Filha de Pai, se nela chamarmos o atributo Nome, daria erro de compilação, ja se chamassemos o atributo Idade não, por outro lado, se estivessemos em uma outra classe, sem relação com as duas, daria erro de compilação se chamassemos os dois atributos.
```cpp
class Pai{               //01
    private:             //02
        string Nome;     //03
    protected:           //04
        int Idade;       //05
    };                   //06
class Filho{             //07
    public:              //08
        int getIdade{    //09
            return idade;//10
        }                //11
        string getNome{  //12
            return nome; //13
        }                //14
    };                   //15
int main(){              //16
    Pai pai = Pai();     //17
    cout << pai.Nome << endl; //18
    cout << pai.Idade << endl;//19
    return 0;            //20
}
Saída:
>>> gcc -c Protected.c
>>> Erro nas linhas 10, 18 e 19
>>>
```

## 9 Informações a mais
### 9.1 Const
É possivel criar constantes em C++! Isso pode evitar que durante a implementação de um programa alguem mude algo indevidamente.
Ex:
```cpp
const float pi = 3.14

ou

const Lampada *L1 = new Lampada("Branca");
```
Dessa forma, caso mudem o valor de PI ou a cor da lampada, um erro de compilação será gerado.

### 9.2 Virtual
Quando declaramos um método como virtual, no momento da execução, chama o método da própria classe.

O programa executa o método com base no tipo
específico do objeto!

 - Obs: É sempre bom declarar todos os métodos como virtuais, e como obrigação declarar todos os destrutores como virtuais, por que tem casos em que certos destrutores não são chamados.
 

Exemplo (sem virtual):
```cpp
    class Passaro {
        public: void canta() { cout << "Piuu Piuuu" << endl;}
    };
    class Arara : public Passaro {
        public: void canta() { cout << "Araraaa Araraa" << endl;}
    };
    int main(){
        Passaro* passaro = new Passaro();
        Passaro* arara = new Arara();
        passaro->canta();
        arara->canta();
        return 0;
    }

Saída:
>>> ./Passaros.exe
>>> Piuu Piuuu
>>> Piuu Piuuu
>>> 
```

Exemplo (com virtual):
```cpp
    class Passaro {
        public: virtual void canta() { cout << "Piuu Piuuu" << endl;}
    };
    class Arara : public Passaro {
        public: virtual void canta() { cout << "Araraaa Araraa" << endl;}
    };
    int main(){
        Passaro* passaro = new Passaro();
        Passaro* arara = new Arara();
        passaro->canta();
        arara->canta();
        return 0;
    }

Saída:
>>> ./Passaros.exe
>>> Piuu Piuuu
>>> Araraaa Araraa
>>> 
```

### 9.3 Namespace e STD
Namespaces são jeitos de não se repetirem nomes ao usar variáveis, por exemplo, se você cria um namespace para uma class X, toda vez que você for usar alguma coisa dessa classe, você terá que indicar o namespace, por exemplo:
```cpp
namespace UM {
    class UM {
        void metodoUm(){}
    }
}
***Em outro arquivo...***
#include "UM.h"

using namespace UM; //Aqui você indica o namespace usado com o "using"

int main(){
    metodoUm();
    return 0;
}
***Em outro arquivo...***
#include "UM.h"

int main(){
    UM::metodoUm(); //Aqui você indica o namespace usado com o "::"
    return 0;
}
```
Por isso que temos que usar o "using namespace std;" pois assim não precisamos escrever em cada COUT ou String o "std::" antes, apenas para facilitar.

# Programação Orientada a Objeto em Python
Agora vamos falar um pouco sobre como fazer tudo isso que vocês acabaram em python. Mas antes acho bom falar que tem algumas coisas que são consideravelmente diferente (e talvez até mais fácil heheh)

## 1 Conceitos Básicos de OO
As classes, objetos, atributos e métodos continuam tendo o mesmo conceito que em C++, mas a forma como escrevemos é diferente já que estamos em outra linguagem heheh

## 2 Criando a Classe
Vamos usar o primeiro exemplo usado em C++ e fazer alguma análises:
```python
#!/usr/bin/env python

class Pizza():
    def __init__(self, sabor = 'sabor', fatias = 0):
        self._sabor = sabor
        self._fatias = fatias

    def retirar_fatia(self):
        self._fatias -= 1
```
Primeiro, conseguimos perceber a criação do construtor dessa classe, obedecemos o padrão de ```__init__(self, a, b)```. Para criar um objeto com essa classe devemos chamar da seguinte forma:

```python
pizza1 = Pizza(queijo, 8)
```
Dessa forma, temos um objeto Pizza que possui como sabor queijo e 8 fatias, que são seus atributos. Para acessá-los, devemos usar a seguinte notação:
```python
sabor1 = pizza1._sabor
fatias1 = pizza1._fatias
```
Uma boa prática ao definir atributos que são "privados" é colocar _ antes do nome desse atributo. Assim, você consegue identificar lugares no código que não é aconselhado alterar o nome rs.

Agora, falando dos métodos dessa classe , temos o ```retirar_fatia(self)```. Para usá-lo, fazemos de maneira análoga aos atributos:
```python
pizza1.retirar_fatias()
```

## 3 Herança
Vamos ver o mesmo exemplo que fizemos em C++ em python

```python
class Pessoa():
    def __init__(self, nome = 'pessoa', idade = 0):
        self._nome = nome
        self._idade - idade

class Bento(Pessoa):
    def __init__(self, nome = 'pessoa', idade = 0, politreco = False):
        super().__init__(self, nome, idade)
        self._politreco = politreco

    def bentoPolitreco():
        if self._politreco:
            print("Bento eh politreco")
        else:
            print("Bento nao eh politreco")
```

No código podemos dizer que ```super()``` está se referindo a classe superior, ou seja, a classe Pessoa. Outra forma de escrever essa linha de código seria:
```python
Pessoa.__init__(self, nome, idade)
```
Basicamente, essa é a notação de Orientado a Objeto para python, mas gostaria de introduzir algumas coisas a mais sem comparar com os exemplos acima e que possa fazer vocês entenderem um pouco melhor as diferenças até agora

## 4 Organização dos Arquivos
Não é uma regra, mas normalmente organizamos os arquivos que possuem classe separadamente do código de fato que a utiliza. Colocamos a classe e criamos também uma main, a qual só é chamada se só existir aquela main.
```python
#!/usr/bin/env python

class Carro():
    def __init__(self, nome, ano):
        self._nome = nome
        self._ano = ano
        print("Carro" + nome + "do ano" + str(ano) + "construído!!!")

if __name__ == '__main__':
    celtinha = Carro("Celta", 2006)  
```

Se apenas rodarmos esse código e implementarmos mais o que está dentro de ```if __name__ == '__main__'```, isso vai ser considerado a main do código. Caso importarmos essa classe para outro código, ele não rodará o que está dentro dessa suposta main.
## 5 Saiba Mais hihih
### 5.1 Objetos em python
Uma coisa que eu não contei pra vocês é que python cria objetos todas as vezes que você atribui um "valor" para uma variável. Mas como assim?
```python
>>> a = [1, 2, 3]
>>> b = a
>>> a[0] = 0
>>> b[0]
[0, 2, 3]
```
Por que o valor de b também mudou? Isso aconteceu porque, na verdade, a é uma referência para um objeto que é o mesmo que b está se referenciando.

Esse foi um exemplo de um objeto mutável em python. Existe objetos imutáveis em python, onde ele não altera o valor do objeto que está apontando, mas altera para onde ele está apontando:
```python
>>> a = 10
>>> b = a
>>> a = a + 1
>>> b
10
>>> a is b #olhar id(a) e id(b)
False 
>>> s = "skyrats"
>>> t = s
>>> s += "_s2"
>>> s
skyrats_s2
>>> t
skyrats
```
Podemos ver os métodos de objetos que criamos ao atribuir variáveis com ```dir(a)```
### 5.2 Métodos especiais
Não sei se de fato posso chamar de métodos especiais, mas você deve ter percebido que a notação do iniciador possui uma notação especial, como também ao chamar ```dir(a)```, aparecem métodos com essa notação:

```python
class Coordenadas():
  def __init__(self, x, y): #construtor do objeto a
    self._x = x
    self._y = y

  def __str__(self): #usado quando chamamos print(a)
    return "(" + str(self._x) + "," + str(self._y) + ")"

  def __add__(self, outro): #usado quando somamos os objetos
    return Coordenadas(self._x + outro._x, self._y + outro._y)

  def __getitem__(self, indice): #podemos pegar itens com a[0]...
    if indice == 0:
      return self._x
    elif indice == 1:
      return self._y
    else:
      raise IndexError ("A coordenada não tem este componente")

  def __len__(self): #usado quando chamamos len(a)
    return 2
```
Existem mais métodos especiais, esses são apenas exemplos

### 5.3 Encapsulamento
De fato em python, o código não obedece o encapsulamento. Por isso, a boa prática que foi comentado anteriormente de colocar o ```_``` antes de atributos e métodos que não devem ser alterados, apesar de qualquer um poder alterá-los.

Esse é um dos motivos que há divergência quando se fala que python não é uma linguagem orientada a objetos.
