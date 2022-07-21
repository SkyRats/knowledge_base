"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[752],{3905:function(e,r,a){a.d(r,{Zo:function(){return l},kt:function(){return d}});var o=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function t(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?t(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function i(e,r){if(null==e)return{};var a,o,n=function(e,r){if(null==e)return{};var a,o,n={},t=Object.keys(e);for(o=0;o<t.length;o++)a=t[o],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(o=0;o<t.length;o++)a=t[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=o.createContext({}),c=function(e){var r=o.useContext(u),a=r;return e&&(a="function"==typeof e?e(r):s(s({},r),e)),a},l=function(e){var r=c(e.components);return o.createElement(u.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var a=e.components,n=e.mdxType,t=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||t;return a?o.createElement(f,s(s({ref:r},l),{},{components:a})):o.createElement(f,s({ref:r},l))}));function d(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var t=a.length,s=new Array(t);s[0]=p;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<t;c++)s[c]=a[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8156:function(e,r,a){a.r(r),a.d(r,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var o=a(7462),n=a(3366),t=(a(7294),a(3905)),s=["components"],i={},u="Como funciona um transistor",c={unversionedId:"Hardware/Componentes/Transistor",id:"Hardware/Componentes/Transistor",isDocsHomePage:!1,title:"Como funciona um transistor",description:"um tranbsistor \xe9 feito de tr\xeas terminais. A tens\xe3o aplicada para 2 terminais",source:"@site/../docs/Hardware/Componentes/Transistor.md",sourceDirName:"Hardware/Componentes",slug:"/Hardware/Componentes/Transistor",permalink:"/knowledge_base/docs/Hardware/Componentes/Transistor",editUrl:"https://github.com/SkyRats/knowledge_base/tree/main/docs/../docs/Hardware/Componentes/Transistor.md",tags:[],version:"current",frontMatter:{},sidebar:"docssidebar",previous:{title:"RPLidar 360 S1",permalink:"/knowledge_base/docs/Hardware/Componentes/RPLIDARS1360"},next:{title:"Como instalar o driver para o TL-WN 823N no Ubuntu Mate",permalink:"/knowledge_base/docs/Hardware/Componentes/tlwn823n"}},l=[],m={toc:l};function p(e){var r=e.components,i=(0,n.Z)(e,s);return(0,t.kt)("wrapper",(0,o.Z)({},m,i,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"#Como funciona um transistor"),(0,t.kt)("p",null,"um tranbsistor \xe9 feito de tr\xeas terminais. A tens\xe3o aplicada para 2 terminais\nde um transistor define se no terceiro terminal passar\xe1 corrente ou n\xe3o"),(0,t.kt)("p",null,"Uma forma muito \xfatil de utilizar um transistor \xe9 utiliza-lo como chave de\num sistema. "),(0,t.kt)("p",null,"#Transistor como Chave "),(0,t.kt)("p",null,"Podemos utilizar um transistor npn (como um BC337) para servir como chave\npara o sistema. O seu transistor pode estar naturalmente em curto ou estar\ncom um circuito fechado.... Isso vai depender da aplica\xe7\xe3o que voc\xea precisa.\nNesse documento irei utilizar como exemplo um transistor de circuito aberto\nquando n\xe3o passamos nenhuma corrente nele."),(0,t.kt)("p",null,'Para controlar o "liga e desliga" do transistor basta ligar a Base em uma\ntens\xe3o. Geralmente, a tens\xe3o da GPIO de microcontroladores s\xe3o o suficiente\npara provocar o efeito liga e desliga que buscamos, mas isso pode n\xe3o necessariamente\nser verdade, e, nesse caso, ser\xe1 necess\xe1rio aumentar a tens\xe3o sobre a base para\nprovocar algum efeito no seu transistor.'),(0,t.kt)("p",null,"#Exemplo: Controle de um buzzer com a Odroid xu4"),(0,t.kt)("p",null,"as portas GPIO da Odroid s\xf3 conseguem mandar uma tens\xe3o de 1.8V. No entanto,\npara  que um buzzer apite com intensidade adequada, \xe9 necess\xe1rio mandar uma\ntens\xe3o 5V para o componente. "),(0,t.kt)("p",null,'Para resolver isso, vamos fazer um sistema de transitor que controla o tempo\nque o buzzer ficar\xe1 "ligado" com uma pot\xeancia de 5V.'),(0,t.kt)("p",null,"A ideia desse circuito \xe9 utilizar um transistor (BC337) para abrir e fechar o circuito\nque liga ao Buzzer ao ground da placa."),(0,t.kt)("p",null,"Enquanto o circuito estiver aberto, n\xe3o passar\xe1 corrente pelo buzzer e ele n\xe3o apitar\xe1."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Buzzer",src:a(6298).Z})),(0,t.kt)("p",null,"Nessa imagem podemos ver o esquema de conex\xf5es que pode ser realizado para atingir\no resultado que queremos. Aqui utilizei um Ardu\xedno apenas para a did\xe1tica, mas podemos fazer\nas mesma liga\xe7\xf5es na Odroid. "),(0,t.kt)("p",null,"Olhando o circuito da esquerda para a direita, o fio preto conecta o buzzer no 5V. depois conectamos\no transistor em s\xe9rie com o terminal que seria o ground do buzzer, e conectamos no base (fio azul) uma das portas do ardu\xedno que mandar\xe1 um sinal\npara que o circuito seja fechado. Esse sinal \xe9, basicamente, uma tens\xe3o aplicada pela placa Ardu\xedno. O fio Vermelho\nliga o ground do buzzer ao ground da placa. "),(0,t.kt)("p",null,"Mandando um sinal para a base do transistor, o sistema fecha e o buzzer apita. Quando retiramos esse sinal, o circuito abre\ne o buzzer para de apitar."))}p.isMDXComponent=!0},6298:function(e,r,a){r.Z=a.p+"assets/images/Buzzer-8a9d7b31db5df040da7616aaa0c5a9c9.png"}}]);