
---
sidebar_position: 1
---
# Solucionando erros 
Essa página tem o intuito de mostrar as soluções encontradas para lidar com erros que ocorrem naturalmente com o uso do Tello com scripts em Python, ou fora do aplicativo.

1.  **Auto-landing**

Um dos problemas comuns que ocorriam era o Tello pousar inesperadamente, sem motivos aparentes. Isso pode acontecer por algumas razões:
- Pouca bateria: O Tello começa a piscar vermelho (como descrito na tabela do manual) e pousa. Vale a pena sempre mandar printar a bateria para monitorar isso.
		self.battery = self.tello.get_battery()
		print(self.battery)

