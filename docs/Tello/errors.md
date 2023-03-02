
---
sidebar_position: 1
---
# Solucionando erros 
Essa página tem o intuito de mostrar as soluções encontradas para lidar com erros que ocorrem naturalmente com o uso do Tello com scripts em Python, ou fora do aplicativo.

## Auto-landing

Um dos problemas comuns que ocorriam era o Tello pousar inesperadamente, sem motivos aparentes. Isso pode acontecer por algumas razões:
- **Pouca bateria**: O Tello começa a piscar vermelho (como descrito na tabela do manual) e pousa. Vale a pena sempre mandar printar a bateria para monitorar isso.

 ```
  self.battery = self.tello.get_battery()
  print(self.battery) 
  ```
- **Muito tempo sem comandos**: Quando o drone não recebe um comando dentro de um determi-
nado período de tempo, ele pousa por motivos de segurança (por exem-
plo, quando seu programa caiu ou a conexão foi interrompida). Nesse
caso, o Tello pousa geralmente depois de 15 segundos sem receber co-
mandos, piscando vermelho tamb ́em (mas ”solid”). Cuidado, portanto,
se o seu c ́odigo tem time.sleep muito longo. Isso pode fazer o Tello pousar
ou perder conex ̃ao. A própria biblioteca DJITelloPy tem seus próprios
time.sleep embutidos, apesar de parecerem,  ás vezes, insuficientes mesmo.
A solução encontrada para isso foi mandar um sinal de "command" para
o drone a cada 10 segundos (em segmentos do código que dependem de
input no computador e, por isso podem demorar, ou em loops que de-
pendem da detecão da mão para mandar comandos). Isso parece que
resolveu o problema do Tello pousar automaticamente e não prejudica
a segurança, pois, se de fato perdermos a conexão com o Tello, ele irá
pousar automaticamente após 15 segundos. Veja abaixo a função:

```
def keep_tello_alive(self):
        # Manda sinal para o tello não pousar. Criamos uma função, pois chamaremos em outra classe
        if not SIMULATION:
            self.tello.send_control_command("command")
```
- **Falta de tempo de espera**: O contrário também pode acontecer. uando o Tello recebe comando sem ter terminado o  último,  ás vezes
pode dar erro e ele acabar pousando. Mensagens de erro que ocorrem
quando falta delay  é: ’error Not joystick’, por exemplo. Nessa situação, o Tello também pisca vermelho e pousa.
