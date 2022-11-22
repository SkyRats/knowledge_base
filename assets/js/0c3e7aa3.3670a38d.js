"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1847],{3905:function(e,o,t){t.d(o,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function r(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?r(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,a,n=function(e,o){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var o=a.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},u=function(e){var o=c(e.components);return a.createElement(l.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},d=a.forwardRef((function(e,o){var t=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(f,s(s({ref:o},u),{},{components:t})):a.createElement(f,s({ref:o},u))}));function m(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=t.length,s=new Array(r);s[0]=d;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},677:function(e,o,t){t.r(o),t.d(o,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=t(7462),n=t(3366),r=(t(7294),t(3905)),s=["components"],i={},l="Realsense T265",c={unversionedId:"Componentes - M\xf3dulos/Realsense_T265",id:"Componentes - M\xf3dulos/Realsense_T265",isDocsHomePage:!1,title:"Realsense T265",description:"Escrito por Jo\xe3o Pedro S.. \xdaltima atualiza\xe7\xe3o: 22/11/2022",source:"@site/../docs/Componentes - M\xf3dulos/Realsense_T265.md",sourceDirName:"Componentes - M\xf3dulos",slug:"/Componentes - M\xf3dulos/Realsense_T265",permalink:"/knowledge_base/docs/Componentes - M\xf3dulos/Realsense_T265",editUrl:"https://github.com/SkyRats/knowledge_base/tree/main/docs/../docs/Componentes - M\xf3dulos/Realsense_T265.md",tags:[],version:"current",frontMatter:{},sidebar:"docssidebar",previous:{title:"RPLidar 360 S1",permalink:"/knowledge_base/docs/Componentes - M\xf3dulos/RPLIDARS1360"},next:{title:"Configura\xe7\xe3o dos R\xe1dio Controles (Taranis Q X7)",permalink:"/knowledge_base/docs/Componentes - M\xf3dulos/TaranisQX7"}},u=[{value:"Instala\xe7\xe3o da librealsense2",id:"instala\xe7\xe3o-da-librealsense2",children:[],level:2},{value:"Instala\xe7\xe3o do VisionToMavros",id:"instala\xe7\xe3o-do-visiontomavros",children:[],level:2},{value:"Configure a rota\xe7\xe3o",id:"configure-a-rota\xe7\xe3o",children:[],level:2},{value:"Configure os par\xe2metros",id:"configure-os-par\xe2metros",children:[{value:"A Realsense n\xe3o \xe9 detectada",id:"a-realsense-n\xe3o-\xe9-detectada",children:[],level:3},{value:"A realsense para de postar no t\xf3pico",id:"a-realsense-para-de-postar-no-t\xf3pico",children:[],level:3}],level:2},{value:"Refer\xeancias",id:"refer\xeancias",children:[],level:2}],p={toc:u};function d(e){var o=e.components,t=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"realsense-t265"},"Realsense T265"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"Escrito por ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/J0t4py"},"Jo\xe3o Pedro S."),". \xdaltima atualiza\xe7\xe3o: 22/11/2022")," ")),(0,r.kt)("p",null,"Esse texto tem como int\xfaito ensinar a instalar os drivers para a tracking camera Realsense T265 e utiliz\xe1-la em conjunto com ROS e a VisionToMavros para gerar um sistema de posicionamento inercial para um drone."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A instala\xe7\xe3o foi feita em uma Raspberry , note que os processos aqui listados podem variar caso seja utilziado outro SBC. Para informa\xe7\xf5es mais gen\xe9ricas de instala\xe7\xe3o leia o tutorial de ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/i2o3dlimited/librealsense2/blob/master/doc/installation.md"},"como buildar a biblioteca da source"),"\nDocumenta\xe7\xe3o ainda em execu\xe7\xe3o"),(0,r.kt)("h2",{parentName:"blockquote",id:"requisitos"},"Requisitos")),(0,r.kt)("p",null,"Antes de baixar a biblioteca \xe9 necess\xe1rio instalar uma distro do ROS e instalar o mavros em algum workspace. "),(0,r.kt)("h2",{id:"instala\xe7\xe3o-da-librealsense2"},"Instala\xe7\xe3o da librealsense2"),(0,r.kt)("p",null,"Utilize o guia de como buildar da source acima. Na hora de rodar o CMAKE adicione as seguintes flags:\n-DBUILD_NETWORK_DEVICE=ON\n-DFORCE_RSUSB_BACKEND=ON"),(0,r.kt)("h2",{id:"instala\xe7\xe3o-do-visiontomavros"},"Instala\xe7\xe3o do VisionToMavros"),(0,r.kt)("p",null,"Para instalar o VisionToMavros execute o seguinte c\xf3digo dentro do workspace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git",metastring:"clone https://github.com/hoangthien94/vision_to_mavros.git",clone:!0,"https://github.com/hoangthien94/vision_to_mavros.git":!0},'cd ..\ncatkin_make\nsource ~/.bashrc\necho "source ~/catkin_ws/devel/setup.bash"\n')),(0,r.kt)("h1",{id:"como-configurar-a-realsense"},"Como configurar a Realsense"),(0,r.kt)("p",null,"Desabilite o magnetometro"),(0,r.kt)("h2",{id:"configure-a-rota\xe7\xe3o"},"Configure a rota\xe7\xe3o"),(0,r.kt)("h2",{id:"configure-os-par\xe2metros"},"Configure os par\xe2metros"),(0,r.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"a-realsense-n\xe3o-\xe9-detectada"},"A Realsense n\xe3o \xe9 detectada"),(0,r.kt)("p",null,"-Verifique se o mavros est\xe1 conectando com rostopic echo, caso n\xe3o esteja aparecendo os par\xe2metros que come\xe7am com camera verifique o arquivo bridge.launch e o bridge_mavros.launch",(0,r.kt)("br",{parentName:"p"}),"\n","-Tente mexer no cabo da realsense, as vezes ele fica meio solto e n\xe3o \xe9 detectado."),(0,r.kt)("h3",{id:"a-realsense-para-de-postar-no-t\xf3pico"},"A realsense para de postar no t\xf3pico"),(0,r.kt)("p",null,"-Esse erro ocorre por conta de alimenta\xe7\xe3o da Raspberry Pi, reinicia o servi\xe7o. Estamos buscando uma solu\xe7\xe3o definitiva para esse problema."),(0,r.kt)("h2",{id:"refer\xeancias"},"Refer\xeancias"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Auterion/VIO"},"https://github.com/Auterion/VIO"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IntelRealSense/realsense-ros"},"https://github.com/IntelRealSense/realsense-ros"),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.px4.io/v1.12/en/computer_vision/visual_inertial_odometry.html"},"https://docs.px4.io/v1.12/en/computer_vision/visual_inertial_odometry.html")))}d.isMDXComponent=!0}}]);