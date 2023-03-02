"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2682],{3905:function(e,o,r){r.d(o,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function a(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?a(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function s(e,o){if(null==e)return{};var r,n,t=function(e,o){if(null==e)return{};var r,n,t={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=n.createContext({}),u=function(e){var o=n.useContext(l),r=o;return e&&(r="function"==typeof e?e(o):i(i({},o),e)),r},c=function(e){var o=u(e.components);return n.createElement(l.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},d=n.forwardRef((function(e,o){var r=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=t,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:o},c),{},{components:r})):n.createElement(f,i({ref:o},c))}));function m(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3698:function(e,o,r){r.r(o),r.d(o,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(7462),t=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l=void 0,u={unversionedId:"Tello/introducao",id:"Tello/introducao",isDocsHomePage:!1,title:"introducao",description:"---",source:"@site/../docs/Tello/introducao.md",sourceDirName:"Tello",slug:"/Tello/introducao",permalink:"/knowledge_base/docs/Tello/introducao",editUrl:"https://github.com/SkyRats/knowledge_base/tree/main/docs/../docs/Tello/introducao.md",tags:[],version:"current",frontMatter:{},sidebar:"docssidebar",previous:{title:"Gazebo",permalink:"/knowledge_base/docs/Simuladores/Gazebo"},next:{title:"ROS1",permalink:"/knowledge_base/docs/Voo autonomo/ros1"}},c=[{value:"sidebar_position: 1",id:"sidebar_position-1",children:[],level:2},{value:"Auto-landing",id:"auto-landing",children:[],level:2}],p={toc:c};function d(e){var o=e.components,r=(0,t.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"sidebar_position-1"},"sidebar_position: 1"),(0,a.kt)("h1",{id:"solucionando-erros"},"Solucionando erros"),(0,a.kt)("p",null,"Essa p\xe1gina tem o intuito de mostrar as solu\xe7\xf5es encontradas para lidar com erros que ocorrem naturalmente com o uso do Tello com scripts em Python, ou fora do aplicativo."),(0,a.kt)("h2",{id:"auto-landing"},"Auto-landing"),(0,a.kt)("p",null,"Um dos problemas comuns que ocorriam era o Tello pousar inesperadamente, sem motivos aparentes. Isso pode acontecer por algumas raz\xf5es:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pouca bateria: O Tello come\xe7a a piscar vermelho (como descrito na tabela do manual) e pousa. Vale a pena sempre mandar printar a bateria para monitorar isso."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," self.battery = self.tello.get_battery()\n print(self.battery)\n \n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Muito tempo sem comandos: Quando o drone n\xe3o recebe um comando dentro de um determi-\nnado per\xedodo de tempo, ele pousa por motivos de seguran\xe7a (por exem-\nplo, quando seu programa caiu ou a conex\xe3o foi interrompida). Nesse\ncaso, o Tello pousa geralmente depois de 15 segundos sem receber co-\nmandos, piscando vermelho tamb \u0301em (mas \u201dsolid\u201d). Cuidado, portanto,\nse o seu c \u0301odigo tem time.sleep muito longo. Isso pode fazer o Tello pousar\nou perder conex \u0303ao. A pr\xf3pria biblioteca DJITelloPy tem seus pr\xf3prios\ntime.sleep embutidos, apesar de parecerem,  \xe1s vezes, insuficientes mesmo.\nA solu\xe7\xe3o encontrada para isso foi mandar um sinal de "command" para\no drone a cada 10 segundos (em segmentos do c\xf3digo que dependem de\ninput no computador e, por isso podem demorar, ou em loops que de-\npendem da detec\xe3o da m\xe3o para mandar comandos). Isso parece que\nresolveu o problema do Tello pousar automaticamente e n\xe3o prejudica\na seguran\xe7a, pois, se de fato perdermos a conex\xe3o com o Tello, ele ir\xe1\npousar automaticamente ap\xf3s 15 segundos. Veja abaixo a fun\xe7\xe3o:'))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'def keep_tello_alive(self):\n        # Manda sinal para o tello nao pousar. Criamos uma funcao, pois chamaremos em outra classe\n        if not SIMULATION:\n            self.tello.send_control_command("command")\n')))}d.isMDXComponent=!0}}]);