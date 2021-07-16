(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(157)),i=n(161),c=n(162),l={id:"react-i18next",title:"react-i18next",sidebar_label:"react-i18next",description:"Using i18n with React"},s={unversionedId:"react/i18n/react-i18next",id:"react/i18n/react-i18next",isDocsHomePage:!1,title:"react-i18next",description:"Using i18n with React",source:"@site/docs/react/i18n/react-i18next.md",slug:"/react/i18n/react-i18next",permalink:"/superplate/docs/react/i18n/react-i18next",editUrl:"https://github.com/pankod/superplate/tree/master/documentation/docs/react/i18n/react-i18next.md",version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1620740656,sidebar_label:"react-i18next",sidebar:"someSidebar",previous:{title:"Zustand",permalink:"/superplate/docs/react/state-management/zustand"},next:{title:"ESLint",permalink:"/superplate/docs/react/linter/eslint"}},u=[{value:"How to use react-i18next?",id:"how-to-use-react-i18next",children:[]},{value:"Adding react-i18next to your project later",id:"adding-react-i18next-to-your-project-later",children:[]},{value:"Translate your content",id:"translate-your-content",children:[]}],p={toc:u};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"react-i18next is a powerful internationalization framework for React / React Native which is based on i18next."),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.i18next.com/"}),"Refer to official documentation for detailed usage. ","\u2192")),Object(o.b)("p",null,"superplate serves an optional ",Object(o.b)("inlineCode",{parentName:"p"},"i18n")," plugin that sets translation feature using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://react.i18next.com/"}),"react-i18next"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="i18n.js"',title:'"i18n.js"'}),'import i18n from "i18next";\nimport { initReactI18next } from "react-i18next";\n\nconst resources = {\n  en: {\n    translation: {\n      hello: "Hello",\n      greet: "Hello, {{name}}!",\n      documentation: "Go To Documentation",\n    },\n  },\n  tr: {\n    translation: {\n      hello: "Merhaba",\n      greet: "Merhaba, {{name}}!",\n      documentation: "D\xf6k\xfcmantasyona Git",\n    },\n  },\n};\n\ni18n\n  .use(initReactI18next) \n  .init({\n    resources,\n    lng: "en",\n\n    keySeparator: false,\n\n    interpolation: {\n      escapeValue: false,\n    },\n  });\n\nexport default i18n;\n\n')),Object(o.b)("h3",{id:"how-to-use-react-i18next"},"How to use react-i18next?"),Object(o.b)("p",null,"Use ",Object(o.b)("inlineCode",{parentName:"p"},"changeLanguage()")," method of ",Object(o.b)("inlineCode",{parentName:"p"},"i18n")," to set current language and trigger the language change manually."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"t()")," function can be used to fetch the translation."),Object(o.b)("p",null,"You can specify key as a String. It resolves key-value pair from ",Object(o.b)("inlineCode",{parentName:"p"},"i18n.js")," file and returns value as a string."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="components/examples/translate',title:'"components/examples/translate'}),'import React from "react";\nimport { useTranslation } from "react-i18next";\n\nexport const TranslateExample: React.FC = () => {\n  // https://react.i18next.com/guides/quick-start#translate-your-content\n  const { t, i18n } = useTranslation();\n\n  const changeLanguage = (lang) => i18n.changeLanguage(lang);\n\n  return (\n    <div>\n      <header>\n        <h2>{t("hello")}</h2>\n        <div>\n          <button onClick={() => changeLanguage("tr")}>\ud83c\uddf9\ud83c\uddf7 T\xfcrk\xe7e</button>\n          <button onClick={() => changeLanguage("en")}>\ud83c\uddfa\ud83c\uddf8 English</button>\n        </div>\n      </header>\n      <main>\n        <p>{t("greet", { name: "World" })}</p>\n      </main>\n      <footer>\n        <a\n          href="https://react.i18next.com/"\n          target="_blank"\n          rel="noopener noreferrer"\n        >\n          {t("documentation")}\n        </a>\n      </footer>\n    </div>\n  );\n};\n\n')),Object(o.b)("br",null),Object(o.b)("h3",{id:"adding-react-i18next-to-your-project-later"},"Adding react-i18next to your project later"),Object(o.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install react-i18next i18next --save\n"))),Object(o.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{})," yarn add react-i18next i18next\n")))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a new file i18n.js beside your index.js containing following content")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/i18n.js"',title:'"src/i18n.js"'}),'import i18n from "i18next";\nimport { initReactI18next } from "react-i18next";\n\n// the translations\n// (tip move them in a JSON file and import them)\nconst resources = {\n  en: {\n    translation: {\n      "Welcome to React": "Welcome to React and react-i18next"\n    }\n  },\n  fr: {\n    translation: {\n      "Welcome to React": "Bienvenue \xe0 React et react-i18next"\n    }\n  }\n};\n\ni18n\n  .use(initReactI18next) // passes i18n down to react-i18next\n  .init({\n    resources,\n    lng: "en",\n\n    keySeparator: false, // we do not use keys in form messages.welcome\n\n    interpolation: {\n      escapeValue: false // react already safes from xss\n    }\n  });\n\n  export default i18n;\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Then import that in ",Object(o.b)("inlineCode",{parentName:"li"},"index.js"),":")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="index.js" {3}',title:'"index.js"',"{3}":!0}),'import React, { Component } from "react";\nimport ReactDOM from "react-dom";\nimport \'./i18n\';\nimport App from \'./App\';\n\n// append app to dom\nReactDOM.render(\n  <App />,\n  document.getElementById("root")\n);\n')),Object(o.b)("h2",{id:"translate-your-content"},"Translate your content"),Object(o.b)("p",null,"Learn more about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://react.i18next.com/guides/quick-start#translate-your-content"}),"translate ","\u2192")))}b.isMDXComponent=!0},157:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(i,".").concat(m)]||p[m]||b[m]||o;return n?r.a.createElement(d,c(c({ref:t},s),{},{components:n})):r.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},158:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},159:function(e,t,n){"use strict";var a=n(0),r=n(160);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},160:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},161:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(159),i=n(158),c=n(55),l=n.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,b=e.groupId,m=e.className,d=Object(o.a)(),f=d.tabGroupChoices,O=d.setTabGroupChoices,g=Object(a.useState)(c),j=g[0],y=g[1],x=a.Children.toArray(e.children);if(null!=b){var h=f[b];null!=h&&h!==j&&p.some((function(e){return e.value===h}))&&y(h)}var v=function(e){y(e),null!=b&&O(b,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},n)}))),t?Object(a.cloneElement)(x.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},x.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}},162:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);