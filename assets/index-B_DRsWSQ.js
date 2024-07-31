import{c as de,s as ue,_ as p,h as X,r as E,a as pe,d as he,m as me,b as u,e as fe,f as O,j as n,g as z,u as be,i as Y,k as q,l as N,n as G,o as L,B as ge,p as oe,q as xe,t as te,v as w,w as U,x as ve,y as H,z as ke,T as D,A as ye,C as Ce,D as Pe,E as je,F as V,G as Se,H as T,I as Ie,J as Fe,K as Z,L as ee,M as Re,S as we,N as Be,O as Le,P as Me,Q as $e,R as _e,U as ze}from"./index-DkIeGfjL.js";const Te=["component","direction","spacing","divider","children","className","useFlexGap"],De=de(),Oe=ue("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function qe(e){return be({props:e,name:"MuiStack",defaultTheme:De})}function Ne(e,o){const t=u.Children.toArray(e).filter(Boolean);return t.reduce((r,a,s)=>(r.push(a),s<t.length-1&&r.push(u.cloneElement(o,{key:`separator-${s}`})),r),[])}const Ae=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],Ee=({ownerState:e,theme:o})=>{let t=p({display:"flex",flexDirection:"column"},X({theme:o},E({values:e.direction,breakpoints:o.breakpoints.values}),r=>({flexDirection:r})));if(e.spacing){const r=pe(o),a=Object.keys(o.breakpoints.values).reduce((i,l)=>((typeof e.spacing=="object"&&e.spacing[l]!=null||typeof e.direction=="object"&&e.direction[l]!=null)&&(i[l]=!0),i),{}),s=E({values:e.direction,base:a}),d=E({values:e.spacing,base:a});typeof s=="object"&&Object.keys(s).forEach((i,l,g)=>{if(!s[i]){const m=l>0?s[g[l-1]]:"column";s[i]=m}}),t=he(t,X({theme:o},d,(i,l)=>e.useFlexGap?{gap:Y(r,i)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${Ae(l?s[l]:e.direction)}`]:Y(r,i)}}))}return t=me(o.breakpoints,t),t};function Ve(e={}){const{createStyledComponent:o=Oe,useThemeProps:t=qe,componentName:r="MuiStack"}=e,a=()=>q({root:["root"]},i=>N(r,i),{}),s=o(Ee);return u.forwardRef(function(i,l){const g=t(i),x=fe(g),{component:m="div",direction:C="column",spacing:y=0,divider:f,children:h,className:v,useFlexGap:c=!1}=x,k=O(x,Te),M={direction:C,spacing:y,useFlexGap:c},F=a();return n.jsx(s,p({as:m,ownerState:M,ref:l,className:z(F.root,v)},k,{children:f?Ne(h,f):h}))})}function We(e){return N("PrivateSwitchBase",e)}G("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Ge=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Ue=e=>{const{classes:o,checked:t,disabled:r,edge:a}=e,s={root:["root",t&&"checked",r&&"disabled",a&&`edge${w(a)}`],input:["input"]};return q(s,We,o)},He=L(ge)(({ownerState:e})=>p({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Ke=L("input",{shouldForwardProp:oe})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Qe=u.forwardRef(function(o,t){const{autoFocus:r,checked:a,checkedIcon:s,className:d,defaultChecked:b,disabled:i,disableFocusRipple:l=!1,edge:g=!1,icon:x,id:m,inputProps:C,inputRef:y,name:f,onBlur:h,onChange:v,onFocus:c,readOnly:k,required:M=!1,tabIndex:F,type:j,value:B}=o,S=O(o,Ge),[R,re]=xe({controlled:a,default:!!b,name:"SwitchBase",state:"checked"}),I=te(),ae=P=>{c&&c(P),I&&I.onFocus&&I.onFocus(P)},ce=P=>{h&&h(P),I&&I.onBlur&&I.onBlur(P)},le=P=>{if(P.nativeEvent.defaultPrevented)return;const J=P.target.checked;re(J),v&&v(P,J)};let $=i;I&&typeof $>"u"&&($=I.disabled);const ie=j==="checkbox"||j==="radio",A=p({},o,{checked:R,disabled:$,disableFocusRipple:l,edge:g}),Q=Ue(A);return n.jsxs(He,p({component:"span",className:z(Q.root,d),centerRipple:!0,focusRipple:!l,disabled:$,tabIndex:null,role:void 0,onFocus:ae,onBlur:ce,ownerState:A,ref:t},S,{children:[n.jsx(Ke,p({autoFocus:r,checked:a,defaultChecked:b,className:Q.input,disabled:$,id:ie?m:void 0,name:f,onChange:le,readOnly:k,ref:y,required:M,ownerState:A,tabIndex:F,type:j},j==="checkbox"&&B===void 0?{}:{value:B},C)),R?s:x]}))}),Je=U(n.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),Xe=U(n.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Ye=U(n.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Ze(e){return N("MuiCheckbox",e)}const W=G("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),eo=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],oo=e=>{const{classes:o,indeterminate:t,color:r,size:a}=e,s={root:["root",t&&"indeterminate",`color${w(r)}`,`size${w(a)}`]},d=q(s,Ze,o);return p({},o,d)},to=L(Qe,{shouldForwardProp:e=>oe(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,t.indeterminate&&o.indeterminate,o[`size${w(t.size)}`],t.color!=="default"&&o[`color${w(t.color)}`]]}})(({theme:e,ownerState:o})=>p({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:ve(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${W.checked}, &.${W.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${W.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),so=n.jsx(Xe,{}),no=n.jsx(Je,{}),ro=n.jsx(Ye,{}),ao=u.forwardRef(function(o,t){var r,a;const s=H({props:o,name:"MuiCheckbox"}),{checkedIcon:d=so,color:b="primary",icon:i=no,indeterminate:l=!1,indeterminateIcon:g=ro,inputProps:x,size:m="medium",className:C}=s,y=O(s,eo),f=l?g:i,h=l?g:d,v=p({},s,{color:b,indeterminate:l,size:m}),c=oo(v);return n.jsx(to,p({type:"checkbox",inputProps:p({"data-indeterminate":l},x),icon:u.cloneElement(f,{fontSize:(r=f.props.fontSize)!=null?r:m}),checkedIcon:u.cloneElement(h,{fontSize:(a=h.props.fontSize)!=null?a:m}),ownerState:v,ref:t,className:z(c.root,C)},y,{classes:c}))}),co=Ve({createStyledComponent:L("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>H({props:e,name:"MuiStack"})});function lo(e){return N("MuiFormControlLabel",e)}const _=G("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),io=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],uo=e=>{const{classes:o,disabled:t,labelPlacement:r,error:a,required:s}=e,d={root:["root",t&&"disabled",`labelPlacement${w(r)}`,a&&"error",s&&"required"],label:["label",t&&"disabled"],asterisk:["asterisk",a&&"error"]};return q(d,lo,o)},po=L("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[{[`& .${_.label}`]:o.label},o.root,o[`labelPlacement${w(t.labelPlacement)}`]]}})(({theme:e,ownerState:o})=>p({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${_.disabled}`]:{cursor:"default"}},o.labelPlacement==="start"&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},o.labelPlacement==="top"&&{flexDirection:"column-reverse",marginLeft:16},o.labelPlacement==="bottom"&&{flexDirection:"column",marginLeft:16},{[`& .${_.label}`]:{[`&.${_.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),ho=L("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,o)=>o.asterisk})(({theme:e})=>({[`&.${_.error}`]:{color:(e.vars||e).palette.error.main}})),mo=u.forwardRef(function(o,t){var r,a;const s=H({props:o,name:"MuiFormControlLabel"}),{className:d,componentsProps:b={},control:i,disabled:l,disableTypography:g,label:x,labelPlacement:m="end",required:C,slotProps:y={}}=s,f=O(s,io),h=te(),v=(r=l??i.props.disabled)!=null?r:h==null?void 0:h.disabled,c=C??i.props.required,k={disabled:v,required:c};["checked","name","onChange","value","inputRef"].forEach(R=>{typeof i.props[R]>"u"&&typeof s[R]<"u"&&(k[R]=s[R])});const M=ke({props:s,muiFormControl:h,states:["error"]}),F=p({},s,{disabled:v,labelPlacement:m,required:c,error:M.error}),j=uo(F),B=(a=y.typography)!=null?a:b.typography;let S=x;return S!=null&&S.type!==D&&!g&&(S=n.jsx(D,p({component:"span"},B,{className:z(j.label,B==null?void 0:B.className),children:S}))),n.jsxs(po,p({className:z(j.root,d),ownerState:F,ref:t},f,{children:[u.cloneElement(i,k),c?n.jsxs(co,{display:"block",children:[S,n.jsxs(ho,{ownerState:F,"aria-hidden":!0,className:j.asterisk,children:[" ","*"]})]}):S]}))});var K={},fo=Ce;Object.defineProperty(K,"__esModule",{value:!0});var se=K.default=void 0;xo(u);var bo=fo(ye()),go=n;function ne(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,t=new WeakMap;return(ne=function(r){return r?t:o})(e)}function xo(e,o){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var t=ne(o);if(t&&t.has(e))return t.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var d=a?Object.getOwnPropertyDescriptor(e,s):null;d&&(d.get||d.set)?Object.defineProperty(r,s,d):r[s]=e[s]}return r.default=e,t&&t.set(e,r),r}se=K.default=(0,bo.default)((0,go.jsx)("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google");const ko=()=>{const e=Pe();console.log("Login loaded");const[o,t]=u.useState(!1),[r,a]=u.useState(""),[s,d]=u.useState("success"),[b,i]=u.useState(""),[l,g]=u.useState(!1),[x,m]=u.useState(!0),C="ate-micr-user-test",y=je(),f=V(y.breakpoints.down("sm"));V(y.breakpoints.between("sm","md")),V(y.breakpoints.up("md"));const h=c=>{c===C?(g(!0),a("Passcode Entered Correctly."),d("success"),t(!0)):(a("Invalid passcode. Please try again."),d("error"),t(!0))},v=async()=>{try{await Le(e,x?Me:$e);const c=new _e;await ze(e,c),a("Successfully logged in with Google!"),d("success"),t(!0)}catch(c){let k="Login Failed: An unexpected error occurred.";if(typeof c=="object"&&c!==null&&"code"in c)switch(c.code){case"auth/network-request-failed":k="Login Failed: Network error, please check your connection.";break;case"auth/popup-closed-by-user":k="Login Failed: The sign-in popup was closed before completion.";break;case"auth/cancelled-popup-request":k="Login Failed: Another sign-in request was made before the first one was completed.";break;case"auth/popup-blocked":k="Login Failed: The sign-in popup was blocked by the browser. Please allow popups for this site.";break}a(k),d("error"),t(!0)}};return n.jsxs(Se,{maxWidth:"lg",sx:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:[n.jsxs(T,{container:!0,spacing:f?2:4,alignItems:"center",justifyContent:"center",children:[n.jsxs(T,{item:!0,xs:12,md:6,sx:{textAlign:"center"},children:[n.jsx("img",{src:"/ate-micr/ate-logo.png",alt:"ATE Logo",style:{width:150,marginBottom:20}}),n.jsx(D,{variant:f?"h5":"h4",component:"h1",gutterBottom:!0,children:"ATE 2.0: MICR 230"})]}),!f&&n.jsx(T,{item:!0,children:n.jsx(Ie,{orientation:"vertical",flexItem:!0})}),n.jsxs(T,{item:!0,xs:12,md:6,sx:{textAlign:"center"},children:[!l&&n.jsxs("form",{onSubmit:c=>{c.preventDefault(),h(b)},children:[n.jsx(Fe,{fullWidth:!0,label:"Enter Passcode",variant:"outlined",value:b,onChange:c=>i(c.target.value),sx:{mb:2}}),n.jsx(Z,{sx:{display:"flex",justifyContent:"center"},children:n.jsx(ee,{type:"submit",variant:"contained",sx:{mt:2,textTransform:"none",minWidth:"250px",boxShadow:"none","&:hover":{boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.2)",transform:"scale(1.05)"},transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"},children:"Continue"})})]}),l&&n.jsxs(Z,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[n.jsx(D,{variant:"h6",component:"h2",gutterBottom:!0,children:"Welcome! Please sign in to get started."}),n.jsx(ee,{variant:"contained",startIcon:n.jsx(se,{}),onClick:v,sx:{textTransform:"none",fontSize:"1rem",minWidth:"250px",boxShadow:"none","&:hover":{backgroundColor:"#357ae8",boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.2)",transform:"scale(1.05)"},transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"},children:"Sign In with Google"}),n.jsx(Re,{title:"Keep you signed in on this device. Do not use on public or shared computers.",placement:"right",children:n.jsx(mo,{control:n.jsx(ao,{checked:x,onChange:c=>m(c.target.checked)}),label:"Keep me signed in"})})]})]})]}),n.jsx(we,{open:o,autoHideDuration:6e3,onClose:()=>t(!1),children:n.jsx(Be,{onClose:()=>t(!1),severity:s,sx:{width:"100%"},children:r})})]})};export{ko as default};