# Sky Hardware Quiz - Erros comuns e como resolvê-los
> *Escrito por [Artur Paparounis](https://github.com/artur-papas). Última atualização: 29/05/2023*

Esse documento tem por objetivo mostrar os principais erros observados ao testar, calibrar, montar e voar um drone, juntamente com possíveis soluções ou jeitos já encontrados de entender e solucionar o erro. 
Muitas vezes erros aleatórios podem ocorrer e simplesmente desligar e ligar o drone pode resolvê-los, mas grande parte deles têm um motivo que pode ser identificado e resolvido.
### Algumas coisas não ligam
**Nenhuma parte liga**

 1. Checar carga da bateria: células com defeito ou bateria descarregada podem não conseguir ligar o drone
 2. Checar PMB: Uma PMB quebrada pode fazer com que nenhuma parte do drone ligue
 
 **Controladora não liga**
 
 1. Checar cabo que liga PMB a controladora
 2. Checar PMB em si
 3. Checar controladora de voo
 
 **Algum outro componente não liga**
  1. Checar cabos de alimentação: Ver se não desconectaram, testar continuidade das pontas pra ver se não se rompeu no meio e por fim tentar trocar o cabo
  2. Checar componente em si
  3. Checar se desconectar outros componentes fazem o componente em questão ligar: As vezes o problema pode ser uma falta de corrente, que pode ser resolvida puxando outra fonte de alimentação diretamente da PMB
  
  ### Motores apitam infinitamente
   1. Checar se cabos de sinal estão conectados da forma correta
   2. Checar se cabos de sinal estão conectados nos pinos certos (de 1 ao número de motores)
   3. Setar o airframe correto na QGroundControl
   4. Ver se o hardware safety switch está ativo: Parametro BRD_SAFETY_DEFLT

### Problemas para baixar parâmetros

 1. Ver se ambas as telemetrias estão ligadas
 2. Ver se ambas as telemetrias são de mesma frequência: Existem 2 frequências principais, 915MHz e 433MHz, ver se a telemetria do drone tem a mesma frequÊncia da telemetria do computador
 3. Checar se não tem alguma parte do drone obstruindo a comunicação da antena: No geral é interessante que a antena fique desobstruida, podendo ser vista de fora
 4. Ajustar angulação das antenas: a angulação das antenas das telemetrias pode fazer diferença na qualidade de conexão, mudar a angulação as vezes pode resolver o problema

### Problemas de calibração
1. Ver se ambas as bússolas estão alinhados na mesma direção e sentido (FCU e GPS)
2. Tentar fechar e abrir a Ground Station
3. Caso a calibração ocorra sem a interface gráfica: realizar a calibração a partir dos textos que aparecem. Pode ocorrer que no final da calibração os offsets dos magnetômetros sejam dados mas não alterados automaticamente, nesse caso mudar os parâmetros COMPASS_OFS para os valores adequados (lembrando que compass = mag0, compass2 = mag1 e compass3 = mag2)
4. Tentar calibrar em um ambiente externo para averiguar problema de interferência
5. Caso o problema esteja na calibração do compass externo: Trocar de GPS e ver se funciona
6. Resetar o firmware da controladora de voo
7. Trocar de controladora de voo

### Problemas para usar o controle RC
1. Checar se o controle esta bindado no drone
2. Checar se joystick está habilitado nas configurações da Ground Station
3. Checar os comandos designados para cada canal do controle na Ground Gtation
4. Checar se os canais estão designados corretamente na configuração do controle

### Arming Checks
1. Motor Emergency Stopped: O kill switch do controle está ativo
2. High Magnetic Interference: Tentar levar o drone para algum lugar com menos metais em volta
3. Logging Unavailable: Sem cartão SD para guardar logs de voo ou o cartão está corrompido. Resolver o problema ou desabilitar o check
4. No GPS Lock for Vehicle: O GPS não está conseguindo definir a posição do drone, provavelmente por interferência ou falta de sinal. Se não for utilizar o GPS para estimar a posição, desabilitar o check.
5. Throttle Below Failsafe: Diminuir o valor do parâmetro FS_THR_VALUE até que o problema se resolva, as vezes precisa diminuir até o mínimo
6. Battery Level below Failsafe: Verificar voltagem da bateria, se estiver muito baixo, trocar ou carregar a bateria. Se estiver em um valor correto, recalibrar bateria na Ground Station.

### Drone tremendo muito
1. Diminuir a constante derivativa e proporcional do PID do roll e pitch do drone
2. Diminuir a potência do drone (hélices menores ou motores de menor kv)
3. Utilizar um frame menos flexivel e mais interligado, minimizando vibrações

 
 

 
 

