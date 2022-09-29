"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[778],{3905:function(e,o,a){a.d(o,{Zo:function(){return m},kt:function(){return l}});var s=a(7294);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);o&&(s=s.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,s)}return a}function t(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function i(e,o){if(null==e)return{};var a,s,r=function(e,o){if(null==e)return{};var a,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)a=n[s],o.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)a=n[s],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=s.createContext({}),p=function(e){var o=s.useContext(u),a=o;return e&&(a="function"==typeof e?e(o):t(t({},o),e)),a},m=function(e){var o=p(e.components);return s.createElement(u.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return s.createElement(s.Fragment,{},o)}},d=s.forwardRef((function(e,o){var a=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(a),l=r,f=d["".concat(u,".").concat(l)]||d[l]||c[l]||n;return a?s.createElement(f,t(t({ref:o},m),{},{components:a})):s.createElement(f,t({ref:o},m))}));function l(e,o){var a=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=a.length,t=new Array(n);t[0]=d;var i={};for(var u in o)hasOwnProperty.call(o,u)&&(i[u]=o[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,t[1]=i;for(var p=2;p<n;p++)t[p]=a[p];return s.createElement.apply(null,t)}return s.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7004:function(e,o,a){a.r(o),a.d(o,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return d}});var s=a(7462),r=a(3366),n=(a(7294),a(3905)),t=["components"],i={},u="Transfer\xeancia de Arquivos",p={unversionedId:"Linux/TransArqv",id:"Linux/TransArqv",isDocsHomePage:!1,title:"Transfer\xeancia de Arquivos",description:"---",source:"@site/../docs/Linux/TransArqv.md",sourceDirName:"Linux",slug:"/Linux/TransArqv",permalink:"/knowledge_base/docs/Linux/TransArqv",editUrl:"https://github.com/SkyRats/knowledge_base/tree/main/docs/../docs/Linux/TransArqv.md",tags:[],version:"current",frontMatter:{},sidebar:"docssidebar",previous:{title:"COMO SE CONECTAR A INTERNET PELO TERMINAL DO LINUX",permalink:"/knowledge_base/docs/Linux/INTERNET_PELO_TERMIAL_LINUX"},next:{title:"ROS1",permalink:"/knowledge_base/docs/Voo autonomo/ros1"}},m=[{value:"1. Introdu\xe7\xe3o",id:"1-introdu\xe7\xe3o",children:[],level:2},{value:"2. Como foi feito?",id:"2-como-foi-feito",children:[],level:2},{value:"3. C\xf3digo completo",id:"3-c\xf3digo-completo",children:[],level:2}],c={toc:m};function d(e){var o=e.components,a=(0,r.Z)(e,t);return(0,n.kt)("wrapper",(0,s.Z)({},c,a,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"transfer\xeancia-de-arquivos"},"Transfer\xeancia de Arquivos"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"1-introdu\xe7\xe3o"},"1. Introdu\xe7\xe3o"),(0,n.kt)("p",null,"Para automatizar a transfer\xeancia de arquivos atrav\xe9s de uma rede, por exemplo, 4G, faremos uso de uma rede SSH, caso n\xe3o saiba como criar e configurar uma, temos a explica\xe7\xe3o aqui ",(0,n.kt)("em",{parentName:"p"},"LINK")," , al\xe9m disso, faremos uso da biblioteca python Time, e OS(",(0,n.kt)("em",{parentName:"p"},"LINK"),")"),(0,n.kt)("h2",{id:"2-como-foi-feito"},"2. Como foi feito?"),(0,n.kt)("p",null,"Primeiro, precisa-se adquirir 4 strings, sendo elas, o ip do computador onde ser\xe3o buscados os arquivos(no caso do exemplo, fotos). A primeira seria o ip, que deve possuir o formato \u201cUSUARIO@IPGLOBAL\u201d para redes diferentes, ou \u201cUSUARIO@IPV4\u201d para mesma rede. O segundo deve ser a senha desse usu\xe1rio, e o terceiro e quarto s\xe3o pastas, dados em links de arquivos, sem a \xfaltima barra \u201c~/exemplohome/exemplopasta\u201d."),(0,n.kt)("p",null,"Assim, utilizando o comando system, da biblioteca os, podemos com o python enviar comandos para o terminal bash. Ent\xe3o, antes de tudo \xe9 necess\xe1rio instalar o sshpass, da seguinte forma:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install sshpass\n")),(0,n.kt)("p",null,"Ap\xf3s isso, j\xe1 podemos continuar nosso c\xf3digo. O primeiro comando que utilizamos \xe9 o b\xe1sico \u201cls\u201d, para retornar os arquivos que tem na pasta do drone, por\xe9m, utilizamos ele de uma forma em que retornamos apenas o primeiro arquivo colocado naquela pasta, dessa forma:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ls -t <pasta> | tail -1\n")),(0,n.kt)("p",null,"E para conseguirmos mandar ele para a pasta do drone, por ssh, fazemos a conex\xe3o ao ssh, por\xe9m, ao final do comando abrimos e fechamos aspas \xfanicas com o comando dentro, assim ele n\xe3o ir\xe1 conectar ao bash por ssh, e sim apenas enviar aquele comando. Isso \xe9 feito da seguinte forma:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"ssh <usuario>@<ip> \u2018<comando>\u2019\n")),(0,n.kt)("p",null,"No caso, como queremos que isso seja 100% automatizado, faremos uso da biblioteca sshpass, e assim ela ir\xe1 automaticamente autenticar a todo comando, apenas com a string de senha recebida anteriormente, a sintaxe \xe9 assim:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sshpass -p <senha> ssh <usuario>@<ip> \u2018<comando>\u2019\n")),(0,n.kt)("p",null,"Ent\xe3o, combinando os dois comandos, para buscarmos o primeiro arquivo colocado em uma certa pasta do computador de bordo do drone, fica:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sshpass -p <senha> ssh <usuario>@<ip> \u2018ls -t <pasta> | tail -1\u2019\n")),(0,n.kt)("p",null,"Obs: \xc9 importante sempre remover o \xfaltimo caracter recebido, pois ele \xe9 um endline"),(0,n.kt)("p",null,"Assim, colocamos o retorno desse comando em uma string, que d\xe1 o nome do arquivo que iremos pegar, o que deve ser concatenada ao endere\xe7o da pasta, desse jeito, podemos copi\xe1-lo para a ground station, e para isso usamos o comando \u201cscp\u201d que copia atrav\xe9s do ssh, e juntamente utilizamos o sshpass para autentica\xe7\xe3o autom\xe1tica, e tudo isso fica dessa forma:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sshpass -p <senha> scp -r <usuario><ip>:<arquivo>\n")),(0,n.kt)("p",null,"E ap\xf3s termos puxado o arquivo, podemos apag\xe1-lo de quem enviou, e assim, utilizando a mesma ideia no comando ls, faremos a mesma coisa com o comando \u201crm\u201d por ssh, juntamente autenticado pelo sshpass, que fica da seguinte forma:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sshpass -p <senha> ssh <usuario>@<ip>:<arquivo> \u2018rm <arquivo>\u2019\n")),(0,n.kt)("p",null,"Com isso, j\xe1 estamos pegando os arquivos atrav\xe9s da internet, mas, podemos automatizar mais ainda, e para isso, deixamos dentro de um \u201cwhile True:\u201d, assim, ele vai enviar todos os arquivos daquela pasta, e ainda esperar os pr\xf3ximos que forem colocados e envi\xe1-los tamb\xe9m, al\xe9m disso, para evitar que arquivos sejam sobrescritos por conta de terem o mesmo nome podemos fazer um contador para cada arquivo enviado, sendo assim, cada um tendo um n\xfamero, e renomeamos o arquivo ap\xf3s ser enviado com o comando \u201cmv\u201d, desse jeito:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"mv <path>/<arquivorecebido> <path>/<nomenovo>+<contador>\n")),(0,n.kt)("h2",{id:"3-c\xf3digo-completo"},"3. C\xf3digo completo"),(0,n.kt)("p",null,"Ele, e outros c\xf3digos, podem ser acessados em nosso github"),(0,n.kt)("p",null,"Mas o c\xf3digo utilizado para tal, est\xe1 tamb\xe9m aqui:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'  print("Qual o endere\xe7o de ip do drone? (USUARIO@IP")\n  ip = str(input())\n  print("Qual a senha do drone?")\n  senha = str(input())\n  print("Qual a pasta das fotos no drone?")\n  pastaDrone = str(input())\n  print("Qual a pasta das fotos no seu computador?")\n  pastaGs = str(input())\n\n  numeroFoto = 0\n  while True:\n\n    ultimoArqv = os.popen("sshpass -p " + senha + " ssh " + ip + " \'" + "ls -t " + pastaDrone + " | tail -1" + "\'").read() #Pegar o \xfaltimo arquivo colocado\n\n    print("Copiando o " + ultimoArqv)\n\n    os.system("sshpass -p " + senha + " scp -r " + ip + ":" + pastaDrone + "/" + ultimoArqv[:-1] + " " + pastaGs) #Copiar esse arquivo\n    \n    os.system("sshpass -p " + senha + " ssh " + ip +" \'rm " + pastaDrone + "/" + ultimoArqv[:-1] + "\'")\n\n    numeroFoto = numeroFoto + 1\n\n    os.system("mv " + pastaGs + "/" + ultimoArqv[:-1] + " " + pastaGs + "/" + "FOTO" + str(numeroFoto) + ".png")\n')))}d.isMDXComponent=!0}}]);