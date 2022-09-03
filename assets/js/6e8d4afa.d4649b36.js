"use strict";(self.webpackChunknotebook=self.webpackChunknotebook||[]).push([[638],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),o=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(i.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=o(a),c=r,N=u["".concat(i,".").concat(c)]||u[c]||k[c]||l;return a?n.createElement(N,m(m({ref:t},s),{},{components:a})):n.createElement(N,m({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,m=new Array(l);m[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,m[1]=p;for(var o=2;o<l;o++)m[o]=a[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3700:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>k});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),m=["components"],p={},i="\u5b9e\u6218\u7ecf\u9a8c\u603b\u7ed3",o={unversionedId:"computer/code-design/write-code/recorder/index",id:"computer/code-design/write-code/recorder/index",title:"\u5b9e\u6218\u7ecf\u9a8c\u603b\u7ed3",description:"\u7f16\u7a0b\u7ed3\u6784\u7406\u89e3",source:"@site/docs/computer/02-code-design/10-write-code/05-recorder/index.md",sourceDirName:"computer/02-code-design/10-write-code/05-recorder",slug:"/computer/code-design/write-code/recorder/",permalink:"/notebook/docs/computer/code-design/write-code/recorder/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"computerSidebar",previous:{title:"\u94fe\u8868\u76f8\u5173\u9898\u76ee",permalink:"/notebook/docs/computer/code-design/write-code/leetcode/simple/sequenatial-list"},next:{title:"\u5173\u952e\u65b9\u6cd5\u8bb0\u5f55",permalink:"/notebook/docs/computer/code-design/write-code/recorder/key-method"}},s={},k=[{value:"\u7f16\u7a0b\u7ed3\u6784\u7406\u89e3",id:"\u7f16\u7a0b\u7ed3\u6784\u7406\u89e3",level:2},{value:"\u5982\u4f55\u53bb\u627e\u9898\uff1f",id:"\u5982\u4f55\u53bb\u627e\u9898",level:2},{value:"\u600e\u4e48\u9762\u5bf9\u4e00\u9053\u65b0\u9898\u76ee\uff1f",id:"\u600e\u4e48\u9762\u5bf9\u4e00\u9053\u65b0\u9898\u76ee",level:2},{value:"\u4e00\u9053\u9898\u91cc\u6bd4\u8f83\u91cd\u8981\u7684\u662f\u4ec0\u4e48\uff1f",id:"\u4e00\u9053\u9898\u91cc\u6bd4\u8f83\u91cd\u8981\u7684\u662f\u4ec0\u4e48",level:2},{value:"\u9898\u76ee\u901a\u8fc7\u4e4b\u540e\uff0c\u600e\u4e48\u505a\u603b\u7ed3\uff1f",id:"\u9898\u76ee\u901a\u8fc7\u4e4b\u540e\u600e\u4e48\u505a\u603b\u7ed3",level:2},{value:"\u5982\u4f55\u9762\u5bf9\u96be\u9898\u76ee\uff1f",id:"\u5982\u4f55\u9762\u5bf9\u96be\u9898\u76ee",level:2}],u={toc:k};function c(e){var t=e.components,a=(0,r.Z)(e,m);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5b9e\u6218\u7ecf\u9a8c\u603b\u7ed3"},"\u5b9e\u6218\u7ecf\u9a8c\u603b\u7ed3"),(0,l.kt)("h2",{id:"\u7f16\u7a0b\u7ed3\u6784\u7406\u89e3"},"\u7f16\u7a0b\u7ed3\u6784\u7406\u89e3"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\xa0",(0,l.kt)("t",{b:!0,c2:!0},"if")," \u6761\u4ef6\u7ed3\u6784",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\xa0",(0,l.kt)("t",{b:!0,c2:!0},"boolean")," \u6761\u4ef6\u503c\uff08\u8981\u638c\u63e1\u903b\u8f91\u8fd0\u7b97\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u5b9a\u8981",(0,l.kt)("t",{c5:!0},"\u8003\u8651\u8fb9\u754c\u503c"),"\uff08\u5de6\u8fb9\u754c\uff0c\u4e2d\u95f4\u6b63\u5e38\u503c\uff0c\u53f3\u8fb9\u754c\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u9002\u5f53\u4f7f\u7528\u9006\u5411\u601d\u7ef4",(0,l.kt)("t",{c5:!0},"\uff08\u53d6\u53cd\uff09")))),(0,l.kt)("li",{parentName:"ul"},"\xa0",(0,l.kt)("t",{b:!0,c2:!0},"for")," \u5faa\u73af\u7ed3\u6784",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\xa0",(0,l.kt)("t",{c5:!0},"\u5b8c\u6574\u5faa\u73af"),"\u9700\u8981\u5b8c\u6210\u7684\u4efb\u52a1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u6574\u5faa\u73af\u5f00\u59cb\u65f6 ",(0,l.kt)("t",{c5:!0},"\u8f93\u5165")),(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u6574\u5faa\u73af\u7ed3\u675f\u65f6\u7684 ",(0,l.kt)("t",{c5:!0},"\u8f93\u51fa")),(0,l.kt)("li",{parentName:"ul"},"\xa0",(0,l.kt)("t",{b:!0,c2:!0},"break")," \u662f\u5426\u53ef\u4ee5\u8fc5\u901f\u7ec8\u6b64\u5b8c\u6574\u5faa\u73af\uff1f"))),(0,l.kt)("li",{parentName:"ul"},"\u5faa\u73af",(0,l.kt)("t",{b:!0,c2:!0},"\u5f00\u59cb\u6761\u4ef6")),(0,l.kt)("li",{parentName:"ul"},"\u5faa\u73af",(0,l.kt)("t",{b:!0,c2:!0},"\u7ed3\u675f\u6761\u4ef6")),(0,l.kt)("li",{parentName:"ul"},"\xa0",(0,l.kt)("t",{c5:!0},"\u5faa\u73af\u4e00\u6b21"),"\u9700\u8981\u5b8c\u6210\u7684\u4efb\u52a1",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u672c\u6b21\u5faa\u73af\u5f00\u59cb\u65f6\u7684 ",(0,l.kt)("t",{c5:!0},"\u8f93\u5165")),(0,l.kt)("li",{parentName:"ul"},"\u672c\u6b21\u5faa\u73af\u7ed3\u675f\u65f6\u7684 ",(0,l.kt)("t",{c5:!0},"\u8f93\u51fa")),(0,l.kt)("li",{parentName:"ul"},"\xa0",(0,l.kt)("t",{b:!0,c2:!0},"continue")," \u662f\u5426\u53ef\u4ee5\u8fc5\u901f\u7ec8\u6b64\u5355\u6b21\u5faa\u73af\uff1f")))))),(0,l.kt)("h2",{id:"\u5982\u4f55\u53bb\u627e\u9898"},"\u5982\u4f55\u53bb\u627e\u9898\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u627e\u9898\u5c3d\u91cf",(0,l.kt)("t",{c2:!0},"\u6309\u7167\u5206\u7c7b\u627e"),"\uff0c\u4e00\u4e2a\u7cfb\u5217\u7684\u9898\uff0c\u4e00\u8d77\u540c\u65f6\u5237\uff0c\u8fd9\u6837\u53ef\u4ee5\u4e92\u8865\uff0c\u52a0\u5f3a\u808c\u8089\u8bb0\u5fc6\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u7531",(0,l.kt)("t",{c2:!0},"\u7b80\u5355\u5230\u96be"),"\u7684\u987a\u5e8f\u3002\u592a\u96be\u4e86\u5bb9\u6613\u653e\u5f03\uff0c\u592a\u7b80\u5355\u5bb9\u6613\u81ea\u5927\u3002")),(0,l.kt)("h2",{id:"\u600e\u4e48\u9762\u5bf9\u4e00\u9053\u65b0\u9898\u76ee"},"\u600e\u4e48\u9762\u5bf9\u4e00\u9053\u65b0\u9898\u76ee\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u770b\u6e05\u695a\u9898\u76ee\u6761\u4ef6\uff0c\u7406\u89e3\u9898\u76ee\u3002\u5982\u679c\u9898\u76ee\u90fd\u4e0d\u61c2\uff0c\u4e0d\u8981\u6267\u884c\u540e\u7eed\u6b65\u9aa4"),(0,l.kt)("li",{parentName:"ul"},"\u6309\u6700\u539f\u59cb\u6700\u7b80\u5355\u7684\u60f3\u6cd5\u89e3\u9898",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u4e00\u5f00\u59cb"))),(0,l.kt)("li",{parentName:"ul"},"\u4e00\u5b9a\u8981\u6709\u601d\u8def\u4e0e\u6b65\u9aa4\uff08\u65e0\u8bba\u662f\u81ea\u5df1\u7684\u8fd8\u662f\u4ed6\u4eba\u7684\uff09",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u6ca1\u6709\u601d\u8def\u7684\u65f6\u5019",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5207\u8bb0\u4e0d\u8981\u5199\u4ee3\u7801"),(0,l.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u770b\u5b98\u65b9\u7684\u89e3\u9898\u601d\u8def"),(0,l.kt)("li",{parentName:"ul"},"\u8bb0\u5f55\u4e0b\uff0c\u5206\u6790\u4e0b\u4e3a\u4ec0\u4e48\u7406\u89e3\u4e0d\u4e86\u9898\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u523050%\u7684\u601d\u8def",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8981\u8bb0\u5f55\u4e0d\u6e05\u6670\u7684\u70b9"),(0,l.kt)("li",{parentName:"ul"},"\u770b\u5b98\u65b9\u89e3\u9898\u601d\u8def"),(0,l.kt)("li",{parentName:"ul"},"\u8bb0\u5f55\u4e0b\uff0c\u90a3\u4e9b\u5730\u65b9\u601d\u8def\u4e0d\u6e05\u6670"))),(0,l.kt)("li",{parentName:"ul"},"\u670960%-80%\u601d\u8def",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u770b\u5b98\u65b9\u89e3\u9898\u601d\u8def"),(0,l.kt)("li",{parentName:"ul"},"\u8bb0\u5f55\u4e0b\uff0c\u90a3\u4e9b\u5730\u65b9\u601d\u8def\u4e0d\u6e05\u6670"))),(0,l.kt)("li",{parentName:"ul"},"\u6709100%\u601d\u8def",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u5199\u4ee3\u7801"),(0,l.kt)("li",{parentName:"ul"},"\u8bb0\u4f4f\u51fa\u9519\u7684\u70b9")))))),(0,l.kt)("h2",{id:"\u4e00\u9053\u9898\u91cc\u6bd4\u8f83\u91cd\u8981\u7684\u662f\u4ec0\u4e48"},"\u4e00\u9053\u9898\u91cc\u6bd4\u8f83\u91cd\u8981\u7684\u662f\u4ec0\u4e48\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b54\u6848\u4e0d\u662f\u552f\u4e00\u91cd\u8981\u7684\uff0c\u6bd5\u7adf\u5929\u4e0b\u57fa\u672c\u4e0a\u4e0d\u4f1a\u6709\u4e00\u6a21\u4e00\u6837\u7684\u9898\u76ee\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5f62\u6210\u7f16\u7a0b\u601d\u7ef4\u624d\u662f\u6700\u91cd\u8981\u7684\u3002\u6709\u4e86\u7f16\u7a0b\u601d\u7ef4\uff0c\u624d\u80fd\u591f\u9762\u5bf9\u5b9e\u9645\u7684\u5de5\u4f5c\u4e1a\u52a1\u9700\u6c42\u624d\u662f\u6e38\u5203\u6709\u4f59\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8981\u641e\u6e05\u695a\u89e3\u9898\u7ed3\u6784,\u628a\u9898\u76ee\u5185\u7684\u7cbe\u9ad3\u8bb0\u5f55\u4e0b\u6765\uff0c\u5e76\u4e14\u80cc\u4f4f\uff0c\u7531\u91cf\u53d8\u5230\u8d28\u53d8\uff0c\u6700\u540e\u5f97\u5230\u56fa\u5316\u4e0e\u5347\u534e\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8003\u70b9\u3001\u96be\u5ea6\u5206\u6790"),(0,l.kt)("li",{parentName:"ul"},"\u89e3\u9898\u6b65\u9aa4"),(0,l.kt)("li",{parentName:"ul"},"\u56fa\u5b9a\u89e3\u9898\u7ed3\u6784"))),(0,l.kt)("li",{parentName:"ul"},"\u638c\u63e1\u591a\u79cd\u89e3\u9898\u65b9\u6cd5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6700\u66b4\u529b\u7684\u65b9\u5f0f\uff08\u591a\u91cd\u5faa\u73af\uff0c\u65f6\u95f4\u590d\u6742\u5ea6\u9ad8\uff0c\u7a7a\u95f4\u590d\u6742\u5ea6\u9ad8\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u8003\u8651\u526a\u6389\u5faa\u73af\u5185\u591a\u4f59\u5206\u679d"),(0,l.kt)("li",{parentName:"ul"},"\u5229\u7528\u9898\u76ee\u7684\u643a\u5e26\u6761\u4ef6\u4fe1\u606f\uff0c\u4f7f\u7528\u66f4\u52a0\u7cbe\u5999\u7684\u65b9\u6cd5\u3002\uff08\u65f6\u95f4\u590d\u6742\u5ea6\u9ad8\u4f4e\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u662f\u5426\u53ef\u4ee5\u8003\u8651\u7a7a\u95f4\u6362\u65f6\u95f4\uff0c\u8fdb\u4e00\u51cf\u5c11\u65f6\u95f4\u590d\u6742\u5ea6"),(0,l.kt)("li",{parentName:"ul"},"\xa0",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(n)")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},")"))))),"\u3001",(0,l.kt)("span",{parentName:"li",className:"math math-inline"},(0,l.kt)("span",{parentName:"span",className:"katex"},(0,l.kt)("span",{parentName:"span",className:"katex-mathml"},(0,l.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,l.kt)("semantics",{parentName:"math"},(0,l.kt)("mrow",{parentName:"semantics"},(0,l.kt)("mi",{parentName:"mrow"},"O"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mi",{parentName:"mrow"},"l"),(0,l.kt)("mi",{parentName:"mrow"},"o"),(0,l.kt)("mi",{parentName:"mrow"},"g"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,l.kt)("mi",{parentName:"mrow"},"n"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,l.kt)("mo",{parentName:"mrow",stretchy:"false"},")")),(0,l.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"O(nlog(n))")))),(0,l.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,l.kt)("span",{parentName:"span",className:"base"},(0,l.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"O"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.01968em"}},"l"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"o"),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"g"),(0,l.kt)("span",{parentName:"span",className:"mopen"},"("),(0,l.kt)("span",{parentName:"span",className:"mord mathnormal"},"n"),(0,l.kt)("span",{parentName:"span",className:"mclose"},"))"))))),"\u662f\u8ffd\u6c42!")))),(0,l.kt)("h2",{id:"\u9898\u76ee\u901a\u8fc7\u4e4b\u540e\u600e\u4e48\u505a\u603b\u7ed3"},"\u9898\u76ee\u901a\u8fc7\u4e4b\u540e\uff0c\u600e\u4e48\u505a\u603b\u7ed3\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7531\u4e8e\u9898\u76ee\u4e0d\u662f\u65e5\u5e38\u7f16\u7801\u4e2d\u7528\u5230\u7684\uff0c\u57fa\u672c\u4e0d\u592a\u53ef\u80fd\u76f4\u63a5\u7528\u5230\u5de5\u4f5c\u7684\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u641e\u6e05\u695a\uff0c\u9898\u76ee\u6838\u5fc3\u8003\u70b9\u3001\u96be\u70b9\uff0c\u8bb0\u4f4f\u8003\u70b9\u5173\u952e\u5b57\uff0c1-5\u4e2a\u8bcd\u8bed\u3002\u65b9\u4fbf\u540e\u8fb9\u80fd\u591f\u5feb\u901f\u5173\u8054\u96be\u70b9\u3002\uff08\u6700\u597d\u4e5f\u80cc\u4e0b\u6765\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u9898\u76ee\uff0c\u8bb0\u4e0b\u6765\u7b97\u6cd5\u6b65\u9aa4\uff08\u7406\u89e3\u8bb0\u5fc6\u4e0b\u6765\uff09",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e3b\u5e72\u5212\u5206\u4e3a1-3\u4e2a\u5927\u6b65\u9aa4"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u4e2a\u5927\u6b65\u9aa4\u6309\u9700\u8981\u518d\u5212\u5206\u4e3a1-3\u4e2a\u5c0f\u6b65\u9aa4\u3002\u5982\u679c\u6709\u9700\u8981\uff0c\u5c0f\u6b65\u9aa4\u6309\u6b64\u89c4\u5f8b\u7ee7\u7eed\u62c6\u5206\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u5c06\u6838\u5fc3\u9898\u89e3\u7ed3\u6784\u8bb0\u4e0b\u6765\uff0c\u5f62\u6210\u81ea\u5df1\u7684\u201c\u745e\u58eb\u519b\u5200\u201d\uff0c\u65b9\u4fbf\u65e5\u540e\u4e3e\u4e00\u53cd\u4e09\u3002\uff08\u7406\u89e3\u8bb0\u5fc6\u4e0b\u6765\uff09")),(0,l.kt)("h2",{id:"\u5982\u4f55\u9762\u5bf9\u96be\u9898\u76ee"},"\u5982\u4f55\u9762\u5bf9\u96be\u9898\u76ee\uff1f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9996\u5148\u4e0d\u8981\u754f\u60e7\u6bd4\u8f83\u96be\u7684\u9898\u76ee"),(0,l.kt)("li",{parentName:"ul"},"\u9898\u76ee\u96be\u7684\u6839\u672c\u662f\uff1a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u5c06\u4eba\u7c7b\u89d2\u5ea6\u770b\u5230\u7684\u95ee\u9898\uff0c\u8f6c\u6362\u5230\u8ba1\u7b97\u673a\u89d2\u5ea6\u7684 for\uff0cif \u7b49\uff0c\u7a0b\u5e8f\u7ed3\u6784\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u4f7f\u7528\u7a0b\u5e8f\u65b9\u5f0f\u83b7\u5f97\u9898\u76ee\u6700\u7ec8\u89e3\u3002\uff08\u53ef\u80fd\u80fd\u591f\u8089\u773c\u770b\u51fa\u89e3\uff0c\u4f46\u662f\u65e0\u6cd5\u7528\u7a0b\u5e8f\u89e3\uff09"))),(0,l.kt)("li",{parentName:"ul"},"\u5206\u6790\u9898\u76ee\u4e3a\u4ec0\u4e48\u96be\uff1f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\u6700\u96be\u7684\u9898\uff0c\u5c31\u662f\u9898\u76ee\u770b\u4e0d\u61c2\u3002",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5927\u90e8\u5206\u9898\u76ee\u90fd\u662f\u9762\u5411\u4eba\u7c7b\u601d\u7ef4\u6765\u63cf\u8ff0\u7684\uff0c\u770b\u6e05\u695a\u5b57\u9762\u610f\u601d\u8fdc\u8fdc\u4e0d\u591f\uff0c\u9700\u8981\u8f6c\u6362\u5230\u8ba1\u7b97\u673a\u89d2\u5ea6\u3002"))),(0,l.kt)("li",{parentName:"ul"},"\u5373\u4fbf\u662f\u770b\u4e86\u9898\u76ee\u89e3\u9898\u601d\u8def\uff0c\u6709\u4e86\u6b65\u9aa4\uff0c\u4f46\u662f\u8fd8\u662f\u65e0\u6cd5\u72ec\u7acb\u81ea\u4e3b\u89e3\u9898",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u89e3\u9898\u7ed3\u6784\u590d\u6742",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"for\u5faa\u73af\u7ed3\u6784\u591a"),(0,l.kt)("li",{parentName:"ul"},"if\u6761\u4ef6\u591a"),(0,l.kt)("li",{parentName:"ul"},"\u8fb9\u754c\u503c\u7279\u6b8a\u60c5\u51b5\u591a"),(0,l.kt)("li",{parentName:"ul"},"\u6c42\u89e3\u6838\u5fc3\u70b9\u4e0d\u5bb9\u6613\u5f04\u6e05\u695a"))))))),(0,l.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u96be\u9898\u76ee\uff0c\u80af\u5b9a\u8981\u82b1\u65f6\u95f4\uff01\u4e0d\u8981\u5984\u56fe\u81ea\u5df1\u8f7b\u800c\u6613\u4e3e\u641e\u5b9a\uff01",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8981\u5bf9\u75c7\u4e0b\u836f\uff0c\u627e\u5230\u75db\u70b9\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5148\u89e3\u51b3\u4e3b\u8981\u77db\u76fe\uff0c\u6b21\u8981\u77db\u76fe\u4e0d\u653b\u81ea\u7834\u3002")))))}c.isMDXComponent=!0}}]);