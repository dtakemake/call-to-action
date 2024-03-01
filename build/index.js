(()=>{var e,t={812:(e,t,n)=>{"use strict";const o=window.wp.blocks,l=window.React,r=window.wp.element,a=window.wp.i18n,c=window.wp.blockEditor,i=window.wp.components,s=window.wp.primitives,p=(0,l.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(s.Path,{d:"M20.5 16h-.7V8c0-1.1-.9-2-2-2H6.2c-1.1 0-2 .9-2 2v8h-.7c-.8 0-1.5.7-1.5 1.5h20c0-.8-.7-1.5-1.5-1.5zM5.7 8c0-.3.2-.5.5-.5h11.6c.3 0 .5.2.5.5v7.6H5.7V8z"})),u=(0,l.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(s.Path,{d:"M17 4H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H7c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h10c.3 0 .5.2.5.5v12zm-7.5-.5h4V16h-4v1.5z"})),d=(0,l.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(s.Path,{d:"M15 4H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm.5 14c0 .3-.2.5-.5.5H9c-.3 0-.5-.2-.5-.5V6c0-.3.2-.5.5-.5h6c.3 0 .5.2.5.5v12zm-4.5-.5h2V16h-2v1.5z"})),g=({device:e,attributes:t,setAttributes:n})=>{var o;const r=(null!==(o=(0,c.useSetting)("color.palette"))&&void 0!==o?o:[]).map((({name:e,slug:t})=>({label:e,value:t})));return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(i.Flex,{className:"cta-flex-setting"},(0,l.createElement)(i.ToggleControl,{label:(0,a.__)("Title","cta-plugin"),checked:t[`${e}-headingShow`],onChange:t=>n({[`${e}-headingShow`]:t})})),(0,l.createElement)(i.Flex,{className:"cta-flex-setting"},(0,l.createElement)(i.ToggleControl,{label:(0,a.__)("Description","cta-plugin"),checked:t[`${e}-descriptionShow`],onChange:t=>n({[`${e}-descriptionShow`]:t})})),(0,l.createElement)(i.Flex,{className:"cta-flex-setting"},(0,l.createElement)(i.ToggleControl,{label:(0,a.__)("Button","cta-plugin"),checked:t[`${e}-buttonShow`],onChange:t=>n({[`${e}-buttonShow`]:t})})),r.length>0&&(0,l.createElement)(i.Flex,{className:"cta-flex-setting"},(0,l.createElement)(i.SelectControl,{label:(0,a.__)("Background","cta-plugin"),value:t[`${e}-backgroundColor`],onChange:t=>n({[`${e}-backgroundColor`]:t}),options:r})))},m=e=>{const t={};return""!==e["mobile-backgroundColor"]&&(t["--cta--mobile--bgColor"]=`var(--wp--preset--color--${e["mobile-backgroundColor"]})`),""!==e["tablet-backgroundColor"]&&(t["--cta--tablet--bgColor"]=`var(--wp--preset--color--${e["tablet-backgroundColor"]})`),""!==e["desktop-backgroundColor"]&&(t["--cta--desktop--bgColor"]=`var(--wp--preset--color--${e["desktop-backgroundColor"]})`),t};var b=n(942),h=n.n(b);const v=e=>h()({"mobile-heading-none":!e["mobile-headingShow"]},{"tablet-heading-none":!e["tablet-headingShow"]},{"desktop-heading-none":!e["desktop-headingShow"]},{"mobile-description-none":!e["mobile-descriptionShow"]},{"tablet-description-none":!e["tablet-descriptionShow"]},{"desktop-description-none":!e["desktop-descriptionShow"]},{"mobile-button-none":!e["mobile-buttonShow"]},{"tablet-button-none":!e["tablet-buttonShow"]},{"desktop-button-none":!e["desktop-buttonShow"]}),w=[["core/heading",{textAlign:"center",level:2,placeholder:(0,a.__)("Call To Action Heading","cta-plugin"),className:"cta-plugin-heading"}],["core/group",{className:"cta-plugin-description"},[["core/paragraph",{align:"center",placeholder:(0,a.__)("Call To Action Description","cta-plugin")}]]],["core/buttons",{layout:{type:"flex",justifyContent:"center"},className:"cta-plugin-buttons"},[["core/button",{placeholder:(0,a.__)("Call To Action button","cta-plugin")}]]]],k=JSON.parse('{"UU":"create-block/cta-plugin"}');(0,o.registerBlockType)(k.UU,{edit:({attributes:e,setAttributes:t})=>{const[n,o]=(0,r.useState)("desktop"),s=(0,c.useBlockProps)({className:v(e),style:m(e)});return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.InspectorControls,null,(0,l.createElement)(i.Card,null,(0,l.createElement)(i.CardHeader,null,(0,l.createElement)(i.__experimentalHeading,{level:5},(0,a.__)("CTA Options","cta-plugin")),(0,l.createElement)(i.ButtonGroup,null,(0,l.createElement)(i.Tooltip,{text:(0,a.__)("Desktop settings","cta-plugin")},(0,l.createElement)(i.Button,{variant:"secondary",isSmall:!0,icon:p,iconSize:"18px",isPressed:"desktop"===n,onClick:()=>o("desktop")})),(0,l.createElement)(i.Tooltip,{text:(0,a.__)("Tablet settings","cta-plugin")},(0,l.createElement)(i.Button,{variant:"secondary",isSmall:!0,icon:u,iconSize:"18px",isPressed:"tablet"===n,onClick:()=>o("tablet")})),(0,l.createElement)(i.Tooltip,{text:(0,a.__)("Mobile settings","cta-plugin")},(0,l.createElement)(i.Button,{variant:"secondary",isSmall:!0,icon:d,iconSize:"18px",isPressed:"mobile"===n,onClick:()=>o("mobile")})))),(0,l.createElement)(i.CardBody,null,(0,l.createElement)(g,{device:n,attributes:e,setAttributes:t})))),(0,l.createElement)("div",{...s},(0,l.createElement)(c.InnerBlocks,{template:w,templateLock:"all"})))},save:({attributes:e})=>{const t=c.useBlockProps.save({className:v(e),style:m(e)});return(0,l.createElement)("div",{...t},(0,l.createElement)(c.InnerBlocks.Content,null))}})},942:(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function l(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,r(n)))}return e}function r(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return l.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)o.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()}},n={};function o(e){var l=n[e];if(void 0!==l)return l.exports;var r=n[e]={exports:{}};return t[e](r,r.exports,o),r.exports}o.m=t,e=[],o.O=(t,n,l,r)=>{if(!n){var a=1/0;for(p=0;p<e.length;p++){for(var[n,l,r]=e[p],c=!0,i=0;i<n.length;i++)(!1&r||a>=r)&&Object.keys(o.O).every((e=>o.O[e](n[i])))?n.splice(i--,1):(c=!1,r<a&&(a=r));if(c){e.splice(p--,1);var s=l();void 0!==s&&(t=s)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[n,l,r]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={57:0,350:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var l,r,[a,c,i]=n,s=0;if(a.some((t=>0!==e[t]))){for(l in c)o.o(c,l)&&(o.m[l]=c[l]);if(i)var p=i(o)}for(t&&t(n);s<a.length;s++)r=a[s],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(p)},n=globalThis.webpackChunkcta_plugin=globalThis.webpackChunkcta_plugin||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var l=o.O(void 0,[350],(()=>o(812)));l=o.O(l)})();