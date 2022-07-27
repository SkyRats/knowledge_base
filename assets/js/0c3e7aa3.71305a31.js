"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1847],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?o.createElement(b,s(s({ref:t},c),{},{components:n})):o.createElement(b,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},677:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],i={},l="Realsense T265",u={unversionedId:"Componentes - M\xf3dulos/Realsense_T265",id:"Componentes - M\xf3dulos/Realsense_T265",isDocsHomePage:!1,title:"Realsense T265",description:"Escrito por Jo\xe3o Pedro S.. \xdaltima atualiza\xe7\xe3o: 27/07/2022",source:"@site/../docs/Componentes - M\xf3dulos/Realsense_T265.md",sourceDirName:"Componentes - M\xf3dulos",slug:"/Componentes - M\xf3dulos/Realsense_T265",permalink:"/knowledge_base/docs/Componentes - M\xf3dulos/Realsense_T265",editUrl:"https://github.com/SkyRats/knowledge_base/tree/main/docs/../docs/Componentes - M\xf3dulos/Realsense_T265.md",tags:[],version:"current",frontMatter:{},sidebar:"docssidebar",previous:{title:"RPLidar 360 S1",permalink:"/knowledge_base/docs/Componentes - M\xf3dulos/RPLIDARS1360"},next:{title:"Configura\xe7\xe3o dos R\xe1dio Controles (Taranis Q X7)",permalink:"/knowledge_base/docs/Componentes - M\xf3dulos/TaranisQX7"}},c=[{value:"Requisitos",id:"requisitos",children:[],level:2},{value:"Instala\xe7\xe3o da librealsense2",id:"instala\xe7\xe3o-da-librealsense2",children:[],level:2},{value:"Instala\xe7\xe3o do VIO",id:"instala\xe7\xe3o-do-vio",children:[],level:2}],p={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"realsense-t265"},"Realsense T265"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Escrito por ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/J0t4py"},"Jo\xe3o Pedro S."),". \xdaltima atualiza\xe7\xe3o: 27/07/2022")," ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Essa documenta\xe7\xe3o ainda est\xe1 em progresso")),(0,r.kt)("p",null,"Esse texto tem como int\xfaito ensinar a instalar os drivers para a tracking camera Realsense T265 e utiliz\xe1-la em conjunto com ROS e a VIO para gerar um sistema de posicionamento inercial para um drone."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A instala\xe7\xe3o foi feita em uma Odroid, note que os processos aqui listados podem variar caso seja utilziado outro SBC. Para informa\xe7\xf5es mais gen\xe9ricas de instala\xe7\xe3o leia o tutorial de ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/i2o3dlimited/librealsense2/blob/master/doc/installation.md"},"como buildar a biblioteca da source"))),(0,r.kt)("h2",{id:"requisitos"},"Requisitos"),(0,r.kt)("p",null,"Antes de baixar a biblioteca \xe9 necess\xe1rio instalar uma distro do ROS e instalar o mavros em algum workspace. "),(0,r.kt)("h2",{id:"instala\xe7\xe3o-da-librealsense2"},"Instala\xe7\xe3o da librealsense2"),(0,r.kt)("p",null,"Escreva terminal: ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo apt-get install ros-noetic-realsense2-camera")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Para utilizar outra disribui\xe7\xe3o do ROS apenas substitua o noetic pela distro desejada. Apenas tenha em mente que todo o processo foi executado utilizando a Noetic, portanto n\xe3o testamos outras distribui\xe7\xf5es.")),(0,r.kt)("h2",{id:"instala\xe7\xe3o-do-vio"},"Instala\xe7\xe3o do VIO"),(0,r.kt)("p",null,"Para instalar o VIO execute o seguinte c\xf3digo dentro do workspace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Auterion/VIO.git\ncatkin build px4_realsense_bridge\n\n\n## Refer\xeancias\n")))}d.isMDXComponent=!0}}]);