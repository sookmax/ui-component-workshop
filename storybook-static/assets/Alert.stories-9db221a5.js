import{j as r}from"./jsx-runtime-3cfe299f.js";import{I as b,E as S}from"./react-icons.esm-7b021bee.js";import{r as p}from"./index-c4905b50.js";import{c}from"./cn-ad0adaed.js";import{M,f as k,m as R}from"./benefit-of-regular-exercise-b33d2a55.js";const l=p.forwardRef(({className:e,...a},t)=>r.jsx("div",{ref:t,role:"alert",className:c("relative w-full rounded-lg border p-4",e),...a}));l.displayName="Alert";const N=p.forwardRef(({className:e,...a},t)=>r.jsx("h5",{ref:t,className:c("font-medium leading-none tracking-tight",e),...a}));N.displayName="AlertTitle";const I=p.forwardRef(({className:e,...a},t)=>r.jsx("div",{ref:t,className:c("pt-4 text-sm [&_p]:leading-relaxed",e),...a}));I.displayName="AlertDescription";try{l.displayName="Alert",l.__docgenInfo={description:"",displayName:"Alert",props:{}}}catch{}function d({title:e,description:a,variant:t="info"}){return e?r.jsxs(l,{className:c([t==="info"&&"border-gray-400 [&_svg]:text-gray-500",t==="warning"&&"border-red-500 text-red-700 [&_*]:text-red-700"]),children:[r.jsxs("div",{className:"flex items-center [&>svg]:mr-2 [&>svg]:shrink-0",children:[t==="info"?r.jsx(b,{className:"h-4 w-4"}):t==="warning"?r.jsx(S,{className:"h-4 w-4"}):null,r.jsx(N,{children:e})]}),a&&r.jsx(I,{children:r.jsx(M,{children:a})})]}):null}try{d.displayName="Alert",d.__docgenInfo={description:"",displayName:"Alert",props:{title:{defaultValue:null,description:"The title of the alert",name:"title",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"The description of the alert\n- `description` may contain markdown syntaxes and/or html tags.",name:"description",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"info"},description:"A variant of the alert",name:"variant",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'}]}}}}}catch{}const E={component:d,decorators:[e=>r.jsx("div",{className:"w-[500px] bg-white",children:r.jsx(e,{})})],parameters:{layout:"centered"}},n={args:{title:"The Magic of Storytelling",description:"_Immerse_ yourself in the enchanting world of **storytelling** and learn the `art` of captivating and engaging audiences."}},s={args:{...n.args,variant:"warning"}},o={args:{title:"The Thrill of Adventure Travel"}},m=k(R),i={args:{title:m.attributes.title,description:m.body}};var g,u,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "The Magic of Storytelling",
    description: "_Immerse_ yourself in the enchanting world of **storytelling** and learn the \`art\` of captivating and engaging audiences."
  }
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,y,_;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Info.args,
    variant: "warning"
  }
}`,...(_=(y=s.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};var x,v,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "The Thrill of Adventure Travel"
  }
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var j,A,T;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: parsed.attributes.title,
    description: parsed.body
  }
}`,...(T=(A=i.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const O=["Info","Warning","TitleOnly","RichMarkdown"],C=Object.freeze(Object.defineProperty({__proto__:null,Info:n,RichMarkdown:i,TitleOnly:o,Warning:s,__namedExportsOrder:O,default:E},Symbol.toStringTag,{value:"Module"}));export{C as A,n as I};
//# sourceMappingURL=Alert.stories-9db221a5.js.map
