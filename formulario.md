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

## Firmware

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


## ROS

