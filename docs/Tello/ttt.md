# ttt.py
Essa página tem o objetivo de explicar o funcionamento do código ttt.py, que permite o usuário jogar jogo da velha com o drone Tello.

# Dependências
O código usa as seguintes dependências:

```
import cv2
import numpy as np
import time
from tttAI import IA
from djitellopy import Tello
```
Opencv para a manipulação e tratamento de imagens, numpy para a criação das máscaras (em suporte do opencv), time para a função sleep() e djitellopy para controle do drone.

## tttAI
A dependência restante é uma implementação do algoritmo Minimax feita para jogar jogo da velha, criado por Clederson Cruz sob licensa GPL. Foi utilizado para tomar as decisões das jogadas do drone.

# Classe tttDetection

## __init__()
Inicializa o objeto que representa o tello, bem como o objeto do algoritmo que jogará pelo drone e por fim cria os contornos dos jogadores, abrindo suas respectivas imagens que, depois de transformadas em grayscale e aplicado um filtro threshold, retornam os contornos sem usar uma aproximação (tag cv2.CHAIN\_APPROX_NONE).

```
def __init__(self):
    self.tello = Tello()
    self.ia = IA()
    
    # Contornos do player1 (X)
    player1 = cv2.imread("./player1.png")
    player1_gray = 255 - cv2.cvtColor(player1, cv2.COLOR_BGR2GRAY)
    
    _, thresh1 = cv2.threshold(player1_gray, 127, 255, 0)
    contours, _ = cv2.findContours(thresh1, cv2.RETR_TREE, cv2.CHAIN_APPROX_NONE)
    self.player1_cnt = contours[0]

    # Contornos do player2 (Check mark)
    player2 = cv2.imread("./player2.png")
    player2_gray = 255 - cv2.cvtColor(player2, cv2.COLOR_BGR2GRAY)

    _, thresh2 = cv2.threshold(player2_gray, 127, 255, 0)
    contours, _ = cv2.findContours(thresh2, cv2.RETR_TREE, cv2.CHAIN_APPROX_NONE)
    self.player2_cnt = contours[0]
```


## tello_startup()
Se conecta ao Tello e começa a transmissão da câmera.

```
def tello_startup(self):
    self.tello.connect()
    self.tello.streamon()
```
## filter_small()
Dado uma lista de contornos, elimina os que possuírem uma área menor do que a área limite. Tem o objetivo de limpar as imagens dos quadrantes para uma melhor detecção. Não é necessariamente importante ou particularmente efetiva, mas não afeta significativamente a performance.

```
def filter_small(self, contours, min_area):
    
    filtered_contours = []

    for contour in contours:
        if cv2.contourArea(contour) >= min_area:
            filtered_contours.append(contour)

    return filtered_contours
```

## match_shape ()
Dado uma lista de contornos (dos quadrantes do tabuleiro) e uma tolerância, verifica se um desses contornos é próximo o suficiente do modelo dos jogadores.

```
def match_shape(self, square_cnts, max_tolerance):
    for contour in square_cnts:
                    
        if cv2.matchShapes(contour, self.player1_cnt, 1, 0.0) < max_tolerance:
            return 1

        elif cv2.matchShapes(contour, self.player2_cnt, 1, 0.0) < max_tolerance:
            return -1

    return 0
```
## most_frequent()
Dado uma lista, encontra o valor que mais aparece nela. Usado conjuntamente com get_common()

```
def most_frequent(self, list):

    most_frequent = 0
    result = list[0]
 
    for i in list:
        frequency = list.count(i)
        if(frequency > most_frequent):
            most_frequent = frequency
            result = i

    return result
```
## get_common()
Função que recebe a lista de tabuleiros detectados em um ciclo da função detect_board() e, para cada quadrante, escolhe a jogada que mais prevalesceu e retorna o tabuleiro "comum". Tem o objetivo de fornecer uma redundância para o ciclo de detecção.

```
def get_common(self, boards):

    board_common = [[], [], []]
    for i in range(3):
        for j in range(3):
            play = []
            for board in boards:
                play.append(board[i][j])

            board_common[i].append(self.most_frequent(play))
    
    return board_common
```
## get_mask()
Cria uma máscara, selecionando os pixels presentes no range HSV entre os parametros lower e upper especificados.

```
def get_mask(self, hsv , lower_color , upper_color):
    lower = np.array(lower_color)
    upper = np.array(upper_color) 
    mask = cv2.inRange(hsv , lower, upper)
    return mask
```

## show\_drone_play()
Processo que realiza a "representação" física da jogada do drone. Por exemplo, se a jogada escolhida for no canto superior esquerdo, o drone voa para a esquerda, para cima e depois retorna a posição.

```
def show_drone_play(self,drone_play):
    dist = 40
    wait = 1
    wait_after = 2
    if(drone_play == 1):
        self.tello.move_left(dist)
        time.sleep(wait)
        self.tello.move_up(dist)
        time.sleep(wait_after)
        
        self.tello.move_down(dist)
        time.sleep(wait)
        self.tello.move_right(dist)

    elif(drone_play == 2):
        
        self.tello.move_up(dist)
        time.sleep(wait_after)
        self.tello.move_down

    elif(drone_play == 3):
        self.tello.move_right(dist)
        time.sleep(wait)
        self.tello.move_up(dist)
        time.sleep(wait_after)

        self.tello.move_down(dist)
        time.sleep(wait)
        self.tello.move_left(dist)
        
    elif(drone_play == 4):
        self.tello.move_left(dist)
        time.sleep(wait_after)
        self.tello.move_right(dist)

    elif(drone_play == 5):
        self.tello.move_forward(dist)
        time.sleep(wait_after)
        self.tello.move_back(dist)
    
    elif(drone_play == 6):
        self.tello.move_right(dist)
        time.sleep(wait_after)
        self.tello.move_left(dist)
        
    elif(drone_play == 7):
        self.tello.move_left(dist)
        time.sleep(wait)
        self.tello.move_down(dist)
        time.sleep(wait_after)

        self.tello.move_up(dist)
        time.sleep(dist)
        self.tello.move_right(dist)

    elif(drone_play == 8):
        self.tello.move_down(dist)
        time.sleep(wait_after)
        self.tello.move_up(dist)
        
    elif(drone_play == 9):
        self.tello.move_right(dist)
        time.sleep(wait)
        self.tello.move_down(dist)
        time.sleep(wait_after)

        self.tello.move_up(dist)
        time.sleep(wait)
        self.tello.move_left(dist)
```

## get_squares()
Função que recebe uma imagem, aplica uma máscara azul (para detectar a borda do tabuleiro) e, dos contornos da imagem, verifica se um deles é um quadrado com uma área suficiente para ser o tabuleiro, retornando suas dimensões e coodernadas.


```
def get_squares (self, image):

    lower_blue = [ 99, 89, 53]
    upper_blue = [ 119, 255, 255]

    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    blue_mask = self.get_mask(hsv, lower_blue, upper_blue)
    blue_result = cv2.bitwise_and(image , image , mask= blue_mask)

    erode_size = 5
    dilate_size = 5

    erode_kernel = np.ones((erode_size, erode_size), np.float32)
    dilate_kernel = np.ones((dilate_size, dilate_size), np.float32)
    
    blue_result = cv2.dilate(blue_result, dilate_kernel)
    blue_result = cv2.erode(blue_result, erode_kernel)

    # Retorna uma lista com os quadrados que tem area maior ou igual a min_area
    square_detected = 0

    min_area = 6000 # Area minima para um quadrado ser contabilizado

    contours, _ = cv2.findContours(blue_mask, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_NONE)
    
    for contour in contours:
        area = cv2.contourArea(contour)
        if area >= min_area:

            x,y,w,h=cv2.boundingRect(contour)
            square_detected = [x,y,w,h]

    return square_detected, blue_result
```

## detect_board()
Uma das funções essenciais. Abre uma imagem da visão do drone na tela, bem como a visão da máscara, para permitir que o usuário decida quando começar o ciclo de detecções (apertando espaço no teclado). Isto posto, o ciclo de detecções começa: uma imagem da câmera do drone é selecionada, processada usando a função get_squares() e se o tabuleiro for detectado, é executada a função read board(), que divide a imagem do tabuleiro em quadrantes e verifica para cada um deles qual a jogada.

Esse processo é executado várias vezes (o número exato é definido pelo parâmetro tries) com um pequeno período de espera entre processamentos. Isso significa que mesmo que a detecção possua algum erro em algum quadrante, por meio da função get_common(), a leitura que melhor prevalescer é a escolhida.

```
def detect_board(self, tries, wait_time = 0.05, max_tolerance = .6):
    boards = []
    print("\nQuando encontrar o tabuleiro, aperte espaço com a janela selecionada.")
    while(True):
        
        self.tello.send_control_command("command")
        self.frame = self.tello.get_frame_read().frame 
        board, self.blue_img = self.get_squares(self.frame)
        frame_gray = cv2.cvtColor(self.frame, cv2.COLOR_BGR2GRAY)
        _, frame_thresh = cv2.threshold(frame_gray, 127, 255,0)
        cv2.imshow("frame threshold", frame_thresh)
        cv2.imshow("blue", self.blue_img)

        if(cv2.waitKey(1) == ord(" ")):
            break

    for _ in range(tries):
        #_, self.frame = self.capture.read(0)
        self.frame = self.tello.get_frame_read().frame 

        board, self.blue_img = self.get_squares(self.frame)
        if board != 0:

            boards.append(self.read_board(board, max_tolerance))

        time.sleep(wait_time)

    return self.get_common(boards)
```

## read_board()
Função que recebe a imagem de um tabuleiro, divide os quadrantes e os analisa individualmente (função get_squares()) a fim de identificar a jogada. Por fim, retorna uma matriz que representa o tabuleiro.

```
def read_board(self, board, max_tolerance = 1):

    x,y,w,h = board
    board_simple = [[], [], []]

    frame_gray = cv2.cvtColor(self.frame, cv2.COLOR_BGR2GRAY)
    _, frame_thresh = cv2.threshold(frame_gray, 127, 255, 0)

    cv2.imshow("frame threshold", frame_thresh)
    cv2.imshow("blue", self.blue_img)

    for i in range(3):
        for j in range(3):
            
            square = frame_thresh[(y + h * (j)//3) : (y + h * (j + 1)//3), (x + w * (i)//3) : (x + w * (i + 1)//3)]
            square_cnts, _ = cv2.findContours(square, cv2.RETR_TREE, cv2.CHAIN_APPROX_NONE)
            square_cnts = self.filter_small(square_cnts, 15)

            board_simple[j].append(self.match_shape(square_cnts, max_tolerance))
    
    return board_simple
```

## print_board()
Processo que representa no terminal o estado do tabuleiro depois de um turno.

```
def print_board(self, board):
    print(f" {board[0][0]} | {board[0][1]} | {board[0][2]}")
    print("-----------")
    print(f" {board[1][0]} | {board[1][1]} | {board[1][2]}")
    print("-----------")
    print(f" {board[2][0]} | {board[2][1]} | {board[2][2]}")
    print()
    print()
    print("###########################################")
```

## play_ttt()
Processo que realiza por completo o jogo com o drone. Depois de se conectar com o Tello e fazê-lo realizar um takeoff, pergunta por meio do terminal quem vai jogar primeiro. Depois disso, inicia um loop até que o jogo termine ou que o usuário escreva q.

Nesse loop, a função detect_board() é chamada e retorna o estado do tabuleiro após a jogada do humano. Esse estado é fornecido para a IA, que escolhe a jogada do drone, em seguida representada fisicamente pelo movimento do tello e o loop continua.

```
def play_ttt(self):
    self.tello_startup()
    self.tello.takeoff()
    board_state = []
    start_detetection = False

    c_choice = "X"
    h_choice = "V"

    print("Começando o jogo da velha!!")
    print("-------------------------------")

    first = input("Você que começar? [S/N] ")

    # Rodando o loop enquanto o tabuleiro não estiver preenchido nem ganho        
    while len(self.ia.empty_cells(self.ia.board)) > 0 and not self.ia.game_over(self.ia.board):
        self.tello.send_control_command("command")

        if first in'Nn':
            jogada_ia = self.ia.ai_turn(c_choice, h_choice)
            self.show_drone_play(jogada_ia)
            print(f"Jogada do drone : {jogada_ia}")
            first = 'nothing'

        start_detetection = input("\nDigite qualquer coisa para iniciar uma detecção (se quiser sair do jogo, aperte q)  \n")

        if start_detetection in "Qq":
            break

        board_state = self.detect_board(tries = 25)
        print("Tabuleiro encontrado!\n")
        print("\nSituação atual do jogo:")
        self.ia.board = board_state
        self.ia.render(board_state, c_choice, h_choice)

        jogada_ia = self.ia.ai_turn(c_choice, h_choice)
        self.show_drone_play(jogada_ia)

        print(f"Jogada do drone : {jogada_ia}")
        # drone indica a jogada
    self.tello.land()
```
