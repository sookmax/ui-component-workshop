import{j as a}from"./jsx-runtime-3cfe299f.js";import{c as t}from"./cn-ad0adaed.js";import{S as x}from"./Select-b1cc77bf.js";import{L as N}from"./Label-431e82bb.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./extends-98964cd2.js";import"./index-07d1f67e.js";import"./index-8c945b47.js";import"./index-09856750.js";import"./index-01ce9cbc.js";import"./index-18f3de2c.js";import"./index-3bb2a33e.js";import"./react-icons.esm-c66481c4.js";function s({select:l={items:[]},label:d={},className:f}){const{className:g,...v}=d,{className:y,...h}=l;return a.jsxs("div",{className:t("relative",f),children:[a.jsx(x,{className:t("peer h-full",y),...h}),a.jsx(N,{className:t("absolute bottom-full w-full","mb-1 text-xs text-slate-600","peer-disabled:cursor-not-allowed peer-disabled:opacity-70",g),...v})]})}try{s.displayName="SelectWithLabel",s.__docgenInfo={description:"",displayName:"SelectWithLabel",props:{select:{defaultValue:{value:"{ items: [] }"},description:"",name:"select",required:!1,type:{name:"SelectProps"}},label:{defaultValue:{value:"{}"},description:"",name:"label",required:!1,type:{name:'(Omit<LabelProps & RefAttributes<HTMLLabelElement>, "ref"> & RefAttributes<HTMLLabelElement>)'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const B={component:s,parameters:{layout:"centered"},tags:["autodocs"],decorators:[l=>a.jsx("div",{className:"w-[400px]",children:a.jsx(l,{})})]},e={args:{select:{label:"Fruits",placeholder:"Select a fruit...",items:[{value:"apple",label:"Apple"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"strawberry",label:"Strawberry"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"}]},label:{children:"Your favorite fruit"}}};var n,o;const r={args:{label:(n=e.args)==null?void 0:n.label,select:{items:[],disabled:!0,...(o=e.args)==null?void 0:o.select}}};var c,i,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    select: {
      label: "Fruits",
      placeholder: "Select a fruit...",
      items: [{
        value: "apple",
        label: "Apple"
      }, {
        value: "orange",
        label: "Orange"
      }, {
        value: "grape",
        label: "Grape"
      }, {
        value: "strawberry",
        label: "Strawberry"
      }, {
        value: "banana",
        label: "Banana"
      }, {
        value: "cherry",
        label: "Cherry"
      }]
    },
    label: {
      children: "Your favorite fruit"
    }
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,u,b;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: Default.args?.label,
    select: {
      items: [],
      disabled: true,
      ...Default.args?.select
    }
  }
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const F=["Default","Disabled"];export{e as Default,r as Disabled,F as __namedExportsOrder,B as default};
//# sourceMappingURL=SelectWithLabel.stories-b3012537.js.map
