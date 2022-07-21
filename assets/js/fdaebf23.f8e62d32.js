"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[303],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(t),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1154:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],l={},u="Como instalar o driver para o TL-WN 823N no Ubuntu Mate",i={unversionedId:"Hardware/Componentes/tlwn823n",id:"Hardware/Componentes/tlwn823n",isDocsHomePage:!1,title:"Como instalar o driver para o TL-WN 823N no Ubuntu Mate",description:"Siga os comandos abaixo :)",source:"@site/../docs/Hardware/Componentes/tlwn823n.md",sourceDirName:"Hardware/Componentes",slug:"/Hardware/Componentes/tlwn823n",permalink:"/knowledge_base/docs/Hardware/Componentes/tlwn823n",editUrl:"https://github.com/SkyRats/knowledge_base/tree/main/docs/../docs/Hardware/Componentes/tlwn823n.md",tags:[],version:"current",frontMatter:{},sidebar:"docssidebar",previous:{title:"Como funciona um transistor",permalink:"/knowledge_base/docs/Hardware/Componentes/Transistor"},next:{title:"Configura\xe7\xe3o dos R\xe1dio Controles (Taranis Q X7)",permalink:"/knowledge_base/docs/Hardware/Componentes/RCs/TaranisQX7"}},c=[],p={toc:c};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"como-instalar-o-driver-para-o-tl-wn-823n-no-ubuntu-mate"},"Como instalar o driver para o TL-WN 823N no Ubuntu Mate"),(0,o.kt)("p",null,"Siga os comandos abaixo :)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install git linux-headers-generic build-essential dkms\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Mange/rtl8192eu-linux-driver\ncd rtl8192eu-linux-driver\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dkms add .\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dkms install rtl8192eu/1.0\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo "blacklist rtl8xxxu" | sudo tee /etc/modprobe.d/rtl8xxxu.conf\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo -e "8192eu\\n\\nloop" | sudo tee /etc/modules\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'echo "options 8192eu rtw_power_mgnt=0 rtw_enusbss=0" | sudo tee /etc/modprobe.d/8192eu.conf\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo update-grub; sudo update-initramfs -u\n")),(0,o.kt)("p",null,"Agora reinicie seu computador!"),(0,o.kt)("p",null,"E quando ligar, teste para ver se o driver est\xe1 funcionando com o seguinte comando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo lshw -c network\n")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://askubuntu.com/questions/1211157/how-do-i-get-a-tp-link-tl-wn823n-v3-wireless-adapter-working"},"Refer\xeancia")))}d.isMDXComponent=!0}}]);