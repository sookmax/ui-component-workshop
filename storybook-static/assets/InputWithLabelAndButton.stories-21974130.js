import{j as t}from"./jsx-runtime-3cfe299f.js";import{c as _}from"./cn-ad0adaed.js";import{I as y}from"./Input-785f32be.js";import{W as L}from"./WithButton-3420cdef.js";import{W as j}from"./WithLabel-965b7b1d.js";import"./index-c4905b50.js";import"./_commonjsHelpers-042e6b4d.js";import"./Button-b7c11d05.js";import"./Label-f52c5603.js";import"./extends-98964cd2.js";import"./index-746ec687.js";import"./index-07d1f67e.js";function i({button:e,label:a,input:b={}}){const{className:f,disabled:n,...h}=b;return e=n?{...e,disabled:!0}:e,a=n?{...a,"aria-disabled":!0}:a,t.jsx(j,{label:a,children:({className:g})=>t.jsx(L,{className:g,button:e,children:({className:x})=>t.jsx(y,{className:_(f,x),disabled:n,...h})})})}try{i.displayName="InputWithLabelAndButton",i.__docgenInfo={description:"",displayName:"InputWithLabelAndButton",props:{input:{defaultValue:{value:"{}"},description:"",name:"input",required:!1,type:{name:"InputProps"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:'(Omit<LabelProps & RefAttributes<HTMLLabelElement>, "ref"> & RefAttributes<HTMLLabelElement>)'}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"ButtonProps"}}}}}catch{}const o={component:i,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>t.jsx("div",{className:"w-[400px]",children:t.jsx(e,{})})],args:{input:{id:"email-input",placeholder:"type a valid email address."},label:{htmlFor:"email-input",children:"Email"},button:{children:"Subscribe"}}},r={},s={args:{input:{...o.args.input,disabled:!0},button:{...o.args.button,disabled:!0}}};var l,p,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,m,c;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    input: {
      ...meta.args.input,
      disabled: true
    },
    button: {
      ...meta.args.button,
      disabled: true
    }
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const V=["Default","Disabled"];export{r as Default,s as Disabled,V as __namedExportsOrder,o as default};
//# sourceMappingURL=InputWithLabelAndButton.stories-21974130.js.map
