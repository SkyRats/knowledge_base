"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[5450],{3905:function(e,n,o){o.d(n,{Zo:function(){return d},kt:function(){return f}});var t=o(7294);function r(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function i(e,n){if(null==e)return{};var o,t,r=function(e,n){if(null==e)return{};var o,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||(r[o]=e[o]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)o=a[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):s(s({},n),e)),o},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(o),f=r,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return o?t.createElement(m,s(s({ref:n},d),{},{components:o})):t.createElement(m,s({ref:n},d))}));function f(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},2626:function(e,n,o){o.r(n),o.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var t=o(7462),r=o(3366),a=(o(7294),o(3905)),s=["components"],i={},l="Outras funcionalidades",c={unversionedId:"Tello/extras",id:"Tello/extras",isDocsHomePage:!1,title:"Outras funcionalidades",description:"Tirando e salvando fotos",source:"@site/../docs/Tello/extras.md",sourceDirName:"Tello",slug:"/Tello/extras",permalink:"/knowledge_base/docs/Tello/extras",editUrl:"https://github.com/SkyRats/knowledge_base/tree/main/docs/../docs/Tello/extras.md",tags:[],version:"current",frontMatter:{},sidebar:"docssidebar",previous:{title:"Solucionando erros",permalink:"/knowledge_base/docs/Tello/errors"},next:{title:"tello_integration.py",permalink:"/knowledge_base/docs/Tello/functions"}},d=[{value:"Tirando e salvando fotos",id:"tirando-e-salvando-fotos",children:[],level:2},{value:"Beepy",id:"beepy",children:[],level:2},{value:"Janelas do OpenCV",id:"janelas-do-opencv",children:[],level:2},{value:"Criando objetos (POO)",id:"criando-objetos-poo",children:[],level:2}],p={toc:d};function u(e){var n=e.components,i=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"outras-funcionalidades"},"Outras funcionalidades"),(0,a.kt)("h2",{id:"tirando-e-salvando-fotos"},"Tirando e salvando fotos"),(0,a.kt)("p",null,'Em v\xe1rios momentos do c\xf3digo, fazemos o Tello tirar fotos. Desde com os gestos "2"/paz e "rock" at\xe9 no jogo das c\xe2meras. Para fazer isso, h\xe1 uma estrutura b\xe1sica utilizando o OpenCV:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'if not SIMULATION:\n    self.image = self.tello.get_frame_read().frame  # Stores the current streamed frame\n\nnow = datetime.now()\nday = date.today()\n\ncurrent_time = now.strftime("%H-%M-%S")\ncurrent_day = day.strftime("%b-%d-%Y")\n\nif not os.path.isdir("fotos"):\n    os.makedirs("fotos") # Cria pasta de fotos\n\nsave = f\'fotos/{current_day}--{current_time}.jpg\'\ncv2.imwrite(save, self.image)\n')),(0,a.kt)("p",null,"Veja algumas fotos tiradas utilizando gestos:\n",(0,a.kt)("img",{alt:"fotos",src:o(8797).Z})),(0,a.kt)("h2",{id:"beepy"},"Beepy"),(0,a.kt)("p",null,"Beepy \xe9 uma biblioteca que foi utilizada para adicionar efeitos sonoros ao programa, tornando-o mais divertido. Isso pode ser feito pela seguinte linha, ap\xf3s importar ",(0,a.kt)("inlineCode",{parentName:"p"},"beepy"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"beepy.beep(5) # O n\xfamero \xe9 escolhido para o som desejado\n")),(0,a.kt)("p",null,"A seguir est\xe3o os mapeamentos para os n\xfameros: 1 : 'coin', 2 : 'robot_error', 3 : 'error', 4 : 'ping', 5 : 'ready', 6 : 'success', 7 : 'wilhelm'."),(0,a.kt)("h2",{id:"janelas-do-opencv"},"Janelas do OpenCV"),(0,a.kt)("p",null,"Para criar janelas do OpenCV, a estrutura b\xe1sica \xe9:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cv2.imshow('MediaPipe Hands', self.image)\nif cv2.waitKey(5) & 0xFF == ord('q'):\n    self.control_loop = False\n")),(0,a.kt)("p",null,"Nunca esque\xe7a da condi\xe7\xe3o do ",(0,a.kt)("inlineCode",{parentName:"p"},"waitKey"),", pois sem ela, o c\xf3digo pode dar erro."),(0,a.kt)("h2",{id:"criando-objetos-poo"},"Criando objetos (POO)"),(0,a.kt)("p",null,"Como utilizamos diferentes classes no c\xf3digo (Drone, Interface e Tello, da biblioteca), precisamos criar objetos pertencentes a essas classes para poder rodar as fun\xe7\xf5es:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Na classe Drone:\nself.tello = Tello() \n...\n# Na classe Interface:\nself.tello = Drone()\n\n# Para rodar o c\xf3digo:\nmain = Interface()\nmain.interface_loop() # Fun\xe7\xe3o principal da interface\n")))}u.isMDXComponent=!0},8797:function(e,n,o){n.Z=o.p+"assets/images/fotosgestos1-703ab0d498dcd400689a260b70a3b527.png"}}]);