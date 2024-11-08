import{c as w,j as o,g as B,a as L,s as O,S as R,r as A,b as k,_ as x,d as $,e as d,u as W,f as D,h as F,i as G,k as E,l as q,m as T,n as H,o as C,C as N,G as v,D as U,B as V,T as j,p as K,L as Q,q as Y,F as J,t as X,A as Z,v as ee,w as oe,x as te,y as ne,z as re}from"./index-CChJVnmB.js";const se=w(o.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),ae=w(o.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),ce=w(o.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ie(e){return L("MuiCheckbox",e)}const S=B("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),le=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],de=e=>{const{classes:t,indeterminate:n,color:r,size:i}=e,s={root:["root",n&&"indeterminate",`color${k(r)}`,`size${k(i)}`]},a=G(s,ie,t);return x({},t,a)},ue=O(R,{shouldForwardProp:e=>A(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.indeterminate&&t.indeterminate,t[`size${k(n.size)}`],n.color!=="default"&&t[`color${k(n.color)}`]]}})(({theme:e,ownerState:t})=>x({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:$(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${S.checked}, &.${S.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${S.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),pe=o.jsx(ae,{}),he=o.jsx(se,{}),xe=o.jsx(ce,{}),me=d.forwardRef(function(t,n){var r,i;const s=W({props:t,name:"MuiCheckbox"}),{checkedIcon:a=pe,color:m="primary",icon:y=he,indeterminate:l=!1,indeterminateIcon:p=xe,inputProps:g,size:h="medium",className:f}=s,c=D(s,le),u=l?p:y,b=l?p:a,P=x({},s,{color:m,indeterminate:l,size:h}),_=de(P);return o.jsx(ue,x({type:"checkbox",inputProps:x({"data-indeterminate":l},g),icon:d.cloneElement(u,{fontSize:(r=u.props.fontSize)!=null?r:h}),checkedIcon:d.cloneElement(b,{fontSize:(i=b.props.fontSize)!=null?i:h}),ownerState:P,ref:n,className:F(_.root,f)},c,{classes:_}))});var I={},ge=q;Object.defineProperty(I,"__esModule",{value:!0});var z=I.default=void 0;ve(d);var fe=ge(E()),be=o;function M(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(M=function(r){return r?n:t})(e)}function ve(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=M(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(s!=="default"&&Object.prototype.hasOwnProperty.call(e,s)){var a=i?Object.getOwnPropertyDescriptor(e,s):null;a&&(a.get||a.set)?Object.defineProperty(r,s,a):r[s]=e[s]}return r.default=e,n&&n.set(e,r),r}z=I.default=(0,fe.default)((0,be.jsx)("path",{d:"M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"}),"Google");const ye=()=>{const e=T(),[t,n]=d.useState(!1),[r,i]=d.useState(""),[s,a]=d.useState("success"),[m,y]=d.useState(!0),l=H(),p=C(l.breakpoints.down("sm"));C(l.breakpoints.between("sm","md")),C(l.breakpoints.up("md"));const g={network:"Login Failed: Network error, please check your connection.",popupClosed:"Login Failed: The sign-in popup was closed before completion.",cancelledRequest:"Login Failed: Another sign-in request was made before the first one was completed.",popupBlocked:"Login Failed: The sign-in popup was blocked by the browser. Please allow popups for this site.",unknown:"Login Failed: An unexpected error occurred."},h=async()=>{try{await ee(e,m?oe:te);const c=new ne;await re(e,c),f("Successfully logged in with Google!","success")}catch(c){const u=c.code||"unknown",b=g[u]||g.unknown;f(b,"error")}},f=(c,u)=>{i(c),a(u),n(!0)};return o.jsxs(N,{maxWidth:"lg",sx:{height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"},children:[o.jsxs(v,{container:!0,spacing:p?2:4,alignItems:"center",justifyContent:"center",children:[o.jsx(v,{item:!0,xs:12,md:6,sx:{textAlign:"center"},children:o.jsx("img",{src:"/ate-micr/nexlab-logo.png",alt:"ATE Logo",style:{width:600,marginBottom:20}})}),!p&&o.jsx(v,{item:!0,children:o.jsx(U,{orientation:"vertical",flexItem:!0})}),o.jsx(v,{item:!0,xs:12,md:6,sx:{textAlign:"center"},children:o.jsxs(V,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:2},children:[o.jsx(j,{variant:"h6",component:"h2",gutterBottom:!0,children:"Welcome! Please sign in to get started."}),o.jsx(K,{variant:"contained",startIcon:o.jsx(z,{}),onClick:h,sx:{textTransform:"none",fontSize:"1rem",minWidth:"250px",boxShadow:"none","&:hover":{backgroundColor:"#357ae8",boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.2)",transform:"scale(1.05)"},transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out"},children:"Google Authentication"}),o.jsxs(j,{variant:"body2",color:"textSecondary",sx:{marginBottom:2,textAlign:"center",maxWidth:300},children:["Note: Your email is only used for Google Authentication. No private information is collected in our database. For more details, please review our"," ",o.jsx(Q,{href:"https://intofuture.org/nexlab-privacy.html",target:"_blank",rel:"noopener",underline:"hover",children:"Privacy Policy"}),"."]}),o.jsx(Y,{title:"Keep you signed in on this device. Do not use on public or shared computers.",placement:"right",children:o.jsx(J,{control:o.jsx(me,{checked:m,onChange:c=>y(c.target.checked)}),label:"Keep me signed in"})})]})})]}),o.jsx(X,{open:t,autoHideDuration:6e3,onClose:()=>n(!1),children:o.jsx(Z,{onClose:()=>n(!1),severity:s,sx:{width:"100%"},children:o.jsx(j,{children:r})})})]})};export{ye as default};
