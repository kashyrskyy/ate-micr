import{i as me,_ as L,s as he,a as u,c as Z,b as be,d as xe,e as F,r as y,j as d,f as z,u as le,g as N,h as A,k as re,l as Q,m as ge,n as ve,o as ye,p as Ce,q as ae,t as ee,v as O,w as ce,x as ke,y as H,T as U,z as Se,A as Pe,B as G,D as je,C as Re,E as we,F as $e,G as Fe,H as Ie}from"./index-e7Tm2yEb.js";import{B as _e,u as Be,a as de,c as te,f as Le,r as Me,T as Te,b as ie,d as Oe,S as We,A as ze}from"./createSvgIcon-Ckpun1uY.js";const De=["ownerState"],Ne=["variants"],Ae=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Ee(e){return Object.keys(e).length===0}function Ge(e){return typeof e=="string"&&e.charCodeAt(0)>96}function X(e){return e!=="ownerState"&&e!=="theme"&&e!=="sx"&&e!=="as"}const Ve=Z(),qe=e=>e&&e.charAt(0).toLowerCase()+e.slice(1);function V({defaultTheme:e,theme:t,themeId:o}){return Ee(t)?e:t[o]||t}function Ue(e){return e?(t,o)=>o[e]:null}function q(e,t){let{ownerState:o}=t,r=L(t,De);const i=typeof e=="function"?e(u({ownerState:o},r)):e;if(Array.isArray(i))return i.flatMap(n=>q(n,u({ownerState:o},r)));if(i&&typeof i=="object"&&Array.isArray(i.variants)){const{variants:n=[]}=i;let c=L(i,Ne);return n.forEach(a=>{let l=!0;typeof a.props=="function"?l=a.props(u({ownerState:o},r,o)):Object.keys(a.props).forEach(f=>{(o==null?void 0:o[f])!==a.props[f]&&r[f]!==a.props[f]&&(l=!1)}),l&&(Array.isArray(c)||(c=[c]),c.push(typeof a.style=="function"?a.style(u({ownerState:o},r,o)):a.style))}),c}return i}function He(e={}){const{themeId:t,defaultTheme:o=Ve,rootShouldForwardProp:r=X,slotShouldForwardProp:i=X}=e,n=s=>be(u({},s,{theme:V(u({},s,{defaultTheme:o,themeId:t}))}));return n.__mui_systemSx=!0,(s,c={})=>{me(s,h=>h.filter(g=>!(g!=null&&g.__mui_systemSx)));const{name:a,slot:l,skipVariantsResolver:f,skipSx:b,overridesResolver:x=Ue(qe(l))}=c,S=L(c,Ae),j=f!==void 0?f:l&&l!=="Root"&&l!=="root"||!1,C=b||!1;let p,m=X;l==="Root"||l==="root"?m=r:l?m=i:Ge(s)&&(m=void 0);const k=he(s,u({shouldForwardProp:m,label:p},S)),I=h=>typeof h=="function"&&h.__emotion_real!==h||xe(h)?g=>q(h,u({},g,{theme:V({theme:g.theme,defaultTheme:o,themeId:t})})):h,B=(h,...g)=>{let w=I(h);const P=g?g.map(I):[];a&&x&&P.push(v=>{const R=V(u({},v,{defaultTheme:o,themeId:t}));if(!R.components||!R.components[a]||!R.components[a].styleOverrides)return null;const M=R.components[a].styleOverrides,W={};return Object.entries(M).forEach(([T,K])=>{W[T]=q(K,u({},v,{theme:R}))}),x(v,W)}),a&&!j&&P.push(v=>{var R;const M=V(u({},v,{defaultTheme:o,themeId:t})),W=M==null||(R=M.components)==null||(R=R[a])==null?void 0:R.variants;return q({variants:W},u({},v,{theme:M}))}),C||P.push(n);const $=P.length-g.length;if(Array.isArray(h)&&$>0){const v=new Array($).fill("");w=[...h,...v],w.raw=[...h.raw,...v]}const E=k(w,...P);return s.muiName&&(E.muiName=s.muiName),E};return k.withConfig&&(B.withConfig=k.withConfig),B}}const ue=He(),Ke=["className","component","disableGutters","fixed","maxWidth","classes"],Je=Z(),Qe=ue("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${F(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),Xe=e=>le({props:e,name:"MuiContainer",defaultTheme:Je}),Ye=(e,t)=>{const o=a=>A(t,a),{classes:r,fixed:i,disableGutters:n,maxWidth:s}=e,c={root:["root",s&&`maxWidth${F(String(s))}`,i&&"fixed",n&&"disableGutters"]};return N(c,o,r)};function Ze(e={}){const{createStyledComponent:t=Qe,useThemeProps:o=Xe,componentName:r="MuiContainer"}=e,i=t(({theme:s,ownerState:c})=>u({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!c.disableGutters&&{paddingLeft:s.spacing(2),paddingRight:s.spacing(2),[s.breakpoints.up("sm")]:{paddingLeft:s.spacing(3),paddingRight:s.spacing(3)}}),({theme:s,ownerState:c})=>c.fixed&&Object.keys(s.breakpoints.values).reduce((a,l)=>{const f=l,b=s.breakpoints.values[f];return b!==0&&(a[s.breakpoints.up(f)]={maxWidth:`${b}${s.breakpoints.unit}`}),a},{}),({theme:s,ownerState:c})=>u({},c.maxWidth==="xs"&&{[s.breakpoints.up("xs")]:{maxWidth:Math.max(s.breakpoints.values.xs,444)}},c.maxWidth&&c.maxWidth!=="xs"&&{[s.breakpoints.up(c.maxWidth)]:{maxWidth:`${s.breakpoints.values[c.maxWidth]}${s.breakpoints.unit}`}}));return y.forwardRef(function(c,a){const l=o(c),{className:f,component:b="div",disableGutters:x=!1,fixed:S=!1,maxWidth:j="lg"}=l,C=L(l,Ke),p=u({},l,{component:b,disableGutters:x,fixed:S,maxWidth:j}),m=Ye(p,r);return d.jsx(i,u({as:b,ownerState:p,className:z(m.root,f),ref:a},C))})}const et=["component","direction","spacing","divider","children","className","useFlexGap"],tt=Z(),ot=ue("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function st(e){return le({props:e,name:"MuiStack",defaultTheme:tt})}function nt(e,t){const o=y.Children.toArray(e).filter(Boolean);return o.reduce((r,i,n)=>(r.push(i),n<o.length-1&&r.push(y.cloneElement(t,{key:`separator-${n}`})),r),[])}const rt=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],at=({ownerState:e,theme:t})=>{let o=u({display:"flex",flexDirection:"column"},re({theme:t},Q({values:e.direction,breakpoints:t.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=ge(t),i=Object.keys(t.breakpoints.values).reduce((a,l)=>((typeof e.spacing=="object"&&e.spacing[l]!=null||typeof e.direction=="object"&&e.direction[l]!=null)&&(a[l]=!0),a),{}),n=Q({values:e.direction,base:i}),s=Q({values:e.spacing,base:i});typeof n=="object"&&Object.keys(n).forEach((a,l,f)=>{if(!n[a]){const x=l>0?n[f[l-1]]:"column";n[a]=x}}),o=ve(o,re({theme:t},s,(a,l)=>e.useFlexGap?{gap:ae(r,a)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${rt(l?n[l]:e.direction)}`]:ae(r,a)}}))}return o=ye(t.breakpoints,o),o};function it(e={}){const{createStyledComponent:t=ot,useThemeProps:o=st,componentName:r="MuiStack"}=e,i=()=>N({root:["root"]},a=>A(r,a),{}),n=t(at);return y.forwardRef(function(a,l){const f=o(a),b=Ce(f),{component:x="div",direction:S="column",spacing:j=0,divider:C,children:p,className:m,useFlexGap:k=!1}=b,I=L(b,et),B={direction:S,spacing:j,useFlexGap:k},h=i();return d.jsx(n,u({as:x,ownerState:B,ref:l,className:z(h.root,m)},I,{children:C?nt(p,C):p}))})}function lt(e){return A("PrivateSwitchBase",e)}ee("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const ct=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],dt=e=>{const{classes:t,checked:o,disabled:r,edge:i}=e,n={root:["root",o&&"checked",r&&"disabled",i&&`edge${F(i)}`],input:["input"]};return N(n,lt,t)},ut=O(_e)(({ownerState:e})=>u({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),pt=O("input",{shouldForwardProp:ce})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),ft=y.forwardRef(function(t,o){const{autoFocus:r,checked:i,checkedIcon:n,className:s,defaultChecked:c,disabled:a,disableFocusRipple:l=!1,edge:f=!1,icon:b,id:x,inputProps:S,inputRef:j,name:C,onBlur:p,onChange:m,onFocus:k,readOnly:I,required:B=!1,tabIndex:h,type:g,value:w}=t,P=L(t,ct),[$,E]=Be({controlled:i,default:!!c,name:"SwitchBase",state:"checked"}),v=de(),R=_=>{k&&k(_),v&&v.onFocus&&v.onFocus(_)},M=_=>{p&&p(_),v&&v.onBlur&&v.onBlur(_)},W=_=>{if(_.nativeEvent.defaultPrevented)return;const ne=_.target.checked;E(ne),m&&m(_,ne)};let T=a;v&&typeof T>"u"&&(T=v.disabled);const K=g==="checkbox"||g==="radio",J=u({},t,{checked:$,disabled:T,disableFocusRipple:l,edge:f}),se=dt(J);return d.jsxs(ut,u({component:"span",className:z(se.root,s),centerRipple:!0,focusRipple:!l,disabled:T,tabIndex:null,role:void 0,onFocus:R,onBlur:M,ownerState:J,ref:o},P,{children:[d.jsx(pt,u({autoFocus:r,checked:i,defaultChecked:c,className:se.input,disabled:T,id:K?x:void 0,name:C,onChange:W,readOnly:I,ref:j,required:B,ownerState:J,tabIndex:h,type:g},g==="checkbox"&&w===void 0?{}:{value:w},S)),$?n:b]}))}),mt=ft,ht=te(d.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),bt=te(d.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),xt=te(d.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function gt(e){return A("MuiCheckbox",e)}const vt=ee("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),Y=vt,yt=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Ct=e=>{const{classes:t,indeterminate:o,color:r,size:i}=e,n={root:["root",o&&"indeterminate",`color${F(r)}`,`size${F(i)}`]},s=N(n,gt,t);return u({},t,s)},kt=O(mt,{shouldForwardProp:e=>ce(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,t[`size${F(o.size)}`],o.color!=="default"&&t[`color${F(o.color)}`]]}})(({theme:e,ownerState:t})=>u({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ke(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${Y.checked}, &.${Y.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${Y.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),St=d.jsx(bt,{}),Pt=d.jsx(ht,{}),jt=d.jsx(xt,{}),Rt=y.forwardRef(function(t,o){var r,i;const n=H({props:t,name:"MuiCheckbox"}),{checkedIcon:s=St,color:c="primary",icon:a=Pt,indeterminate:l=!1,indeterminateIcon:f=jt,inputProps:b,size:x="medium",className:S}=n,j=L(n,yt),C=l?f:a,p=l?f:s,m=u({},n,{color:c,indeterminate:l,size:x}),k=Ct(m);return d.jsx(kt,u({type:"checkbox",inputProps:u({"data-indeterminate":l},b),icon:y.cloneElement(C,{fontSize:(r=C.props.fontSize)!=null?r:x}),checkedIcon:y.cloneElement(p,{fontSize:(i=p.props.fontSize)!=null?i:x}),ownerState:m,ref:o,className:z(k.root,S)},j,{classes:k}))}),wt=Rt,$t=Ze({createStyledComponent:O("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`maxWidth${F(String(o.maxWidth))}`],o.fixed&&t.fixed,o.disableGutters&&t.disableGutters]}}),useThemeProps:e=>H({props:e,name:"MuiContainer"})}),Ft=$t,It=it({createStyledComponent:O("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>H({props:e,name:"MuiStack"})}),_t=It;function Bt(e){return A("MuiFormControlLabel",e)}const Lt=ee("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),D=Lt,Mt=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],Tt=e=>{const{classes:t,disabled:o,labelPlacement:r,error:i,required:n}=e,s={root:["root",o&&"disabled",`labelPlacement${F(r)}`,i&&"error",n&&"required"],label:["label",o&&"disabled"],asterisk:["asterisk",i&&"error"]};return N(s,Bt,t)},Ot=O("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${D.label}`]:t.label},t.root,t[`labelPlacement${F(o.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>u({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${D.disabled}`]:{cursor:"default"}},t.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},t.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},t.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${D.label}`]:{[`&.${D.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),Wt=O("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${D.error}`]:{color:(e.vars||e).palette.error.main}})),zt=y.forwardRef(function(t,o){var r,i;const n=H({props:t,name:"MuiFormControlLabel"}),{className:s,componentsProps:c={},control:a,disabled:l,disableTypography:f,label:b,labelPlacement:x="end",required:S,slotProps:j={}}=n,C=L(n,Mt),p=de(),m=(r=l??a.props.disabled)!=null?r:p==null?void 0:p.disabled,k=S??a.props.required,I={disabled:m,required:k};["checked","name","onChange","value","inputRef"].forEach($=>{typeof a.props[$]>"u"&&typeof n[$]<"u"&&(I[$]=n[$])});const B=Le({props:n,muiFormControl:p,states:["error"]}),h=u({},n,{disabled:m,labelPlacement:x,required:k,error:B.error}),g=Tt(h),w=(i=j.typography)!=null?i:c.typography;let P=b;return P!=null&&P.type!==U&&!f&&(P=d.jsx(U,u({component:"span"},w,{className:z(g.label,w==null?void 0:w.className),children:P}))),d.jsxs(Ot,u({className:z(g.root,s),ownerState:h,ref:o},C,{children:[y.cloneElement(a,I),k?d.jsxs(_t,{display:"block",children:[P,d.jsxs(Wt,{ownerState:h,"aria-hidden":!0,className:g.asterisk,children:[" ","*"]})]}):P]}))}),Dt=zt;var oe={},Nt=Se;Object.defineProperty(oe,"__esModule",{value:!0});var pe=oe.default=void 0;Gt(y);var At=Nt(Me()),Et=d;function fe(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,o=new WeakMap;return(fe=function(r){return r?o:t})(e)}function Gt(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var o=fe(t);if(o&&o.has(e))return o.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)){var s=i?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(r,n,s):r[n]=e[n]}return r.default=e,o&&o.set(e,r),r}pe=oe.default=(0,At.default)((0,Et.jsx)("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google");const Ut=()=>{const e=Pe();console.log("Login loaded");const[t,o]=y.useState(!1),[r,i]=y.useState(""),[n,s]=y.useState("success"),[c,a]=y.useState(""),[l,f]=y.useState(!1),[b,x]=y.useState(!0),S="ate-micr-user-test",j=p=>{p===S?(f(!0),i("Passcode Entered Correctly."),s("success"),o(!0)):(i("Invalid passcode. Please try again."),s("error"),o(!0))},C=async()=>{try{await Re(e,b?we:$e);const p=new Fe;await Ie(e,p),i("Successfully logged in with Google!"),s("success"),o(!0)}catch(p){let m="Login Failed: An unexpected error occurred.";switch(p.code){case"auth/network-request-failed":m="Login Failed: Network error, please check your connection.";break;case"auth/popup-closed-by-user":m="Login Failed: The sign-in popup was closed before completion.";break;case"auth/cancelled-popup-request":m="Login Failed: Another sign-in request was made before the first one was completed.";break;case"auth/popup-blocked":m="Login Failed: The sign-in popup was blocked by the browser. Please allow popups for this site.";break}i(m),s("error"),o(!0)}};return d.jsxs(Ft,{maxWidth:"lg",sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",padding:20},children:[d.jsxs(G,{sx:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[" ",d.jsx("img",{src:"/ate-micr/ate-logo.png",alt:"ATE Logo",style:{width:150,marginBottom:5,marginTop:40}}),d.jsx(U,{variant:"h4",component:"h1",gutterBottom:!0,children:"ATE 2.0: MICR 230"})]}),d.jsx(je,{orientation:"vertical",flexItem:!0}),d.jsxs(G,{sx:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[" ",!l&&d.jsxs("form",{onSubmit:p=>{p.preventDefault(),j(c)},children:[d.jsx(Te,{fullWidth:!0,label:"Enter Passcode",variant:"outlined",value:c,onChange:p=>a(p.target.value),sx:{mb:2,height:56,"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"rgba(0, 0, 0, 0.23)"},"&:hover fieldset":{borderColor:"rgba(0, 0, 0, 0.5)"},"&.Mui-focused fieldset":{borderColor:"#3f51b5",borderWidth:"1px"}},transition:"border-color 0.3s ease"}}),d.jsx(G,{sx:{display:"flex",justifyContent:"center"},children:d.jsx(ie,{type:"submit",variant:"contained",sx:{mt:2,textTransform:"none",minWidth:"250px",boxShadow:"none","&:hover":{boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.2)",transform:"scale(1.05)"},transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",border:"1px solid transparent"},children:"Continue"})})]}),l&&d.jsxs(G,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[d.jsx(U,{variant:"h6",component:"h2",gutterBottom:!0,children:"Welcome! Please sign in to get started."}),d.jsx(ie,{variant:"contained",startIcon:d.jsx(pe,{}),onClick:C,sx:{textTransform:"none",fontSize:"1rem",border:"1px solid transparent",transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out","&:hover":{backgroundColor:"#357ae8",boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.2)",transform:"scale(1.05)"},minWidth:"250px"},children:"Sign In with Google"}),d.jsx(Oe,{title:"Keep you signed in on this device. Do not use on public or shared computers.",placement:"right",children:d.jsx(Dt,{control:d.jsx(wt,{checked:b,onChange:p=>x(p.target.checked)}),label:"Keep me signed in"})})]})]}),d.jsx(We,{open:t,autoHideDuration:6e3,onClose:()=>o(!1),children:d.jsx(ze,{onClose:()=>o(!1),severity:n,sx:{width:"100%"},children:r})})]})};export{Ut as default};
