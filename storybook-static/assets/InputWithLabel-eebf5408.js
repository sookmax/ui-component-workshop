import{j as r}from"./jsx-runtime-3cfe299f.js";import{c as s}from"./cn-ad0adaed.js";import{I as u}from"./Input-785f32be.js";import{r as o}from"./index-c4905b50.js";import{_ as m}from"./extends-98964cd2.js";import{b as f}from"./index-68f9b7fa.js";const b=o.forwardRef((e,l)=>o.createElement(f.label,m({},e,{ref:l,onMouseDown:a=>{var t;(t=e.onMouseDown)===null||t===void 0||t.call(e,a),!a.defaultPrevented&&a.detail>1&&a.preventDefault()}}))),_=b,n=o.forwardRef(function({className:l,...a},t){return r.jsx(_,{ref:t,className:s("text-sm font-medium leading-none",l),...a})});try{n.displayName="Label",n.__docgenInfo={description:"",displayName:"Label",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}function i({input:e={},label:l={},className:a}){const{className:t,...c}=l,{className:p,...d}=e;return r.jsxs("div",{className:s("relative",a),children:[r.jsx(u,{className:s("peer h-full",p),...d}),r.jsx(n,{className:s("absolute bottom-full w-full","mb-1 text-xs text-slate-600","peer-disabled:cursor-not-allowed peer-disabled:opacity-70",t),...c})]})}try{i.displayName="InputWithLabel",i.__docgenInfo={description:"",displayName:"InputWithLabel",props:{input:{defaultValue:{value:"{}"},description:"",name:"input",required:!1,type:{name:"InputProps"}},label:{defaultValue:{value:"{}"},description:"",name:"label",required:!1,type:{name:'(Omit<LabelProps & RefAttributes<HTMLLabelElement>, "ref"> & RefAttributes<HTMLLabelElement>)'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{i as I};
//# sourceMappingURL=InputWithLabel-eebf5408.js.map