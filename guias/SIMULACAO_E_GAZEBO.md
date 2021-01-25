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

## Adicionar Meshs de Outros Programas

### Quais os arquivos?

No gazebo, p/ usar meshs externas, os principais tipos de arquivos suportados pelo sdf arquivos .dae, .obj, .stl. Com observação de que o .obj e o .stl não suporta materiais/texturas, o .dae é melhor não ser usado para transportar texturas pois ele dá problemas com sombras fixas nesse transporte de arquivos; em relação a desempenho/qualidade, o .dae é o mais "leve", enquanto o .stl é mais "pesado", porém ambos são bem otimizados; como comparação o .stl é superior na maioria dos casos.

Em relação as texturas, os tipos de arquivos citado acima não suportam/não suportam bem. O recomendado é usar scripts de materiais. O seguinte link explica muito bem como fazer: [http://gazebosim.org/tutorials?tut=color_model](http://gazebosim.org/tutorials?tut=color_model)

### Como adicionar a mesh?

Primeiro cria uma pasta para o model, exemplo: `mkdir model; cd model` , depois crie os arquivos de config, sdf, e outra pasta para guardar a mesh: `mkdir meshes; touch model.config model.sdf` 

Nisso, você coloca a mesh dentro da pasta, configura seus arquivos .sdf e .config. P/ adicionar a mesh no .sdf, só usar um "include" dentro da parte da configuração do link, como exemplo:

```xml
<geometry>
       <mesh>
            <uri>model://model/meshes/mesh.stl</uri>
      </mesh>
</geometry>
```

Lembre-se que deve-se colocar o link para a mesh na colision box e no visual.

# Programação no Gazebo e Plugins

Tudo que vimos até agora é uma pequena parte do que da para fazer com o gazebo, com plugins, ele fica 100% configurável e ajustável p/ qualquer simulação.

Por ser infinitamente longo, vou ensinar o jeito de como buscar e começar a fazer alguma programação/plugin em cima do gazebo e explicar alguns códigos.

### Como funciona?

Os plugins do gazebo são em C++ OO e se dividem em 3 tipos principais, os de model, de world ou de GUI.

Os de model são, como o nome já diz, inicializados em models, por exemplo, dentro do .sdf:

```xml
				<include>
            <plugin name = 'wind_gazebo' filename = 'libgazebo_wind_plugin.so'>
                <robotNamespace/>
                <linkName>base_link</linkName>
                <xyzOffset>0 0 0</xyzOffset>
                <windForceMean>10</windForceMean>
                <windForceMax>50</windForceMax>
                <windForceVariance>0</windForceVariance>
                <windDirectionMean>0 1 0</windDirectionMean>
                <windDirectionVariance>0</windDirectionVariance>
            </plugin>
            <uri>model://model</uri>
        </include>
```

Esse é um exemplo de como adicionar um plugin com parâmetros dentro do sdf, no caso o plugin do vento.

Além disso, os plugins de model possuem duas formas de rodar, uma única no Load do model, e outra no OnUpdate(Como se fosse um while(1)... obs: não façam while(1) pfv).

Como exemplo temos o método load do plugin "GetDropZonePositions"

```cpp
public: void Load(physics::ModelPtr _parent, sdf::ElementPtr _sdf)
        {
            ignition::math::Pose3d dz_clean_pose = _parent->WorldPose();
            ignition::math::Vector3<double> dzc_p = dz_clean_pose.Pos();
            double CP_V[3] = {dzc_p.X(), dzc_p.Y(), dzc_p.Z() };
            gzmsg << "Dropzone pose:"<< "\n\tX = " << CP_V[0] << "\n\tY = " << CP_V[1] << "\n\tZ = " << CP_V[2] << std::endl;
        }
```

essa função load recebe dois atributos, no caso, o _parent que é o próprio model dentro do mundo, e o _sdf que é o sdf do model que foi inserido no mundo. No caso, a função dessa função .-. é de dar no início do model a posição dele no mapa, pois ele foi inserido de forma aleatória usando o modo population do .world.

Primeiro, ele cria um objeto de Pose3d, que representa a posição do objeto no mundo, e atribui a ele a posição do mundo usando o método WorldPose() do model _parent, depois disso, ele cria um vector3, que é um objeto com informações sobre posição em x,y,z e nele atribui o vector3d de dentro do pose 3d usando o método Pos(), e nisso ele coloca um vetor de 3 posições cada uma das posições e depois printa elas com gzmsg, p aparecer destacado no terminal como mensagem do gazebo.

# A Corda

## Funcionamento

O pacote criado pela Skyrats possui um script capaz de criar um model que simula uma corda no Gazebo. A ideia principal é utiliza-la para missões que envolvam o carregamento de objetos, como a Outdoor e Swarm.

Como o Gazebo só é capaz de simular corpos rígidos, que não é o caso de uma corda, algumas adaptações precisaram ser feitas. A corda foi criada por meio da união de vários links, no formato de cilindro, empilhados um acima do outro. Para uni-los, foi utilizado um joint do tipo ball, que permite rotação em todos os eixos. Assim, a corda é formada por um conjunto de corpos rígidos unidos para dar a impressão de que atuam como uma corda.

Portanto, o realismo da simulação é diretamente proporcional a quantidade de links. Quanto mais links o modelo tiver para um mesmo tamanho, maior será a semelhança com uma corda real. Entretanto, um número muito alto de links pode afetar o FPS e o real time factor, deixando a simulação lenta, o que, em alguns casos, chega a ser inutilizável. Baseado em testes empíricos, 10 a 20 links para uma corda de um metro costuma ser o ideal para conciliar a performance e o desempenho.

## Como utilizar

Para utilizar o script, basta entrar no diretório scripts do pacote de simulação e executar Corda.py. O programa irá pedir que você insira a quantidade de links desejados e o tamanho de cada link. Dessa forma, é possível controlar o tamanho final da corda realizando uma conta simples: número de links vezes tamanho do link. Após digitar essas entradas, o model da corda estará na pasta models do pacote de simulação, onde é possível utilizar diretamente no Gazebo utilizando a aba insert caso você tenha feito setup.bash.
