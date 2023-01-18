"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2465],{3905:function(e,o,a){a.d(o,{Zo:function(){return m},kt:function(){return u}});var t=a(7294);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function i(e,o){if(null==e)return{};var a,t,r=function(e,o){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),l=function(e){var o=t.useContext(p),a=o;return e&&(a="function"==typeof e?e(o):s(s({},o),e)),a},m=function(e){var o=l(e.components);return t.createElement(p.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},c=t.forwardRef((function(e,o){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=l(a),u=r,b=c["".concat(p,".").concat(u)]||c[u]||d[u]||n;return a?t.createElement(b,s(s({ref:o},m),{},{components:a})):t.createElement(b,s({ref:o},m))}));function u(e,o){var a=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=c;var i={};for(var p in o)hasOwnProperty.call(o,p)&&(i[p]=o[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<n;l++)s[l]=a[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2769:function(e,o,a){a.r(o),a.d(o,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return c}});var t=a(7462),r=a(3366),n=(a(7294),a(3905)),s=["components"],i={},p="Como controlar um servo a partir das portas GPIO da uma Raspberry Pi",l={unversionedId:"Componentes - M\xf3dulos/Como _controlar_servo_raspberry",id:"Componentes - M\xf3dulos/Como _controlar_servo_raspberry",isDocsHomePage:!1,title:"Como controlar um servo a partir das portas GPIO da uma Raspberry Pi",description:"Escrito por Rafael Gil e Sophia Celine. \xdaltima atualiza\xe7\xe3o: 03/01/2023",source:"@site/../docs/Componentes - M\xf3dulos/Como _controlar_servo_raspberry.md",sourceDirName:"Componentes - M\xf3dulos",slug:"/Componentes - M\xf3dulos/Como _controlar_servo_raspberry",permalink:"/knowledge_base/docs/Componentes - M\xf3dulos/Como _controlar_servo_raspberry",editUrl:"https://github.com/SkyRats/knowledge_base/tree/main/docs/../docs/Componentes - M\xf3dulos/Como _controlar_servo_raspberry.md",tags:[],version:"current",frontMatter:{},sidebar:"docssidebar",previous:{title:"Introdu\xe7\xe3o ao Hardware",permalink:"/knowledge_base/docs/introHW"},next:{title:"Como controlar um servo com PixHawk 4?",permalink:"/knowledge_base/docs/Componentes - M\xf3dulos/Como_controlar_servo_pela_controladora_de_voo"}},m=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",children:[],level:2},{value:"Set up b\xe1sico",id:"set-up-b\xe1sico",children:[],level:2},{value:"Instalando a biblioteca na Raspberry Pi",id:"instalando-a-biblioteca-na-raspberry-pi",children:[],level:2},{value:"Utilizando classe AngularServo",id:"utilizando-classe-angularservo",children:[],level:2},{value:"Refer\xeancias",id:"refer\xeancias",children:[],level:2}],d={toc:m};function c(e){var o=e.components,i=(0,r.Z)(e,s);return(0,n.kt)("wrapper",(0,t.Z)({},d,i,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"como-controlar-um-servo-a-partir-das-portas-gpio-da-uma-raspberry-pi"},"Como controlar um servo a partir das portas GPIO da uma Raspberry Pi"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"Escrito por ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/printRafaelprog"},"Rafael Gil")," e ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/sophi011"},"Sophia Celine"),". \xdaltima atualiza\xe7\xe3o: 03/01/2023"))),(0,n.kt)("h2",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),(0,n.kt)("p",null,"Nesse texto ser\xe1 discutido como controlar um servo a partir da GPIO da Raspberry Pi. Essa \xe9 uma forma de controle ",(0,n.kt)("strong",{parentName:"p"},"aut\xf4nomo")," do servo. Uma documenta\xe7\xe3o sobre como controlar um servo por um controle pode ser encontrada ",(0,n.kt)("a",{parentName:"p",href:"https://skyrats.github.io/knowledge_base/docs/Componentes%20-%20M%C3%B3dulos/Como_controlar_servo_pela_controladora_de_voo"},"aqui"),". "),(0,n.kt)("p",null,"Para controlar o sevro ser\xe1 escrito um c\xf3digo em ",(0,n.kt)("strong",{parentName:"p"},"Python")," Utilizando como suporte a biblioteca ",(0,n.kt)("strong",{parentName:"p"},"gpiozero"),". "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"A Raspberry Pi Utilizada nesse texto foi a ",(0,n.kt)("strong",{parentName:"p"},"4 modelo b"),". O seu datasheet pode ser encontrado ",(0,n.kt)("a",{parentName:"p",href:"https://datasheets.raspberrypi.com/rpi4/raspberry-pi-4-datasheet.pdf"},"aqui")," ")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"O Servo utilizado nesse texto foi o ",(0,n.kt)("strong",{parentName:"p"},"SG90"),", cujo datasheet pode ser encontrado ",(0,n.kt)("a",{parentName:"p",href:"http://www.ee.ic.ac.uk/pcheung/teaching/DE1_EE/stores/sg90_datasheet.pdf"},"aqui"))),(0,n.kt)("h2",{id:"set-up-b\xe1sico"},"Set up b\xe1sico"),(0,n.kt)("p",null,"Ser\xe1 necess\xe1rio uma fonte de tens\xe3o para alimentar o servo. Essa fonte de tens\xe3o precisa ser de 5V. POde-se utilzar o pino 5V da pr\xf3pria Rasp, juntamente com o GND da Rasp para alimentar o servo. "),(0,n.kt)("p",null,"Posteriormente, conecte o cabo de sinal na porta PWM da Rasp. "),(0,n.kt)("h2",{id:"instalando-a-biblioteca-na-raspberry-pi"},"Instalando a biblioteca na Raspberry Pi"),(0,n.kt)("p",null,"Para come\xe7ar, devemos atualizar as bibliotecas da Raspberry. Para isso, em um terminal, podemos rodar o comando:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt update\n")),(0,n.kt)("p",null,"Em seguida, podemos instalar a biblioteca com o ",(0,n.kt)("inlineCode",{parentName:"p"},"pip"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo pip3 install gpiozero\n")),(0,n.kt)("p",null,"Outra alternativa:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install python3-gpiozero\n")),(0,n.kt)("p",null,"Com isso, se n\xe3o houver nenhum erro de instala\xe7\xe3o, podemos importar a biblioteca no c\xf3digo e come\xe7ar a us\xe1-la. "),(0,n.kt)("h2",{id:"utilizando-classe-angularservo"},"Utilizando classe AngularServo"),(0,n.kt)("p",null,"Para entender o c\xf3digo de controle do servo, \xe9 necess\xe1rio entender o funcionamento da classe AngularServo da biblioteca gpiozero. "),(0,n.kt)("p",null,"Essa classe cria um objeto que representa o servo conectado na Rasp. A partir dela, \xe9 poss\xedvel setar um movimento m\xe1ximo e m\xednimo que o servo consegue se mexer. "),(0,n.kt)("p",null,"Para setar isso, \xe9 necess\xe1rio ter no\xe7\xe3o de qual \xe9 o range m\xe1ximo de moviento que seu servo consegue realizar. Para isso, voc\xea pode utilizar o m\xe9todo max() e min() relacionado a essa classe. "),(0,n.kt)("p",null,"Como no exemplo"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from gpiozero import Servo\ns = Servo(17)\ns.min()\ns.max()\n")),(0,n.kt)("p",null,"O servo, quando ligado, movimentara-se automaticamente para sua posi\xe7\xe3o default. Dela voc\xea consegue medir quais as posi\xe7\xf5es m\xednimas e m\xe1ximas do movimento do se servo. "),(0,n.kt)("p",null,"Agora voc\xea j\xe1 consegue escrever um objeto da classe AngularServo. "),(0,n.kt)("p",null,"A classe Angularservo tem v\xe1rios par\xe2metros, mas o \xfanico obrigat\xf3rio \xe9 o pino PWM que \xe9 o sinal do seu servo. Apesar disso, os autores da documenta\xe7\xe3o dessa classe orientam que seja medido o \xe2ngulo m\xe1ximo e m\xednimo que esse servo consegue chegar. (O link para a documenta\xe7\xe3o da biblioteca gpiozero est\xe1 na parte refer\xeancias). Medindo o \xc2ngulo m\xe1ximo e m\xednimo, pode-se definir esses \xe2ngulos como par\xe2metros da classe. "),(0,n.kt)("p",null,"Para a realiza\xe7\xe3o do nosso c\xf3digo, a sky manteve os par\xe2metros default da classe (que \xe9 90 graus max e -90 graus min) Como visto no c\xf3digo abaixo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from gpiozero import AngularServo\nfrom gpiozero.pins.pigpio import PiGPIOFactory\nfrom time import sleep\n\nclass payload():\n    def __init__(self):\n        pigpio_factory = PiGPIOFactory()\n        self.servo = AngularServo(13 pin_factory=pigpio_factory, min_pulse_width=0.0010, max_pulse_width=0.0017)\n")),(0,n.kt)("p",null,"No par\xe2metro pin, foi utilizado o ",(0,n.kt)("strong",{parentName:"p"},"GPIO 13")," j\xe1 que ele \xe9 uma porta PWM na Raspberry Pi 4 model b utilizada. "),(0,n.kt)("p",null,"Al\xe9m disso, forma definidos os par\xe2metros ",(0,n.kt)("strong",{parentName:"p"},"min_pulse_width")," e ",(0,n.kt)("strong",{parentName:"p"},"max_pulse_width"),". Esses par\xe2metros representam, respectivamente, qual \xe9 o per\xedodo de tempo em que o sinal est\xe1 em high que representa a posi\xe7\xe3o m\xednima do servo, e qual o per\xedodo de tempo que o sinal est\xe1 em high que representa a posi\xe7\xe3o m\xe1xima do servo. Eles s\xe3o dados em ",(0,n.kt)("strong",{parentName:"p"},"unidade de segundos"),". "),(0,n.kt)("p",null,"Para a realiza\xe7\xe3o desse c\xf3digo utilizado pela skyrats, esses par\xe2metros foram determinados por tentativa e erro. Ou seja, vimos qual era o valor do par\xe2metros mais adequado para a nossa aplica\xe7\xe3o. "),(0,n.kt)("p",null,"Mas se voc\xea quiser usar realmente o pulso certo para a tingir a movimenta\xe7\xe3o m\xe1xima do servo, essa informa\xe7\xe3o pode ser encontrada no datasheet. "),(0,n.kt)("blockquote",null,(0,n.kt)("h2",{parentName:"blockquote",id:"adendo-sobre-pwm"},"Adendo sobre PWM"),(0,n.kt)("p",{parentName:"blockquote"},"Um sinal de PWM \xe9 uma onda quadrada, no qual o duty cicle da onda, ou seja, o tempo que uma onda se mant\xe9m em high em rela\xe7\xe3o ao per\xedodo total da onda \xe9 chamado duty cicle. O comprimento das ondas PWM s\xe3o dados em uma unidade de tempo, e a amplitude do sinal de PWM s\xe3o dados em unidade de tens\xe3o. Equipamentos como servos motores tem sua movimenta\xe7\xe3o controlada a partir do duty cicle do PWM"),(0,n.kt)("p",{parentName:"blockquote"},"Um exemplo de onda PWM pode ser visto abaixo:"),(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("img",{alt:"PWM",src:a(1895).Z}),"\nFonte: ",(0,n.kt)("a",{parentName:"p",href:"https://www.citisystems.com.br/pwm/"},"https://www.citisystems.com.br/pwm/")," (Acessado em 02/01/2023)"),(0,n.kt)("p",{parentName:"blockquote"},"Observe que o duty cicle est\xe1 destacado em cima de cada onda, sendo a onda (a) composta por 10%, a (b) 50% e a (c) 90%")),(0,n.kt)("p",null,"O c\xf3digo da skyrats tamb\xe9m utilizou a biblioteca ",(0,n.kt)("strong",{parentName:"p"},"time")," do python, mais especificamente a fun\xe7\xe3o ",(0,n.kt)("strong",{parentName:"p"},"sleep()"),". "),(0,n.kt)("p",null,"A fun\xe7\xe3o sleep para a execu\xe7\xe3o do c\xf3digo pelo n\xfamero de ",(0,n.kt)("strong",{parentName:"p"},"segundos")," dados como argumento da fun\xe7\xe3o. A documenta\xe7\xe3o completa da biblioteca time pode ser encontrada nas refer\xeancias."),(0,n.kt)("p",null,"O time de software tamb\xe9m definiu m\xe9todos que iriam controlar o servo durante sua execu\xe7\xe3o. Esses m\xe9todos podem ser vistos no c\xf3digo abaixo"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from gpiozero import AngularServo\nfrom gpiozero.pins.pigpio import PiGPIOFactory\nfrom time import sleep\n\nclass payload():\n    def __init__(self):\n        pigpio_factory = PiGPIOFactory()\n        self.servo = AngularServo(13, pin_factory=pigpio_factory, min_pulse_width=0.0010, max_pulse_width=0.0017)\n\n    def release(self):\n        print("Releasing payload")\n        self.servo.max()\n        sleep(2)\n\n    def load(self):\n        print("Loading payload")\n        self.servo.min()\n        sleep(2)\n\n\nif __name__ == "__main__":\n    payload = payload()\n    payload.release()\n    payload.load()\n')),(0,n.kt)("p",null,"Os m\xe9todos utilizam as fun\xe7\xf5es ",(0,n.kt)("strong",{parentName:"p"},"max()")," e ",(0,n.kt)("strong",{parentName:"p"},"min()")," da biblioteca AngularServo para setar o servo para a sua posi\xe7\xe3o m\xe1xima e m\xednima respectivamente. "),(0,n.kt)("p",null,"Agora, vou esplicar essa classe importada chamada ",(0,n.kt)("strong",{parentName:"p"},"PiGPIOFactory"),". "),(0,n.kt)("p",null,"Basicamente, para passar o n\xfamero da GPIO onde nosso servo estar\xe1 conectado n\xe3o significa alguma coisa caso n\xe3o exista algum processamento sobre esse pino. Ou seja, transformando-o em um dado qu eo python consiga trabalhar, e, portanto, controlar o componente conectado a esse pino. "),(0,n.kt)("p",null,"Para isso existem as ",(0,n.kt)("strong",{parentName:"p"},"factorys"),", que fazem esse trabalho de processamento sobre o pino passado. No entanto, a factory default para a Raspberry Pi \xe9 uma biblioteca chamada ",(0,n.kt)("strong",{parentName:"p"},"RPi.GPIO"),". Essa biblioteca contuma dar muitos problemas para baixar e instalar. Portanto, a equipe de software da skyrats optou por escolher outra factory para tratar os pinos passados como argumento na classe AngularServo.A biblioteca escolhida foi essa ",(0,n.kt)("strong",{parentName:"p"},"pigpio"),", a qual, assim como dito na documenta\xe7\xe3o oficial da gpiozero, \xe9 uma biblioteca suportada pela classe. "),(0,n.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,n.kt)("p",null,"Para escrever esse texto, consultei os seguintes links:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=8N-5rEclspw"},"https://www.youtube.com/watch?v=8N-5rEclspw")," -> V\xeddeo do canal Eli The Computer Guy (Acessado em 01/01/2023)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/SkyRats/IMAV2022Outdoor/blob/main/scripts/servocontrol.py"},"https://github.com/SkyRats/IMAV2022Outdoor/blob/main/scripts/servocontrol.py")," -> C\xf3digo escrito pela equipe de software da skyrats, o qual foi documentado nesse texto (Acessado em 02/01/2023)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://gpiozero.readthedocs.io/en/stable/"},"https://gpiozero.readthedocs.io/en/stable/")," -> Documenta\xe7\xe3o do pacote gpiozero utilizado para fazer o c\xf3digo de controle do servo. (Acessado em 02/01/2023)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.python.org/pt-br/3/library/time.html#time.sleep"},"https://docs.python.org/pt-br/3/library/time.html#time.sleep")," -> documenta\xe7\xe3o biblioteca time (Acessado em 02/01/2023)"))}c.isMDXComponent=!0},1895:function(e,o,a){o.Z=a.p+"assets/images/PWM-2095d9b85e6ee6ec6e1307cbe30bf854.png"}}]);