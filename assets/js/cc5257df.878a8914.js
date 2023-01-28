"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[868],{5318:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>N});var n=t(7378);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),i=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},c=function(e){var a=i(e.components);return n.createElement(p.Provider,{value:a},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=i(t),k=s,N=d["".concat(p,".").concat(k)]||d[k]||m[k]||r;return t?n.createElement(N,o(o({ref:a},c),{},{components:t})):n.createElement(N,o({ref:a},c))}));function N(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,o=new Array(r);o[0]=k;var l={};for(var p in a)hasOwnProperty.call(a,p)&&(l[p]=a[p]);l.originalType=e,l[d]="string"==typeof e?e:s,o[1]=l;for(var i=2;i<r;i++)o[i]=t[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},587:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var n=t(5773),s=(t(7378),t(5318));const r={sidebar_position:2},o="Variables & expressions",l={unversionedId:"eslint-base/variables-expressions",id:"eslint-base/variables-expressions",title:"Variables & expressions",description:"This page discusses rules around variable declarations, naming, and the style of some primary expressions.",source:"@site/../docs/eslint-base/variables-expressions.md",sourceDirName:"eslint-base",slug:"/eslint-base/variables-expressions",permalink:"/js-style-guide/eslint-base/variables-expressions",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"General formatting",permalink:"/js-style-guide/eslint-base/formatting"},next:{title:"Operators",permalink:"/js-style-guide/eslint-base/operators"}},p={},i=[{value:"<code>var</code>",id:"var",level:2},{value:"<code>block-scoped-var</code>",id:"block-scoped-var",level:3},{value:"<code>let</code>/<code>const</code>",id:"letconst",level:2},{value:"<code>no-const-assign</code>",id:"no-const-assign",level:3},{value:"<code>prefer-const</code>",id:"prefer-const",level:3},{value:"Naming conventions",id:"naming-conventions",level:2},{value:"Regular expressions",id:"regular-expressions",level:2},{value:"Prefer concise syntax",id:"prefer-concise-syntax",level:3},{value:"<code>no-regex-spaces</code>",id:"no-regex-spaces",level:3},{value:"<code>prefer-named-capture-group</code>",id:"prefer-named-capture-group",level:3},{value:"Globals",id:"globals",level:2},{value:"<code>no-console</code>",id:"no-console",level:3}],c={toc:i};function d(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"variables--expressions"},"Variables & expressions"),(0,s.kt)("p",null,"This page discusses rules around variable declarations, naming, and the style of some primary expressions."),(0,s.kt)("h2",{id:"var"},(0,s.kt)("inlineCode",{parentName:"h2"},"var")),(0,s.kt)("p",null,"We disallow ",(0,s.kt)("inlineCode",{parentName:"p"},"var")," statements. ",(0,s.kt)("inlineCode",{parentName:"p"},"var")," is fully predated by ",(0,s.kt)("inlineCode",{parentName:"p"},"let"),"/",(0,s.kt)("inlineCode",{parentName:"p"},"const")," and its hoisting behavior makes code harder to debug. There's not a single reason to use ",(0,s.kt)("inlineCode",{parentName:"p"},"var")," today. If you need to share one variable between two blocks, declare it in the upper scope. If you need to declare a global variable (which you probably shouldn't anyway), directly modify ",(0,s.kt)("inlineCode",{parentName:"p"},"globalThis")," (which also works in modules)."),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292f"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"declare"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"var"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"var globalVar: number"},"globalVar")),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"number"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"module globalThis"},"globalThis"),".",(0,s.kt)("data-lsp",{parentName:"span",lsp:"var globalVar: number"},"globalVar")," "),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"1"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},";"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki github-dark twoslash lsp",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"declare"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"var"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," ",(0,s.kt)("data-lsp",{parentName:"span",lsp:"var globalVar: number"},"globalVar")),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},":"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"number"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"module globalThis"},"globalThis"),".",(0,s.kt)("data-lsp",{parentName:"span",lsp:"var globalVar: number"},"globalVar")," "),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"1"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")))))),(0,s.kt)("h3",{id:"block-scoped-var"},(0,s.kt)("a",{parentName:"h3",href:"https://eslint.org/docs/rules/block-scoped-var"},(0,s.kt)("inlineCode",{parentName:"a"},"block-scoped-var"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Severity: error")),(0,s.kt)("p",null,"Because ",(0,s.kt)("inlineCode",{parentName:"p"},"var"),"s are forbidden altogether, this rule is mostly moot."),(0,s.kt)("h2",{id:"letconst"},(0,s.kt)("inlineCode",{parentName:"h2"},"let"),"/",(0,s.kt)("inlineCode",{parentName:"h2"},"const")),(0,s.kt)("h3",{id:"no-const-assign"},(0,s.kt)("a",{parentName:"h3",href:"https://eslint.org/docs/rules/no-const-assign"},(0,s.kt)("inlineCode",{parentName:"a"},"no-const-assign"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Severity: error"),(0,s.kt)("li",{parentName:"ul"},"Related:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"ts(2588): Cannot assign to 'a' because it is a constant."))))),(0,s.kt)("p",null,"Re-assigning const variables causes a runtime error."),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292f"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#0550AE"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const a: 1"},"a")),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"1"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},(0,s.kt)("data-err",{parentName:"span"},(0,s.kt)("data-lsp",{parentName:"data-err",lsp:"const a: any"},"a"))," "),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"2"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},"; "),(0,s.kt)("span",{parentName:"div",style:{color:"#6E7781"}},"// -> TypeError: Assignment to constant variable.")),(0,s.kt)("span",{parentName:"code",className:"error"},(0,s.kt)("span",{parentName:"span"},"Cannot assign to 'a' because it is a constant."),(0,s.kt)("span",{parentName:"span",className:"code"},"2588")),(0,s.kt)("span",{parentName:"code",className:"error-behind"},"Cannot assign to 'a' because it is a constant.")))),(0,s.kt)("pre",{parentName:"div",className:"shiki github-dark twoslash lsp",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},(0,s.kt)("data-lsp",{parentName:"span",lsp:"const a: 1"},"a")),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"1"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},";")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},(0,s.kt)("data-err",{parentName:"span"},(0,s.kt)("data-lsp",{parentName:"data-err",lsp:"const a: any"},"a"))," "),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"2"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"; "),(0,s.kt)("span",{parentName:"div",style:{color:"#8B949E"}},"// -> TypeError: Assignment to constant variable.")),(0,s.kt)("span",{parentName:"code",className:"error"},(0,s.kt)("span",{parentName:"span"},"Cannot assign to 'a' because it is a constant."),(0,s.kt)("span",{parentName:"span",className:"code"},"2588")),(0,s.kt)("span",{parentName:"code",className:"error-behind"},"Cannot assign to 'a' because it is a constant."))))),(0,s.kt)("h3",{id:"prefer-const"},(0,s.kt)("a",{parentName:"h3",href:"https://eslint.org/docs/rules/prefer-const"},(0,s.kt)("inlineCode",{parentName:"a"},"prefer-const"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Severity: error")),(0,s.kt)("p",null,"Using"),(0,s.kt)("h2",{id:"naming-conventions"},"Naming conventions"),(0,s.kt)("h2",{id:"regular-expressions"},"Regular expressions"),(0,s.kt)("h3",{id:"prefer-concise-syntax"},"Prefer concise syntax"),(0,s.kt)("p",null,"There are many ways to represent the same regular expression. Instead of this:"),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292f"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"rule"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},"  test:"),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}}," /"),(0,s.kt)("span",{parentName:"div",style:{color:"#116329"}},"\\."),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}},"(?:js"),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"|"),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}},"ts"),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"|"),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}},"jsx"),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"|"),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}},"tsx)/"),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"i"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},"};"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"rule"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  test:"),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}}," /"),(0,s.kt)("span",{parentName:"div",style:{color:"#7EE787"}},"\\."),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},"(?:js"),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"|"),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},"ts"),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"|"),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},"jsx"),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"|"),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},"tsx)/"),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"i"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"};")))))),(0,s.kt)("p",null,"Prefer this:"),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292f"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"rule"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},"  test:"),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}}," /"),(0,s.kt)("span",{parentName:"div",style:{color:"#116329"}},"\\."),(0,s.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"[jt]"),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}},"sx"),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"?"),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}},"/"),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"i"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},"};"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"rule"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  test:"),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}}," /"),(0,s.kt)("span",{parentName:"div",style:{color:"#7EE787"}},"\\."),(0,s.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"[jt]"),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},"sx"),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"?"),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},"/"),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"i"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"};")))))),(0,s.kt)("p",null,"Regular expressions are ",(0,s.kt)("em",{parentName:"p"},"not")," intended to be readable; they are designed for machine consumption. Convey the intent of a regular expression through test cases, not through making it verbose. Related to ",(0,s.kt)("strong",{parentName:"p"},"code for the average-intelligent"),"."),(0,s.kt)("h3",{id:"no-regex-spaces"},(0,s.kt)("a",{parentName:"h3",href:"https://eslint.org/docs/rules/no-regex-spaces"},(0,s.kt)("inlineCode",{parentName:"a"},"no-regex-spaces"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Severity: off")),(0,s.kt)("p",null,"Although we want to use concise syntax, multiple spaces in a regex is often useful to resemble constructs that readers are familiar with."),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292f"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#6E7781"}},"// Matches a well-formatted table row")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"match"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," tableRow."),(0,s.kt)("span",{parentName:"div",style:{color:"#8250DF"}},"match"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}},"/"),(0,s.kt)("span",{parentName:"div",style:{color:"#116329"}},"\\|"),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}}," Column      "),(0,s.kt)("span",{parentName:"div",style:{color:"#116329"}},"\\|"),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}}," Another one "),(0,s.kt)("span",{parentName:"div",style:{color:"#116329"}},"\\|"),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}},"/"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},");"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#8B949E"}},"// Matches a well-formatted table row")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"match"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," tableRow."),(0,s.kt)("span",{parentName:"div",style:{color:"#D2A8FF"}},"match"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"("),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},"/"),(0,s.kt)("span",{parentName:"div",style:{color:"#7EE787"}},"\\|"),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}}," Column      "),(0,s.kt)("span",{parentName:"div",style:{color:"#7EE787"}},"\\|"),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}}," Another one "),(0,s.kt)("span",{parentName:"div",style:{color:"#7EE787"}},"\\|"),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},"/"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},");")))))),(0,s.kt)("h3",{id:"prefer-named-capture-group"},(0,s.kt)("a",{parentName:"h3",href:"https://eslint.org/docs/rules/prefer-named-capture-group"},(0,s.kt)("inlineCode",{parentName:"a"},"prefer-named-capture-group"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Severity: warning")),(0,s.kt)("p",null,"Named capture groups allow us to semantically identify each group. It also warns about those groups that should probably be explicitly marked as non-capturing groups."),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292f"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#0550AE"}},"rule"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}}," {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#6E7781"}},"// Is this capturing group actually useful? If I remove it, would it break")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#6E7781"}},"// consumer code?")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},"  test:"),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}}," /"),(0,s.kt)("span",{parentName:"div",style:{color:"#116329"}},"\\."),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}},"(jpe"),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"?"),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}},"g"),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"|"),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}},"png"),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"|"),(0,s.kt)("span",{parentName:"div",style:{color:"#0A3069"}},"webp)/"),(0,s.kt)("span",{parentName:"div",style:{color:"#CF222E"}},"i"),(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},"};"))))),(0,s.kt)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"ts"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"const"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#79C0FF"}},"rule"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," "),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"="),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}}," {")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#8B949E"}},"// Is this capturing group actually useful? If I remove it, would it break")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  "),(0,s.kt)("span",{parentName:"div",style:{color:"#8B949E"}},"// consumer code?")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"  test:"),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}}," /"),(0,s.kt)("span",{parentName:"div",style:{color:"#7EE787"}},"\\."),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},"(jpe"),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"?"),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},"g"),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"|"),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},"png"),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"|"),(0,s.kt)("span",{parentName:"div",style:{color:"#A5D6FF"}},"webp)/"),(0,s.kt)("span",{parentName:"div",style:{color:"#FF7B72"}},"i"),(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},",")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"};")))))),(0,s.kt)("p",null,"Ultimately, this makes refactor less risky because addition of a capturing group does not shift the other indices."),(0,s.kt)("div",{className:"shiki-twoslash-fragment"},(0,s.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292f"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"diff"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#82071E"}},"- const commitPattern = /(.+),(.+)/;")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#116329"}},"+ const commitPattern = /(.+),(.+),(\\d+)/;")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},"const date = commit.match(commitPattern)?.[1];")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#24292F"}},"// Oops, I need to also change `[1]` to `[2]`..."))))),(0,s.kt)("pre",{parentName:"div",className:"shiki github-dark",style:{backgroundColor:"#0d1117",color:"#c9d1d9"}},(0,s.kt)("div",{parentName:"pre",className:"language-id"},"diff"),(0,s.kt)("div",{parentName:"pre",className:"code-container"},(0,s.kt)("code",{parentName:"div"},(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#FFA198"}},"- const commitPattern = /(.+),(.+)/;")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#7EE787"}},"+ const commitPattern = /(.+),(.+),(\\d+)/;")),(0,s.kt)("div",{parentName:"code",className:"line"}),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"const date = commit.match(commitPattern)?.[1];")),(0,s.kt)("div",{parentName:"code",className:"line"},(0,s.kt)("span",{parentName:"div",style:{color:"#C9D1D9"}},"// Oops, I need to also change `[1]` to `[2]`...")))))),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Named capture groups isn't strongly typed in TypeScript. See ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/microsoft/TypeScript/issues/32098"},"microsoft/TypeScript#32098"),". If you access ",(0,s.kt)("inlineCode",{parentName:"p"},"match.groups.someName"),", you will get ",(0,s.kt)("inlineCode",{parentName:"p"},"| undefined")," under ",(0,s.kt)("inlineCode",{parentName:"p"},"noUncheckedIndexAccess"),", even when ",(0,s.kt)("inlineCode",{parentName:"p"},"someName")," always exists. In this case, prefer using a non-null assertion to convey developer intent.")),(0,s.kt)("h2",{id:"globals"},"Globals"),(0,s.kt)("h3",{id:"no-console"},(0,s.kt)("a",{parentName:"h3",href:"https://eslint.org/docs/rules/no-console"},(0,s.kt)("inlineCode",{parentName:"a"},"no-console"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Severity: can be enabled")),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"console.log")," is commonly left as debugging artifacts and can occasionally disrupt the console log formatting. For example, Webpack has the unified ",(0,s.kt)("a",{parentName:"p",href:"https://webpack.js.org/api/logging/"},"logger interface")," for emitting messages. Projects are encouraged to encapsulate their own logger instance as well for unified message formatting and semantics."),(0,s.kt)("p",null,"However, in more casual projects without a wrapped logger, using ",(0,s.kt)("inlineCode",{parentName:"p"},"console.log")," may be intentional. This rule can be overridden in user-land."))}d.isMDXComponent=!0}}]);