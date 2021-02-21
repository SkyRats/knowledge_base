# Convenções de Código


## Motivação

Em geral, times de desenvolvedores passam mais tempo lendo e mantendo código já escrito (incluindo durante debugging) do que escrevendo código novo. Assim, é necessário que código seja de fácil compreensão tanto para a pessoa que o desenvolveu inicialmente, mas não se lembra de todos os detalhes, quanto para outros membros do time que nunca trabalharam no projeto.

Nesse contexto, convenções de programação servem como uma fundação para que todos consigam entender e escrever com facilidade código que outras pessoas entendam. Elas economizam tempo de revisão, permitindo que o programador entenda mais rapidamente a estrutura de um programa pouco familiar. Além disso, facilitam que outros grupos integrem código de diversos times e adaptem-no com facilidade.



## Princípios gerais

Essa seção descreve atributos de Código Limpo, e que se aplicam a qualquer linguagem de programação. Ela não é excludente com as seções de linguagens específicas, e é até mais importante do que as outras. 



### Layout

Programas são em geral complexos, realizando diversas tarefas para chegar ao resultado desejado. Por isso, é importante que essas tarefas estejam bem segmentadas em funções e classes claras, sem repetição e, o máximo possível, independentes da implementação de outras funções ou classes.

#### Funções

- Devem ser pequenas, realizando apenas uma única tarefa
	- É aconselhável tentar deixar suas funções com até 20 linhas, mas isso não é necessário
	- De preferência em um único nível de abstração (esse é o critério mais difícil de implementar)
- Devem ter o menor número de argumentos possível, preferencialmente até 3
	- Caso tenha mais, possivelmente esses argumentos poderiam ser colocados em um objeto de mais fácil compreensão (e.g. um objeto `Point` em vez de `x` e `y`)
	- Caso várias funções dependam de uma mesma lista de argumentos, considere colocá-las em uma classe à parte
- Devem ou executar uma tarefa, ou retornas informação, mas não os dois
- Devem preferencialmente não modificar seus argumentos ou ter efeitos em outros objetos que não estejam óbvios

#### Classes

- Devem ser pequenas e coesas (i.e. ter membros com dependências similares e que necessariamente se beneficiam de estarem juntos)
- Devem permitir adição de novas funções facilmente

É necessário ressaltar que **nenhum objeto deve depender da implementação de outro**. 

Por exemplo, uma classe `DrawCircle` depende do fato da classe `LocateCircle` ter atributos `center_x_` e `center_y_`. Posteriormente, a classe `LocateCircle` passa a armazenar o centro em coordenadas polares. Com isso, `DrawCircle` vai parar de funcionar e vai precisar ser modificada também. Nesse exemplo, seria mais adequado existir uma função `GetCircleCenter` em `LocateCircle`, criando uma camada de abstração entre as implementações das classes.



### Comentários

Do Google C++ Style Guide:

> Comments are absolutely vital to keeping our code readable. The following rules describe what you should comment and where. But remember: while comments are very important, the best code is self-documenting.

Do Style Guide for Python Code

> Comments that contradict the code are worse than no comments. Always make a priority of keeping the comments up-to-date when the code changes!

Idealmente, código bem escrito não exige comentários. Eles são indicativos de que o seu código não consegue se explicar adequadamente, já que você terá implementado funções pequenas, que realizam funções únicas, conforme as recomendações acima.

É claro que existem trechos de código que precisam ser comentados, mas é necessário frisar que comentários geralmente tornam a vida do desenvolvedor mais complicada por não serem atualizados com frequência; assim, o código muda, mas os comentários descrevendo-o, não. Logo, é preciso pensar em comentários como um peso, não um facilitador.

As convenções a seguir descrevem o bom uso de comentários. Vale ressaltar algumas ocasiões em que eles podem de fato ser úteis:

- Explicação de motivação (e.g. por que um caso específico é diferente do caso geral?)
- Avisos de consequência (e.g. se um programa demora muito para ser executado)
- Comentários `TODO`

E algumas em que eles são **inapropriados**:

- Comentários redundantes (que repetem o que está claro no código)
- Comentários no fechamento de chaves ou parênteses (exceto para `namespaces`)
- Código comentado
	- Pode ser útil ao fazer testes locais, mas deve ser removido antes de colocar no repositório
	- Se for necessário mais tarde, basta recuperar o histórico do repositório
- Informação sobre outras partes do código
- Informação excessiva (e.g. como uma função foi implementada)



### Nomenclatura

Do Google C++ Style Guide:

> Optimize for readability using names that would be clear even to people on a different team.
Use names that describe the purpose or intent of the object. Do not worry about saving horizontal space as it is far more important to make your code immediately understandable by a new reader. Minimize the use of abbreviations that would likely be unknown to someone outside your project (especially acronyms and initialisms).

Nomes não podem de forma alguma ser ambíguos. Eles devem ser descritivos o suficiente para possibilitarem a leitura fluida do código por uma pessoa que não conhece muito sobre o sistema, não importando se para isso parecerem muito grandes.

Por exemplo, uma pessoa não deve ter que voltar à definição de uma variável `num` para descobrir que é um contador do número de dummies encontrados;  a variável deveria se chamar `number_of_dummmies_found` ou ainda possivelmente `num_dummies_found`.

Em geral, quanto maior o escopo de uma variável, maior deve ser o nome dela para descrever bem um objeto. Por exemplo, dentro da função `count_dummies()`, uma variável chamada `count` seria clara pelo seu contexto, mas não seria caso ela fosse uma variável global.

Ou seja, o nome da variável precisa ser descritiva o suficiente para ser entendida **quando em seu contexto**, e não mais. Não crie com informação que poderia ser inferida da classe ou função em que seu objeto está inserido.

Tente evitar abreviações, exceto aquelas que são absolutamente óbvias mesmo para uma pessoa que não conhece o sistema implementado.



### Inclusividade

Do Google C++ Style Guide:

> In all code, including naming and comments, use inclusive language and avoid terms that other programmers might find disrespectful or offensive (such as "master" and "slave", "blacklist" and "whitelist", or "redline"), even if the terms also have an ostensibly neutral meaning. Similarly, use gender-neutral language unless you're referring to a specific person (and using their pronouns). For example, use "they"/"them"/"their" for people of unspecified gender (even when singular), and "it"/"its" for software, computers, and other things that aren't people.

---

## Python

### Layout

#### Geral

- Indentação de 4 espaços
- Linhas devem ter até 79 caracteres
	- Pode ser estendido até 99 caracteres caso o time escolha isso
	- Textos longos sem restrições estruturais (e.g. comentários e `docstrings`) devem ter no máximo 72
- Arquivos devem ser codificados em UTF-8

#### Quebra de linhas

- Quebras de linha devem ser indentadas no mesmo nível do conteúdo original, ou usar "hanging indent" - adicionar uma indentação para distiguir argumentos de código, por exemplo

```python
# Alinhado com o delimitador
foo = long_function_name(var_one, var_two,
                         var_three, var_four)

# Adicione um nivel de indentacao para distinguir argumentos do resto
def long_function_name(
        var_one, var_two, var_three,
        var_four):
    print(var_one)
    
# "Hanging indents"
foo = long_function_name(
    var_one, var_two,
    var_three, var_four)
```

- Quebras de linhas em `if`-statements com mais de uma linha podem ou não ser indentados

- Fechamento de parênteses/chaves/colchetes em estruturas de mais de uma linha podem se alinhar com o conteúdo ou com o primeiro caractere da linha da estrutura

	```python
	# Alinhamento com o conteúdo
	my_list = [
	    1, 2, 3,
	    4, 5, 6,
	    ]
	
	# Alinhamento com o primeiro caractere
	my_list = [
	    1, 2, 3,
	    4, 5, 6,
	]
	```

- É preferível encapsular estruturas de várias linhas entre parênteses

- Linhas devem ser quebradas antes de operadores binários

	```python
	# Errado
	income = (gross_wages +
	          taxable_interest)
	
	# Correto
	income = (gross_wages
	          + taxable_interest)
	```

#### Espaço em branco

- Separe funções de alto nível e definições de classes com duas linhas em branco

- Separe métodos da mesma classe com uma linha em branco

- Linhas em branco a mais podem ser usadas, com parcimônia, em:

	- Separação de conjuntos de funções
	- Indicação de seções lógicas

- Evite:

	- Dentro de parênteses/chaves/colchetes

	- Entre uma vírgula final e o fechamento de parênteses

		```python
		# Correto
		foo = (0,) 
		```

	- Imediatamente antes de um sinal de pontuação

	- Imediatamente antes de abrir parênteses ao chamar uma função

		```python
		# Correto
		spam(1)
		```

	- Mais de dois espaços ao redor de um operador de atribuição para alinhá-lo com outros

	- Espaços no final da linha

	- Colocar espaço entre o `=` e o argumento de uma função

		```python
		# Correto
		def complex(real, imag=0.0):
		    return magic(r=real, i=imag)
		
		# Errado
		def complex(real, imag = 0.0):
		    return magic(r = real, i = imag)
		```
	
- Faça:

	- Deixe um espaço entre variáveis e operadores binários

#### `import`

- Devem estar em linhas separadas

- Mas se forem vários importados do mesmo local, podem ficar na mesma linha

	```python
	import os
	import sys
	from subprocess import Popen, PIPE
	```

- Sempre vem no topo do arquivo

- Devem ser agrupados na seguinte ordem:

	1. Bibliotecas padrão
	2. Bibliotecas de terceiros relacionadas
	3. Bibliotecas específicas à aplicação

- É preferível fazer referência absoluta a `import`s, mesmo que estejam no mesmo pacote

	- Exceto quando nomes de pacotes forem excessivamente grandes

	```python
	import mypkg.sibling
	from mypkg import sibling
	from mypkg.sibling import example
	```

- "Wildcard" `import`s (como `from mavbase.MAV import *`) devem ser evitados



### Comentários

- Devem ser frases completas em inglês

- Se fazem referência a variáveis, devem referenciar o nome da variável exatamente como aparece no código

- Comentários em blocos

	- Devem ser indentados junto com o código que referenciam
	- Devem começar com um `# `
	- Parágrafos devem ser separados por uma linha contendo somente um `#`

- Comentários em linha

	- Devem ser usados com parcimônia
	- Devem ser separados do código por pelo menos 2 espaços

	

### Nomenclatura

- É preferível manter a consistência com código "errado" a misturar estilos no mesmo arquivo
	- Uma outra possibilidade é refatorar o programa todo pra se adequar ao padrão escolhido pela equipe

#### Pacotes e Módulos

- Tudo minúsculo, com underscore entre as palavras

#### Classes

- CapWords (aka CamelCase): só as primeiras letras de cada palavra em maiúsculas

#### Tipos de variáveis personalizados

- CapWords, preferencialmente com nomes abreviados

#### Exceções

- Exceções são classes, então seguem o modelo das classes
- Usam o sufixo `Error`

#### Funções e Variáveis

- Todas minúsculas, com underscore separando palavras
- mixedCase também é permitido se o programa já usa esse estilo

#### Constantes

- Devem ser com todas as letras maiúsculas, e underscore entre as palavras



### Especificidades da Linguagem

#### Trailing Commas

- Geralmente opcionais, mas podem ser úteis se é espperado que a lista cresça

- Quando forem usadas, é recomendado colocar entre parênteses

- Não devem estar junto ao fechamento de parênteses/chaves/colchetes

	```python
	# Correto
	FILES = ('setup.cfg',)
	# Errado
	FILES = 'setup.cfg',
	
	# Correto
	FILES = [
	    'setup.cfg',
	    'tox.ini',
	    ]
	initialize(FILES,
	           error=True,
	           )
	```

#### Underscore

- Existem quatro jeitos de usar underscore em nomes de Python:

	```python
	um_no_final_  # Usado para nao conflitar com nomes reservados 
	_um_no_inicio  # Indica que a variavel e de uso interno, mas ela ainda pode ser acessada por outros arquivos facilmente 
	__dois_no_inicio  # Quando for atributo de classe, invoca "name mangling" (ver Especificades da Linguagem)
	__dois_no_inicio_e_fim__  # "Nomes magicos; NAO invente novos, so use os ja existentes"
	```

#### Name mangling

- Python "funde" o nome da classe com o da variável para dificultar o acesso indevido a ela
- Por exemplo, se a classe `Foo` tem um atributo `__a`, ele não pode ser acessado com `Foo.__a`, mas sim com `Foo._Foo__a`
- Mangling pode afetar debug de programas negativamente

#### `docstrings`

- `docstrings` são uma forma padronizada de documentação de funções e classes em Python
	- Para um módulo, devem estar no `__init__.py` e devem listar as classes e funções do módulo em resumos de uma linha cada.
	- Para uma classe, devem estar no método `__init__`, e devem listar seus métodos públicos e interfaces para a criação de subclasses (caso existam)
	- Para uma função, deve resumir seus argumentos (argumentos opcionais devem ser indicados), comportamento, valores de saída, exceções levantadas, restrições ao ser chamada
- Devem ser posicionadas no inicio do objeto para se tornarem o atributo `__doc__` desse objeto
- Sempre use `"""aspas triplas"""` ao fazer uma `docstring`

```python
def function(a, b):
    """Utilize essa funcao para fazer X coisa."""
```

- `docstrings` com mais de uma linha devem ter um resumo de uma linha, seguido de um espaço em branco e de uma descrição mais completa dos elementos e comportamento do objeto

```python
def complex_function(a=0.0, b=0.0):
    """Essa funcao faz X coisas.

    Keyword arguments:
    a -- pequena descrição sobre a (default 0.0)
    b -- pequena descrição sobre b (default 0.0)
    """
```


#### Misc

- Sempre compare algo a `None` usando `is` e `is not`

- Não é recomendado definir funções com `lambda` arbitrariamente para ajudar em debugging

- Ao usar `try-except`, sempre defina o tipo de erro de que o bloco deve tratar

-  Seja consistente com `return`: ou todos os `return`s devolvem expressões, ou nenhum devolve

	```python
	# Correto
	def foo(x):
	    if x >= 0:
	        return math.sqrt(x)
	    else:
	        return None
	    
	# Errado
	def foo(x):
	    if x >= 0:
	        return math.sqrt(x)
	```

- Para sequências (`strings`, `lists`, `tuples`), use o fato de que sequências vazias são `False`

	```python
	# Correto
	if not seq
	
	# Errado
	if len(seq)
	```

	

---

## C++

### Layout

#### Geral

- Linhas devem ter no máximo 80 caracteres, exceto
    - Em conteúdo que não deve ser separado (e.g. URLs)
    - `#include`
- Arquivos devem ser codificados em UTF-8
- Indentação de 2 espaços
- Valores para `return` → só use parênteses caso houver quebra de linha
- `namespace` → não se deve indentar

#### Funções

- Definição de funções
    - Tente definir em uma única linha
        - Se lista de argumentos passar de 80 caracteres, quebre a linha desta forma:

        ```c++
        ReturnType ClassName::ReallyLongFunctionName(Type par_name1, Type par_name2,
                                                     Type par_name3) {
          DoSomething();
          ...
        }
        ```

        - Se nem mesmo o primeiro argumento couber na definição, faça:

        ```c++
        ReturnType LongClassName::ReallyReallyReallyLongFunctionName(
            Type par_name1,  // 2 indentações
            Type par_name2,
            Type par_name3) {
          DoSomething();  // 1 indentação
          ...
        }
        ```

    - Não há espaço entre parênteses e o nome da função
    - A abertura de chaves é na mesma linha da declaração da função
    - O fechamento de chaves é na mesma linha da abertura ou em uma linha própria
    
- Chamar funções
    - Seguem as mesmas regras de quebra de linha que definições de funções
    - Caso um argumento seja uma expressão muito complexa, considere dar um nome a ele, ou adicioná-lo sozinho numa linha

    ```c++
    // Dando um nome ao argumento
    int my_heuristic = scores[x] * y + bases[x];
    bool result = DoSomething(my_heuristic, x, y, z);

    // Separando o argumento em uma linha a parte
    bool result = DoSomething(scores[x] * y + bases[x],  // Score heuristic.
                              x, y, z);
    ```

    - Essas regras podem ser quebradas se o posicionamento espacial dos argumentos auxiliar na legibilidade (e.g quando trabalhando com matrizes)

#### Condicionais

- Coloque um espaço entre o `if` e os parênteses
- Chaves devem ser abertas na mesma linha da declaração, e fechadas em uma continuação (e.g. `if (...) { } else {`) ou em uma linha separada
- Caso a condicional seja um único `if`, pode-se omitir as chaves

#### Loops

- Chaves são opcionais caso o loop tenha só uma declaração
- Loops vazios devem abrir e fechar chaves vazias ou ter uma declaração `continue` dentro deles para mostrar que estão vazios

```c++
    while (condition) {
      // Repete o teste ate que retorne falso.
    }
    for (int i = 0; i < kSomeNumber; ++i) {}  // Bom
    while (condition) continue;  // Bom - ainda indica que nao ha logica

    while (condition);  // Ruim - parece parte de um do/while
```

#### Ponteiros

- Referências a ponteiros devem seguir o padrão:

```c++
x = *p;
p = &x;
x = r.y;
x = r->y;
```

- Quando juntos de definições de tipo, pode haver espaço antes, depois ou ele pode ser emitido; deve-se ser consistente dentro do mesmo arquivo

```c++
// Espaco antes
char *c;
const std::string &str;
int *GetPointer();
std::vector<char *>

// Espaco depois
char* c;
const std::string& str;
int* GetPointer();

// Espaco omitido
std::vector<char*>
```

#### Classes

- Seções de `public`, `protected` e `private` são indentadas com relação à definição da classe e devem ser precedidas por uma linha em branco (exceto a primeira instância)
- Construtores devem ter lista de parâmetros seguindo as regras de quebra de linha de funções descritas acima

Exemplo:

```c++
class MyClass : public OtherClass {
 public:      
  MyClass();
  explicit MyClass(int var);
  ~MyClass() {}

  void SomeFunction();
  void SomeFunctionThatDoesNothing() {
  }

  void set_some_var(int var) { some_var_ = var; }
  int some_var() const { return some_var_; }

 private:
  bool SomeInternalFunction();

  int some_var_;
  int some_other_var_;
};

// Quando tudo cabe em uma linha
MyClass::MyClass(int var) : some_var_(var) {
  DoSomething();
}

// Se a lista de atributos nao estiver toda na mesma linha,
// voce deve quebrar antes dos dois-pontos e indentar 4 espacos:
MyClass::MyClass(int var)
    : some_var_(var), some_other_var_(var + 1) {
  DoSomething();
}

// Quando a lista tem muitas linhas, coloque cada atributo
// em uma linha e os alinhe:
MyClass::MyClass(int var)
    : some_var_(var),             // indentacao de 4 espacos
      some_other_var_(var + 1) {  // alinhado
  DoSomething();
}
```

#### Espaço em branco

- Horizontal → depende da localização, mas NUNCA no final de uma linha
    - Seja consistente: se houver de um lado de parênteses, coloque no outro também
    - Operadores matemáticos unários tem espaço para a variável
    - Operadores binários devem ter espaço, mas é permitido remover de fatores
    - Parênteses não devem ter espaço interno
- Vertical → minimize sempre que possível
    - Não é uma regra, mas uma recomendação
    
    - Linhas em branco são como quebras de parágrafo - elas deve separar blocos coesos de código
    
    	

### Comentários

#### Classes

- Todas as classes ou structs não óbvias devem ter comentários que descrevem o que elas fazem e como usá-las
- Com separação suficiente entre `.cc` e `.h`, comentários de implementação devem ir no `.cc` e de uso, no `.h`

#### Funções

- Devem ter comentários começando com verbos cujo sujeito implícito é "esta função"
- Não descrevem como ela faz o que faz
- Devem descrever como a função interage com o mundo externo, descrevendo por exemplo:
    - Entradas e saídas
    - Alocação de memória (só se o usuário precisar desalocar)
    - Se algum dos argumentos pode ser `NULL` ou não
- Comentários dentro da função devem ser usados com parcimônia para descrever peculiaridades de implementação (e.g. por que o primeiro caso é diferente do caso geral em um loop)

#### Variáveis

- Atributos de classe
    - Só se o tipo e nome da variável não a descreverem o suficiente
    - Descreva valores padrão, como no exemplo:

    ```c++
    private:
     // Usado para conferir acesso a tabela. -1 significa
     // que não sabemos ainda quantas entradas a tabela tem.
     int num_total_entries_;
    ```

- Variáveis globais
    - Todas precisam de um comentário explicando o que são, como são usadas e, caso não esteja claro, porque precisam ser globais

    ```c++
    // O numero de vezes que passamos por essse teste.
    const int kNumTestCases = 6;
    ```

#### Implementação

- Blocos de código complicados devem ter comentários explicatórios antes do código em si
- Linhas confusas dever ter comentários no final da linha, separados por um `Tab` do código

- Argumentos de funções
    - Só quando não forem óbvios pelos nomes ou pela descrição da função
    - Se o argumento for uma constante, deixe isso explícito no nome dela
    - Caso a função receba muitos argumentos, considere criar uma struct ou classe para contê-los. Por exemplo:

    ```c++
    ProductOptions options;
    options.set_precision_decimals(7);
    options.set_use_cache(ProductOptions::kDontUseCache);
    const DecimalNumber product =
        CalculateProduct(values, options, /*completion_callback=*/nullptr);
    ```

    - Em último caso, explique os argumentos com comentários
    



### Nomenclatura

#### Arquivos

- Letras todas minúsculas, com `_` (preferencialmente) ou `-` separando palavras
- Arquivos em C++ deveriam terminar com `.cc` e headers com `.h`

```bash
my_useful_class.cc # Preferível
my-useful-class.cc
```

#### Classes e Tipos de variáveis personalizados

- Todas as palavras começam com letra maiúscula, sem separação entre elas

```c++
class UrlTable { ... }
struct UrlTableProperties { ... }
```

#### Variáveis

- Geral: Todas minúsculas, com `_` entre palavras
- Atributos de classe: mesmo que Geral, mas com `_` a mais no final

```c++
// Nome de uma variável qualquer
std::string table_name;

class TableInfo {
  ...
 private:
  std::string table_name_;  // OK - underscore no final.
  static Pool<TableInfo>* pool_;  // OK.
};
```

#### Constantes

- Começam com `k`; palavras subsequentes começam com letra maiúscula

```c++
const int kDaysInAWeek = 7;
```

#### Funções

- Todas as palavras começam com maiúscula
- Se for função de acesso ou modificador (i.e. getter ou setter), é nomeado como uma variável

```c++
OpenFile()

// Getter e setter
int count()
void set_count(int count)
```

#### `namespaces`

- Tudo minúsculo, com `_` separando palavras
- Deve ser o nome do projeto contido no `namespace`

#### Macros (`#define`)

- Tudo maiúsculo, com `_` separando




### Especificidades da Linguagem

#### Headers (arquivos `.h`)

- Todo código que não seja extremamente curto ou um teste unitário deve ter um `.h`
- Todo `.h` deve ter um "header guard" para impedir inclusão múltipla:

```c++
// No arquivo foo/src/bar/baz.h
#ifndef FOO_BAR_BAZ_H_
#define FOO_BAR_BAZ_H_

...

#endif  // FOO_BAR_BAZ_H_
```

- Não declare funções antes de defini-las - use o `.h`
- Não declare funções do tipo `static` em um arquivo `.h`

- Ordem de inclusão do `#include`
    1. Headers relacionados
    2. Headers de C
    3. Headers de C++
    4. Headers de bibliotecas padrão
    5. Headers de outras bibliotecas
    6. Headers definidos no seu projeto
    - Cada grupo deve ser separado por uma linha em branco

#### `namespaces`

> Namespaces subdivide the global scope into distinct, named scopes, and so are useful for preventing name collisions in the global scope.

- O final de `namespace`s grandes deve ser comentado
- Não declare nada dentro do `namespace std`
- NÃO use a diretiva `using` (e.g. `using namespace foo`), porque ela polui o `namespace`

#### Misc

- Dê valor a variáveis no momento em que elas forem declaradas
- Prefira não declarar variáveis globais estáticas - elas podem causar bugs difíceis de encontrar depois
- `structs` só devem ser usados para armazenamento de objetos passivos, senão devem ser usadas classes
- Em geral, é preferível compor classes (ter um objeto de uma classe como atributo de outra) a usar `inheritance`
	-  Só faça uma subclasse de uma superclasse se o objeto da subclasse for "um tipo de" objeto da superclasse (e.g. Skyrats é "um tipo de" Grupo de Extensão)
-  Para representar o valor `NULL`, use `nullptr` para ponteiros e `'\0'` para char

---

## ROS

### Nomenclatura

#### Pacotes, Tópicos e Serviços

- Todas as letras minúsculas, com underscore entre palavras

#### Arquivos

- Todas as letras minúsculas, com underscore entre palavras

#### 

### Misc

#### Saída do terminal

- Evite print e similares; prefira logs do ROS (e.g. `rospy.loginfo()`) e outras funções do pacote [`rosconsole`](http://wiki.ros.org/rosconsole)

#### Código não mais mantido

- Em headers (`.h`), coloque um comentário
- Para funções, use `ROS_DEPRECATED`
- Para classes, use `ROS_DEPRECATED` no construtor da classe



---

## Referências

[Google C++ Style Guide](https://google.github.io/styleguide/cppguide.html#Naming)

[PEP 8 -- Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/)

[PEP 257 -- Docstring Conventions](https://www.python.org/dev/peps/pep-0257/)

[ROS Style Guide](http://wiki.ros.org/StyleGuide)