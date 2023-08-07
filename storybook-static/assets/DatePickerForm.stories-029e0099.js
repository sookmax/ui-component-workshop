import{j as r}from"./jsx-runtime-3cfe299f.js";import{o as l,d as p,t as d,a as u,T as x}from"./Toast-e4ce35e5.js";import{a as f,F as h}from"./index.esm-19d5e87e.js";import{c as j}from"./cn-ad0adaed.js";import{B as a}from"./Button-b7c11d05.js";import{f as b,C as g}from"./Calender-f4c3bc81.js";import{F,a as y,c as v,b as N,d as S,e as w}from"./Form.primitives-3b66b964.js";import{P as C,a as D,b as P}from"./Popover.primitives-001e5c13.js";import{C as T}from"./calendar-ba84b768.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./index-07d1f67e.js";import"./index-027e524b.js";import"./index-ad15057c.js";import"./index-746ec687.js";import"./index-d3b97010.js";import"./index-621147ae.js";import"./index-e8915684.js";import"./index-1eb4be9b.js";import"./createLucideIcon-4c4c1dac.js";import"./react-icons.esm-7b021bee.js";import"./Label-f52c5603.js";import"./Combination-e67dadcc.js";import"./index-335037e7.js";import"./index-c7280168.js";import"./index-e51442e3.js";import"./index-9b5f736f.js";const E=l({dob:p({required_error:"A date of birth is required."})});function M(){const o=f({resolver:d(E)});function c(e){console.log(e),u({title:"You submitted the following values:",description:r.jsx("pre",{className:"mt-2 w-[340px] rounded-md bg-slate-950 p-4",children:r.jsx("code",{className:"text-white",children:JSON.stringify(e,null,2)})})})}return r.jsx(h,{...o,children:r.jsxs("form",{onSubmit:o.handleSubmit(c),className:"space-y-8",children:[r.jsx(F,{control:o.control,name:"dob",render:({field:e})=>r.jsxs(y,{className:"flex flex-col",children:[r.jsx(v,{children:"Date of birth"}),r.jsxs(C,{children:[r.jsx(D,{asChild:!0,children:r.jsx(N,{children:r.jsxs(a,{ref:e.ref,variant:"outline",className:j("pl-3 text-left font-normal",!e.value&&"text-gray-500",o.formState.errors.dob&&"focus:ring-red-700 focus:ring-2 focus:ring-offset-2 border-red-500"),children:[e.value?b(e.value,"yyyy-MM-dd"):r.jsx("span",{children:"Pick a date"}),r.jsx(T,{className:"ml-auto h-4 w-4 opacity-50"})]})})}),r.jsx(P,{className:"w-auto p-0",align:"start",children:r.jsx(g,{selected:e.value,onSelect:e.onChange,disabled:s=>s>new Date||s<new Date("1900-01-01"),initialFocus:!0})})]}),r.jsx(S,{children:"Your date of birth is used to calculate your age."}),r.jsx(w,{})]})}),r.jsx(a,{type:"submit",children:"Submit"})]})})}const ir={component:M,parameters:{layout:"centered"},decorators:[o=>r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"w-[350px]",children:r.jsx(o,{})}),r.jsx(x,{})]})],args:{placeholder:"Email"},tags:["autodocs"]},t={};var i,m,n;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(n=(m=t.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};const mr=["Default"];export{t as Default,mr as __namedExportsOrder,ir as default};
//# sourceMappingURL=DatePickerForm.stories-029e0099.js.map