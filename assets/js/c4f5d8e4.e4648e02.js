"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[195],{2797:function(e,t,n){var a=n(7294),r=["title","titleId"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.Z=function(e){e.title;var t=e.titleId,n=o(e,r);return a.createElement("svg",l({xmlns:"http://www.w3.org/2000/svg",width:3861.333,height:1852,viewBox:"0 0 2896 1389","aria-labelledby":t},n))}},9335:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(7294),r=n(6010),l=n(4814),o=n(9960),i=n(2263),c="heroBanner_etFc",s="buttons_+YzY",u=n(7462),m="features_n4mZ",d="featureSvg_d3xR",f=[{title:"Skyrats",Svg:n(2797).Z,description:a.createElement(a.Fragment,null,"N\xf3s somos a equipe de Drones Inteligentes da Escola Polit\xe9cnica da Universidade de S\xe3o Paulo.")},{title:"Knowledge Base",Svg:n(2797).Z,description:a.createElement(a.Fragment,null,"Essa \xe9 a nossa Knowledge Base, criada com o objetivo de documentar e difundir o conhecimento gerado na equipe.")},{title:"Documenta\xe7\xe3o e posts",Svg:n(2797).Z,description:a.createElement(a.Fragment,null,"Caso deseje contribuir para este site, leia o README do projeto no GitHub ou a introdu\xe7\xe3o da documenta\xe7\xe3o.")}];function p(e){var t=e.Svg,n=e.title,l=e.description;return a.createElement("div",{className:(0,r.Z)("col col--4")},a.createElement("div",{className:"text--center"},a.createElement(t,{className:d,alt:n})),a.createElement("div",{className:"text--center padding-horiz--md"},a.createElement("h3",null,n),a.createElement("p",null,l)))}function g(){return a.createElement("section",{className:m},a.createElement("div",{className:"container"},a.createElement("div",{className:"row"},f.map((function(e,t){return a.createElement(p,(0,u.Z)({key:t},e))})))))}function v(){var e=(0,i.Z)().siteConfig;return a.createElement("header",{className:(0,r.Z)("hero hero--primary",c)},a.createElement("div",{className:"container"},a.createElement("h1",{className:"hero__title"},e.title),a.createElement("p",{className:"hero__subtitle"},e.tagline),a.createElement("div",{className:s},a.createElement(o.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Documenta\xe7\xe3o"))))}function E(){var e=(0,i.Z)().siteConfig;return a.createElement(l.Z,{title:"Hello from "+e.organizationName,description:"Description will go into a meta tag in <head />"},a.createElement(v,null),a.createElement("main",null,a.createElement(g,null)))}}}]);