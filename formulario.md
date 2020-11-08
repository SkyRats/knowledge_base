# Fórmulário


<!-- Template -->
<!-- 
# Titulo principal
Explicar aqui bem resumido o que é esse "titulo"
se tiver algum comando bem básico
## Subtitulo

### Topico
Escrever aqui uma explicação ou um comentário bem resumido sobre o comando/topico
```Linguagem do comando/código
comando [args...] comando comando
codigo codigo codigo codigo
codigo codigo codigo codigo
codigo codigo codigo codigo
```
Mais uma explicação ou informaçes de uso sobre o comando ou codigo

[Explicações mais avançadas sobre o <Colocar nome do TOPICO>](https://github.com/SkyRats/knowledge_base/blob/main/guias/README.md)
-->
  
## Linux

### Básico

* Mostrar o caminho atual
```bash
pwd
```

* Listar os arquivos no diretório atual
```bash
ls
```

* Mudar de diretório
```bash
cd <caminho do diretório>
```

* Mostar o conteúdo de um arquivo
```bash
cat <arquivo>
```

* Abrir um arquivo em um editor de texto
```bash
nano <nome do arquivo>
```

### Manipulando arquivos e diretórios

* Criar arquivo em branco
```bash
touch <arquivo>
```

* Copiar arquivos
```bash
cp <arquivo opiado> <diretório de destino>
```

* Mover arquivos
```bash
mv <arquivo> <destino>
```

* Renomear arquivos
```bash
mv <nome atual do arquivo> <novo nome>
```

* Deletar arquivos
```bash
rm <arquivo>
```

* Criar diretório
```bash
mkdir <nome do diretório>
```

* Deletar diretórios vazios
```bash
rmdir <diretório>
```

* Deletar diretórios com arquivos
```bash
rm -r <diretório>
```

* Modificar as permissões de um arquivo

Todo arquivo pode possuir 8 tipos de permissões diferentes:
0 - Sem permissão
1 - Permissão para executar
2 - Permissão para escrever
3 - Permissão para escrever e executar
4 - Permissão para ler
5 - Permissão para ler e executar
6 - Permissão para ler e escrever
7 - Permissão para ler, escrever e executar

Essa permissão pode ser dada para interagir com 3 tipos de usuários:
O dono - representa o usuário dono do arquivo no computador.
Grupos - Grupos de mais de um usuário.
Todos - Todos os usuários naquele computador.

Para alterar as permissões de um arquivo, é necessário utilizar o comando chmod seguido de um número de 3 algarimso, onde o primeiro representa as permissões para o usuário dono do arquivo, o segundo, do grupo de usuários e o terceiro, de todos os usuários e, por último, o nome do arquivo que queremos alterar as permissões. Por exemplo, se quisermos dar permissão para o arquivo 'EP 1' ler, escrever e executar arquivos do usuário dono do arquivo, ler e escrever arquivos do grupo de usuários e de todos os usuários, nós devemos fazer o seguinte:
```bash
chmod 766 'EP 1'
```

### Manipulando o sistema

* Executar como Super Usuário
```bash
sudo <comando a ser executado>
```

* Procurar o caminho para um arquivo
```bash
locate <nome do arquivo>
```

* Exibir os processos em execução
```bash
ps
```

* Parar um processo
```bash
kill <ID do processo>
```

### Manipulando pacotes (Apenas para distribuições baseadas no Debian)

* Instalando pacotes
```bash
apt-get install <nome do pacote.
```

* Removendo pacotes
```bash
apt-get remove <nome do pacote>
```

* Removendo pacote e seus arquivos de configuração
```bash
apt-get purge <nome do pacote>
```

* Atualizando pacotes
```bash
apt-get -u upgrade
```

* Removendo pacotes que não serão mais utilizados
```bash
apt-get clean
apt-get autoclean
```

* Adicionando novos repositórios de pacotes
Utilize o comando
```bash
sudo nano /etc/apt/sources.list
```
Com o editor de texto Nano escreva, no final do arquivo, o nome do repositório que deseja adicionar.

* Atualizando o índice de respositórios
```bash
apt-get update
```

### Comandos úteis (e legais)

* Comparar a diferença entre dois códigos linha por linha
```bash
diff <código 1> <código 2>
```

* Procurar expressões dentro de arquivos
```bash
grep <expressão> <arquivo>
```

* Mostrar o manual de um comando
```bash
man <comando>
```

* YES
```bash
yes
```

---

## Firmware

---

## Simulação/Gazebo


## Comandos básicos

### Iniciar gazebo
O comando abaixo abre o gazebo
```bash
gazebo <opções de inicialização> 
```
Mas também da para abrí-lo com mais condições.
Pode abrir diretamente um mundo usando o mesmo comando colocando o caminho para o `.world`, ou colocando o nome do arquivo estando na pasta world.
Por exemplo: `gazebo exemplo.world` 
Mais uma explicação ou informaçes de uso sobre o comando ou codigo

Também pode iniciar o gazebo fazendo a simulação da PX4.
Estando na raiz do Firmware dê o comando:
```bash
make px4_sitl gazebo
```

E também pode inciar o Gazebo junto com o ROS usando o roslaunch, e é bom por que da para abrir rosnodes, packages e outras funções do ros junto.
```bash
roslaunch gazebo_ros <exemplo.launch>
```
No roslaunch pode colocar vários argumentos de incialização, [clique aqui para ver](http://gazebosim.org/tutorials/?tut=ros_roslaunch)

[Tutorial de inicialização do gazebo](http://gazebosim.org/tutorials?tut=quick_start)

---

## ROS

### Terminal

Esses são os mais comuns. Se você digitar só o início do comando (tipo `rostopic`) ele deve te dar a lista de todos. Colocar `-h` no final pede ajuda sobre a sintaxe.

**Topics**

```bash
# Lista todos os tópicos ativos
rostopic list

# Informações sobre um tópico
rostopic info [tópico]

# Vê o que tá sendo publicado no tópico
rostopic echo [tópico]

# Vê a frequência com que estão publicando no tópico
rostopic hz [tópico]

# Publica no tópico
rostopic pub [tópico] [tipo de mensagem] [args...]
```

**Messages**

```bash
# Lista todas os tipos de mensagem (são muitos kkk)
rosmsg list

# Informações sobre um tipo de mensagem
rosmsg show [mensagem]
```

**Services**

```bash
# Lista todos os serviços
rosservice list

# Informações sobre um serviço
rosservice info [serviço]

# Chama um serviço
rosservice call [serviço] [args...]
```

**Nodes**
```bash
# Lista todos os nodes
rosnode list

# Informações sobre um node
rosnode info [node]
```

**Params**

```bash
# Lista todos os parâmetros
rosparam list

# Lê um parâmetro
rosparam get [param]

# Escreve em um parâmetro
rosparam set [param] [valor]
```

**Execução**

```bash
# Inicia o ROS
roscore

# Executa um node
rosrun [package] [node]

# Executa um launchfile (não requer roscore)
roslaunch [package] [arquivo .launch] [argumento:=valor ...]
```

**ROS Bags**

```bash
# Grava os tópicos 1, 2 e 3
rosbag record [topico1] [topico2] [topico3] e 3

# Grava todos os tópicos
rosbag record -a

# Executa um rosbag
rosbag play [nome_da_rosbag].bag
```

**Outros**

```bash
# Acha um package e dá cd pra ele
roscd [package]

# Grafo dos tópicos
rqt_graph

# RViz (visualização de mensagens)
rviz
```

**Catkin**

```bash
# Cria o workspace (deve ser executado DENTRO DA PASTA SRC DO WORKSPACE)
catkin_init_workspace

# Compila o workspace
catkin build

# Limpa o workspace (não apaga os packages)
catkin clean

# Deinicializa o workspace
catkin clean --deinit

# Cria um package (execute dentro da src)
catkin_create_pkg [nome no package] [dependencias...]
```

### Python

Os comandos não estão em ordem pra serem executados em um programa, apenas listados.

```python
# Essa linha precisa ser a primeira de todo código
#!/usr/bin/env python

# Tudo que vc faz passa por aqui, precisa importar
import rospy

# Declara que o programa é um node (NECESSÁRIO)
rospy.init_node("nome_do_node")

# Cria um Publisher
pub = rospy.Publisher("nome_do_topico", TipoDeMsg, queue_size=10)

# Publica uma mensagem
pub.publish(ObjetoMensagem)

# Cria um Subscriber
rospy.Subscriber("nome_do_topico", TipoDeMsg, funcao_de_callback)

# Deixa o programa executando (sem fazer nada)
rospy.spin()

# Cria um Rate
rate = rospy.Rate(frequencia_Hz)

# Espera completar o ciclo do rate
rate.sleep()

# Verifica se o ROS fechou (geralmente usado como condição em um while)
rospy.is_shutdown()
```
