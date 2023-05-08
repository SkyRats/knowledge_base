"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[3611],{3905:function(e,o,t){t.d(o,{Zo:function(){return m},kt:function(){return k}});var a=t(7294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,a,r=function(e,o){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),p=function(e){var o=a.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):i(i({},o),e)),t},m=function(e){var o=p(e.components);return a.createElement(d.Provider,{value:o},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},u=a.forwardRef((function(e,o){var t=e.components,r=e.mdxType,n=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=p(t),u=r,k=s["".concat(d,".").concat(u)]||s[u]||c[u]||n;return t?a.createElement(k,i(i({ref:o},m),{},{components:t})):a.createElement(k,i({ref:o},m))}));function k(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=t.length,i=new Array(n);i[0]=u;var l={};for(var d in o)hasOwnProperty.call(o,d)&&(l[d]=o[d]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},729:function(e,o,t){t.r(o),t.d(o,{contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m}});var a=t(7462),r=t(3366),n=(t(7294),t(3905)),i=["components"],l={},d="ROS2",p={unversionedId:"Voo autonomo/ros2",id:"Voo autonomo/ros2",isDocsHomePage:!1,title:"ROS2",description:"Guia simples de como rodar um script offboard em um drone com ROS2.",source:"@site/../docs/Voo autonomo/ros2.md",sourceDirName:"Voo autonomo",slug:"/Voo autonomo/ros2",permalink:"/knowledge_base/docs/Voo autonomo/ros2",editUrl:"https://github.com/SkyRats/knowledge_base/tree/main/docs/../docs/Voo autonomo/ros2.md",tags:[],version:"current",frontMatter:{},sidebar:"docssidebar",previous:{title:"ROS1",permalink:"/knowledge_base/docs/Voo autonomo/ros1"},next:{title:"Introdu\xe7\xe3o",permalink:"/knowledge_base/docs/old/intro"}},m=[{value:"Antes de tudo...",id:"antes-de-tudo",children:[{value:"No computador de bordo:",id:"no-computador-de-bordo",children:[],level:3}],level:2},{value:"Voo offboard",id:"voo-offboard",children:[],level:2},{value:"Voo onboard",id:"voo-onboard",children:[],level:2}],s={toc:m},c="wrapper";function u(e){var o=e.components,t=(0,r.Z)(e,i);return(0,n.kt)(c,(0,a.Z)({},s,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ros2"},"ROS2"),(0,n.kt)("p",null,"Guia simples de como rodar um script offboard em um drone com ROS2. "),(0,n.kt)("h2",{id:"antes-de-tudo"},"Antes de tudo..."),(0,n.kt)("p",null,"Considerando que o drone deve estar pronto para voar em quesitos de Hardware, \xe9 importante lembrar de deixar o Software pronto para o v\xf4o. "),(0,n.kt)("h3",{id:"no-computador-de-bordo"},"No computador de bordo:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Depend\xeancias obrigat\xf3rias")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ROS2"),(0,n.kt)("li",{parentName:"ul"},"MAVROS2"),(0,n.kt)("li",{parentName:"ul"},"Python 3"),(0,n.kt)("li",{parentName:"ul"},"Reposit\xf3rios clonados:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SkyRats/WifiConnection"},"WifiConnection")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/SkyRats/mavbase2"},"Mavbase2"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Demais depend\xeancias")),(0,n.kt)("p",null,"Lembre-se de checar quais s\xe3o as bibliotecas que seu c\xf3digo importa e tenha certeza de ter instalado todas elas no computador de bordo"),(0,n.kt)("h2",{id:"voo-offboard"},"Voo offboard"),(0,n.kt)("p",null,"O v\xf4o offboard \xe9 feito de forma que o script da miss\xe3o roda no computador de bordo do drone, e n\xf3s nos conectamos a ele remotamente por ssh. "),(0,n.kt)("p",null,"Para realizar o v\xf4o offboard:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Gerar um hotspot no computador que n\xe3o \xe9 embarcado no drone: ",(0,n.kt)("inlineCode",{parentName:"p"},"./WIFICONNECTION start")," (dentro do reposit\xf3rio do wifi connection)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Conectar pelo computador de bordo no hotspot chamado ",(0,n.kt)("em",{parentName:"p"},"SkyratsHotspot")," (a senha \xe9 ",(0,n.kt)("em",{parentName:"p"},"voadronezinho"),")"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Lembre-se de checar se o computador de bordo est\xe1 com um adaptador de wifi)"),(0,n.kt)("li",{parentName:"ul"},"Para facilitar basta rodar ",(0,n.kt)("inlineCode",{parentName:"li"},"source firstofall.sh")," e ",(0,n.kt)("inlineCode",{parentName:"li"},"./connection")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Conectar no computador de bordo por ssh"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ache o ip do computador de bordo na rede local com ",(0,n.kt)("inlineCode",{parentName:"li"},"nnmap -sP 10.42.0.0/24")),(0,n.kt)("li",{parentName:"ul"},"Se conecte com ",(0,n.kt)("inlineCode",{parentName:"li"},"sudo ssh odroid@10.41.0.x")," (Ser\xe1 preciso rodar esse comando em cada aba do terminal a ser usada)"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Checar os protocolos de seguran\xe7a do drone")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Checar se ele precisa ser calibrado")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Checar se ele est\xe1 armando normalmente"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Se n\xe3o estiver, voc\xea pode olhar na QGroundControl para saber que erro est\xe1 sendo retornado"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rodar ",(0,n.kt)("inlineCode",{parentName:"p"},"ros2 launch mavbase2 px4_usb.launch.py")," em um dos terminais do computador de bordo")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Rodar o script de teste em outro terminal do computador de bordo"))),(0,n.kt)("h2",{id:"voo-onboard"},"Voo onboard"),(0,n.kt)("p",null,"O v\xf4o onboard \xe9 feito de forma que o script da miss\xe3o roda em um computador que n\xe3o \xe9 embarcado no drone, ou seja, ele roda \xe0 dist\xe2ncia. Para "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Conectar uma antena de telemetria no computador"),(0,n.kt)("li",{parentName:"ol"},"Checar o endere\xe7o da porta USB na qual a telemetria est\xe1 conectada\n/dev/",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"- Ao acessar essa pasta, deve aparecer algum nome em cor de destaque, o que significa que \xe9 uma porta ativa\n- Voc\xea tamb\xe9m pode rodar o comando ```demesg``` no terminal, que mostra as conex\xf5es recentes feitas no computador\n"))),(0,n.kt)("li",{parentName:"ol"},"Indicar esse endere\xe7o no arquivo ",(0,n.kt)("inlineCode",{parentName:"li"},"config/px4_telemetry.yaml")," da mavbase2",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Voc\xea pode editar o arquivo usando o comando ",(0,n.kt)("inlineCode",{parentName:"li"},"sudo nano px4_telemetry.yaml")),(0,n.kt)("li",{parentName:"ul"},"Edite a seguinte linha:\n",(0,n.kt)("inlineCode",{parentName:"li"},"fcu_url: /dev/ttyUSB0:57600")),(0,n.kt)("li",{parentName:"ul"},"Substitua a indica\xe7\xe3o da porta ",(0,n.kt)("inlineCode",{parentName:"li"},"USB0")," pela porta ",(0,n.kt)("inlineCode",{parentName:"li"},"USBX")," correspondente a que a telemetria est\xe1 conectada"))),(0,n.kt)("li",{parentName:"ol"},"Checar os protocolos de seguran\xe7a do drone"),(0,n.kt)("li",{parentName:"ol"},"Checar se ele precisa ser calibrado"),(0,n.kt)("li",{parentName:"ol"},"Checar se ele est\xe1 armando normalmente",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Se n\xe3o estiver, voc\xea pode olhar na QGroundControl para saber que erro est\xe1 sendo retornado"))),(0,n.kt)("li",{parentName:"ol"},"Agora \xe9 s\xf3 rodar ",(0,n.kt)("inlineCode",{parentName:"li"},"ros2 launch mavbase2 px4_telemetry.launch.py")," em um dos terminais do computador"),(0,n.kt)("li",{parentName:"ol"},"E, por fim, rodar o script de teste em outro terminal")))}u.isMDXComponent=!0}}]);