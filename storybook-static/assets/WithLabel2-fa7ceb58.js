import{j as a}from"./jsx-runtime-3cfe299f.js";import{R as f,r as u}from"./index-c4905b50.js";import{a as h,c as g,k as b,b as N,$,d as C,e as w,f as j,i as v,j as I}from"./index-d5936071.js";import{c as o}from"./cn-ad0adaed.js";import{c as V}from"./createLucideIcon-4c4c1dac.js";import{C as q}from"./check-cf4fb5f2.js";const R=V("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),n=b,l=N,_=f.createContext({open:!1});function d(e){const[t,r]=u.useState(!1);return a.jsx(_.Provider,{value:{open:t},children:a.jsx($,{open:t,onOpenChange:r,...e})})}const c=f.forwardRef(function({children:t,className:r,...s},x){const{open:y}=u.useContext(_);return a.jsxs(h,{ref:x,className:o(`flex h-10 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm
    placeholder:text-gray-200 
    disabled:cursor-not-allowed 
    disabled:opacity-50
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2`,r),...s,children:[t,a.jsx(g,{className:o("transition-transform ml-2",y&&"rotate-180"),children:a.jsx(R,{className:"h-4 w-4 opacity-50"})})]})});function i({children:e,className:t,...r}){return a.jsx(C,{children:a.jsx(w,{...r,className:o(`
        relative
        z-50
        min-w-[8rem] 
        overflow-hidden 
        rounded-md 
        border bg-white shadow-md 
        data-[side=bottom]:translate-y-1 
        data-[side=left]:-translate-x-1 
        data-[side=right]:translate-x-1 
        data-[side=top]:-translate-y-1 
        data-[state=open]:animate-in 
        data-[state=closed]:animate-out 
        data-[state=closed]:fade-out-0 
        data-[state=open]:fade-in-0 
        data-[state=closed]:zoom-out-95 
        data-[state=open]:zoom-in-95 
        data-[side=bottom]:-enter-translate-y-2
        data-[side=left]:enter-translate-x-2 
        data-[side=right]:-enter-translate-x-2 
        data-[side=top]:enter-translate-y-2 
        `,t),position:"popper",children:a.jsx(j,{className:`
          h-[var(--radix-select-trigger-height)] 
          min-w-[var(--radix-select-trigger-width)]
          w-full p-1
          `,children:e})})})}function p({children:e,className:t,...r}){return a.jsxs(v,{className:o(`relative flex w-full cursor-default select-none items-center 
        rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none 
        focus:bg-gray-200 
        data-[disabled]:pointer-events-none 
        data-[disabled]:opacity-50`,t),...r,children:[a.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(I,{children:a.jsx(q,{className:"h-4 w-4"})})}),e]})}try{d.displayName="Root",d.__docgenInfo={description:"",displayName:"Root",props:{}}}catch{}try{i.displayName="Content",i.__docgenInfo={description:"",displayName:"Content",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="Item",p.__docgenInfo={description:"",displayName:"Item",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{n.displayName="ItemText",n.__docgenInfo={description:"",displayName:"ItemText",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{l.displayName="Value",l.__docgenInfo={description:"",displayName:"Value",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{c.displayName="Trigger",c.__docgenInfo={description:"",displayName:"Trigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}function m({className:e,label:t,target:r,labelPosition:s="top"}){return a.jsxs("div",{className:o(s==="top"&&"flex flex-col-reverse",s==="left"&&"flex flex-row-reverse items-center",s==="right"&&"flex items-center",e),children:[r({className:"peer"}),t({className:o(s==="top"&&"mb-1",s==="left"&&"mr-2",s==="right"&&"ml-2 grow","text-xs text-slate-600","peer-disabled:cursor-not-allowed peer-disabled:opacity-70","aria-disabled:cursor-not-allowed aria-disabled:opacity-70")})]})}try{m.displayName="WithLabel2",m.__docgenInfo={description:"",displayName:"WithLabel2",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},labelPosition:{defaultValue:{value:"top"},description:"",name:"labelPosition",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'},{value:'"right"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"(props: { className: string; }) => ReactNode"}},target:{defaultValue:null,description:"",name:"target",required:!0,type:{name:"(props: { className: string; }) => ReactNode"}}}}}catch{}export{i as C,p as I,d as R,c as T,l as V,m as W,n as a};
//# sourceMappingURL=WithLabel2-fa7ceb58.js.map
