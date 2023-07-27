import{j as h}from"./jsx-runtime-3cfe299f.js";import{r as o}from"./index-c4905b50.js";import{_ as f}from"./extends-98964cd2.js";import{a as v,$ as N}from"./index-027e524b.js";import{a as O,b as M,$ as T}from"./index-746ec687.js";import{$ as k}from"./index-ad15057c.js";import{$ as S,a as j}from"./index-621147ae.js";import{$ as K,a as z,b as V}from"./Combination-08f0f3e1.js";import{$ as q}from"./index-c7280168.js";import{$ as E,a as G,b as L,c as H}from"./index-2b920a75.js";import{$ as R}from"./index-e8915684.js";import{h as U}from"./index-335037e7.js";import{c as Z}from"./cn-ad0adaed.js";const y="Popover",[w,xe]=k(y,[E]),x=E(),[B,u]=w(y),J=e=>{const{__scopePopover:s,children:a,open:d,defaultOpen:c,onOpenChange:t,modal:r=!1}=e,n=x(s),i=o.useRef(null),[l,b]=o.useState(!1),[m=!1,p]=N({prop:d,defaultProp:c,onChange:t});return o.createElement(L,n,o.createElement(B,{scope:s,contentId:q(),triggerRef:i,open:m,onOpenChange:p,onOpenToggle:o.useCallback(()=>p(g=>!g),[p]),hasCustomAnchor:l,onCustomAnchorAdd:o.useCallback(()=>b(!0),[]),onCustomAnchorRemove:o.useCallback(()=>b(!1),[]),modal:r},a))},Q="PopoverTrigger",W=o.forwardRef((e,s)=>{const{__scopePopover:a,...d}=e,c=u(Q,a),t=x(a),r=O(s,c.triggerRef),n=o.createElement(T.button,f({type:"button","aria-haspopup":"dialog","aria-expanded":c.open,"aria-controls":c.contentId,"data-state":D(c.open)},d,{ref:r,onClick:v(e.onClick,c.onOpenToggle)}));return c.hasCustomAnchor?n:o.createElement(H,f({asChild:!0},t),n)}),A="PopoverPortal",[X,Y]=w(A,{forceMount:void 0}),ee=e=>{const{__scopePopover:s,forceMount:a,children:d,container:c}=e,t=u(A,s);return o.createElement(X,{scope:s,forceMount:a},o.createElement(R,{present:a||t.open},o.createElement(S,{asChild:!0,container:c},d)))},$="PopoverContent",oe=o.forwardRef((e,s)=>{const a=Y($,e.__scopePopover),{forceMount:d=a.forceMount,...c}=e,t=u($,e.__scopePopover);return o.createElement(R,{present:d||t.open},t.modal?o.createElement(te,f({},c,{ref:s})):o.createElement(ce,f({},c,{ref:s})))}),te=o.forwardRef((e,s)=>{const a=u($,e.__scopePopover),d=o.useRef(null),c=O(s,d),t=o.useRef(!1);return o.useEffect(()=>{const r=d.current;if(r)return U(r)},[]),o.createElement(K,{as:M,allowPinchZoom:!0},o.createElement(F,f({},e,{ref:c,trapFocus:a.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:v(e.onCloseAutoFocus,r=>{var n;r.preventDefault(),t.current||(n=a.triggerRef.current)===null||n===void 0||n.focus()}),onPointerDownOutside:v(e.onPointerDownOutside,r=>{const n=r.detail.originalEvent,i=n.button===0&&n.ctrlKey===!0,l=n.button===2||i;t.current=l},{checkForDefaultPrevented:!1}),onFocusOutside:v(e.onFocusOutside,r=>r.preventDefault(),{checkForDefaultPrevented:!1})})))}),ce=o.forwardRef((e,s)=>{const a=u($,e.__scopePopover),d=o.useRef(!1),c=o.useRef(!1);return o.createElement(F,f({},e,{ref:s,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var r;if((r=e.onCloseAutoFocus)===null||r===void 0||r.call(e,t),!t.defaultPrevented){var n;d.current||(n=a.triggerRef.current)===null||n===void 0||n.focus(),t.preventDefault()}d.current=!1,c.current=!1},onInteractOutside:t=>{var r,n;(r=e.onInteractOutside)===null||r===void 0||r.call(e,t),t.defaultPrevented||(d.current=!0,t.detail.originalEvent.type==="pointerdown"&&(c.current=!0));const i=t.target;((n=a.triggerRef.current)===null||n===void 0?void 0:n.contains(i))&&t.preventDefault(),t.detail.originalEvent.type==="focusin"&&c.current&&t.preventDefault()}}))}),F=o.forwardRef((e,s)=>{const{__scopePopover:a,trapFocus:d,onOpenAutoFocus:c,onCloseAutoFocus:t,disableOutsidePointerEvents:r,onEscapeKeyDown:n,onPointerDownOutside:i,onFocusOutside:l,onInteractOutside:b,...m}=e,p=u($,a),g=x(a);return z(),o.createElement(V,{asChild:!0,loop:!0,trapped:d,onMountAutoFocus:c,onUnmountAutoFocus:t},o.createElement(j,{asChild:!0,disableOutsidePointerEvents:r,onInteractOutside:b,onEscapeKeyDown:n,onPointerDownOutside:i,onFocusOutside:l,onDismiss:()=>p.onOpenChange(!1)},o.createElement(G,f({"data-state":D(p.open),role:"dialog",id:p.contentId},g,m,{ref:s,style:{...m.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}}))))});function D(e){return e?"open":"closed"}const re=J,ne=W,ae=ee,I=oe,_=re,C=ne,P=o.forwardRef(({className:e,align:s="center",sideOffset:a=4,...d},c)=>h.jsx(ae,{children:h.jsx(I,{ref:c,align:s,sideOffset:a,className:Z("z-50 w-72 rounded-md border bg-white p-4 shadow-md outline-none",["data-[state=open]:animate-in","data-[state=open]:fade-in-0","data-[state=open]:zoom-in-95"],["data-[state=closed]:animate-out","data-[state=closed]:fade-out-0","data-[state=closed]:zoom-out-95"],["data-[side=bottom]:-enter-translate-y-4 data-[side=bottom]:-exit-translate-y-4","data-[side=left]:enter-translate-x-4 data-[side=left]:exit-translate-x-4","data-[side=right]:-enter-translate-x-4 data-[side=right]:-exit-translate-x-4","data-[side=top]:exit-translate-y-4 data-[side=top]:enter-translate-y-4"],e),...d})}));P.displayName=I.displayName;try{_.displayName="Popover",_.__docgenInfo={description:"",displayName:"Popover",props:{}}}catch{}try{C.displayName="PopoverTrigger",C.__docgenInfo={description:"",displayName:"PopoverTrigger",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{P.displayName="PopoverContent",P.__docgenInfo={description:"",displayName:"PopoverContent",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}export{_ as P,C as a,P as b};
//# sourceMappingURL=Popover.primitives-543d077b.js.map
