"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5818],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(o),d=n,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return o?r.createElement(k,s(s({ref:t},p),{},{components:o})):r.createElement(k,s({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5812:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),s=["components"],i={},l="CCS811",c={unversionedId:"Componentes Eletr\xf4nicos/CCS811",id:"Componentes Eletr\xf4nicos/CCS811",isDocsHomePage:!1,title:"CCS811",description:"Escrito por Felipe Namour. \xdaltima atualiza\xe7\xe3o: 15/08/2022",source:"@site/../docs/Componentes Eletr\xf4nicos/CCS811.md",sourceDirName:"Componentes Eletr\xf4nicos",slug:"/Componentes Eletr\xf4nicos/CCS811",permalink:"/knowledge_base/docs/Componentes Eletr\xf4nicos/CCS811",editUrl:"https://github.com/SkyRats/knowledge_base/tree/main/docs/../docs/Componentes Eletr\xf4nicos/CCS811.md",tags:[],version:"current",frontMatter:{},sidebar:"docssidebar",previous:{title:"Buzzer",permalink:"/knowledge_base/docs/Componentes Eletr\xf4nicos/Buzzer"},next:{title:"Como funciona um transistor",permalink:"/knowledge_base/docs/Componentes Eletr\xf4nicos/Transistor"}},p=[{value:"Conex\xe3o",id:"conex\xe3o",children:[],level:2},{value:"C\xf3digo",id:"c\xf3digo",children:[],level:2},{value:"Refer\xeancias",id:"refer\xeancias",children:[],level:2}],u={toc:p};function m(e){var t=e.components,i=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ccs811"},"CCS811"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Escrito por ",(0,a.kt)("a",{parentName:"em",href:"https://github.com/FeCLN"},"Felipe Namour"),". \xdaltima atualiza\xe7\xe3o: 15/08/2022"))),(0,a.kt)("p",null,"\xc9 um sensor para detectar nive\xeds de CO2, ele \xe9 I2C, e aqui vamos conectar e usar ele em uma Odroid XU4 apenas para pegar o valor de ppm de CO2 do ambiente"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CCS8111",src:o(6128).Z})),(0,a.kt)("h2",{id:"conex\xe3o"},"Conex\xe3o"),(0,a.kt)("p",null,"Para fazer a conex\xe3o do sensor, fazemos da seguinte forma:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Pino VCC no pino 29 (1.8V)")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Pino GND no pino 28 (GND)")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Pino SCL no pino 14 (I2C_1.SCL)")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Pino SDA no pino 16 (I2C_1.SDA)")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Pino WAK no pino 2 (GND)")),(0,a.kt)("p",null,"O pinout da Odroid XU4:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pinout da ODROID",src:o(1256).Z})),(0,a.kt)("h2",{id:"c\xf3digo"},"C\xf3digo"),(0,a.kt)("p",null,"O c\xf3digo \xe9 dividido em dois scripts, o primeiro, start.sh tem a fun\xe7\xe3o de iniciar o sensor, ou seja, tirar ele do bootmode e colocar no modo de medi\xe7\xe3o a cada 1s."),(0,a.kt)("p",null,"Para isso precisamos primeiro ler o registrador de status(0x00), e fazemos isso assim:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"i2cget -y 0 0x5a 0x00;")),(0,a.kt)("p",null,"Caso inicie sem erro, ele retornar\xe1 0x10"),(0,a.kt)("p",null," Agora para tirar o sensor do boot mode, mandamos um valor vazio para ser escrito no registrador de start(0xF4):"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"i2cset -y -a 0 0x5a 0xF4 c;")),(0,a.kt)("p",null," Ap\xf3s isso precisamos setar o modo de funcionamento no registrador measurement mode(0x01):"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"i2cset -y -a 0 0x5a 0x01 0x10;")),(0,a.kt)("p",null," Assim, teremos nosso sensor realizando as medidas e colocando as em valor de ppm ja calculada no registrador 0x03"),(0,a.kt)("p",null," Para retornarmos esses valores medidos utilizamos um script em python para ser integr\xe1vel mais facilmente com outros c\xf3digos, mas de mesma forma, utilizamos comandos da biblioteca i2c-tools, oque para utilizarmos em python fazemos uso da biblioteca subprocess"),(0,a.kt)("p",null,"Exemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import subprocess\nrawData = subprocess.Popen("i2cget -y 0 0x5a 0x03 w;", shell=True, stdout=subprocess.PIPE).stdout).read().decode()\n')),(0,a.kt)("p",null,'Para retirarmos os valores de PPM de CO2 do sensor, acessamos o registrador 0x03, por\xe9m lemos 2 bytes ao inv\xe9z de 4 utilizando o "mode word(w)":'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"i2cget -y 0 0x5a 0x03 w;")),(0,a.kt)("p",null,"tendo isso, precisamos ordenar os bits da seguinte forma:"),(0,a.kt)("p",null,"b4b3b2b1 ","\u2192"," b3b4b1b2"),(0,a.kt)("p",null,"Assim, \xe9 so realizar a transforma\xe7\xe3o de hexadecimal para decimal e teremos o valor de PPM de CO2"),(0,a.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://cdn.sparkfun.com/assets/learn_tutorials/1/4/3/CCS811_Datasheet-DS000459.pdf"},"Datasheet do sensor"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.mankier.com/package/i2c-tools"},"Biblioteca i2c tools - documenta\xe7\xe3o")))))}m.isMDXComponent=!0},6128:function(e,t,o){t.Z=o.p+"assets/images/ccs811-fc869d15c8040775197795daf7b16d48.jpg"},1256:function(e,t,o){t.Z=o.p+"assets/images/xu4_con10-e3ce4f05430da9ce1b15721c33cbf587.png"}}]);