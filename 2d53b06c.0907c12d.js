(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{155:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||c;return n?r.a.createElement(d,s(s({ref:t},l),{},{components:n})):r.a.createElement(d,s({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},156:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},157:function(e,t,n){"use strict";var a=n(0),r=n(158);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},158:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a),c=n(157),o=n(156),s=n(55),i=n.n(s),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,u=e.values,b=e.groupId,m=e.className,d=Object(c.a)(),h=d.tabGroupChoices,g=d.setTabGroupChoices,y=Object(a.useState)(s),f=y[0],j=y[1],O=a.Children.toArray(e.children);if(null!=b){var v=h[b];null!=v&&v!==f&&u.some((function(e){return e.value===v}))&&j(v)}var q=function(e){j(e),null!=b&&g(b,e)},_=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(o.a)("tabs__item",i.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return _.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(_,e.target,e)},onFocus:function(){return q(t)},onClick:function(){q(t)}},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},160:function(e,t,n){"use strict";var a=n(3),r=n(0),c=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return c.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),c=(n(0),n(155)),o=n(159),s=n(160),i={id:"graphql-request",title:"graphql-request",sidebar_label:"graphql-request",description:"How to Fetch GraphQL Data in React with graphql-request?"},l={unversionedId:"react/graphql-request",id:"react/graphql-request",isDocsHomePage:!1,title:"graphql-request",description:"How to Fetch GraphQL Data in React with graphql-request?",source:"@site/docs/react/graphql-request.md",slug:"/react/graphql-request",permalink:"/superplate/docs/react/graphql-request",editUrl:"https://github.com/pankod/superplate/tree/master/documentation/docs/react/graphql-request.md",version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1620740656,sidebar_label:"graphql-request",sidebar:"someSidebar",previous:{title:"Apollo GraphQL Support",permalink:"/superplate/docs/react/apollo-graphql"},next:{title:"SWR",permalink:"/superplate/docs/react/hooks/swr"}},p=[{value:"Generating schema types",id:"generating-schema-types",children:[]},{value:"Adding graphql-request to your project later",id:"adding-graphql-request-to-your-project-later",children:[]}],u={toc:p};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/prisma-labs/graphql-request"}),"graphql-request")," is a simple & lightweight GraphQL client."),Object(c.b)("p",null,"superplate comes with optional graphql-request feature plugin. We'll show basic usage of graphql-request with ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/r-spacex/SpaceX-API"}),"SpaceX-API"),"."),Object(c.b)("p",null,"We'll define the shape of the query we'll use to fetch ",Object(c.b)("inlineCode",{parentName:"p"},"launchesPast")," from SpaceX-API."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="components/graphQLRequestExample/graphql.ts"',title:'"components/graphQLRequestExample/graphql.ts"'}),'import { gql } from "graphql-request";\n\nexport const GET_LAUNCHES = gql`\n    query GetLaunches($limit: Int) {\n        launchesPast(limit: $limit) {\n            mission_name\n            links {\n                mission_patch_small\n            }\n            rocket {\n                rocket_name\n            }\n            id\n        }\n    }\n`;\n')),Object(c.b)("br",null),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="components/GraphQLRequestExample/index.tsx"',title:'"components/GraphQLRequestExample/index.tsx"'}),'import React from "react";\nimport { request } from "graphql-request";\n\nimport { GET_LAUNCHES } from "./graphql";\nimport { GetLaunchesQuery } from "__generated__/__types__";\n\nconst endpoint = "https://api.spacex.land/graphql/";\n\nexport const GraphQLRequestExample: React.FC = () => {\n    const [launches, setLaunches] = React.useState<GetLaunchesQuery>();\n    const [hasData, setHasData] = React.useState(false);\n\n    if (!hasData) {\n        request(endpoint, GET_LAUNCHES, { limit: 1 }).then(\n            (data: GetLaunchesQuery) => {\n                setLaunches(data);\n                setHasData(true);\n            },\n        );\n    }\n\n    if (!hasData) return <div>Loading...</div>;\n\n    const { links, mission_name, rocket } = launches;\n\n    return (\n      <>\n          <div>Last Space-X Launch</div>\n          <div>\n              <img src={links.mission_patch_small} />\n              <div>\n                  <h3>{mission_name}</h3>\n                  <div>\n                      <h4>Rocket:</h4>\n                      <span>{rocket.rocket_name}</span>\n                  </div>\n              </div>\n          </div>\n      </>\n    );\n};\n')),Object(c.b)("br",null),Object(c.b)("p",null,"Since we are using TypeScript in the project, also import the necessary types that are generated from SpaceX-API schema definitions:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="components/GraphQLRequestExample/index.tsx"',title:'"components/GraphQLRequestExample/index.tsx"'}),'import { GetLaunchesQuery } from "__generated__/__types__";\n')),Object(c.b)("h3",{id:"generating-schema-types"},"Generating schema types"),Object(c.b)("p",null,"To generate the types automatically we use ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/dotansimha/graphql-code-generator"}),"graphql-code-generator")," and need to set configs in ",Object(c.b)("inlineCode",{parentName:"p"},"codegen.yaml")," file."),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql-code-generator.com/docs/getting-started/codegen-config"}),"Refer to  documentation for detailed usage  ","\u2192")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="codegen.yaml"',title:'"codegen.yaml"'}),"# codegen.yaml\nschema: https://api.spacex.land/graphql/\ndocuments: ./src/**/**/graphql.ts\ngenerates:\n    ./__generated__/__types__.ts:\n        config:\n            onlyOperationTypes: true\n            preResolveTypes: true\n        plugins:\n            - typescript\n            - typescript-operations\n")),Object(c.b)("br",null),Object(c.b)("p",null,"Then run the following command which is defined in package.json.  "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="package.json"',title:'"package.json"'}),'  "scripts": {\n    ...\n    "codegen:generate": "graphql-codegen"\n  },\n  "devDependencies": {\n      ...\n      "@graphql-codegen/cli": "^1.20.0",\n      "@graphql-codegen/typescript": "^1.20.0",\n      "@graphql-codegen/typescript-operations": "^1.17.13"\n  }\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run codegen:generate\n")),Object(c.b)("p",null,"Running this command will generate types into ",Object(c.b)("inlineCode",{parentName:"p"},"__generated__")," folder in project root directory automatically."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="__generated__/__types__.ts"',title:'"__generated__/__types__.ts"'}),'export type Maybe<T> = T | null;\nexport type Exact<T extends { [key: string]: unknown }> = {\n    [K in keyof T]: T[K];\n};\n\nexport type Scalars = {\n    ID: string;\n    String: string;\n    Boolean: boolean;\n    Int: number;\n    Float: number;\n    uuid: any;\n    timestamptz: any;\n    Date: any;\n    ObjectID: any;\n};\n\nexport type GetLaunchesQueryVariables = Exact<{\n    limit?: Maybe<Scalars["Int"]>;\n}>;\n\nexport type GetLaunchesQuery = {\n    __typename?: "Query";\n    launchesPast?: Maybe<\n        Array<\n            Maybe<{\n                __typename?: "Launch";\n                mission_name?: Maybe<string>;\n                launch_year?: Maybe<string>;\n                id?: Maybe<string>;\n                links?: Maybe<{\n                    __typename?: "LaunchLinks";\n                    mission_patch_small?: Maybe<string>;\n                    mission_patch?: Maybe<string>;\n                }>;\n                rocket?: Maybe<{\n                    __typename?: "LaunchRocket";\n                    rocket_name?: Maybe<string>;\n                }>;\n            }>\n        >\n    >;\n};\n')),Object(c.b)("br",null),Object(c.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"All this work will be handled automatically by CLI, so you don\u2019t need to do anything extra as long as you choose ",Object(c.b)("strong",{parentName:"p"},"graphql-request")," feature plugin during the project creation phase."))),Object(c.b)("h2",{id:"adding-graphql-request-to-your-project-later"},"Adding graphql-request to your project later"),Object(c.b)("p",null,"If you want to add graphql-request to your existing project first install the dependencies"),Object(c.b)(o.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(c.b)(s.a,{value:"npm",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"npm i graphql-request graphql\n"))),Object(c.b)(s.a,{value:"yarn",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add graphql-request graphql\n")))),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#generating-schema-types"}),"Follow here to generate types")," "))}b.isMDXComponent=!0}}]);