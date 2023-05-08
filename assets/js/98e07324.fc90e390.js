"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4658],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),i=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=i(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=i(t),m=o,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},618:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],s={},u="Como instalar o driver para o TL-WN 823N no Ubuntu Mate",i={unversionedId:"old/Hardware/Componentes/tlwn823n",id:"old/Hardware/Componentes/tlwn823n",isDocsHomePage:!1,title:"Como instalar o driver para o TL-WN 823N no Ubuntu Mate",description:"Siga os comandos abaixo :)",source:"@site/../docs/old/Hardware/Componentes/tlwn823n.md",sourceDirName:"old/Hardware/Componentes",slug:"/old/Hardware/Componentes/tlwn823n",permalink:"/knowledge_base/docs/old/Hardware/Componentes/tlwn823n",editUrl:"https://github.com/SkyRats/knowledge_base/tree/main/docs/../docs/old/Hardware/Componentes/tlwn823n.md",tags:[],version:"current",frontMatter:{},sidebar:"docssidebar",previous:{title:"Como funciona um transistor",permalink:"/knowledge_base/docs/old/Hardware/Componentes/Transistor"},next:{title:"Configura\xe7\xe3o dos R\xe1dio Controles (Taranis Q X7)",permalink:"/knowledge_base/docs/old/Hardware/Componentes/RCs/TaranisQX7"}},c=[],p={toc:c},d="wrapper";function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"como-instalar-o-driver-para-o-tl-wn-823n-no-ubuntu-mate"},"Como instalar o driver para o TL-WN 823N no Ubuntu Mate"),(0,a.kt)("p",null,"Siga os comandos abaixo :)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install git linux-headers-generic build-essential dkms\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Mange/rtl8192eu-linux-driver\ncd rtl8192eu-linux-driver\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dkms add .\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dkms install rtl8192eu/1.0\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "blacklist rtl8xxxu" | sudo tee /etc/modprobe.d/rtl8xxxu.conf\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo -e "8192eu\\n\\nloop" | sudo tee /etc/modules\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'echo "options 8192eu rtw_power_mgnt=0 rtw_enusbss=0" | sudo tee /etc/modprobe.d/8192eu.conf\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo update-grub; sudo update-initramfs -u\n")),(0,a.kt)("p",null,"Agora reinicie seu computador!"),(0,a.kt)("p",null,"E quando ligar, teste para ver se o driver est\xe1 funcionando com o seguinte comando:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo lshw -c network\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://askubuntu.com/questions/1211157/how-do-i-get-a-tp-link-tl-wn823n-v3-wireless-adapter-working"},"Refer\xeancia")))}m.isMDXComponent=!0}}]);