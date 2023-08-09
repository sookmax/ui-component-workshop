import{j as a}from"./jsx-runtime-3cfe299f.js";import{r as n}from"./index-c4905b50.js";import{_ as f}from"./extends-98964cd2.js";import{$ as ge}from"./index-619a6d1c.js";import{$ as ye}from"./index-5277ee67.js";import{$ as ae,a as v}from"./index-027e524b.js";import{$ as re,a as Me}from"./index-e64c434c.js";import{$ as Ce}from"./index-ad15057c.js";import{$ as A}from"./index-c7280168.js";import{$ as ve,l as je,a as Ne,b as we,c as Se,d as Re,e as Ie,f as Ee,g as Pe,h as Te,i as Oe,j as Ve,k as ke,m as Ae,n as De,o as Fe,C as qe}from"./index-cb282838.js";import{$ as te,a as Ke,b as Ge}from"./index-4d5ae697.js";import{c as M}from"./cn-ad0adaed.js";import{C as Be}from"./check-cf4fb5f2.js";import{C as Le}from"./circle-f370b95b.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-07d1f67e.js";import"./createLucideIcon-4c4c1dac.js";import"./index-bdfe594c.js";import"./Combination-e8d58b68.js";import"./index-335037e7.js";import"./index-df54fd40.js";import"./index-9b5f736f.js";import"./index-18b101ff.js";import"./index-2634669d.js";const K="Menubar",[D,ze,Ue]=ge(K),[ne,Ga]=Ce(K,[Ue,te]),$=ve(),oe=te(),[He,G]=ne(K),We=n.forwardRef((e,t)=>{const{__scopeMenubar:r,value:o,onValueChange:c,defaultValue:u,loop:l=!0,dir:s,...i}=e,h=ye(s),p=oe(r),[g="",m]=ae({prop:o,onChange:c,defaultProp:u}),[y,b]=n.useState(null);return n.createElement(He,{scope:r,value:g,onMenuOpen:n.useCallback(x=>{m(x),b(x)},[m]),onMenuClose:n.useCallback(()=>m(""),[m]),onMenuToggle:n.useCallback(x=>{m(B=>B?"":x),b(x)},[m]),dir:h,loop:l},n.createElement(D.Provider,{scope:r},n.createElement(D.Slot,{scope:r},n.createElement(Ke,f({asChild:!0},p,{orientation:"horizontal",loop:l,dir:h,currentTabStopId:y,onCurrentTabStopIdChange:b}),n.createElement(re.div,f({role:"menubar"},i,{ref:t}))))))}),ce="MenubarMenu",[Ze,se]=ne(ce),Ye=e=>{const{__scopeMenubar:t,value:r,...o}=e,c=A(),u=r||c||"LEGACY_REACT_AUTO_VALUE",l=G(ce,t),s=$(t),i=n.useRef(null),h=n.useRef(!1),p=l.value===u;return n.useEffect(()=>{p||(h.current=!1)},[p]),n.createElement(Ze,{scope:t,value:u,triggerId:A(),triggerRef:i,contentId:A(),wasKeyboardTriggerOpenRef:h},n.createElement(ke,f({},s,{open:p,onOpenChange:g=>{g||l.onMenuClose()},modal:!1,dir:l.dir},o)))},U="MenubarTrigger",Je=n.forwardRef((e,t)=>{const{__scopeMenubar:r,disabled:o=!1,...c}=e,u=oe(r),l=$(r),s=G(U,r),i=se(U,r),h=n.useRef(null),p=Me(t,h,i.triggerRef),[g,m]=n.useState(!1),y=s.value===i.value;return n.createElement(D.ItemSlot,{scope:r,value:i.value,disabled:o},n.createElement(Ge,f({asChild:!0},u,{focusable:!o,tabStopId:i.value}),n.createElement(je,f({asChild:!0},l),n.createElement(re.button,f({type:"button",role:"menuitem",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":y,"aria-controls":y?i.contentId:void 0,"data-highlighted":g?"":void 0,"data-state":y?"open":"closed","data-disabled":o?"":void 0,disabled:o},c,{ref:p,onPointerDown:v(e.onPointerDown,b=>{!o&&b.button===0&&b.ctrlKey===!1&&(s.onMenuOpen(i.value),y||b.preventDefault())}),onPointerEnter:v(e.onPointerEnter,()=>{if(!!s.value&&!y){var x;s.onMenuOpen(i.value),(x=h.current)===null||x===void 0||x.focus()}}),onKeyDown:v(e.onKeyDown,b=>{o||(["Enter"," "].includes(b.key)&&s.onMenuToggle(i.value),b.key==="ArrowDown"&&s.onMenuOpen(i.value),["Enter"," ","ArrowDown"].includes(b.key)&&(i.wasKeyboardTriggerOpenRef.current=!0,b.preventDefault()))}),onFocus:v(e.onFocus,()=>m(!0)),onBlur:v(e.onBlur,()=>m(!1))})))))}),Qe=e=>{const{__scopeMenubar:t,...r}=e,o=$(t);return n.createElement(Ne,f({},o,r))},H="MenubarContent",Xe=n.forwardRef((e,t)=>{const{__scopeMenubar:r,align:o="start",...c}=e,u=$(r),l=G(H,r),s=se(H,r),i=ze(r),h=n.useRef(!1);return n.createElement(we,f({id:s.contentId,"aria-labelledby":s.triggerId,"data-radix-menubar-content":""},u,c,{ref:t,align:o,onCloseAutoFocus:v(e.onCloseAutoFocus,p=>{if(!!!l.value&&!h.current){var m;(m=s.triggerRef.current)===null||m===void 0||m.focus()}h.current=!1,p.preventDefault()}),onFocusOutside:v(e.onFocusOutside,p=>{const g=p.target;i().some(y=>{var b;return(b=y.ref.current)===null||b===void 0?void 0:b.contains(g)})&&p.preventDefault()}),onInteractOutside:v(e.onInteractOutside,()=>{h.current=!0}),onEntryFocus:p=>{s.wasKeyboardTriggerOpenRef.current||p.preventDefault()},onKeyDown:v(e.onKeyDown,p=>{if(["ArrowRight","ArrowLeft"].includes(p.key)){const g=p.target,m=g.hasAttribute("data-radix-menubar-subtrigger"),y=g.closest("[data-radix-menubar-content]")!==p.currentTarget,x=(l.dir==="rtl"?"ArrowRight":"ArrowLeft")===p.key;if(!x&&m||y&&x)return;let w=i().filter(k=>!k.disabled).map(k=>k.value);x&&w.reverse();const L=w.indexOf(s.value);w=l.loop?ua(w,L+1):w.slice(L+1);const[z]=w;z&&l.onMenuOpen(z)}},{checkForDefaultPrevented:!1}),style:{...e.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}}))}),ea=n.forwardRef((e,t)=>{const{__scopeMenubar:r,...o}=e,c=$(r);return n.createElement(Ae,f({},c,o,{ref:t}))}),aa=n.forwardRef((e,t)=>{const{__scopeMenubar:r,...o}=e,c=$(r);return n.createElement(Se,f({},c,o,{ref:t}))}),ra=n.forwardRef((e,t)=>{const{__scopeMenubar:r,...o}=e,c=$(r);return n.createElement(Re,f({},c,o,{ref:t}))}),ta=n.forwardRef((e,t)=>{const{__scopeMenubar:r,...o}=e,c=$(r);return n.createElement(Ie,f({},c,o,{ref:t}))}),na=n.forwardRef((e,t)=>{const{__scopeMenubar:r,...o}=e,c=$(r);return n.createElement(De,f({},c,o,{ref:t}))}),oa=n.forwardRef((e,t)=>{const{__scopeMenubar:r,...o}=e,c=$(r);return n.createElement(Ee,f({},c,o,{ref:t}))}),ca=n.forwardRef((e,t)=>{const{__scopeMenubar:r,...o}=e,c=$(r);return n.createElement(Pe,f({},c,o,{ref:t}))}),sa=n.forwardRef((e,t)=>{const{__scopeMenubar:r,...o}=e,c=$(r);return n.createElement(Te,f({},c,o,{ref:t}))}),da=e=>{const{__scopeMenubar:t,children:r,open:o,onOpenChange:c,defaultOpen:u}=e,l=$(t),[s=!1,i]=ae({prop:o,defaultProp:u,onChange:c});return n.createElement(Fe,f({},l,{open:s,onOpenChange:i}),r)},la=n.forwardRef((e,t)=>{const{__scopeMenubar:r,...o}=e,c=$(r);return n.createElement(Oe,f({"data-radix-menubar-subtrigger":""},c,o,{ref:t}))}),ia=n.forwardRef((e,t)=>{const{__scopeMenubar:r,...o}=e,c=$(r);return n.createElement(Ve,f({},c,{"data-radix-menubar-content":""},o,{ref:t,style:{...e.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}}))});function ua(e,t){return e.map((r,o)=>e[(t+o)%e.length])}const de=We,pa=Ye,le=Je,ie=Qe,ue=Xe,fa=ea,pe=aa,fe=ra,be=ta,ba=na,me=oa,$e=ca,xe=sa,ma=da,_e=la,he=ia,I=pa,W=fa,Z=ie,P=ma,F=ba,T=n.forwardRef(({className:e,...t},r)=>a.jsx(de,{ref:r,className:M("flex h-10 items-center space-x-1 rounded-md border bg-white p-1",e),...t}));T.displayName=de.displayName;const j=n.forwardRef(({className:e,...t},r)=>a.jsx(le,{ref:r,className:M(`
      flex cursor-default select-none items-center rounded-md px-3 py-1.5 text-sm font-medium outline-none 
      focus:bg-cyan-700 
      focus:text-white
      data-[state=open]:bg-gray-200 
      data-[state=open]:text-black
      `,e),...t}));j.displayName=le.displayName;const S=n.forwardRef(({className:e,inset:t,children:r,...o},c)=>a.jsxs(_e,{ref:c,className:M(`
      flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none 
      focus:bg-cyan-700
      focus:text-white
      data-[state=open]:bg-gray-200
      data-[state=open]:text-black
      `,t&&"pl-8",e),...o,children:[r,a.jsx(qe,{className:"ml-auto h-4 w-4"})]}));S.displayName=_e.displayName;const R=n.forwardRef(({className:e,...t},r)=>a.jsx(he,{ref:r,className:M(`
      z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 
      bg-white
      text-gray-700
      data-[state=open]:animate-in 
      data-[state=open]:fade-in-0 
      data-[state=open]:zoom-in-95 
      data-[state=closed]:animate-out 
      data-[state=closed]:fade-out-0 
      data-[state=closed]:zoom-out-95 
      data-[side=bottom]:-enter-translate-y-2
      data-[side=left]:enter-translate-x-2
      data-[side=right]:-enter-translate-x-2
      data-[side=top]:enter-translate-y-2
      `,e),...t}));R.displayName=he.displayName;const N=n.forwardRef(({className:e,align:t="start",alignOffset:r=-4,sideOffset:o=8,...c},u)=>a.jsx(ie,{children:a.jsx(ue,{ref:u,align:t,alignOffset:r,sideOffset:o,className:M(`
          z-50 min-w-[12rem] overflow-hidden rounded-md border p-1 shadow-md 
          bg-white
          text-gray-700
          data-[state=open]:animate-in 
          data-[state=closed]:fade-out-0 
          data-[state=open]:fade-in-0 
          data-[state=closed]:zoom-out-95 
          data-[state=open]:zoom-in-95 
          data-[side=bottom]:-enter-translate-y-2
          data-[side=left]:enter-translate-x-2
          data-[side=right]:-enter-translate-x-2
          data-[side=top]:enter-translate-y-2
          `,e),...c})}));N.displayName=ue.displayName;const d=n.forwardRef(({className:e,inset:t,onSelect:r,onSelectClose:o=!0,...c},u)=>{const l=s=>{!o&&s.preventDefault(),r==null||r(s)};return a.jsx(fe,{ref:u,className:M(`
            relative flex cursor-default select-none items-center rounded-md px-2 py-1.5 text-sm outline-none 
            focus:bg-cyan-700
            focus:text-white
            data-[disabled]:pointer-events-none 
            data-[disabled]:opacity-50
            `,t&&"pl-8",e),onSelect:l,...c})});d.displayName=fe.displayName;const O=n.forwardRef(({className:e,children:t,checked:r,onSelect:o,onSelectClose:c=!0,...u},l)=>{const s=i=>{!c&&i.preventDefault(),o==null||o(i)};return a.jsxs(be,{ref:l,className:M(`
            relative flex cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none 
            focus:bg-cyan-700
            focus:text-white
            data-[disabled]:pointer-events-none 
            data-[disabled]:opacity-50
            `,e),checked:r,onSelect:s,...u,children:[a.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx($e,{children:a.jsx(Be,{className:"h-4 w-4"})})}),t]})});O.displayName=be.displayName;const V=n.forwardRef(({className:e,children:t,onSelect:r,onSelectClose:o,...c},u)=>{const l=s=>{!o&&s.preventDefault(),r==null||r(s)};return a.jsxs(me,{ref:u,className:M(`
            relative flex cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-sm outline-none 
            focus:bg-cyan-700
            focus:text-white
            data-[disabled]:pointer-events-none 
            data-[disabled]:opacity-50
            `,e),onSelect:l,...c,children:[a.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx($e,{children:a.jsx(Le,{className:"h-2 w-2 fill-current"})})}),t]})});V.displayName=me.displayName;const q=n.forwardRef(({className:e,inset:t,...r},o)=>a.jsx(pe,{ref:o,className:M("px-2 py-1.5 text-sm font-semibold",t&&"pl-8",e),...r}));q.displayName=pe.displayName;const _=n.forwardRef(({className:e,...t},r)=>a.jsx(xe,{ref:r,className:M("-mx-1 my-1 h-px bg-muted",e),...t}));_.displayName=xe.displayName;const C=({className:e,...t})=>a.jsx("span",{className:M("ml-auto text-xs tracking-widest text-muted-foreground",e),...t});C.displayname="MenubarShortcut";try{T.displayName="MenubarRoot",T.__docgenInfo={description:"",displayName:"MenubarRoot",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{j.displayName="MenubarTrigger",j.__docgenInfo={description:"",displayName:"MenubarTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{N.displayName="MenubarContent",N.__docgenInfo={description:"",displayName:"MenubarContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="MenubarItem",d.__docgenInfo={description:"",displayName:"MenubarItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}},onSelectClose:{defaultValue:{value:"true"},description:"",name:"onSelectClose",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="MenubarSeparator",_.__docgenInfo={description:"",displayName:"MenubarSeparator",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{q.displayName="MenubarLabel",q.__docgenInfo={description:"",displayName:"MenubarLabel",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}}}catch{}try{O.displayName="MenubarCheckboxItem",O.__docgenInfo={description:"",displayName:"MenubarCheckboxItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},onSelectClose:{defaultValue:{value:"true"},description:"",name:"onSelectClose",required:!1,type:{name:"boolean"}}}}}catch{}try{F.displayName="MenubarRadioGroup",F.__docgenInfo={description:"",displayName:"MenubarRadioGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{V.displayName="MenubarRadioItem",V.__docgenInfo={description:"",displayName:"MenubarRadioItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},onSelectClose:{defaultValue:{value:"true"},description:"",name:"onSelectClose",required:!1,type:{name:"boolean"}}}}}catch{}try{Z.displayName="MenubarPortal",Z.__docgenInfo={description:"",displayName:"MenubarPortal",props:{}}}catch{}try{R.displayName="MenubarSubContent",R.__docgenInfo={description:"",displayName:"MenubarSubContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{S.displayName="MenubarSubTrigger",S.__docgenInfo={description:"",displayName:"MenubarSubTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},inset:{defaultValue:null,description:"",name:"inset",required:!1,type:{name:"boolean"}}}}}catch{}try{W.displayName="MenubarGroup",W.__docgenInfo={description:"",displayName:"MenubarGroup",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{P.displayName="MenubarSub",P.__docgenInfo={description:"",displayName:"MenubarSub",props:{}}}catch{}try{C.displayName="MenubarShortcut",C.__docgenInfo={description:"",displayName:"MenubarShortcut",props:{}}}catch{}const Y=["Andy","Benoît","Luis"],J=["Always Show Bookmarks Bar","Always Show Full URLs"];function $a(){const[e,t]=n.useState([J[1]]),[r,o]=n.useState(Y[2]);return a.jsxs(T,{children:[a.jsxs(I,{children:[a.jsx(j,{children:"File"}),a.jsxs(N,{children:[a.jsxs(d,{children:["New Tab ",a.jsx(C,{children:"⌘T"})]}),a.jsxs(d,{children:["New Window ",a.jsx(C,{children:"⌘N"})]}),a.jsx(d,{disabled:!0,children:"New Incognito Window"}),a.jsx(_,{}),a.jsxs(P,{children:[a.jsx(S,{children:"Share"}),a.jsxs(R,{children:[a.jsx(d,{children:"Email link"}),a.jsx(d,{children:"Messages"}),a.jsx(d,{children:"Notes"})]})]}),a.jsx(_,{}),a.jsxs(d,{children:["Print... ",a.jsx(C,{children:"⌘P"})]})]})]}),a.jsxs(I,{children:[a.jsx(j,{children:"Edit"}),a.jsxs(N,{children:[a.jsxs(d,{onSelectClose:!1,children:["Undo ",a.jsx(C,{children:"⌘Z"})]}),a.jsxs(d,{onSelectClose:!1,children:["Redo ",a.jsx(C,{children:"⇧⌘Z"})]}),a.jsx(_,{}),a.jsxs(P,{children:[a.jsx(S,{children:"Find"}),a.jsxs(R,{children:[a.jsx(d,{children:"Search the web"}),a.jsx(_,{}),a.jsx(d,{children:"Find..."}),a.jsx(d,{children:"Find Next"}),a.jsx(d,{children:"Find Previous"})]})]}),a.jsx(_,{}),a.jsx(d,{children:"Cut"}),a.jsx(d,{children:"Copy"}),a.jsx(d,{children:"Paste"})]})]}),a.jsxs(I,{children:[a.jsx(j,{children:"View"}),a.jsxs(N,{children:[J.map(c=>a.jsx(O,{checked:e.includes(c),onSelectClose:!1,onCheckedChange:()=>t(u=>u.includes(c)?u.filter(l=>l!==c):[...u,c]),children:c},c)),a.jsx(_,{}),a.jsxs(d,{inset:!0,children:["Reload ",a.jsx(C,{children:"⌘R"})]}),a.jsxs(d,{disabled:!0,inset:!0,children:["Force Reload ",a.jsx(C,{children:"⇧⌘R"})]}),a.jsx(_,{}),a.jsx(d,{inset:!0,children:"Toggle Fullscreen"}),a.jsx(_,{}),a.jsx(d,{inset:!0,children:"Hide Sidebar"})]})]}),a.jsxs(I,{children:[a.jsx(j,{children:"Profiles"}),a.jsxs(N,{children:[a.jsx(F,{value:r,onValueChange:o,children:Y.map(c=>a.jsx(V,{value:c,children:c},c))}),a.jsx(_,{}),a.jsx(d,{inset:!0,children:"Edit..."}),a.jsx(_,{}),a.jsx(d,{inset:!0,children:"Add Profile..."})]})]})]})}const Ba={component:$a,parameters:{layout:"centered"},tags:["autodocs"]},E={};var Q,X,ee;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:"{}",...(ee=(X=E.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};const La=["Default"];export{E as Default,La as __namedExportsOrder,Ba as default};
//# sourceMappingURL=Menubar.stories-83d1ecf4.js.map