import{j as l}from"./jsx-runtime-3cfe299f.js";import{_ as g}from"./extends-98964cd2.js";import{r as t}from"./index-c4905b50.js";import{$ as E,b as C,a as I}from"./index-ad15057c.js";import{$}from"./index-5b9e656f.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-07d1f67e.js";const k="Avatar",[U,W]=E(k),[M,T]=U(k),N=t.forwardRef((e,r)=>{const{__scopeAvatar:o,...a}=e,[s,n]=t.useState("idle");return t.createElement(M,{scope:o,imageLoadingStatus:s,onImageLoadingStatusChange:n},t.createElement($.span,g({},a,{ref:r})))}),j="AvatarImage",R=t.forwardRef((e,r)=>{const{__scopeAvatar:o,src:a,onLoadingStatusChange:s=()=>{},...n}=e,d=T(j,o),c=B(a),i=C(b=>{s(b),d.onImageLoadingStatusChange(b)});return I(()=>{c!=="idle"&&i(c)},[c,i]),c==="loaded"?t.createElement($.img,g({},n,{ref:r,src:a})):null}),O="AvatarFallback",P=t.forwardRef((e,r)=>{const{__scopeAvatar:o,delayMs:a,...s}=e,n=T(O,o),[d,c]=t.useState(a===void 0);return t.useEffect(()=>{if(a!==void 0){const i=window.setTimeout(()=>c(!0),a);return()=>window.clearTimeout(i)}},[a]),d&&n.imageLoadingStatus!=="loaded"?t.createElement($.span,g({},s,{ref:r})):null});function B(e){const[r,o]=t.useState("idle");return t.useEffect(()=>{if(!e){o("error");return}let a=!0;const s=new window.Image,n=d=>()=>{a&&o(d)};return o("loading"),s.onload=n("loaded"),s.onerror=n("error"),s.src=e,()=>{a=!1}},[e]),r}const K=N,V=R,q=P;function p({imageUrl:e,fallbackText:r}){return l.jsxs(K,{className:"relative inline-block h-10 w-10 truncate rounded-full bg-gray-200",children:[e&&l.jsx(V,{src:e}),r&&l.jsx(q,{delayMs:e&&r?500:void 0,className:"absolute flex h-full w-full items-center justify-center px-[5px] text-sm",children:l.jsx("span",{className:"w-full truncate text-center",children:r})})]})}try{p.displayName="Avatar",p.__docgenInfo={description:"",displayName:"Avatar",props:{imageUrl:{defaultValue:null,description:"Url for the avatar image",name:"imageUrl",required:!1,type:{name:"string"}},fallbackText:{defaultValue:null,description:`Text to show while the image is loading.

Provided text will be truncated if it's too long.`,name:"fallbackText",required:!1,type:{name:"string"}}}}}catch{}const X={component:p,parameters:{layout:"centered"},tags:["autodocs"]},f={args:{imageUrl:"https://github.com/sookmax.png",fallbackText:"Sook"}},u={args:{imageUrl:"",fallbackText:"SK"}},m={args:{imageUrl:"",fallbackText:"Sook"}};var x,v,_;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    imageUrl: "https://github.com/sookmax.png",
    fallbackText: "Sook"
  }
}`,...(_=(v=f.parameters)==null?void 0:v.docs)==null?void 0:_.source}}};var S,A,h;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    imageUrl: "",
    fallbackText: "SK"
  }
}`,...(h=(A=u.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};var w,y,L;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    imageUrl: "",
    fallbackText: "Sook"
  }
}`,...(L=(y=m.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const Y=["BasicUsage","TextOnly","TextOnlyLong"];export{f as BasicUsage,u as TextOnly,m as TextOnlyLong,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=Avatar.stories-e8dac30d.js.map
