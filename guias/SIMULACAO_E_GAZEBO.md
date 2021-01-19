# Gazebo/Simulation Guide

# Gazebo

É um simulador que usamos aqui na Skyrats para simular as missões que vamos realizar com o drone na vida real.

## Básicos

Para instalar ele, as instruções no seguinte guia já fazem isso: [https://github.com/SkyRats/knowledge_base/blob/main/guias/Instalacao.md](https://github.com/SkyRats/knowledge_base/blob/main/guias/Instalacao.md); se precisar de mais informações sobre sua instalação: [http://gazebosim.org/tutorials?tut=install_ubuntu](http://gazebosim.org/tutorials?tut=install_ubuntu).

O comando abaixo abre o gazebo

`gazebo <opções de inicialização>`

Mas também da para abrí-lo com mais condições. Pode abrir diretamente um mundo usando o mesmo comando colocando o caminho para o `.world`, ou colocando o nome do arquivo estando na pasta world. Por exemplo: `gazebo exemplo.world` Mais uma explicação ou informaçes de uso sobre o comando ou codigo

Também pode iniciar o gazebo fazendo a simulação da PX4. Estando na raiz do Firmware dê o comando:

`make px4_sitl gazebo`

E também pode inciar o Gazebo junto com o ROS usando o roslaunch, e é bom por que da para abrir rosnodes, packages e outras funções do ros junto.

`roslaunch gazebo_ros <exemplo.launch>`

No roslaunch pode colocar vários argumentos de incialização, [clique aqui para ver](http://gazebosim.org/tutorials/?tut=ros_roslaunch)

[Tutorial de inicialização do gazeb](http://gazebosim.org/tutorials?tut=quick_start)o

## Os arquivos

### Models

São os modelos que aparecem no mundo, por exemplo: caixas, paredes, cenários, dummies e até o próprio drone.

Dentro do gazebo, nós temos dois jeitos para criar models e um para edição, sendo eles:

Na barra cima do painel de simulação:

![imgs/Untitled.png](imgs/Untitled.png)

Esses 3 botões podem criar um cubo, uma bola e um cilindro, todos com propriedades de inércia e colisão.

Indo em Edit→Building Editor

![imgs/Untitled%201.png](imgs/Untitled%201.png)

Nessa parte você criar casas e outras construções urbanas ou relacionadas, pois facilita bastante.

Para usar:

Para fazer as paredes, janelas, portas e escadas, você primeiramente seleciona o tipo, cor e textura no painel da esquerda, e "desenha" em vista superior na malha branca superior a construção a ser feita. Pode também ver que tudo é dividido em "levels", esses são os andares das construções.

Model Editor:

Tem dois caminhos, o primeiro, a partir de nenhum objeto é: Edit→Model editor, o outro você pode modificar um model existente, selecione ele, no display de simulação ou no painel esquerdo, depois clique com botão direito → Edit Model.

Ambos vão abrir o painel do model editor.

Nesse painel, seu objeto selecionado a ser editado fica em laranja, o resto branco(ambos transparentes).

No painel a esquerda, na aba insert, você pode fazer algumas coisas, como colocar mais objetos, sendo as "simple shapes", ou "custom shapes"(para outros models feitos fora do gazebo, vou explicar depois), na aba model, você pode deixar o objeto static, que deixa ele fixado no mundo(isso não afeta a caixa de colisão, ele apenas não consegue se mover), pode adicionar plugins, e visualizar links e joints, e dar auto-disable.

### Joints:

![imgs/Untitled%202.png](imgs/Untitled%202.png)

No model editor, na barra superior, assim como na imagem acima, você pode criar "joints", elas são ligações entre models, ou entre links de algum model, (links são "models de models", ou melhor, partes de um model que teem representação própria, no drone por exemplo, tem o link do frame, dos rotores e pás, do LiDar, etc..). Essas ligações podem ser de vários tipos, cada um com sua característica, por exemplo, a joint ball é uma ligação com rotação livre em 6 eixos (x, y, z, roll, pitch, yaw), tem a revolute joint, que permite rotação em um eixo, o qual você seleciona o eixo no qual vai ser o livre, entre outros...

### Como funciona o arquivo model?

Ele, basicamente precisa de dois arquivos, um sendo `.config`, e outro `.sdf`ou `.urdf`. Todos funcionando na linguagem XML.

O .config tem esse estilo:

[https://github.com/SkyRats/simulation/blob/master/models/drone_indoor/model.config](https://github.com/SkyRats/simulation/blob/master/models/drone_indoor/model.config)

Onde é declarado o nome do model, versão do model, a versão do sdf(1.6), configurações do autor e descrições do objeto.

O .sdf tem esse estilo:

[https://github.com/SkyRats/simulation/blob/master/models/drone_indoor/model.sdf](https://github.com/SkyRats/simulation/blob/master/models/drone_indoor/model.sdf)

Todas as coisas do objeto estão nesse arquivo, por exemplo, a mesh, plugins, orientações, add de links, add de outros models, joints, materials, e todo o resto possível.

Como é muito grande as coisas, temos muitos exemplos no nosso repositório simulation e outras infos sobre o .sdf e seus atributos aqui: [http://sdformat.org/spec?ver=1.7&elem=model](http://sdformat.org/spec?ver=1.7&elem=model)

### Worlds

Eles são os mundos no gazebo, ou seja, são meio que uma junção de models com suas posições e configurações.

Eles podem ser configurados direto no gazebo, adicionando coisas no painel de simulação, sendo pelo painel esquerdo, adicionando modelos na parte "insert", e na aba world visualizar as configurações existentes do mundo, nas aba de cima, pode mudar a configuração de posição, rotação e escala manualmente dos models, adicionar fontes de luz e mexer a camera.

Pelo arquivo .world, da para fazer e adicionar todas as configurações do mundo, adicionando models, mudar posição, rotação, escala dos mesmos, adicionar plugins de mundo e configurar a GUI, sendo essa infinitamente customizável ( Vou explicar mais para frente ), como por exemplo, adicionar interfaces com botões, labels, etc, 100% customizáveis, que podem fazer qualquer coisa dentro do gazebo, customizar configurações de iluminação, câmera e céu, entre outros.

Temos vários exemplos de .worlds no nosso repositório simulation, além disso, todas as configurações para o .world tem aqui: [http://sdformat.org/spec?ver=1.7&elem=world](http://sdformat.org/spec?ver=1.7&elem=world)