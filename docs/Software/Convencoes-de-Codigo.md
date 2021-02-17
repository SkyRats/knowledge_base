# Convenções de Código

---

## Princípios gerais

### Layout

### Comentários

Do Google C++ Style Guide:

> Comments are absolutely vital to keeping our code readable. The following rules describe what you should comment and where. But remember: while comments are very important, the best code is self-documenting.

### Nomenclatura

Do Google C++ Style Guide:

> Optimize for readability using names that would be clear even to people on a different team.
Use names that describe the purpose or intent of the object. Do not worry about saving horizontal space as it is far more important to make your code immediately understandable by a new reader. Minimize the use of abbreviations that would likely be unknown to someone outside your project (especially acronyms and initialisms).

### Inclusividade

Do Google C++ Style Guide:

> In all code, including naming and comments, use inclusive language and avoid terms that other programmers might find disrespectful or offensive (such as "master" and "slave", "blacklist" and "whitelist", or "redline"), even if the terms also have an ostensibly neutral meaning. Similarly, use gender-neutral language unless you're referring to a specific person (and using their pronouns). For example, use "they"/"them"/"their" for people of unspecified gender (even when singular), and "it"/"its" for software, computers, and other things that aren't people.

---

## Python

### Layout

#### Indentação

### Comentários

#### Docstrings

- Docstring é uma string que deve ser posicionada no inicio de um modulo, classe, metodo ou função. Essa string se torna o atributo `__doc__` desse objeto.
- Sempre use `"""aspas triplas"""` ao fazer uma docstring, como no exemplo:
```python
def funcao(a, b):
    """Utilize essa funcao para fazer X coisa."""
    ...
```
- Se a função for complexa e necessite de uma docstring de mais de uma linha, faça como o exemplo:
```python
def funcaoComplexa(a=0.0, b=0.0):
    """Essa funcao faz X coisas.

    Keyword arguments:
    a -- pequena descrição sobre a (default 0.0)
    b -- pequena descrição sobre b (default 0.0)
    """
    ...
```

### Nomenclatura

---

## C++

### Layout

#### Geral

- Linhas devem ter no máximo 80 caracteres, exceto
    - Em conteúdo que não deve ser separado (e.g. URLs)
    - `#include`
- Identação de 2 espaços
- Valores para `return` → só use parênteses caso houver quebra de linha
- `namespace` → não se deve identar

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
            Type par_name1,  // 4 space indent
            Type par_name2,
            Type par_name3) {
          DoSomething();  // 2 space indent
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
- Chaves devem ser abertas na mesma linha da declaração, e fechadas em uma continuação (e.g. `if (...){ } else {`) ou em uma linha separada
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

- Seções de `public`, `protected` e `private` são identadas com relação à definição da classe e devem ser precedidas por uma linha em branco (exceto a primeira instância)
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
// voce deve quebrar antes dos dois-pontos e identar 4 espacos:
MyClass::MyClass(int var)
    : some_var_(var), some_other_var_(var + 1) {
  DoSomething();
}

// Quando a lista tem muitas linhas, coloque cada atributo
// em uma linha e os alinhe:
MyClass::MyClass(int var)
    : some_var_(var),             // identacao de 4 espacos
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
    
    - Linhas em branco são como quebras de parágrafo - elas separam blocos coesos de código
    
    	

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
- Comentários dentro da função devem ser usados com parcimônia para descrever peculiaridades de implementação (e.g. por que o primeiro caso é diference do caso geral em um loop)

#### Variáveis

- Atributos de classe
    - Só se o tipo e nome da variável não a descreverem o suficiente
    - Descreva valores padrão, como no exemplo:

    ```cpp
    private:
     // Usado para conferir acesso a tabela. **-1 significa
     // que não sabemos ainda quantas entradas a tabela tem.**
     int num_total_entries_;
    ```

- Variáveis globais
    - Todas precisam de um comentário explicando o que são, como são usadas e, caso não esteja claro, porque precisam ser globais

    ```cpp
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

    ```cpp
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

- Classes e Tipos de variáveis personalizados
    - Todas as palavras começam com letra maiúscula, sem separação entre elas

    ```cpp
    class UrlTable { ... }
    struct UrlTableProperties { ... }
    ```

#### Variáveis

- Geral: Todas minúsculas, com `_` entre palavras
- Atributos de classe: mesmo que Geral, mas com `_` a mais no final

```cpp
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

```cpp
const int kDaysInAWeek = 7;
```

#### Funções

- Todas as palavras começam com maiúscula
- Se for função de acesso ou modificador (i.e. getter ou setter), é nomeado como uma variável

```cpp
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

```cpp
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

### Layout

### Comentários

### Nomenclatura

---

## Referências

[Google C++ Style Guide](https://google.github.io/styleguide/cppguide.html#Naming)

[PEP 8 -- Style Guide for Python Code](https://www.python.org/dev/peps/pep-0008/)

[PEP 257 -- Docstring Conventions](https://www.python.org/dev/peps/pep-0257/)

[ROS Style Guide](http://wiki.ros.org/StyleGuide)