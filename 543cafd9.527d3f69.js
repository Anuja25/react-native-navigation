(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(1),r=a(9),o=(a(0),a(210)),i={id:"statusBar-docs",title:"StatusBar",sidebar_label:"StatusBar"},c={id:"statusBar-docs",title:"StatusBar",description:"The StatusBar appearance is controlled through options.",source:"@site/docs/statusbar-docs.mdx",permalink:"/react-native-navigation/docs/statusBar-docs",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/statusbar-docs.mdx",sidebar_label:"StatusBar",sidebar:"docs",previous:{title:"Themes",permalink:"/react-native-navigation/docs/theme"},next:{title:"Orientation",permalink:"/react-native-navigation/docs/orientation"}},s=[{value:"Changing StatusBar style dynamically",id:"changing-statusbar-style-dynamically",children:[]},{value:"How keep current StatusBar color when displaying screens",id:"how-keep-current-statusbar-color-when-displaying-screens",children:[]}],l={rightToc:s};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The StatusBar appearance is controlled through options."),Object(o.b)("p",null,"For example, the following options will change the StatusBar background color to white will use dark colors for the StatusBar content (time, battery information, notification icons etc)"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"options: {\n  statusBar: {\n    backgroundColor: 'white',\n    style: 'dark'\n  }\n}\n")),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Compatibility with StatusBar component")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"React native's ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactnative.dev/docs/statusbar#__docusaurus"}),"StatusBar")," component is incompatible with React Native Navigation and you should avoid using it."))),Object(o.b)("h2",{id:"changing-statusbar-style-dynamically"},"Changing StatusBar style dynamically"),Object(o.b)("p",null,"As the StatusBar is controlled through options, it can be configured dynamically by calling ",Object(o.b)("inlineCode",{parentName:"p"},"Navigation.mergeOptions")," with the desired StatusBar options."),Object(o.b)("p",null,"For example, here's how you would hide the StatusBar dynamically"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.mergeOptions(this.props.componentId, {\n  statusBar: {\n    visible: false\n  }\n});\n")),Object(o.b)("h2",{id:"how-keep-current-statusbar-color-when-displaying-screens"},"How keep current StatusBar color when displaying screens"),Object(o.b)("p",null,"When screens are displayed, the StatusBar color always changes to the color associated with the current screen. If a color isn't specified for a given screen (and thus for the StatusBar), the default (System default or from defaultOptions) color is used. Sometimes you might want to keep the current StatusBar color, for example when displaying an alert or a toast. To keep StatusBar color unchanged when displaying a screen, use ",Object(o.b)("inlineCode",{parentName:"p"},"null")," as a StatusBar color."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"options: {\n  statusBar: {\n    backgroundColor: null\n  }\n}\n")))}u.isMDXComponent=!0},210:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),b=n,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return a?r.a.createElement(m,c({ref:t},l,{components:a})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);