"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8537],{3905:function(e,o,r){r.d(o,{Zo:function(){return m},kt:function(){return p}});var a=r(7294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function n(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function i(e,o){if(null==e)return{};var r,a,t=function(e,o){if(null==e)return{};var r,a,t={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var u=a.createContext({}),c=function(e){var o=a.useContext(u),r=o;return e&&(r="function"==typeof e?e(o):s(s({},o),e)),r},m=function(e){var o=c(e.components);return a.createElement(u.Provider,{value:o},e.children)},l={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},d=a.forwardRef((function(e,o){var r=e.components,t=e.mdxType,n=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(r),p=t,f=d["".concat(u,".").concat(p)]||d[p]||l[p]||n;return r?a.createElement(f,s(s({ref:o},m),{},{components:r})):a.createElement(f,s({ref:o},m))}));function p(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var n=r.length,s=new Array(n);s[0]=d;var i={};for(var u in o)hasOwnProperty.call(o,u)&&(i[u]=o[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var c=2;c<n;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},819:function(e,o,r){r.r(o),r.d(o,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var a=r(7462),t=r(3366),n=(r(7294),r(3905)),s=["components"],i={},u="Como funciona um transistor",c={unversionedId:"Componentes Eletr\xf4nicos/Transistor",id:"Componentes Eletr\xf4nicos/Transistor",isDocsHomePage:!1,title:"Como funciona um transistor",description:"um tranbsistor \xe9 feito de tr\xeas terminais. A tens\xe3o aplicada para 2 terminais",source:"@site/../docs/Componentes Eletr\xf4nicos/Transistor.md",sourceDirName:"Componentes Eletr\xf4nicos",slug:"/Componentes Eletr\xf4nicos/Transistor",permalink:"/knowledge_base/docs/Componentes Eletr\xf4nicos/Transistor",editUrl:"https://github.com/SkyRats/knowledge_base/tree/main/docs/../docs/Componentes Eletr\xf4nicos/Transistor.md",tags:[],version:"current",frontMatter:{},sidebar:"docssidebar",previous:{title:"Sensores de dist\xe2ncia",permalink:"/knowledge_base/docs/Componentes Eletr\xf4nicos/Sensores de dist\xe2ncia"},next:{title:"Ardupilot for Skyrats",permalink:"/knowledge_base/docs/Firmwares/IntroArdupilot"}},m=[],l={toc:m};function d(e){var o=e.components,i=(0,t.Z)(e,s);return(0,n.kt)("wrapper",(0,a.Z)({},l,i,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"como-funciona-um-transistor"},"Como funciona um transistor"),(0,n.kt)("p",null,"um tranbsistor \xe9 feito de tr\xeas terminais. A tens\xe3o aplicada para 2 terminais\nde um transistor define se no terceiro terminal passar\xe1 corrente ou n\xe3o"),(0,n.kt)("p",null,"Uma forma muito \xfatil de utilizar um transistor \xe9 utiliza-lo como chave de\num sistema. "),(0,n.kt)("h1",{id:"transistor-como-chave"},"Transistor como Chave"),(0,n.kt)("p",null,"Podemos utilizar um transistor npn (como um BC337) para servir como chave\npara o sistema. O seu transistor pode estar naturalmente em curto ou estar\ncom um circuito fechado.... Isso vai depender da aplica\xe7\xe3o que voc\xea precisa.\nNesse documento irei utilizar como exemplo um transistor de circuito aberto\nquando n\xe3o passamos nenhuma corrente nele."),(0,n.kt)("p",null,'Para controlar o "liga e desliga" do transistor basta ligar a Base em uma\ntens\xe3o. Geralmente, a tens\xe3o da GPIO de microcontroladores s\xe3o o suficiente\npara provocar o efeito liga e desliga que buscamos, mas isso pode n\xe3o necessariamente\nser verdade, e, nesse caso, ser\xe1 necess\xe1rio aumentar a tens\xe3o sobre a base para\nprovocar algum efeito no seu transistor. Na verdade, o transitor serve para ligar e\ndesligar com pot\xeancias bem baixas. '),(0,n.kt)("p",null,"Basicamente, o transistor liga ou desliga quando existe uma tens\xe3o consider\xe1vel entre a\nbase e o emissor. Portanto, se eu conectar minha base em uma porta que tem tens\xe3o de 1.8V, e\no emissor no ground, teremos uma tens\xe3o de 1.8V no transitor, o que ser\xe1 o suficiente para lig\xe1-lo ou deslig\xe1-lo.\nNo entanto, se eu coloco um potencial muito grande no emissor e muito baixa na base, meu transitor n\xe3o funcionar\xe1. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Transistor",src:r(4389).Z})),(0,n.kt)("p",null,"Aqui est\xe1 uma imagem representando um circuito com transitor sendo utilizado como chave. \xc0 esquerda est\xe1 o circuito el\xe9ttrico\ne a direita est\xe1 o que ele representa (Chave fechada ou aberta). "),(0,n.kt)("h1",{id:"exemplo-controle-de-um-buzzer-com-a-odroid-xu4"},"Exemplo: Controle de um buzzer com a Odroid xu4"),(0,n.kt)("p",null,"as portas GPIO da Odroid s\xf3 conseguem mandar uma tens\xe3o de 1.8V. No entanto,\npara  que um buzzer apite com intensidade adequada, \xe9 necess\xe1rio mandar uma\ntens\xe3o 5V para o componente. "),(0,n.kt)("p",null,'Para resolver isso, vamos fazer um sistema de transitor que controla o tempo\nque o buzzer ficar\xe1 "ligado" com uma pot\xeancia de 5V.'),(0,n.kt)("p",null,"A ideia desse circuito \xe9 utilizar um transistor (BC337) para abrir e fechar o circuito\nque liga ao Buzzer ao ground da placa."),(0,n.kt)("p",null,"Enquanto o circuito estiver aberto, n\xe3o passar\xe1 corrente pelo buzzer e ele n\xe3o apitar\xe1."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Buzzer",src:r(4278).Z})),(0,n.kt)("p",null,"Nessa imagem podemos ver o esquema de conex\xf5es que pode ser realizado para atingir\no resultado que queremos. Aqui utilizei um Ardu\xedno apenas para a did\xe1tica, mas podemos fazer\nas mesma liga\xe7\xf5es na Odroid. "),(0,n.kt)("p",null,"Olhando o circuito da esquerda para a direita, o fio preto conecta o buzzer no 5V. depois conectamos\no transistor em s\xe9rie com o terminal que seria o ground do buzzer, e conectamos no base (fio azul) uma das portas do ardu\xedno que mandar\xe1 um sinal\npara que o circuito seja fechado. Esse sinal \xe9, basicamente, uma tens\xe3o aplicada pela placa Ardu\xedno. O fio Vermelho\nliga o ground do buzzer ao ground da placa. "),(0,n.kt)("p",null,"Mandando um sinal para a base do transistor, o sistema fecha e o buzzer apita. Quando retiramos esse sinal, o circuito abre\ne o buzzer para de apitar. "),(0,n.kt)("p",null,"OBS: Importante lembrar que o bjt n\xe3o \xe9 ideal para fazer chaveamento. Isso porque esse componente consome muita corrente. O ideal \xe9\nclocar um resitor na base para garantir que o transistor n\xe3o est\xe1 puxando muita corrente. Para fazer o chaveamento ideal, veja a documenta\xe7\xe3o sobre Mosfet."))}d.isMDXComponent=!0},4278:function(e,o,r){o.Z=r.p+"assets/images/Buzzer-8a9d7b31db5df040da7616aaa0c5a9c9.png"},4389:function(e,o,r){o.Z=r.p+"assets/images/Transistor-df14d8abb67badbb01ccbbaf4332b4af.png"}}]);