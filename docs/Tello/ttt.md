# ttt.py
Essa página tem o objetivo de explicar o funcionamento do código ttt.py, que permite o usuário jogar jogo da velha com o drone Tello.

# Outras dependências
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
## get_common()
## get_mask()
## show\_drone_play()
## get_squares()
## detect_board()
## read_board()
## print_board()
## play_ttt()