import{j as e}from"./jsx-runtime-3cfe299f.js";import{o as b,c as j,s as f,t as F,a as g,T as y}from"./Toast-bd4c893c.js";import{a as v,F as N}from"./index.esm-19d5e87e.js";import{B as S}from"./Button-920fa71e.js";import{C as w}from"./Checkbox-60f7322a.js";import{F as n,a as l,c,d as C,b as k,e as D}from"./Form.primitives-c22dc311.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./index-07d1f67e.js";import"./index-027e524b.js";import"./index-ad15057c.js";import"./index-e64c434c.js";import"./index-619a6d1c.js";import"./index-bdfe594c.js";import"./index-18b101ff.js";import"./index-2634669d.js";import"./index-dca3c3ff.js";import"./cn-ad0adaed.js";import"./createLucideIcon-4c4c1dac.js";import"./index-b8d80492.js";import"./index-9b5f736f.js";import"./react-icons.esm-7b021bee.js";import"./WithLabel-33c17066.js";import"./Label-adaa2da7.js";const T=[{id:"recents",label:"Recents"},{id:"home",label:"Home"},{id:"applications",label:"Applications"},{id:"desktop",label:"Desktop"},{id:"downloads",label:"Downloads"},{id:"documents",label:"Documents"}],B=b({items:j(f()).refine(s=>s.some(a=>a),{message:"You have to select at least one item."})});function E(){const s=v({resolver:F(B),defaultValues:{items:["recents","home"]}});function a(o){g({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(o,null,2)})})})}return e.jsx(N,{...s,children:e.jsxs("form",{onSubmit:s.handleSubmit(a),className:"space-y-8",children:[e.jsx(n,{control:s.control,name:"items",render:()=>e.jsxs(l,{children:[e.jsxs("div",{className:"mb-4",children:[e.jsx(c,{className:"text-base",children:"Sidebar"}),e.jsx(C,{children:"Select the items you want to display in the sidebar."})]}),T.map(o=>e.jsx(n,{control:s.control,name:"items",render:({field:r})=>{var m;return e.jsxs(l,{className:"flex flex-row items-start space-x-3 space-y-0",children:[e.jsx(k,{children:e.jsx(w,{checked:(m=r.value)==null?void 0:m.includes(o.id),onCheckedChange:x=>{var i;return x?r.onChange([...r.value,o.id]):r.onChange((i=r.value)==null?void 0:i.filter(h=>h!==o.id))}})}),e.jsx(c,{className:"font-normal",children:o.label})]},o.id)}},o.id)),e.jsx(D,{})]})}),e.jsx(S,{type:"submit",children:"Submit"})]})})}const re={component:E,parameters:{layout:"centered"},tags:["autodocs"],decorators:[s=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-[450px]",children:e.jsx(s,{})}),e.jsx(y,{})]})]},t={};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const te=["Default"];export{t as Default,te as __namedExportsOrder,re as default};
//# sourceMappingURL=CheckboxForm2.stories-8432f483.js.map
