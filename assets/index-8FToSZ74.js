import{c as C,j as t,g as B,a as L,s as O,S as $,r as R,b as g,_ as h,d as A,e as d,u as D,f as W,h as q,i as F,k as T,l as G,m as E,n as H,o as k,C as N,G as m,T as P,D as U,B as V,p as K,q as Q,F as J,t as X,A as Y,v as Z,w as ee,x as te,y as oe,z as ne}from"./index-CsjgMQKs.js";const se=C(t.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),re=C(t.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),ae=C(t.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ce(e){return L("MuiCheckbox",e)}const v=B("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),ie=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],le=e=>{const{classes:o,indeterminate:n,color:s,size:i}=e,r={root:["root",n&&"indeterminate",`color${g(s)}`,`size${g(i)}`]},c=F(r,ce,o);return h({},o,c)},de=O($,{shouldForwardProp:e=>R(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:n}=e;return[o.root,n.indeterminate&&o.indeterminate,o[`size${g(n.size)}`],n.color!=="default"&&o[`color${g(n.color)}`]]}})(({theme:e,ownerState:o})=>h({color:(e.vars||e).palette.text.secondary},!o.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${o.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[o.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:A(o.color==="default"?e.palette.action.active:e.palette[o.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},o.color!=="default"&&{[`&.${v.checked}, &.${v.indeterminate}`]:{color:(e.vars||e).palette[o.color].main},[`&.${v.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),ue=t.jsx(re,{}),pe=t.jsx(se,{}),he=t.jsx(ae,{}),xe=d.forwardRef(function(o,n){var s,i;const r=D({props:o,name:"MuiCheckbox"}),{checkedIcon:c=ue,color:x="primary",icon:f=pe,indeterminate:l=!1,indeterminateIcon:p=he,inputProps:b,size:a="medium",className:u}=r,M=W(r,ie),y=l?p:f,I=l?p:c,w=h({},r,{color:x,indeterminate:l,size:a}),S=le(w);return t.jsx(de,h({type:"checkbox",inputProps:h({"data-indeterminate":l},b),icon:d.cloneElement(y,{fontSize:(s=y.props.fontSize)!=null?s:a}),checkedIcon:d.cloneElement(I,{fontSize:(i=I.props.fontSize)!=null?i:a}),ownerState:w,ref:n,className:q(S.root,u)},M,{classes:S}))});var j={},me=G;Object.defineProperty(j,"__esModule",{value:!0});var z=j.default=void 0;be(d);var ge=me(T()),fe=t;function _(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(_=function(s){return s?n:o})(e)}function be(e,o){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=_(o);if(n&&n.has(e))return n.get(e);var s={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(r!=="default"&&Object.prototype.hasOwnProperty.call(e,r)){var c=i?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(s,r,c):s[r]=e[r]}return s.default=e,n&&n.set(e,s),s}z=j.default=(0,ge.default)((0,fe.jsx)("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google");const ve=()=>{const e=E();console.log("Login loaded");const[o,n]=d.useState(!1),[s,i]=d.useState(""),[r,c]=d.useState("success"),[x,f]=d.useState(!0),l=H(),p=k(l.breakpoints.down("sm"));k(l.breakpoints.between("sm","md")),k(l.breakpoints.up("md"));const b=async()=>{try{await Z(e,x?ee:te);const a=new oe;await ne(e,a),i("Successfully logged in with Google!"),c("success"),n(!0)}catch(a){let u="Login Failed: An unexpected error occurred.";if(typeof a=="object"&&a!==null&&"code"in a)switch(a.code){case"auth/network-request-failed":u="Login Failed: Network error, please check your connection.";break;case"auth/popup-closed-by-user":u="Login Failed: The sign-in popup was closed before completion.";break;case"auth/cancelled-popup-request":u="Login Failed: Another sign-in request was made before the first one was completed.";break;case"auth/popup-blocked":u="Login Failed: The sign-in popup was blocked by the browser. Please allow popups for this site.";break}i(u),c("error"),n(!0)}};return t.jsxs(N,{maxWidth:"lg",sx:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:[t.jsxs(m,{container:!0,spacing:p?2:4,alignItems:"center",justifyContent:"center",children:[t.jsxs(m,{item:!0,xs:12,md:6,sx:{textAlign:"center"},children:[t.jsx("img",{src:"/ate-micr/ate-logo.png",alt:"ATE Logo",style:{width:150,marginBottom:20}}),t.jsx(P,{variant:p?"h5":"h4",component:"h1",gutterBottom:!0,children:"ATE 2.0: MICR 230"})]}),!p&&t.jsx(m,{item:!0,children:t.jsx(U,{orientation:"vertical",flexItem:!0})}),t.jsx(m,{item:!0,xs:12,md:6,sx:{textAlign:"center"},children:t.jsxs(V,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[t.jsx(P,{variant:"h6",component:"h2",gutterBottom:!0,children:"Welcome! Please sign in to get started."}),t.jsx(K,{variant:"contained",startIcon:t.jsx(z,{}),onClick:b,sx:{textTransform:"none",fontSize:"1rem",minWidth:"250px",boxShadow:"none","&:hover":{backgroundColor:"#357ae8",boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.2)",transform:"scale(1.05)"},transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"},children:"Sign In with Google"}),t.jsx(Q,{title:"Keep you signed in on this device. Do not use on public or shared computers.",placement:"right",children:t.jsx(J,{control:t.jsx(xe,{checked:x,onChange:a=>f(a.target.checked)}),label:"Keep me signed in"})})]})})]}),t.jsx(X,{open:o,autoHideDuration:6e3,onClose:()=>n(!1),children:t.jsx(Y,{onClose:()=>n(!1),severity:r,sx:{width:"100%"},children:s})})]})};export{ve as default};
