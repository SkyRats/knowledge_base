"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7314],{3905:function(e,o,a){a.d(o,{Zo:function(){return l},kt:function(){return p}});var r=a(7294);function t(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){t(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function c(e,o){if(null==e)return{};var a,r,t=function(e,o){if(null==e)return{};var a,r,t={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],o.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=r.createContext({}),u=function(e){var o=r.useContext(i),a=o;return e&&(a="function"==typeof e?e(o):s(s({},o),e)),a},l=function(e){var o=u(e.components);return r.createElement(i.Provider,{value:o},e.children)},d={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(e,o){var a=e.components,t=e.mdxType,n=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(a),p=t,v=m["".concat(i,".").concat(p)]||m[p]||d[p]||n;return a?r.createElement(v,s(s({ref:o},l),{},{components:a})):r.createElement(v,s({ref:o},l))}));function p(e,o){var a=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var n=a.length,s=new Array(n);s[0]=m;var c={};for(var i in o)hasOwnProperty.call(o,i)&&(c[i]=o[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,s[1]=c;for(var u=2;u<n;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5083:function(e,o,a){a.r(o),a.d(o,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return l},default:function(){return m}});var r=a(7462),t=a(3366),n=(a(7294),a(3905)),s=["components"],c={},i="Como controlar um servo com PixHawk 4?",u={unversionedId:"Componentes - M\xf3dulos/Como_controlar_servo_pela_controladora_de_voo",id:"Componentes - M\xf3dulos/Como_controlar_servo_pela_controladora_de_voo",isDocsHomePage:!1,title:"Como controlar um servo com PixHawk 4?",description:"Escrito por Rafael Gil. \xdaltima atualiza\xe7\xe3o: 11/09/2022",source:"@site/../docs/Componentes - M\xf3dulos/Como_controlar_servo_pela_controladora_de_voo.md",sourceDirName:"Componentes - M\xf3dulos",slug:"/Componentes - M\xf3dulos/Como_controlar_servo_pela_controladora_de_voo",permalink:"/knowledge_base/docs/Componentes - M\xf3dulos/Como_controlar_servo_pela_controladora_de_voo",editUrl:"https://github.com/SkyRats/knowledge_base/tree/main/docs/../docs/Componentes - M\xf3dulos/Como_controlar_servo_pela_controladora_de_voo.md",tags:[],version:"current",frontMatter:{},sidebar:"docssidebar",previous:{title:"Introdu\xe7\xe3o ao Hardware",permalink:"/knowledge_base/docs/introHW"},next:{title:"Computadores de Bordo (Odroid XU4 vs Raspberry 4)",permalink:"/knowledge_base/docs/Componentes - M\xf3dulos/Computadores de bordo (Odroid XU4 vs Raspberry Pi 4)"}},l=[{value:"Como fazer?",id:"como-fazer",children:[],level:2},{value:"1 - Troque seu canal auxiliar",id:"1---troque-seu-canal-auxiliar",children:[],level:2},{value:"2 - Mude alguns par\xe2metros",id:"2---mude-alguns-par\xe2metros",children:[],level:2}],d={toc:l};function m(e){var o=e.components,c=(0,t.Z)(e,s);return(0,n.kt)("wrapper",(0,r.Z)({},d,c,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"como-controlar-um-servo-com-pixhawk-4"},"Como controlar um servo com PixHawk 4?"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},(0,n.kt)("em",{parentName:"p"},"Escrito por ",(0,n.kt)("a",{parentName:"em",href:"https://github.com/printRafaelprog"},"Rafael Gil"),". \xdaltima atualiza\xe7\xe3o: 11/09/2022")),(0,n.kt)("h1",{parentName:"blockquote",id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o")),(0,n.kt)("p",null,"Nesse texto vou discutir como controlar um servo pela controladora de v\xf4o Pixhawk 4, poss\xedveis problemas que voc\xea pode ter fazendo isso e como concerta-los."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Nesse texto estou utilizando o servo SG90, o qual tem esse datasheet\n",(0,n.kt)("a",{parentName:"p",href:"http://www.ee.ic.ac.uk/pcheung/teaching/DE1_EE/stores/sg90_datasheet.pdf"},"http://www.ee.ic.ac.uk/pcheung/teaching/DE1_EE/stores/sg90_datasheet.pdf")),(0,n.kt)("h2",{parentName:"blockquote",id:"cuidados"},"Cuidados")),(0,n.kt)("p",null,"O sistema que vamos discutir abaixo pode mudar dependendo da AirFrame que voc\xea selecionou para a sua aeronave na QGround. No nosso caso estamos utilizando o Generic Quadcopter. Nessa Airframe Temos acesso a 4 canais auxiliares: AUX1 at\xe9 AUX4. Dependendo da airframe que voc\xea utilizar voc\xea ter\xe1 acessoa outros canais auxiliares que poderi controlar. Voc\xea pode checar qual canal auxiliar voc\xea tem acesso olhando a documenta\xe7\xe3o da PX4: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.px4.io/main/en/airframes/airframe_reference.html"},"https://docs.px4.io/main/en/airframes/airframe_reference.html")),(0,n.kt)("h2",{id:"como-fazer"},"Como fazer?"),(0,n.kt)("p",null,"Primeiramente voc\xea deve arranjar um conector EXT-8P-V1.0  que conecte com a porta FMU PWM OUT da controladora de v\xf4o."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"controladora",src:a(7037).Z})," "),(0,n.kt)("p",null,"Lembrando que semprte que vamos fazer uma conex\xe3o de m\xf3dulos na controladora de v\xf4o, precisamos lembrar que o cabo vcc geralmente \xe9 o cabo mais a esquerda. N\xe3o inverta o vcc e o ground pois isso derreter\xe1 os cabos que est\xe3o sendo utilizados (eu fiz isso por sinal ...)"),(0,n.kt)("p",null,"Essas portas FMU PWM OUT s\xe3o como portas auxiliares nas quais iremos conectar servos que fazem os perif\xe9ricos do nosso drone. Existe outra porta que podmeos utilizar para controlar o PWM pela controladora, que \xe9 a IO PWM OUT. Mas essa porta \xe9 geralemnte usada para\no controle dos motores."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"conector",src:a(9247).Z})),(0,n.kt)("p",null,"nesse texto estarei me referindo a ",(0,n.kt)("strong",{parentName:"p"},"trilha")," quando estiver falando da sequ\xeancia de pinos que seguem na horizonal pelo conector, e ",(0,n.kt)("strong",{parentName:"p"},"canais auxiliares")," s\xe3o as sequ\xeancias de pinos que seguem na vertical. Nesse sentido, no conector EXT-8P-V1.0 temos 3 trilhas e 6 canais auxiliares."),(0,n.kt)("p",null,'Observe que nesse conetor podemos escolher de 1 a 6 portas para colocarmos o nosso servo. \xc9 importante lembrar que essas portas n\xe3o recebem energia da controladora de v\xf4o. Dessa forma, precisamos conecta-l\xe1s \xe0 alguma fonte de energia para que essa alimente o servo. Dessa forma, podemos utilizar um ubec que regular a tens\xe3o para 5V para conectarmos em um dos canais auxiliares RESPEITANDO A TRILHA QUE REPRESENTA O VCC E AQUELA QUE REPRESENTA O GND NO CONECTOR. A trilha GND \xe9 representada pelo sinal "-" e\na trilha vcc \xe9 representada pelo sinal "+". Ao conectarmos nosso Ubec nessa trilha, energizaremos toda a trilha, j\xe1 que os pinos de uma trilha est\xe3o todos em curto. '),(0,n.kt)("p",null,"Agora podemos conectar nosso servo em um dos canais auxiliares de modo que seu vcc se encontre com o vcc no conetor e seu gnd se\nencontre com o gnd do conector. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"conectorservo",src:a(4860).Z})),(0,n.kt)("p",null,"Agora ser\xe1 necess\xe1ria conectar alguns componentes no drone para n\xf3s podemos controlar o servo pela controladora de v\xf4o. Esses componentes s\xe3o:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A controladora de v\xf4o"),(0,n.kt)("li",{parentName:"ul"},"Receptor r\xe1dio controle "),(0,n.kt)("li",{parentName:"ul"},"bateria "),(0,n.kt)("li",{parentName:"ul"},"Ubec (para alimentar o servo)"),(0,n.kt)("li",{parentName:"ul"},"PMB (para alimentar a controladora de v\xf4o)")),(0,n.kt)("p",null,"Al\xe9m disso ser\xe1 necess\xe1ria uma telemetria conectada no computador do usu\xe1rio para fazer comunica\xe7\xe3o com o drone."),(0,n.kt)("p",null,"Agora iremos fazer com que um dos canais do controle controlem o giro do servo. Para isso vamos acessar\na ",(0,n.kt)("strong",{parentName:"p"},"QGroundControl"),". Acesse QGroundControl > Vehicle Setup > Parameters"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"QGround",src:a(7909).Z})),(0,n.kt)("p",null,"Quando acessado a p\xe1gina de par\xe2metros, Busque por ",(0,n.kt)("strong",{parentName:"p"},"RC_MAP_AUX"),". aparecer\xe3o 6 par\xe2metros variando de  RC_MAP_AUX1 ate RC_MAP_AUX6.\nEsse par\xe2metro refere-se aos canais auxiliares onde seu servo pode estar conectado. Escolha um desses par\xe2metros para ser utilizado para controlar o PWM de seu servo. Selecione algum canal do controle por onde ser\xe1 enviado o sinal de controle do servo. "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"enquanto est\xe1vamos tentando fazer esse sistema funcionar tentamos usar os canais de 1 a 4 para controlar o pwm. Esses usualmente s\xe3o utilizados para o controle do v\xf4o do drone. N\xc3O DEU CERTO! Ent\xe3o, busque urilizar os outros canais que apresentam posi\xe7\xf5es fixas ao inv\xe9s de um grande range de movimento (canal 6, por exemplo).\nAgora garanta que seu drone est\xe1 armado antes de testar o servo. Pela nossa experi\xeancia tentando fazer esse sistema funcionar, ",(0,n.kt)("strong",{parentName:"p"},"o servo s\xf3 resposndia \xe0 comandos do controle quando o drone estav armado"),".")),(0,n.kt)("p",null,"Agora temos duas possibilidades. Ou seu servo j\xe1 est\xe1 funcionando, ou voc\xea \xe9 um membro do hardware raiz cujos trabalhos nunca funcionam de primeira. Pelo \xfaltimo indiv\xedduo, vamos trabalhar um pouco em corrigir poss\xedveis erros. "),(0,n.kt)("h1",{id:"debugando"},"Debugando"),(0,n.kt)("h2",{id:"1---troque-seu-canal-auxiliar"},"1 - Troque seu canal auxiliar"),(0,n.kt)("p",null,'Provavalemente seu canal auxiliar que n\xe3o est\xe1 funcionando pode n\xe3o estar recebendo PWM. Dessa forma troque seu servo de canal auxiliar e teste-o de novo. N\xe3o se limite a conectar seu servo apenas no canal auxiliar que voc\xea designou no par\xe2metro RC_MAP_AUX da QGround. No nosso caso, nosso servo s\xf3 funcinou quando o conectamos no canal auxiliar 6 e colocamos para mandarmos PWM no RC_MAP_AUX2. Uma boa t\xe1tica seria definir todos os RC_MAP_AUX em um canal do controle s\xf3 e ir mudando seu servo de posi\xe7\xe3o at\xe9 encontrar a sa\xedda de pwm certa. Depois voc\xea pode ir colocando esses par\xe2metros um por um em "Unsigned" at\xe9 encotrar o par\xe2metro que realmente est\xe1 controlando seu servo. Se voc\xea teve problema com o canal auxiliar que conectou seu servo, provavelmente \xe9 porque seu conector ou se cabo est\xe3o quebrados. '),(0,n.kt)("h2",{id:"2---mude-alguns-par\xe2metros"},"2 - Mude alguns par\xe2metros"),(0,n.kt)("p",null,"Para o controle de PWM com a porta FMU PWM OUT temos mais alguns par\xe2metros que podem interferir no bom funcionamento do servo. Um exemplo de par\xe2metro que pode ser \xfatil checar \xe9 o ",(0,n.kt)("strong",{parentName:"p"},"PWM_AUX_RATE"),". Esse controla a frequ\xeancia de PWM que sai dos canais FMU PWM OUT.\nOutros 2 Par\xe2metros que podem ser importantes \xe9 o ",(0,n.kt)("strong",{parentName:"p"},"PWM_AUX_MAX")," ou ",(0,n.kt)("strong",{parentName:"p"},"PWM_AUX_MIN"),". Esses par\xe2metros controlam o valor m\xe1ximo e m\xednimo que o PWM pode atingir. Isso controlaria at\xe9 onde seu servo se mexeria quando recebe um sinal de PWM. No entanto (pelo menos no nosso caso, n\xe3o foi necess\xe1rio mudar esses par\xe2metros para o correto funcionamento do servo)"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"quando o servo estiver conectado no seu drone, ele pode sofrer alguns espasmos provavelmente gerados por ru\xeddos do sistema que chegam at\xe9 ele. Pela nossa experi\xeancia, eses espasmos n\xe3o foram suficientes para movimentar o servo, j\xe1 que n\xe3o representam sinais PWM. Portanto n\xe3o parece um poss\xedvel problema, mas tamb\xe9m n\xe3o fizemos uma investiga\xe7\xe3o a fundo"),(0,n.kt)("h1",{parentName:"blockquote",id:"refer\xeancias"},"Refer\xeancias")),(0,n.kt)("p",null,"Para fazer esse sistema nos baseamos no seguinte v\xeddeo: ",(0,n.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=A7JpgpJadKM"},"https://www.youtube.com/watch?v=A7JpgpJadKM")," do canal Alex Fache."))}m.isMDXComponent=!0},7909:function(e,o,a){o.Z=a.p+"assets/images/QGround-895879dd65dba8bf0286eb1fd738d0b2.jpeg"},9247:function(e,o,a){o.Z=a.p+"assets/images/conector-d50b213efb786cfd5ac522b2320f4dcb.jpeg"},4860:function(e,o,a){o.Z=a.p+"assets/images/conectorservo-d393deb7c34976f5a0b13fffa981f663.jpeg"},7037:function(e,o,a){o.Z=a.p+"assets/images/controladora-746af7312698a0d182c295a4403adb06.jpeg"}}]);