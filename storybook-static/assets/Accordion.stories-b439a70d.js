import{j as v}from"./jsx-runtime-3cfe299f.js";import{M as Se,f as $e,m as Me}from"./benefit-of-regular-exercise-b33d2a55.js";import{_ as x}from"./extends-98964cd2.js";import{R as a,r as f}from"./index-c4905b50.js";import{$ as H,b as Ne}from"./index-df672d98.js";import{a as P,b as Z,$ as O}from"./index-864ad266.js";import{$ as z,a as ge,b as he,c as Oe}from"./index-c539c585.js";import{g as Pe}from"./_commonjsHelpers-042e6b4d.js";import{C as Te}from"./react-icons.esm-138f7f80.js";function ke(e){const r=e+"CollectionProvider",[t,o]=H(r),[s,n]=t(r,{collectionRef:{current:null},itemMap:new Map}),c=b=>{const{scope:u,children:y}=b,$=a.useRef(null),p=a.useRef(new Map).current;return a.createElement(s,{scope:u,itemMap:p,collectionRef:$},y)},i=e+"CollectionSlot",d=a.forwardRef((b,u)=>{const{scope:y,children:$}=b,p=n(i,y),l=P(u,p.collectionRef);return a.createElement(Z,{ref:l},$)}),m=e+"CollectionItemSlot",h="data-radix-collection-item",_=a.forwardRef((b,u)=>{const{scope:y,children:$,...p}=b,l=a.useRef(null),g=P(u,l),I=n(m,y);return a.useEffect(()=>(I.itemMap.set(l,{ref:l,...p}),()=>void I.itemMap.delete(l))),a.createElement(Z,{[h]:"",ref:g},$)});function C(b){const u=n(e+"CollectionConsumer",b);return a.useCallback(()=>{const $=u.collectionRef.current;if(!$)return[];const p=Array.from($.querySelectorAll(`[${h}]`));return Array.from(u.itemMap.values()).sort((I,E)=>p.indexOf(I.ref.current)-p.indexOf(E.ref.current))},[u.collectionRef,u.itemMap])}return[{Provider:c,Slot:d,ItemSlot:_},C,o]}const ve="Collapsible",[je,_e]=H(ve),[De,G]=je(ve),Ve=f.forwardRef((e,r)=>{const{__scopeCollapsible:t,open:o,defaultOpen:s,disabled:n,onOpenChange:c,...i}=e,[d=!1,m]=z({prop:o,defaultProp:s,onChange:c});return f.createElement(De,{scope:t,disabled:n,contentId:ge(),open:d,onOpenToggle:f.useCallback(()=>m(h=>!h),[m])},f.createElement(O.div,x({"data-state":K(d),"data-disabled":n?"":void 0},i,{ref:r})))}),Fe="CollapsibleTrigger",Le=f.forwardRef((e,r)=>{const{__scopeCollapsible:t,...o}=e,s=G(Fe,t);return f.createElement(O.button,x({type:"button","aria-controls":s.contentId,"aria-expanded":s.open||!1,"data-state":K(s.open),"data-disabled":s.disabled?"":void 0,disabled:s.disabled},o,{ref:r,onClick:he(e.onClick,s.onOpenToggle)}))}),xe="CollapsibleContent",Ue=f.forwardRef((e,r)=>{const{forceMount:t,...o}=e,s=G(xe,e.__scopeCollapsible);return f.createElement(Oe,{present:t||s.open},({present:n})=>f.createElement(Be,x({},o,{ref:r,present:n})))}),Be=f.forwardRef((e,r)=>{const{__scopeCollapsible:t,present:o,children:s,...n}=e,c=G(xe,t),[i,d]=f.useState(o),m=f.useRef(null),h=P(r,m),_=f.useRef(0),C=_.current,b=f.useRef(0),u=b.current,y=c.open||i,$=f.useRef(y),p=f.useRef();return f.useEffect(()=>{const l=requestAnimationFrame(()=>$.current=!1);return()=>cancelAnimationFrame(l)},[]),Ne(()=>{const l=m.current;if(l){p.current=p.current||{transitionDuration:l.style.transitionDuration,animationName:l.style.animationName},l.style.transitionDuration="0s",l.style.animationName="none";const g=l.getBoundingClientRect();_.current=g.height,b.current=g.width,$.current||(l.style.transitionDuration=p.current.transitionDuration,l.style.animationName=p.current.animationName),d(o)}},[c.open,o]),f.createElement(O.div,x({"data-state":K(c.open),"data-disabled":c.disabled?"":void 0,id:c.contentId,hidden:!y},n,{ref:h,style:{["--radix-collapsible-content-height"]:C?`${C}px`:void 0,["--radix-collapsible-content-width"]:u?`${u}px`:void 0,...e.style}}),y&&s)});function K(e){return e?"open":"closed"}const qe=Ve,Ye=Le,He=Ue,ze=f.createContext(void 0);function Ge(e){const r=f.useContext(ze);return e||r||"ltr"}const A="Accordion",Ke=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[W,We,Je]=ke(A),[T,Ot]=H(A,[Je,_e]),J=_e(),ye=a.forwardRef((e,r)=>{const{type:t,...o}=e,s=o,n=o;return a.createElement(W.Provider,{scope:e.__scopeAccordion},t==="multiple"?a.createElement(et,x({},n,{ref:r})):a.createElement(Ze,x({},s,{ref:r})))});ye.propTypes={type(e){const r=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof r=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(r)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[Ce,Qe]=T(A),[Ie,Xe]=T(A,{collapsible:!1}),Ze=a.forwardRef((e,r)=>{const{value:t,defaultValue:o,onValueChange:s=()=>{},collapsible:n=!1,...c}=e,[i,d]=z({prop:t,defaultProp:o,onChange:s});return a.createElement(Ce,{scope:e.__scopeAccordion,value:i?[i]:[],onItemOpen:d,onItemClose:a.useCallback(()=>n&&d(""),[n,d])},a.createElement(Ie,{scope:e.__scopeAccordion,collapsible:n},a.createElement(Ae,x({},c,{ref:r}))))}),et=a.forwardRef((e,r)=>{const{value:t,defaultValue:o,onValueChange:s=()=>{},...n}=e,[c=[],i]=z({prop:t,defaultProp:o,onChange:s}),d=a.useCallback(h=>i((_=[])=>[..._,h]),[i]),m=a.useCallback(h=>i((_=[])=>_.filter(C=>C!==h)),[i]);return a.createElement(Ce,{scope:e.__scopeAccordion,value:c,onItemOpen:d,onItemClose:m},a.createElement(Ie,{scope:e.__scopeAccordion,collapsible:!0},a.createElement(Ae,x({},n,{ref:r}))))}),[tt,k]=T(A),Ae=a.forwardRef((e,r)=>{const{__scopeAccordion:t,disabled:o,dir:s,orientation:n="vertical",...c}=e,i=a.useRef(null),d=P(i,r),m=We(t),_=Ge(s)==="ltr",C=he(e.onKeyDown,b=>{var u;if(!Ke.includes(b.key))return;const y=b.target,$=m().filter(V=>{var F;return!((F=V.ref.current)!==null&&F!==void 0&&F.disabled)}),p=$.findIndex(V=>V.ref.current===y),l=$.length;if(p===-1)return;b.preventDefault();let g=p;const I=0,E=l-1,j=()=>{g=p+1,g>E&&(g=I)},D=()=>{g=p-1,g<I&&(g=E)};switch(b.key){case"Home":g=I;break;case"End":g=E;break;case"ArrowRight":n==="horizontal"&&(_?j():D());break;case"ArrowDown":n==="vertical"&&j();break;case"ArrowLeft":n==="horizontal"&&(_?D():j());break;case"ArrowUp":n==="vertical"&&D();break}const Re=g%l;(u=$[Re].ref.current)===null||u===void 0||u.focus()});return a.createElement(tt,{scope:t,disabled:o,direction:s,orientation:n},a.createElement(W.Slot,{scope:t},a.createElement(O.div,x({},c,{"data-orientation":n,ref:d,onKeyDown:o?void 0:C}))))}),L="AccordionItem",[nt,Q]=T(L),ot=a.forwardRef((e,r)=>{const{__scopeAccordion:t,value:o,...s}=e,n=k(L,t),c=Qe(L,t),i=J(t),d=ge(),m=o&&c.value.includes(o)||!1,h=n.disabled||e.disabled;return a.createElement(nt,{scope:t,open:m,disabled:h,triggerId:d},a.createElement(qe,x({"data-orientation":n.orientation,"data-state":we(m)},i,s,{ref:r,disabled:h,open:m,onOpenChange:_=>{_?c.onItemOpen(o):c.onItemClose(o)}})))}),rt="AccordionHeader",at=a.forwardRef((e,r)=>{const{__scopeAccordion:t,...o}=e,s=k(A,t),n=Q(rt,t);return a.createElement(O.h3,x({"data-orientation":s.orientation,"data-state":we(n.open),"data-disabled":n.disabled?"":void 0},o,{ref:r}))}),ee="AccordionTrigger",st=a.forwardRef((e,r)=>{const{__scopeAccordion:t,...o}=e,s=k(A,t),n=Q(ee,t),c=Xe(ee,t),i=J(t);return a.createElement(W.ItemSlot,{scope:t},a.createElement(Ye,x({"aria-disabled":n.open&&!c.collapsible||void 0,"data-orientation":s.orientation,id:n.triggerId},i,o,{ref:r})))}),ct="AccordionContent",it=a.forwardRef((e,r)=>{const{__scopeAccordion:t,...o}=e,s=k(A,t),n=Q(ct,t),c=J(t);return a.createElement(He,x({role:"region","aria-labelledby":n.triggerId,"data-orientation":s.orientation},c,o,{ref:r,style:{["--radix-accordion-content-height"]:"var(--radix-collapsible-content-height)",["--radix-accordion-content-width"]:"var(--radix-collapsible-content-width)",...e.style}}))});function we(e){return e?"open":"closed"}const lt=ye,dt=ot,ft=at,pt=st,ut=it;var Ee={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var o=[],s=0;s<arguments.length;s++){var n=arguments[s];if(n){var c=typeof n;if(c==="string"||c==="number")o.push(n);else if(Array.isArray(n)){if(n.length){var i=t.apply(null,n);i&&o.push(i)}}else if(c==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){o.push(n.toString());continue}for(var d in n)r.call(n,d)&&n[d]&&o.push(d)}}}return o.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})(Ee);var mt=Ee.exports;const X=Pe(mt),U=a.forwardRef(function({children:r,className:t,...o},s){return v.jsx(dt,{className:X("border-b border-gray-300",t),...o,ref:s,children:r})}),B=a.forwardRef(function({children:r,className:t,...o},s){return v.jsx(ft,{children:v.jsxs(pt,{className:X("group flex w-full items-center justify-between py-4 font-medium transition-all hover:underline",t),...o,ref:s,children:[v.jsx("p",{className:"pr-2 text-left",children:r}),v.jsx(Te,{className:"h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180","aria-hidden":!0})]})})}),q=a.forwardRef(function({children:r,className:t,...o},s){return v.jsx(ut,{className:X("overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",t),...o,ref:s,children:v.jsx("div",{className:"px-1 pb-4 pt-0",children:r})})});try{U.displayName="AccordionItem",U.__docgenInfo={description:"",displayName:"AccordionItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{B.displayName="AccordionTrigger",B.__docgenInfo={description:"",displayName:"AccordionTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{q.displayName="AccordionContent",q.__docgenInfo={description:"",displayName:"AccordionContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}function Y({items:e,openFirstItemOnMount:r=!1}){return v.jsx(lt,{type:"single",collapsible:!0,defaultValue:r?"item-0":"",children:e.map((t,o)=>v.jsxs(U,{value:`item-${o}`,children:[v.jsx(B,{children:t.title}),v.jsx(q,{children:v.jsx(Se,{children:t.content})})]},o))})}try{Y.displayName="Accordion",Y.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"An array of `Item`s where `Item` is an object with the following properties:\n- `Item.title`: string\n- `Item.content`: string\n\n> `Item.content` may contain _markdown syntaxes_ and/or _html markups_.",name:"items",required:!0,type:{name:"Item[]"}},openFirstItemOnMount:{defaultValue:{value:"false"},description:"Should the first item be expanded when the component is rendered for the first time?",name:"openFirstItemOnMount",required:!1,type:{name:"boolean"}}}}}catch{}const bt=`---
title: Some Caveats on Social Media
---

Social media has revolutionized the way people communicate and connect with each other. Platforms like Facebook, Instagram, and Twitter enable individuals to share ideas, thoughts, and experiences instantly. Social media also facilitates networking, allowing people to establish professional connections and explore job opportunities.

_However_, it has its challenges, with concerns about privacy, cyberbullying, and misinformation. Understanding the impact of social media is essential for using these platforms responsibly and harnessing their potential for positive change.
`,$t=`---
title: "Exploring the Wonders of Space: Unraveling the Mysteries of the Universe"
---

Space exploration has captivated human curiosity for centuries. Advancements in technology have allowed us to delve **deeper** into the mysteries of the universe.

Through space missions and telescopes, scientists have discovered exoplanets, celestial bodies outside our solar system, offering insights into **the possibility of extraterrestrial life**.

Exploring space also provides valuable data on the origins of the universe, black holes, and the nature of gravity.

It is an ongoing endeavor that

- expands our knowledge
- fuels scientific progress
`,gt=`---
title: "The Importance of Financial Literacy: Empowering Individuals for Financial Success"
---

Financial literacy is **crucial** for personal financial success and economic stability. Understanding concepts such as _budgeting_, _saving_, and _investing_ empowers individuals to make informed financial decisions.

> Financially literate individuals can effectively manage debt, plan for retirement, and navigate complex financial markets.

Moreover, teaching financial literacy in schools equips young people with _essential skills_ for a financially secure future, reducing the likelihood of financial struggles and promoting economic growth.
`,ht=`---
title: "The Power of Mindfulness: Cultivating Awareness for a Balanced Life"
---

_Mindfulness_, the practice of being fully present in the moment, has gained popularity for its positive effects on mental well-being. By cultivating awareness of thoughts and emotions without judgment, mindfulness helps reduce stress and anxiety.

It promotes emotional stability, increases focus, and improves decision-making abilities. Regular mindfulness practice can lead to a greater sense of happiness and fulfillment, as individuals become more attuned to their inner selves and the world around them.
`,vt={component:Y,decorators:[e=>v.jsx("div",{className:"max-w-xl bg-white",children:v.jsx(e,{})})],parameters:{}},w={args:{items:[{title:"Is it accessible?",content:"Yes. It adheres to the `WAI-ARIA` design pattern."},{title:"Is it styled?",content:"Yes. It comes with _default_ styles that matches the other components' aesthetic."},{title:"Is it animated?",content:"Yes. It's animated by _default_, but you can **disable** it if you prefer."}]}},R={args:{items:w.args.items,openFirstItemOnMount:!0}},_t=[bt].map(e=>{const{attributes:{title:r},body:t}=$e(e);return{title:r,content:t}}),S={args:{items:_t}},xt=[Me,$t,gt,ht].map(e=>{const{attributes:{title:r},body:t}=$e(e);return{title:r,content:t}}),M={args:{items:xt,openFirstItemOnMount:!0}},N={args:{items:[]}};var te,ne,oe;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "Is it accessible?",
      content: "Yes. It adheres to the \`WAI-ARIA\` design pattern."
    }, {
      title: "Is it styled?",
      content: "Yes. It comes with _default_ styles that matches the other components' aesthetic."
    }, {
      title: "Is it animated?",
      content: "Yes. It's animated by _default_, but you can **disable** it if you prefer."
    }]
  }
}`,...(oe=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,ae,se;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    items: BasicUsage.args.items,
    openFirstItemOnMount: true
  }
}`,...(se=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ce,ie,le;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    items: singleItemArray
  }
}`,...(le=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,fe,pe;M.parameters={...M.parameters,docs:{...(de=M.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    items: mdItems,
    openFirstItemOnMount: true
  }
}`,...(pe=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:pe.source}}};var ue,me,be;N.parameters={...N.parameters,docs:{...(ue=N.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...(be=(me=N.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};const yt=["BasicUsage","BasicUsageOpen","SingleItem","MultilineContents","Empty"],Pt=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:w,BasicUsageOpen:R,Empty:N,MultilineContents:M,SingleItem:S,__namedExportsOrder:yt,default:vt},Symbol.toStringTag,{value:"Module"}));export{Pt as A,w as B};
//# sourceMappingURL=Accordion.stories-b439a70d.js.map
