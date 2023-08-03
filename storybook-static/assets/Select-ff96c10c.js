import{j as e}from"./jsx-runtime-3cfe299f.js";import{$ as x,a as $,b as h,c as b,d as g,e as y,f as j,g as w,h as N,i as v,j as V,k as _}from"./index-d5936071.js";import{c as a}from"./cn-ad0adaed.js";import{C as q,a as C}from"./react-icons.esm-7b021bee.js";import{r as n}from"./index-c4905b50.js";function o({placeholder:s,label:r,items:c,className:i,disabled:f,triggerId:p}){const[l,m]=n.useState(!1),[d,u]=n.useState();return e.jsxs(x,{open:l,onOpenChange:m,value:d,onValueChange:u,children:[e.jsxs($,{className:a("flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm","placeholder:text-gray-200 disabled:cursor-not-allowed disabled:opacity-50","focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2",i),disabled:f,id:p,children:[e.jsx(h,{asChild:!!(!d&&s),placeholder:s&&e.jsx("span",{className:"text-gray-400",children:s})}),e.jsx(b,{className:a("transition-transform",l&&"rotate-180"),children:e.jsx(q,{className:"h-4 w-4 opacity-50"})})]}),e.jsx(g,{children:e.jsx(y,{className:a("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1"),position:"popper",children:e.jsx(j,{className:a("p-1","h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:e.jsxs(w,{children:[r&&e.jsx(N,{className:a("py-1.5 pl-8 pr-2 text-sm font-semibold"),children:r}),c.map(t=>e.jsxs(v,{value:t.value,className:a("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-gray-200 data-[disabled]:pointer-events-none data-[disabled]:opacity-50"),children:[e.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:e.jsx(V,{children:e.jsx(C,{className:"h-4 w-4"})})}),e.jsx(_,{children:t.label?t.label:t.value})]},t.value))]})})})})]})}try{o.displayName="Select",o.__docgenInfo={description:"",displayName:"Select",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"Item[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},triggerId:{defaultValue:null,description:"",name:"triggerId",required:!1,type:{name:"string"}}}}}catch{}export{o as S};
//# sourceMappingURL=Select-ff96c10c.js.map