import{r as a,$ as b}from"./index-c4905b50.js";import{b as $,$ as i}from"./index-09856750.js";function S(e,o,{checkForDefaultPrevented:c=!0}={}){return function(n){if(e==null||e(n),c===!1||!n.defaultPrevented)return o==null?void 0:o(n)}}function g({prop:e,defaultProp:o,onChange:c=()=>{}}){const[t,n]=p({defaultProp:o,onChange:c}),f=e!==void 0,l=f?e:t,s=$(c),d=a.useCallback(r=>{if(f){const u=typeof r=="function"?r(e):r;u!==e&&s(u)}else n(r)},[f,e,n,s]);return[l,d]}function p({defaultProp:e,onChange:o}){const c=a.useState(e),[t]=c,n=a.useRef(t),f=$(o);return a.useEffect(()=>{n.current!==t&&(f(t),n.current=t)},[t,n,f]),c}const h=b["useId".toString()]||(()=>{});let v=0;function R(e){const[o,c]=a.useState(h());return i(()=>{e||c(t=>t??String(v++))},[e]),e||(o?`radix-${o}`:"")}export{g as $,R as a,S as b};
//# sourceMappingURL=index-8c945b47.js.map
