import{j as l}from"./jsx-runtime-3cfe299f.js";import{M as ve,f as ie,m as _e}from"./benefit-of-regular-exercise-b33d2a55.js";import{_ as p}from"./extends-98964cd2.js";import{R as a}from"./index-c4905b50.js";import{$ as ye}from"./index-ad15057c.js";import{$ as xe}from"./index-619a6d1c.js";import{a as Ie,$ as ce}from"./index-e64c434c.js";import{$ as le,a as Ae}from"./index-027e524b.js";import{c as de,$ as we,a as Ce,b as Ee}from"./index-bd7f5108.js";import{$ as Se}from"./index-c7280168.js";import{$ as Ne}from"./index-5277ee67.js";import{g as Re}from"./_commonjsHelpers-042e6b4d.js";import{C as je}from"./react-icons.esm-7b021bee.js";const u="Accordion",Me=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[U,Oe,Pe]=xe(u),[A,_t]=ye(u,[Pe,de]),B=de(),fe=a.forwardRef((e,r)=>{const{type:t,...o}=e,s=o,n=o;return a.createElement(U.Provider,{scope:e.__scopeAccordion},t==="multiple"?a.createElement(De,p({},n,{ref:r})):a.createElement(Te,p({},s,{ref:r})))});fe.propTypes={type(e){const r=e.value||e.defaultValue;return e.type&&!["single","multiple"].includes(e.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):e.type==="multiple"&&typeof r=="string"?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):e.type==="single"&&Array.isArray(r)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[pe,ke]=A(u),[me,Ve]=A(u,{collapsible:!1}),Te=a.forwardRef((e,r)=>{const{value:t,defaultValue:o,onValueChange:s=()=>{},collapsible:n=!1,...i}=e,[c,d]=le({prop:t,defaultProp:o,onChange:s});return a.createElement(pe,{scope:e.__scopeAccordion,value:c?[c]:[],onItemOpen:d,onItemClose:a.useCallback(()=>n&&d(""),[n,d])},a.createElement(me,{scope:e.__scopeAccordion,collapsible:n},a.createElement(ue,p({},i,{ref:r}))))}),De=a.forwardRef((e,r)=>{const{value:t,defaultValue:o,onValueChange:s=()=>{},...n}=e,[i=[],c]=le({prop:t,defaultProp:o,onChange:s}),d=a.useCallback($=>c((m=[])=>[...m,$]),[c]),b=a.useCallback($=>c((m=[])=>m.filter(C=>C!==$)),[c]);return a.createElement(pe,{scope:e.__scopeAccordion,value:i,onItemOpen:d,onItemClose:b},a.createElement(me,{scope:e.__scopeAccordion,collapsible:!0},a.createElement(ue,p({},n,{ref:r}))))}),[Fe,w]=A(u),ue=a.forwardRef((e,r)=>{const{__scopeAccordion:t,disabled:o,dir:s,orientation:n="vertical",...i}=e,c=a.useRef(null),d=Ie(c,r),b=Oe(t),m=Ne(s)==="ltr",C=Ae(e.onKeyDown,x=>{var E;if(!Me.includes(x.key))return;const ge=x.target,S=b().filter(O=>{var P;return!((P=O.ref.current)!==null&&P!==void 0&&P.disabled)}),I=S.findIndex(O=>O.ref.current===ge),H=S.length;if(I===-1)return;x.preventDefault();let f=I;const N=0,R=H-1,j=()=>{f=I+1,f>R&&(f=N)},M=()=>{f=I-1,f<N&&(f=R)};switch(x.key){case"Home":f=N;break;case"End":f=R;break;case"ArrowRight":n==="horizontal"&&(m?j():M());break;case"ArrowDown":n==="vertical"&&j();break;case"ArrowLeft":n==="horizontal"&&(m?M():j());break;case"ArrowUp":n==="vertical"&&M();break}const he=f%H;(E=S[he].ref.current)===null||E===void 0||E.focus()});return a.createElement(Fe,{scope:t,disabled:o,direction:s,orientation:n},a.createElement(U.Slot,{scope:t},a.createElement(ce.div,p({},i,{"data-orientation":n,ref:d,onKeyDown:o?void 0:C}))))}),k="AccordionItem",[Ue,Y]=A(k),Be=a.forwardRef((e,r)=>{const{__scopeAccordion:t,value:o,...s}=e,n=w(k,t),i=ke(k,t),c=B(t),d=Se(),b=o&&i.value.includes(o)||!1,$=n.disabled||e.disabled;return a.createElement(Ue,{scope:t,open:b,disabled:$,triggerId:d},a.createElement(we,p({"data-orientation":n.orientation,"data-state":be(b)},c,s,{ref:r,disabled:$,open:b,onOpenChange:m=>{m?i.onItemOpen(o):i.onItemClose(o)}})))}),Ye="AccordionHeader",qe=a.forwardRef((e,r)=>{const{__scopeAccordion:t,...o}=e,s=w(u,t),n=Y(Ye,t);return a.createElement(ce.h3,p({"data-orientation":s.orientation,"data-state":be(n.open),"data-disabled":n.disabled?"":void 0},o,{ref:r}))}),L="AccordionTrigger",He=a.forwardRef((e,r)=>{const{__scopeAccordion:t,...o}=e,s=w(u,t),n=Y(L,t),i=Ve(L,t),c=B(t);return a.createElement(U.ItemSlot,{scope:t},a.createElement(Ce,p({"aria-disabled":n.open&&!i.collapsible||void 0,"data-orientation":s.orientation,id:n.triggerId},c,o,{ref:r})))}),Le="AccordionContent",ze=a.forwardRef((e,r)=>{const{__scopeAccordion:t,...o}=e,s=w(u,t),n=Y(Le,t),i=B(t);return a.createElement(Ee,p({role:"region","aria-labelledby":n.triggerId,"data-orientation":s.orientation},i,o,{ref:r,style:{["--radix-accordion-content-height"]:"var(--radix-collapsible-content-height)",["--radix-accordion-content-width"]:"var(--radix-collapsible-content-width)",...e.style}}))});function be(e){return e?"open":"closed"}const Ke=fe,We=Be,Ge=qe,Je=He,Qe=ze;var $e={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var r={}.hasOwnProperty;function t(){for(var o=[],s=0;s<arguments.length;s++){var n=arguments[s];if(n){var i=typeof n;if(i==="string"||i==="number")o.push(n);else if(Array.isArray(n)){if(n.length){var c=t.apply(null,n);c&&o.push(c)}}else if(i==="object"){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){o.push(n.toString());continue}for(var d in n)r.call(n,d)&&n[d]&&o.push(d)}}}return o.join(" ")}e.exports?(t.default=t,e.exports=t):window.classNames=t})()})($e);var Xe=$e.exports;const q=Re(Xe),V=a.forwardRef(function({children:r,className:t,...o},s){return l.jsx(We,{className:q("border-b border-gray-300",t),...o,ref:s,children:r})}),T=a.forwardRef(function({children:r,className:t,...o},s){return l.jsx(Ge,{children:l.jsxs(Je,{className:q("group flex w-full items-center justify-between py-4 font-medium transition-all hover:underline",t),...o,ref:s,children:[l.jsx("p",{className:"pr-2 text-left",children:r}),l.jsx(je,{className:"h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180","aria-hidden":!0})]})})}),D=a.forwardRef(function({children:r,className:t,...o},s){return l.jsx(Qe,{className:q("overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",t),...o,ref:s,children:l.jsx("div",{className:"px-1 pb-4 pt-0",children:r})})});try{V.displayName="AccordionItem",V.__docgenInfo={description:"",displayName:"AccordionItem",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{T.displayName="AccordionTrigger",T.__docgenInfo={description:"",displayName:"AccordionTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{D.displayName="AccordionContent",D.__docgenInfo={description:"",displayName:"AccordionContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}function F({items:e,openFirstItemOnMount:r=!1}){return l.jsx(Ke,{type:"single",collapsible:!0,defaultValue:r?"item-0":"",children:e.map((t,o)=>l.jsxs(V,{value:`item-${o}`,children:[l.jsx(T,{children:t.title}),l.jsx(D,{children:l.jsx(ve,{children:t.content})})]},o))})}try{F.displayName="Accordion",F.__docgenInfo={description:"",displayName:"Accordion",props:{items:{defaultValue:null,description:"An array of `Item`s where `Item` is an object with the following properties:\n- `Item.title`: string\n- `Item.content`: string\n\n> `Item.content` may contain _markdown syntaxes_ and/or _html markups_.",name:"items",required:!0,type:{name:"Item[]"}},openFirstItemOnMount:{defaultValue:{value:"false"},description:"Should the first item be expanded when the component is rendered for the first time?",name:"openFirstItemOnMount",required:!1,type:{name:"boolean"}}}}}catch{}const Ze=`---
title: Some Caveats on Social Media
---

Social media has revolutionized the way people communicate and connect with each other. Platforms like Facebook, Instagram, and Twitter enable individuals to share ideas, thoughts, and experiences instantly. Social media also facilitates networking, allowing people to establish professional connections and explore job opportunities.

_However_, it has its challenges, with concerns about privacy, cyberbullying, and misinformation. Understanding the impact of social media is essential for using these platforms responsibly and harnessing their potential for positive change.
`,et=`---
title: "Exploring the Wonders of Space: Unraveling the Mysteries of the Universe"
---

Space exploration has captivated human curiosity for centuries. Advancements in technology have allowed us to delve **deeper** into the mysteries of the universe.

Through space missions and telescopes, scientists have discovered exoplanets, celestial bodies outside our solar system, offering insights into **the possibility of extraterrestrial life**.

Exploring space also provides valuable data on the origins of the universe, black holes, and the nature of gravity.

It is an ongoing endeavor that

- expands our knowledge
- fuels scientific progress
`,tt=`---
title: "The Importance of Financial Literacy: Empowering Individuals for Financial Success"
---

Financial literacy is **crucial** for personal financial success and economic stability. Understanding concepts such as _budgeting_, _saving_, and _investing_ empowers individuals to make informed financial decisions.

> Financially literate individuals can effectively manage debt, plan for retirement, and navigate complex financial markets.

Moreover, teaching financial literacy in schools equips young people with _essential skills_ for a financially secure future, reducing the likelihood of financial struggles and promoting economic growth.
`,nt=`---
title: "The Power of Mindfulness: Cultivating Awareness for a Balanced Life"
---

_Mindfulness_, the practice of being fully present in the moment, has gained popularity for its positive effects on mental well-being. By cultivating awareness of thoughts and emotions without judgment, mindfulness helps reduce stress and anxiety.

It promotes emotional stability, increases focus, and improves decision-making abilities. Regular mindfulness practice can lead to a greater sense of happiness and fulfillment, as individuals become more attuned to their inner selves and the world around them.
`,ot={component:F,decorators:[e=>l.jsx("div",{className:"w-[500px] bg-white",children:l.jsx(e,{})})],parameters:{layout:"centered"}},g={args:{items:[{title:"Is it accessible?",content:"Yes. It adheres to the `WAI-ARIA` design pattern."},{title:"Is it styled?",content:"Yes. It comes with _default_ styles that matches the other components' aesthetic."},{title:"Is it animated?",content:"Yes. It's animated by _default_, but you can **disable** it if you prefer."}]}},h={args:{items:g.args.items,openFirstItemOnMount:!0}},rt=[Ze].map(e=>{const{attributes:{title:r},body:t}=ie(e);return{title:r,content:t}}),v={args:{items:rt}},at=[_e,et,tt,nt].map(e=>{const{attributes:{title:r},body:t}=ie(e);return{title:r,content:t}}),_={args:{items:at,openFirstItemOnMount:!0}},y={args:{items:[]}};var z,K,W;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(W=(K=g.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var G,J,Q;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    items: BasicUsage.args.items,
    openFirstItemOnMount: true
  }
}`,...(Q=(J=h.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,ee;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    items: singleItemArray
  }
}`,...(ee=(Z=v.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,oe;_.parameters={..._.parameters,docs:{...(te=_.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    items: mdItems,
    openFirstItemOnMount: true
  }
}`,...(oe=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,ae,se;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...(se=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const st=["BasicUsage","BasicUsageOpen","SingleItem","MultilineContents","Empty"],yt=Object.freeze(Object.defineProperty({__proto__:null,BasicUsage:g,BasicUsageOpen:h,Empty:y,MultilineContents:_,SingleItem:v,__namedExportsOrder:st,default:ot},Symbol.toStringTag,{value:"Module"}));export{yt as A,g as B};
//# sourceMappingURL=Accordion.stories-38d76e24.js.map
