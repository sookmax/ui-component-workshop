import{j as e}from"./jsx-runtime-3cfe299f.js";import{r as n}from"./index-c4905b50.js";import{c as x}from"./cn-ad0adaed.js";import{B as h}from"./Button-b7c11d05.js";import{C as f,a as v,b as j,c as b,d as C}from"./Command.primitives-3a0dff73.js";import{P as w,a as y,b as g}from"./Popover.primitives-145e37a1.js";import{c as N}from"./createLucideIcon-4c4c1dac.js";import{C as S}from"./check-cf4fb5f2.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./index-07d1f67e.js";import"./index-335037e7.js";import"./react-icons.esm-bc0d759c.js";import"./index-027e524b.js";import"./index-ad15057c.js";import"./index-f2f799ef.js";import"./Combination-71befa4f.js";import"./index-c7280168.js";import"./index-a5fdc2d6.js";import"./index-9b5f736f.js";import"./index-31d4400e.js";const k=N("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]),p=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"}];function D(){var m;const[r,s]=n.useState(!1),[o,d]=n.useState("");return e.jsxs(w,{open:r,onOpenChange:s,children:[e.jsx(y,{asChild:!0,children:e.jsxs(h,{variant:"outline",role:"combobox","aria-expanded":r,className:"w-[200px] justify-between",children:[o?(m=p.find(a=>a.value===o))==null?void 0:m.label:"Select framework...",e.jsx(k,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(g,{className:"w-[200px] p-0",children:e.jsxs(f,{defaultValue:o,children:[e.jsx(v,{placeholder:"Search framework..."}),e.jsx(j,{children:"No framework found."}),e.jsx(b,{children:p.map(a=>e.jsxs(C,{value:a.value,onSelect:l=>{d(l===o?"":l),s(!1)},children:[e.jsx(S,{className:x("mr-2 h-4 w-4",o===a.value?"opacity-100":"opacity-0")}),a.label]},a.value))})]})})]})}const W={component:D,parameters:{layout:"centered"},tags:["autodocs"]},t={};var i,c,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const X=["Default"];export{t as Default,X as __namedExportsOrder,W as default};
//# sourceMappingURL=Combobox1.stories-725f9827.js.map