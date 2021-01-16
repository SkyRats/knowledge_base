# Instalação

## 1. Objetivo

Instalação dos seguintes programas:

- ROS Melodic
- Gazebo 9
- MAVROS
- Firmware PX4
- QGroundControl

---

## 2. Materiais necessários

Computador com Ubuntu 18.04

---

## 3. Passo a passo

Execute os seguintes comandos em sequência em um terminal.

### 3.1. ROS e Gazebo

```bash
# Configura sources.list
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'

# Configura keys
sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654

sudo apt update

# Instala o ROS e o Gazebo
sudo apt install ros-melodic-desktop-full -y

# Variáveis de ambiente
source /opt/ros/melodic/setup.bash
echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc

# Instala outras dependencias
sudo apt install python-rosinstall python-rosinstall-generator python-wstool build-essential
```

Para criar um workspace na pasta `~/catkin_ws`:

```bash
# Cria a pasta
mkdir -p ~/catkin_ws/src

# Inicializa o workspace
cd ~/catkin_ws/src
catkin_init_workspace

# Compila o workspace
sudo apt install python-catkin-tools
cd ..
catkin build

# Adiciona ao .bashrc
echo "source ~/catkin_ws/devel/setup.bash" >> ~/.bashrc
```

### 3.2. MAVROS

```bash
# Instala MAVROS
sudo apt-get install ros-melodic-mavros ros-melodic-mavros-extras

# Instala geographiclib
wget https://raw.githubusercontent.com/mavlink/mavros/master/mavros/scripts/install_geographiclib_datasets.sh
sudo bash ./install_geographiclib_datasets.sh
rm ./install_geographiclib_datasets.sh
```

### 3.3. Firmware PX4

```bash
mkdir ~/src
cd ~/src

# Clona o firmware
git clone https://github.com/Skyrats/Firmware.git --recursive

# Executa o ubuntu.sh (demora pra caramba)
cd ~/src/Firmware/Tools/setup
./ubuntu.sh
```

Isso apenas baixa o Firmware e instala suas dependências. Se você quiser usá-lo em um drone ou em uma simulação, você vai precisar compilar. Isso demora bastante, então eu recomendo fazer logo o que você for usar.

<a id="compilar"></a>

```bash
# Todos os comandos devem ser executados nessa página
cd ~/src/Firmware

# Compilar para simulação (vai abrir o gazebo no final)
make px4_sitl gazebo

# Pixhawk 4
make px4_fmu-v5_default
```


### 3.4. QGroundControl

```bash
sudo usermod -a -G dialout $USER
sudo apt-get remove modemmanager -y
sudo apt install gstreamer1.0-plugins-bad gstreamer1.0-libav gstreamer1.0-gl -y

# Precisa dar logout e login para prosseguir

# Baixa o QGC (um executável) para a home
cd
wget https://s3-us-west-2.amazonaws.com/qgroundcontrol/latest/QGroundControl.AppImage

# Dá permissão de execução
chmod +x QGroundControl.AppImage
```

---

## 4. Verificando a instalação

Pra testar se as coisas foram instaladas corretamente, você pode seguir os passos a seguir. São testes simples só pra ver se o básico funciona.

### 4.1. ROS

Abra um terminal e digite o comando seguinte

```
roscore
```

Se aparecer uma parede de texto tá tudo certo, se der algum erro de comando não encontrado alguma coisa deu ruim. Pra interrompe, aperte Ctrl+C.

### 4.2. MAVROS

Se estiver instalado, o ROS deve conseguir achar a MAVROS com

```
roscd mavros
```

Comando básico pra ir até o diretório em que tá instalado. Se não apareceu nada tá tudo certo, o problema é se reclamar que não encontrou.

### 4.3. Gazebo

O Gazebo é um aplicativo, vocẽ deve encontrar ele dentre os outros aplicativos ou colocando `gazebo` em qualquer terminal. Basta checar que ele existe e abre.

### 4.4. Firmware PX4

Uma forma simples de ver se está funcionando é tentar abrir a simulação com o gazebo, como explicado no final de [3.3.](#compilar)

### 4.5. QGroundControl

Esse tbm é um aplicativo, mas não aparece na lista de aplicativos instalados. A gente baixou ele direto na home, só precisa clicar duas vezes no ícone e ele abre.

---

## 5. Referências

1. http://wiki.ros.org/melodic/Installation/Ubuntu
2. https://github.com/SkyRats/workshops/tree/ros_basics
3. https://dev.px4.io/master/en/ros/mavros_installation.html
4. https://dev.px4.io/master/en/setup/dev_env_linux_ubuntu.html
5. https://docs.qgroundcontrol.com/master/en/getting_started/download_and_install.html
