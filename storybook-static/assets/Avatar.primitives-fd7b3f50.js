import{j as u}from"./jsx-runtime-3cfe299f.js";import{r as t}from"./index-c4905b50.js";import{_ as m}from"./extends-98964cd2.js";import{$ as h,b as N,a as w}from"./index-ad15057c.js";import{$}from"./index-e64c434c.js";import{c as b}from"./cn-ad0adaed.js";const _="Avatar",[S,B]=h(_),[C,v]=S(_),I=t.forwardRef((e,r)=>{const{__scopeAvatar:a,...o}=e,[c,s]=t.useState("idle");return t.createElement(C,{scope:a,imageLoadingStatus:c,onImageLoadingStatusChange:s},t.createElement($.span,m({},o,{ref:r})))}),L="AvatarImage",R=t.forwardRef((e,r)=>{const{__scopeAvatar:a,src:o,onLoadingStatusChange:c=()=>{},...s}=e,n=v(L,a),d=j(o),l=N(g=>{c(g),n.onImageLoadingStatusChange(g)});return w(()=>{d!=="idle"&&l(d)},[d,l]),d==="loaded"?t.createElement($.img,m({},s,{ref:r,src:o})):null}),E="AvatarFallback",M=t.forwardRef((e,r)=>{const{__scopeAvatar:a,delayMs:o,...c}=e,s=v(E,a),[n,d]=t.useState(o===void 0);return t.useEffect(()=>{if(o!==void 0){const l=window.setTimeout(()=>d(!0),o);return()=>window.clearTimeout(l)}},[o]),n&&s.imageLoadingStatus!=="loaded"?t.createElement($.span,m({},c,{ref:r})):null});function j(e){const[r,a]=t.useState("idle");return t.useEffect(()=>{if(!e){a("error");return}let o=!0;const c=new window.Image,s=n=>()=>{o&&a(n)};return a("loading"),c.onload=s("loaded"),c.onerror=s("error"),c.src=e,()=>{o=!1}},[e]),r}const A=I,x=R,y=M,i=t.forwardRef(({className:e,...r},a)=>u.jsx(A,{ref:a,className:b("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",e),...r}));i.displayName=A.displayName;const f=t.forwardRef(({className:e,...r},a)=>u.jsx(x,{ref:a,className:b("aspect-square h-full w-full",e),...r}));f.displayName=x.displayName;const p=t.forwardRef(({className:e,...r},a)=>u.jsx(y,{ref:a,className:b("flex h-full w-full items-center justify-center rounded-full bg-gray-300",e),...r}));p.displayName=y.displayName;try{i.displayName="AvatarRoot",i.__docgenInfo={description:"",displayName:"AvatarRoot",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="AvatarImage",f.__docgenInfo={description:"",displayName:"AvatarImage",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{p.displayName="AvatarFallback",p.__docgenInfo={description:"",displayName:"AvatarFallback",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{i as A,f as a,p as b};
//# sourceMappingURL=Avatar.primitives-fd7b3f50.js.map