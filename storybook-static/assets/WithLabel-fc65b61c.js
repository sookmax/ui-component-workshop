import{j as l}from"./jsx-runtime-3cfe299f.js";import{r as s}from"./index-c4905b50.js";import{_ as f}from"./extends-98964cd2.js";import{$ as m}from"./index-5b9e656f.js";import{c as o}from"./cn-ad0adaed.js";const p=s.forwardRef((a,t)=>s.createElement(m.label,f({},a,{ref:t,onMouseDown:r=>{var e;(e=a.onMouseDown)===null||e===void 0||e.call(a,r),!r.defaultPrevented&&r.detail>1&&r.preventDefault()}}))),u=p,i=s.forwardRef(function({className:t,...r},e){return l.jsx(u,{ref:e,className:o("text-sm font-medium leading-none",t),...r})});try{i.displayName="Label",i.__docgenInfo={description:"",displayName:"Label",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}function n({className:a,label:t={},children:r,location:e="top"}){const{className:d,...c}=t;return l.jsxs("div",{className:o(e==="top"&&"flex flex-col-reverse",e==="left"&&"flex flex-row-reverse items-center",e==="right"&&"flex items-center",a),children:[r({className:"peer"}),l.jsx(i,{className:o(e==="top"&&"mb-1",e==="left"&&"mr-2",e==="right"&&"ml-2 grow","text-xs text-slate-600","peer-disabled:cursor-not-allowed peer-disabled:opacity-70","aria-disabled:cursor-not-allowed aria-disabled:opacity-70",d),...c})]})}try{n.displayName="WithLabel",n.__docgenInfo={description:"",displayName:"WithLabel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:{value:"{}"},description:"",name:"label",required:!1,type:{name:'(Omit<LabelProps & RefAttributes<HTMLLabelElement>, "ref"> & RefAttributes<HTMLLabelElement>)'}},location:{defaultValue:{value:"top"},description:"",name:"location",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}export{n as W};
//# sourceMappingURL=WithLabel-fc65b61c.js.map
