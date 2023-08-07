import{j as e}from"./jsx-runtime-3cfe299f.js";import{o as h,b as a,t as j,a as f,T as b}from"./Toast-e4ce35e5.js";import{a as y,F as g}from"./index.esm-19d5e87e.js";import{B as F}from"./Button-b7c11d05.js";import{F as o,a as i,c as m,d as c,b as l}from"./Form.primitives-3b66b964.js";import{S as n}from"./Switch-90aae4aa.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./index-07d1f67e.js";import"./index-027e524b.js";import"./index-ad15057c.js";import"./index-746ec687.js";import"./index-d3b97010.js";import"./index-621147ae.js";import"./index-e8915684.js";import"./index-1eb4be9b.js";import"./cn-ad0adaed.js";import"./createLucideIcon-4c4c1dac.js";import"./Label-f52c5603.js";import"./index-5ddb46ba.js";import"./index-b8d80492.js";import"./index-9b5f736f.js";import"./WithLabel-965b7b1d.js";const N=h({marketing_emails:a().default(!1),security_emails:a().default(!0)});function v(){const r=y({resolver:j(N),defaultValues:{marketing_emails:!1,security_emails:!0}});function x(s){f({title:"You submitted the following values:",description:e.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:e.jsx("code",{className:"text-white",children:JSON.stringify(s,null,2)})})})}return e.jsx(g,{...r,children:e.jsxs("form",{onSubmit:r.handleSubmit(x),className:"w-full space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"mb-4 text-lg font-medium",children:"Email Notifications"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{control:r.control,name:"marketing_emails",render:({field:s})=>e.jsxs(i,{className:`
                flex flex-row items-center justify-between rounded-lg border p-4
                space-y-0 space-x-6
                `,children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(m,{className:"text-base",children:"Marketing emails"}),e.jsx(c,{children:"Receive emails about new products, features, and more."})]}),e.jsx(l,{children:e.jsx(n,{checked:s.value,onCheckedChange:s.onChange})})]})}),e.jsx(o,{control:r.control,name:"security_emails",render:({field:s})=>e.jsxs(i,{className:"flex flex-row items-center justify-between rounded-lg border p-4",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx(m,{className:"text-base",children:"Security emails"}),e.jsx(c,{children:"Receive emails about your account security."})]}),e.jsx(l,{children:e.jsx(n,{checked:s.value,onCheckedChange:s.onChange,disabled:!0,"aria-readonly":!0})})]})})]})]}),e.jsx(F,{type:"submit",children:"Submit"})]})})}const Q={component:v,parameters:{layout:"centered"},tags:["autodocs"],decorators:[r=>e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx(b,{})]})]},t={};var d,u,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const U=["Default"];export{t as Default,U as __namedExportsOrder,Q as default};
//# sourceMappingURL=SwitchForm.stories-71287163.js.map