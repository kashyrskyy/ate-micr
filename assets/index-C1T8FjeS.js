import{j as P,t as on,h as un,v as ze,e as Zt,a as Tt,x as je,r as rt,y as hn,_ as nn,f as _e,g as gn,T as xi,w as e_,I as sA,J as YM,K as QM,R as n_,A as ZM,L as JM,M as Ar,B as qa,z as Xn,N as Xa,O as tc,P as o_,Q as i_,S as r_,U as XM,V as Ua,W as t4,X as s_,Y as $d,Z as Wd,$ as Qn,a0 as Ae,a1 as bn,a2 as Qo,a3 as e4,a4 as Ro,a5 as hr,a6 as wn,a7 as Zo,a8 as pr}from"./index-Czh3KV1A.js";import{c as n4,e as Gd,B as ec,g as o4,M as i4,P as qd,h as r4,i as s4,F as a4,L as Jo,j as a_,k as c4,l as aA,A as zo,b as dn,S as Fo,d as ws,r as to,I as Zn,m as l4,n as cA,o as lA,p as d4,T as nc}from"./createSvgIcon-DX2HvT9r.js";var c_={exports:{}},u4="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",h4=u4,g4=h4;function l_(){}function d_(){}d_.resetWarningCache=l_;var p4=function(){function u(x,b,D,_,v,p){if(p!==g4){var I=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw I.name="Invariant Violation",I}}u.isRequired=u;function m(){return u}var T={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:m,element:u,elementType:u,instanceOf:m,node:u,objectOf:m,oneOf:m,oneOfType:m,shape:m,exact:m,checkPropTypes:d_,resetWarningCache:l_};return T.PropTypes=T,T};c_.exports=p4();var m4=c_.exports;const f4=n4(P.jsx("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function k4(u){return un("MuiChip",u)}const he=on("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),b4=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],w4=u=>{const{classes:m,disabled:T,size:x,color:b,iconColor:D,onDelete:_,clickable:v,variant:p}=u,I={root:["root",p,T&&"disabled",`size${Zt(x)}`,`color${Zt(b)}`,v&&"clickable",v&&`clickableColor${Zt(b)}`,_&&"deletable",_&&`deletableColor${Zt(b)}`,`${p}${Zt(b)}`],label:["label",`label${Zt(x)}`],avatar:["avatar",`avatar${Zt(x)}`,`avatarColor${Zt(b)}`],icon:["icon",`icon${Zt(x)}`,`iconColor${Zt(D)}`],deleteIcon:["deleteIcon",`deleteIcon${Zt(x)}`,`deleteIconColor${Zt(b)}`,`deleteIcon${Zt(p)}Color${Zt(b)}`]};return gn(I,k4,m)},A4=ze("div",{name:"MuiChip",slot:"Root",overridesResolver:(u,m)=>{const{ownerState:T}=u,{color:x,iconColor:b,clickable:D,onDelete:_,size:v,variant:p}=T;return[{[`& .${he.avatar}`]:m.avatar},{[`& .${he.avatar}`]:m[`avatar${Zt(v)}`]},{[`& .${he.avatar}`]:m[`avatarColor${Zt(x)}`]},{[`& .${he.icon}`]:m.icon},{[`& .${he.icon}`]:m[`icon${Zt(v)}`]},{[`& .${he.icon}`]:m[`iconColor${Zt(b)}`]},{[`& .${he.deleteIcon}`]:m.deleteIcon},{[`& .${he.deleteIcon}`]:m[`deleteIcon${Zt(v)}`]},{[`& .${he.deleteIcon}`]:m[`deleteIconColor${Zt(x)}`]},{[`& .${he.deleteIcon}`]:m[`deleteIcon${Zt(p)}Color${Zt(x)}`]},m.root,m[`size${Zt(v)}`],m[`color${Zt(x)}`],D&&m.clickable,D&&x!=="default"&&m[`clickableColor${Zt(x)})`],_&&m.deletable,_&&x!=="default"&&m[`deletableColor${Zt(x)}`],m[p],m[`${p}${Zt(x)}`]]}})(({theme:u,ownerState:m})=>{const T=u.palette.mode==="light"?u.palette.grey[700]:u.palette.grey[300];return Tt({maxWidth:"100%",fontFamily:u.typography.fontFamily,fontSize:u.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(u.vars||u).palette.text.primary,backgroundColor:(u.vars||u).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:u.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${he.disabled}`]:{opacity:(u.vars||u).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${he.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:u.vars?u.vars.palette.Chip.defaultAvatarColor:T,fontSize:u.typography.pxToRem(12)},[`& .${he.avatarColorPrimary}`]:{color:(u.vars||u).palette.primary.contrastText,backgroundColor:(u.vars||u).palette.primary.dark},[`& .${he.avatarColorSecondary}`]:{color:(u.vars||u).palette.secondary.contrastText,backgroundColor:(u.vars||u).palette.secondary.dark},[`& .${he.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:u.typography.pxToRem(10)},[`& .${he.icon}`]:Tt({marginLeft:5,marginRight:-6},m.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},m.iconColor===m.color&&Tt({color:u.vars?u.vars.palette.Chip.defaultIconColor:T},m.color!=="default"&&{color:"inherit"})),[`& .${he.deleteIcon}`]:Tt({WebkitTapHighlightColor:"transparent",color:u.vars?`rgba(${u.vars.palette.text.primaryChannel} / 0.26)`:je(u.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:u.vars?`rgba(${u.vars.palette.text.primaryChannel} / 0.4)`:je(u.palette.text.primary,.4)}},m.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},m.color!=="default"&&{color:u.vars?`rgba(${u.vars.palette[m.color].contrastTextChannel} / 0.7)`:je(u.palette[m.color].contrastText,.7),"&:hover, &:active":{color:(u.vars||u).palette[m.color].contrastText}})},m.size==="small"&&{height:24},m.color!=="default"&&{backgroundColor:(u.vars||u).palette[m.color].main,color:(u.vars||u).palette[m.color].contrastText},m.onDelete&&{[`&.${he.focusVisible}`]:{backgroundColor:u.vars?`rgba(${u.vars.palette.action.selectedChannel} / calc(${u.vars.palette.action.selectedOpacity} + ${u.vars.palette.action.focusOpacity}))`:je(u.palette.action.selected,u.palette.action.selectedOpacity+u.palette.action.focusOpacity)}},m.onDelete&&m.color!=="default"&&{[`&.${he.focusVisible}`]:{backgroundColor:(u.vars||u).palette[m.color].dark}})},({theme:u,ownerState:m})=>Tt({},m.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:u.vars?`rgba(${u.vars.palette.action.selectedChannel} / calc(${u.vars.palette.action.selectedOpacity} + ${u.vars.palette.action.hoverOpacity}))`:je(u.palette.action.selected,u.palette.action.selectedOpacity+u.palette.action.hoverOpacity)},[`&.${he.focusVisible}`]:{backgroundColor:u.vars?`rgba(${u.vars.palette.action.selectedChannel} / calc(${u.vars.palette.action.selectedOpacity} + ${u.vars.palette.action.focusOpacity}))`:je(u.palette.action.selected,u.palette.action.selectedOpacity+u.palette.action.focusOpacity)},"&:active":{boxShadow:(u.vars||u).shadows[1]}},m.clickable&&m.color!=="default"&&{[`&:hover, &.${he.focusVisible}`]:{backgroundColor:(u.vars||u).palette[m.color].dark}}),({theme:u,ownerState:m})=>Tt({},m.variant==="outlined"&&{backgroundColor:"transparent",border:u.vars?`1px solid ${u.vars.palette.Chip.defaultBorder}`:`1px solid ${u.palette.mode==="light"?u.palette.grey[400]:u.palette.grey[700]}`,[`&.${he.clickable}:hover`]:{backgroundColor:(u.vars||u).palette.action.hover},[`&.${he.focusVisible}`]:{backgroundColor:(u.vars||u).palette.action.focus},[`& .${he.avatar}`]:{marginLeft:4},[`& .${he.avatarSmall}`]:{marginLeft:2},[`& .${he.icon}`]:{marginLeft:4},[`& .${he.iconSmall}`]:{marginLeft:2},[`& .${he.deleteIcon}`]:{marginRight:5},[`& .${he.deleteIconSmall}`]:{marginRight:3}},m.variant==="outlined"&&m.color!=="default"&&{color:(u.vars||u).palette[m.color].main,border:`1px solid ${u.vars?`rgba(${u.vars.palette[m.color].mainChannel} / 0.7)`:je(u.palette[m.color].main,.7)}`,[`&.${he.clickable}:hover`]:{backgroundColor:u.vars?`rgba(${u.vars.palette[m.color].mainChannel} / ${u.vars.palette.action.hoverOpacity})`:je(u.palette[m.color].main,u.palette.action.hoverOpacity)},[`&.${he.focusVisible}`]:{backgroundColor:u.vars?`rgba(${u.vars.palette[m.color].mainChannel} / ${u.vars.palette.action.focusOpacity})`:je(u.palette[m.color].main,u.palette.action.focusOpacity)},[`& .${he.deleteIcon}`]:{color:u.vars?`rgba(${u.vars.palette[m.color].mainChannel} / 0.7)`:je(u.palette[m.color].main,.7),"&:hover, &:active":{color:(u.vars||u).palette[m.color].main}}})),_4=ze("span",{name:"MuiChip",slot:"Label",overridesResolver:(u,m)=>{const{ownerState:T}=u,{size:x}=T;return[m.label,m[`label${Zt(x)}`]]}})(({ownerState:u})=>Tt({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},u.variant==="outlined"&&{paddingLeft:11,paddingRight:11},u.size==="small"&&{paddingLeft:8,paddingRight:8},u.size==="small"&&u.variant==="outlined"&&{paddingLeft:7,paddingRight:7}));function dA(u){return u.key==="Backspace"||u.key==="Delete"}const uA=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiChip"}),{avatar:b,className:D,clickable:_,color:v="default",component:p,deleteIcon:I,disabled:C=!1,icon:w,label:g,onClick:k,onDelete:S,onKeyDown:N,onKeyUp:O,size:R="medium",variant:Q="filled",tabIndex:Y,skipFocusWhenDisabled:K=!1}=x,et=nn(x,b4),H=rt.useRef(null),W=Gd(H,T),B=X=>{X.stopPropagation(),S&&S(X)},y=X=>{X.currentTarget===X.target&&dA(X)&&X.preventDefault(),N&&N(X)},z=X=>{X.currentTarget===X.target&&(S&&dA(X)?S(X):X.key==="Escape"&&H.current&&H.current.blur()),O&&O(X)},U=_!==!1&&k?!0:_,G=U||S?ec:p||"div",$=Tt({},x,{component:G,disabled:C,size:R,color:v,iconColor:rt.isValidElement(w)&&w.props.color||v,onDelete:!!S,clickable:U,variant:Q}),q=w4($),Z=G===ec?Tt({component:p||"div",focusVisibleClassName:q.focusVisible},S&&{disableRipple:!0}):{};let F=null;S&&(F=I&&rt.isValidElement(I)?rt.cloneElement(I,{className:_e(I.props.className,q.deleteIcon),onClick:B}):P.jsx(f4,{className:_e(q.deleteIcon),onClick:B}));let j=null;b&&rt.isValidElement(b)&&(j=rt.cloneElement(b,{className:_e(q.avatar,b.props.className)}));let st=null;return w&&rt.isValidElement(w)&&(st=rt.cloneElement(w,{className:_e(q.icon,w.props.className)})),P.jsxs(A4,Tt({as:G,className:_e(q.root,D),disabled:U&&C?!0:void 0,onClick:k,onKeyDown:y,onKeyUp:z,ref:W,tabIndex:K&&C?-1:Y,ownerState:$},Z,et,{children:[j||st,P.jsx(_4,{className:_e(q.label),ownerState:$,children:g}),F]}))});function C4(u){return un("MuiDialog",u)}const xd=on("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),u_=rt.createContext({}),v4=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],y4=ze(o4,{name:"MuiDialog",slot:"Backdrop",overrides:(u,m)=>m.backdrop})({zIndex:-1}),x4=u=>{const{classes:m,scroll:T,maxWidth:x,fullWidth:b,fullScreen:D}=u,_={root:["root"],container:["container",`scroll${Zt(T)}`],paper:["paper",`paperScroll${Zt(T)}`,`paperWidth${Zt(String(x))}`,b&&"paperFullWidth",D&&"paperFullScreen"]};return gn(_,C4,m)},E4=ze(i4,{name:"MuiDialog",slot:"Root",overridesResolver:(u,m)=>m.root})({"@media print":{position:"absolute !important"}}),D4=ze("div",{name:"MuiDialog",slot:"Container",overridesResolver:(u,m)=>{const{ownerState:T}=u;return[m.container,m[`scroll${Zt(T.scroll)}`]]}})(({ownerState:u})=>Tt({height:"100%","@media print":{height:"auto"},outline:0},u.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},u.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),T4=ze(qd,{name:"MuiDialog",slot:"Paper",overridesResolver:(u,m)=>{const{ownerState:T}=u;return[m.paper,m[`scrollPaper${Zt(T.scroll)}`],m[`paperWidth${Zt(String(T.maxWidth))}`],T.fullWidth&&m.paperFullWidth,T.fullScreen&&m.paperFullScreen]}})(({theme:u,ownerState:m})=>Tt({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},m.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},m.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!m.maxWidth&&{maxWidth:"calc(100% - 64px)"},m.maxWidth==="xs"&&{maxWidth:u.breakpoints.unit==="px"?Math.max(u.breakpoints.values.xs,444):`max(${u.breakpoints.values.xs}${u.breakpoints.unit}, 444px)`,[`&.${xd.paperScrollBody}`]:{[u.breakpoints.down(Math.max(u.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},m.maxWidth&&m.maxWidth!=="xs"&&{maxWidth:`${u.breakpoints.values[m.maxWidth]}${u.breakpoints.unit}`,[`&.${xd.paperScrollBody}`]:{[u.breakpoints.down(u.breakpoints.values[m.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},m.fullWidth&&{width:"calc(100% - 64px)"},m.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${xd.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),Xo=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiDialog"}),b=r4(),D={enter:b.transitions.duration.enteringScreen,exit:b.transitions.duration.leavingScreen},{"aria-describedby":_,"aria-labelledby":v,BackdropComponent:p,BackdropProps:I,children:C,className:w,disableEscapeKeyDown:g=!1,fullScreen:k=!1,fullWidth:S=!1,maxWidth:N="sm",onBackdropClick:O,onClose:R,open:Q,PaperComponent:Y=qd,PaperProps:K={},scroll:et="paper",TransitionComponent:H=a4,transitionDuration:W=D,TransitionProps:B}=x,y=nn(x,v4),z=Tt({},x,{disableEscapeKeyDown:g,fullScreen:k,fullWidth:S,maxWidth:N,scroll:et}),U=x4(z),G=rt.useRef(),$=j=>{G.current=j.target===j.currentTarget},q=j=>{G.current&&(G.current=null,O&&O(j),R&&R(j,"backdropClick"))},Z=s4(v),F=rt.useMemo(()=>({titleId:Z}),[Z]);return P.jsx(E4,Tt({className:_e(U.root,w),closeAfterTransition:!0,components:{Backdrop:y4},componentsProps:{backdrop:Tt({transitionDuration:W,as:p},I)},disableEscapeKeyDown:g,onClose:R,open:Q,ref:T,onClick:q,ownerState:z},y,{children:P.jsx(H,Tt({appear:!0,in:Q,timeout:W,role:"presentation"},B,{children:P.jsx(D4,{className:_e(U.container),onMouseDown:$,ownerState:z,children:P.jsx(T4,Tt({as:Y,elevation:24,role:"dialog","aria-describedby":_,"aria-labelledby":Z},K,{className:_e(U.paper,K.className),ownerState:z,children:P.jsx(u_.Provider,{value:F,children:C})}))})}))}))});function I4(u){return un("MuiDialogActions",u)}on("MuiDialogActions",["root","spacing"]);const S4=["className","disableSpacing"],M4=u=>{const{classes:m,disableSpacing:T}=u;return gn({root:["root",!T&&"spacing"]},I4,m)},B4=ze("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(u,m)=>{const{ownerState:T}=u;return[m.root,!T.disableSpacing&&m.spacing]}})(({ownerState:u})=>Tt({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!u.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Di=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiDialogActions"}),{className:b,disableSpacing:D=!1}=x,_=nn(x,S4),v=Tt({},x,{disableSpacing:D}),p=M4(v);return P.jsx(B4,Tt({className:_e(p.root,b),ownerState:v,ref:T},_))});function N4(u){return un("MuiDialogContent",u)}on("MuiDialogContent",["root","dividers"]);function P4(u){return un("MuiDialogTitle",u)}const O4=on("MuiDialogTitle",["root"]),L4=["className","dividers"],R4=u=>{const{classes:m,dividers:T}=u;return gn({root:["root",T&&"dividers"]},N4,m)},j4=ze("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(u,m)=>{const{ownerState:T}=u;return[m.root,T.dividers&&m.dividers]}})(({theme:u,ownerState:m})=>Tt({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},m.dividers?{padding:"16px 24px",borderTop:`1px solid ${(u.vars||u).palette.divider}`,borderBottom:`1px solid ${(u.vars||u).palette.divider}`}:{[`.${O4.root} + &`]:{paddingTop:0}})),ti=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiDialogContent"}),{className:b,dividers:D=!1}=x,_=nn(x,L4),v=Tt({},x,{dividers:D}),p=R4(v);return P.jsx(j4,Tt({className:_e(p.root,b),ownerState:v,ref:T},_))});function z4(u){return un("MuiDialogContentText",u)}on("MuiDialogContentText",["root"]);const F4=["children","className"],V4=u=>{const{classes:m}=u,x=gn({root:["root"]},z4,m);return Tt({},m,x)},U4=ze(xi,{shouldForwardProp:u=>e_(u)||u==="classes",name:"MuiDialogContentText",slot:"Root",overridesResolver:(u,m)=>m.root})({}),_r=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiDialogContentText"}),{className:b}=x,D=nn(x,F4),_=V4(D);return P.jsx(U4,Tt({component:"p",variant:"body1",color:"text.secondary",ref:T,ownerState:D,className:_e(_.root,b)},x,{classes:_}))}),H4=["className","id"],$4=u=>{const{classes:m}=u;return gn({root:["root"]},P4,m)},W4=ze(xi,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(u,m)=>m.root})({padding:"16px 24px",flex:"0 0 auto"}),Ti=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiDialogTitle"}),{className:b,id:D}=x,_=nn(x,H4),v=x,p=$4(v),{titleId:I=D}=rt.useContext(u_);return P.jsx(W4,Tt({component:"h2",className:_e(p.root,b),ownerState:v,ref:T,variant:"h6",id:D??I},_))});function G4(u){return un("MuiListItem",u)}const ur=on("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),q4=on("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function K4(u){return un("MuiListItemSecondaryAction",u)}on("MuiListItemSecondaryAction",["root","disableGutters"]);const Y4=["className"],Q4=u=>{const{disableGutters:m,classes:T}=u;return gn({root:["root",m&&"disableGutters"]},K4,T)},Z4=ze("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(u,m)=>{const{ownerState:T}=u;return[m.root,T.disableGutters&&m.disableGutters]}})(({ownerState:u})=>Tt({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},u.disableGutters&&{right:0})),h_=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiListItemSecondaryAction"}),{className:b}=x,D=nn(x,Y4),_=rt.useContext(Jo),v=Tt({},x,{disableGutters:_.disableGutters}),p=Q4(v);return P.jsx(Z4,Tt({className:_e(p.root,b),ownerState:v,ref:T},D))});h_.muiName="ListItemSecondaryAction";const J4=["className"],X4=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],t3=(u,m)=>{const{ownerState:T}=u;return[m.root,T.dense&&m.dense,T.alignItems==="flex-start"&&m.alignItemsFlexStart,T.divider&&m.divider,!T.disableGutters&&m.gutters,!T.disablePadding&&m.padding,T.button&&m.button,T.hasSecondaryAction&&m.secondaryAction]},e3=u=>{const{alignItems:m,button:T,classes:x,dense:b,disabled:D,disableGutters:_,disablePadding:v,divider:p,hasSecondaryAction:I,selected:C}=u;return gn({root:["root",b&&"dense",!_&&"gutters",!v&&"padding",p&&"divider",D&&"disabled",T&&"button",m==="flex-start"&&"alignItemsFlexStart",I&&"secondaryAction",C&&"selected"],container:["container"]},G4,x)},n3=ze("div",{name:"MuiListItem",slot:"Root",overridesResolver:t3})(({theme:u,ownerState:m})=>Tt({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!m.disablePadding&&Tt({paddingTop:8,paddingBottom:8},m.dense&&{paddingTop:4,paddingBottom:4},!m.disableGutters&&{paddingLeft:16,paddingRight:16},!!m.secondaryAction&&{paddingRight:48}),!!m.secondaryAction&&{[`& > .${q4.root}`]:{paddingRight:48}},{[`&.${ur.focusVisible}`]:{backgroundColor:(u.vars||u).palette.action.focus},[`&.${ur.selected}`]:{backgroundColor:u.vars?`rgba(${u.vars.palette.primary.mainChannel} / ${u.vars.palette.action.selectedOpacity})`:je(u.palette.primary.main,u.palette.action.selectedOpacity),[`&.${ur.focusVisible}`]:{backgroundColor:u.vars?`rgba(${u.vars.palette.primary.mainChannel} / calc(${u.vars.palette.action.selectedOpacity} + ${u.vars.palette.action.focusOpacity}))`:je(u.palette.primary.main,u.palette.action.selectedOpacity+u.palette.action.focusOpacity)}},[`&.${ur.disabled}`]:{opacity:(u.vars||u).palette.action.disabledOpacity}},m.alignItems==="flex-start"&&{alignItems:"flex-start"},m.divider&&{borderBottom:`1px solid ${(u.vars||u).palette.divider}`,backgroundClip:"padding-box"},m.button&&{transition:u.transitions.create("background-color",{duration:u.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(u.vars||u).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${ur.selected}:hover`]:{backgroundColor:u.vars?`rgba(${u.vars.palette.primary.mainChannel} / calc(${u.vars.palette.action.selectedOpacity} + ${u.vars.palette.action.hoverOpacity}))`:je(u.palette.primary.main,u.palette.action.selectedOpacity+u.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:u.vars?`rgba(${u.vars.palette.primary.mainChannel} / ${u.vars.palette.action.selectedOpacity})`:je(u.palette.primary.main,u.palette.action.selectedOpacity)}}},m.hasSecondaryAction&&{paddingRight:48})),o3=ze("li",{name:"MuiListItem",slot:"Container",overridesResolver:(u,m)=>m.container})({position:"relative"}),i3=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiListItem"}),{alignItems:b="center",autoFocus:D=!1,button:_=!1,children:v,className:p,component:I,components:C={},componentsProps:w={},ContainerComponent:g="li",ContainerProps:{className:k}={},dense:S=!1,disabled:N=!1,disableGutters:O=!1,disablePadding:R=!1,divider:Q=!1,focusVisibleClassName:Y,secondaryAction:K,selected:et=!1,slotProps:H={},slots:W={}}=x,B=nn(x.ContainerProps,J4),y=nn(x,X4),z=rt.useContext(Jo),U=rt.useMemo(()=>({dense:S||z.dense||!1,alignItems:b,disableGutters:O}),[b,z.dense,S,O]),G=rt.useRef(null);a_(()=>{D&&G.current&&G.current.focus()},[D]);const $=rt.Children.toArray(v),q=$.length&&c4($[$.length-1],["ListItemSecondaryAction"]),Z=Tt({},x,{alignItems:b,autoFocus:D,button:_,dense:U.dense,disabled:N,disableGutters:O,disablePadding:R,divider:Q,hasSecondaryAction:q,selected:et}),F=e3(Z),j=Gd(G,T),st=W.root||C.Root||n3,X=H.root||w.root||{},nt=Tt({className:_e(F.root,X.className,p),disabled:N},y);let ft=I||"li";return _&&(nt.component=I||"div",nt.focusVisibleClassName=_e(ur.focusVisible,Y),ft=ec),q?(ft=!nt.component&&!I?"div":ft,g==="li"&&(ft==="li"?ft="div":nt.component==="li"&&(nt.component="div")),P.jsx(Jo.Provider,{value:U,children:P.jsxs(o3,Tt({as:g,className:_e(F.container,k),ref:j,ownerState:Z},B,{children:[P.jsx(st,Tt({},X,!aA(st)&&{as:ft,ownerState:Tt({},Z,X.ownerState)},nt,{children:$})),$.pop()]}))})):P.jsx(Jo.Provider,{value:U,children:P.jsxs(st,Tt({},X,{as:ft,ref:j},!aA(st)&&{ownerState:Tt({},Z,X.ownerState)},nt,{children:[$,K&&P.jsx(h_,{children:K})]}))})});function r3(u){return un("MuiListItemIcon",u)}const hA=on("MuiListItemIcon",["root","alignItemsFlexStart"]),s3=["className"],a3=u=>{const{alignItems:m,classes:T}=u;return gn({root:["root",m==="flex-start"&&"alignItemsFlexStart"]},r3,T)},c3=ze("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(u,m)=>{const{ownerState:T}=u;return[m.root,T.alignItems==="flex-start"&&m.alignItemsFlexStart]}})(({theme:u,ownerState:m})=>Tt({minWidth:56,color:(u.vars||u).palette.action.active,flexShrink:0,display:"inline-flex"},m.alignItems==="flex-start"&&{marginTop:8})),l3=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiListItemIcon"}),{className:b}=x,D=nn(x,s3),_=rt.useContext(Jo),v=Tt({},x,{alignItems:_.alignItems}),p=a3(v);return P.jsx(c3,Tt({className:_e(p.root,b),ownerState:v,ref:T},D))});function d3(u){return un("MuiListItemText",u)}const oc=on("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),u3=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],h3=u=>{const{classes:m,inset:T,primary:x,secondary:b,dense:D}=u;return gn({root:["root",T&&"inset",D&&"dense",x&&b&&"multiline"],primary:["primary"],secondary:["secondary"]},d3,m)},g3=ze("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(u,m)=>{const{ownerState:T}=u;return[{[`& .${oc.primary}`]:m.primary},{[`& .${oc.secondary}`]:m.secondary},m.root,T.inset&&m.inset,T.primary&&T.secondary&&m.multiline,T.dense&&m.dense]}})(({ownerState:u})=>Tt({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},u.primary&&u.secondary&&{marginTop:6,marginBottom:6},u.inset&&{paddingLeft:56})),p3=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiListItemText"}),{children:b,className:D,disableTypography:_=!1,inset:v=!1,primary:p,primaryTypographyProps:I,secondary:C,secondaryTypographyProps:w}=x,g=nn(x,u3),{dense:k}=rt.useContext(Jo);let S=p??b,N=C;const O=Tt({},x,{disableTypography:_,inset:v,primary:!!S,secondary:!!N,dense:k}),R=h3(O);return S!=null&&S.type!==xi&&!_&&(S=P.jsx(xi,Tt({variant:k?"body2":"body1",className:R.primary,component:I!=null&&I.variant?void 0:"span",display:"block"},I,{children:S}))),N!=null&&N.type!==xi&&!_&&(N=P.jsx(xi,Tt({variant:"body2",className:R.secondary,color:"text.secondary",display:"block"},w,{children:N}))),P.jsxs(g3,Tt({className:_e(R.root,D),ownerState:O,ref:T},g,{children:[S,N]}))});function m3(u){return un("MuiMenuItem",u)}const hs=on("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),f3=["autoFocus","component","dense","divider","disableGutters","focusVisibleClassName","role","tabIndex","className"],k3=(u,m)=>{const{ownerState:T}=u;return[m.root,T.dense&&m.dense,T.divider&&m.divider,!T.disableGutters&&m.gutters]},b3=u=>{const{disabled:m,dense:T,divider:x,disableGutters:b,selected:D,classes:_}=u,p=gn({root:["root",T&&"dense",m&&"disabled",!b&&"gutters",x&&"divider",D&&"selected"]},m3,_);return Tt({},_,p)},w3=ze(ec,{shouldForwardProp:u=>e_(u)||u==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:k3})(({theme:u,ownerState:m})=>Tt({},u.typography.body1,{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap"},!m.disableGutters&&{paddingLeft:16,paddingRight:16},m.divider&&{borderBottom:`1px solid ${(u.vars||u).palette.divider}`,backgroundClip:"padding-box"},{"&:hover":{textDecoration:"none",backgroundColor:(u.vars||u).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${hs.selected}`]:{backgroundColor:u.vars?`rgba(${u.vars.palette.primary.mainChannel} / ${u.vars.palette.action.selectedOpacity})`:je(u.palette.primary.main,u.palette.action.selectedOpacity),[`&.${hs.focusVisible}`]:{backgroundColor:u.vars?`rgba(${u.vars.palette.primary.mainChannel} / calc(${u.vars.palette.action.selectedOpacity} + ${u.vars.palette.action.focusOpacity}))`:je(u.palette.primary.main,u.palette.action.selectedOpacity+u.palette.action.focusOpacity)}},[`&.${hs.selected}:hover`]:{backgroundColor:u.vars?`rgba(${u.vars.palette.primary.mainChannel} / calc(${u.vars.palette.action.selectedOpacity} + ${u.vars.palette.action.hoverOpacity}))`:je(u.palette.primary.main,u.palette.action.selectedOpacity+u.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:u.vars?`rgba(${u.vars.palette.primary.mainChannel} / ${u.vars.palette.action.selectedOpacity})`:je(u.palette.primary.main,u.palette.action.selectedOpacity)}},[`&.${hs.focusVisible}`]:{backgroundColor:(u.vars||u).palette.action.focus},[`&.${hs.disabled}`]:{opacity:(u.vars||u).palette.action.disabledOpacity},[`& + .${sA.root}`]:{marginTop:u.spacing(1),marginBottom:u.spacing(1)},[`& + .${sA.inset}`]:{marginLeft:52},[`& .${oc.root}`]:{marginTop:0,marginBottom:0},[`& .${oc.inset}`]:{paddingLeft:36},[`& .${hA.root}`]:{minWidth:36}},!m.dense&&{[u.breakpoints.up("sm")]:{minHeight:"auto"}},m.dense&&Tt({minHeight:32,paddingTop:4,paddingBottom:4},u.typography.body2,{[`& .${hA.root} svg`]:{fontSize:"1.25rem"}}))),Ha=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiMenuItem"}),{autoFocus:b=!1,component:D="li",dense:_=!1,divider:v=!1,disableGutters:p=!1,focusVisibleClassName:I,role:C="menuitem",tabIndex:w,className:g}=x,k=nn(x,f3),S=rt.useContext(Jo),N=rt.useMemo(()=>({dense:_||S.dense||!1,disableGutters:p}),[S.dense,_,p]),O=rt.useRef(null);a_(()=>{b&&O.current&&O.current.focus()},[b]);const R=Tt({},x,{dense:N.dense,divider:v,disableGutters:p}),Q=b3(x),Y=Gd(O,T);let K;return x.disabled||(K=w!==void 0?w:-1),P.jsx(Jo.Provider,{value:N,children:P.jsx(w3,Tt({ref:Y,role:C,tabIndex:K,component:D,focusVisibleClassName:_e(Q.focusVisible,I),className:_e(Q.root,g)},k,{ownerState:R,classes:Q}))})}),g_=rt.createContext();function A3(u){return un("MuiTable",u)}on("MuiTable",["root","stickyHeader"]);const _3=["className","component","padding","size","stickyHeader"],C3=u=>{const{classes:m,stickyHeader:T}=u;return gn({root:["root",T&&"stickyHeader"]},A3,m)},v3=ze("table",{name:"MuiTable",slot:"Root",overridesResolver:(u,m)=>{const{ownerState:T}=u;return[m.root,T.stickyHeader&&m.stickyHeader]}})(({theme:u,ownerState:m})=>Tt({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Tt({},u.typography.body2,{padding:u.spacing(2),color:(u.vars||u).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},m.stickyHeader&&{borderCollapse:"separate"})),gA="table",y3=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiTable"}),{className:b,component:D=gA,padding:_="normal",size:v="medium",stickyHeader:p=!1}=x,I=nn(x,_3),C=Tt({},x,{component:D,padding:_,size:v,stickyHeader:p}),w=C3(C),g=rt.useMemo(()=>({padding:_,size:v,stickyHeader:p}),[_,v,p]);return P.jsx(g_.Provider,{value:g,children:P.jsx(v3,Tt({as:D,role:D===gA?null:"table",ref:T,className:_e(w.root,b),ownerState:C},I))})}),dc=rt.createContext();function x3(u){return un("MuiTableBody",u)}on("MuiTableBody",["root"]);const E3=["className","component"],D3=u=>{const{classes:m}=u;return gn({root:["root"]},x3,m)},T3=ze("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(u,m)=>m.root})({display:"table-row-group"}),I3={variant:"body"},pA="tbody",S3=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiTableBody"}),{className:b,component:D=pA}=x,_=nn(x,E3),v=Tt({},x,{component:D}),p=D3(v);return P.jsx(dc.Provider,{value:I3,children:P.jsx(T3,Tt({className:_e(p.root,b),as:D,ref:T,role:D===pA?null:"rowgroup",ownerState:v},_))})});function M3(u){return un("MuiTableCell",u)}const B3=on("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),N3=["align","className","component","padding","scope","size","sortDirection","variant"],P3=u=>{const{classes:m,variant:T,align:x,padding:b,size:D,stickyHeader:_}=u,v={root:["root",T,_&&"stickyHeader",x!=="inherit"&&`align${Zt(x)}`,b!=="normal"&&`padding${Zt(b)}`,`size${Zt(D)}`]};return gn(v,M3,m)},O3=ze("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(u,m)=>{const{ownerState:T}=u;return[m.root,m[T.variant],m[`size${Zt(T.size)}`],T.padding!=="normal"&&m[`padding${Zt(T.padding)}`],T.align!=="inherit"&&m[`align${Zt(T.align)}`],T.stickyHeader&&m.stickyHeader]}})(({theme:u,ownerState:m})=>Tt({},u.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:u.vars?`1px solid ${u.vars.palette.TableCell.border}`:`1px solid
    ${u.palette.mode==="light"?YM(je(u.palette.divider,1),.88):QM(je(u.palette.divider,1),.68)}`,textAlign:"left",padding:16},m.variant==="head"&&{color:(u.vars||u).palette.text.primary,lineHeight:u.typography.pxToRem(24),fontWeight:u.typography.fontWeightMedium},m.variant==="body"&&{color:(u.vars||u).palette.text.primary},m.variant==="footer"&&{color:(u.vars||u).palette.text.secondary,lineHeight:u.typography.pxToRem(21),fontSize:u.typography.pxToRem(12)},m.size==="small"&&{padding:"6px 16px",[`&.${B3.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},m.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},m.padding==="none"&&{padding:0},m.align==="left"&&{textAlign:"left"},m.align==="center"&&{textAlign:"center"},m.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},m.align==="justify"&&{textAlign:"justify"},m.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(u.vars||u).palette.background.default})),Rn=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiTableCell"}),{align:b="inherit",className:D,component:_,padding:v,scope:p,size:I,sortDirection:C,variant:w}=x,g=nn(x,N3),k=rt.useContext(g_),S=rt.useContext(dc),N=S&&S.variant==="head";let O;_?O=_:O=N?"th":"td";let R=p;O==="td"?R=void 0:!R&&N&&(R="col");const Q=w||S&&S.variant,Y=Tt({},x,{align:b,component:O,padding:v||(k&&k.padding?k.padding:"normal"),size:I||(k&&k.size?k.size:"medium"),sortDirection:C,stickyHeader:Q==="head"&&k&&k.stickyHeader,variant:Q}),K=P3(Y);let et=null;return C&&(et=C==="asc"?"ascending":"descending"),P.jsx(O3,Tt({as:O,ref:T,className:_e(K.root,D),"aria-sort":et,scope:R,ownerState:Y},g))});function L3(u){return un("MuiTableContainer",u)}on("MuiTableContainer",["root"]);const R3=["className","component"],j3=u=>{const{classes:m}=u;return gn({root:["root"]},L3,m)},z3=ze("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(u,m)=>m.root})({width:"100%",overflowX:"auto"}),F3=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiTableContainer"}),{className:b,component:D="div"}=x,_=nn(x,R3),v=Tt({},x,{component:D}),p=j3(v);return P.jsx(z3,Tt({ref:T,as:D,className:_e(p.root,b),ownerState:v},_))});function V3(u){return un("MuiTableHead",u)}on("MuiTableHead",["root"]);const U3=["className","component"],H3=u=>{const{classes:m}=u;return gn({root:["root"]},V3,m)},$3=ze("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(u,m)=>m.root})({display:"table-header-group"}),W3={variant:"head"},mA="thead",G3=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiTableHead"}),{className:b,component:D=mA}=x,_=nn(x,U3),v=Tt({},x,{component:D}),p=H3(v);return P.jsx(dc.Provider,{value:W3,children:P.jsx($3,Tt({as:D,className:_e(p.root,b),ref:T,role:D===mA?null:"rowgroup",ownerState:v},_))})});function q3(u){return un("MuiTableRow",u)}const fA=on("MuiTableRow",["root","selected","hover","head","footer"]),K3=["className","component","hover","selected"],Y3=u=>{const{classes:m,selected:T,hover:x,head:b,footer:D}=u;return gn({root:["root",T&&"selected",x&&"hover",b&&"head",D&&"footer"]},q3,m)},Q3=ze("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(u,m)=>{const{ownerState:T}=u;return[m.root,T.head&&m.head,T.footer&&m.footer]}})(({theme:u})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${fA.hover}:hover`]:{backgroundColor:(u.vars||u).palette.action.hover},[`&.${fA.selected}`]:{backgroundColor:u.vars?`rgba(${u.vars.palette.primary.mainChannel} / ${u.vars.palette.action.selectedOpacity})`:je(u.palette.primary.main,u.palette.action.selectedOpacity),"&:hover":{backgroundColor:u.vars?`rgba(${u.vars.palette.primary.mainChannel} / calc(${u.vars.palette.action.selectedOpacity} + ${u.vars.palette.action.hoverOpacity}))`:je(u.palette.primary.main,u.palette.action.selectedOpacity+u.palette.action.hoverOpacity)}}})),kA="tr",Ed=rt.forwardRef(function(m,T){const x=hn({props:m,name:"MuiTableRow"}),{className:b,component:D=kA,hover:_=!1,selected:v=!1}=x,p=nn(x,K3),I=rt.useContext(dc),C=Tt({},x,{component:D,hover:_,selected:v,head:I&&I.variant==="head",footer:I&&I.variant==="footer"}),w=Y3(C);return P.jsx(Q3,Tt({as:D,ref:T,className:_e(w.root,b),role:D===kA?null:"row",ownerState:C},p))}),Z3=n_.forwardRef(function(m,T){return P.jsx(zo,{elevation:6,ref:T,variant:"filled",...m})}),J3=()=>{const[u,m]=rt.useState(!1),[T,x]=rt.useState(!1),[b,D]=rt.useState("");console.log("Logout loaded");const _=()=>{m(!0)},v=()=>{m(!1)},p=()=>{const I=ZM();JM(I).then(()=>{m(!1),x(!0),D("Logged out successfully")}).catch(C=>{m(!1),x(!0),D("Logout failed: "+C.message)})};return P.jsxs(P.Fragment,{children:[P.jsx(dn,{variant:"outlined",onClick:_,sx:{fontSize:"1rem",mt:2,textTransform:"none",minWidth:"100px",color:"currentColor",borderColor:"rgba(255, 0, 0, 0.5)",boxShadow:"none","&:hover":{borderColor:"rgba(255, 0, 0, 0.7)",backgroundColor:"rgba(255, 0, 0, 0.1)",boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.2)",color:"currentColor",transform:"scale(1.05)"},transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out, background-color 0.3s ease-in-out"},children:"Logout"}),P.jsxs(Xo,{open:u,onClose:v,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[P.jsx(Ti,{id:"alert-dialog-title",children:"Logging Out"}),P.jsx(ti,{children:P.jsx(_r,{id:"alert-dialog-description",children:"Are you sure you want to log out?"})}),P.jsxs(Di,{children:[P.jsx(dn,{onClick:p,autoFocus:!0,children:"Yes"}),P.jsx(dn,{onClick:v,children:"No"})]})]}),P.jsx(Fo,{open:T,autoHideDuration:6e3,onClose:()=>x(!1),children:P.jsx(Z3,{onClose:()=>x(!1),severity:"info",sx:{width:"100%"},children:b})})]})},X3=rt.memo(({setIsAdding:u})=>{const{userDetails:m}=Ar();console.log("Header loaded");const[T,x]=rt.useState(!1),b=()=>{navigator.clipboard.writeText(m.uid).then(()=>{x(!0)}).catch(_=>{console.error("Could not copy text: ",_)})},D=(_,v)=>{v!=="clickaway"&&x(!1)};return P.jsxs(qa,{sx:{mt:3,mb:2},children:[P.jsx(xi,{variant:"h4",component:"h1",gutterBottom:!0,textAlign:"left",sx:{fontWeight:"bold"},children:"My Laboratory Notebook"}),m&&P.jsxs(qa,{sx:{display:"flex",justifyContent:"flex-end",mb:2},children:[m.isAdmin&&P.jsx(uA,{label:"Admin",variant:"outlined",sx:{borderRadius:"15px",fontWeight:"bold",background:"#ffcdd2",color:"#c62828",mr:1}}),P.jsx(ws,{title:"Click to Copy",enterDelay:300,leaveDelay:200,children:P.jsx(uA,{label:`User ID: ${m.uid}`,variant:"outlined",onClick:b,sx:{borderRadius:"15px",fontWeight:"bold",background:"#e0f2f1",color:"#00695c",mr:1,cursor:"pointer"}})})]}),P.jsxs(qa,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[P.jsx(dn,{variant:"contained",color:"primary",onClick:()=>u(!0),sx:{fontSize:"1.2rem",mt:2,textTransform:"none",minWidth:"150px",boxShadow:"none","&:hover":{boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.2)",transform:"scale(1.05)"},transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",border:"1px solid transparent"},children:"+ Create New"}),P.jsx(J3,{})]}),P.jsx(Fo,{open:T,autoHideDuration:6e3,onClose:D,children:P.jsx(zo,{onClose:D,severity:"success",sx:{width:"100%"},children:"User ID copied to clipboard!"})})]})});var Kd={},tB=Xn;Object.defineProperty(Kd,"__esModule",{value:!0});var Yd=Kd.default=void 0,eB=tB(to()),nB=P;Yd=Kd.default=(0,eB.default)((0,nB.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");var Qd={},oB=Xn;Object.defineProperty(Qd,"__esModule",{value:!0});var kr=Qd.default=void 0,iB=oB(to()),rB=P;kr=Qd.default=(0,iB.default)((0,rB.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");const sB=({designs:u,handleEdit:m,handleDelete:T,isAdmin:x})=>{const b=_=>_?_._methodName==="serverTimestamp"?"Pending...":(_ instanceof Date?_:_.toDate?_.toDate():new Date(_.seconds*1e3)).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}):"N/A",D=_=>{if(!_)return"";let v=_;_ instanceof Date&&(v=_.toISOString().split("T")[0]),_.toDate&&(v=_.toDate().toISOString().split("T")[0]);const[p,I,C]=v.split("-").map(g=>parseInt(g,10));return new Date(p,I-1,C).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"})};return P.jsx(F3,{component:qd,children:P.jsxs(y3,{sx:{"& .MuiTableCell-root":{fontSize:"1rem"},"& .MuiTableCell-head":{fontSize:"1.2rem",backgroundColor:"#1A76D3",color:"white"}},children:[P.jsx(G3,{children:P.jsxs(Ed,{sx:{height:"60px"},children:[P.jsx(Rn,{sx:{fontWeight:"bold",width:"40%"},children:"Title"}),x&&P.jsx(Rn,{sx:{fontWeight:"bold",width:"20%"},children:"User ID"}),P.jsx(Rn,{sx:{fontWeight:"bold",width:"15%"},children:"Created"}),P.jsx(Rn,{sx:{fontWeight:"bold",width:"15%"},children:"Due"}),P.jsx(Rn,{sx:{fontWeight:"bold",width:"10%"},children:"Edit"}),P.jsx(Rn,{sx:{fontWeight:"bold",width:"10%"},children:"Delete"})]})}),P.jsx(S3,{children:u&&u.length>0?u.map(_=>P.jsxs(Ed,{sx:{height:"80px"},children:[P.jsx(Rn,{children:P.jsx("button",{onClick:()=>m(_.id),className:"hyperlink-style",children:_.title})}),x&&P.jsx(Rn,{children:_.userId}),P.jsx(Rn,{children:_.dateCreated?b(_.dateCreated):"N/A"}),P.jsx(Rn,{children:_.dateDue?D(_.dateDue):"N/A"}),P.jsx(Rn,{children:P.jsx(ws,{title:"Edit",children:P.jsx(Zn,{onClick:()=>m(_.id),color:"primary",children:P.jsx(Yd,{})})})}),P.jsx(Rn,{children:P.jsx(ws,{title:"Delete",children:P.jsx(Zn,{onClick:()=>T(_.id),color:"error",children:P.jsx(kr,{})})})})]},_.id)):P.jsx(Ed,{children:P.jsx(Rn,{colSpan:x?6:5,children:"No Designs Found"})})})]})})};function aB(u,m){return m.forEach(function(T){T&&typeof T!="string"&&!Array.isArray(T)&&Object.keys(T).forEach(function(x){if(x!=="default"&&!(x in u)){var b=Object.getOwnPropertyDescriptor(T,x);Object.defineProperty(u,x,b.get?b:{enumerable:!0,get:function(){return T[x]}})}})}),Object.freeze(u)}function p_(u,m){return new Promise(function(T,x){let b;return cB(u).then(function(D){try{return b=D,T(new Blob([m.slice(0,2),b,m.slice(2)],{type:"image/jpeg"}))}catch(_){return x(_)}},x)})}const cB=u=>new Promise((m,T)=>{const x=new FileReader;x.addEventListener("load",({target:{result:b}})=>{const D=new DataView(b);let _=0;if(D.getUint16(_)!==65496)return T("not a valid JPEG");for(_+=2;;){const v=D.getUint16(_);if(v===65498)break;const p=D.getUint16(_+2);if(v===65505&&D.getUint32(_+4)===1165519206){const I=_+10;let C;switch(D.getUint16(I)){case 18761:C=!0;break;case 19789:C=!1;break;default:return T("TIFF header contains invalid endian")}if(D.getUint16(I+2,C)!==42)return T("TIFF header contains invalid version");const w=D.getUint32(I+4,C),g=I+w+2+12*D.getUint16(I+w,C);for(let k=I+w+2;k<g;k+=12)if(D.getUint16(k,C)==274){if(D.getUint16(k+2,C)!==3)return T("Orientation data type is invalid");if(D.getUint32(k+4,C)!==1)return T("Orientation data count is invalid");D.setUint16(k+8,1,C);break}return m(b.slice(_,_+2+p))}_+=2+p}return m(new Blob)}),x.readAsArrayBuffer(u)});var ic={},lB={get exports(){return ic},set exports(u){ic=u}};(function(u){var m,T,x={};lB.exports=x,x.parse=function(b,D){for(var _=x.bin.readUshort,v=x.bin.readUint,p=0,I={},C=new Uint8Array(b),w=C.length-4;v(C,w)!=101010256;)w--;p=w,p+=4;var g=_(C,p+=4);_(C,p+=2);var k=v(C,p+=2),S=v(C,p+=4);p+=4,p=S;for(var N=0;N<g;N++){v(C,p),p+=4,p+=4,p+=4,v(C,p+=4),k=v(C,p+=4);var O=v(C,p+=4),R=_(C,p+=4),Q=_(C,p+2),Y=_(C,p+4);p+=6;var K=v(C,p+=8);p+=4,p+=R+Q+Y,x._readLocal(C,K,I,k,O,D)}return I},x._readLocal=function(b,D,_,v,p,I){var C=x.bin.readUshort,w=x.bin.readUint;w(b,D),C(b,D+=4),C(b,D+=2);var g=C(b,D+=2);w(b,D+=2),w(b,D+=4),D+=4;var k=C(b,D+=8),S=C(b,D+=2);D+=2;var N=x.bin.readUTF8(b,D,k);if(D+=k,D+=S,I)_[N]={size:p,csize:v};else{var O=new Uint8Array(b.buffer,D);if(g==0)_[N]=new Uint8Array(O.buffer.slice(D,D+v));else{if(g!=8)throw"unknown compression method: "+g;var R=new Uint8Array(p);x.inflateRaw(O,R),_[N]=R}}},x.inflateRaw=function(b,D){return x.F.inflate(b,D)},x.inflate=function(b,D){return b[0],b[1],x.inflateRaw(new Uint8Array(b.buffer,b.byteOffset+2,b.length-6),D)},x.deflate=function(b,D){D==null&&(D={level:6});var _=0,v=new Uint8Array(50+Math.floor(1.1*b.length));v[_]=120,v[_+1]=156,_+=2,_=x.F.deflateRaw(b,v,_,D.level);var p=x.adler(b,0,b.length);return v[_+0]=p>>>24&255,v[_+1]=p>>>16&255,v[_+2]=p>>>8&255,v[_+3]=p>>>0&255,new Uint8Array(v.buffer,0,_+4)},x.deflateRaw=function(b,D){D==null&&(D={level:6});var _=new Uint8Array(50+Math.floor(1.1*b.length)),v=x.F.deflateRaw(b,_,v,D.level);return new Uint8Array(_.buffer,0,v)},x.encode=function(b,D){D==null&&(D=!1);var _=0,v=x.bin.writeUint,p=x.bin.writeUshort,I={};for(var C in b){var w=!x._noNeed(C)&&!D,g=b[C],k=x.crc.crc(g,0,g.length);I[C]={cpr:w,usize:g.length,crc:k,file:w?x.deflateRaw(g):g}}for(var C in I)_+=I[C].file.length+30+46+2*x.bin.sizeUTF8(C);_+=22;var S=new Uint8Array(_),N=0,O=[];for(var C in I){var R=I[C];O.push(N),N=x._writeHeader(S,N,C,R,0)}var Q=0,Y=N;for(var C in I)R=I[C],O.push(N),N=x._writeHeader(S,N,C,R,1,O[Q++]);var K=N-Y;return v(S,N,101010256),N+=4,p(S,N+=4,Q),p(S,N+=2,Q),v(S,N+=2,K),v(S,N+=4,Y),N+=4,N+=2,S.buffer},x._noNeed=function(b){var D=b.split(".").pop().toLowerCase();return"png,jpg,jpeg,zip".indexOf(D)!=-1},x._writeHeader=function(b,D,_,v,p,I){var C=x.bin.writeUint,w=x.bin.writeUshort,g=v.file;return C(b,D,p==0?67324752:33639248),D+=4,p==1&&(D+=2),w(b,D,20),w(b,D+=2,0),w(b,D+=2,v.cpr?8:0),C(b,D+=2,0),C(b,D+=4,v.crc),C(b,D+=4,g.length),C(b,D+=4,v.usize),w(b,D+=4,x.bin.sizeUTF8(_)),w(b,D+=2,0),D+=2,p==1&&(D+=2,D+=2,C(b,D+=6,I),D+=4),D+=x.bin.writeUTF8(b,D,_),p==0&&(b.set(g,D),D+=g.length),D},x.crc={table:function(){for(var b=new Uint32Array(256),D=0;D<256;D++){for(var _=D,v=0;v<8;v++)1&_?_=3988292384^_>>>1:_>>>=1;b[D]=_}return b}(),update:function(b,D,_,v){for(var p=0;p<v;p++)b=x.crc.table[255&(b^D[_+p])]^b>>>8;return b},crc:function(b,D,_){return 4294967295^x.crc.update(4294967295,b,D,_)}},x.adler=function(b,D,_){for(var v=1,p=0,I=D,C=D+_;I<C;){for(var w=Math.min(I+5552,C);I<w;)p+=v+=b[I++];v%=65521,p%=65521}return p<<16|v},x.bin={readUshort:function(b,D){return b[D]|b[D+1]<<8},writeUshort:function(b,D,_){b[D]=255&_,b[D+1]=_>>8&255},readUint:function(b,D){return 16777216*b[D+3]+(b[D+2]<<16|b[D+1]<<8|b[D])},writeUint:function(b,D,_){b[D]=255&_,b[D+1]=_>>8&255,b[D+2]=_>>16&255,b[D+3]=_>>24&255},readASCII:function(b,D,_){for(var v="",p=0;p<_;p++)v+=String.fromCharCode(b[D+p]);return v},writeASCII:function(b,D,_){for(var v=0;v<_.length;v++)b[D+v]=_.charCodeAt(v)},pad:function(b){return b.length<2?"0"+b:b},readUTF8:function(b,D,_){for(var v,p="",I=0;I<_;I++)p+="%"+x.bin.pad(b[D+I].toString(16));try{v=decodeURIComponent(p)}catch{return x.bin.readASCII(b,D,_)}return v},writeUTF8:function(b,D,_){for(var v=_.length,p=0,I=0;I<v;I++){var C=_.charCodeAt(I);if(!(4294967168&C))b[D+p]=C,p++;else if(!(4294965248&C))b[D+p]=192|C>>6,b[D+p+1]=128|C>>0&63,p+=2;else if(!(4294901760&C))b[D+p]=224|C>>12,b[D+p+1]=128|C>>6&63,b[D+p+2]=128|C>>0&63,p+=3;else{if(4292870144&C)throw"e";b[D+p]=240|C>>18,b[D+p+1]=128|C>>12&63,b[D+p+2]=128|C>>6&63,b[D+p+3]=128|C>>0&63,p+=4}}return p},sizeUTF8:function(b){for(var D=b.length,_=0,v=0;v<D;v++){var p=b.charCodeAt(v);if(!(4294967168&p))_++;else if(!(4294965248&p))_+=2;else if(!(4294901760&p))_+=3;else{if(4292870144&p)throw"e";_+=4}}return _}},x.F={},x.F.deflateRaw=function(b,D,_,v){var p=[[0,0,0,0,0],[4,4,8,4,0],[4,5,16,8,0],[4,6,16,16,0],[4,10,16,32,0],[8,16,32,32,0],[8,16,128,128,0],[8,32,128,256,0],[32,128,258,1024,1],[32,258,258,4096,1]][v],I=x.F.U,C=x.F._goodIndex;x.F._hash;var w=x.F._putsE,g=0,k=_<<3,S=0,N=b.length;if(v==0){for(;g<N;)w(D,k,g+(U=Math.min(65535,N-g))==N?1:0),k=x.F._copyExact(b,g,U,D,k+8),g+=U;return k>>>3}var O=I.lits,R=I.strt,Q=I.prev,Y=0,K=0,et=0,H=0,W=0,B=0;for(N>2&&(R[B=x.F._hash(b,0)]=0),g=0;g<N;g++){if(W=B,g+1<N-2){B=x.F._hash(b,g+1);var y=g+1&32767;Q[y]=R[B],R[B]=y}if(S<=g){(Y>14e3||K>26697)&&N-g>100&&(S<g&&(O[Y]=g-S,Y+=2,S=g),k=x.F._writeBlock(g==N-1||S==N?1:0,O,Y,H,b,et,g-et,D,k),Y=K=H=0,et=g);var z=0;g<N-2&&(z=x.F._bestMatch(b,g,Q,W,Math.min(p[2],N-g),p[3]));var U=z>>>16,G=65535&z;if(z!=0){G=65535&z;var $=C(U=z>>>16,I.of0);I.lhst[257+$]++;var q=C(G,I.df0);I.dhst[q]++,H+=I.exb[$]+I.dxb[q],O[Y]=U<<23|g-S,O[Y+1]=G<<16|$<<8|q,Y+=2,S=g+U}else I.lhst[b[g]]++;K++}}for(et==g&&b.length!=0||(S<g&&(O[Y]=g-S,Y+=2,S=g),k=x.F._writeBlock(1,O,Y,H,b,et,g-et,D,k),Y=0,K=0,Y=K=H=0,et=g);7&k;)k++;return k>>>3},x.F._bestMatch=function(b,D,_,v,p,I){var C=32767&D,w=_[C],g=C-w+32768&32767;if(w==C||v!=x.F._hash(b,D-g))return 0;for(var k=0,S=0,N=Math.min(32767,D);g<=N&&--I!=0&&w!=C;){if(k==0||b[D+k]==b[D+k-g]){var O=x.F._howLong(b,D,g);if(O>k){if(S=g,(k=O)>=p)break;g+2<O&&(O=g+2);for(var R=0,Q=0;Q<O-2;Q++){var Y=D-g+Q+32768&32767,K=Y-_[Y]+32768&32767;K>R&&(R=K,w=Y)}}}g+=(C=w)-(w=_[C])+32768&32767}return k<<16|S},x.F._howLong=function(b,D,_){if(b[D]!=b[D-_]||b[D+1]!=b[D+1-_]||b[D+2]!=b[D+2-_])return 0;var v=D,p=Math.min(b.length,D+258);for(D+=3;D<p&&b[D]==b[D-_];)D++;return D-v},x.F._hash=function(b,D){return(b[D]<<8|b[D+1])+(b[D+2]<<4)&65535},x.saved=0,x.F._writeBlock=function(b,D,_,v,p,I,C,w,g){var k,S,N,O,R,Q,Y,K,et,H=x.F.U,W=x.F._putsF,B=x.F._putsE;H.lhst[256]++,S=(k=x.F.getTrees())[0],N=k[1],O=k[2],R=k[3],Q=k[4],Y=k[5],K=k[6],et=k[7];var y=32+(g+3&7?8-(g+3&7):0)+(C<<3),z=v+x.F.contSize(H.fltree,H.lhst)+x.F.contSize(H.fdtree,H.dhst),U=v+x.F.contSize(H.ltree,H.lhst)+x.F.contSize(H.dtree,H.dhst);U+=14+3*Y+x.F.contSize(H.itree,H.ihst)+(2*H.ihst[16]+3*H.ihst[17]+7*H.ihst[18]);for(var G=0;G<286;G++)H.lhst[G]=0;for(G=0;G<30;G++)H.dhst[G]=0;for(G=0;G<19;G++)H.ihst[G]=0;var $=y<z&&y<U?0:z<U?1:2;if(W(w,g,b),W(w,g+1,$),g+=3,$==0){for(;7&g;)g++;g=x.F._copyExact(p,I,C,w,g)}else{var q,Z;if($==1&&(q=H.fltree,Z=H.fdtree),$==2){x.F.makeCodes(H.ltree,S),x.F.revCodes(H.ltree,S),x.F.makeCodes(H.dtree,N),x.F.revCodes(H.dtree,N),x.F.makeCodes(H.itree,O),x.F.revCodes(H.itree,O),q=H.ltree,Z=H.dtree,B(w,g,R-257),B(w,g+=5,Q-1),B(w,g+=5,Y-4),g+=4;for(var F=0;F<Y;F++)B(w,g+3*F,H.itree[1+(H.ordr[F]<<1)]);g+=3*Y,g=x.F._codeTiny(K,H.itree,w,g),g=x.F._codeTiny(et,H.itree,w,g)}for(var j=I,st=0;st<_;st+=2){for(var X=D[st],nt=X>>>23,ft=j+(8388607&X);j<ft;)g=x.F._writeLit(p[j++],q,w,g);if(nt!=0){var ht=D[st+1],vt=ht>>16,dt=ht>>8&255,ct=255&ht;B(w,g=x.F._writeLit(257+dt,q,w,g),nt-H.of0[dt]),g+=H.exb[dt],W(w,g=x.F._writeLit(ct,Z,w,g),vt-H.df0[ct]),g+=H.dxb[ct],j+=nt}}g=x.F._writeLit(256,q,w,g)}return g},x.F._copyExact=function(b,D,_,v,p){var I=p>>>3;return v[I]=_,v[I+1]=_>>>8,v[I+2]=255-v[I],v[I+3]=255-v[I+1],I+=4,v.set(new Uint8Array(b.buffer,D,_),I),p+(_+4<<3)},x.F.getTrees=function(){for(var b=x.F.U,D=x.F._hufTree(b.lhst,b.ltree,15),_=x.F._hufTree(b.dhst,b.dtree,15),v=[],p=x.F._lenCodes(b.ltree,v),I=[],C=x.F._lenCodes(b.dtree,I),w=0;w<v.length;w+=2)b.ihst[v[w]]++;for(w=0;w<I.length;w+=2)b.ihst[I[w]]++;for(var g=x.F._hufTree(b.ihst,b.itree,7),k=19;k>4&&b.itree[1+(b.ordr[k-1]<<1)]==0;)k--;return[D,_,g,p,C,k,v,I]},x.F.getSecond=function(b){for(var D=[],_=0;_<b.length;_+=2)D.push(b[_+1]);return D},x.F.nonZero=function(b){for(var D="",_=0;_<b.length;_+=2)b[_+1]!=0&&(D+=(_>>1)+",");return D},x.F.contSize=function(b,D){for(var _=0,v=0;v<D.length;v++)_+=D[v]*b[1+(v<<1)];return _},x.F._codeTiny=function(b,D,_,v){for(var p=0;p<b.length;p+=2){var I=b[p],C=b[p+1];v=x.F._writeLit(I,D,_,v);var w=I==16?2:I==17?3:7;I>15&&(x.F._putsE(_,v,C,w),v+=w)}return v},x.F._lenCodes=function(b,D){for(var _=b.length;_!=2&&b[_-1]==0;)_-=2;for(var v=0;v<_;v+=2){var p=b[v+1],I=v+3<_?b[v+3]:-1,C=v+5<_?b[v+5]:-1,w=v==0?-1:b[v-1];if(p==0&&I==p&&C==p){for(var g=v+5;g+2<_&&b[g+2]==p;)g+=2;(k=Math.min(g+1-v>>>1,138))<11?D.push(17,k-3):D.push(18,k-11),v+=2*k-2}else if(p==w&&I==p&&C==p){for(g=v+5;g+2<_&&b[g+2]==p;)g+=2;var k=Math.min(g+1-v>>>1,6);D.push(16,k-3),v+=2*k-2}else D.push(p,0)}return _>>>1},x.F._hufTree=function(b,D,_){var v=[],p=b.length,I=D.length,C=0;for(C=0;C<I;C+=2)D[C]=0,D[C+1]=0;for(C=0;C<p;C++)b[C]!=0&&v.push({lit:C,f:b[C]});var w=v.length,g=v.slice(0);if(w==0)return 0;if(w==1){var k=v[0].lit;return g=k==0?1:0,D[1+(k<<1)]=1,D[1+(g<<1)]=1,1}v.sort(function(K,et){return K.f-et.f});var S=v[0],N=v[1],O=0,R=1,Q=2;for(v[0]={lit:-1,f:S.f+N.f,l:S,r:N,d:0};R!=w-1;)S=O!=R&&(Q==w||v[O].f<v[Q].f)?v[O++]:v[Q++],N=O!=R&&(Q==w||v[O].f<v[Q].f)?v[O++]:v[Q++],v[R++]={lit:-1,f:S.f+N.f,l:S,r:N};var Y=x.F.setDepth(v[R-1],0);for(Y>_&&(x.F.restrictDepth(g,_,Y),Y=_),C=0;C<w;C++)D[1+(g[C].lit<<1)]=g[C].d;return Y},x.F.setDepth=function(b,D){return b.lit!=-1?(b.d=D,D):Math.max(x.F.setDepth(b.l,D+1),x.F.setDepth(b.r,D+1))},x.F.restrictDepth=function(b,D,_){var v=0,p=1<<_-D,I=0;for(b.sort(function(w,g){return g.d==w.d?w.f-g.f:g.d-w.d}),v=0;v<b.length&&b[v].d>D;v++){var C=b[v].d;b[v].d=D,I+=p-(1<<_-C)}for(I>>>=_-D;I>0;)(C=b[v].d)<D?(b[v].d++,I-=1<<D-C-1):v++;for(;v>=0;v--)b[v].d==D&&I<0&&(b[v].d--,I++);I!=0&&console.log("debt left")},x.F._goodIndex=function(b,D){var _=0;return D[16|_]<=b&&(_|=16),D[8|_]<=b&&(_|=8),D[4|_]<=b&&(_|=4),D[2|_]<=b&&(_|=2),D[1|_]<=b&&(_|=1),_},x.F._writeLit=function(b,D,_,v){return x.F._putsF(_,v,D[b<<1]),v+D[1+(b<<1)]},x.F.inflate=function(b,D){var _=Uint8Array;if(b[0]==3&&b[1]==0)return D||new _(0);var v=x.F,p=v._bitsF,I=v._bitsE,C=v._decodeTiny,w=v.makeCodes,g=v.codes2map,k=v._get17,S=v.U,N=D==null;N&&(D=new _(b.length>>>2<<3));for(var O,R,Q=0,Y=0,K=0,et=0,H=0,W=0,B=0,y=0,z=0;Q==0;)if(Q=p(b,z,1),Y=p(b,z+1,2),z+=3,Y!=0){if(N&&(D=x.F._check(D,y+(1<<17))),Y==1&&(O=S.flmap,R=S.fdmap,W=511,B=31),Y==2){K=I(b,z,5)+257,et=I(b,z+5,5)+1,H=I(b,z+10,4)+4,z+=14;for(var U=0;U<38;U+=2)S.itree[U]=0,S.itree[U+1]=0;var G=1;for(U=0;U<H;U++){var $=I(b,z+3*U,3);S.itree[1+(S.ordr[U]<<1)]=$,$>G&&(G=$)}z+=3*H,w(S.itree,G),g(S.itree,G,S.imap),O=S.lmap,R=S.dmap,z=C(S.imap,(1<<G)-1,K+et,b,z,S.ttree);var q=v._copyOut(S.ttree,0,K,S.ltree);W=(1<<q)-1;var Z=v._copyOut(S.ttree,K,et,S.dtree);B=(1<<Z)-1,w(S.ltree,q),g(S.ltree,q,O),w(S.dtree,Z),g(S.dtree,Z,R)}for(;;){var F=O[k(b,z)&W];z+=15&F;var j=F>>>4;if(!(j>>>8))D[y++]=j;else{if(j==256)break;var st=y+j-254;if(j>264){var X=S.ldef[j-257];st=y+(X>>>3)+I(b,z,7&X),z+=7&X}var nt=R[k(b,z)&B];z+=15&nt;var ft=nt>>>4,ht=S.ddef[ft],vt=(ht>>>4)+p(b,z,15&ht);for(z+=15&ht,N&&(D=x.F._check(D,y+(1<<17)));y<st;)D[y]=D[y++-vt],D[y]=D[y++-vt],D[y]=D[y++-vt],D[y]=D[y++-vt];y=st}}}else{7&z&&(z+=8-(7&z));var dt=4+(z>>>3),ct=b[dt-4]|b[dt-3]<<8;N&&(D=x.F._check(D,y+ct)),D.set(new _(b.buffer,b.byteOffset+dt,ct),y),z=dt+ct<<3,y+=ct}return D.length==y?D:D.slice(0,y)},x.F._check=function(b,D){var _=b.length;if(D<=_)return b;var v=new Uint8Array(Math.max(_<<1,D));return v.set(b,0),v},x.F._decodeTiny=function(b,D,_,v,p,I){for(var C=x.F._bitsE,w=x.F._get17,g=0;g<_;){var k=b[w(v,p)&D];p+=15&k;var S=k>>>4;if(S<=15)I[g]=S,g++;else{var N=0,O=0;S==16?(O=3+C(v,p,2),p+=2,N=I[g-1]):S==17?(O=3+C(v,p,3),p+=3):S==18&&(O=11+C(v,p,7),p+=7);for(var R=g+O;g<R;)I[g]=N,g++}}return p},x.F._copyOut=function(b,D,_,v){for(var p=0,I=0,C=v.length>>>1;I<_;){var w=b[I+D];v[I<<1]=0,v[1+(I<<1)]=w,w>p&&(p=w),I++}for(;I<C;)v[I<<1]=0,v[1+(I<<1)]=0,I++;return p},x.F.makeCodes=function(b,D){for(var _,v,p,I,C=x.F.U,w=b.length,g=C.bl_count,k=0;k<=D;k++)g[k]=0;for(k=1;k<w;k+=2)g[b[k]]++;var S=C.next_code;for(_=0,g[0]=0,v=1;v<=D;v++)_=_+g[v-1]<<1,S[v]=_;for(p=0;p<w;p+=2)(I=b[p+1])!=0&&(b[p]=S[I],S[I]++)},x.F.codes2map=function(b,D,_){for(var v=b.length,p=x.F.U.rev15,I=0;I<v;I+=2)if(b[I+1]!=0)for(var C=I>>1,w=b[I+1],g=C<<4|w,k=D-w,S=b[I]<<k,N=S+(1<<k);S!=N;)_[p[S]>>>15-D]=g,S++},x.F.revCodes=function(b,D){for(var _=x.F.U.rev15,v=15-D,p=0;p<b.length;p+=2){var I=b[p]<<D-b[p+1];b[p]=_[I]>>>v}},x.F._putsE=function(b,D,_){_<<=7&D;var v=D>>>3;b[v]|=_,b[v+1]|=_>>>8},x.F._putsF=function(b,D,_){_<<=7&D;var v=D>>>3;b[v]|=_,b[v+1]|=_>>>8,b[v+2]|=_>>>16},x.F._bitsE=function(b,D,_){return(b[D>>>3]|b[1+(D>>>3)]<<8)>>>(7&D)&(1<<_)-1},x.F._bitsF=function(b,D,_){return(b[D>>>3]|b[1+(D>>>3)]<<8|b[2+(D>>>3)]<<16)>>>(7&D)&(1<<_)-1},x.F._get17=function(b,D){return(b[D>>>3]|b[1+(D>>>3)]<<8|b[2+(D>>>3)]<<16)>>>(7&D)},x.F._get25=function(b,D){return(b[D>>>3]|b[1+(D>>>3)]<<8|b[2+(D>>>3)]<<16|b[3+(D>>>3)]<<24)>>>(7&D)},x.F.U=(m=Uint16Array,T=Uint32Array,{next_code:new m(16),bl_count:new m(16),ordr:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],of0:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],exb:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],ldef:new m(32),df0:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],dxb:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],ddef:new T(32),flmap:new m(512),fltree:[],fdmap:new m(32),fdtree:[],lmap:new m(32768),ltree:[],ttree:[],dmap:new m(32768),dtree:[],imap:new m(512),itree:[],rev15:new m(32768),lhst:new T(286),dhst:new T(30),ihst:new T(19),lits:new T(15e3),strt:new m(65536),prev:new m(32768)}),function(){for(var b=x.F.U,D=0;D<32768;D++){var _=D;_=(4278255360&(_=(4042322160&(_=(3435973836&(_=(2863311530&_)>>>1|(1431655765&_)<<1))>>>2|(858993459&_)<<2))>>>4|(252645135&_)<<4))>>>8|(16711935&_)<<8,b.rev15[D]=(_>>>16|_<<16)>>>17}function v(p,I,C){for(;I--!=0;)p.push(0,C)}for(D=0;D<32;D++)b.ldef[D]=b.of0[D]<<3|b.exb[D],b.ddef[D]=b.df0[D]<<4|b.dxb[D];v(b.fltree,144,8),v(b.fltree,112,9),v(b.fltree,24,7),v(b.fltree,8,8),x.F.makeCodes(b.fltree,9),x.F.codes2map(b.fltree,9,b.flmap),x.F.revCodes(b.fltree,9),v(b.fdtree,32,5),x.F.makeCodes(b.fdtree,5),x.F.codes2map(b.fdtree,5,b.fdmap),x.F.revCodes(b.fdtree,5),v(b.itree,19,0),v(b.ltree,286,0),v(b.dtree,30,0),v(b.ttree,320,0)}()})();var dB=aB({__proto__:null,default:ic},[ic]);const po=function(){var u={nextZero(C,w){for(;C[w]!=0;)w++;return w},readUshort:(C,w)=>C[w]<<8|C[w+1],writeUshort(C,w,g){C[w]=g>>8&255,C[w+1]=255&g},readUint:(C,w)=>16777216*C[w]+(C[w+1]<<16|C[w+2]<<8|C[w+3]),writeUint(C,w,g){C[w]=g>>24&255,C[w+1]=g>>16&255,C[w+2]=g>>8&255,C[w+3]=255&g},readASCII(C,w,g){let k="";for(let S=0;S<g;S++)k+=String.fromCharCode(C[w+S]);return k},writeASCII(C,w,g){for(let k=0;k<g.length;k++)C[w+k]=g.charCodeAt(k)},readBytes(C,w,g){const k=[];for(let S=0;S<g;S++)k.push(C[w+S]);return k},pad:C=>C.length<2?`0${C}`:C,readUTF8(C,w,g){let k,S="";for(let N=0;N<g;N++)S+=`%${u.pad(C[w+N].toString(16))}`;try{k=decodeURIComponent(S)}catch{return u.readASCII(C,w,g)}return k}};function m(C,w,g,k){const S=w*g,N=D(k),O=Math.ceil(w*N/8),R=new Uint8Array(4*S),Q=new Uint32Array(R.buffer),{ctype:Y}=k,{depth:K}=k,et=u.readUshort;if(Y==6){const X=S<<2;if(K==8)for(var H=0;H<X;H+=4)R[H]=C[H],R[H+1]=C[H+1],R[H+2]=C[H+2],R[H+3]=C[H+3];if(K==16)for(H=0;H<X;H++)R[H]=C[H<<1]}else if(Y==2){const X=k.tabs.tRNS;if(X==null){if(K==8)for(H=0;H<S;H++){var W=3*H;Q[H]=255<<24|C[W+2]<<16|C[W+1]<<8|C[W]}if(K==16)for(H=0;H<S;H++)W=6*H,Q[H]=255<<24|C[W+4]<<16|C[W+2]<<8|C[W]}else{var B=X[0];const nt=X[1],ft=X[2];if(K==8)for(H=0;H<S;H++){var y=H<<2;W=3*H,Q[H]=255<<24|C[W+2]<<16|C[W+1]<<8|C[W],C[W]==B&&C[W+1]==nt&&C[W+2]==ft&&(R[y+3]=0)}if(K==16)for(H=0;H<S;H++)y=H<<2,W=6*H,Q[H]=255<<24|C[W+4]<<16|C[W+2]<<8|C[W],et(C,W)==B&&et(C,W+2)==nt&&et(C,W+4)==ft&&(R[y+3]=0)}}else if(Y==3){const X=k.tabs.PLTE,nt=k.tabs.tRNS,ft=nt?nt.length:0;if(K==1)for(var z=0;z<g;z++){var U=z*O,G=z*w;for(H=0;H<w;H++){y=G+H<<2;var $=3*(q=C[U+(H>>3)]>>7-((7&H)<<0)&1);R[y]=X[$],R[y+1]=X[$+1],R[y+2]=X[$+2],R[y+3]=q<ft?nt[q]:255}}if(K==2)for(z=0;z<g;z++)for(U=z*O,G=z*w,H=0;H<w;H++)y=G+H<<2,$=3*(q=C[U+(H>>2)]>>6-((3&H)<<1)&3),R[y]=X[$],R[y+1]=X[$+1],R[y+2]=X[$+2],R[y+3]=q<ft?nt[q]:255;if(K==4)for(z=0;z<g;z++)for(U=z*O,G=z*w,H=0;H<w;H++)y=G+H<<2,$=3*(q=C[U+(H>>1)]>>4-((1&H)<<2)&15),R[y]=X[$],R[y+1]=X[$+1],R[y+2]=X[$+2],R[y+3]=q<ft?nt[q]:255;if(K==8)for(H=0;H<S;H++){var q;y=H<<2,$=3*(q=C[H]),R[y]=X[$],R[y+1]=X[$+1],R[y+2]=X[$+2],R[y+3]=q<ft?nt[q]:255}}else if(Y==4){if(K==8)for(H=0;H<S;H++){y=H<<2;var Z=C[F=H<<1];R[y]=Z,R[y+1]=Z,R[y+2]=Z,R[y+3]=C[F+1]}if(K==16)for(H=0;H<S;H++){var F;y=H<<2,Z=C[F=H<<2],R[y]=Z,R[y+1]=Z,R[y+2]=Z,R[y+3]=C[F+2]}}else if(Y==0)for(B=k.tabs.tRNS?k.tabs.tRNS:-1,z=0;z<g;z++){const X=z*O,nt=z*w;if(K==1)for(var j=0;j<w;j++){var st=(Z=255*(C[X+(j>>>3)]>>>7-(7&j)&1))==255*B?0:255;Q[nt+j]=st<<24|Z<<16|Z<<8|Z}else if(K==2)for(j=0;j<w;j++)st=(Z=85*(C[X+(j>>>2)]>>>6-((3&j)<<1)&3))==85*B?0:255,Q[nt+j]=st<<24|Z<<16|Z<<8|Z;else if(K==4)for(j=0;j<w;j++)st=(Z=17*(C[X+(j>>>1)]>>>4-((1&j)<<2)&15))==17*B?0:255,Q[nt+j]=st<<24|Z<<16|Z<<8|Z;else if(K==8)for(j=0;j<w;j++)st=(Z=C[X+j])==B?0:255,Q[nt+j]=st<<24|Z<<16|Z<<8|Z;else if(K==16)for(j=0;j<w;j++)Z=C[X+(j<<1)],st=et(C,X+(j<<1))==B?0:255,Q[nt+j]=st<<24|Z<<16|Z<<8|Z}return R}function T(C,w,g,k){const S=D(C),N=Math.ceil(g*S/8),O=new Uint8Array((N+1+C.interlace)*k);return w=C.tabs.CgBI?b(w,O):x(w,O),C.interlace==0?w=_(w,C,0,g,k):C.interlace==1&&(w=function(Q,Y){const K=Y.width,et=Y.height,H=D(Y),W=H>>3,B=Math.ceil(K*H/8),y=new Uint8Array(et*B);let z=0;const U=[0,0,4,0,2,0,1],G=[0,4,0,2,0,1,0],$=[8,8,8,4,4,2,2],q=[8,8,4,4,2,2,1];let Z=0;for(;Z<7;){const j=$[Z],st=q[Z];let X=0,nt=0,ft=U[Z];for(;ft<et;)ft+=j,nt++;let ht=G[Z];for(;ht<K;)ht+=st,X++;const vt=Math.ceil(X*H/8);_(Q,Y,z,X,nt);let dt=0,ct=U[Z];for(;ct<et;){let Nt=G[Z],Jt=z+dt*vt<<3;for(;Nt<K;){var F;if(H==1&&(F=(F=Q[Jt>>3])>>7-(7&Jt)&1,y[ct*B+(Nt>>3)]|=F<<7-((7&Nt)<<0)),H==2&&(F=(F=Q[Jt>>3])>>6-(7&Jt)&3,y[ct*B+(Nt>>2)]|=F<<6-((3&Nt)<<1)),H==4&&(F=(F=Q[Jt>>3])>>4-(7&Jt)&15,y[ct*B+(Nt>>1)]|=F<<4-((1&Nt)<<2)),H>=8){const It=ct*B+Nt*W;for(let Pt=0;Pt<W;Pt++)y[It+Pt]=Q[(Jt>>3)+Pt]}Jt+=H,Nt+=st}dt++,ct+=j}X*nt!=0&&(z+=nt*(1+vt)),Z+=1}return y}(w,C)),w}function x(C,w){return b(new Uint8Array(C.buffer,2,C.length-6),w)}var b=function(){const C={H:{}};return C.H.N=function(w,g){const k=Uint8Array;let S,N,O=0,R=0,Q=0,Y=0,K=0,et=0,H=0,W=0,B=0;if(w[0]==3&&w[1]==0)return g||new k(0);const y=C.H,z=y.b,U=y.e,G=y.R,$=y.n,q=y.A,Z=y.Z,F=y.m,j=g==null;for(j&&(g=new k(w.length>>>2<<5));O==0;)if(O=z(w,B,1),R=z(w,B+1,2),B+=3,R!=0){if(j&&(g=C.H.W(g,W+(1<<17))),R==1&&(S=F.J,N=F.h,et=511,H=31),R==2){Q=U(w,B,5)+257,Y=U(w,B+5,5)+1,K=U(w,B+10,4)+4,B+=14;let X=1;for(var st=0;st<38;st+=2)F.Q[st]=0,F.Q[st+1]=0;for(st=0;st<K;st++){const ht=U(w,B+3*st,3);F.Q[1+(F.X[st]<<1)]=ht,ht>X&&(X=ht)}B+=3*K,$(F.Q,X),q(F.Q,X,F.u),S=F.w,N=F.d,B=G(F.u,(1<<X)-1,Q+Y,w,B,F.v);const nt=y.V(F.v,0,Q,F.C);et=(1<<nt)-1;const ft=y.V(F.v,Q,Y,F.D);H=(1<<ft)-1,$(F.C,nt),q(F.C,nt,S),$(F.D,ft),q(F.D,ft,N)}for(;;){const X=S[Z(w,B)&et];B+=15&X;const nt=X>>>4;if(!(nt>>>8))g[W++]=nt;else{if(nt==256)break;{let ft=W+nt-254;if(nt>264){const Nt=F.q[nt-257];ft=W+(Nt>>>3)+U(w,B,7&Nt),B+=7&Nt}const ht=N[Z(w,B)&H];B+=15&ht;const vt=ht>>>4,dt=F.c[vt],ct=(dt>>>4)+z(w,B,15&dt);for(B+=15&dt;W<ft;)g[W]=g[W++-ct],g[W]=g[W++-ct],g[W]=g[W++-ct],g[W]=g[W++-ct];W=ft}}}}else{7&B&&(B+=8-(7&B));const X=4+(B>>>3),nt=w[X-4]|w[X-3]<<8;j&&(g=C.H.W(g,W+nt)),g.set(new k(w.buffer,w.byteOffset+X,nt),W),B=X+nt<<3,W+=nt}return g.length==W?g:g.slice(0,W)},C.H.W=function(w,g){const k=w.length;if(g<=k)return w;const S=new Uint8Array(k<<1);return S.set(w,0),S},C.H.R=function(w,g,k,S,N,O){const R=C.H.e,Q=C.H.Z;let Y=0;for(;Y<k;){const K=w[Q(S,N)&g];N+=15&K;const et=K>>>4;if(et<=15)O[Y]=et,Y++;else{let H=0,W=0;et==16?(W=3+R(S,N,2),N+=2,H=O[Y-1]):et==17?(W=3+R(S,N,3),N+=3):et==18&&(W=11+R(S,N,7),N+=7);const B=Y+W;for(;Y<B;)O[Y]=H,Y++}}return N},C.H.V=function(w,g,k,S){let N=0,O=0;const R=S.length>>>1;for(;O<k;){const Q=w[O+g];S[O<<1]=0,S[1+(O<<1)]=Q,Q>N&&(N=Q),O++}for(;O<R;)S[O<<1]=0,S[1+(O<<1)]=0,O++;return N},C.H.n=function(w,g){const k=C.H.m,S=w.length;let N,O,R,Q;const Y=k.j;for(var K=0;K<=g;K++)Y[K]=0;for(K=1;K<S;K+=2)Y[w[K]]++;const et=k.K;for(N=0,Y[0]=0,O=1;O<=g;O++)N=N+Y[O-1]<<1,et[O]=N;for(R=0;R<S;R+=2)Q=w[R+1],Q!=0&&(w[R]=et[Q],et[Q]++)},C.H.A=function(w,g,k){const S=w.length,N=C.H.m.r;for(let O=0;O<S;O+=2)if(w[O+1]!=0){const R=O>>1,Q=w[O+1],Y=R<<4|Q,K=g-Q;let et=w[O]<<K;const H=et+(1<<K);for(;et!=H;)k[N[et]>>>15-g]=Y,et++}},C.H.l=function(w,g){const k=C.H.m.r,S=15-g;for(let N=0;N<w.length;N+=2){const O=w[N]<<g-w[N+1];w[N]=k[O]>>>S}},C.H.M=function(w,g,k){k<<=7&g;const S=g>>>3;w[S]|=k,w[S+1]|=k>>>8},C.H.I=function(w,g,k){k<<=7&g;const S=g>>>3;w[S]|=k,w[S+1]|=k>>>8,w[S+2]|=k>>>16},C.H.e=function(w,g,k){return(w[g>>>3]|w[1+(g>>>3)]<<8)>>>(7&g)&(1<<k)-1},C.H.b=function(w,g,k){return(w[g>>>3]|w[1+(g>>>3)]<<8|w[2+(g>>>3)]<<16)>>>(7&g)&(1<<k)-1},C.H.Z=function(w,g){return(w[g>>>3]|w[1+(g>>>3)]<<8|w[2+(g>>>3)]<<16)>>>(7&g)},C.H.i=function(w,g){return(w[g>>>3]|w[1+(g>>>3)]<<8|w[2+(g>>>3)]<<16|w[3+(g>>>3)]<<24)>>>(7&g)},C.H.m=function(){const w=Uint16Array,g=Uint32Array;return{K:new w(16),j:new w(16),X:[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],S:[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,999,999,999],T:[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0],q:new w(32),p:[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,65535,65535],z:[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0],c:new g(32),J:new w(512),_:[],h:new w(32),$:[],w:new w(32768),C:[],v:[],d:new w(32768),D:[],u:new w(512),Q:[],r:new w(32768),s:new g(286),Y:new g(30),a:new g(19),t:new g(15e3),k:new w(65536),g:new w(32768)}}(),function(){const w=C.H.m;for(var g=0;g<32768;g++){let S=g;S=(2863311530&S)>>>1|(1431655765&S)<<1,S=(3435973836&S)>>>2|(858993459&S)<<2,S=(4042322160&S)>>>4|(252645135&S)<<4,S=(4278255360&S)>>>8|(16711935&S)<<8,w.r[g]=(S>>>16|S<<16)>>>17}function k(S,N,O){for(;N--!=0;)S.push(0,O)}for(g=0;g<32;g++)w.q[g]=w.S[g]<<3|w.T[g],w.c[g]=w.p[g]<<4|w.z[g];k(w._,144,8),k(w._,112,9),k(w._,24,7),k(w._,8,8),C.H.n(w._,9),C.H.A(w._,9,w.J),C.H.l(w._,9),k(w.$,32,5),C.H.n(w.$,5),C.H.A(w.$,5,w.h),C.H.l(w.$,5),k(w.Q,19,0),k(w.C,286,0),k(w.D,30,0),k(w.v,320,0)}(),C.H.N}();function D(C){return[1,null,3,1,2,null,4][C.ctype]*C.depth}function _(C,w,g,k,S){let N=D(w);const O=Math.ceil(k*N/8);let R,Q;N=Math.ceil(N/8);let Y=C[g],K=0;if(Y>1&&(C[g]=[0,0,1][Y-2]),Y==3)for(K=N;K<O;K++)C[K+1]=C[K+1]+(C[K+1-N]>>>1)&255;for(let et=0;et<S;et++)if(R=g+et*O,Q=R+et+1,Y=C[Q-1],K=0,Y==0)for(;K<O;K++)C[R+K]=C[Q+K];else if(Y==1){for(;K<N;K++)C[R+K]=C[Q+K];for(;K<O;K++)C[R+K]=C[Q+K]+C[R+K-N]}else if(Y==2)for(;K<O;K++)C[R+K]=C[Q+K]+C[R+K-O];else if(Y==3){for(;K<N;K++)C[R+K]=C[Q+K]+(C[R+K-O]>>>1);for(;K<O;K++)C[R+K]=C[Q+K]+(C[R+K-O]+C[R+K-N]>>>1)}else{for(;K<N;K++)C[R+K]=C[Q+K]+v(0,C[R+K-O],0);for(;K<O;K++)C[R+K]=C[Q+K]+v(C[R+K-N],C[R+K-O],C[R+K-N-O])}return C}function v(C,w,g){const k=C+w-g,S=k-C,N=k-w,O=k-g;return S*S<=N*N&&S*S<=O*O?C:N*N<=O*O?w:g}function p(C,w,g){g.width=u.readUint(C,w),w+=4,g.height=u.readUint(C,w),w+=4,g.depth=C[w],w++,g.ctype=C[w],w++,g.compress=C[w],w++,g.filter=C[w],w++,g.interlace=C[w],w++}function I(C,w,g,k,S,N,O,R,Q){const Y=Math.min(w,S),K=Math.min(g,N);let et=0,H=0;for(let Z=0;Z<K;Z++)for(let F=0;F<Y;F++)if(O>=0&&R>=0?(et=Z*w+F<<2,H=(R+Z)*S+O+F<<2):(et=(-R+Z)*w-O+F<<2,H=Z*S+F<<2),Q==0)k[H]=C[et],k[H+1]=C[et+1],k[H+2]=C[et+2],k[H+3]=C[et+3];else if(Q==1){var W=C[et+3]*.00392156862745098,B=C[et]*W,y=C[et+1]*W,z=C[et+2]*W,U=k[H+3]*(1/255),G=k[H]*U,$=k[H+1]*U,q=k[H+2]*U;const j=1-W,st=W+U*j,X=st==0?0:1/st;k[H+3]=255*st,k[H+0]=(B+G*j)*X,k[H+1]=(y+$*j)*X,k[H+2]=(z+q*j)*X}else if(Q==2)W=C[et+3],B=C[et],y=C[et+1],z=C[et+2],U=k[H+3],G=k[H],$=k[H+1],q=k[H+2],W==U&&B==G&&y==$&&z==q?(k[H]=0,k[H+1]=0,k[H+2]=0,k[H+3]=0):(k[H]=B,k[H+1]=y,k[H+2]=z,k[H+3]=W);else if(Q==3){if(W=C[et+3],B=C[et],y=C[et+1],z=C[et+2],U=k[H+3],G=k[H],$=k[H+1],q=k[H+2],W==U&&B==G&&y==$&&z==q)continue;if(W<220&&U>20)return!1}return!0}return{decode:function(w){const g=new Uint8Array(w);let k=8;const S=u,N=S.readUshort,O=S.readUint,R={tabs:{},frames:[]},Q=new Uint8Array(g.length);let Y,K=0,et=0;const H=[137,80,78,71,13,10,26,10];for(var W=0;W<8;W++)if(g[W]!=H[W])throw"The input is not a PNG file!";for(;k<g.length;){const Z=S.readUint(g,k);k+=4;const F=S.readASCII(g,k,4);if(k+=4,F=="IHDR")p(g,k,R);else if(F=="iCCP"){for(var B=k;g[B]!=0;)B++;S.readASCII(g,k,B-k),g[B+1];const j=g.slice(B+2,k+Z);let st=null;try{st=x(j)}catch{st=b(j)}R.tabs[F]=st}else if(F=="CgBI")R.tabs[F]=g.slice(k,k+4);else if(F=="IDAT"){for(W=0;W<Z;W++)Q[K+W]=g[k+W];K+=Z}else if(F=="acTL")R.tabs[F]={num_frames:O(g,k),num_plays:O(g,k+4)},Y=new Uint8Array(g.length);else if(F=="fcTL"){et!=0&&((q=R.frames[R.frames.length-1]).data=T(R,Y.slice(0,et),q.rect.width,q.rect.height),et=0);const j={x:O(g,k+12),y:O(g,k+16),width:O(g,k+4),height:O(g,k+8)};let st=N(g,k+22);st=N(g,k+20)/(st==0?100:st);const X={rect:j,delay:Math.round(1e3*st),dispose:g[k+24],blend:g[k+25]};R.frames.push(X)}else if(F=="fdAT"){for(W=0;W<Z-4;W++)Y[et+W]=g[k+W+4];et+=Z-4}else if(F=="pHYs")R.tabs[F]=[S.readUint(g,k),S.readUint(g,k+4),g[k+8]];else if(F=="cHRM")for(R.tabs[F]=[],W=0;W<8;W++)R.tabs[F].push(S.readUint(g,k+4*W));else if(F=="tEXt"||F=="zTXt"){R.tabs[F]==null&&(R.tabs[F]={});var y=S.nextZero(g,k),z=S.readASCII(g,k,y-k),U=k+Z-y-1;if(F=="tEXt")$=S.readASCII(g,y+1,U);else{var G=x(g.slice(y+2,y+2+U));$=S.readUTF8(G,0,G.length)}R.tabs[F][z]=$}else if(F=="iTXt"){R.tabs[F]==null&&(R.tabs[F]={}),y=0,B=k,y=S.nextZero(g,B),z=S.readASCII(g,B,y-B);const j=g[B=y+1];var $;g[B+1],B+=2,y=S.nextZero(g,B),S.readASCII(g,B,y-B),B=y+1,y=S.nextZero(g,B),S.readUTF8(g,B,y-B),U=Z-((B=y+1)-k),j==0?$=S.readUTF8(g,B,U):(G=x(g.slice(B,B+U)),$=S.readUTF8(G,0,G.length)),R.tabs[F][z]=$}else if(F=="PLTE")R.tabs[F]=S.readBytes(g,k,Z);else if(F=="hIST"){const j=R.tabs.PLTE.length/3;for(R.tabs[F]=[],W=0;W<j;W++)R.tabs[F].push(N(g,k+2*W))}else if(F=="tRNS")R.ctype==3?R.tabs[F]=S.readBytes(g,k,Z):R.ctype==0?R.tabs[F]=N(g,k):R.ctype==2&&(R.tabs[F]=[N(g,k),N(g,k+2),N(g,k+4)]);else if(F=="gAMA")R.tabs[F]=S.readUint(g,k)/1e5;else if(F=="sRGB")R.tabs[F]=g[k];else if(F=="bKGD")R.ctype==0||R.ctype==4?R.tabs[F]=[N(g,k)]:R.ctype==2||R.ctype==6?R.tabs[F]=[N(g,k),N(g,k+2),N(g,k+4)]:R.ctype==3&&(R.tabs[F]=g[k]);else if(F=="IEND")break;k+=Z,S.readUint(g,k),k+=4}var q;return et!=0&&((q=R.frames[R.frames.length-1]).data=T(R,Y.slice(0,et),q.rect.width,q.rect.height)),R.data=T(R,Q,R.width,R.height),delete R.compress,delete R.interlace,delete R.filter,R},toRGBA8:function(w){const g=w.width,k=w.height;if(w.tabs.acTL==null)return[m(w.data,g,k,w).buffer];const S=[];w.frames[0].data==null&&(w.frames[0].data=w.data);const N=g*k*4,O=new Uint8Array(N),R=new Uint8Array(N),Q=new Uint8Array(N);for(let K=0;K<w.frames.length;K++){const et=w.frames[K],H=et.rect.x,W=et.rect.y,B=et.rect.width,y=et.rect.height,z=m(et.data,B,y,w);if(K!=0)for(var Y=0;Y<N;Y++)Q[Y]=O[Y];if(et.blend==0?I(z,B,y,O,g,k,H,W,0):et.blend==1&&I(z,B,y,O,g,k,H,W,1),S.push(O.buffer.slice(0)),et.dispose!=0){if(et.dispose==1)I(R,B,y,O,g,k,H,W,0);else if(et.dispose==2)for(Y=0;Y<N;Y++)O[Y]=Q[Y]}}return S},_paeth:v,_copyTile:I,_bin:u}}();(function(){const{_copyTile:u}=po,{_bin:m}=po,T=po._paeth;var x={table:function(){const B=new Uint32Array(256);for(let y=0;y<256;y++){let z=y;for(let U=0;U<8;U++)1&z?z=3988292384^z>>>1:z>>>=1;B[y]=z}return B}(),update(B,y,z,U){for(let G=0;G<U;G++)B=x.table[255&(B^y[z+G])]^B>>>8;return B},crc:(B,y,z)=>4294967295^x.update(4294967295,B,y,z)};function b(B,y,z,U){y[z]+=B[0]*U>>4,y[z+1]+=B[1]*U>>4,y[z+2]+=B[2]*U>>4,y[z+3]+=B[3]*U>>4}function D(B){return Math.max(0,Math.min(255,B))}function _(B,y){const z=B[0]-y[0],U=B[1]-y[1],G=B[2]-y[2],$=B[3]-y[3];return z*z+U*U+G*G+$*$}function v(B,y,z,U,G,$,q){q==null&&(q=1);const Z=U.length,F=[];for(var j=0;j<Z;j++){const ct=U[j];F.push([ct>>>0&255,ct>>>8&255,ct>>>16&255,ct>>>24&255])}for(j=0;j<Z;j++){let ct=4294967295;for(var st=0,X=0;X<Z;X++){var nt=_(F[j],F[X]);X!=j&&nt<ct&&(ct=nt,st=X)}}const ft=new Uint32Array(G.buffer),ht=new Int16Array(y*z*4),vt=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];for(j=0;j<vt.length;j++)vt[j]=255*((vt[j]+.5)/16-.5);for(let ct=0;ct<z;ct++)for(let Nt=0;Nt<y;Nt++){var dt;j=4*(ct*y+Nt),q!=2?dt=[D(B[j]+ht[j]),D(B[j+1]+ht[j+1]),D(B[j+2]+ht[j+2]),D(B[j+3]+ht[j+3])]:(nt=vt[4*(3&ct)+(3&Nt)],dt=[D(B[j]+nt),D(B[j+1]+nt),D(B[j+2]+nt),D(B[j+3]+nt)]),st=0;let Jt=16777215;for(X=0;X<Z;X++){const Xt=_(dt,F[X]);Xt<Jt&&(Jt=Xt,st=X)}const It=F[st],Pt=[dt[0]-It[0],dt[1]-It[1],dt[2]-It[2],dt[3]-It[3]];q==1&&(Nt!=y-1&&b(Pt,ht,j+4,7),ct!=z-1&&(Nt!=0&&b(Pt,ht,j+4*y-4,3),b(Pt,ht,j+4*y,5),Nt!=y-1&&b(Pt,ht,j+4*y+4,1))),$[j>>2]=st,ft[j>>2]=U[st]}}function p(B,y,z,U,G){G==null&&(G={});const{crc:$}=x,q=m.writeUint,Z=m.writeUshort,F=m.writeASCII;let j=8;const st=B.frames.length>1;let X,nt=!1,ft=33+(st?20:0);if(G.sRGB!=null&&(ft+=13),G.pHYs!=null&&(ft+=21),G.iCCP!=null&&(X=pako.deflate(G.iCCP),ft+=21+X.length+4),B.ctype==3){for(var ht=B.plte.length,vt=0;vt<ht;vt++)B.plte[vt]>>>24!=255&&(nt=!0);ft+=8+3*ht+4+(nt?8+1*ht+4:0)}for(var dt=0;dt<B.frames.length;dt++)st&&(ft+=38),ft+=(It=B.frames[dt]).cimg.length+12,dt!=0&&(ft+=4);ft+=12;const ct=new Uint8Array(ft),Nt=[137,80,78,71,13,10,26,10];for(vt=0;vt<8;vt++)ct[vt]=Nt[vt];if(q(ct,j,13),j+=4,F(ct,j,"IHDR"),j+=4,q(ct,j,y),j+=4,q(ct,j,z),j+=4,ct[j]=B.depth,j++,ct[j]=B.ctype,j++,ct[j]=0,j++,ct[j]=0,j++,ct[j]=0,j++,q(ct,j,$(ct,j-17,17)),j+=4,G.sRGB!=null&&(q(ct,j,1),j+=4,F(ct,j,"sRGB"),j+=4,ct[j]=G.sRGB,j++,q(ct,j,$(ct,j-5,5)),j+=4),G.iCCP!=null){const Pt=13+X.length;q(ct,j,Pt),j+=4,F(ct,j,"iCCP"),j+=4,F(ct,j,"ICC profile"),j+=11,j+=2,ct.set(X,j),j+=X.length,q(ct,j,$(ct,j-(Pt+4),Pt+4)),j+=4}if(G.pHYs!=null&&(q(ct,j,9),j+=4,F(ct,j,"pHYs"),j+=4,q(ct,j,G.pHYs[0]),j+=4,q(ct,j,G.pHYs[1]),j+=4,ct[j]=G.pHYs[2],j++,q(ct,j,$(ct,j-13,13)),j+=4),st&&(q(ct,j,8),j+=4,F(ct,j,"acTL"),j+=4,q(ct,j,B.frames.length),j+=4,q(ct,j,G.loop!=null?G.loop:0),j+=4,q(ct,j,$(ct,j-12,12)),j+=4),B.ctype==3){for(q(ct,j,3*(ht=B.plte.length)),j+=4,F(ct,j,"PLTE"),j+=4,vt=0;vt<ht;vt++){const Pt=3*vt,Xt=B.plte[vt],Yt=255&Xt,xt=Xt>>>8&255,Ut=Xt>>>16&255;ct[j+Pt+0]=Yt,ct[j+Pt+1]=xt,ct[j+Pt+2]=Ut}if(j+=3*ht,q(ct,j,$(ct,j-3*ht-4,3*ht+4)),j+=4,nt){for(q(ct,j,ht),j+=4,F(ct,j,"tRNS"),j+=4,vt=0;vt<ht;vt++)ct[j+vt]=B.plte[vt]>>>24&255;j+=ht,q(ct,j,$(ct,j-ht-4,ht+4)),j+=4}}let Jt=0;for(dt=0;dt<B.frames.length;dt++){var It=B.frames[dt];st&&(q(ct,j,26),j+=4,F(ct,j,"fcTL"),j+=4,q(ct,j,Jt++),j+=4,q(ct,j,It.rect.width),j+=4,q(ct,j,It.rect.height),j+=4,q(ct,j,It.rect.x),j+=4,q(ct,j,It.rect.y),j+=4,Z(ct,j,U[dt]),j+=2,Z(ct,j,1e3),j+=2,ct[j]=It.dispose,j++,ct[j]=It.blend,j++,q(ct,j,$(ct,j-30,30)),j+=4);const Pt=It.cimg;q(ct,j,(ht=Pt.length)+(dt==0?0:4)),j+=4;const Xt=j;F(ct,j,dt==0?"IDAT":"fdAT"),j+=4,dt!=0&&(q(ct,j,Jt++),j+=4),ct.set(Pt,j),j+=ht,q(ct,j,$(ct,Xt,j-Xt)),j+=4}return q(ct,j,0),j+=4,F(ct,j,"IEND"),j+=4,q(ct,j,$(ct,j-4,4)),j+=4,ct.buffer}function I(B,y,z){for(let U=0;U<B.frames.length;U++){const G=B.frames[U];G.rect.width;const $=G.rect.height,q=new Uint8Array($*G.bpl+$);G.cimg=k(G.img,$,G.bpp,G.bpl,q,y,z)}}function C(B,y,z,U,G){const $=G[0],q=G[1],Z=G[2],F=G[3],j=G[4],st=G[5];let X=6,nt=8,ft=255;for(var ht=0;ht<B.length;ht++){const te=new Uint8Array(B[ht]);for(var vt=te.length,dt=0;dt<vt;dt+=4)ft&=te[dt+3]}const ct=ft!=255,Nt=function(Lt,Gt,Ht,Kt,$t,ee){const Et=[];for(var Dt=0;Dt<Lt.length;Dt++){const Se=new Uint8Array(Lt[Dt]),Fe=new Uint32Array(Se.buffer);var ue;let ye=0,Me=0,Ne=Gt,pn=Ht,zn=Kt?1:0;if(Dt!=0){const _n=ee||Kt||Dt==1||Et[Dt-2].dispose!=0?1:2;let xe=0,Ke=1e9;for(let Fn=0;Fn<_n;Fn++){var rn=new Uint8Array(Lt[Dt-1-Fn]);const ie=new Uint32Array(Lt[Dt-1-Fn]);let Be=Gt,We=Ht,Vn=-1,Un=-1;for(let Cn=0;Cn<Ht;Cn++)for(let vn=0;vn<Gt;vn++)Fe[se=Cn*Gt+vn]!=ie[se]&&(vn<Be&&(Be=vn),vn>Vn&&(Vn=vn),Cn<We&&(We=Cn),Cn>Un&&(Un=Cn));Vn==-1&&(Be=We=Vn=Un=0),$t&&((1&Be)==1&&Be--,(1&We)==1&&We--);const eo=(Vn-Be+1)*(Un-We+1);eo<Ke&&(Ke=eo,xe=Fn,ye=Be,Me=We,Ne=Vn-Be+1,pn=Un-We+1)}rn=new Uint8Array(Lt[Dt-1-xe]),xe==1&&(Et[Dt-1].dispose=2),ue=new Uint8Array(Ne*pn*4),u(rn,Gt,Ht,ue,Ne,pn,-ye,-Me,0),zn=u(Se,Gt,Ht,ue,Ne,pn,-ye,-Me,3)?1:0,zn==1?g(Se,Gt,Ht,ue,{x:ye,y:Me,width:Ne,height:pn}):u(Se,Gt,Ht,ue,Ne,pn,-ye,-Me,0)}else ue=Se.slice(0);Et.push({rect:{x:ye,y:Me,width:Ne,height:pn},img:ue,blend:zn,dispose:0})}if(Kt)for(Dt=0;Dt<Et.length;Dt++){if((Je=Et[Dt]).blend==1)continue;const Se=Je.rect,Fe=Et[Dt-1].rect,ye=Math.min(Se.x,Fe.x),Me=Math.min(Se.y,Fe.y),Ne={x:ye,y:Me,width:Math.max(Se.x+Se.width,Fe.x+Fe.width)-ye,height:Math.max(Se.y+Se.height,Fe.y+Fe.height)-Me};Et[Dt-1].dispose=1,Dt-1!=0&&w(Lt,Gt,Ht,Et,Dt-1,Ne,$t),w(Lt,Gt,Ht,Et,Dt,Ne,$t)}let Ie=0;if(Lt.length!=1)for(var se=0;se<Et.length;se++){var Je;Ie+=(Je=Et[se]).rect.width*Je.rect.height}return Et}(B,y,z,$,q,Z),Jt={},It=[],Pt=[];if(U!=0){const te=[];for(dt=0;dt<Nt.length;dt++)te.push(Nt[dt].img.buffer);const Lt=function($t){let ee=0;for(var Et=0;Et<$t.length;Et++)ee+=$t[Et].byteLength;const Dt=new Uint8Array(ee);let ue=0;for(Et=0;Et<$t.length;Et++){const rn=new Uint8Array($t[Et]),Ie=rn.length;for(let se=0;se<Ie;se+=4){let Je=rn[se],Se=rn[se+1],Fe=rn[se+2];const ye=rn[se+3];ye==0&&(Je=Se=Fe=0),Dt[ue+se]=Je,Dt[ue+se+1]=Se,Dt[ue+se+2]=Fe,Dt[ue+se+3]=ye}ue+=Ie}return Dt.buffer}(te),Gt=N(Lt,U);for(dt=0;dt<Gt.plte.length;dt++)It.push(Gt.plte[dt].est.rgba);let Ht=0;for(dt=0;dt<Nt.length;dt++){const Kt=(Yt=Nt[dt]).img.length;var Xt=new Uint8Array(Gt.inds.buffer,Ht>>2,Kt>>2);Pt.push(Xt);const $t=new Uint8Array(Gt.abuf,Ht,Kt);st&&v(Yt.img,Yt.rect.width,Yt.rect.height,It,$t,Xt),Yt.img.set($t),Ht+=Kt}}else for(ht=0;ht<Nt.length;ht++){var Yt=Nt[ht];const te=new Uint32Array(Yt.img.buffer);var xt=Yt.rect.width;for(vt=te.length,Xt=new Uint8Array(vt),Pt.push(Xt),dt=0;dt<vt;dt++){const Lt=te[dt];if(dt!=0&&Lt==te[dt-1])Xt[dt]=Xt[dt-1];else if(dt>xt&&Lt==te[dt-xt])Xt[dt]=Xt[dt-xt];else{let Gt=Jt[Lt];if(Gt==null&&(Jt[Lt]=Gt=It.length,It.push(Lt),It.length>=300))break;Xt[dt]=Gt}}}const Ut=It.length;for(Ut<=256&&j==0&&(nt=Ut<=2?1:Ut<=4?2:Ut<=16?4:8,nt=Math.max(nt,F)),ht=0;ht<Nt.length;ht++){(Yt=Nt[ht]).rect.x,Yt.rect.y,xt=Yt.rect.width;const te=Yt.rect.height;let Lt=Yt.img;new Uint32Array(Lt.buffer);let Gt=4*xt,Ht=4;if(Ut<=256&&j==0){Gt=Math.ceil(nt*xt/8);var Rt=new Uint8Array(Gt*te);const Kt=Pt[ht];for(let $t=0;$t<te;$t++){dt=$t*Gt;const ee=$t*xt;if(nt==8)for(var Ct=0;Ct<xt;Ct++)Rt[dt+Ct]=Kt[ee+Ct];else if(nt==4)for(Ct=0;Ct<xt;Ct++)Rt[dt+(Ct>>1)]|=Kt[ee+Ct]<<4-4*(1&Ct);else if(nt==2)for(Ct=0;Ct<xt;Ct++)Rt[dt+(Ct>>2)]|=Kt[ee+Ct]<<6-2*(3&Ct);else if(nt==1)for(Ct=0;Ct<xt;Ct++)Rt[dt+(Ct>>3)]|=Kt[ee+Ct]<<7-1*(7&Ct)}Lt=Rt,X=3,Ht=1}else if(ct==0&&Nt.length==1){Rt=new Uint8Array(xt*te*3);const Kt=xt*te;for(dt=0;dt<Kt;dt++){const $t=3*dt,ee=4*dt;Rt[$t]=Lt[ee],Rt[$t+1]=Lt[ee+1],Rt[$t+2]=Lt[ee+2]}Lt=Rt,X=2,Ht=3,Gt=3*xt}Yt.img=Lt,Yt.bpl=Gt,Yt.bpp=Ht}return{ctype:X,depth:nt,plte:It,frames:Nt}}function w(B,y,z,U,G,$,q){const Z=Uint8Array,F=Uint32Array,j=new Z(B[G-1]),st=new F(B[G-1]),X=G+1<B.length?new Z(B[G+1]):null,nt=new Z(B[G]),ft=new F(nt.buffer);let ht=y,vt=z,dt=-1,ct=-1;for(let Jt=0;Jt<$.height;Jt++)for(let It=0;It<$.width;It++){const Pt=$.x+It,Xt=$.y+Jt,Yt=Xt*y+Pt,xt=ft[Yt];xt==0||U[G-1].dispose==0&&st[Yt]==xt&&(X==null||X[4*Yt+3]!=0)||(Pt<ht&&(ht=Pt),Pt>dt&&(dt=Pt),Xt<vt&&(vt=Xt),Xt>ct&&(ct=Xt))}dt==-1&&(ht=vt=dt=ct=0),q&&((1&ht)==1&&ht--,(1&vt)==1&&vt--),$={x:ht,y:vt,width:dt-ht+1,height:ct-vt+1};const Nt=U[G];Nt.rect=$,Nt.blend=1,Nt.img=new Uint8Array($.width*$.height*4),U[G-1].dispose==0?(u(j,y,z,Nt.img,$.width,$.height,-$.x,-$.y,0),g(nt,y,z,Nt.img,$)):u(nt,y,z,Nt.img,$.width,$.height,-$.x,-$.y,0)}function g(B,y,z,U,G){u(B,y,z,U,G.width,G.height,-G.x,-G.y,2)}function k(B,y,z,U,G,$,q){const Z=[];let F,j=[0,1,2,3,4];$!=-1?j=[$]:(y*U>5e5||z==1)&&(j=[0]),q&&(F={level:0});const st=dB;for(var X=0;X<j.length;X++){for(let ht=0;ht<y;ht++)S(G,B,ht,U,z,j[X]);Z.push(st.deflate(G,F))}let nt,ft=1e9;for(X=0;X<Z.length;X++)Z[X].length<ft&&(nt=X,ft=Z[X].length);return Z[nt]}function S(B,y,z,U,G,$){const q=z*U;let Z=q+z;if(B[Z]=$,Z++,$==0)if(U<500)for(var F=0;F<U;F++)B[Z+F]=y[q+F];else B.set(new Uint8Array(y.buffer,q,U),Z);else if($==1){for(F=0;F<G;F++)B[Z+F]=y[q+F];for(F=G;F<U;F++)B[Z+F]=y[q+F]-y[q+F-G]+256&255}else if(z==0){for(F=0;F<G;F++)B[Z+F]=y[q+F];if($==2)for(F=G;F<U;F++)B[Z+F]=y[q+F];if($==3)for(F=G;F<U;F++)B[Z+F]=y[q+F]-(y[q+F-G]>>1)+256&255;if($==4)for(F=G;F<U;F++)B[Z+F]=y[q+F]-T(y[q+F-G],0,0)+256&255}else{if($==2)for(F=0;F<U;F++)B[Z+F]=y[q+F]+256-y[q+F-U]&255;if($==3){for(F=0;F<G;F++)B[Z+F]=y[q+F]+256-(y[q+F-U]>>1)&255;for(F=G;F<U;F++)B[Z+F]=y[q+F]+256-(y[q+F-U]+y[q+F-G]>>1)&255}if($==4){for(F=0;F<G;F++)B[Z+F]=y[q+F]+256-T(0,y[q+F-U],0)&255;for(F=G;F<U;F++)B[Z+F]=y[q+F]+256-T(y[q+F-G],y[q+F-U],y[q+F-G-U])&255}}}function N(B,y){const z=new Uint8Array(B),U=z.slice(0),G=new Uint32Array(U.buffer),$=O(U,y),q=$[0],Z=$[1],F=z.length,j=new Uint8Array(F>>2);let st;if(z.length<2e7)for(var X=0;X<F;X+=4)st=R(q,nt=z[X]*(1/255),ft=z[X+1]*(1/255),ht=z[X+2]*(1/255),vt=z[X+3]*(1/255)),j[X>>2]=st.ind,G[X>>2]=st.est.rgba;else for(X=0;X<F;X+=4){var nt=z[X]*.00392156862745098,ft=z[X+1]*(1/255),ht=z[X+2]*(1/255),vt=z[X+3]*(1/255);for(st=q;st.left;)st=Q(st.est,nt,ft,ht,vt)<=0?st.left:st.right;j[X>>2]=st.ind,G[X>>2]=st.est.rgba}return{abuf:U.buffer,inds:j,plte:Z}}function O(B,y,z){z==null&&(z=1e-4);const U=new Uint32Array(B.buffer),G={i0:0,i1:B.length,bst:null,est:null,tdst:0,left:null,right:null};G.bst=et(B,G.i0,G.i1),G.est=H(G.bst);const $=[G];for(;$.length<y;){let Z=0,F=0;for(var q=0;q<$.length;q++)$[q].est.L>Z&&(Z=$[q].est.L,F=q);if(Z<z)break;const j=$[F],st=Y(B,U,j.i0,j.i1,j.est.e,j.est.eMq255);if(j.i0>=st||j.i1<=st){j.est.L=0;continue}const X={i0:j.i0,i1:st,bst:null,est:null,tdst:0,left:null,right:null};X.bst=et(B,X.i0,X.i1),X.est=H(X.bst);const nt={i0:st,i1:j.i1,bst:null,est:null,tdst:0,left:null,right:null};for(nt.bst={R:[],m:[],N:j.bst.N-X.bst.N},q=0;q<16;q++)nt.bst.R[q]=j.bst.R[q]-X.bst.R[q];for(q=0;q<4;q++)nt.bst.m[q]=j.bst.m[q]-X.bst.m[q];nt.est=H(nt.bst),j.left=X,j.right=nt,$[F]=X,$.push(nt)}for($.sort((Z,F)=>F.bst.N-Z.bst.N),q=0;q<$.length;q++)$[q].ind=q;return[G,$]}function R(B,y,z,U,G){if(B.left==null)return B.tdst=function(X,nt,ft,ht,vt){const dt=nt-X[0],ct=ft-X[1],Nt=ht-X[2],Jt=vt-X[3];return dt*dt+ct*ct+Nt*Nt+Jt*Jt}(B.est.q,y,z,U,G),B;const $=Q(B.est,y,z,U,G);let q=B.left,Z=B.right;$>0&&(q=B.right,Z=B.left);const F=R(q,y,z,U,G);if(F.tdst<=$*$)return F;const j=R(Z,y,z,U,G);return j.tdst<F.tdst?j:F}function Q(B,y,z,U,G){const{e:$}=B;return $[0]*y+$[1]*z+$[2]*U+$[3]*G-B.eMq}function Y(B,y,z,U,G,$){for(U-=4;z<U;){for(;K(B,z,G)<=$;)z+=4;for(;K(B,U,G)>$;)U-=4;if(z>=U)break;const q=y[z>>2];y[z>>2]=y[U>>2],y[U>>2]=q,z+=4,U-=4}for(;K(B,z,G)>$;)z-=4;return z+4}function K(B,y,z){return B[y]*z[0]+B[y+1]*z[1]+B[y+2]*z[2]+B[y+3]*z[3]}function et(B,y,z){const U=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],G=[0,0,0,0],$=z-y>>2;for(let q=y;q<z;q+=4){const Z=B[q]*.00392156862745098,F=B[q+1]*(1/255),j=B[q+2]*(1/255),st=B[q+3]*(1/255);G[0]+=Z,G[1]+=F,G[2]+=j,G[3]+=st,U[0]+=Z*Z,U[1]+=Z*F,U[2]+=Z*j,U[3]+=Z*st,U[5]+=F*F,U[6]+=F*j,U[7]+=F*st,U[10]+=j*j,U[11]+=j*st,U[15]+=st*st}return U[4]=U[1],U[8]=U[2],U[9]=U[6],U[12]=U[3],U[13]=U[7],U[14]=U[11],{R:U,m:G,N:$}}function H(B){const{R:y}=B,{m:z}=B,{N:U}=B,G=z[0],$=z[1],q=z[2],Z=z[3],F=U==0?0:1/U,j=[y[0]-G*G*F,y[1]-G*$*F,y[2]-G*q*F,y[3]-G*Z*F,y[4]-$*G*F,y[5]-$*$*F,y[6]-$*q*F,y[7]-$*Z*F,y[8]-q*G*F,y[9]-q*$*F,y[10]-q*q*F,y[11]-q*Z*F,y[12]-Z*G*F,y[13]-Z*$*F,y[14]-Z*q*F,y[15]-Z*Z*F],st=j,X=W;let nt=[Math.random(),Math.random(),Math.random(),Math.random()],ft=0,ht=0;if(U!=0)for(let dt=0;dt<16&&(nt=X.multVec(st,nt),ht=Math.sqrt(X.dot(nt,nt)),nt=X.sml(1/ht,nt),!(dt!=0&&Math.abs(ht-ft)<1e-9));dt++)ft=ht;const vt=[G*F,$*F,q*F,Z*F];return{Cov:j,q:vt,e:nt,L:ft,eMq255:X.dot(X.sml(255,vt),nt),eMq:X.dot(nt,vt),rgba:(Math.round(255*vt[3])<<24|Math.round(255*vt[2])<<16|Math.round(255*vt[1])<<8|Math.round(255*vt[0])<<0)>>>0}}var W={multVec:(B,y)=>[B[0]*y[0]+B[1]*y[1]+B[2]*y[2]+B[3]*y[3],B[4]*y[0]+B[5]*y[1]+B[6]*y[2]+B[7]*y[3],B[8]*y[0]+B[9]*y[1]+B[10]*y[2]+B[11]*y[3],B[12]*y[0]+B[13]*y[1]+B[14]*y[2]+B[15]*y[3]],dot:(B,y)=>B[0]*y[0]+B[1]*y[1]+B[2]*y[2]+B[3]*y[3],sml:(B,y)=>[B*y[0],B*y[1],B*y[2],B*y[3]]};po.encode=function(y,z,U,G,$,q,Z){G==null&&(G=0),Z==null&&(Z=!1);const F=C(y,z,U,G,[!1,!1,!1,0,Z,!1]);return I(F,-1),p(F,z,U,$,q)},po.encodeLL=function(y,z,U,G,$,q,Z,F){const j={ctype:0+(G==1?0:2)+($==0?0:4),depth:q,frames:[]},st=(G+$)*q,X=st*z;for(let nt=0;nt<y.length;nt++)j.frames.push({rect:{x:0,y:0,width:z,height:U},img:new Uint8Array(y[nt]),blend:0,dispose:1,bpp:Math.ceil(st/8),bpl:Math.ceil(X/8)});return I(j,0,!0),p(j,z,U,Z,F)},po.encode.compress=C,po.encode.dither=v,po.quantize=N,po.quantize.getKDtree=O,po.quantize.getNearest=R})();const m_={toArrayBuffer(u,m){const T=u.width,x=u.height,b=T<<2,D=u.getContext("2d").getImageData(0,0,T,x),_=new Uint32Array(D.data.buffer),v=(32*T+31)/32<<2,p=v*x,I=122+p,C=new ArrayBuffer(I),w=new DataView(C),g=1<<20;let k,S,N,O,R=g,Q=0,Y=0,K=0;function et(B){w.setUint16(Y,B,!0),Y+=2}function H(B){w.setUint32(Y,B,!0),Y+=4}function W(B){Y+=B}et(19778),H(I),W(4),H(122),H(108),H(T),H(-x>>>0),et(1),et(32),H(3),H(p),H(2835),H(2835),W(8),H(16711680),H(65280),H(255),H(4278190080),H(1466527264),function B(){for(;Q<x&&R>0;){for(O=122+Q*v,k=0;k<b;)R--,S=_[K++],N=S>>>24,w.setUint32(O+k,S<<8|N),k+=4;Q++}K<_.length?(R=g,setTimeout(B,m_._dly)):m(C)}()},toBlob(u,m){this.toArrayBuffer(u,T=>{m(new Blob([T],{type:"image/bmp"}))})},_dly:9};var Sn={CHROME:"CHROME",FIREFOX:"FIREFOX",DESKTOP_SAFARI:"DESKTOP_SAFARI",IE:"IE",IOS:"IOS",ETC:"ETC"},uB={[Sn.CHROME]:16384,[Sn.FIREFOX]:11180,[Sn.DESKTOP_SAFARI]:16384,[Sn.IE]:8192,[Sn.IOS]:4096,[Sn.ETC]:8192};const Zd=typeof window<"u",f_=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,rc=Zd&&window.cordova&&window.cordova.require&&window.cordova.require("cordova/modulemapper"),hB=(Zd||f_)&&(rc&&rc.getOriginalSymbol(window,"File")||typeof File<"u"&&File),k_=(Zd||f_)&&(rc&&rc.getOriginalSymbol(window,"FileReader")||typeof FileReader<"u"&&FileReader);function Jd(u,m,T=Date.now()){return new Promise(x=>{const b=u.split(","),D=b[0].match(/:(.*?);/)[1],_=globalThis.atob(b[1]);let v=_.length;const p=new Uint8Array(v);for(;v--;)p[v]=_.charCodeAt(v);const I=new Blob([p],{type:D});I.name=m,I.lastModified=T,x(I)})}function b_(u){return new Promise((m,T)=>{const x=new k_;x.onload=()=>m(x.result),x.onerror=b=>T(b),x.readAsDataURL(u)})}function w_(u){return new Promise((m,T)=>{const x=new Image;x.onload=()=>m(x),x.onerror=b=>T(b),x.src=u})}function Ei(){if(Ei.cachedResult!==void 0)return Ei.cachedResult;let u=Sn.ETC;const{userAgent:m}=navigator;return/Chrom(e|ium)/i.test(m)?u=Sn.CHROME:/iP(ad|od|hone)/i.test(m)&&/WebKit/i.test(m)?u=Sn.IOS:/Safari/i.test(m)?u=Sn.DESKTOP_SAFARI:/Firefox/i.test(m)?u=Sn.FIREFOX:(/MSIE/i.test(m)||document.documentMode)&&(u=Sn.IE),Ei.cachedResult=u,Ei.cachedResult}function A_(u,m){const T=Ei(),x=uB[T];let b=u,D=m,_=b*D;const v=b>D?D/b:b/D;for(;_>x*x;){const p=(x+b)/2,I=(x+D)/2;p<I?(D=I,b=I*v):(D=p*v,b=p),_=b*D}return{width:b,height:D}}function uc(u,m){let T,x;try{if(T=new OffscreenCanvas(u,m),x=T.getContext("2d"),x===null)throw new Error("getContext of OffscreenCanvas returns null")}catch{T=document.createElement("canvas"),x=T.getContext("2d")}return T.width=u,T.height=m,[T,x]}function __(u,m){const{width:T,height:x}=A_(u.width,u.height),[b,D]=uc(T,x);return m&&/jpe?g/.test(m)&&(D.fillStyle="white",D.fillRect(0,0,b.width,b.height)),D.drawImage(u,0,0,b.width,b.height),b}function Ka(){return Ka.cachedResult!==void 0||(Ka.cachedResult=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&typeof document<"u"&&"ontouchend"in document),Ka.cachedResult}function sc(u,m={}){return new Promise(function(T,x){let b,D;var _=function(){try{return D=__(b,m.fileType||u.type),T([b,D])}catch(p){return x(p)}},v=function(p){try{var I=function(C){try{throw C}catch(w){return x(w)}};try{let C;return b_(u).then(function(w){try{return C=w,w_(C).then(function(g){try{return b=g,function(){try{return _()}catch(k){return x(k)}}()}catch(k){return I(k)}},I)}catch(g){return I(g)}},I)}catch(C){I(C)}}catch(C){return x(C)}};try{if(Ka()||[Sn.DESKTOP_SAFARI,Sn.MOBILE_SAFARI].includes(Ei()))throw new Error("Skip createImageBitmap on IOS and Safari");return createImageBitmap(u).then(function(p){try{return b=p,_()}catch{return v()}},v)}catch{v()}})}function ac(u,m,T,x,b=1){return new Promise(function(D,_){let v;if(m==="image/png"){let I,C,w;return I=u.getContext("2d"),{data:C}=I.getImageData(0,0,u.width,u.height),w=po.encode([C.buffer],u.width,u.height,4096*b),v=new Blob([w],{type:m}),v.name=T,v.lastModified=x,p.call(this)}{let I=function(){return p.call(this)};if(m==="image/bmp")return new Promise(C=>m_.toBlob(u,C)).then((function(C){try{return v=C,v.name=T,v.lastModified=x,I.call(this)}catch(w){return _(w)}}).bind(this),_);{let C=function(){return I.call(this)};if(typeof OffscreenCanvas=="function"&&u instanceof OffscreenCanvas)return u.convertToBlob({type:m,quality:b}).then((function(w){try{return v=w,v.name=T,v.lastModified=x,C.call(this)}catch(g){return _(g)}}).bind(this),_);{let w;return w=u.toDataURL(m,b),Jd(w,T,x).then((function(g){try{return v=g,C.call(this)}catch(k){return _(k)}}).bind(this),_)}}}function p(){return D(v)}})}function vo(u){u.width=0,u.height=0}function gr(){return new Promise(function(u,m){let T,x,b,D;return gr.cachedResult!==void 0?u(gr.cachedResult):Jd("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==","test.jpg",Date.now()).then(function(_){try{return T=_,sc(T).then(function(v){try{return x=v[1],ac(x,T.type,T.name,T.lastModified).then(function(p){try{return b=p,vo(x),sc(b).then(function(I){try{return D=I[0],gr.cachedResult=D.width===1&&D.height===2,u(gr.cachedResult)}catch(C){return m(C)}},m)}catch(I){return m(I)}},m)}catch(p){return m(p)}},m)}catch(v){return m(v)}},m)})}function C_(u){return new Promise((m,T)=>{const x=new k_;x.onload=b=>{const D=new DataView(b.target.result);if(D.getUint16(0,!1)!=65496)return m(-2);const _=D.byteLength;let v=2;for(;v<_;){if(D.getUint16(v+2,!1)<=8)return m(-1);const p=D.getUint16(v,!1);if(v+=2,p==65505){if(D.getUint32(v+=2,!1)!=1165519206)return m(-1);const I=D.getUint16(v+=6,!1)==18761;v+=D.getUint32(v+4,I);const C=D.getUint16(v,I);v+=2;for(let w=0;w<C;w++)if(D.getUint16(v+12*w,I)==274)return m(D.getUint16(v+12*w+8,I))}else{if((65280&p)!=65280)break;v+=D.getUint16(v,!1)}}return m(-1)},x.onerror=b=>T(b),x.readAsArrayBuffer(u)})}function v_(u,m){const{width:T}=u,{height:x}=u,{maxWidthOrHeight:b}=m;let D,_=u;return isFinite(b)&&(T>b||x>b)&&([_,D]=uc(T,x),T>x?(_.width=b,_.height=x/T*b):(_.width=T/x*b,_.height=b),D.drawImage(u,0,0,_.width,_.height),vo(u)),_}function y_(u,m){const{width:T}=u,{height:x}=u,[b,D]=uc(T,x);switch(m>4&&m<9?(b.width=x,b.height=T):(b.width=T,b.height=x),m){case 2:D.transform(-1,0,0,1,T,0);break;case 3:D.transform(-1,0,0,-1,T,x);break;case 4:D.transform(1,0,0,-1,0,x);break;case 5:D.transform(0,1,1,0,0,0);break;case 6:D.transform(0,1,-1,0,x,0);break;case 7:D.transform(0,-1,-1,0,x,T);break;case 8:D.transform(0,-1,1,0,0,T)}return D.drawImage(u,0,0,T,x),vo(u),b}function bA(u,m,T=0){return new Promise(function(x,b){let D,_,v,p,I,C,w,g,k,S,N,O,R,Q,Y,K,et,H,W,B;function y(U=5){if(m.signal&&m.signal.aborted)throw m.signal.reason;D+=U,m.onProgress(Math.min(D,100))}function z(U){if(m.signal&&m.signal.aborted)throw m.signal.reason;D=Math.min(Math.max(U,D),100),m.onProgress(D)}return D=T,_=m.maxIteration||10,v=1024*m.maxSizeMB*1024,y(),sc(u,m).then((function(U){try{return[,p]=U,y(),I=v_(p,m),y(),new Promise(function(G,$){var q;if(!(q=m.exifOrientation))return C_(u).then((function(F){try{return q=F,Z.call(this)}catch(j){return $(j)}}).bind(this),$);function Z(){return G(q)}return Z.call(this)}).then((function(G){try{return C=G,y(),gr().then((function($){try{return w=$?I:y_(I,C),y(),g=m.initialQuality||1,k=m.fileType||u.type,ac(w,k,u.name,u.lastModified,g).then((function(q){try{{let F=function(){if(_--&&(Y>v||Y>R)){let st,X;return st=B?.95*W.width:W.width,X=B?.95*W.height:W.height,[et,H]=uc(st,X),H.drawImage(W,0,0,st,X),g*=k==="image/png"?.85:.95,ac(et,k,u.name,u.lastModified,g).then(function(nt){try{return K=nt,vo(W),W=et,Y=K.size,z(Math.min(99,Math.floor((Q-Y)/(Q-v)*100))),F}catch(ft){return b(ft)}},b)}return[1]},j=function(){return vo(W),vo(et),vo(I),vo(w),vo(p),z(100),x(K)};if(S=q,y(),N=S.size>v,O=S.size>u.size,!N&&!O)return z(100),x(S);var Z;return R=u.size,Q=S.size,Y=Q,W=w,B=!m.alwaysKeepResolution&&N,(Z=(function(st){for(;st;){if(st.then)return void st.then(Z,b);try{if(st.pop){if(st.length)return st.pop()?j.call(this):st;st=F}else st=st.call(this)}catch(X){return b(X)}}}).bind(this))(F)}}catch(F){return b(F)}}).bind(this),b)}catch(q){return b(q)}}).bind(this),b)}catch($){return b($)}}).bind(this),b)}catch(G){return b(G)}}).bind(this),b)})}const gB=`
let scriptImported = false
self.addEventListener('message', async (e) => {
  const { file, id, imageCompressionLibUrl, options } = e.data
  options.onProgress = (progress) => self.postMessage({ progress, id })
  try {
    if (!scriptImported) {
      // console.log('[worker] importScripts', imageCompressionLibUrl)
      self.importScripts(imageCompressionLibUrl)
      scriptImported = true
    }
    // console.log('[worker] self', self)
    const compressedFile = await imageCompression(file, options)
    self.postMessage({ file: compressedFile, id })
  } catch (e) {
    // console.error('[worker] error', e)
    self.postMessage({ error: e.message + '\\n' + e.stack, id })
  }
})
`;let Dd;function pB(u,m){return new Promise((T,x)=>{Dd||(Dd=function(_){const v=[];return v.push(_),URL.createObjectURL(new Blob(v))}(gB));const b=new Worker(Dd);b.addEventListener("message",function(_){if(m.signal&&m.signal.aborted)b.terminate();else if(_.data.progress===void 0){if(_.data.error)return x(new Error(_.data.error)),void b.terminate();T(_.data.file),b.terminate()}else m.onProgress(_.data.progress)}),b.addEventListener("error",x),m.signal&&m.signal.addEventListener("abort",()=>{x(m.signal.reason),b.terminate()}),b.postMessage({file:u,imageCompressionLibUrl:m.libURL,options:{...m,onProgress:void 0,signal:void 0}})})}function fn(u,m){return new Promise(function(T,x){let b,D,_,v,p,I;if(b={...m},_=0,{onProgress:v}=b,b.maxSizeMB=b.maxSizeMB||Number.POSITIVE_INFINITY,p=typeof b.useWebWorker!="boolean"||b.useWebWorker,delete b.useWebWorker,b.onProgress=k=>{_=k,typeof v=="function"&&v(_)},!(u instanceof Blob||u instanceof hB))return x(new Error("The file given is not an instance of Blob or File"));if(!/^image/.test(u.type))return x(new Error("The file given is not an image"));if(I=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope,!p||typeof Worker!="function"||I)return bA(u,b).then((function(k){try{return D=k,g.call(this)}catch(S){return x(S)}}).bind(this),x);var C=(function(){try{return g.call(this)}catch(k){return x(k)}}).bind(this),w=function(k){try{return bA(u,b).then(function(S){try{return D=S,C()}catch(N){return x(N)}},x)}catch(S){return x(S)}};try{return b.libURL=b.libURL||"https://cdn.jsdelivr.net/npm/browser-image-compression@2.0.2/dist/browser-image-compression.js",pB(u,b).then(function(k){try{return D=k,C()}catch{return w()}},w)}catch{w()}function g(){try{D.name=u.name,D.lastModified=u.lastModified}catch{}try{b.preserveExif&&u.type==="image/jpeg"&&(!b.fileType||b.fileType&&b.fileType===u.type)&&(D=p_(u,D))}catch{}return T(D)}})}fn.getDataUrlFromFile=b_,fn.getFilefromDataUrl=Jd,fn.loadImage=w_,fn.drawImageInCanvas=__,fn.drawFileInCanvas=sc,fn.canvasToFile=ac,fn.getExifOrientation=C_,fn.handleMaxWidthOrHeight=v_,fn.followExifOrientation=y_,fn.cleanupCanvasMemory=vo,fn.isAutoOrientationInBrowser=gr,fn.approximateBelowMaximumCanvasSizeOfBrowser=A_,fn.copyExifWithoutOrientation=p_,fn.getBrowserName=Ei,fn.version="2.0.2";var Xd={},mB=Xn;Object.defineProperty(Xd,"__esModule",{value:!0});var x_=Xd.default=void 0,fB=mB(to()),wA=P;x_=Xd.default=(0,fB.default)([(0,wA.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"},"0"),(0,wA.jsx)("path",{d:"M12 10h-2v2H9v-2H7V9h2V7h1v2h2z"},"1")],"ZoomIn");var tu={},kB=Xn;Object.defineProperty(tu,"__esModule",{value:!0});var E_=tu.default=void 0,bB=kB(to()),wB=P;E_=tu.default=(0,bB.default)((0,wB.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14M7 9h5v1H7z"}),"ZoomOut");var eu={},AB=Xn;Object.defineProperty(eu,"__esModule",{value:!0});var D_=eu.default=void 0,_B=AB(to()),CB=P;D_=eu.default=(0,_B.default)((0,CB.jsx)("path",{d:"M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"}),"Fullscreen");var nu={},vB=Xn;Object.defineProperty(nu,"__esModule",{value:!0});var T_=nu.default=void 0,yB=vB(to()),xB=P;T_=nu.default=(0,yB.default)((0,xB.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");var ou={},EB=Xn;Object.defineProperty(ou,"__esModule",{value:!0});var I_=ou.default=void 0,DB=EB(to()),AA=P;I_=ou.default=(0,DB.default)([(0,AA.jsx)("circle",{cx:"12",cy:"12",r:"3.2"},"0"),(0,AA.jsx)("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},"1")],"PhotoCamera");const mr=rt.forwardRef(({path:u,initialImages:m=[],onImagesUpdated:T,onDelete:x},b)=>{const[D,_]=rt.useState(m.map(Z=>({...Z,deleted:!1}))),[v,p]=rt.useState(!1),[I,C]=rt.useState(0),[w,g]=rt.useState(!1),[k,S]=rt.useState(null),[N,O]=rt.useState(1),[R,Q]=rt.useState(!1),[Y,K]=rt.useState(!1),[et,H]=rt.useState(""),[W,B]=rt.useState("info"),y=rt.useRef(null);rt.useEffect(()=>{console.log("Initial images received:",m),_(m.map(Z=>({...Z,deleted:!!Z.deleted})))},[m]);const z=async Z=>{const F=Array.from(Z.target.files);p(!0);const j={maxSizeMB:1,maxWidthOrHeight:1920,useWebWorker:!0},st=F.map(async(X,nt)=>{let ft=X;X.size>1024*1024&&(ft=await fn(X,j),H("Your image was compressed before uploading due to file size larger than 1 MB."),B("info"),K(!0));const vt=`${new Date().getTime()}-${ft.name}`,dt=Xa(),ct=tc(dt,`${u}/${vt}`),Nt=o_(ct,ft);return new Promise((Jt,It)=>{Nt.on("state_changed",Pt=>{const Xt=Pt.bytesTransferred/Pt.totalBytes*100;C(Xt)},Pt=>{console.error("Upload failed:",Pt),It(Pt)},()=>{i_(Nt.snapshot.ref).then(Pt=>{Jt({url:Pt,path:ct.fullPath,title:""})})})})});Promise.all(st).then(X=>{const nt=[...D,...X];_(nt),T&&T(nt),H("Images uploaded successfully."),B("success"),K(!0),p(!1),C(0),y.current.value=""}).catch(X=>{console.error("Error uploading images: ",X),H("Failed to upload images."),B("error"),K(!0),p(!1),C(0)})},U=Z=>{_(F=>{const j=F.map((st,X)=>X===Z?{...st,deleted:!0}:st);return T(j),j}),H("Image marked for deletion. Update to permanently delete."),B("info"),K(!0)},G=async()=>{const Z=D.filter(F=>F.deleted);if(console.log("Attempting to delete images:",Z),Z.length>0){const F=Z.map(j=>{const st=Xa(),X=tc(st,j.path);return r_(X)});try{await Promise.all(F),x(Z),_(j=>j.filter(st=>!st.deleted)),H("Deleted images have been permanently removed."),B("success")}catch(j){console.error("Error committing deletions:",j),H("Failed to commit deletions."),B("error")}K(!0)}else console.log("No images marked for deletion.")},$=Z=>{Q(!R),S(Z)};rt.useEffect(()=>{const Z=()=>{const F=!!document.fullscreenElement;Q(F)};return document.addEventListener("fullscreenchange",Z),()=>document.removeEventListener("fullscreenchange",Z)},[]);const q=(Z,F)=>{F!=="clickaway"&&K(!1)};return rt.useImperativeHandle(b,()=>({commitDeletions:G})),P.jsxs("div",{children:[P.jsx(ws,{title:"Upload Images",children:P.jsxs(dn,{variant:"outlined",component:"label",startIcon:P.jsx(I_,{}),sx:{m:1,pl:2,pr:2},children:["Upload Image(s)",P.jsx("input",{type:"file",hidden:!0,multiple:!0,onChange:z,disabled:v,ref:y,accept:"image/*"})]})}),v&&P.jsxs(P.Fragment,{children:[P.jsxs("p",{children:["Uploading... ",Math.round(I),"%"]}),P.jsx("div",{style:{width:"100%",backgroundColor:"#ddd"},children:P.jsx("div",{style:{height:"20px",width:`${I}%`,backgroundColor:"green"}})})]}),D.filter(Z=>!Z.deleted).map((Z,F)=>P.jsxs("div",{children:[P.jsx("img",{src:Z.url,alt:`Uploaded design ${F}`,onClick:()=>{g(!0),S(F)},style:{width:"100%",maxHeight:"300px",objectFit:"contain",cursor:"pointer"}}),P.jsx(Zn,{onClick:()=>U(F),children:P.jsx(kr,{})}),P.jsx("textarea",{value:Z.title,onChange:j=>{const st=j.target.value;_(X=>{const nt=X.map((ft,ht)=>ht===F?{...ft,title:st}:ft);return T&&T(nt),nt})},placeholder:"Enter image title",rows:"2",style:{width:"100%"}})]},F)),P.jsx(Xo,{open:w,onClose:()=>g(!1),fullScreen:R,PaperProps:{style:{backgroundColor:"white",boxShadow:"none",maxWidth:R?"none":void 0,maxHeight:R?"none":void 0,height:R?"100%":void 0,width:R?"100%":void 0,overflowY:"auto"}},children:k!==null&&P.jsxs(ti,{children:[P.jsx("div",{style:{textAlign:"center"},children:P.jsx("img",{src:D[k].url,alt:`Zoomed Design ${k}`,style:{maxWidth:"100%",maxHeight:R?"100vh":void 0,transform:`scale(${N})`,transition:"transform 0.2s ease-out"}})}),P.jsxs("div",{style:{textAlign:"center",marginTop:"20px"},children:[P.jsx(Zn,{onClick:()=>O(N*1.2),children:P.jsx(x_,{})}),P.jsx(Zn,{onClick:()=>O(N/1.2),style:{marginLeft:"10px"},children:P.jsx(E_,{})}),P.jsx(Zn,{onClick:()=>$(k),style:{marginLeft:"10px"},children:P.jsx(D_,{})}),R&&P.jsx(Zn,{onClick:()=>$(k),style:{position:"absolute",top:20,right:20},children:P.jsx(T_,{})})]})]})}),P.jsx(Fo,{open:Y,autoHideDuration:6e3,onClose:q,children:P.jsx(zo,{onClose:q,severity:W,sx:{width:"100%"},children:et})})]})});var S_={exports:{}};/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class iu{constructor(m){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof m.crashNumberLimit=="number"?m.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof m.minimumNonErrorTimePeriod=="number"?m.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=T=>{const x="error"in T?T.error:T.reason;x instanceof Error&&this._handleError(x,T)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(m,T){this._listeners[m]||(this._listeners[m]=[]),this._listeners[m].push(T)}off(m,T){this._listeners[m]=this._listeners[m].filter(x=>x!==T)}_fire(m,...T){const x=this._listeners[m]||[];for(const b of x)b.apply(this,[null,...T])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(m,T){if(this._shouldReactToError(m)){this.crashes.push({message:m.message,stack:m.stack,filename:T instanceof ErrorEvent?T.filename:void 0,lineno:T instanceof ErrorEvent?T.lineno:void 0,colno:T instanceof ErrorEvent?T.colno:void 0,date:this._now()});const x=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:m,causesRestart:x}),x?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(m){return m.is&&m.is("CKEditorError")&&m.context!==void 0&&m.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(m)}_shouldRestart(){if(this.crashes.length<=this._crashNumberLimit)return!0;const m=this.crashes[this.crashes.length-1].date,T=this.crashes[this.crashes.length-1-this._crashNumberLimit].date;return(m-T)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function Rd(u,m=new Set){const T=[u],x=new Set;let b=0;for(;T.length>b;){const D=T[b++];if(!(x.has(D)||!TB(D)||m.has(D)))if(x.add(D),Symbol.iterator in D)try{for(const _ of D)T.push(_)}catch{}else for(const _ in D)_!=="defaultValue"&&T.push(D[_])}return x}function TB(u){const m=Object.prototype.toString.call(u),T=typeof u;return!(T==="number"||T==="boolean"||T==="string"||T==="symbol"||T==="function"||m==="[object Date]"||m==="[object RegExp]"||m==="[object Module]"||u===void 0||u===null||u._watchdogExcluded||u instanceof EventTarget||u instanceof Event)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function M_(u,m,T=new Set){if(u===m&&IB(u))return!0;const x=Rd(u,T),b=Rd(m,T);for(const D of x)if(b.has(D))return!0;return!1}function IB(u){return typeof u=="object"&&u!==null}var B_=typeof global=="object"&&global&&global.Object===Object&&global,SB=typeof self=="object"&&self&&self.Object===Object&&self,fo=B_||SB||Function("return this")(),br=fo.Symbol,N_=Object.prototype,MB=N_.hasOwnProperty,BB=N_.toString,gs=br?br.toStringTag:void 0;function NB(u){var m=MB.call(u,gs),T=u[gs];try{u[gs]=void 0;var x=!0}catch{}var b=BB.call(u);return x&&(m?u[gs]=T:delete u[gs]),b}var PB=Object.prototype,OB=PB.toString;function LB(u){return OB.call(u)}var RB="[object Null]",jB="[object Undefined]",_A=br?br.toStringTag:void 0;function Si(u){return u==null?u===void 0?jB:RB:_A&&_A in Object(u)?NB(u):LB(u)}function ei(u){return u!=null&&typeof u=="object"}var zB="[object Symbol]";function FB(u){return typeof u=="symbol"||ei(u)&&Si(u)==zB}var ru=Array.isArray,VB=/\s/;function UB(u){for(var m=u.length;m--&&VB.test(u.charAt(m)););return m}var HB=/^\s+/;function $B(u){return u&&u.slice(0,UB(u)+1).replace(HB,"")}function jo(u){var m=typeof u;return u!=null&&(m=="object"||m=="function")}var CA=NaN,WB=/^[-+]0x[0-9a-f]+$/i,GB=/^0b[01]+$/i,qB=/^0o[0-7]+$/i,KB=parseInt;function vA(u){if(typeof u=="number")return u;if(FB(u))return CA;if(jo(u)){var m=typeof u.valueOf=="function"?u.valueOf():u;u=jo(m)?m+"":m}if(typeof u!="string")return u===0?u:+u;u=$B(u);var T=GB.test(u);return T||qB.test(u)?KB(u.slice(2),T?2:8):WB.test(u)?CA:+u}var YB="[object AsyncFunction]",QB="[object Function]",ZB="[object GeneratorFunction]",JB="[object Proxy]";function P_(u){if(!jo(u))return!1;var m=Si(u);return m==QB||m==ZB||m==YB||m==JB}var Td=fo["__core-js_shared__"],yA=function(){var u=/[^.]+$/.exec(Td&&Td.keys&&Td.keys.IE_PROTO||"");return u?"Symbol(src)_1."+u:""}();function XB(u){return!!yA&&yA in u}var tN=Function.prototype,eN=tN.toString;function Mi(u){if(u!=null){try{return eN.call(u)}catch{}try{return u+""}catch{}}return""}var nN=/[\\^$.*+?()[\]{}|]/g,oN=/^\[object .+?Constructor\]$/,iN=Function.prototype,rN=Object.prototype,sN=iN.toString,aN=rN.hasOwnProperty,cN=RegExp("^"+sN.call(aN).replace(nN,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function lN(u){if(!jo(u)||XB(u))return!1;var m=P_(u)?cN:oN;return m.test(Mi(u))}function dN(u,m){return u==null?void 0:u[m]}function Bi(u,m){var T=dN(u,m);return lN(T)?T:void 0}var jd=Bi(fo,"WeakMap"),xA=Object.create,uN=function(){function u(){}return function(m){if(!jo(m))return{};if(xA)return xA(m);u.prototype=m;var T=new u;return u.prototype=void 0,T}}();function hN(u,m){var T=-1,x=u.length;for(m||(m=Array(x));++T<x;)m[T]=u[T];return m}var EA=function(){try{var u=Bi(Object,"defineProperty");return u({},"",{}),u}catch{}}();function gN(u,m){for(var T=-1,x=u==null?0:u.length;++T<x&&m(u[T],T,u)!==!1;);return u}var pN=9007199254740991,mN=/^(?:0|[1-9]\d*)$/;function fN(u,m){var T=typeof u;return m=m??pN,!!m&&(T=="number"||T!="symbol"&&mN.test(u))&&u>-1&&u%1==0&&u<m}function O_(u,m,T){m=="__proto__"&&EA?EA(u,m,{configurable:!0,enumerable:!0,value:T,writable:!0}):u[m]=T}function L_(u,m){return u===m||u!==u&&m!==m}var kN=Object.prototype,bN=kN.hasOwnProperty;function R_(u,m,T){var x=u[m];(!(bN.call(u,m)&&L_(x,T))||T===void 0&&!(m in u))&&O_(u,m,T)}function hc(u,m,T,x){var b=!T;T||(T={});for(var D=-1,_=m.length;++D<_;){var v=m[D],p=void 0;p===void 0&&(p=u[v]),b?O_(T,v,p):R_(T,v,p)}return T}var wN=9007199254740991;function j_(u){return typeof u=="number"&&u>-1&&u%1==0&&u<=wN}function z_(u){return u!=null&&j_(u.length)&&!P_(u)}var AN=Object.prototype;function su(u){var m=u&&u.constructor,T=typeof m=="function"&&m.prototype||AN;return u===T}function _N(u,m){for(var T=-1,x=Array(u);++T<u;)x[T]=m(T);return x}var CN="[object Arguments]";function DA(u){return ei(u)&&Si(u)==CN}var F_=Object.prototype,vN=F_.hasOwnProperty,yN=F_.propertyIsEnumerable,xN=DA(function(){return arguments}())?DA:function(u){return ei(u)&&vN.call(u,"callee")&&!yN.call(u,"callee")};function EN(){return!1}var V_=typeof exports=="object"&&exports&&!exports.nodeType&&exports,TA=V_&&typeof module=="object"&&module&&!module.nodeType&&module,DN=TA&&TA.exports===V_,IA=DN?fo.Buffer:void 0,TN=IA?IA.isBuffer:void 0,U_=TN||EN,IN="[object Arguments]",SN="[object Array]",MN="[object Boolean]",BN="[object Date]",NN="[object Error]",PN="[object Function]",ON="[object Map]",LN="[object Number]",RN="[object Object]",jN="[object RegExp]",zN="[object Set]",FN="[object String]",VN="[object WeakMap]",UN="[object ArrayBuffer]",HN="[object DataView]",$N="[object Float32Array]",WN="[object Float64Array]",GN="[object Int8Array]",qN="[object Int16Array]",KN="[object Int32Array]",YN="[object Uint8Array]",QN="[object Uint8ClampedArray]",ZN="[object Uint16Array]",JN="[object Uint32Array]",Te={};Te[$N]=Te[WN]=Te[GN]=Te[qN]=Te[KN]=Te[YN]=Te[QN]=Te[ZN]=Te[JN]=!0;Te[IN]=Te[SN]=Te[UN]=Te[MN]=Te[HN]=Te[BN]=Te[NN]=Te[PN]=Te[ON]=Te[LN]=Te[RN]=Te[jN]=Te[zN]=Te[FN]=Te[VN]=!1;function XN(u){return ei(u)&&j_(u.length)&&!!Te[Si(u)]}function au(u){return function(m){return u(m)}}var H_=typeof exports=="object"&&exports&&!exports.nodeType&&exports,ks=H_&&typeof module=="object"&&module&&!module.nodeType&&module,tP=ks&&ks.exports===H_,Id=tP&&B_.process,wr=function(){try{var u=ks&&ks.require&&ks.require("util").types;return u||Id&&Id.binding&&Id.binding("util")}catch{}}(),SA=wr&&wr.isTypedArray,eP=SA?au(SA):XN,nP=Object.prototype,oP=nP.hasOwnProperty;function $_(u,m){var T=ru(u),x=!T&&xN(u),b=!T&&!x&&U_(u),D=!T&&!x&&!b&&eP(u),_=T||x||b||D,v=_?_N(u.length,String):[],p=v.length;for(var I in u)(m||oP.call(u,I))&&!(_&&(I=="length"||b&&(I=="offset"||I=="parent")||D&&(I=="buffer"||I=="byteLength"||I=="byteOffset")||fN(I,p)))&&v.push(I);return v}function W_(u,m){return function(T){return u(m(T))}}var iP=W_(Object.keys,Object),rP=Object.prototype,sP=rP.hasOwnProperty;function aP(u){if(!su(u))return iP(u);var m=[];for(var T in Object(u))sP.call(u,T)&&T!="constructor"&&m.push(T);return m}function cu(u){return z_(u)?$_(u):aP(u)}function cP(u){var m=[];if(u!=null)for(var T in Object(u))m.push(T);return m}var lP=Object.prototype,dP=lP.hasOwnProperty;function uP(u){if(!jo(u))return cP(u);var m=su(u),T=[];for(var x in u)x=="constructor"&&(m||!dP.call(u,x))||T.push(x);return T}function lu(u){return z_(u)?$_(u,!0):uP(u)}var As=Bi(Object,"create");function hP(){this.__data__=As?As(null):{},this.size=0}function gP(u){var m=this.has(u)&&delete this.__data__[u];return this.size-=m?1:0,m}var pP="__lodash_hash_undefined__",mP=Object.prototype,fP=mP.hasOwnProperty;function kP(u){var m=this.__data__;if(As){var T=m[u];return T===pP?void 0:T}return fP.call(m,u)?m[u]:void 0}var bP=Object.prototype,wP=bP.hasOwnProperty;function AP(u){var m=this.__data__;return As?m[u]!==void 0:wP.call(m,u)}var _P="__lodash_hash_undefined__";function CP(u,m){var T=this.__data__;return this.size+=this.has(u)?0:1,T[u]=As&&m===void 0?_P:m,this}function Ii(u){var m=-1,T=u==null?0:u.length;for(this.clear();++m<T;){var x=u[m];this.set(x[0],x[1])}}Ii.prototype.clear=hP;Ii.prototype.delete=gP;Ii.prototype.get=kP;Ii.prototype.has=AP;Ii.prototype.set=CP;function vP(){this.__data__=[],this.size=0}function gc(u,m){for(var T=u.length;T--;)if(L_(u[T][0],m))return T;return-1}var yP=Array.prototype,xP=yP.splice;function EP(u){var m=this.__data__,T=gc(m,u);if(T<0)return!1;var x=m.length-1;return T==x?m.pop():xP.call(m,T,1),--this.size,!0}function DP(u){var m=this.__data__,T=gc(m,u);return T<0?void 0:m[T][1]}function TP(u){return gc(this.__data__,u)>-1}function IP(u,m){var T=this.__data__,x=gc(T,u);return x<0?(++this.size,T.push([u,m])):T[x][1]=m,this}function Vo(u){var m=-1,T=u==null?0:u.length;for(this.clear();++m<T;){var x=u[m];this.set(x[0],x[1])}}Vo.prototype.clear=vP;Vo.prototype.delete=EP;Vo.prototype.get=DP;Vo.prototype.has=TP;Vo.prototype.set=IP;var _s=Bi(fo,"Map");function SP(){this.size=0,this.__data__={hash:new Ii,map:new(_s||Vo),string:new Ii}}function MP(u){var m=typeof u;return m=="string"||m=="number"||m=="symbol"||m=="boolean"?u!=="__proto__":u===null}function pc(u,m){var T=u.__data__;return MP(m)?T[typeof m=="string"?"string":"hash"]:T.map}function BP(u){var m=pc(this,u).delete(u);return this.size-=m?1:0,m}function NP(u){return pc(this,u).get(u)}function PP(u){return pc(this,u).has(u)}function OP(u,m){var T=pc(this,u),x=T.size;return T.set(u,m),this.size+=T.size==x?0:1,this}function Cr(u){var m=-1,T=u==null?0:u.length;for(this.clear();++m<T;){var x=u[m];this.set(x[0],x[1])}}Cr.prototype.clear=SP;Cr.prototype.delete=BP;Cr.prototype.get=NP;Cr.prototype.has=PP;Cr.prototype.set=OP;function G_(u,m){for(var T=-1,x=m.length,b=u.length;++T<x;)u[b+T]=m[T];return u}var du=W_(Object.getPrototypeOf,Object),LP="[object Object]",RP=Function.prototype,jP=Object.prototype,q_=RP.toString,zP=jP.hasOwnProperty,FP=q_.call(Object);function VP(u){if(!ei(u)||Si(u)!=LP)return!1;var m=du(u);if(m===null)return!0;var T=zP.call(m,"constructor")&&m.constructor;return typeof T=="function"&&T instanceof T&&q_.call(T)==FP}function UP(){this.__data__=new Vo,this.size=0}function HP(u){var m=this.__data__,T=m.delete(u);return this.size=m.size,T}function $P(u){return this.__data__.get(u)}function WP(u){return this.__data__.has(u)}var GP=200;function qP(u,m){var T=this.__data__;if(T instanceof Vo){var x=T.__data__;if(!_s||x.length<GP-1)return x.push([u,m]),this.size=++T.size,this;T=this.__data__=new Cr(x)}return T.set(u,m),this.size=T.size,this}function vr(u){var m=this.__data__=new Vo(u);this.size=m.size}vr.prototype.clear=UP;vr.prototype.delete=HP;vr.prototype.get=$P;vr.prototype.has=WP;vr.prototype.set=qP;function KP(u,m){return u&&hc(m,cu(m),u)}function YP(u,m){return u&&hc(m,lu(m),u)}var K_=typeof exports=="object"&&exports&&!exports.nodeType&&exports,MA=K_&&typeof module=="object"&&module&&!module.nodeType&&module,QP=MA&&MA.exports===K_,BA=QP?fo.Buffer:void 0,NA=BA?BA.allocUnsafe:void 0;function ZP(u,m){if(m)return u.slice();var T=u.length,x=NA?NA(T):new u.constructor(T);return u.copy(x),x}function JP(u,m){for(var T=-1,x=u==null?0:u.length,b=0,D=[];++T<x;){var _=u[T];m(_,T,u)&&(D[b++]=_)}return D}function Y_(){return[]}var XP=Object.prototype,tO=XP.propertyIsEnumerable,PA=Object.getOwnPropertySymbols,uu=PA?function(u){return u==null?[]:(u=Object(u),JP(PA(u),function(m){return tO.call(u,m)}))}:Y_;function eO(u,m){return hc(u,uu(u),m)}var nO=Object.getOwnPropertySymbols,Q_=nO?function(u){for(var m=[];u;)G_(m,uu(u)),u=du(u);return m}:Y_;function oO(u,m){return hc(u,Q_(u),m)}function Z_(u,m,T){var x=m(u);return ru(u)?x:G_(x,T(u))}function iO(u){return Z_(u,cu,uu)}function rO(u){return Z_(u,lu,Q_)}var zd=Bi(fo,"DataView"),Fd=Bi(fo,"Promise"),Vd=Bi(fo,"Set"),OA="[object Map]",sO="[object Object]",LA="[object Promise]",RA="[object Set]",jA="[object WeakMap]",zA="[object DataView]",aO=Mi(zd),cO=Mi(_s),lO=Mi(Fd),dO=Mi(Vd),uO=Mi(jd),Lo=Si;(zd&&Lo(new zd(new ArrayBuffer(1)))!=zA||_s&&Lo(new _s)!=OA||Fd&&Lo(Fd.resolve())!=LA||Vd&&Lo(new Vd)!=RA||jd&&Lo(new jd)!=jA)&&(Lo=function(u){var m=Si(u),T=m==sO?u.constructor:void 0,x=T?Mi(T):"";if(x)switch(x){case aO:return zA;case cO:return OA;case lO:return LA;case dO:return RA;case uO:return jA}return m});var hO=Object.prototype,gO=hO.hasOwnProperty;function pO(u){var m=u.length,T=new u.constructor(m);return m&&typeof u[0]=="string"&&gO.call(u,"index")&&(T.index=u.index,T.input=u.input),T}var FA=fo.Uint8Array;function hu(u){var m=new u.constructor(u.byteLength);return new FA(m).set(new FA(u)),m}function mO(u,m){var T=m?hu(u.buffer):u.buffer;return new u.constructor(T,u.byteOffset,u.byteLength)}var fO=/\w*$/;function kO(u){var m=new u.constructor(u.source,fO.exec(u));return m.lastIndex=u.lastIndex,m}var VA=br?br.prototype:void 0,UA=VA?VA.valueOf:void 0;function bO(u){return UA?Object(UA.call(u)):{}}function wO(u,m){var T=m?hu(u.buffer):u.buffer;return new u.constructor(T,u.byteOffset,u.length)}var AO="[object Boolean]",_O="[object Date]",CO="[object Map]",vO="[object Number]",yO="[object RegExp]",xO="[object Set]",EO="[object String]",DO="[object Symbol]",TO="[object ArrayBuffer]",IO="[object DataView]",SO="[object Float32Array]",MO="[object Float64Array]",BO="[object Int8Array]",NO="[object Int16Array]",PO="[object Int32Array]",OO="[object Uint8Array]",LO="[object Uint8ClampedArray]",RO="[object Uint16Array]",jO="[object Uint32Array]";function zO(u,m,T){var x=u.constructor;switch(m){case TO:return hu(u);case AO:case _O:return new x(+u);case IO:return mO(u,T);case SO:case MO:case BO:case NO:case PO:case OO:case LO:case RO:case jO:return wO(u,T);case CO:return new x;case vO:case EO:return new x(u);case yO:return kO(u);case xO:return new x;case DO:return bO(u)}}function FO(u){return typeof u.constructor=="function"&&!su(u)?uN(du(u)):{}}var VO="[object Map]";function UO(u){return ei(u)&&Lo(u)==VO}var HA=wr&&wr.isMap,HO=HA?au(HA):UO,$O="[object Set]";function WO(u){return ei(u)&&Lo(u)==$O}var $A=wr&&wr.isSet,GO=$A?au($A):WO,qO=1,KO=2,YO=4,J_="[object Arguments]",QO="[object Array]",ZO="[object Boolean]",JO="[object Date]",XO="[object Error]",X_="[object Function]",tL="[object GeneratorFunction]",eL="[object Map]",nL="[object Number]",tC="[object Object]",oL="[object RegExp]",iL="[object Set]",rL="[object String]",sL="[object Symbol]",aL="[object WeakMap]",cL="[object ArrayBuffer]",lL="[object DataView]",dL="[object Float32Array]",uL="[object Float64Array]",hL="[object Int8Array]",gL="[object Int16Array]",pL="[object Int32Array]",mL="[object Uint8Array]",fL="[object Uint8ClampedArray]",kL="[object Uint16Array]",bL="[object Uint32Array]",ve={};ve[J_]=ve[QO]=ve[cL]=ve[lL]=ve[ZO]=ve[JO]=ve[dL]=ve[uL]=ve[hL]=ve[gL]=ve[pL]=ve[eL]=ve[nL]=ve[tC]=ve[oL]=ve[iL]=ve[rL]=ve[sL]=ve[mL]=ve[fL]=ve[kL]=ve[bL]=!0;ve[XO]=ve[X_]=ve[aL]=!1;function Ya(u,m,T,x,b,D){var _,v=m&qO,p=m&KO,I=m&YO;if(T&&(_=b?T(u,x,b,D):T(u)),_!==void 0)return _;if(!jo(u))return u;var C=ru(u);if(C){if(_=pO(u),!v)return hN(u,_)}else{var w=Lo(u),g=w==X_||w==tL;if(U_(u))return ZP(u,v);if(w==tC||w==J_||g&&!b){if(_=p||g?{}:FO(u),!v)return p?oO(u,YP(_,u)):eO(u,KP(_,u))}else{if(!ve[w])return b?u:{};_=zO(u,w,v)}}D||(D=new vr);var k=D.get(u);if(k)return k;D.set(u,_),GO(u)?u.forEach(function(O){_.add(Ya(O,m,T,O,u,D))}):HO(u)&&u.forEach(function(O,R){_.set(R,Ya(O,m,T,R,u,D))});var S=I?p?rO:iO:p?lu:cu,N=C?void 0:S(u);return gN(N||u,function(O,R){N&&(R=O,O=u[R]),R_(_,R,Ya(O,m,T,R,u,D))}),_}var wL=1,AL=4;function _L(u,m){return m=typeof m=="function"?m:void 0,Ya(u,wL|AL,m)}var Sd=function(){return fo.Date.now()},CL="Expected a function",vL=Math.max,yL=Math.min;function xL(u,m,T){var x,b,D,_,v,p,I=0,C=!1,w=!1,g=!0;if(typeof u!="function")throw new TypeError(CL);m=vA(m)||0,jo(T)&&(C=!!T.leading,w="maxWait"in T,D=w?vL(vA(T.maxWait)||0,m):D,g="trailing"in T?!!T.trailing:g);function k(H){var W=x,B=b;return x=b=void 0,I=H,_=u.apply(B,W),_}function S(H){return I=H,v=setTimeout(R,m),C?k(H):_}function N(H){var W=H-p,B=H-I,y=m-W;return w?yL(y,D-B):y}function O(H){var W=H-p,B=H-I;return p===void 0||W>=m||W<0||w&&B>=D}function R(){var H=Sd();if(O(H))return Q(H);v=setTimeout(R,N(H))}function Q(H){return v=void 0,g&&x?k(H):(x=b=void 0,_)}function Y(){v!==void 0&&clearTimeout(v),I=0,x=p=b=v=void 0}function K(){return v===void 0?_:Q(Sd())}function et(){var H=Sd(),W=O(H);if(x=arguments,b=this,p=H,W){if(v===void 0)return S(p);if(w)return clearTimeout(v),v=setTimeout(R,m),k(p)}return v===void 0&&(v=setTimeout(R,m)),_}return et.cancel=Y,et.flush=K,et}function WA(u){return ei(u)&&u.nodeType===1&&!VP(u)}var EL="Expected a function";function DL(u,m,T){var x=!0,b=!0;if(typeof u!="function")throw new TypeError(EL);return jo(T)&&(x="leading"in T?!!T.leading:x,b="trailing"in T?!!T.trailing:b),xL(u,m,{leading:x,maxWait:m,trailing:b})}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class eC extends iu{constructor(m,T={}){super(T),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=DL(this._save.bind(this),typeof T.saveInterval=="number"?T.saveInterval:5e3),m&&(this._creator=(x,b)=>m.create(x,b)),this._destructor=x=>x.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(m){this._creator=m}setDestructor(m){this._destructor=m}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(m=>{console.error("An error happened during the editor destroying.",m)}).then(()=>{const m={},T=[],x=this._config.rootsAttributes||{},b={};for(const[_,v]of Object.entries(this._data.roots))v.isLoaded?(m[_]="",b[_]=x[_]||{}):T.push(_);const D={...this._config,extraPlugins:this._config.extraPlugins||[],lazyRoots:T,rootsAttributes:b,_watchdogInitialData:this._data};return delete D.initialData,D.extraPlugins.push(TL),this._initUsingData?this.create(m,D,D.context):WA(this._elementOrData)?this.create(this._elementOrData,D,D.context):this.create(this._editables,D,D.context)}).then(()=>{this._fire("restart")})}create(m=this._elementOrData,T=this._config,x){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=m,this._initUsingData=typeof m=="string"||Object.keys(m).length>0&&typeof Object.values(m)[0]=="string",this._config=this._cloneEditorConfiguration(T)||{},this._config.context=x,this._creator(m,this._config))).then(b=>{this._editor=b,b.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=b.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const m=this._editor;return this._editor=null,m.model.document.off("change:data",this._throttledSave),this._destructor(m)})}_save(){const m=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=m}catch(T){console.error(T,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(m){this._excludedProps=m}_getData(){const m=this._editor,T=m.model.document.roots.filter(v=>v.isAttached()&&v.rootName!="$graveyard"),{plugins:x}=m,b=x.has("CommentsRepository")&&x.get("CommentsRepository"),D=x.has("TrackChanges")&&x.get("TrackChanges"),_={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};T.forEach(v=>{_.roots[v.rootName]={content:JSON.stringify(Array.from(v.getChildren())),attributes:JSON.stringify(Array.from(v.getAttributes())),isLoaded:v._isLoaded}});for(const v of m.model.markers)v._affectsData&&(_.markers[v.name]={rangeJSON:v.getRange().toJSON(),usingOperation:v._managedUsingOperations,affectsData:v._affectsData});return b&&(_.commentThreads=JSON.stringify(b.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),D&&(_.suggestions=JSON.stringify(D.getSuggestions({toJSON:!0,skipNotAttached:!0}))),_}_getEditables(){const m={};for(const T of this.editor.model.document.getRootNames()){const x=this.editor.ui.getEditableElement(T);x&&(m[T]=x)}return m}_isErrorComingFromThisItem(m){return M_(this._editor,m.context,this._excludedProps)}_cloneEditorConfiguration(m){return _L(m,(T,x)=>{if(WA(T)||x==="context")return T})}}class TL{constructor(m){this.editor=m,this._data=m.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",m=>{m.stop(),this.editor.model.enqueueChange({isUndoable:!1},T=>{this._restoreCollaborationData(),this._restoreEditorData(T)}),this.editor.data.fire("ready")},{priority:999})}_createNode(m,T){if("name"in T){const x=m.createElement(T.name,T.attributes);if(T.children)for(const b of T.children)x._appendChild(this._createNode(m,b));return x}else return m.createText(T.data,T.attributes)}_restoreEditorData(m){const T=this.editor;Object.entries(this._data.roots).forEach(([x,{content:b,attributes:D}])=>{const _=JSON.parse(b),v=JSON.parse(D),p=T.model.document.getRoot(x);for(const[I,C]of v)m.setAttribute(I,C,p);for(const I of _){const C=this._createNode(m,I);m.insert(C,p,"end")}}),Object.entries(this._data.markers).forEach(([x,b])=>{const{document:D}=T.model,{rangeJSON:{start:_,end:v},...p}=b,I=D.getRoot(_.root),C=m.createPositionFromPath(I,_.path,_.stickiness),w=m.createPositionFromPath(I,v.path,v.stickiness),g=m.createRange(C,w);m.addMarker(x,{range:g,...p})})}_restoreCollaborationData(){const m=JSON.parse(this._data.commentThreads),T=JSON.parse(this._data.suggestions);m.forEach(x=>{const b=this.editor.config.get("collaboration.channelId"),D=this.editor.plugins.get("CommentsRepository");D.hasCommentThread(x.threadId)&&D.getCommentThread(x.threadId).remove(),D.addCommentThread({channelId:b,...x})}),T.forEach(x=>{const b=this.editor.plugins.get("TrackChangesEditing");if(b.hasSuggestion(x.id)){const D=b.getSuggestion(x.id);D.attributes=x.attributes}else b.addSuggestionData(x)})}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const bs=Symbol("MainQueueId");class IL extends iu{constructor(m,T={}){super(T),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new SL,this._watchdogConfig=T,this._creator=x=>m.create(x),this._destructor=x=>x.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(m){this._creator=m}setDestructor(m){this._destructor=m}get context(){return this._context}create(m={}){return this._actionQueues.enqueue(bs,()=>(this._contextConfig=m,this._create()))}getItem(m){return this._getWatchdog(m)._item}getItemState(m){return this._getWatchdog(m).state}add(m){const T=GA(m);return Promise.all(T.map(x=>this._actionQueues.enqueue(x.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let b;if(this._watchdogs.has(x.id))throw new Error(`Item with the given id is already added: '${x.id}'.`);if(x.type==="editor")return b=new eC(null,this._watchdogConfig),b.setCreator(x.creator),b._setExcludedProperties(this._contextProps),x.destructor&&b.setDestructor(x.destructor),this._watchdogs.set(x.id,b),b.on("error",(D,{error:_,causesRestart:v})=>{this._fire("itemError",{itemId:x.id,error:_}),v&&this._actionQueues.enqueue(x.id,()=>new Promise(p=>{const I=()=>{b.off("restart",I),this._fire("itemRestart",{itemId:x.id}),p()};b.on("restart",I)}))}),b.create(x.sourceElementOrData,x.config,this._context);throw new Error(`Not supported item type: '${x.type}'.`)})))}remove(m){const T=GA(m);return Promise.all(T.map(x=>this._actionQueues.enqueue(x,()=>{const b=this._getWatchdog(x);return this._watchdogs.delete(x),b.destroy()})))}destroy(){return this._actionQueues.enqueue(bs,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(bs,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(m=>{console.error("An error happened during destroying the context or items.",m)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(m=>(this._context=m,this._contextProps=Rd(this._context),Promise.all(Array.from(this._watchdogs.values()).map(T=>(T._setExcludedProperties(this._contextProps),T.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const m=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(T=>T.destroy())).then(()=>this._destructor(m))})}_getWatchdog(m){const T=this._watchdogs.get(m);if(!T)throw new Error(`Item with the given id was not registered: ${m}.`);return T}_isErrorComingFromThisItem(m){for(const T of this._watchdogs.values())if(T._isErrorComingFromThisItem(m))return!1;return M_(this._context,m.context)}}class SL{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(m){this._onEmptyCallbacks.push(m)}enqueue(m,T){const x=m===bs;this._activeActions++,this._queues.get(m)||this._queues.set(m,Promise.resolve());const D=(x?Promise.all(this._queues.values()):Promise.all([this._queues.get(bs),this._queues.get(m)])).then(T),_=D.catch(()=>{});return this._queues.set(m,_),D.finally(()=>{this._activeActions--,this._queues.get(m)===_&&this._activeActions===0&&this._onEmptyCallbacks.forEach(v=>v())})}}function GA(u){return Array.isArray(u)?u:[u]}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const ML=Object.freeze(Object.defineProperty({__proto__:null,ContextWatchdog:IL,EditorWatchdog:eC,Watchdog:iu},Symbol.toStringTag,{value:"Module"})),BL=XM(ML);/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(u,m){(function(T,x){u.exports=x(rt,m4,BL)})(self,(T,x,b)=>(()=>{var D={546:I=>{I.exports=b},949:I=>{I.exports=x},155:I=>{I.exports=T}},_={};function v(I){var C=_[I];if(C!==void 0)return C.exports;var w=_[I]={exports:{}};return D[I](w,w.exports,v),w.exports}v.n=I=>{var C=I&&I.__esModule?()=>I.default:()=>I;return v.d(C,{a:C}),C},v.d=(I,C)=>{for(var w in C)v.o(C,w)&&!v.o(I,w)&&Object.defineProperty(I,w,{enumerable:!0,get:C[w]})},v.o=(I,C)=>Object.prototype.hasOwnProperty.call(I,C),v.r=I=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(I,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(I,"__esModule",{value:!0})};var p={};return(()=>{v.r(p),v.d(p,{CKEditor:()=>Q,CKEditorContext:()=>O,useMultiRootEditor:()=>H});var I=v(155),C=v.n(I),w=v(949),g=v.n(w);const k=new Array(256).fill("").map((W,B)=>("0"+B.toString(16)).slice(-2));var S=v(546);const N=C().createContext("contextWatchdog");class O extends C().Component{constructor(B,y){super(B,y),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(B){return this._shouldComponentUpdate(B)}async _shouldComponentUpdate(B){return B.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(B.config)),B.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(B.config),!0):this.props.children!==B.children}render(){return C().createElement(N.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(B){this.contextWatchdog=new S.ContextWatchdog(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(y,z)=>{this.props.onError(z.error,{phase:"runtime",willContextRestart:z.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(B).catch(y=>{this.props.onError(y,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}O.defaultProps={isLayoutReady:!0,onError:(W,B)=>console.error(W,B)},O.propTypes={id:g().string,isLayoutReady:g().bool,context:g().func,watchdogConfig:g().object,config:g().object,onReady:g().func,onError:g().func};const R="Lock from React integration (@ckeditor/ckeditor5-react)";class Q extends C().Component{constructor(B){super(B),this.editorDestructionInProgress=null,this.domContainer=C().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:y}=window;if(y){const[z]=y.split(".").map(Number);z<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(B){return!!this.editor&&(B.id!==this.props.id||B.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(B)&&this.editor.data.set(B.data),"disabled"in B&&(B.disabled?this.editor.enableReadOnlyMode(R):this.editor.disableReadOnlyMode(R)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return C().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof S.ContextWatchdog?this.watchdog=new Y(this.context):this.watchdog=new Q._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((B,y)=>this._createEditor(B,y)),this.watchdog.on("error",(B,{error:y,causesRestart:z})=>{(this.props.onError||console.error)(y,{phase:"runtime",willEditorRestart:z})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(B=>{(this.props.onError||console.error)(B,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(B,y){return this.props.editor.create(B,y).then(z=>{"disabled"in this.props&&this.props.disabled&&z.enableReadOnlyMode(R);const U=z.model.document,G=z.editing.view.document;return U.on("change:data",$=>{this.props.onChange&&this.props.onChange($,z)}),G.on("focus",$=>{this.props.onFocus&&this.props.onFocus($,z)}),G.on("blur",$=>{this.props.onBlur&&this.props.onBlur($,z)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(z)}),z})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(B=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,B()):this.instance?(await this.instance.destroy(),this.instance=null,B()):void B())})}_shouldUpdateEditor(B){return this.props.data!==B.data&&this.editor.data.get()!==B.data}_getConfig(){const B=this.props.config||{};return this.props.data&&B.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...B,initialData:B.initialData||this.props.data||""}}}Q.contextType=N,Q.propTypes={editor:g().func.isRequired,data:g().string,config:g().object,disableWatchdog:g().bool,watchdogConfig:g().object,onChange:g().func,onReady:g().func,onFocus:g().func,onBlur:g().func,onError:g().func,disabled:g().bool,id:g().any},Q._EditorWatchdog=S.EditorWatchdog;class Y{constructor(B){this._contextWatchdog=B,this._id=function(){const y=4294967296*Math.random()>>>0,z=4294967296*Math.random()>>>0,U=4294967296*Math.random()>>>0,G=4294967296*Math.random()>>>0;return"e"+k[255&y]+k[y>>8&255]+k[y>>16&255]+k[y>>24&255]+k[255&z]+k[z>>8&255]+k[z>>16&255]+k[z>>24&255]+k[255&U]+k[U>>8&255]+k[U>>16&255]+k[U>>24&255]+k[255&G]+k[G>>8&255]+k[G>>16&255]+k[G>>24&255]}()}setCreator(B){this._creator=B}create(B,y){return this._contextWatchdog.add({sourceElementOrData:B,config:y,creator:this._creator,id:this._id,type:"editor"})}on(B,y){this._contextWatchdog.on("itemError",(z,{itemId:U,error:G})=>{U===this._id&&y(null,{error:G,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}const K="Lock from React integration (@ckeditor/ckeditor5-react)",et=({editor:W})=>{const B=(0,I.useRef)(null);return(0,I.useEffect)(()=>{const y=B.current;if(!W||!y)return;const z=W.ui.view.toolbar.element;return y&&y.appendChild(z),()=>{y&&y.removeChild(z)}},[W&&W.id]),C().createElement("div",{ref:B})},H=W=>{const B=(0,I.useRef)(null),y=(0,I.useRef)(null),z=(0,I.useContext)(N),[U,G]=(0,I.useState)(null),[$,q]=(0,I.useState)(W.data),[Z,F]=(0,I.useState)(W.rootsAttributes||{}),[j,st]=(0,I.useState)([]),X=(0,I.useRef)(!0);(0,I.useEffect)(()=>((async()=>(await y.current,W.isLayoutReady!==!1&&await dt()))(),()=>{vt().then(()=>{y.current=null})}),[W.isLayoutReady]),(0,I.useEffect)(()=>{U&&(W.disabled?U.enableReadOnlyMode(K):U.disableReadOnlyMode(K))},[W.disabled]),(0,I.useEffect)(()=>{if(U&&!y.current){const xt=U.getFullData();q({...xt}),F({...U.getRootsAttributes()}),st([...Object.keys(xt).map(Ut=>ft(U,Ut))])}},[U&&U.id]);const nt=()=>{const xt=W.config||{};return W.data&&xt.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` property. The config value takes precedence over `data` property and will be used when both are specified."),{...xt,rootsAttributes:Z}},ft=(xt,Ut)=>C().createElement("div",{id:Ut,key:Ut,ref:Rt=>{if(Rt){const Ct=xt.ui.view.createEditable(Ut,Rt);xt.ui.addEditable(Ct),xt.editing.view.forceRender()}}}),ht=(xt,Ut)=>W.editor.create(xt,Ut).then(Rt=>{W.disabled&&W.disabled&&Rt.enableReadOnlyMode(K);const Ct=Rt.model.document,te=Rt.editing.view.document;return Ct.on("change:data",Lt=>((Gt,Ht)=>{const Kt=Gt.model.document;if(!W.disableTwoWayDataBinding){const $t={},ee={};Kt.differ.getChanges().forEach(Et=>{let Dt;if(Dt=Et.type=="insert"||Et.type=="remove"?Et.position.root:Et.range.root,!Dt.isAttached())return;const{rootName:ue}=Dt;$t[ue]=Gt.getData({rootName:ue})}),Kt.differ.getChangedRoots().forEach(Et=>{if(Et.state)return void($t[Et.name]!==void 0&&delete $t[Et.name]);const Dt=Et.name;ee[Dt]=Gt.getRootAttributes(Dt)}),Object.keys($t).length&&q(Et=>({...Et,...$t})),Object.keys(ee).length&&F(Et=>({...Et,...ee}))}W.onChange&&W.onChange(Ht,Gt)})(Rt,Lt)),Rt.on("addRoot",(Lt,Gt)=>((Ht,Kt,$t)=>{const ee=$t.rootName,Et=ft(Ht,ee);W.disableTwoWayDataBinding||(q(Dt=>({...Dt,[ee]:Ht.getData({rootName:ee})})),F(Dt=>({...Dt,[ee]:Ht.getRootAttributes(ee)}))),st(Dt=>[...Dt,Et])})(Rt,0,Gt)),Rt.on("detachRoot",(Lt,Gt)=>((Ht,Kt,$t)=>{const ee=$t.rootName;st(Et=>Et.filter(Dt=>Dt.props.id!==ee)),W.disableTwoWayDataBinding||(q(Et=>{const{[ee]:Dt,...ue}=Et;return{...ue}}),F(Et=>{const{[ee]:Dt,...ue}=Et;return{...ue}})),Ht.detachEditable($t)})(Rt,0,Gt)),te.on("focus",Lt=>{W.onFocus&&W.onFocus(Lt,Rt)}),te.on("blur",Lt=>{W.onBlur&&W.onBlur(Lt,Rt)}),G(Rt),W.onReady&&W.onReady(Rt),Rt}),vt=async()=>{G(null),q({}),F({}),st([]),y.current=new Promise(xt=>{setTimeout(async()=>B.current?(await B.current.destroy(),B.current=null,xt()):U?(await U.destroy(),xt()):void xt())})},dt=async()=>{if(W.disableWatchdog)return void await ht(W.data,nt());if(B.current)return;z instanceof S.ContextWatchdog?B.current=new Y(z):B.current=new S.EditorWatchdog(W.editor,W.watchdogConfig);const xt=B.current;xt.setCreator((Ut,Rt)=>ht(Ut,Rt)),xt.on("error",(Ut,{error:Rt,causesRestart:Ct})=>{(W.onError||console.error)(Rt,{phase:"runtime",willEditorRestart:Ct})}),await xt.create($,nt()).catch(Ut=>{(W.onError||console.error)(Ut,{phase:"initialization",willEditorRestart:!1})})};(0,I.useEffect)(()=>{if(U&&X.current){X.current=!1;const xt=Object.keys($),Ut=Object.keys(Z);if(!xt.every(Kt=>Ut.includes(Kt)))throw new Error("`data` and `attributes` objects must have the same keys (roots).");const Rt=U.getFullData(),Ct=U.getRootsAttributes(),{addedKeys:te,removedKeys:Lt}=ct(Rt,$||{}),Gt=xt.some(Kt=>Rt[Kt]!==void 0&&JSON.stringify(Rt[Kt])!==JSON.stringify($[Kt])),Ht=Ut.filter(Kt=>JSON.stringify(Ct[Kt])!==JSON.stringify(Z[Kt]));U.model.change(Kt=>{Nt(te),Jt(Lt),Gt&&It(),Ht.length&&Pt(Kt,Ht)})}},[$,Z]);const ct=(xt,Ut)=>{const Rt=Object.keys(xt),Ct=Object.keys(Ut);return{addedKeys:Ct.filter(te=>!Rt.includes(te)),removedKeys:Rt.filter(te=>!Ct.includes(te))}},Nt=xt=>{xt.forEach(Ut=>{U.addRoot(Ut,{data:$[Ut]||"",attributes:(Z==null?void 0:Z[Ut])||{},isUndoable:!0})})},Jt=xt=>{xt.forEach(Ut=>{U.detachRoot(Ut,!0)})},It=()=>{U.data.set($,{suppressErrorInCollaboration:!0})},Pt=(xt,Ut)=>{Ut.forEach(Rt=>{Object.keys(Z[Rt]).forEach(Ct=>{U.registerRootAttribute(Ct)}),xt.clearAttributes(U.model.document.getRoot(Rt)),xt.setAttributes(Z[Rt],U.model.document.getRoot(Rt))})},Xt=(0,I.useCallback)(xt=>{X.current=!0,q(xt)},[q]),Yt=(0,I.useCallback)(xt=>{X.current=!0,F(xt)},[F]);return{editor:U,editableElements:j,toolbarElement:C().createElement(et,{editor:U}),data:$,setData:Xt,attributes:Z,setAttributes:Yt}}})(),p})())})(S_);var NL=S_.exports,cc={exports:{}};cc.exports;(function(u,m){(function(T){const x=T.en=T.en||{};x.dictionary=Object.assign(x.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.","Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(T,x){u.exports=x()}(self,()=>(()=>{var T={9246:(_,v,p)=>{const I=p(6931),C={};for(const g of Object.keys(I))C[I[g]]=g;const w={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};_.exports=w;for(const g of Object.keys(w)){if(!("channels"in w[g]))throw new Error("missing channels property: "+g);if(!("labels"in w[g]))throw new Error("missing channel labels property: "+g);if(w[g].labels.length!==w[g].channels)throw new Error("channel and label counts mismatch: "+g);const{channels:k,labels:S}=w[g];delete w[g].channels,delete w[g].labels,Object.defineProperty(w[g],"channels",{value:k}),Object.defineProperty(w[g],"labels",{value:S})}w.rgb.hsl=function(g){const k=g[0]/255,S=g[1]/255,N=g[2]/255,O=Math.min(k,S,N),R=Math.max(k,S,N),Q=R-O;let Y,K;R===O?Y=0:k===R?Y=(S-N)/Q:S===R?Y=2+(N-k)/Q:N===R&&(Y=4+(k-S)/Q),Y=Math.min(60*Y,360),Y<0&&(Y+=360);const et=(O+R)/2;return K=R===O?0:et<=.5?Q/(R+O):Q/(2-R-O),[Y,100*K,100*et]},w.rgb.hsv=function(g){let k,S,N,O,R;const Q=g[0]/255,Y=g[1]/255,K=g[2]/255,et=Math.max(Q,Y,K),H=et-Math.min(Q,Y,K),W=function(B){return(et-B)/6/H+.5};return H===0?(O=0,R=0):(R=H/et,k=W(Q),S=W(Y),N=W(K),Q===et?O=N-S:Y===et?O=.3333333333333333+k-N:K===et&&(O=.6666666666666666+S-k),O<0?O+=1:O>1&&(O-=1)),[360*O,100*R,100*et]},w.rgb.hwb=function(g){const k=g[0],S=g[1];let N=g[2];const O=w.rgb.hsl(g)[0],R=1/255*Math.min(k,Math.min(S,N));return N=1-.00392156862745098*Math.max(k,Math.max(S,N)),[O,100*R,100*N]},w.rgb.cmyk=function(g){const k=g[0]/255,S=g[1]/255,N=g[2]/255,O=Math.min(1-k,1-S,1-N);return[100*((1-k-O)/(1-O)||0),100*((1-S-O)/(1-O)||0),100*((1-N-O)/(1-O)||0),100*O]},w.rgb.keyword=function(g){const k=C[g];if(k)return k;let S,N=1/0;for(const Q of Object.keys(I)){const Y=I[Q],K=(R=Y,((O=g)[0]-R[0])**2+(O[1]-R[1])**2+(O[2]-R[2])**2);K<N&&(N=K,S=Q)}var O,R;return S},w.keyword.rgb=function(g){return I[g]},w.rgb.xyz=function(g){let k=g[0]/255,S=g[1]/255,N=g[2]/255;return k=k>.04045?((k+.055)/1.055)**2.4:k/12.92,S=S>.04045?((S+.055)/1.055)**2.4:S/12.92,N=N>.04045?((N+.055)/1.055)**2.4:N/12.92,[100*(.4124*k+.3576*S+.1805*N),100*(.2126*k+.7152*S+.0722*N),100*(.0193*k+.1192*S+.9505*N)]},w.rgb.lab=function(g){const k=w.rgb.xyz(g);let S=k[0],N=k[1],O=k[2];return S/=95.047,N/=100,O/=108.883,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,O=O>.008856?O**.3333333333333333:7.787*O+.13793103448275862,[116*N-16,500*(S-N),200*(N-O)]},w.hsl.rgb=function(g){const k=g[0]/360,S=g[1]/100,N=g[2]/100;let O,R,Q;if(S===0)return Q=255*N,[Q,Q,Q];O=N<.5?N*(1+S):N+S-N*S;const Y=2*N-O,K=[0,0,0];for(let et=0;et<3;et++)R=k+.3333333333333333*-(et-1),R<0&&R++,R>1&&R--,Q=6*R<1?Y+6*(O-Y)*R:2*R<1?O:3*R<2?Y+(O-Y)*(.6666666666666666-R)*6:Y,K[et]=255*Q;return K},w.hsl.hsv=function(g){const k=g[0];let S=g[1]/100,N=g[2]/100,O=S;const R=Math.max(N,.01);return N*=2,S*=N<=1?N:2-N,O*=R<=1?R:2-R,[k,100*(N===0?2*O/(R+O):2*S/(N+S)),100*((N+S)/2)]},w.hsv.rgb=function(g){const k=g[0]/60,S=g[1]/100;let N=g[2]/100;const O=Math.floor(k)%6,R=k-Math.floor(k),Q=255*N*(1-S),Y=255*N*(1-S*R),K=255*N*(1-S*(1-R));switch(N*=255,O){case 0:return[N,K,Q];case 1:return[Y,N,Q];case 2:return[Q,N,K];case 3:return[Q,Y,N];case 4:return[K,Q,N];case 5:return[N,Q,Y]}},w.hsv.hsl=function(g){const k=g[0],S=g[1]/100,N=g[2]/100,O=Math.max(N,.01);let R,Q;Q=(2-S)*N;const Y=(2-S)*O;return R=S*O,R/=Y<=1?Y:2-Y,R=R||0,Q/=2,[k,100*R,100*Q]},w.hwb.rgb=function(g){const k=g[0]/360;let S=g[1]/100,N=g[2]/100;const O=S+N;let R;O>1&&(S/=O,N/=O);const Q=Math.floor(6*k),Y=1-N;R=6*k-Q,1&Q&&(R=1-R);const K=S+R*(Y-S);let et,H,W;switch(Q){default:case 6:case 0:et=Y,H=K,W=S;break;case 1:et=K,H=Y,W=S;break;case 2:et=S,H=Y,W=K;break;case 3:et=S,H=K,W=Y;break;case 4:et=K,H=S,W=Y;break;case 5:et=Y,H=S,W=K}return[255*et,255*H,255*W]},w.cmyk.rgb=function(g){const k=g[0]/100,S=g[1]/100,N=g[2]/100,O=g[3]/100;return[255*(1-Math.min(1,k*(1-O)+O)),255*(1-Math.min(1,S*(1-O)+O)),255*(1-Math.min(1,N*(1-O)+O))]},w.xyz.rgb=function(g){const k=g[0]/100,S=g[1]/100,N=g[2]/100;let O,R,Q;return O=3.2406*k+-1.5372*S+-.4986*N,R=-.9689*k+1.8758*S+.0415*N,Q=.0557*k+-.204*S+1.057*N,O=O>.0031308?1.055*O**.4166666666666667-.055:12.92*O,R=R>.0031308?1.055*R**.4166666666666667-.055:12.92*R,Q=Q>.0031308?1.055*Q**.4166666666666667-.055:12.92*Q,O=Math.min(Math.max(0,O),1),R=Math.min(Math.max(0,R),1),Q=Math.min(Math.max(0,Q),1),[255*O,255*R,255*Q]},w.xyz.lab=function(g){let k=g[0],S=g[1],N=g[2];return k/=95.047,S/=100,N/=108.883,k=k>.008856?k**.3333333333333333:7.787*k+.13793103448275862,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,[116*S-16,500*(k-S),200*(S-N)]},w.lab.xyz=function(g){let k,S,N;S=(g[0]+16)/116,k=g[1]/500+S,N=S-g[2]/200;const O=S**3,R=k**3,Q=N**3;return S=O>.008856?O:(S-.13793103448275862)/7.787,k=R>.008856?R:(k-.13793103448275862)/7.787,N=Q>.008856?Q:(N-.13793103448275862)/7.787,k*=95.047,S*=100,N*=108.883,[k,S,N]},w.lab.lch=function(g){const k=g[0],S=g[1],N=g[2];let O;return O=360*Math.atan2(N,S)/2/Math.PI,O<0&&(O+=360),[k,Math.sqrt(S*S+N*N),O]},w.lch.lab=function(g){const k=g[0],S=g[1],N=g[2]/360*2*Math.PI;return[k,S*Math.cos(N),S*Math.sin(N)]},w.rgb.ansi16=function(g,k=null){const[S,N,O]=g;let R=k===null?w.rgb.hsv(g)[2]:k;if(R=Math.round(R/50),R===0)return 30;let Q=30+(Math.round(O/255)<<2|Math.round(N/255)<<1|Math.round(S/255));return R===2&&(Q+=60),Q},w.hsv.ansi16=function(g){return w.rgb.ansi16(w.hsv.rgb(g),g[2])},w.rgb.ansi256=function(g){const k=g[0],S=g[1],N=g[2];return k===S&&S===N?k<8?16:k>248?231:Math.round((k-8)/247*24)+232:16+36*Math.round(k/255*5)+6*Math.round(S/255*5)+Math.round(N/255*5)},w.ansi16.rgb=function(g){let k=g%10;if(k===0||k===7)return g>50&&(k+=3.5),k=k/10.5*255,[k,k,k];const S=.5*(1+~~(g>50));return[(1&k)*S*255,(k>>1&1)*S*255,(k>>2&1)*S*255]},w.ansi256.rgb=function(g){if(g>=232){const S=10*(g-232)+8;return[S,S,S]}let k;return g-=16,[Math.floor(g/36)/5*255,Math.floor((k=g%36)/6)/5*255,k%6/5*255]},w.rgb.hex=function(g){const k=(((255&Math.round(g[0]))<<16)+((255&Math.round(g[1]))<<8)+(255&Math.round(g[2]))).toString(16).toUpperCase();return"000000".substring(k.length)+k},w.hex.rgb=function(g){const k=g.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!k)return[0,0,0];let S=k[0];k[0].length===3&&(S=S.split("").map(O=>O+O).join(""));const N=parseInt(S,16);return[N>>16&255,N>>8&255,255&N]},w.rgb.hcg=function(g){const k=g[0]/255,S=g[1]/255,N=g[2]/255,O=Math.max(Math.max(k,S),N),R=Math.min(Math.min(k,S),N),Q=O-R;let Y,K;return Y=Q<1?R/(1-Q):0,K=Q<=0?0:O===k?(S-N)/Q%6:O===S?2+(N-k)/Q:4+(k-S)/Q,K/=6,K%=1,[360*K,100*Q,100*Y]},w.hsl.hcg=function(g){const k=g[1]/100,S=g[2]/100,N=S<.5?2*k*S:2*k*(1-S);let O=0;return N<1&&(O=(S-.5*N)/(1-N)),[g[0],100*N,100*O]},w.hsv.hcg=function(g){const k=g[1]/100,S=g[2]/100,N=k*S;let O=0;return N<1&&(O=(S-N)/(1-N)),[g[0],100*N,100*O]},w.hcg.rgb=function(g){const k=g[0]/360,S=g[1]/100,N=g[2]/100;if(S===0)return[255*N,255*N,255*N];const O=[0,0,0],R=k%1*6,Q=R%1,Y=1-Q;let K=0;switch(Math.floor(R)){case 0:O[0]=1,O[1]=Q,O[2]=0;break;case 1:O[0]=Y,O[1]=1,O[2]=0;break;case 2:O[0]=0,O[1]=1,O[2]=Q;break;case 3:O[0]=0,O[1]=Y,O[2]=1;break;case 4:O[0]=Q,O[1]=0,O[2]=1;break;default:O[0]=1,O[1]=0,O[2]=Y}return K=(1-S)*N,[255*(S*O[0]+K),255*(S*O[1]+K),255*(S*O[2]+K)]},w.hcg.hsv=function(g){const k=g[1]/100,S=k+g[2]/100*(1-k);let N=0;return S>0&&(N=k/S),[g[0],100*N,100*S]},w.hcg.hsl=function(g){const k=g[1]/100,S=g[2]/100*(1-k)+.5*k;let N=0;return S>0&&S<.5?N=k/(2*S):S>=.5&&S<1&&(N=k/(2*(1-S))),[g[0],100*N,100*S]},w.hcg.hwb=function(g){const k=g[1]/100,S=k+g[2]/100*(1-k);return[g[0],100*(S-k),100*(1-S)]},w.hwb.hcg=function(g){const k=g[1]/100,S=1-g[2]/100,N=S-k;let O=0;return N<1&&(O=(S-N)/(1-N)),[g[0],100*N,100*O]},w.apple.rgb=function(g){return[g[0]/65535*255,g[1]/65535*255,g[2]/65535*255]},w.rgb.apple=function(g){return[g[0]/255*65535,g[1]/255*65535,g[2]/255*65535]},w.gray.rgb=function(g){return[g[0]/100*255,g[0]/100*255,g[0]/100*255]},w.gray.hsl=function(g){return[0,0,g[0]]},w.gray.hsv=w.gray.hsl,w.gray.hwb=function(g){return[0,100,g[0]]},w.gray.cmyk=function(g){return[0,0,0,g[0]]},w.gray.lab=function(g){return[g[0],0,0]},w.gray.hex=function(g){const k=255&Math.round(g[0]/100*255),S=((k<<16)+(k<<8)+k).toString(16).toUpperCase();return"000000".substring(S.length)+S},w.rgb.gray=function(g){return[(g[0]+g[1]+g[2])/3/255*100]}},9047:(_,v,p)=>{const I=p(9246),C=p(802),w={};Object.keys(I).forEach(g=>{w[g]={},Object.defineProperty(w[g],"channels",{value:I[g].channels}),Object.defineProperty(w[g],"labels",{value:I[g].labels});const k=C(g);Object.keys(k).forEach(S=>{const N=k[S];w[g][S]=function(O){const R=function(...Q){const Y=Q[0];if(Y==null)return Y;Y.length>1&&(Q=Y);const K=O(Q);if(typeof K=="object")for(let et=K.length,H=0;H<et;H++)K[H]=Math.round(K[H]);return K};return"conversion"in O&&(R.conversion=O.conversion),R}(N),w[g][S].raw=function(O){const R=function(...Q){const Y=Q[0];return Y==null?Y:(Y.length>1&&(Q=Y),O(Q))};return"conversion"in O&&(R.conversion=O.conversion),R}(N)})}),_.exports=w},802:(_,v,p)=>{const I=p(9246);function C(k){const S=function(){const O={},R=Object.keys(I);for(let Q=R.length,Y=0;Y<Q;Y++)O[R[Y]]={distance:-1,parent:null};return O}(),N=[k];for(S[k].distance=0;N.length;){const O=N.pop(),R=Object.keys(I[O]);for(let Q=R.length,Y=0;Y<Q;Y++){const K=R[Y],et=S[K];et.distance===-1&&(et.distance=S[O].distance+1,et.parent=O,N.unshift(K))}}return S}function w(k,S){return function(N){return S(k(N))}}function g(k,S){const N=[S[k].parent,k];let O=I[S[k].parent][k],R=S[k].parent;for(;S[R].parent;)N.unshift(S[R].parent),O=w(I[S[R].parent][R],O),R=S[R].parent;return O.conversion=N,O}_.exports=function(k){const S=C(k),N={},O=Object.keys(S);for(let R=O.length,Q=0;Q<R;Q++){const Y=O[Q];S[Y].parent!==null&&(N[Y]=g(Y,S))}return N}},6931:_=>{_.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const k=g},8708:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const k=g},1866:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);const k=g},7793:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const k=g},7388:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DCED,eDeC,CAjBA,mKCMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAcF,CAjBA,8DAOC,wCAAsB,CAAtB,sBAUD,CARC,8FACC,uBACD,CAEA,qJAEC,QACD,CAMH,yCAEC,0CAA2C,CCtB3C,eDgCD,CAZA,yHChBE,qCAAsC,CDqBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-sticky-panel__content {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border: 1px solid var(--ck-color-base-border);
			border-bottom-width: 0;

			&.ck-sticky-panel__content_sticky {
				border-bottom-width: 1px;
			}

			& .ck-menu-bar,
			& .ck-toolbar {
				border: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const k=g},4098:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const k=g},8264:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const k=g},6269:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const k=g},265:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const k=g},5247:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const k=g},3350:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);const k=g},7378:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const k=g},3469:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const k=g},6386:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const k=g},7693:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const k=g},1559:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const k=g},2267:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const k=g},4062:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const k=g},7719:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const k=g},8762:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const k=g},3817:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const k=g},4808:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const k=g},1232:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const k=g},6903:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const k=g},9968:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const k=g},7141:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const k=g},8991:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const k=g},70:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const k=g},7048:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const k=g},5651:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const k=g},5506:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const k=g},4043:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const k=g},2655:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const k=g},5032:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const k=g},2329:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const k=g},4143:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);const k=g},8986:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const k=g},8795:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const k=g},8137:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const k=g},1623:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const k=g},5562:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const k=g},8423:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const k=g},1801:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}
`],sourceRoot:""}]);const k=g},5727:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const k=g},9715:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD2ID,CCxIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF4ID,CA3IA,wIEGE,qCFwIF,CA3IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAsID,CA5GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAWD,CAZA,6FAIE,mCAQF,CAZA,6FAQE,oCAIF,CAZA,yEAWC,UACD,CAIC,oIIpFD,oDJwFC,CAOA,gLK/FD,kCLiGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC9HA,+CDkIA,CC/HC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CD+GA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC9IC,mDDmJD,CChJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CD+HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		opacity: .5;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const k=g},4391:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const k=g},25:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-list-button-padding);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const k=g},7317:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const k=g},1905:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const k=g},6309:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const k=g},9819:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cAIC,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CExB7C,oCAA8B,CFsB9B,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;

		& .ck-form__header__label {
			cursor: grab;
		}
	}

	@nest .ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const k=g},9822:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const k=g},8149:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const k=g},3629:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const k=g},1792:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const k=g},1666:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const k=g},8527:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const k=g},1185:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const k=g},7913:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const k=g},9529:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const k=g},7621:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const k=g},253:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const k=g},7801:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const k=g},4962:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD+GD,CA1GA,2FCDE,qCD2GF,CAvGC,mEACC,UAoCD,CAlCC,gFACC,KAgCD,CAjCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBA4BF,CAjCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAqBF,CAjCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const k=g},5199:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.11*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item>.ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item>.ck-button{text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button{text-align:right}.ck.ck-list__item>.ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item>.ck-button:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,qJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAwCD,CA1CA,uCAME,eAoCF,CA1CA,uCAUE,gBAgCF,CA1CA,6BAgBC,qCA0BD,CAxBC,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.11 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& > .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& > .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const k=g},497:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
`],sourceRoot:""}]);const k=g},4:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	&.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
}
`],sourceRoot:""}]);const k=g},3344:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{padding:var(--ck-list-button-padding);width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,qCAAsC,CACtC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECdD,kCDgBC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eAiDD,CA/CC,yFACC,wBAAyB,CACzB,eAKD,CAHC,qGACC,0DACD,CAID,iIACC,+DACD,CAEA,qHACC,mCASD,CAVA,+HAIE,wBAMF,CAVA,+HAQE,uBAEF,CAEA,iICrFD,kCDuFC,CAGC,+HAIC,sCAAuC,CAHvC,gCAID,CAIA,+HACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu  {
	& > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * All menu buttons.
	 */
	& > .ck-menu-bar__menu__button {
		padding: var(--ck-list-button-padding);
		width: 100%;

		& > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.ck-disabled > .ck-button__label {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
		}
	}

	/*
	 * Top-level menu buttons only.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;

		& .ck-button__label {
			width: unset;
			line-height: unset;
		}

		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& .ck-icon {
			display: none;
		}
	}

	/*
	 * Sub-menu buttons.
	 */
	&:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;

		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}

		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}

		& > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);

			@mixin ck-dir ltr {
				transform: rotate(-90deg);
			}

			@mixin ck-dir rtl {
				transform: rotate(90deg);
			}
		}

		&.ck-disabled > .ck-menu-bar__menu__button__arrow {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			& > .ck-menu-bar__menu__button__arrow {
				right: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);
			}
		}

		@mixin ck-dir rtl {
			& > .ck-menu-bar__menu__button__arrow {
				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const k=g},9481:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const k=g},977:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__panel>ul>.ck-menu-bar__menu__item>.ck-menu-bar__menu__item__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css"],names:[],mappings:"AASC,iEACC,eA0BD,CAxBC,0LAGC,8BACD,CAEA,uFAEC,4CAA+C,CAC/C,oCACD,CAMA,uEACC,wBAAyB,CACzB,eAKD,CAHC,mFACC,0DACD,CASD,uLACC,+DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/*
	 * List item buttons.
	 */
	& .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;

		& > .ck-spinner-container,
		& > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}

		& > .ck-spinner-container {
			/* These margins are the same as for .ck-icon. */
			margin-left: calc(-1 * var(--ck-spacing-small));
			margin-right: var(--ck-spacing-small);
		}

		/*
		 * Hovered items automatically get focused. Default focus styles look odd
		 * while moving across a huge list of items so let's get rid of them
		 */
		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}
	}

	/*
	 * First-level sub-menu item buttons.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__panel > ul > .ck-menu-bar__menu__item > .ck-menu-bar__menu__item__button {
		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}
	}
}


`],sourceRoot:""}]);const k=g},9108:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCpDD,MACC,uCACD,CAEA,mDCDC,eDmCD,CAlCA,6ICGE,qCD+BF,CAlCA,mDAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CETT,oCAA8B,CFU9B,kBAAmB,CACnB,iDA0BD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

	&.ck-menu-bar__menu__panel_position_se,
	&.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

	&.ck-menu-bar__menu__panel_position_nw,
	&.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_en,
	&.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_wn,
	&.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const k=g},3710:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const k=g},991:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const k=g},5380:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const k=g},8298:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const k=g},2722:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const k=g},8107:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const k=g},109:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}

`],sourceRoot:""}]);const k=g},1671:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const k=g},2710:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const k=g},9677:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const k=g},9205:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);z-index:calc(var(--ck-z-dialog) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDTnC,sCACD,CCUC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const k=g},7676:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const k=g},695:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const k=g},4095:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const k=g},8508:(_,v,p)=>{p.d(v,{A:()=>k});var I=p(9372),C=p.n(I),w=p(935),g=p.n(w)()(C());g.push([_.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const k=g},935:_=>{_.exports=function(v){var p=[];return p.toString=function(){return this.map(function(I){var C=v(I);return I[2]?"@media ".concat(I[2]," {").concat(C,"}"):C}).join("")},p.i=function(I,C,w){typeof I=="string"&&(I=[[null,I,""]]);var g={};if(w)for(var k=0;k<this.length;k++){var S=this[k][0];S!=null&&(g[S]=!0)}for(var N=0;N<I.length;N++){var O=[].concat(I[N]);w&&g[O[0]]||(C&&(O[2]?O[2]="".concat(C," and ").concat(O[2]):O[2]=C),p.push(O))}},p}},9372:_=>{function v(I,C){return function(w){if(Array.isArray(w))return w}(I)||function(w,g){var k=w&&(typeof Symbol<"u"&&w[Symbol.iterator]||w["@@iterator"]);if(k!=null){var S,N,O=[],R=!0,Q=!1;try{for(k=k.call(w);!(R=(S=k.next()).done)&&(O.push(S.value),!g||O.length!==g);R=!0);}catch(Y){Q=!0,N=Y}finally{try{R||k.return==null||k.return()}finally{if(Q)throw N}}return O}}(I,C)||function(w,g){if(w){if(typeof w=="string")return p(w,g);var k=Object.prototype.toString.call(w).slice(8,-1);if(k==="Object"&&w.constructor&&(k=w.constructor.name),k==="Map"||k==="Set")return Array.from(w);if(k==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k))return p(w,g)}}(I,C)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function p(I,C){(C==null||C>I.length)&&(C=I.length);for(var w=0,g=new Array(C);w<C;w++)g[w]=I[w];return g}_.exports=function(I){var C=v(I,4),w=C[1],g=C[3];if(!g)return w;if(typeof btoa=="function"){var k=btoa(unescape(encodeURIComponent(JSON.stringify(g)))),S="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(k),N="/*# ".concat(S," */"),O=g.sources.map(function(R){return"/*# sourceURL=".concat(g.sourceRoot||"").concat(R," */")});return[w].concat(O).concat([N]).join(`
`)}return[w].join(`
`)}},2591:(_,v,p)=>{var I,C=function(){return I===void 0&&(I=!!(window&&document&&document.all&&!window.atob)),I},w=function(){var W={};return function(B){if(W[B]===void 0){var y=document.querySelector(B);if(window.HTMLIFrameElement&&y instanceof window.HTMLIFrameElement)try{y=y.contentDocument.head}catch{y=null}W[B]=y}return W[B]}}(),g=[];function k(W){for(var B=-1,y=0;y<g.length;y++)if(g[y].identifier===W){B=y;break}return B}function S(W,B){for(var y={},z=[],U=0;U<W.length;U++){var G=W[U],$=B.base?G[0]+B.base:G[0],q=y[$]||0,Z="".concat($," ").concat(q);y[$]=q+1;var F=k(Z),j={css:G[1],media:G[2],sourceMap:G[3]};F!==-1?(g[F].references++,g[F].updater(j)):g.push({identifier:Z,updater:H(j,B),references:1}),z.push(Z)}return z}function N(W){var B=document.createElement("style"),y=W.attributes||{};if(y.nonce===void 0){var z=p.nc;z&&(y.nonce=z)}if(Object.keys(y).forEach(function(G){B.setAttribute(G,y[G])}),typeof W.insert=="function")W.insert(B);else{var U=w(W.insert||"head");if(!U)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");U.appendChild(B)}return B}var O,R=(O=[],function(W,B){return O[W]=B,O.filter(Boolean).join(`
`)});function Q(W,B,y,z){var U=y?"":z.media?"@media ".concat(z.media," {").concat(z.css,"}"):z.css;if(W.styleSheet)W.styleSheet.cssText=R(B,U);else{var G=document.createTextNode(U),$=W.childNodes;$[B]&&W.removeChild($[B]),$.length?W.insertBefore(G,$[B]):W.appendChild(G)}}function Y(W,B,y){var z=y.css,U=y.media,G=y.sourceMap;if(U?W.setAttribute("media",U):W.removeAttribute("media"),G&&typeof btoa<"u"&&(z+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(G))))," */")),W.styleSheet)W.styleSheet.cssText=z;else{for(;W.firstChild;)W.removeChild(W.firstChild);W.appendChild(document.createTextNode(z))}}var K=null,et=0;function H(W,B){var y,z,U;if(B.singleton){var G=et++;y=K||(K=N(B)),z=Q.bind(null,y,G,!1),U=Q.bind(null,y,G,!0)}else y=N(B),z=Y.bind(null,y,B),U=function(){(function($){if($.parentNode===null)return!1;$.parentNode.removeChild($)})(y)};return z(W),function($){if($){if($.css===W.css&&$.media===W.media&&$.sourceMap===W.sourceMap)return;z(W=$)}else U()}}_.exports=function(W,B){(B=B||{}).singleton||typeof B.singleton=="boolean"||(B.singleton=C());var y=S(W=W||[],B);return function(z){if(z=z||[],Object.prototype.toString.call(z)==="[object Array]"){for(var U=0;U<y.length;U++){var G=k(y[U]);g[G].references--}for(var $=S(z,B),q=0;q<y.length;q++){var Z=k(y[q]);g[Z].references===0&&(g[Z].updater(),g.splice(Z,1))}y=$}}}}},x={};function b(_){var v=x[_];if(v!==void 0)return v.exports;var p=x[_]={id:_,exports:{}};return T[_](p,p.exports,b),p.exports}b.n=_=>{var v=_&&_.__esModule?()=>_.default:()=>_;return b.d(v,{a:v}),v},b.d=(_,v)=>{for(var p in v)b.o(v,p)&&!b.o(_,p)&&Object.defineProperty(_,p,{enumerable:!0,get:v[p]})},b.o=(_,v)=>Object.prototype.hasOwnProperty.call(_,v),b.nc=void 0;var D={};return(()=>{function _({emitter:o,activator:t,callback:e,contextElements:n}){o.listenTo(document,"mousedown",(i,r)=>{if(!t())return;const s=typeof r.composedPath=="function"?r.composedPath():[],a=typeof n=="function"?n():n;for(const c of a)if(c.contains(r.target)||s.includes(c))return;e()})}function v(o){return class extends o{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...t){super(...t),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function p({view:o}){o.listenTo(o.element,"submit",(t,e)=>{e.preventDefault(),o.fire("submit")},{useCapture:!0})}function I({keystrokeHandler:o,focusTracker:t,gridItems:e,numberOfColumns:n,uiLanguageDirection:i}){const r=typeof n=="number"?()=>n:n;function s(l){return d=>{const h=e.find(E=>E.element===t.focusedElement),f=e.getIndex(h),A=l(f,e);e.get(A).focus(),d.stopPropagation(),d.preventDefault()}}function a(l,d){return l===d-1?0:l+1}function c(l,d){return l===0?d-1:l-1}o.set("arrowright",s((l,d)=>i==="rtl"?c(l,d.length):a(l,d.length))),o.set("arrowleft",s((l,d)=>i==="rtl"?a(l,d.length):c(l,d.length))),o.set("arrowup",s((l,d)=>{let h=l-r();return h<0&&(h=l+r()*Math.floor(d.length/r()),h>d.length-1&&(h-=r())),h})),o.set("arrowdown",s((l,d)=>{let h=l+r();return h>d.length-1&&(h=l%r()),h}))}b.d(D,{default:()=>yd});const C=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var w;const g={isMac:k(C),isWindows:(w=C,w.indexOf("windows")>-1),isGecko:function(o){return!!o.match(/gecko\/\d+/)}(C),isSafari:function(o){return o.indexOf(" applewebkit/")>-1&&o.indexOf("chrome")===-1}(C),isiOS:function(o){return!!o.match(/iphone|ipad/i)||k(o)&&navigator.maxTouchPoints>0}(C),isAndroid:function(o){return o.indexOf("android")>-1}(C),isBlink:function(o){return o.indexOf("chrome/")>-1&&o.indexOf("edge/")<0}(C),features:{isRegExpUnicodePropertySupported:function(){let o=!1;try{o="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return o}()}};function k(o){return o.indexOf("macintosh")>-1}function S(o,t,e,n){e=e||function(c,l){return c===l};const i=Array.isArray(o)?o:Array.prototype.slice.call(o),r=Array.isArray(t)?t:Array.prototype.slice.call(t),s=function(c,l,d){const h=N(c,l,d);if(h===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const f=O(c,h),A=O(l,h),E=N(f,A,d),M=c.length-E,L=l.length-E;return{firstIndex:h,lastIndexOld:M,lastIndexNew:L}}(i,r,e);return n?function(c,l){const{firstIndex:d,lastIndexOld:h,lastIndexNew:f}=c;if(d===-1)return Array(l).fill("equal");let A=[];return d>0&&(A=A.concat(Array(d).fill("equal"))),f-d>0&&(A=A.concat(Array(f-d).fill("insert"))),h-d>0&&(A=A.concat(Array(h-d).fill("delete"))),f<l&&(A=A.concat(Array(l-f).fill("equal"))),A}(s,r.length):function(c,l){const d=[],{firstIndex:h,lastIndexOld:f,lastIndexNew:A}=l;return A-h>0&&d.push({index:h,type:"insert",values:c.slice(h,A)}),f-h>0&&d.push({index:h+(A-h),type:"delete",howMany:f-h}),d}(r,s)}function N(o,t,e){for(let n=0;n<Math.max(o.length,t.length);n++)if(o[n]===void 0||t[n]===void 0||!e(o[n],t[n]))return n;return-1}function O(o,t){return o.slice(t).reverse()}function R(o,t,e){e=e||function(M,L){return M===L};const n=o.length,i=t.length;if(n>200||i>200||n+i>300)return R.fastDiff(o,t,e,!0);let r,s;if(i<n){const M=o;o=t,t=M,r="delete",s="insert"}else r="insert",s="delete";const a=o.length,c=t.length,l=c-a,d={},h={};function f(M){const L=(h[M-1]!==void 0?h[M-1]:-1)+1,V=h[M+1]!==void 0?h[M+1]:-1,J=L>V?-1:1;d[M+J]&&(d[M]=d[M+J].slice(0)),d[M]||(d[M]=[]),d[M].push(L>V?r:s);let it=Math.max(L,V),lt=it-M;for(;lt<a&&it<c&&e(o[lt],t[it]);)lt++,it++,d[M].push("equal");return it}let A,E=0;do{for(A=-E;A<l;A++)h[A]=f(A);for(A=l+E;A>l;A--)h[A]=f(A);h[l]=f(l),E++}while(h[l]!==c);return d[l].slice(1)}R.fastDiff=S;const Q=function(){return function o(){o.called=!0}};class Y{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=Q(),this.off=Q()}}const K=new Array(256).fill("").map((o,t)=>("0"+t.toString(16)).slice(-2));function et(){const o=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+K[255&o]+K[o>>8&255]+K[o>>16&255]+K[o>>24&255]+K[255&t]+K[t>>8&255]+K[t>>16&255]+K[t>>24&255]+K[255&e]+K[e>>8&255]+K[e>>16&255]+K[e>>24&255]+K[255&n]+K[n>>8&255]+K[n>>16&255]+K[n>>24&255]}const H={get(o="normal"){return typeof o!="number"?this[o]||this.normal:o},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function W(o,t){const e=H.get(t.priority);for(let n=0;n<o.length;n++)if(H.get(o[n].priority)<e)return void o.splice(n,0,t);o.push(t)}const B="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class y extends Error{constructor(t,e,n){super(function(i,r){const s=new WeakSet,a=(d,h)=>{if(typeof h=="object"&&h!==null){if(s.has(h))return`[object ${h.constructor.name}]`;s.add(h)}return h},c=r?` ${JSON.stringify(r,a)}`:"",l=G(i);return i+c+l}(t,n)),this.name="CKEditorError",this.context=e,this.data=n}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const n=new y(t.message,e);throw n.stack=t.stack,n}}function z(o,t){console.warn(...$(o,t))}function U(o,t){console.error(...$(o,t))}function G(o){return`
Read more: ${B}#error-${o}`}function $(o,t){const e=G(o);return t?[o,t,e]:[o,e]}const q="41.3.1",Z=new Date(2024,3,16);if(globalThis.CKEDITOR_VERSION)throw new y("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=q;const F=Symbol("listeningTo"),j=Symbol("emitterId"),st=Symbol("delegations"),X=nt(Object);function nt(o){return o?class extends o{on(t,e,n){this.listenTo(this,t,e,n)}once(t,e,n){let i=!1;this.listenTo(this,t,(r,...s)=>{i||(i=!0,r.off(),e.call(this,r,...s))},n)}off(t,e){this.stopListening(this,t,e)}listenTo(t,e,n,i={}){let r,s;this[F]||(this[F]={});const a=this[F];ht(t)||ft(t);const c=ht(t);(r=a[c])||(r=a[c]={emitter:t,callbacks:{}}),(s=r.callbacks[e])||(s=r.callbacks[e]=[]),s.push(n),function(l,d,h,f,A){d._addEventListener?d._addEventListener(h,f,A):l._addEventListener.call(d,h,f,A)}(this,t,e,n,i)}stopListening(t,e,n){const i=this[F];let r=t&&ht(t);const s=i&&r?i[r]:void 0,a=s&&e?s.callbacks[e]:void 0;if(!(!i||t&&!s||e&&!a))if(n)Jt(this,t,e,n),a.indexOf(n)!==-1&&(a.length===1?delete s.callbacks[e]:Jt(this,t,e,n));else if(a){for(;n=a.pop();)Jt(this,t,e,n);delete s.callbacks[e]}else if(s){for(e in s.callbacks)this.stopListening(t,e);delete i[r]}else{for(r in i)this.stopListening(i[r].emitter);delete this[F]}}fire(t,...e){try{const n=t instanceof Y?t:new Y(this,t),i=n.name;let r=ct(this,i);if(n.path.push(this),r){const a=[n,...e];r=Array.from(r);for(let c=0;c<r.length&&(r[c].callback.apply(this,a),n.off.called&&(delete n.off.called,this._removeEventListener(i,r[c].callback)),!n.stop.called);c++);}const s=this[st];if(s){const a=s.get(i),c=s.get("*");a&&Nt(a,n,e),c&&Nt(c,n,e)}return n.return}catch(n){y.rethrowUnexpectedError(n,this)}}delegate(...t){return{to:(e,n)=>{this[st]||(this[st]=new Map),t.forEach(i=>{const r=this[st].get(i);r?r.set(e,n):this[st].set(i,new Map([[e,n]]))})}}}stopDelegating(t,e){if(this[st])if(t)if(e){const n=this[st].get(t);n&&n.delete(e)}else this[st].delete(t);else this[st].clear()}_addEventListener(t,e,n){(function(s,a){const c=vt(s);if(c[a])return;let l=a,d=null;const h=[];for(;l!==""&&!c[l];)c[l]={callbacks:[],childEvents:[]},h.push(c[l]),d&&c[l].childEvents.push(d),d=l,l=l.substr(0,l.lastIndexOf(":"));if(l!==""){for(const f of h)f.callbacks=c[l].callbacks.slice();c[l].childEvents.push(d)}})(this,t);const i=dt(this,t),r={callback:e,priority:H.get(n.priority)};for(const s of i)W(s,r)}_removeEventListener(t,e){const n=dt(this,t);for(const i of n)for(let r=0;r<i.length;r++)i[r].callback==e&&(i.splice(r,1),r--)}}:X}function ft(o,t){o[j]||(o[j]=t||et())}function ht(o){return o[j]}function vt(o){return o._events||Object.defineProperty(o,"_events",{value:{}}),o._events}function dt(o,t){const e=vt(o)[t];if(!e)return[];let n=[e.callbacks];for(let i=0;i<e.childEvents.length;i++){const r=dt(o,e.childEvents[i]);n=n.concat(r)}return n}function ct(o,t){let e;return o._events&&(e=o._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?ct(o,t.substr(0,t.lastIndexOf(":"))):null}function Nt(o,t,e){for(let[n,i]of o){i?typeof i=="function"&&(i=i(t.name)):i=t.name;const r=new Y(t.source,i);r.path=[...t.path],n.fire(r,...e)}}function Jt(o,t,e,n){t._removeEventListener?t._removeEventListener(e,n):o._removeEventListener.call(t,e,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{nt[o]=X.prototype[o]});const It=function(o){var t=typeof o;return o!=null&&(t=="object"||t=="function")},Pt=Symbol("observableProperties"),Xt=Symbol("boundObservables"),Yt=Symbol("boundProperties"),xt=Symbol("decoratedMethods"),Ut=Symbol("decoratedOriginal"),Rt=Ct(nt());function Ct(o){return o?class extends o{set(t,e){if(It(t))return void Object.keys(t).forEach(i=>{this.set(i,t[i])},this);te(this);const n=this[Pt];if(t in this&&!n.has(t))throw new y("observable-set-cannot-override",this);Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(i){const r=n.get(t);let s=this.fire(`set:${t}`,t,i,r);s===void 0&&(s=i),r===s&&n.has(t)||(n.set(t,s),this.fire(`change:${t}`,t,s,r))}}),this[t]=e}bind(...t){if(!t.length||!Ht(t))throw new y("observable-bind-wrong-properties",this);if(new Set(t).size!==t.length)throw new y("observable-bind-duplicate-properties",this);te(this);const e=this[Yt];t.forEach(i=>{if(e.has(i))throw new y("observable-bind-rebind",this)});const n=new Map;return t.forEach(i=>{const r={property:i,to:[]};e.set(i,r),n.set(i,r)}),{to:Lt,toMany:Gt,_observable:this,_bindProperties:t,_to:[],_bindings:n}}unbind(...t){if(!this[Pt])return;const e=this[Yt],n=this[Xt];if(t.length){if(!Ht(t))throw new y("observable-unbind-wrong-properties",this);t.forEach(i=>{const r=e.get(i);r&&(r.to.forEach(([s,a])=>{const c=n.get(s),l=c[a];l.delete(r),l.size||delete c[a],Object.keys(c).length||(n.delete(s),this.stopListening(s,"change"))}),e.delete(i))})}else n.forEach((i,r)=>{this.stopListening(r,"change")}),n.clear(),e.clear()}decorate(t){te(this);const e=this[t];if(!e)throw new y("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:t});this.on(t,(n,i)=>{n.return=e.apply(this,i)}),this[t]=function(...n){return this.fire(t,n)},this[t][Ut]=e,this[xt]||(this[xt]=[]),this[xt].push(t)}stopListening(t,e,n){if(!t&&this[xt]){for(const i of this[xt])this[i]=this[i][Ut];delete this[xt]}super.stopListening(t,e,n)}}:Rt}function te(o){o[Pt]||(Object.defineProperty(o,Pt,{value:new Map}),Object.defineProperty(o,Xt,{value:new Map}),Object.defineProperty(o,Yt,{value:new Map}))}function Lt(...o){const t=function(...r){if(!r.length)throw new y("observable-bind-to-parse-error",null);const s={to:[]};let a;return typeof r[r.length-1]=="function"&&(s.callback=r.pop()),r.forEach(c=>{if(typeof c=="string")a.properties.push(c);else{if(typeof c!="object")throw new y("observable-bind-to-parse-error",null);a={observable:c,properties:[]},s.to.push(a)}}),s}(...o),e=Array.from(this._bindings.keys()),n=e.length;if(!t.callback&&t.to.length>1)throw new y("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new y("observable-bind-to-extra-callback",this);var i;t.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new y("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),i=this._observable,this._to.forEach(r=>{const s=i[Xt];let a;s.get(r.observable)||i.listenTo(r.observable,"change",(c,l)=>{a=s.get(r.observable)[l],a&&a.forEach(d=>{Kt(i,d.property)})})}),function(r){let s;r._bindings.forEach((a,c)=>{r._to.forEach(l=>{s=l.properties[a.callback?0:r._bindProperties.indexOf(c)],a.to.push([l.observable,s]),function(d,h,f,A){const E=d[Xt],M=E.get(f),L=M||{};L[A]||(L[A]=new Set),L[A].add(h),M||E.set(f,L)}(r._observable,a,l.observable,s)})})}(this),this._bindProperties.forEach(r=>{Kt(this._observable,r)})}function Gt(o,t,e){if(this._bindings.size>1)throw new y("observable-bind-to-many-not-one-binding",this);this.to(...function(n,i){const r=n.map(s=>[s,i]);return Array.prototype.concat.apply([],r)}(o,t),e)}function Ht(o){return o.every(t=>typeof t=="string")}function Kt(o,t){const e=o[Yt].get(t);let n;e.callback?n=e.callback.apply(o,e.to.map(i=>i[0][i[1]])):(n=e.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(o,t)?o[t]=n:o.set(t,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{Ct[o]=Rt.prototype[o]});class $t{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}function ee(o){let t=0;for(const e of o)t++;return t}function Et(o,t){const e=Math.min(o.length,t.length);for(let n=0;n<e;n++)if(o[n]!=t[n])return n;return o.length==t.length?"same":o.length<t.length?"prefix":"extension"}function Dt(o){return!(!o||!o[Symbol.iterator])}const ue=typeof Ua=="object"&&Ua&&Ua.Object===Object&&Ua;var rn=typeof self=="object"&&self&&self.Object===Object&&self;const Ie=ue||rn||Function("return this")(),se=Ie.Symbol;var Je=Object.prototype,Se=Je.hasOwnProperty,Fe=Je.toString,ye=se?se.toStringTag:void 0;const Me=function(o){var t=Se.call(o,ye),e=o[ye];try{o[ye]=void 0;var n=!0}catch{}var i=Fe.call(o);return n&&(t?o[ye]=e:delete o[ye]),i};var Ne=Object.prototype.toString;const pn=function(o){return Ne.call(o)};var zn=se?se.toStringTag:void 0;const _n=function(o){return o==null?o===void 0?"[object Undefined]":"[object Null]":zn&&zn in Object(o)?Me(o):pn(o)},xe=Array.isArray,Ke=function(o){return o!=null&&typeof o=="object"},Fn=function(o){return typeof o=="string"||!xe(o)&&Ke(o)&&_n(o)=="[object String]"};function ie(o,t,e={},n=[]){const i=e&&e.xmlns,r=i?o.createElementNS(i,t):o.createElement(t);for(const s in e)r.setAttribute(s,e[s]);!Fn(n)&&Dt(n)||(n=[n]);for(let s of n)Fn(s)&&(s=o.createTextNode(s)),r.appendChild(s);return r}const Be=function(o,t){return function(e){return o(t(e))}},We=Be(Object.getPrototypeOf,Object);var Vn=Function.prototype,Un=Object.prototype,eo=Vn.toString,Cn=Un.hasOwnProperty,vn=eo.call(Object);const sn=function(o){if(!Ke(o)||_n(o)!="[object Object]")return!1;var t=We(o);if(t===null)return!0;var e=Cn.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&eo.call(e)==vn},ni=function(){this.__data__=[],this.size=0},no=function(o,t){return o===t||o!=o&&t!=t},xo=function(o,t){for(var e=o.length;e--;)if(no(o[e][0],t))return e;return-1};var mn=Array.prototype.splice;const oi=function(o){var t=this.__data__,e=xo(t,o);return!(e<0)&&(e==t.length-1?t.pop():mn.call(t,e,1),--this.size,!0)},Ni=function(o){var t=this.__data__,e=xo(t,o);return e<0?void 0:t[e][1]},Pi=function(o){return xo(this.__data__,o)>-1},yr=function(o,t){var e=this.__data__,n=xo(e,o);return n<0?(++this.size,e.push([o,t])):e[n][1]=t,this};function oo(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}oo.prototype.clear=ni,oo.prototype.delete=oi,oo.prototype.get=Ni,oo.prototype.has=Pi,oo.prototype.set=yr;const ot=oo,wt=function(){this.__data__=new ot,this.size=0},ut=function(o){var t=this.__data__,e=t.delete(o);return this.size=t.size,e},yt=function(o){return this.__data__.get(o)},Bt=function(o){return this.__data__.has(o)},jt=function(o){if(!It(o))return!1;var t=_n(o);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},At=Ie["__core-js_shared__"];var tt=function(){var o=/[^.]+$/.exec(At&&At.keys&&At.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();const mt=function(o){return!!tt&&tt in o};var St=Function.prototype.toString;const Ft=function(o){if(o!=null){try{return St.call(o)}catch{}try{return o+""}catch{}}return""};var Ve=/^\[object .+?Constructor\]$/,Pe=Function.prototype,Ge=Object.prototype,Ee=Pe.toString,an=Ge.hasOwnProperty,Oe=RegExp("^"+Ee.call(an).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Cs=function(o){return!(!It(o)||mt(o))&&(jt(o)?Oe:Ve).test(Ft(o))},vs=function(o,t){return o==null?void 0:o[t]},ii=function(o,t){var e=vs(o,t);return Cs(e)?e:void 0},xr=ii(Ie,"Map"),Er=ii(Object,"create"),lC=function(){this.__data__=Er?Er(null):{},this.size=0},dC=function(o){var t=this.has(o)&&delete this.__data__[o];return this.size-=t?1:0,t};var uC=Object.prototype.hasOwnProperty;const hC=function(o){var t=this.__data__;if(Er){var e=t[o];return e==="__lodash_hash_undefined__"?void 0:e}return uC.call(t,o)?t[o]:void 0};var gC=Object.prototype.hasOwnProperty;const pC=function(o){var t=this.__data__;return Er?t[o]!==void 0:gC.call(t,o)},mC=function(o,t){var e=this.__data__;return this.size+=this.has(o)?0:1,e[o]=Er&&t===void 0?"__lodash_hash_undefined__":t,this};function Oi(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}Oi.prototype.clear=lC,Oi.prototype.delete=dC,Oi.prototype.get=hC,Oi.prototype.has=pC,Oi.prototype.set=mC;const bu=Oi,fC=function(){this.size=0,this.__data__={hash:new bu,map:new(xr||ot),string:new bu}},kC=function(o){var t=typeof o;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?o!=="__proto__":o===null},ys=function(o,t){var e=o.__data__;return kC(t)?e[typeof t=="string"?"string":"hash"]:e.map},bC=function(o){var t=ys(this,o).delete(o);return this.size-=t?1:0,t},wC=function(o){return ys(this,o).get(o)},AC=function(o){return ys(this,o).has(o)},_C=function(o,t){var e=ys(this,o),n=e.size;return e.set(o,t),this.size+=e.size==n?0:1,this};function Li(o){var t=-1,e=o==null?0:o.length;for(this.clear();++t<e;){var n=o[t];this.set(n[0],n[1])}}Li.prototype.clear=fC,Li.prototype.delete=bC,Li.prototype.get=wC,Li.prototype.has=AC,Li.prototype.set=_C;const xs=Li,CC=function(o,t){var e=this.__data__;if(e instanceof ot){var n=e.__data__;if(!xr||n.length<199)return n.push([o,t]),this.size=++e.size,this;e=this.__data__=new xs(n)}return e.set(o,t),this.size=e.size,this};function Ri(o){var t=this.__data__=new ot(o);this.size=t.size}Ri.prototype.clear=wt,Ri.prototype.delete=ut,Ri.prototype.get=yt,Ri.prototype.has=Bt,Ri.prototype.set=CC;const ji=Ri,vC=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n&&t(o[e],e,o)!==!1;);return o},Es=function(){try{var o=ii(Object,"defineProperty");return o({},"",{}),o}catch{}}(),Ds=function(o,t,e){t=="__proto__"&&Es?Es(o,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):o[t]=e};var yC=Object.prototype.hasOwnProperty;const mc=function(o,t,e){var n=o[t];yC.call(o,t)&&no(n,e)&&(e!==void 0||t in o)||Ds(o,t,e)},zi=function(o,t,e,n){var i=!e;e||(e={});for(var r=-1,s=t.length;++r<s;){var a=t[r],c=void 0;c===void 0&&(c=o[a]),i?Ds(e,a,c):mc(e,a,c)}return e},xC=function(o,t){for(var e=-1,n=Array(o);++e<o;)n[e]=t(e);return n},wu=function(o){return Ke(o)&&_n(o)=="[object Arguments]"};var Au=Object.prototype,EC=Au.hasOwnProperty,DC=Au.propertyIsEnumerable;const Ts=wu(function(){return arguments}())?wu:function(o){return Ke(o)&&EC.call(o,"callee")&&!DC.call(o,"callee")},TC=function(){return!1};var _u=m&&!m.nodeType&&m,Cu=_u&&!0&&u&&!u.nodeType&&u,vu=Cu&&Cu.exports===_u?Ie.Buffer:void 0;const Dr=(vu?vu.isBuffer:void 0)||TC;var IC=/^(?:0|[1-9]\d*)$/;const Is=function(o,t){var e=typeof o;return!!(t=t??9007199254740991)&&(e=="number"||e!="symbol"&&IC.test(o))&&o>-1&&o%1==0&&o<t},fc=function(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=9007199254740991};var De={};De["[object Float32Array]"]=De["[object Float64Array]"]=De["[object Int8Array]"]=De["[object Int16Array]"]=De["[object Int32Array]"]=De["[object Uint8Array]"]=De["[object Uint8ClampedArray]"]=De["[object Uint16Array]"]=De["[object Uint32Array]"]=!0,De["[object Arguments]"]=De["[object Array]"]=De["[object ArrayBuffer]"]=De["[object Boolean]"]=De["[object DataView]"]=De["[object Date]"]=De["[object Error]"]=De["[object Function]"]=De["[object Map]"]=De["[object Number]"]=De["[object Object]"]=De["[object RegExp]"]=De["[object Set]"]=De["[object String]"]=De["[object WeakMap]"]=!1;const SC=function(o){return Ke(o)&&fc(o.length)&&!!De[_n(o)]},kc=function(o){return function(t){return o(t)}};var yu=m&&!m.nodeType&&m,Tr=yu&&!0&&u&&!u.nodeType&&u,bc=Tr&&Tr.exports===yu&&ue.process;const Fi=function(){try{var o=Tr&&Tr.require&&Tr.require("util").types;return o||bc&&bc.binding&&bc.binding("util")}catch{}}();var xu=Fi&&Fi.isTypedArray;const wc=xu?kc(xu):SC;var MC=Object.prototype.hasOwnProperty;const Eu=function(o,t){var e=xe(o),n=!e&&Ts(o),i=!e&&!n&&Dr(o),r=!e&&!n&&!i&&wc(o),s=e||n||i||r,a=s?xC(o.length,String):[],c=a.length;for(var l in o)!t&&!MC.call(o,l)||s&&(l=="length"||i&&(l=="offset"||l=="parent")||r&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Is(l,c))||a.push(l);return a};var BC=Object.prototype;const Ac=function(o){var t=o&&o.constructor;return o===(typeof t=="function"&&t.prototype||BC)},NC=Be(Object.keys,Object);var PC=Object.prototype.hasOwnProperty;const OC=function(o){if(!Ac(o))return NC(o);var t=[];for(var e in Object(o))PC.call(o,e)&&e!="constructor"&&t.push(e);return t},Ss=function(o){return o!=null&&fc(o.length)&&!jt(o)},Ir=function(o){return Ss(o)?Eu(o):OC(o)},LC=function(o,t){return o&&zi(t,Ir(t),o)},RC=function(o){var t=[];if(o!=null)for(var e in Object(o))t.push(e);return t};var jC=Object.prototype.hasOwnProperty;const zC=function(o){if(!It(o))return RC(o);var t=Ac(o),e=[];for(var n in o)(n!="constructor"||!t&&jC.call(o,n))&&e.push(n);return e},Vi=function(o){return Ss(o)?Eu(o,!0):zC(o)},FC=function(o,t){return o&&zi(t,Vi(t),o)};var Du=m&&!m.nodeType&&m,Tu=Du&&!0&&u&&!u.nodeType&&u,Iu=Tu&&Tu.exports===Du?Ie.Buffer:void 0,Su=Iu?Iu.allocUnsafe:void 0;const Mu=function(o,t){if(t)return o.slice();var e=o.length,n=Su?Su(e):new o.constructor(e);return o.copy(n),n},Bu=function(o,t){var e=-1,n=o.length;for(t||(t=Array(n));++e<n;)t[e]=o[e];return t},VC=function(o,t){for(var e=-1,n=o==null?0:o.length,i=0,r=[];++e<n;){var s=o[e];t(s,e,o)&&(r[i++]=s)}return r},Nu=function(){return[]};var UC=Object.prototype.propertyIsEnumerable,Pu=Object.getOwnPropertySymbols;const _c=Pu?function(o){return o==null?[]:(o=Object(o),VC(Pu(o),function(t){return UC.call(o,t)}))}:Nu,HC=function(o,t){return zi(o,_c(o),t)},Ou=function(o,t){for(var e=-1,n=t.length,i=o.length;++e<n;)o[i+e]=t[e];return o},Lu=Object.getOwnPropertySymbols?function(o){for(var t=[];o;)Ou(t,_c(o)),o=We(o);return t}:Nu,$C=function(o,t){return zi(o,Lu(o),t)},Ru=function(o,t,e){var n=t(o);return xe(o)?n:Ou(n,e(o))},Cc=function(o){return Ru(o,Ir,_c)},WC=function(o){return Ru(o,Vi,Lu)},vc=ii(Ie,"DataView"),yc=ii(Ie,"Promise"),xc=ii(Ie,"Set"),Ec=ii(Ie,"WeakMap");var ju="[object Map]",zu="[object Promise]",Fu="[object Set]",Vu="[object WeakMap]",Uu="[object DataView]",GC=Ft(vc),qC=Ft(xr),KC=Ft(yc),YC=Ft(xc),QC=Ft(Ec),ri=_n;(vc&&ri(new vc(new ArrayBuffer(1)))!=Uu||xr&&ri(new xr)!=ju||yc&&ri(yc.resolve())!=zu||xc&&ri(new xc)!=Fu||Ec&&ri(new Ec)!=Vu)&&(ri=function(o){var t=_n(o),e=t=="[object Object]"?o.constructor:void 0,n=e?Ft(e):"";if(n)switch(n){case GC:return Uu;case qC:return ju;case KC:return zu;case YC:return Fu;case QC:return Vu}return t});const Sr=ri;var ZC=Object.prototype.hasOwnProperty;const JC=function(o){var t=o.length,e=new o.constructor(t);return t&&typeof o[0]=="string"&&ZC.call(o,"index")&&(e.index=o.index,e.input=o.input),e},Ms=Ie.Uint8Array,Dc=function(o){var t=new o.constructor(o.byteLength);return new Ms(t).set(new Ms(o)),t},XC=function(o,t){var e=t?Dc(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.byteLength)};var tv=/\w*$/;const ev=function(o){var t=new o.constructor(o.source,tv.exec(o));return t.lastIndex=o.lastIndex,t};var Hu=se?se.prototype:void 0,$u=Hu?Hu.valueOf:void 0;const nv=function(o){return $u?Object($u.call(o)):{}},Wu=function(o,t){var e=t?Dc(o.buffer):o.buffer;return new o.constructor(e,o.byteOffset,o.length)},ov=function(o,t,e){var n=o.constructor;switch(t){case"[object ArrayBuffer]":return Dc(o);case"[object Boolean]":case"[object Date]":return new n(+o);case"[object DataView]":return XC(o,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Wu(o,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(o);case"[object RegExp]":return ev(o);case"[object Symbol]":return nv(o)}};var Gu=Object.create;const iv=function(){function o(){}return function(t){if(!It(t))return{};if(Gu)return Gu(t);o.prototype=t;var e=new o;return o.prototype=void 0,e}}(),qu=function(o){return typeof o.constructor!="function"||Ac(o)?{}:iv(We(o))},rv=function(o){return Ke(o)&&Sr(o)=="[object Map]"};var Ku=Fi&&Fi.isMap;const sv=Ku?kc(Ku):rv,av=function(o){return Ke(o)&&Sr(o)=="[object Set]"};var Yu=Fi&&Fi.isSet;const cv=Yu?kc(Yu):av;var Qu="[object Arguments]",Zu="[object Function]",Ju="[object Object]",Ce={};Ce[Qu]=Ce["[object Array]"]=Ce["[object ArrayBuffer]"]=Ce["[object DataView]"]=Ce["[object Boolean]"]=Ce["[object Date]"]=Ce["[object Float32Array]"]=Ce["[object Float64Array]"]=Ce["[object Int8Array]"]=Ce["[object Int16Array]"]=Ce["[object Int32Array]"]=Ce["[object Map]"]=Ce["[object Number]"]=Ce[Ju]=Ce["[object RegExp]"]=Ce["[object Set]"]=Ce["[object String]"]=Ce["[object Symbol]"]=Ce["[object Uint8Array]"]=Ce["[object Uint8ClampedArray]"]=Ce["[object Uint16Array]"]=Ce["[object Uint32Array]"]=!0,Ce["[object Error]"]=Ce[Zu]=Ce["[object WeakMap]"]=!1;const Tc=function o(t,e,n,i,r,s){var a,c=1&e,l=2&e,d=4&e;if(n&&(a=r?n(t,i,r,s):n(t)),a!==void 0)return a;if(!It(t))return t;var h=xe(t);if(h){if(a=JC(t),!c)return Bu(t,a)}else{var f=Sr(t),A=f==Zu||f=="[object GeneratorFunction]";if(Dr(t))return Mu(t,c);if(f==Ju||f==Qu||A&&!r){if(a=l||A?{}:qu(t),!c)return l?$C(t,FC(a,t)):HC(t,LC(a,t))}else{if(!Ce[f])return r?t:{};a=ov(t,f,c)}}s||(s=new ji);var E=s.get(t);if(E)return E;s.set(t,a),cv(t)?t.forEach(function(L){a.add(o(L,e,n,L,t,s))}):sv(t)&&t.forEach(function(L,V){a.set(V,o(L,e,n,V,t,s))});var M=h?void 0:(d?l?WC:Cc:l?Vi:Ir)(t);return vC(M||t,function(L,V){M&&(L=t[V=L]),mc(a,V,o(L,e,n,V,t,s))}),a},Ic=function(o,t){return Tc(o,5,t=typeof t=="function"?t:void 0)},si=function(o){return Ke(o)&&o.nodeType===1&&!sn(o)};class Xu{constructor(t,e){this._config={},e&&this.define(th(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(const t of Object.keys(this._config))yield t}_setToTarget(t,e,n,i=!1){if(sn(e))return void this._setObjectToTarget(t,e,i);const r=e.split(".");e=r.pop();for(const s of r)sn(t[s])||(t[s]={}),t=t[s];if(sn(n))return sn(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,i);i&&t[e]!==void 0||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const i of n){if(!sn(t[i])){t=null;break}t=t[i]}return t?th(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(i=>{this._setToTarget(t,i,e[i],n)})}}function th(o){return Ic(o,lv)}function lv(o){return si(o)||typeof o=="function"?o:void 0}function Uo(o){if(o){if(o.defaultView)return o instanceof o.defaultView.Document;if(o.ownerDocument&&o.ownerDocument.defaultView)return o instanceof o.ownerDocument.defaultView.Node}return!1}function Bs(o){const t=Object.prototype.toString.apply(o);return t=="[object Window]"||t=="[object global]"}const eh=Hn(nt());function Hn(o){return o?class extends o{listenTo(t,e,n,i={}){if(Uo(t)||Bs(t)){const r={capture:!!i.useCapture,passive:!!i.usePassive},s=this._getProxyEmitter(t,r)||new dv(t,r);this.listenTo(s,e,n,i)}else super.listenTo(t,e,n,i)}stopListening(t,e,n){if(Uo(t)||Bs(t)){const i=this._getAllProxyEmitters(t);for(const r of i)this.stopListening(r,e,n)}else super.stopListening(t,e,n)}_getProxyEmitter(t,e){return function(n,i){const r=n[F];return r&&r[i]?r[i].emitter:null}(this,nh(t,e))}_getAllProxyEmitters(t){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(t,e)).filter(e=>!!e)}}:eh}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(o=>{Hn[o]=eh.prototype[o]});class dv extends nt(){constructor(t,e){super(),ft(this,nh(t,e)),this._domNode=t,this._options=e}attach(t){if(this._domListeners&&this._domListeners[t])return;const e=this._createDomListener(t);this._domNode.addEventListener(t,e,this._options),this._domListeners||(this._domListeners={}),this._domListeners[t]=e}detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()}_addEventListener(t,e,n){this.attach(t),nt().prototype._addEventListener.call(this,t,e,n)}_removeEventListener(t,e){nt().prototype._removeEventListener.call(this,t,e),this.detach(t)}_createDomListener(t){const e=n=>{this.fire(t,n)};return e.removeListener=()=>{this._domNode.removeEventListener(t,e,this._options),delete this._domListeners[t]},e}}function nh(o,t){let e=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=et())}(o);for(const n of Object.keys(t).sort())t[n]&&(e+="-"+n);return e}let Sc;try{Sc={window,document}}catch{Sc={window:{},document:{}}}const Mt=Sc;function oh(o){const t=o.ownerDocument.defaultView.getComputedStyle(o);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}function qe(o){return Object.prototype.toString.call(o)=="[object Text]"}function Ns(o){return Object.prototype.toString.apply(o)=="[object Range]"}function ih(o){return o&&o.parentNode?o.offsetParent===Mt.document.body?null:o.offsetParent:null}const rh=["top","right","bottom","left","width","height"];class ne{constructor(t){const e=Ns(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),Mc(t)||e)if(e){const n=ne.getDomRangeRects(t);Ps(this,ne.getBoundingRect(n))}else Ps(this,t.getBoundingClientRect());else if(Bs(t)){const{innerWidth:n,innerHeight:i}=t;Ps(this,{top:0,right:n,bottom:i,left:0,width:n,height:i})}else Ps(this,t)}clone(){return new ne(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left),width:0,height:0};if(e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0)return null;{const n=new ne(e);return n._source=this._source,n}}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(sh(t))return e;let n,i=t,r=t.parentNode||t.commonAncestorContainer;for(;r&&!sh(r);){const a=((s=r)instanceof HTMLElement?s.ownerDocument.defaultView.getComputedStyle(s).overflow:"visible")==="visible";i instanceof HTMLElement&&ah(i)==="absolute"&&(n=i);const c=ah(r);if(a||n&&(c==="relative"&&a||c!=="relative")){i=r,r=r.parentNode;continue}const l=new ne(r),d=e.getIntersection(l);if(!d)return null;d.getArea()<e.getArea()&&(e=d),i=r,r=r.parentNode}var s;return e}isEqual(t){for(const e of rh)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}toAbsoluteRect(){const{scrollX:t,scrollY:e}=Mt.window,n=this.clone().moveBy(t,e);if(Mc(n._source)){const i=ih(n._source);i&&function(r,s){const a=new ne(s),c=oh(s);let l=0,d=0;l-=a.left,d-=a.top,l+=s.scrollLeft,d+=s.scrollTop,l-=c.left,d-=c.top,r.moveBy(l,d)}(n,i)}return n}excludeScrollbarsAndBorders(){const t=this._source;let e,n,i;if(Bs(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,i=t.getComputedStyle(t.document.documentElement).direction;else{const r=oh(t);e=t.offsetWidth-t.clientWidth-r.left-r.right,n=t.offsetHeight-t.clientHeight-r.top-r.bottom,i=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,i==="ltr"?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const i of n)e.push(new ne(i));else{let i=t.startContainer;qe(i)&&(i=i.parentNode);const r=new ne(i.getBoundingClientRect());r.right=r.left,r.width=0,e.push(r)}return e}static getBoundingRect(t){const e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const i of t)n++,e.left=Math.min(e.left,i.left),e.top=Math.min(e.top,i.top),e.right=Math.max(e.right,i.right),e.bottom=Math.max(e.bottom,i.bottom);return n==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new ne(e))}}function Ps(o,t){for(const e of rh)o[e]=t[e]}function sh(o){return!!Mc(o)&&o===o.ownerDocument.body}function Mc(o){return o!==null&&typeof o=="object"&&o.nodeType===1&&typeof o.getBoundingClientRect=="function"}function ah(o){return o instanceof HTMLElement?o.ownerDocument.defaultView.getComputedStyle(o).position:"static"}const Ue=class{constructor(o,t){Ue._observerInstance||Ue._createObserver(),this._element=o,this._callback=t,Ue._addElementCallback(o,t),Ue._observerInstance.observe(o)}get element(){return this._element}destroy(){Ue._deleteElementCallback(this._element,this._callback)}static _addElementCallback(o,t){Ue._elementCallbacks||(Ue._elementCallbacks=new Map);let e=Ue._elementCallbacks.get(o);e||(e=new Set,Ue._elementCallbacks.set(o,e)),e.add(t)}static _deleteElementCallback(o,t){const e=Ue._getElementCallbacks(o);e&&(e.delete(t),e.size||(Ue._elementCallbacks.delete(o),Ue._observerInstance.unobserve(o))),Ue._elementCallbacks&&!Ue._elementCallbacks.size&&(Ue._observerInstance=null,Ue._elementCallbacks=null)}static _getElementCallbacks(o){return Ue._elementCallbacks?Ue._elementCallbacks.get(o):null}static _createObserver(){Ue._observerInstance=new Mt.window.ResizeObserver(o=>{for(const t of o){const e=Ue._getElementCallbacks(t.target);if(e)for(const n of e)n(t)}})}};let Mr=Ue;function ch(o,t){o instanceof HTMLTextAreaElement&&(o.value=t),o.innerHTML=t}function Ui(o){return t=>t+o}function Os(o){let t=0;for(;o.previousSibling;)o=o.previousSibling,t++;return t}function lh(o,t,e){o.insertBefore(e,o.childNodes[t]||null)}function Br(o){return o&&o.nodeType===Node.COMMENT_NODE}function ai(o){return!!(o&&o.getClientRects&&o.getClientRects().length)}Mr._observerInstance=null,Mr._elementCallbacks=null;var dh=Math.pow;function Ls({element:o,target:t,positions:e,limiter:n,fitInViewport:i,viewportOffsetConfig:r}){jt(t)&&(t=t()),jt(n)&&(n=n());const s=ih(o),a=function(f){f=Object.assign({top:0,bottom:0,left:0,right:0},f);const A=new ne(Mt.window);return A.top+=f.top,A.height-=f.top,A.bottom-=f.bottom,A.height-=f.bottom,A}(r),c=new ne(o),l=uh(t,a);let d;if(!l||!a.getIntersection(l))return null;const h={targetRect:l,elementRect:c,positionedElementAncestor:s,viewportRect:a};if(n||i){if(n){const f=uh(n,a);f&&(h.limiterRect=f)}d=function(f,A){const{elementRect:E}=A,M=E.getArea(),L=f.map(it=>new hh(it,A)).filter(it=>!!it.name);let V=0,J=null;for(const it of L){const{limiterIntersectionArea:lt,viewportIntersectionArea:_t}=it;if(lt===M)return it;const zt=dh(_t,2)+dh(lt,2);zt>V&&(V=zt,J=it)}return J}(e,h)}else d=new hh(e[0],h);return d}function uh(o,t){const e=new ne(o).getVisible();return e?e.getIntersection(t):null}class hh{constructor(t,e){const n=t(e.targetRect,e.elementRect,e.viewportRect,e.limiterRect);if(!n)return;const{left:i,top:r,name:s,config:a}=n;this.name=s,this.config=a,this._positioningFunctionCoordinates={left:i,top:r},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const t=this._options.limiterRect;return t?t.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function gh(o){const t=o.parentNode;t&&t.removeChild(o)}function uv({window:o,rect:t,alignToTop:e,forceScroll:n,viewportOffset:i}){const r=t.clone().moveBy(0,i.bottom),s=t.clone().moveBy(0,-i.top),a=new ne(o).excludeScrollbarsAndBorders(),c=e&&n,l=[s,r].every(E=>a.contains(E));let{scrollX:d,scrollY:h}=o;const f=d,A=h;c?h-=a.top-t.top+i.top:l||(mh(s,a)?h-=a.top-t.top+i.top:ph(r,a)&&(h+=e?t.top-a.top-i.top:t.bottom-a.bottom+i.bottom)),l||(fh(t,a)?d-=a.left-t.left+i.left:kh(t,a)&&(d+=t.right-a.right+i.right)),d==f&&h===A||o.scrollTo(d,h)}function hv({parent:o,getRect:t,alignToTop:e,forceScroll:n,ancestorOffset:i=0,limiterElement:r}){const s=Bc(o),a=e&&n;let c,l,d;const h=r||s.document.body;for(;o!=h;)l=t(),c=new ne(o).excludeScrollbarsAndBorders(),d=c.contains(l),a?o.scrollTop-=c.top-l.top+i:d||(mh(l,c)?o.scrollTop-=c.top-l.top+i:ph(l,c)&&(o.scrollTop+=e?l.top-c.top-i:l.bottom-c.bottom+i)),d||(fh(l,c)?o.scrollLeft-=c.left-l.left+i:kh(l,c)&&(o.scrollLeft+=l.right-c.right+i)),o=o.parentNode}function ph(o,t){return o.bottom>t.bottom}function mh(o,t){return o.top<t.top}function fh(o,t){return o.left<t.left}function kh(o,t){return o.right>t.right}function Bc(o){return Ns(o)?o.startContainer.ownerDocument.defaultView:o.ownerDocument.defaultView}function gv(o){if(Ns(o)){let t=o.commonAncestorContainer;return qe(t)&&(t=t.parentNode),t}return o.parentNode}function bh(o,t){const e=Bc(o),n=new ne(o);if(e===t)return n;{let i=e;for(;i!=t;){const r=i.frameElement,s=new ne(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),i=i.parent}}return n}const pv={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},mv={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},wh={37:"←",38:"↑",39:"→",40:"↓",9:"⇥",33:"Page Up",34:"Page Down"},re=function(){const o={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++)o[String.fromCharCode(t).toLowerCase()]=t;for(let t=48;t<=57;t++)o[t-48]=t;for(let t=112;t<=123;t++)o["f"+(t-111)]=t;return Object.assign(o,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),o}(),fv=Object.fromEntries(Object.entries(re).map(([o,t])=>{let e;return e=t in wh?wh[t]:o.charAt(0).toUpperCase()+o.slice(1),[t,e]}));function Hi(o){let t;if(typeof o=="string"){if(t=re[o.toLowerCase()],!t)throw new y("keyboard-unknown-key",null,{key:o})}else t=o.keyCode+(o.altKey?re.alt:0)+(o.ctrlKey?re.ctrl:0)+(o.shiftKey?re.shift:0)+(o.metaKey?re.cmd:0);return t}function Nr(o){return typeof o=="string"&&(o=function(t){return t.split("+").map(e=>e.trim())}(o)),o.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return Hi(e.slice(0,-1));const n=Hi(e);return(g.isMac||g.isiOS)&&n==re.ctrl?re.cmd:n}(t):t).reduce((t,e)=>e+t,0)}function Rs(o){let t=Nr(o);return Object.entries(g.isMac||g.isiOS?pv:mv).reduce((e,[n,i])=>(t&re[n]&&(t&=~re[n],e+=i),e),"")+(t?fv[t]:"")}function Nc(o,t){const e=t==="ltr";switch(o){case re.arrowleft:return e?"left":"right";case re.arrowright:return e?"right":"left";case re.arrowup:return"up";case re.arrowdown:return"down"}}function be(o){return Array.isArray(o)?o:[o]}const Pc=function(o,t,e){(e!==void 0&&!no(o[t],e)||e===void 0&&!(t in o))&&Ds(o,t,e)},Ah=function(o){return function(t,e,n){for(var i=-1,r=Object(t),s=n(t),a=s.length;a--;){var c=s[++i];if(e(r[c],c,r)===!1)break}return t}}(),kv=function(o){return Ke(o)&&Ss(o)},_h=function(o,t){if((t!=="constructor"||typeof o[t]!="function")&&t!="__proto__")return o[t]},bv=function(o){return zi(o,Vi(o))},wv=function(o,t,e,n,i,r,s){var a=_h(o,e),c=_h(t,e),l=s.get(c);if(l)Pc(o,e,l);else{var d=void 0,h=d===void 0;if(h){var f=xe(c),A=!f&&Dr(c),E=!f&&!A&&wc(c);d=c,f||A||E?xe(a)?d=a:kv(a)?d=Bu(a):A?(h=!1,d=Mu(c,!0)):E?(h=!1,d=Wu(c,!0)):d=[]:sn(c)||Ts(c)?(d=a,Ts(a)?d=bv(a):It(a)&&!jt(a)||(d=qu(c))):h=!1}h&&(s.set(c,d),i(d,c,n,r,s),s.delete(c)),Pc(o,e,d)}},Av=function o(t,e,n,i,r){t!==e&&Ah(e,function(s,a){if(r||(r=new ji),It(s))wv(t,e,a,n,o,i,r);else{var c=void 0;c===void 0&&(c=s),Pc(t,a,c)}},Vi)},Ho=function(o){return o},_v=function(o,t,e){switch(e.length){case 0:return o.call(t);case 1:return o.call(t,e[0]);case 2:return o.call(t,e[0],e[1]);case 3:return o.call(t,e[0],e[1],e[2])}return o.apply(t,e)};var Ch=Math.max;const Cv=function(o,t,e){return t=Ch(t===void 0?o.length-1:t,0),function(){for(var n=arguments,i=-1,r=Ch(n.length-t,0),s=Array(r);++i<r;)s[i]=n[t+i];i=-1;for(var a=Array(t+1);++i<t;)a[i]=n[i];return a[t]=e(s),_v(o,this,a)}},vv=function(o){return function(){return o}},yv=Es?function(o,t){return Es(o,"toString",{configurable:!0,enumerable:!1,value:vv(t),writable:!0})}:Ho;var xv=Date.now;const Ev=function(o){var t=0,e=0;return function(){var n=xv(),i=16-(n-e);if(e=n,i>0){if(++t>=800)return arguments[0]}else t=0;return o.apply(void 0,arguments)}}(yv),Dv=function(o,t){return Ev(Cv(o,t,Ho),o+"")},Tv=function(o,t,e){if(!It(e))return!1;var n=typeof t;return!!(n=="number"?Ss(e)&&Is(t,e.length):n=="string"&&t in e)&&no(e[t],o)},vh=function(o){return Dv(function(t,e){var n=-1,i=e.length,r=i>1?e[i-1]:void 0,s=i>2?e[2]:void 0;for(r=o.length>3&&typeof r=="function"?(i--,r):void 0,s&&Tv(e[0],e[1],s)&&(r=i<3?void 0:r,i=1),t=Object(t);++n<i;){var a=e[n];a&&o(t,a,n,r)}return t})},Oc=vh(function(o,t,e){Av(o,t,e)});function Iv(o,t,e=1,n){if(typeof e!="number")throw new y("translation-service-quantity-not-a-number",null,{quantity:e});const i=n||Mt.window.CKEDITOR_TRANSLATIONS,r=function(d){return Object.keys(d).length}(i);r===1&&(o=Object.keys(i)[0]);const s=t.id||t.string;if(r===0||!function(d,h,f){return!!f[d]&&!!f[d].dictionary[h]}(o,s,i))return e!==1?t.plural:t.string;const a=i[o].dictionary,c=i[o].getPluralForm||(d=>d===1?0:1),l=a[s];return typeof l=="string"?l:l[Number(c(e))]}Mt.window.CKEDITOR_TRANSLATIONS||(Mt.window.CKEDITOR_TRANSLATIONS={});const Sv=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function yh(o){return Sv.includes(o)?"rtl":"ltr"}class Mv{constructor({uiLanguage:t="en",contentLanguage:e,translations:n}={}){this.uiLanguage=t,this.contentLanguage=e||this.uiLanguage,this.uiLanguageDirection=yh(this.uiLanguage),this.contentLanguageDirection=yh(this.contentLanguage),this.translations=function(i){return Array.isArray(i)?i.reduce((r,s)=>Oc(r,s)):i}(n),this.t=(i,r)=>this._t(i,r)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=be(e),typeof t=="string"&&(t={string:t});const n=t.plural?e[0]:1;return function(i,r){return i.replace(/%(\d+)/g,(s,a)=>a<r.length?r[a]:s)}(Iv(this.uiLanguage,t,n,this.translations),e)}}class io extends nt(){constructor(t={},e={}){super();const n=Dt(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const i of t)this._items.push(i),this._itemMap.set(this._getItemIdBeforeAdding(i),i)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new y("collection-add-item-invalid-index",this);let n=0;for(const i of t){const r=this._getItemIdBeforeAdding(i),s=e+n;this._items.splice(s,0,i),this._itemMap.set(r,i),this.fire("add",i,s),n++}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new y("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{const e=t[this._idProperty];return e&&this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,e?this._items.indexOf(e):-1}remove(t){const[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}forEach(t,e){this._items.forEach(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new y("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(n=>new e(n))},using:e=>{typeof e=="function"?this._setUpBindToBinding(e):this._setUpBindToBinding(n=>n[e])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(i,r,s)=>{const a=e._bindToCollection==this,c=e._bindToInternalToExternalMap.get(r);if(a&&c)this._bindToExternalToInternalMap.set(r,c),this._bindToInternalToExternalMap.set(c,r);else{const l=t(r);if(!l)return void this._skippedIndexesFromExternal.push(s);let d=s;for(const h of this._skippedIndexesFromExternal)s>h&&d--;for(const h of e._skippedIndexesFromExternal)d>=h&&d++;this._bindToExternalToInternalMap.set(r,l),this._bindToInternalToExternalMap.set(l,r),this.add(l,d);for(let h=0;h<e._skippedIndexesFromExternal.length;h++)d<=e._skippedIndexesFromExternal[h]&&e._skippedIndexesFromExternal[h]++}};for(const i of e)n(0,i,e.getIndex(i));this.listenTo(e,"add",n),this.listenTo(e,"remove",(i,r,s)=>{const a=this._bindToExternalToInternalMap.get(r);a&&this.remove(a),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((c,l)=>(s<l&&c.push(l-1),s>l&&c.push(l),c),[])})}_getItemIdBeforeAdding(t){const e=this._idProperty;let n;if(e in t){if(n=t[e],typeof n!="string")throw new y("collection-add-invalid-id",this);if(this.get(n))throw new y("collection-add-item-already-exists",this)}else t[e]=n=et();return n}_remove(t){let e,n,i,r=!1;const s=this._idProperty;if(typeof t=="string"?(n=t,i=this._itemMap.get(n),r=!i,i&&(e=this._items.indexOf(i))):typeof t=="number"?(e=t,i=this._items[e],r=!i,i&&(n=i[s])):(i=t,n=i[s],e=this._items.indexOf(i),r=e==-1||!this._itemMap.get(n)),r)throw new y("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);const a=this._bindToInternalToExternalMap.get(i);return this._bindToInternalToExternalMap.delete(i),this._bindToExternalToInternalMap.delete(a),this.fire("remove",i,e),[i,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function Xe(o){const t=o.next();return t.done?null:t.value}class tn extends Hn(Ct()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(t){if(this._elements.has(t))throw new y("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class kn{constructor(){this._listener=new(Hn())}listenTo(t){this._listener.listenTo(t,"keydown",(e,n)=>{this._listener.fire("_keydown:"+Hi(n),n)})}set(t,e,n={}){const i=Nr(t),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+i,(s,a)=>{e(a,()=>{a.preventDefault(),a.stopPropagation(),s.stop()}),s.return=!0},{priority:r})}press(t){return!!this._listener.fire("_keydown:"+Hi(t),t)}stopListening(t){this._listener.stopListening(t)}destroy(){this.stopListening()}}function ko(o){return Dt(o)?new Map(o):function(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}(o)}function Lc(o,t){let e;function n(...i){n.cancel(),e=setTimeout(()=>o(...i),t)}return n.cancel=()=>{clearTimeout(e)},n}function Rc(o,t){return!!(e=o.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(o.charAt(t));var e}function jc(o,t){return!!(e=o.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}const Bv=function(){const o=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],t=new RegExp("\\p{Regional_Indicator}{2}","u").source,e="(?:"+o.map(n=>n.source).join("|")+")";return new RegExp(`${t}|${e}(?:‍${e})*`,"ug")}();function xh(o,t){const e=String(o).matchAll(Bv);return Array.from(e).some(n=>n.index<t&&t<n.index+n[0].length)}class pt extends Ct(){constructor(t){super(),this._disableStack=new Set,this.editor=t,this.set("isEnabled",!0)}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Eh,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Eh),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Eh(o){o.return=!1,o.stop()}class Qt extends Ct(){constructor(t){super(),this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(t,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",e=>{if(!this.affectsData)return;const n=t.model.document.selection,i=n.getFirstPosition().root.rootName!="$graveyard"&&t.model.canEditAt(n);(t.isReadOnly||this._isEnabledBasedOnSelection&&!i)&&(e.return=!1,e.stop())},{priority:"highest"}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(t){this._affectsData=t}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Dh,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Dh),this.refresh())}execute(...t){}destroy(){this.stopListening()}}function Dh(o){o.return=!1,o.stop()}class Th extends Qt{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...t){const e=this._getFirstEnabledCommand();return!!e&&e.execute(t)}registerChildCommand(t,e={}){W(this._childCommandsDefinitions,{command:t,priority:e.priority||"normal"}),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const t=this._childCommandsDefinitions.find(({command:e})=>e.isEnabled);return t&&t.command}}class Ih extends nt(){constructor(t,e=[],n=[]){super(),this._plugins=new Map,this._context=t,this._availablePlugins=new Map;for(const i of e)i.pluginName&&this._availablePlugins.set(i.pluginName,i);this._contextPlugins=new Map;for(const[i,r]of n)this._contextPlugins.set(i,r),this._contextPlugins.set(r,i),i.pluginName&&this._availablePlugins.set(i.pluginName,i)}*[Symbol.iterator](){for(const t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){let n=t;throw typeof t=="function"&&(n=t.pluginName||t.name),new y("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[],n=[]){const i=this,r=this._context;(function E(M,L=new Set){M.forEach(V=>{c(V)&&(L.has(V)||(L.add(V),V.pluginName&&!i._availablePlugins.has(V.pluginName)&&i._availablePlugins.set(V.pluginName,V),V.requires&&E(V.requires,L)))})})(t),f(t);const s=[...function E(M,L=new Set){return M.map(V=>c(V)?V:i._availablePlugins.get(V)).reduce((V,J)=>L.has(J)?V:(L.add(J),J.requires&&(f(J.requires,J),E(J.requires,L).forEach(it=>V.add(it))),V.add(J)),new Set)}(t.filter(E=>!d(E,e)))];(function(E,M){for(const L of M){if(typeof L!="function")throw new y("plugincollection-replace-plugin-invalid-type",null,{pluginItem:L});const V=L.pluginName;if(!V)throw new y("plugincollection-replace-plugin-missing-name",null,{pluginItem:L});if(L.requires&&L.requires.length)throw new y("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:V});const J=i._availablePlugins.get(V);if(!J)throw new y("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:V});const it=E.indexOf(J);if(it===-1){if(i._contextPlugins.has(J))return;throw new y("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:V})}if(J.requires&&J.requires.length)throw new y("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:V});E.splice(it,1,L),i._availablePlugins.set(V,L)}})(s,n);const a=s.map(E=>{let M=i._contextPlugins.get(E);return M=M||new E(r),i._add(E,M),M});return A(a,"init").then(()=>A(a,"afterInit")).then(()=>a);function c(E){return typeof E=="function"}function l(E){return c(E)&&!!E.isContextPlugin}function d(E,M){return M.some(L=>L===E||h(E)===L||h(L)===E)}function h(E){return c(E)?E.pluginName||E.name:E}function f(E,M=null){E.map(L=>c(L)?L:i._availablePlugins.get(L)||L).forEach(L=>{(function(V,J){if(!c(V))throw J?new y("plugincollection-soft-required",r,{missingPlugin:V,requiredBy:h(J)}):new y("plugincollection-plugin-not-found",r,{plugin:V})})(L,M),function(V,J){if(l(J)&&!l(V))throw new y("plugincollection-context-required",r,{plugin:h(V),requiredBy:h(J)})}(L,M),function(V,J){if(J&&d(V,e))throw new y("plugincollection-required",r,{plugin:h(V),requiredBy:h(J)})}(L,M)})}function A(E,M){return E.reduce((L,V)=>V[M]?i._contextPlugins.has(V)?L:L.then(V[M].bind(V)):L,Promise.resolve())}}destroy(){const t=[];for(const[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new y("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}var Sh=Object.getOwnPropertySymbols,Nv=Object.prototype.hasOwnProperty,Pv=Object.prototype.propertyIsEnumerable;class Mh{constructor(t){this._contextOwner=null;const e=t||{},{translations:n}=e,i=((a,c)=>{var l={};for(var d in a)Nv.call(a,d)&&c.indexOf(d)<0&&(l[d]=a[d]);if(a!=null&&Sh)for(var d of Sh(a))c.indexOf(d)<0&&Pv.call(a,d)&&(l[d]=a[d]);return l})(e,["translations"]);this.config=new Xu(i,this.constructor.defaultConfig);const r=this.constructor.builtinPlugins;this.config.define("plugins",r),this.plugins=new Ih(this,r);const s=this.config.get("language")||{};this.locale=new Mv({uiLanguage:typeof s=="string"?s:s.ui,contentLanguage:this.config.get("language.content"),translations:n}),this.t=this.locale.t,this.editors=new io}initPlugins(){const t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(const n of t.concat(e)){if(typeof n!="function")throw new y("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new y("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new y("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){const t={};for(const e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>n))})}}class js extends Ct(){constructor(t){super(),this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class Ov extends kn{constructor(t){super(),this.editor=t}set(t,e,n={}){if(typeof e=="string"){const i=e;e=(r,s)=>{this.editor.execute(i),s()}}super.set(t,e,n)}}var Lv=b(2591),kt=b.n(Lv),Bh=b(4098),Rv={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(Bh.A,Rv),Bh.A.locals;const zs=new WeakMap;let Nh=!1;function Ph({view:o,element:t,text:e,isDirectHost:n=!0,keepOnFocus:i=!1}){const r=o.document;function s(a){zs.get(r).set(t,{text:a,isDirectHost:n,keepOnFocus:i,hostElement:n?t:null}),o.change(c=>zc(r,c))}zs.has(r)||(zs.set(r,new Map),r.registerPostFixer(a=>zc(r,a)),r.on("change:isComposing",()=>{o.change(a=>zc(r,a))},{priority:"high"})),t.is("editableElement")&&t.on("change:placeholder",(a,c,l)=>{s(l)}),t.placeholder?s(t.placeholder):e&&s(e),e&&function(){Nh||z("enableplaceholder-deprecated-text-option"),Nh=!0}()}function jv(o,t){return!t.hasClass("ck-placeholder")&&(o.addClass("ck-placeholder",t),!0)}function zv(o,t){return!!t.hasClass("ck-placeholder")&&(o.removeClass("ck-placeholder",t),!0)}function Fv(o,t){if(!o.isAttached()||Array.from(o.getChildren()).some(i=>!i.is("uiElement")))return!1;const e=o.document,n=e.selection.anchor;return(!e.isComposing||!n||n.parent!==o)&&(!!t||!e.isFocused||!!n&&n.parent!==o)}function zc(o,t){const e=zs.get(o),n=[];let i=!1;for(const[r,s]of e)s.isDirectHost&&(n.push(r),Oh(t,r,s)&&(i=!0));for(const[r,s]of e){if(s.isDirectHost)continue;const a=Vv(r);a&&(n.includes(a)||(s.hostElement=a,Oh(t,r,s)&&(i=!0)))}return i}function Oh(o,t,e){const{text:n,isDirectHost:i,hostElement:r}=e;let s=!1;return r.getAttribute("data-placeholder")!==n&&(o.setAttribute("data-placeholder",n,r),s=!0),(i||t.childCount==1)&&Fv(r,e.keepOnFocus)?jv(o,r)&&(s=!0):zv(o,r)&&(s=!0),s}function Vv(o){if(o.childCount){const t=o.getChild(0);if(t.is("element")&&!t.is("uiElement")&&!t.is("attributeElement"))return t}return null}class ci{is(){throw new Error("is() method is abstract")}}const Lh=function(o){return Tc(o,4)};class li extends nt(ci){constructor(t){super(),this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new y("view-node-not-found-in-parent",this);return t}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),i=t.getAncestors(e);let r=0;for(;n[r]==i[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),i=Et(e,n);switch(i){case"prefix":return!0;case"extension":return!1;default:return e[i]<n[i]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire(`change:${t}`,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=Lh(this);return delete t.parent,t}}li.prototype.is=function(o){return o==="node"||o==="view:node"};class me extends li{constructor(t,e){super(t),this._textData=e}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof me&&(this===t||this.data===t.data)}_clone(){return new me(this.document,this.data)}}me.prototype.is=function(o){return o==="$text"||o==="view:$text"||o==="text"||o==="view:text"||o==="node"||o==="view:node"};class bo extends ci{constructor(t,e,n){if(super(),this.textNode=t,e<0||e>t.data.length)throw new y("view-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.data.length)throw new y("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(t={}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;n!==null;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}bo.prototype.is=function(o){return o==="$textProxy"||o==="view:$textProxy"||o==="textProxy"||o==="view:textProxy"};class wo{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),this._patterns.push(e)}match(...t){for(const e of t)for(const n of this._patterns){const i=Rh(e,n);if(i)return{element:e,pattern:n,match:i}}return null}matchAll(...t){const e=[];for(const n of t)for(const i of this._patterns){const r=Rh(n,i);r&&e.push({element:n,pattern:i,match:r})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;const t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function Rh(o,t){if(typeof t=="function")return t(o);const e={};return t.name&&(e.name=function(n,i){return n instanceof RegExp?!!i.match(n):n===i}(t.name,o.name),!e.name)||t.attributes&&(e.attributes=function(n,i){const r=new Set(i.getAttributeKeys());return sn(n)?(n.style!==void 0&&z("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&z("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),Fc(n,r,s=>i.getAttribute(s))}(t.attributes,o),!e.attributes)||t.classes&&(e.classes=function(n,i){return Fc(n,i.getClassNames(),()=>{})}(t.classes,o),!e.classes)||t.styles&&(e.styles=function(n,i){return Fc(n,i.getStyleNames(!0),r=>i.getStyle(r))}(t.styles,o),!e.styles)?null:e}function Fc(o,t,e){const n=function(s){return Array.isArray(s)?s.map(a=>sn(a)?(a.key!==void 0&&a.value!==void 0||z("matcher-pattern-missing-key-or-value",a),[a.key,a.value]):[a,!0]):sn(s)?Object.entries(s):[[s,!0]]}(o),i=Array.from(t),r=[];if(n.forEach(([s,a])=>{i.forEach(c=>{(function(l,d){return l===!0||l===d||l instanceof RegExp&&d.match(l)})(s,c)&&function(l,d,h){if(l===!0)return!0;const f=h(d);return l===f||l instanceof RegExp&&!!String(f).match(l)}(a,c,e)&&r.push(c)})}),n.length&&!(r.length<n.length))return r}const Fs=function(o){return typeof o=="symbol"||Ke(o)&&_n(o)=="[object Symbol]"};var Uv=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Hv=/^\w*$/;const Vc=function(o,t){if(xe(o))return!1;var e=typeof o;return!(e!="number"&&e!="symbol"&&e!="boolean"&&o!=null&&!Fs(o))||Hv.test(o)||!Uv.test(o)||t!=null&&o in Object(t)};function Uc(o,t){if(typeof o!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var e=function(){var n=arguments,i=t?t.apply(this,n):n[0],r=e.cache;if(r.has(i))return r.get(i);var s=o.apply(this,n);return e.cache=r.set(i,s)||r,s};return e.cache=new(Uc.Cache||xs),e}Uc.Cache=xs;const $v=Uc,Wv=function(o){var t=$v(o,function(n){return e.size===500&&e.clear(),n}),e=t.cache;return t};var Gv=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,qv=/\\(\\)?/g,Kv=Wv(function(o){var t=[];return o.charCodeAt(0)===46&&t.push(""),o.replace(Gv,function(e,n,i,r){t.push(i?r.replace(qv,"$1"):n||e)}),t});const Yv=Kv,Qv=function(o,t){for(var e=-1,n=o==null?0:o.length,i=Array(n);++e<n;)i[e]=t(o[e],e,o);return i};var jh=se?se.prototype:void 0,zh=jh?jh.toString:void 0;const Zv=function o(t){if(typeof t=="string")return t;if(xe(t))return Qv(t,o)+"";if(Fs(t))return zh?zh.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e},Hc=function(o){return o==null?"":Zv(o)},Vs=function(o,t){return xe(o)?o:Vc(o,t)?[o]:Yv(Hc(o))},Jv=function(o){var t=o==null?0:o.length;return t?o[t-1]:void 0},$i=function(o){if(typeof o=="string"||Fs(o))return o;var t=o+"";return t=="0"&&1/o==-1/0?"-0":t},$c=function(o,t){for(var e=0,n=(t=Vs(t,o)).length;o!=null&&e<n;)o=o[$i(t[e++])];return e&&e==n?o:void 0},Fh=function(o,t,e){var n=-1,i=o.length;t<0&&(t=-t>i?0:i+t),(e=e>i?i:e)<0&&(e+=i),i=t>e?0:e-t>>>0,t>>>=0;for(var r=Array(i);++n<i;)r[n]=o[n+t];return r},Xv=function(o,t){return t.length<2?o:$c(o,Fh(t,0,-1))},t1=function(o,t){return t=Vs(t,o),(o=Xv(o,t))==null||delete o[$i(Jv(t))]},e1=function(o,t){return o==null||t1(o,t)},Pr=function(o,t,e){var n=o==null?void 0:$c(o,t);return n===void 0?e:n},n1=function(o,t,e,n){if(!It(o))return o;for(var i=-1,r=(t=Vs(t,o)).length,s=r-1,a=o;a!=null&&++i<r;){var c=$i(t[i]),l=e;if(c==="__proto__"||c==="constructor"||c==="prototype")return o;if(i!=s){var d=a[c];(l=void 0)==void 0&&(l=It(d)?d:Is(t[i+1])?[]:{})}mc(a,c,l),a=a[c]}return o},o1=function(o,t,e){return o==null?o:n1(o,t,e)};class Wc{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();const e=function(n){let i=null,r=0,s=0,a=null;const c=new Map;if(n==="")return c;n.charAt(n.length-1)!=";"&&(n+=";");for(let l=0;l<n.length;l++){const d=n.charAt(l);if(i===null)switch(d){case":":a||(a=n.substr(r,l-r),s=l+1);break;case'"':case"'":i=d;break;case";":{const h=n.substr(s,l-s);a&&c.set(a.trim(),h.trim()),a=null,r=l+1;break}}else d===i&&(i=null)}return c}(t);for(const[n,i]of e)this._styleProcessor.toNormalizedForm(n,i,this._styles)}has(t){if(this.isEmpty)return!1;const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)}set(t,e){if(It(t))for(const[n,i]of Object.entries(t))this._styleProcessor.toNormalizedForm(n,i,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){const e=Gc(t);e1(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!It(this._styles[t]))return this._styles[t];const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(t=!1){return this.isEmpty?[]:t?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([e])=>e)}clear(){this._styles={}}getStylesEntries(){const t=[],e=Object.keys(this._styles);for(const n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){const e=t.split(".");if(!(e.length>1))return;const n=e.splice(0,e.length-1).join("."),i=Pr(this._styles,n);i&&!Object.keys(i).length&&this.remove(n)}}class i1{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(It(e))qc(n,Gc(t),e);else if(this._normalizers.has(t)){const i=this._normalizers.get(t),{path:r,value:s}=i(e);qc(n,r,s)}else qc(n,t,e)}getNormalized(t,e){if(!t)return Oc({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){const n=this._extractors.get(t);if(typeof n=="string")return Pr(e,n);const i=n(t,e);if(i)return i}return Pr(e,Gc(t))}getReducedForm(t,e){const n=this.getNormalized(t,e);return n===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(n):[[t,n]]}getStyleNames(t){const e=Array.from(this._consumables.keys()).filter(i=>{const r=this.getNormalized(i,t);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...e,...Object.keys(t)]);return Array.from(n)}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(const n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function Gc(o){return o.replace("-",".")}function qc(o,t,e){let n=e;It(e)&&(n=Oc({},Pr(o,t),e)),o1(o,t,n)}class Mn extends li{constructor(t,e,n,i){if(super(t),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=e,this._attrs=function(r){const s=ko(r);for(const[a,c]of s)c===null?s.delete(a):typeof c!="string"&&s.set(a,String(c));return s}(n),this._children=[],i&&this._insertChild(0,i),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");Vh(this._classes,r),this._attrs.delete("class")}this._styles=new Wc(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){const e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof Mn))return!1;if(this===t)return!0;if(this.name!=t.name||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(t){return this._styles.getStyleNames(t)}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new wo(...t);let n=this.parent;for(;n&&!n.is("documentFragment");){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(i=>`${i[0]}="${i[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(t){return this._unsafeAttributesToRender.includes(t)}_clone(t=!1){const e=[];if(t)for(const i of this.getChildren())e.push(i._clone(t));const n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(r,s){return typeof s=="string"?[new me(r,s)]:(Dt(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new me(r,a):a instanceof bo?new me(r,a.data):a))}(this.document,e);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){const n=String(e);this._fireChange("attributes",this),t=="class"?Vh(this._classes,n):t=="style"?this._styles.setTo(n):this._attrs.set(t,n)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(const e of be(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(const e of be(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),typeof t!="string"?this._styles.set(t):this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(const e of be(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function Vh(o,t){const e=t.split(/\s+/);o.clear(),e.forEach(n=>o.add(n))}Mn.prototype.is=function(o,t){return t?t===this.name&&(o==="element"||o==="view:element"):o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Or extends Mn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=r1}}function r1(){const o=[...this.getChildren()],t=o[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(const e of o)if(!e.is("uiElement"))return null;return this.childCount}Or.prototype.is=function(o,t){return t?t===this.name&&(o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Us extends Ct(Or){constructor(t,e,n,i){super(t,e,n,i),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",r=>r&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}Us.prototype.is=function(o,t){return t?t===this.name&&(o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};const Uh=Symbol("rootName");class Hh extends Us{constructor(t,e){super(t,e),this.rootName="main"}get rootName(){return this.getCustomProperty(Uh)}set rootName(t){this._setCustomProperty(Uh,t)}set _name(t){this.name=t}}Hh.prototype.is=function(o,t){return t?t===this.name&&(o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"):o==="rootElement"||o==="view:rootElement"||o==="editableElement"||o==="view:editableElement"||o==="containerElement"||o==="view:containerElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class di{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new y("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new y("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this._position=bt._createAt(t.startPosition):this._position=bt._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(t){let e,n;do n=this.position,e=this.next();while(!e.done&&t(e.value));e.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let i;if(n instanceof me){if(t.isAtEnd)return this._position=bt._createAfter(n),this._next();i=n.data[t.offset]}else i=n.getChild(t.offset);if(i instanceof Mn){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(t))return{done:!0,value:void 0};t.offset++}else t=new bt(i,0);return this._position=t,this._formatReturnValue("elementStart",i,e,t,1)}if(i instanceof me){if(this.singleCharacters)return t=new bt(i,0),this._position=t,this._next();let r,s=i.data.length;return i==this._boundaryEndParent?(s=this.boundaries.end.offset,r=new bo(i,0,s),t=bt._createAfter(r)):(r=new bo(i,0,i.data.length),t.offset++),this._position=t,this._formatReturnValue("text",r,e,t,s)}if(typeof i=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset;const s=new bo(n,t.offset,r);return t.offset+=r,this._position=t,this._formatReturnValue("text",s,e,t,r)}return t=bt._createAfter(n),this._position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let i;if(n instanceof me){if(t.isAtStart)return this._position=bt._createBefore(n),this._previous();i=n.data[t.offset-1]}else i=n.getChild(t.offset-1);if(i instanceof Mn)return this.shallow?(t.offset--,this._position=t,this._formatReturnValue("elementStart",i,e,t,1)):(t=new bt(i,i.childCount),this._position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",i,e,t));if(i instanceof me){if(this.singleCharacters)return t=new bt(i,i.data.length),this._position=t,this._previous();let r,s=i.data.length;if(i==this._boundaryStartParent){const a=this.boundaries.start.offset;r=new bo(i,a,i.data.length-a),s=r.data.length,t=bt._createBefore(r)}else r=new bo(i,0,i.data.length),t.offset--;return this._position=t,this._formatReturnValue("text",r,e,t,s)}if(typeof i=="string"){let r;if(this.singleCharacters)r=1;else{const a=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=t.offset-a}t.offset-=r;const s=new bo(n,t.offset,r);return this._position=t,this._formatReturnValue("text",s,e,t,r)}return t=bt._createBefore(n),this._position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,i,r){return e instanceof bo&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=bt._createAfter(e.textNode):(i=bt._createAfter(e.textNode),this._position=i)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=bt._createBefore(e.textNode):(i=bt._createBefore(e.textNode),this._position=i))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:i,length:r}}}}class bt extends ci{constructor(t,e){super(),this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof Us);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=bt._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new di(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let i=0;for(;e[i]==n[i]&&e[i];)i++;return i===0?null:e[i-1]}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const i=Et(e,n);switch(i){case"prefix":return"before";case"extension":return"after";default:return e[i]<n[i]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new di(t)}clone(){return new bt(this.parent,this.offset)}static _createAt(t,e){if(t instanceof bt)return new this(t.parent,t.offset);{const n=t;if(e=="end")e=n.is("$text")?n.data.length:n.childCount;else{if(e=="before")return this._createBefore(n);if(e=="after")return this._createAfter(n);if(e!==0&&!e)throw new y("view-createpositionat-offset-required",n)}return new bt(n,e)}}static _createAfter(t){if(t.is("$textProxy"))return new bt(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new y("view-position-after-root",t,{root:t});return new bt(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new bt(t.textNode,t.offsetInText);if(!t.parent)throw new y("view-position-before-root",t,{root:t});return new bt(t.parent,t.index)}}bt.prototype.is=function(o){return o==="position"||o==="view:position"};class Vt extends ci{constructor(t,e=null){super(),this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new di({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(Hs,{direction:"backward"}),e=this.end.getLastMatchingPosition(Hs);return t.parent.is("$text")&&t.isAtStart&&(t=bt._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=bt._createAfter(e.parent)),new Vt(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(Hs);if(t.isAfter(this.end)||t.isEqual(this.end))return new Vt(t,t);let e=this.end.getLastMatchingPosition(Hs,{direction:"backward"});const n=t.nodeAfter,i=e.nodeBefore;return n&&n.is("$text")&&(t=new bt(n,0)),i&&i.is("$text")&&(e=new bt(i,i.data.length)),new Vt(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),i=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&i}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new Vt(this.start,t.start)),this.containsPosition(t.end)&&e.push(new Vt(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new Vt(e,n)}return null}getWalker(t={}){return t.boundaries=this,new di(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new Vt(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new di(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new di(t);yield e.position;for(const n of e)yield n.nextPosition}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,i){return new this(new bt(t,e),new bt(n,i))}static _createFromPositionAndShift(t,e){const n=t,i=t.getShiftedBy(e);return e>0?new this(n,i):new this(i,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(bt._createBefore(t),e)}}function Hs(o){return!(!o.item.is("attributeElement")&&!o.item.is("uiElement"))}Vt.prototype.is=function(o){return o==="range"||o==="view:range"};class ro extends nt(ci){constructor(...t){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",t.length&&this.setTo(...t)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const i of t._ranges)if(e.isEqual(i)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=ee(this.getRanges());if(e!=ee(t.getRanges()))return!1;if(e==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let i=!1;for(let r of t.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){i=!0;break}if(!i)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...t){let[e,n,i]=t;if(typeof n=="object"&&(i=n,n=void 0),e===null)this._setRanges([]),this._setFakeOptions(i);else if(e instanceof ro||e instanceof Kc)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof Vt)this._setRanges([e],i&&i.backward),this._setFakeOptions(i);else if(e instanceof bt)this._setRanges([new Vt(e)]),this._setFakeOptions(i);else if(e instanceof li){const r=!!i&&!!i.backward;let s;if(n===void 0)throw new y("view-selection-setto-required-second-parameter",this);s=n=="in"?Vt._createIn(e):n=="on"?Vt._createOn(e):new Vt(bt._createAt(e,n)),this._setRanges([s],r),this._setFakeOptions(i)}else{if(!Dt(e))throw new y("view-selection-setto-not-selectable",this);this._setRanges(e,i&&i.backward),this._setFakeOptions(i)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new y("view-selection-setfocus-no-ranges",this);const n=bt._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const i=this.anchor;this._ranges.pop(),n.compareWith(i)=="before"?this._addRange(new Vt(n,i),!0):this._addRange(new Vt(i,n)),this.fire("change")}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const n of t)this._addRange(n);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof Vt))throw new y("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new y("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new Vt(t.start,t.end))}}ro.prototype.is=function(o){return o==="selection"||o==="view:selection"};class Kc extends nt(ci){constructor(...t){super(),this._selection=new ro,this._selection.delegate("change").to(this),t.length&&this._selection.setTo(...t)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}_setTo(...t){this._selection.setTo(...t)}_setFocus(t,e){this._selection.setFocus(t,e)}}Kc.prototype.is=function(o){return o==="selection"||o=="documentSelection"||o=="view:selection"||o=="view:documentSelection"};class Wi extends Y{constructor(t,e,n){super(t,e),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Yc=Symbol("bubbling contexts");function Qc(o){return class extends o{fire(t,...e){try{const n=t instanceof Y?t:new Y(this,t),i=Zc(this);if(!i.size)return;if(Lr(n,"capturing",this),Gi(i,"$capture",n,...e))return n.return;const r=n.startRange||this.selection.getFirstRange(),s=r?r.getContainedElement():null,a=!!s&&!!$h(i,s);let c=s||function(l){if(!l)return null;const d=l.start.parent,h=l.end.parent,f=d.getPath(),A=h.getPath();return f.length>A.length?d:h}(r);if(Lr(n,"atTarget",c),!a){if(Gi(i,"$text",n,...e))return n.return;Lr(n,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(Gi(i,"$root",n,...e))return n.return}else if(c.is("element")&&Gi(i,c.name,n,...e))return n.return;if(Gi(i,c,n,...e))return n.return;c=c.parent,Lr(n,"bubbling",c)}return Lr(n,"bubbling",this),Gi(i,"$document",n,...e),n.return}catch(n){y.rethrowUnexpectedError(n,this)}}_addEventListener(t,e,n){const i=be(n.context||"$document"),r=Zc(this);for(const s of i){let a=r.get(s);a||(a=new(nt()),r.set(s,a)),this.listenTo(a,t,e,n)}}_removeEventListener(t,e){const n=Zc(this);for(const i of n.values())this.stopListening(i,t,e)}}}{const o=Qc(Object);["fire","_addEventListener","_removeEventListener"].forEach(t=>{Qc[t]=o.prototype[t]})}function Lr(o,t,e){o instanceof Wi&&(o._eventPhase=t,o._currentTarget=e)}function Gi(o,t,e,...n){const i=typeof t=="string"?o.get(t):$h(o,t);return!!i&&(i.fire(e,...n),e.stop.called)}function $h(o,t){for(const[e,n]of o)if(typeof e=="function"&&e(t))return n;return null}function Zc(o){return o[Yc]||(o[Yc]=new Map),o[Yc]}class $s extends Qc(Ct()){constructor(t){super(),this._postFixers=new Set,this.selection=new Kc,this.roots=new io({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.forEach(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(e=n(t),e)break;while(e)}}class ui extends Mn{constructor(t,e,n,i){super(t,e,n,i),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=s1}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new y("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t=!1){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function s1(){if(Jc(this))return null;let o=this.parent;for(;o&&o.is("attributeElement");){if(Jc(o)>1)return null;o=o.parent}return!o||Jc(o)>1?null:this.childCount}function Jc(o){return Array.from(o.getChildren()).filter(t=>!t.is("uiElement")).length}ui.DEFAULT_PRIORITY=10,ui.prototype.is=function(o,t){return t?t===this.name&&(o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"):o==="attributeElement"||o==="view:attributeElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Xc extends Mn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=a1}_insertChild(t,e){if(e&&(e instanceof li||Array.from(e).length>0))throw new y("view-emptyelement-cannot-add",[this,e]);return 0}}function a1(){return null}Xc.prototype.is=function(o,t){return t?t===this.name&&(o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"):o==="emptyElement"||o==="view:emptyElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class Ws extends Mn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=l1}_insertChild(t,e){if(e&&(e instanceof li||Array.from(e).length>0))throw new y("view-uielement-cannot-add",[this,e]);return 0}render(t,e){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const n of this.getAttributeKeys())e.setAttribute(n,this.getAttribute(n));return e}}function c1(o){o.document.on("arrowKey",(t,e)=>function(n,i,r){if(i.keyCode==re.arrowright){const s=i.domTarget.ownerDocument.defaultView.getSelection(),a=s.rangeCount==1&&s.getRangeAt(0).collapsed;if(a||i.shiftKey){const c=s.focusNode,l=s.focusOffset,d=r.domPositionToView(c,l);if(d===null)return;let h=!1;const f=d.getLastMatchingPosition(A=>(A.item.is("uiElement")&&(h=!0),!(!A.item.is("uiElement")&&!A.item.is("attributeElement"))));if(h){const A=r.viewPositionToDom(f);a?s.collapse(A.parent,A.offset):s.extend(A.parent,A.offset)}}}}(0,e,o.domConverter),{priority:"low"})}function l1(){return null}Ws.prototype.is=function(o,t){return t?t===this.name&&(o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"):o==="uiElement"||o==="view:uiElement"||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class tl extends Mn{constructor(t,e,n,i){super(t,e,n,i),this.getFillerOffset=d1}_insertChild(t,e){if(e&&(e instanceof li||Array.from(e).length>0))throw new y("view-rawelement-cannot-add",[this,e]);return 0}render(t,e){}}function d1(){return null}tl.prototype.is=function(o,t){return t?t===this.name&&(o==="rawElement"||o==="view:rawElement"||o==="element"||o==="view:element"):o==="rawElement"||o==="view:rawElement"||o===this.name||o==="view:"+this.name||o==="element"||o==="view:element"||o==="node"||o==="view:node"};class hi extends nt(ci){constructor(t,e){super(),this._children=[],this._customProperties=new Map,this.document=t,e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const i=function(r,s){return typeof s=="string"?[new me(r,s)]:(Dt(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new me(r,a):a instanceof bo?new me(r,a.data):a))}(this.document,e);for(const r of i)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}hi.prototype.is=function(o){return o==="documentFragment"||o==="view:documentFragment"};class Wh{constructor(t){this._cloneGroups=new Map,this._slotFactory=null,this.document=t}setSelection(...t){this.document.selection._setTo(...t)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createDocumentFragment(t){return new hi(this.document,t)}createText(t){return new me(this.document,t)}createAttributeElement(t,e,n={}){const i=new ui(this.document,t,e);return typeof n.priority=="number"&&(i._priority=n.priority),n.id&&(i._id=n.id),n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createContainerElement(t,e,n={},i={}){let r=null;sn(n)?i=n:r=n;const s=new Or(this.document,t,e,r);return i.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),s}createEditableElement(t,e,n={}){const i=new Us(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createEmptyElement(t,e,n={}){const i=new Xc(this.document,t,e);return n.renderUnsafeAttributes&&i._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),i}createUIElement(t,e,n){const i=new Ws(this.document,t,e);return n&&(i.render=n),i}createRawElement(t,e,n,i={}){const r=new tl(this.document,t,e);return n&&(r.render=n),i.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...i.renderUnsafeAttributes),r}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){sn(t)&&n===void 0?e._setStyle(t):n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof bt?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new y("view-writer-break-non-container-element",this.document);if(!e.parent)throw new y("view-writer-break-root",this.document);if(t.isAtStart)return bt._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(bt._createAfter(e),n);const i=new Vt(t,bt._createAt(e,"end")),r=new bt(n,0);this.move(i,r)}return bt._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("$text"))return t;if(n.is("attributeElement")&&n.childCount===0){const s=n.parent,a=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new bt(s,a))}const i=n.getChild(e-1),r=n.getChild(e);if(!i||!r)return t;if(i.is("$text")&&r.is("$text"))return qh(i,r);if(i.is("attributeElement")&&r.is("attributeElement")&&i.isSimilar(r)){const s=i.childCount;return i._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new bt(i,s))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new y("view-writer-merge-containers-invalid-position",this.document);const i=e.getChild(e.childCount-1),r=i instanceof me?bt._createAt(i,"end"):bt._createAt(e,"end");return this.move(Vt._createIn(n),bt._createAt(e,"end")),this.remove(Vt._createOn(n)),r}insert(t,e){Kh(e=Dt(e)?[...e]:[e],this.document);const n=e.reduce((s,a)=>{const c=s[s.length-1],l=!a.is("uiElement");return c&&c.breakAttributes==l?c.nodes.push(a):s.push({breakAttributes:l,nodes:[a]}),s},[]);let i=null,r=t;for(const{nodes:s,breakAttributes:a}of n){const c=this._insertNodes(r,s,a);i||(i=c.start),r=c.end}return i?new Vt(i,r):new Vt(t)}remove(t){const e=t instanceof Vt?t:Vt._createOn(t);if(Rr(e,this.document),e.isCollapsed)return new hi(this.document);const{start:n,end:i}=this._breakAttributesRange(e,!0),r=n.parent,s=i.offset-n.offset,a=r._removeChildren(n.offset,s);for(const l of a)this._removeFromClonedElementsGroup(l);const c=this.mergeAttributes(n);return e.start=c,e.end=c.clone(),new hi(this.document,a)}clear(t,e){Rr(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const i of n){const r=i.item;let s;if(r.is("element")&&e.isSimilar(r))s=Vt._createOn(r);else if(!i.nextPosition.isAfter(t.start)&&r.is("$textProxy")){const a=r.getAncestors().find(c=>c.is("element")&&e.isSimilar(c));a&&(s=Vt._createIn(a))}s&&(s.end.isAfter(t.end)&&(s.end=t.end),s.start.isBefore(t.start)&&(s.start=t.start),this.remove(s))}}move(t,e){let n;if(e.isAfter(t.end)){const i=(e=this._breakAttributes(e,!0)).parent,r=i.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=i.childCount-r}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof ui))throw new y("view-writer-wrap-invalid-attribute",this.document);if(Rr(t,this.document),t.isCollapsed){let i=t.start;i.parent.is("element")&&(n=i.parent,!Array.from(n.getChildren()).some(s=>!s.is("uiElement")))&&(i=i.getLastMatchingPosition(s=>s.item.is("uiElement"))),i=this._wrapPosition(i,e);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(t.start)&&this.setSelection(i),new Vt(i)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof ui))throw new y("view-writer-unwrap-invalid-attribute",this.document);if(Rr(t,this.document),t.isCollapsed)return t;const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,i.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new Vt(a,c)}rename(t,e){const n=new Or(this.document,t,e.getAttributes());return this.insert(bt._createAfter(e),n),this.move(Vt._createIn(e),bt._createAt(n,0)),this.remove(Vt._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return bt._createAt(t,e)}createPositionAfter(t){return bt._createAfter(t)}createPositionBefore(t){return bt._createBefore(t)}createRange(t,e){return new Vt(t,e)}createRangeOn(t){return Vt._createOn(t)}createRangeIn(t){return Vt._createIn(t)}createSelection(...t){return new ro(...t)}createSlot(t="children"){if(!this._slotFactory)throw new y("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,t)}_registerSlotFactory(t){this._slotFactory=t}_clearSlotFactory(){this._slotFactory=null}_insertNodes(t,e,n){let i,r;if(i=n?el(t):t.parent.is("$text")?t.parent.parent:t.parent,!i)throw new y("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(t,!0):t.parent.is("$text")?nl(t):t;const s=i._insertChild(r.offset,e);for(const d of e)this._addToClonedElementsGroup(d);const a=r.getShiftedBy(s),c=this.mergeAttributes(r);c.isEqual(r)||a.offset--;const l=this.mergeAttributes(a);return new Vt(c,l)}_wrapChildren(t,e,n,i){let r=e;const s=[];for(;r<n;){const c=t.getChild(r),l=c.is("$text"),d=c.is("attributeElement");if(d&&this._wrapAttributeElement(i,c))s.push(new bt(t,r));else if(l||!d||u1(i,c)){const h=i._clone();c._remove(),h._appendChild(c),t._insertChild(r,h),this._addToClonedElementsGroup(h),s.push(new bt(t,r))}else this._wrapChildren(c,0,c.childCount,i);r++}let a=0;for(const c of s)c.offset-=a,c.offset!=e&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return Vt._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,i){let r=e;const s=[];for(;r<n;){const c=t.getChild(r);if(c.is("attributeElement"))if(c.isSimilar(i)){const l=c.getChildren(),d=c.childCount;c._remove(),t._insertChild(r,l),this._removeFromClonedElementsGroup(c),s.push(new bt(t,r),new bt(t,r+d)),r+=d,n+=d-1}else this._unwrapAttributeElement(i,c)?(s.push(new bt(t,r),new bt(t,r+1)),r++):(this._unwrapChildren(c,0,c.childCount,i),r++);else r++}let a=0;for(const c of s)c.offset-=a,!(c.offset==e||c.offset==n)&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return Vt._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:i}=this._breakAttributesRange(t,!0),r=n.parent,s=this._wrapChildren(r,n.offset,i.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new Vt(a,c)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return Gh(t.clone());t.parent.is("$text")&&(t=nl(t));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);const i=new Vt(t,t.getShiftedBy(1));this.wrap(i,e);const r=new bt(n.parent,n.index);n._remove();const s=r.nodeBefore,a=r.nodeAfter;return s instanceof me&&a instanceof me?qh(s,a):Gh(r)}_wrapAttributeElement(t,e){if(!Yh(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!Yh(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,i=t.end;if(Rr(t,this.document),t.isCollapsed){const c=this._breakAttributes(t.start,e);return new Vt(c,c)}const r=this._breakAttributes(i,e),s=r.parent.childCount,a=this._breakAttributes(n,e);return r.offset+=r.parent.childCount-s,new Vt(a,r)}_breakAttributes(t,e=!1){const n=t.offset,i=t.parent;if(t.parent.is("emptyElement"))throw new y("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new y("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new y("view-writer-cannot-break-raw-element",this.document);if(!e&&i.is("$text")&&ol(i.parent)||ol(i))return t.clone();if(i.is("$text"))return this._breakAttributes(nl(t),e);if(n==i.childCount){const r=new bt(i.parent,i.index+1);return this._breakAttributes(r,e)}if(n===0){const r=new bt(i.parent,i.index);return this._breakAttributes(r,e)}{const r=i.index+1,s=i._clone();i.parent._insertChild(r,s),this._addToClonedElementsGroup(s);const a=i.childCount-n,c=i._removeChildren(n,a);s._appendChild(c);const l=new bt(i.parent,r);return this._breakAttributes(l,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const i of t.getChildren())this._addToClonedElementsGroup(i);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const i of t.getChildren())this._removeFromClonedElementsGroup(i);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function el(o){let t=o.parent;for(;!ol(t);){if(!t)return;t=t.parent}return t}function u1(o,t){return o.priority<t.priority||!(o.priority>t.priority)&&o.getIdentity()<t.getIdentity()}function Gh(o){const t=o.nodeBefore;if(t&&t.is("$text"))return new bt(t,t.data.length);const e=o.nodeAfter;return e&&e.is("$text")?new bt(e,0):o}function nl(o){if(o.offset==o.parent.data.length)return new bt(o.parent.parent,o.parent.index+1);if(o.offset===0)return new bt(o.parent.parent,o.parent.index);const t=o.parent.data.slice(o.offset);return o.parent._data=o.parent.data.slice(0,o.offset),o.parent.parent._insertChild(o.parent.index+1,new me(o.root.document,t)),new bt(o.parent.parent,o.parent.index+1)}function qh(o,t){const e=o.data.length;return o._data+=t.data,t._remove(),new bt(o,e)}const h1=[me,ui,Or,Xc,tl,Ws];function Kh(o,t){for(const e of o){if(!h1.some(n=>e instanceof n))throw new y("view-writer-insert-invalid-node-type",t);e.is("$text")||Kh(e.getChildren(),t)}}function ol(o){return o&&(o.is("containerElement")||o.is("documentFragment"))}function Rr(o,t){const e=el(o.start),n=el(o.end);if(!e||!n||e!==n)throw new y("view-writer-invalid-range-container",t)}function Yh(o,t){return o.id===null&&t.id===null}const Qh=o=>o.createTextNode(" "),Zh=o=>{const t=o.createElement("span");return t.dataset.ckeFiller="true",t.innerText=" ",t},Jh=o=>{const t=o.createElement("br");return t.dataset.ckeFiller="true",t},so=7,jr="⁠".repeat(so);function Bn(o){return typeof o=="string"?o.substr(0,so)===jr:qe(o)&&o.data.substr(0,so)===jr}function zr(o){return o.data.length==so&&Bn(o)}function Xh(o){const t=typeof o=="string"?o:o.data;return Bn(o)?t.slice(so):t}function g1(o,t){if(t.keyCode==re.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){const n=e.getRangeAt(0).startContainer,i=e.getRangeAt(0).startOffset;Bn(n)&&i<=so&&e.collapse(n,0)}}}var tg=b(8264),p1={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(tg.A,p1),tg.A.locals;class m1 extends Ct(){constructor(t,e){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=t,this.selection=e,this.set("isFocused",!1),this.set("isSelecting",!1),g.isBlink&&!g.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new y("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){if(this.isComposing&&!g.isAndroid)return;let t=null;const e=!(g.isBlink&&!g.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);e?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(t=this.domConverter.domPositionToView(this._inlineFiller),t&&t.parent.is("$text")&&(t=bt._createBefore(t.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:t});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:t});if(e)if(t){const n=this.domConverter.viewPositionToDom(t),i=n.parent.ownerDocument;Bn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=eg(i,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.childNodes),i=Array.from(this.domConverter.viewChildrenToDom(t,{withChildren:!1})),r=this._diffNodeLists(n,i),s=this._findUpdateActions(r,n,i,f1);if(s.indexOf("update")!==-1){const a={equal:0,insert:0,delete:0};for(const c of s)if(c==="update"){const l=a.equal+a.insert,d=a.equal+a.delete,h=t.getChild(l);!h||h.is("uiElement")||h.is("rawElement")||this._updateElementMappings(h,n[d]),gh(i[l]),a.equal++}else a[c]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("$text")?bt._createBefore(t.parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&qe(e.parent)&&Bn(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!Bn(t))throw new y("view-renderer-filler-was-lost",this);zr(t)?t.remove():t.data=t.data.substr(so),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(s){if(s.getAttribute("contenteditable")=="false")return!1;const a=s.findAncestor(c=>c.hasAttribute("contenteditable"));return!a||a.getAttribute("contenteditable")=="true"}(e)||n===e.getFillerOffset())return!1;const i=t.nodeBefore,r=t.nodeAfter;return!(i instanceof me||r instanceof me)&&(!g.isAndroid||!i&&!r)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t);let i=this.domConverter.viewToDom(t).data;const r=e.inlineFillerPosition;r&&r.parent==t.parent&&r.offset==t.index&&(i=jr+i),ng(n,i)}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(r=>r.name),i=t.getAttributeKeys();for(const r of i)this.domConverter.setDomElementAttribute(e,r,t.getAttribute(r),t);for(const r of n)t.hasAttribute(r)||this.domConverter.removeDomElementAttribute(e,r)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;if(g.isAndroid){let h=null;for(const f of Array.from(n.childNodes)){if(h&&qe(h)&&qe(f)){n.normalize();break}h=f}}const i=e.inlineFillerPosition,r=n.childNodes,s=Array.from(this.domConverter.viewChildrenToDom(t,{bind:!0}));i&&i.parent===t&&eg(n.ownerDocument,s,i.offset);const a=this._diffNodeLists(r,s),c=this._findUpdateActions(a,r,s,k1);let l=0;const d=new Set;for(const h of c)h==="delete"?(d.add(r[l]),gh(r[l])):h!=="equal"&&h!=="update"||l++;l=0;for(const h of c)h==="insert"?(lh(n,l,s[l]),l++):h==="update"?(ng(r[l],s[l].data),l++):h==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[l])),l++);for(const h of d)h.parentNode||this.domConverter.unbindDomElement(h)}_diffNodeLists(t,e){return t=function(n,i){const r=Array.from(n);return r.length==0||!i||r[r.length-1]==i&&r.pop(),r}(t,this._fakeSelectionContainer),R(t,e,b1.bind(null,this.domConverter))}_findUpdateActions(t,e,n,i){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let r=[],s=[],a=[];const c={equal:0,insert:0,delete:0};for(const l of t)l==="insert"?a.push(n[c.equal+c.insert]):l==="delete"?s.push(e[c.equal+c.delete]):(r=r.concat(R(s,a,i).map(d=>d==="equal"?"update":d)),r.push("equal"),s=[],a=[]),c[l]++;return r.concat(R(s,a,i).map(l=>l==="equal"?"update":l))}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(g.isBlink&&!g.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(t)):this.isComposing&&g.isAndroid||this._updateDomSelection(t))}_updateFakeSelection(t){const e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(s){const a=s.createElement("div");return a.className="ck-fake-selection-container",Object.assign(a.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),a.textContent=" ",a}(e));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const i=e.getSelection(),r=e.createRange();i.removeAllRanges(),r.selectNodeContents(n),i.addRange(r)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),i=this.domConverter.viewPositionToDom(this.selection.focus);e.setBaseAndExtent(n.parent,n.offset,i.parent,i.offset),g.isGecko&&function(r,s){const a=r.parent;if(a.nodeType!=Node.ELEMENT_NODE||r.offset!=a.childNodes.length-1)return;const c=a.childNodes[r.offset];c&&c.tagName=="BR"&&s.addRange(s.getRangeAt(0))}(i,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){const e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const t of this.domDocuments){const e=t.getSelection();if(e.rangeCount){const n=t.activeElement,i=this.domConverter.mapDomToView(n);n&&i&&e.removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function eg(o,t,e){const n=t instanceof Array?t:t.childNodes,i=n[e];if(qe(i))return i.data=jr+i.data,i;{const r=o.createTextNode(jr);return Array.isArray(t)?n.splice(e,0,r):lh(t,e,r),r}}function f1(o,t){return Uo(o)&&Uo(t)&&!qe(o)&&!qe(t)&&!Br(o)&&!Br(t)&&o.tagName.toLowerCase()===t.tagName.toLowerCase()}function k1(o,t){return Uo(o)&&Uo(t)&&qe(o)&&qe(t)}function b1(o,t,e){return t===e||(qe(t)&&qe(e)?t.data===e.data:!(!o.isBlockFiller(t)||!o.isBlockFiller(e)))}function ng(o,t){const e=o.data;if(e==t)return;const n=S(e,t);for(const i of n)i.type==="insert"?o.insertData(i.index,i.values.join("")):o.deleteData(i.index,i.howMany)}const w1=Jh(Mt.document),A1=Qh(Mt.document),_1=Zh(Mt.document),Gs="data-ck-unsafe-attribute-",og="data-ck-unsafe-element";class qs{constructor(t,{blockFillerMode:e,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new wo,this._inlineObjectElementMatcher=new wo,this._elementsWithTemporaryCustomProperties=new Set,this.document=t,this.renderingMode=n,this.blockFillerMode=e||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Mt.document:Mt.document.implementation.createHTMLDocument("")}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new ro(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const n of Array.from(t.children))this.unbindDomElement(n)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}shouldRenderAttribute(t,e,n){return this.renderingMode==="data"||!(t=t.toLowerCase()).startsWith("on")&&(t!=="srcdoc"||!e.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(t==="src"||t==="srcset")||n==="source"&&t==="srcset"||!e.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(t,e){if(this.renderingMode==="data")return void(t.innerHTML=e);const n=new DOMParser().parseFromString(e,"text/html"),i=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)i.appendChild(r[0]);const s=n.createTreeWalker(i,NodeFilter.SHOW_ELEMENT),a=[];let c;for(;c=s.nextNode();)a.push(c);for(const l of a){for(const h of l.getAttributeNames())this.setDomElementAttribute(l,h,l.getAttribute(h));const d=l.tagName.toLowerCase();this._shouldRenameElement(d)&&(sg(d),l.replaceWith(this._createReplacementDomElement(d,l)))}for(;t.firstChild;)t.firstChild.remove();t.append(i)}viewToDom(t,e={}){if(t.is("$text")){const n=this._processDataFromViewText(t);return this._domDocument.createTextNode(n)}{const n=t;if(this.mapViewToDom(n)){if(!n.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(n);this._elementsWithTemporaryCustomProperties.add(n)}let i;if(n.is("documentFragment"))i=this._domDocument.createDocumentFragment(),e.bind&&this.bindDocumentFragments(i,n);else{if(n.is("uiElement"))return i=n.name==="$comment"?this._domDocument.createComment(n.getCustomProperty("$rawContent")):n.render(this._domDocument,this),e.bind&&this.bindElements(i,n),i;this._shouldRenameElement(n.name)?(sg(n.name),i=this._createReplacementDomElement(n.name)):i=n.hasAttribute("xmlns")?this._domDocument.createElementNS(n.getAttribute("xmlns"),n.name):this._domDocument.createElement(n.name),n.is("rawElement")&&n.render(i,this),e.bind&&this.bindElements(i,n);for(const r of n.getAttributeKeys())this.setDomElementAttribute(i,r,n.getAttribute(r),n)}if(e.withChildren!==!1)for(const r of this.viewChildrenToDom(n,e))i.appendChild(r);return i}}setDomElementAttribute(t,e,n,i){const r=this.shouldRenderAttribute(e,n,t.tagName.toLowerCase())||i&&i.shouldRenderUnsafeAttribute(e);r||z("domconverter-unsafe-attribute-detected",{domElement:t,key:e,value:n}),function(s){try{Mt.document.createAttribute(s)}catch{return!1}return!0}(e)?(t.hasAttribute(e)&&!r?t.removeAttribute(e):t.hasAttribute(Gs+e)&&r&&t.removeAttribute(Gs+e),t.setAttribute(r?e:Gs+e,n)):z("domconverter-invalid-attribute-detected",{domElement:t,key:e,value:n})}removeDomElementAttribute(t,e){e!=og&&(t.removeAttribute(e),t.removeAttribute(Gs+e))}*viewChildrenToDom(t,e={}){const n=t.getFillerOffset&&t.getFillerOffset();let i=0;for(const r of t.getChildren()){n===i&&(yield this._getBlockFiller());const s=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!Xe(r.getAttributes());s&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,e):(s&&z("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,e)),i++}n===i&&(yield this._getBlockFiller())}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),i=this._domDocument.createRange();return i.setStart(e.parent,e.offset),i.setEnd(n.parent,n.offset),i}viewPositionToDom(t){const e=t.parent;if(e.is("$text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let i=t.offset;return Bn(n)&&(i+=so),{parent:n,offset:i}}{let n,i,r;if(t.offset===0){if(n=this.mapViewToDom(e),!n)return null;r=n.childNodes[0]}else{const s=t.nodeBefore;if(i=s.is("$text")?this.findCorrespondingDomText(s):this.mapViewToDom(s),!i)return null;n=i.parentNode,r=i.nextSibling}return qe(r)&&Bn(r)?{parent:r,offset:so}:{parent:n,offset:i?Os(i)+1:0}}}domToView(t,e={}){const n=[],i=this._domToView(t,e,n),r=i.next().value;return r?(i.next(),this._processDomInlineNodes(null,n,e),r.is("$text")&&r.data.length==0?null:r):null}*domChildrenToView(t,e={},n=[]){for(let i=0;i<t.childNodes.length;i++){const r=t.childNodes[i],s=this._domToView(r,e,n),a=s.next().value;a!==null&&(this._isBlockViewElement(a)&&this._processDomInlineNodes(t,n,e),yield a,s.next())}this._processDomInlineNodes(t,n,e)}domSelectionToView(t){if(function(i){if(!g.isGecko||!i.rangeCount)return!1;const r=i.getRangeAt(0).startContainer;try{Object.prototype.toString.call(r)}catch{return!0}return!1}(t))return new ro([]);if(t.rangeCount===1){let i=t.getRangeAt(0).startContainer;qe(i)&&(i=i.parentNode);const r=this.fakeSelectionToView(i);if(r)return r}const e=this.isDomSelectionBackward(t),n=[];for(let i=0;i<t.rangeCount;i++){const r=t.getRangeAt(i),s=this.domRangeToView(r);s&&n.push(s)}return new ro(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new Vt(e,n):null}domPositionToView(t,e=0){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,Os(t));const n=this.mapDomToView(t);if(n&&(n.is("uiElement")||n.is("rawElement")))return bt._createBefore(n);if(qe(t)){if(zr(t))return this.domPositionToView(t.parentNode,Os(t));const i=this.findCorrespondingViewText(t);let r=e;return i?(Bn(t)&&(r-=so,r=r<0?0:r),new bt(i,r)):null}if(e===0){const i=this.mapDomToView(t);if(i)return new bt(i,0)}else{const i=t.childNodes[e-1];if(qe(i)&&zr(i)||i&&this.isBlockFiller(i))return this.domPositionToView(i.parentNode,Os(i));const r=qe(i)?this.findCorrespondingViewText(i):this.mapDomToView(i);if(r&&r.parent)return new bt(r.parent,r.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(zr(t))return null;const e=this.getHostViewElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const i=this.mapDomToView(n);if(i){const r=i.nextSibling;return r instanceof me?r:null}}else{const i=this.mapDomToView(t.parentNode);if(i){const r=i.getChild(0);return r instanceof me?r:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:n,scrollY:i}=Mt.window,r=[];ig(e,s=>{const{scrollLeft:a,scrollTop:c}=s;r.push([a,c])}),e.focus(),ig(e,s=>{const[a,c]=r.shift();s.scrollLeft=a,s.scrollTop=c}),Mt.window.scrollTo(n,i)}}_clearDomSelection(){const t=this.mapViewToDom(this.document.selection.editableElement);if(!t)return;const e=t.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(e);n&&n.rangeCount>0&&e.removeAllRanges()}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(w1):!(t.tagName!=="BR"||!rg(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(_1)||function(e,n){return e.isEqualNode(A1)&&rg(e,n)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=this._domDocument.createRange();try{e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset)}catch{return!1}const n=e.collapsed;return e.detach(),n}getHostViewElement(t){const e=function(n){const i=[];let r=n;for(;r&&r.nodeType!=Node.DOCUMENT_NODE;)i.unshift(r),r=r.parentNode;return i}(t);for(e.pop();e.length;){const n=e.pop(),i=this._domToViewMapping.get(n);if(i&&(i.is("uiElement")||i.is("rawElement")))return i}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}registerInlineObjectMatcher(t){this._inlineObjectElementMatcher.add(t)}_clearTemporaryCustomProperties(){for(const t of this._elementsWithTemporaryCustomProperties)t._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Qh(this._domDocument);case"markedNbsp":return Zh(this._domDocument);case"br":return Jh(this._domDocument)}}_isDomSelectionPositionCorrect(t,e){if(qe(t)&&Bn(t)&&e<so||this.isElement(t)&&Bn(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(t,e,n){if(this.isBlockFiller(t))return null;const i=this.getHostViewElement(t);if(i)return i;if(Br(t)&&e.skipComments)return null;if(qe(t)){if(zr(t))return null;{const r=t.data;if(r==="")return null;const s=new me(this.document,r);return n.push(s),s}}{let r=this.mapDomToView(t);if(r)return this._isInlineObjectElement(r)&&n.push(r),r;if(this.isDocumentFragment(t))r=new hi(this.document),e.bind&&this.bindDocumentFragments(t,r);else{r=this._createViewElement(t,e),e.bind&&this.bindElements(t,r);const a=t.attributes;if(a)for(let c=a.length,l=0;l<c;l++)r._setAttribute(a[l].name,a[l].value);if(this._isViewElementWithRawContent(r,e))return r._setCustomProperty("$rawContent",t.innerHTML),this._isBlockViewElement(r)||n.push(r),r;if(Br(t))return r._setCustomProperty("$rawContent",t.data),r}yield r;const s=[];if(e.withChildren!==!1)for(const a of this.domChildrenToView(t,e,s))r._appendChild(a);if(this._isInlineObjectElement(r))n.push(r);else for(const a of s)n.push(a)}}_processDomInlineNodes(t,e,n){if(!e.length||t&&!this.isDocumentFragment(t)&&!this._isBlockDomElement(t))return;let i=!1;for(let r=0;r<e.length;r++){const s=e[r];if(!s.is("$text")){i=!1;continue}let a,c=!1;if(C1(s,this.preElements))a=Xh(s.data);else{a=s.data.replace(/[ \n\t\r]{1,}/g," "),c=/[^\S\u00A0]/.test(a.charAt(a.length-1));const l=r>0?e[r-1]:null,d=r+1<e.length?e[r+1]:null,h=!l||l.is("element")&&l.name=="br"||i,f=!d&&!Bn(s.data);n.withChildren!==!1&&(h&&(a=a.replace(/^ /,"")),f&&(a=a.replace(/ $/,""))),a=Xh(a),a=a.replace(/ \u00A0/g,"  ");const A=d&&d.is("element")&&d.name!="br",E=d&&d.is("$text")&&d.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(a)||!d||A||E)&&(a=a.replace(/\u00A0$/," ")),(h||l&&l.is("element")&&l.name!="br")&&(a=a.replace(/^\u00A0/," "))}a.length==0&&s.parent?(s._remove(),e.splice(r,1),r--):(s._data=a,i=c)}e.length=0}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return e;if(e.charAt(0)==" "){const n=this._getTouchingInlineViewNode(t,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(e=" "+e.substr(1))}if(e.charAt(e.length-1)==" "){const n=this._getTouchingInlineViewNode(t,!0),i=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";e.charAt(e.length-2)!=" "&&n&&!i||(e=e.substr(0,e.length-1)+" ")}return e.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(t){if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_getTouchingInlineViewNode(t,e){const n=new di({startPosition:e?bt._createAfter(t):bt._createBefore(t),direction:e?"forward":"backward"});for(const i of n){if(i.item.is("element","br"))return null;if(this._isInlineObjectElement(i.item))return i.item;if(i.item.is("containerElement"))return null;if(i.item.is("$textProxy"))return i.item}return null}_isBlockDomElement(t){return this.isElement(t)&&this.blockElements.includes(t.tagName.toLowerCase())}_isBlockViewElement(t){return t.is("element")&&this.blockElements.includes(t.name)}_isInlineObjectElement(t){return!!t.is("element")&&(t.name=="br"||this.inlineObjectElements.includes(t.name)||!!this._inlineObjectElementMatcher.match(t))}_createViewElement(t,e){if(Br(t))return new Ws(this.document,"$comment");const n=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();return new Mn(this.document,n)}_isViewElementWithRawContent(t,e){return e.withChildren!==!1&&t.is("element")&&!!this._rawContentElementMatcher.match(t)}_shouldRenameElement(t){const e=t.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(e)}_createReplacementDomElement(t,e){const n=this._domDocument.createElement("span");if(n.setAttribute(og,t),e){for(;e.firstChild;)n.appendChild(e.firstChild);for(const i of e.getAttributeNames())n.setAttribute(i,e.getAttribute(i))}return n}}function C1(o,t){return o.getAncestors().some(e=>e.is("element")&&t.includes(e.name))}function ig(o,t){let e=o;for(;e;)t(e),e=e.parentElement}function rg(o,t){const e=o.parentNode;return!!e&&!!e.tagName&&t.includes(e.tagName.toLowerCase())}function sg(o){o==="script"&&z("domconverter-unsafe-script-element-detected"),o==="style"&&z("domconverter-unsafe-style-element-detected")}class Ao extends Hn(){constructor(t){super(),this._isEnabled=!1,this.view=t,this.document=t.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const ag=vh(function(o,t){zi(t,Vi(t),o)});class qi{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,ag(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class $o extends Ao{constructor(){super(...arguments),this.useCapture=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(n,i)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(i.target)&&this.onDomEvent(i)},{useCapture:this.useCapture})})}stopObserving(t){this.stopListening(t)}fire(t,e,n){this.isEnabled&&this.document.fire(t,new qi(this.view,e,n))}}class v1 extends $o{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(t){const e={keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return Hi(this)}};this.fire(t.type,t,e)}}const il=function(){return Ie.Date.now()};var y1=/\s/;const x1=function(o){for(var t=o.length;t--&&y1.test(o.charAt(t)););return t};var E1=/^\s+/;const D1=function(o){return o&&o.slice(0,x1(o)+1).replace(E1,"")};var T1=/^[-+]0x[0-9a-f]+$/i,I1=/^0b[01]+$/i,S1=/^0o[0-7]+$/i,M1=parseInt;const cg=function(o){if(typeof o=="number")return o;if(Fs(o))return NaN;if(It(o)){var t=typeof o.valueOf=="function"?o.valueOf():o;o=It(t)?t+"":t}if(typeof o!="string")return o===0?o:+o;o=D1(o);var e=I1.test(o);return e||S1.test(o)?M1(o.slice(2),e?2:8):T1.test(o)?NaN:+o};var B1=Math.max,N1=Math.min;const Ki=function(o,t,e){var n,i,r,s,a,c,l=0,d=!1,h=!1,f=!0;if(typeof o!="function")throw new TypeError("Expected a function");function A(J){var it=n,lt=i;return n=i=void 0,l=J,s=o.apply(lt,it)}function E(J){var it=J-c;return c===void 0||it>=t||it<0||h&&J-l>=r}function M(){var J=il();if(E(J))return L(J);a=setTimeout(M,function(it){var lt=t-(it-c);return h?N1(lt,r-(it-l)):lt}(J))}function L(J){return a=void 0,f&&n?A(J):(n=i=void 0,s)}function V(){var J=il(),it=E(J);if(n=arguments,i=this,c=J,it){if(a===void 0)return function(lt){return l=lt,a=setTimeout(M,t),d?A(lt):s}(c);if(h)return clearTimeout(a),a=setTimeout(M,t),A(c)}return a===void 0&&(a=setTimeout(M,t)),s}return t=cg(t)||0,It(e)&&(d=!!e.leading,r=(h="maxWait"in e)?B1(cg(e.maxWait)||0,t):r,f="trailing"in e?!!e.trailing:f),V.cancel=function(){a!==void 0&&clearTimeout(a),l=0,n=c=i=a=void 0},V.flush=function(){return a===void 0?s:L(il())},V};class P1 extends Ao{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=Ki(e=>{this.document.fire("selectionChangeDone",e)},200)}observe(){const t=this.document;t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new ro(e.getRanges(),{backward:e.isBackward,fake:!1});t!=re.arrowleft&&t!=re.arrowup||n.setTo(n.getFirstPosition()),t!=re.arrowright&&t!=re.arrowdown||n.setTo(n.getLastPosition());const i={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",i),this._fireSelectionChangeDoneDebounced(i)}}const O1=function(o){return this.__data__.set(o,"__lodash_hash_undefined__"),this},L1=function(o){return this.__data__.has(o)};function Ks(o){var t=-1,e=o==null?0:o.length;for(this.__data__=new xs;++t<e;)this.add(o[t])}Ks.prototype.add=Ks.prototype.push=O1,Ks.prototype.has=L1;const R1=Ks,j1=function(o,t){for(var e=-1,n=o==null?0:o.length;++e<n;)if(t(o[e],e,o))return!0;return!1},z1=function(o,t){return o.has(t)},lg=function(o,t,e,n,i,r){var s=1&e,a=o.length,c=t.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(o),d=r.get(t);if(l&&d)return l==t&&d==o;var h=-1,f=!0,A=2&e?new R1:void 0;for(r.set(o,t),r.set(t,o);++h<a;){var E=o[h],M=t[h];if(n)var L=s?n(M,E,h,t,o,r):n(E,M,h,o,t,r);if(L!==void 0){if(L)continue;f=!1;break}if(A){if(!j1(t,function(V,J){if(!z1(A,J)&&(E===V||i(E,V,e,n,r)))return A.push(J)})){f=!1;break}}else if(E!==M&&!i(E,M,e,n,r)){f=!1;break}}return r.delete(o),r.delete(t),f},F1=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n,i){e[++t]=[i,n]}),e},V1=function(o){var t=-1,e=Array(o.size);return o.forEach(function(n){e[++t]=n}),e};var dg=se?se.prototype:void 0,rl=dg?dg.valueOf:void 0;const U1=function(o,t,e,n,i,r,s){switch(e){case"[object DataView]":if(o.byteLength!=t.byteLength||o.byteOffset!=t.byteOffset)return!1;o=o.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(o.byteLength!=t.byteLength||!r(new Ms(o),new Ms(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return no(+o,+t);case"[object Error]":return o.name==t.name&&o.message==t.message;case"[object RegExp]":case"[object String]":return o==t+"";case"[object Map]":var a=F1;case"[object Set]":var c=1&n;if(a||(a=V1),o.size!=t.size&&!c)return!1;var l=s.get(o);if(l)return l==t;n|=2,s.set(o,t);var d=lg(a(o),a(t),n,i,r,s);return s.delete(o),d;case"[object Symbol]":if(rl)return rl.call(o)==rl.call(t)}return!1};var H1=Object.prototype.hasOwnProperty;const $1=function(o,t,e,n,i,r){var s=1&e,a=Cc(o),c=a.length;if(c!=Cc(t).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in t:H1.call(t,d)))return!1}var h=r.get(o),f=r.get(t);if(h&&f)return h==t&&f==o;var A=!0;r.set(o,t),r.set(t,o);for(var E=s;++l<c;){var M=o[d=a[l]],L=t[d];if(n)var V=s?n(L,M,d,t,o,r):n(M,L,d,o,t,r);if(!(V===void 0?M===L||i(M,L,e,n,r):V)){A=!1;break}E||(E=d=="constructor")}if(A&&!E){var J=o.constructor,it=t.constructor;J==it||!("constructor"in o)||!("constructor"in t)||typeof J=="function"&&J instanceof J&&typeof it=="function"&&it instanceof it||(A=!1)}return r.delete(o),r.delete(t),A};var ug="[object Arguments]",hg="[object Array]",Ys="[object Object]",gg=Object.prototype.hasOwnProperty;const W1=function(o,t,e,n,i,r){var s=xe(o),a=xe(t),c=s?hg:Sr(o),l=a?hg:Sr(t),d=(c=c==ug?Ys:c)==Ys,h=(l=l==ug?Ys:l)==Ys,f=c==l;if(f&&Dr(o)){if(!Dr(t))return!1;s=!0,d=!1}if(f&&!d)return r||(r=new ji),s||wc(o)?lg(o,t,e,n,i,r):U1(o,t,c,e,n,i,r);if(!(1&e)){var A=d&&gg.call(o,"__wrapped__"),E=h&&gg.call(t,"__wrapped__");if(A||E){var M=A?o.value():o,L=E?t.value():t;return r||(r=new ji),i(M,L,e,n,r)}}return!!f&&(r||(r=new ji),$1(o,t,e,n,i,r))},Qs=function o(t,e,n,i,r){return t===e||(t==null||e==null||!Ke(t)&&!Ke(e)?t!=t&&e!=e:W1(t,e,n,i,o,r))},G1=function(o,t,e){var n=(e=typeof e=="function"?e:void 0)?e(o,t):void 0;return n===void 0?Qs(o,t,void 0,e):!!n};class pg extends Ao{constructor(t){super(t),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.add(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}stopObserving(t){if(this._domElements.delete(t),this.isEnabled){this._mutationObserver.disconnect();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;const e=this.domConverter,n=new Set,i=new Set;for(const s of t){const a=e.mapDomToView(s.target);a&&(a.is("uiElement")||a.is("rawElement")||s.type!=="childList"||this._isBogusBrMutation(s)||i.add(a))}for(const s of t){const a=e.mapDomToView(s.target);if((!a||!a.is("uiElement")&&!a.is("rawElement"))&&s.type==="characterData"){const c=e.findCorrespondingViewText(s.target);c&&!i.has(c.parent)?n.add(c):!c&&Bn(s.target)&&i.add(e.mapDomToView(s.target.parentNode))}}let r=!1;for(const s of n)r=!0,this.renderer.markToSync("text",s);for(const s of i){const a=e.mapViewToDom(s),c=Array.from(s.getChildren()),l=Array.from(e.domChildrenToView(a,{withChildren:!1}));G1(c,l,q1)||(r=!0,this.renderer.markToSync("children",s))}r&&this.view.forceRender()}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}function q1(o,t){if(!Array.isArray(o))return o===t||!(!o.is("$text")||!t.is("$text"))&&o.data===t.data}class Zs extends $o{constructor(t){super(t),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),t.change(()=>{})},50)}),e.on("blur",(n,i)=>{const r=e.selection.editableElement;r!==null&&r!==i.target||(e.isFocused=!1,this._isFocusChanging=!1,t.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class K1 extends Ao{constructor(t){super(t),this.mutationObserver=t.getObserver(pg),this.focusObserver=t.getObserver(Zs),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Ki(e=>{this.document.fire("selectionChangeDone",e)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Ki(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,e),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(t,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(t,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(e)||(this.listenTo(e,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"selectionchange",(i,r)=>{this.document.isComposing&&!g.isAndroid||(this._handleSelectionChange(r,e),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(e))}stopObserving(t){this.stopListening(t)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(t,e){if(!this.isEnabled)return;const n=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const i=this.domConverter.domSelectionToView(n);if(i.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(i)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(i))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:i,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class Y1 extends $o{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0},{priority:"low"}),e.on("compositionend",()=>{e.isComposing=!1},{priority:"low"})}onDomEvent(t){this.fire(t.type,t,{data:t.data})}}class mg{constructor(t,e={}){this._files=e.cacheFiles?fg(t):null,this._native=t}get files(){return this._files||(this._files=fg(this._native)),this._files}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}setDragImage(t,e,n){this._native.setDragImage(t,e,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function fg(o){const t=Array.from(o.files||[]),e=Array.from(o.items||[]);return t.length?t:e.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class Q1 extends $o{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(t){const e=t.getTargetRanges(),n=this.view,i=n.document;let r=null,s=null,a=[];if(t.dataTransfer&&(r=new mg(t.dataTransfer)),t.data!==null?s=t.data:r&&(s=r.getData("text/plain")),i.selection.isFake)a=Array.from(i.selection.getRanges());else if(e.length)a=e.map(c=>{const l=n.domConverter.domPositionToView(c.startContainer,c.startOffset),d=n.domConverter.domPositionToView(c.endContainer,c.endOffset);return l?n.createRange(l,d):d?n.createRange(d):void 0}).filter(c=>!!c);else if(g.isAndroid){const c=t.target.ownerDocument.defaultView.getSelection();a=Array.from(n.domConverter.domSelectionToView(c).getRanges())}if(g.isAndroid&&t.inputType=="insertCompositionText"&&s&&s.endsWith(`
`))this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:[n.createRange(a[0].end)]});else if(t.inputType=="insertText"&&s&&s.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...e?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[e]}]:[],n],on:{dragstart:i.to(r=>r.preventDefault())}}]})}}function zm(o,t,e){return(n,i)=>{const r=new ne(o);if(r.width<X2||r.height<J2)return null;let s;s=t.position==="inside"?r.bottom-i.height:r.bottom-i.height/2,s-=t.verticalOffset;const a=e(r,i),c=n.clone().moveTo(a,s).getIntersection(i.clone().moveTo(a,s)).getVisible();return!c||c.getArea()<i.getArea()?null:{top:s,left:a,name:`position_${t.position}-side_${t.side}`,config:{withArrow:!1}}}}function Fm(o){const t=o.config.get("ui.poweredBy"),e=t&&t.position||"border";return Z2({position:e,label:tE,verticalOffset:e==="inside"?5:0,horizontalOffset:5,side:o.locale.contentLanguageDirection==="ltr"?"right":"left"},t)}var Vm=b(1801),oE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(Vm.A,oE),Vm.A.locals;const Um="polite";class iE{constructor(t){this.editor=t}announce(t,e,n=Um){const i=this.editor;this.view||(this.view=new rE(i.locale),i.ui.view.body.add(this.view));let r=this.view.regionViews.find(s=>s.regionName===t);r||(r=new sE(this.view.locale),this.view.regionViews.add(r)),r.set({regionName:t,text:e,politeness:n})}}class rE extends Ot{constructor(t){super(t),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class sE extends Ot{constructor(t){super(t);const e=this.bindTemplate;this.set("regionName",""),this.set("text",""),this.set("politeness",Um),this.setTemplate({tag:"div",attributes:{role:"region","data-region":e.to("regionName"),"aria-live":e.to("politeness")},children:[{text:e.to("text")}]})}}var aE=Object.defineProperty,Hm=Object.getOwnPropertySymbols,cE=Object.prototype.hasOwnProperty,lE=Object.prototype.propertyIsEnumerable,$m=(o,t,e)=>t in o?aE(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class dE extends Ct(){constructor(t){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const e=t.editing.view;this.editor=t,this.componentFactory=new S2(t),this.focusTracker=new tn,this.tooltipManager=new ga(t),this.poweredBy=new eE(t),this.ariaLiveAnnouncer=new iE(t),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(e.document,"layoutChanged",this.update.bind(this)),this.listenTo(e,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const t of this._editableElementsMap.values())t.ckeditorInstance=null,this.editor.keystrokes.stopListening(t);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor),this.focusTracker.add(e);const n=()=>{this.editor.editing.view.getDomRoot(t)||this.editor.keystrokes.listenTo(e)};this.isReady?n():this.once("ready",n)}removeEditableElement(t){const e=this._editableElementsMap.get(t);e&&(this._editableElementsMap.delete(t),this.editor.keystrokes.stopListening(e),this.focusTracker.remove(e),e.ckeditorInstance=null)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(t,e={}){t.isRendered?(this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)):t.once("render",()=>{this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)}),this._focusableToolbarDefinitions.push({toolbarView:t,options:e})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const t=this.editor,e=t.config.get("ui.viewportOffset");if(e)return e;const n=t.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const t=this.editor,e=t.editing.view;let n,i;t.keystrokes.set("Alt+F10",(r,s)=>{const a=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(a)&&!Array.from(e.domRoots.values()).includes(a)&&(n=a);const c=this._getCurrentFocusedToolbarDefinition();c&&i||(i=this._getFocusableCandidateToolbarDefinitions());for(let l=0;l<i.length;l++){const d=i.shift();if(i.push(d),d!==c&&this._focusFocusableCandidateToolbar(d)){c&&c.options.afterBlur&&c.options.afterBlur();break}}s()}),t.keystrokes.set("Esc",(r,s)=>{const a=this._getCurrentFocusedToolbarDefinition();a&&(n?(n.focus(),n=null):t.editing.view.focus(),a.options.afterBlur&&a.options.afterBlur(),s())})}_getFocusableCandidateToolbarDefinitions(){const t=[];for(const e of this._focusableToolbarDefinitions){const{toolbarView:n,options:i}=e;(ai(n.element)||i.beforeFocus)&&t.push(e)}return t.sort((e,n)=>Wm(e)-Wm(n)),t}_getCurrentFocusedToolbarDefinition(){for(const t of this._focusableToolbarDefinitions)if(t.toolbarView.element&&t.toolbarView.element.contains(this.focusTracker.focusedElement))return t;return null}_focusFocusableCandidateToolbar(t){const{toolbarView:e,options:{beforeFocus:n}}=t;return n&&n(),!!ai(e.element)&&(e.focus(),!0)}_handleScrollToTheSelection(t,e){const n=((i,r)=>{for(var s in r||(r={}))cE.call(r,s)&&$m(i,s,r[s]);if(Hm)for(var s of Hm(r))lE.call(r,s)&&$m(i,s,r[s]);return i})({top:0,bottom:0,left:0,right:0},this.viewportOffset);e.viewportOffset.top+=n.top,e.viewportOffset.bottom+=n.bottom,e.viewportOffset.left+=n.left,e.viewportOffset.right+=n.right}}function Wm(o){const{toolbarView:t,options:e}=o;let n=10;return ai(t.element)&&n--,e.isContextual&&n--,n}var Gm=b(1185),uE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(Gm.A,uE),Gm.A.locals;class hE extends Ot{constructor(t){super(t),this.body=new Zx(t)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class gE extends hE{constructor(t){super(t),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const t=this.t,e=new ia;return e.text=t("Rich Text Editor"),e.extendTemplate({attributes:{class:"ck-voice-label"}}),e}}class pE extends Ot{constructor(t,e,n){super(t),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const t=this._editingView;function e(n){t.change(i=>{const r=t.document.getRoot(n.name);i.addClass(n.isFocused?"ck-focused":"ck-blurred",r),i.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}t.isRenderingInProgress?function n(i){t.once("change:isRenderingInProgress",(r,s,a)=>{a?n(i):e(i)})}(this):e(this)}}class mE extends pE{constructor(t,e,n,i={}){super(t,e,n);const r=t.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=i.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();const t=this._editingView;t.change(e=>{const n=t.document.getRoot(this.name);e.setAttribute("aria-label",this._generateLabel(this),n)})}}class Nl extends js{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=t.namespace?`show:${t.type}:${t.namespace}`:`show:${t.type}`;this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class qm extends Ct(){constructor(t,e){super(),e&&ag(this,e),t&&this.set(t)}}var Km=b(991),fE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(Km.A,fE),Km.A.locals;var Ym=b(5380),kE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(Ym.A,kE),Ym.A.locals;const ma=Ui("px");class fa extends pt{constructor(t){super(t),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const e=this.editor.editing.view,n=e.document.selection.editableElement;return n?e.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this._view||this._createPanelView(),this.hasView(t.view))throw new y("contextualballoon-add-view-exist",[this,t]);const e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));const n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new y("contextualballoon-remove-view-not-exist",[this,t]);const e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(e.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),e.size===1?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;const e=this._idToStack.get(t);if(!e)throw new y("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}_createPanelView(){this._view=new En(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){const t=new bE(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,i)=>!i&&n>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,i)=>{if(i<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("%0 of %1",[r,i])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){const t=new wE(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,n)=>!n&&e>=2?Math.min(e-1,2):0),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:i=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),i&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&(t.limiter||(t=Object.assign({},t,{limiter:this.positionLimiter})),t=Object.assign({},t,{viewportOffsetConfig:this.editor.ui.viewportOffset})),t}}class bE extends Ot{constructor(t){super(t);const e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new tn,this.buttonPrevView=this._createButtonView(e("Previous"),Wt.previousArrow),this.buttonNextView=this._createButtonView(e("Next"),Wt.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",i=>i?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){const n=new le(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class wE extends Ot{constructor(t,e){super(t);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",i=>i?"":"ck-hidden")],style:{top:n.to("top",ma),left:n.to("left",ma),width:n.to("width",ma),height:n.to("height",ma)}},children:this.content}),this.on("change:numberOfPanels",(i,r,s,a)=>{s>a?this._addPanels(s-a):this._removePanels(a-s),this.updatePosition()})}_addPanels(t){for(;t--;){const e=new Ot;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(t){for(;t--;){const e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:t,left:e}=this._balloonPanelView,{width:n,height:i}=new ne(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:i})}}}var Qm=b(8298),AE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(Qm.A,AE),Qm.A.locals;const tr=Ui("px");class _E extends Ot{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new uo({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",n=>n?"block":"none"),height:e.to("isSticky",n=>n?tr(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new uo({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",n=>n?tr(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_stickyTopOffset",n=>n&&tr(n)),bottom:e.to("_stickyBottomOffset",n=>n&&tr(n)),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(Mt.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const t=new ne(this.limiterElement);let e=t.getVisible();if(e){const n=new ne(Mt.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,e=e.getIntersection(n)}if(e&&t.top<e.top){const n=e.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>e.bottom){const i=Math.max(t.bottom-e.bottom,0)+this.limiterBottomOffset;t.bottom-i>t.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(i):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<t.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=t,this._stickyBottomOffset=null,this._marginLeft=tr(-Mt.window.scrollX)}_stickToBottomOfLimiter(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=t,this._marginLeft=tr(-Mt.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new ne(this.contentPanelElement)}}class CE extends aa{constructor(t,e){const n=t.t,i=Object.assign({},{showResetButton:!0,showIcon:!0,creator:da},e);super(t,i.creator),this.label=e.label,this._viewConfig=i,this._viewConfig.showIcon&&(this.iconView=new So,this.iconView.content=Wt.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new le(t),this.resetButtonView.set({label:n("Clear"),icon:Wt.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",r=>!r),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class vE extends Ot{constructor(){super();const t=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",t.if("isVisible","ck-hidden",e=>!e)],tabindex:-1},children:[{tag:"span",children:[{text:[t.to("primaryText")]}]},{tag:"span",children:[{text:[t.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class yE extends Ot{constructor(t){super(t),this.children=this.createCollection(),this.focusTracker=new tn,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new Gn({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const t of this.children)this.focusTracker.add(t.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var Zm=/[\\^$.*+?()[\]{}|]/g,xE=RegExp(Zm.source);const Jm=function(o){return(o=Hc(o))&&xE.test(o)?o.replace(Zm,"\\$&"):o};var Xm=b(8107),EE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(Xm.A,EE),Xm.A.locals;var DE=Object.defineProperty,tf=Object.getOwnPropertySymbols,TE=Object.prototype.hasOwnProperty,IE=Object.prototype.propertyIsEnumerable,ef=(o,t,e)=>t in o?DE(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;class SE extends Ot{constructor(t,e){super(t),this._config=e,this.filteredView=e.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new tn,this.keystrokes=new kn,this.resultsView=new yE(t),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),e.infoView&&e.infoView.instance?this.infoView=e.infoView.instance:(this.infoView=new vE,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new Gn({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:i,totalItemsCount:r})=>{this.resultsCount=i,this.totalItemsCount=r}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",e.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const t=e=>e.stopPropagation();for(const e of this.focusableChildren)this.focusTracker.add(e.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(t){const e=t?new RegExp(Jm(t),"ig"):null,n=this.filteredView.filter(e);this.fire("search",((i,r)=>{for(var s in r||(r={}))TE.call(r,s)&&ef(i,s,r[s]);if(tf)for(var s of tf(r))IE.call(r,s)&&ef(i,s,r[s]);return i})({query:t},n))}_createSearchTextQueryView(){const t=new CE(this.locale,this._config.queryView);return this.listenTo(t.fieldView,"input",()=>{this.search(t.fieldView.element.value)}),t.on("reset",()=>this.reset()),t.bind("isEnabled").to(this),t}_enableDefaultInfoViewBehavior(){const t=this.locale.t,e=this.infoView;function n(i,{query:r,resultsCount:s,totalItemsCount:a}){return typeof i=="function"?i(r,s,a):i}this.on("search",(i,r)=>{if(r.resultsCount)e.set({isVisible:!1});else{const s=this._config.infoView&&this._config.infoView.text;let a,c;r.totalItemsCount?s&&s.notFound?(a=s.notFound.primary,c=s.notFound.secondary):(a=t("No results found"),c=""):s&&s.noSearchableItems?(a=s.noSearchableItems.primary,c=s.noSearchableItems.secondary):(a=t("No searchable items"),c=""),e.set({primaryText:n(a,r),secondaryText:n(c,r),isVisible:!0})}})}}var nf=b(5727),ME={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(nf.A,ME),nf.A.locals;const Pl=class extends SE{constructor(o,t){super(o,t),this._config=t;const e=Ui("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const n=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[n.if("isVisible","ck-hidden",i=>!i),n.to("_position",i=>`ck-search__results_${i}`)],style:{width:n.to("_width",e)}}}),this.focusTracker.on("change:isFocused",(i,r,s)=>{this._updateResultsVisibility(),s?this.resultsView.element.scrollTop=0:t.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(i,r)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,r())}),this.listenTo(Mt.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(i,{value:r})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=r,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new ne(this.queryView.fieldView.element).width;const o=Pl._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:Pl.defaultResultsPositions});this.resultsView._position=o?o.name:"s"}_updateResultsVisibility(){const o=this._config.queryMinChars===void 0?0:this._config.queryMinChars,t=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&t>=o}};let of=Pl;of.defaultResultsPositions=[o=>({top:o.bottom,left:o.left,name:"s"}),(o,t)=>({top:o.top-t.height,left:o.left,name:"n"})],of._getOptimalPosition=Ls;var rf=b(9529),BE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(rf.A,BE),rf.A.locals;var sf=b(109),NE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(sf.A,NE),sf.A.locals;var af=b(2710),PE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(af.A,PE),af.A.locals;var cf=b(3344),OE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(cf.A,OE),cf.A.locals;class LE extends le{constructor(t){super(t);const e=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",n=>String(n)),"data-cke-tooltip-disabled":e.to("isOn")},on:{mouseenter:e.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new So;return t.content=sa,t.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),t}}var lf=b(9481),RE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(lf.A,RE),lf.A.locals;class Ol extends Xi{constructor(t,e){super(t);const n=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:n.to("mouseenter")}}),this.delegate("mouseenter").to(e)}}var jE=Object.defineProperty,df=Object.getOwnPropertySymbols,zE=Object.prototype.hasOwnProperty,FE=Object.prototype.propertyIsEnumerable,uf=(o,t,e)=>t in o?jE(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,hf=(o,t)=>{for(var e in t||(t={}))zE.call(t,e)&&uf(o,e,t[e]);if(df)for(var e of df(t))FE.call(t,e)&&uf(o,e,t[e]);return o};const Zr={toggleMenusAndFocusItemsOnHover(o){o.on("menu:mouseenter",t=>{if(o.isOpen){for(const e of o.menus){const n=t.path[0],i=n instanceof Ol&&n.children.first===e;e.isOpen=(t.path.includes(e)||i)&&e.isEnabled}t.source.focus()}})},focusCycleMenusOnArrows(o){const t=o.locale.uiLanguageDirection==="rtl";function e(n,i){const r=o.children.getIndex(n),s=n.isOpen,a=o.children.length,c=o.children.get((r+a+i)%a);n.isOpen=!1,s&&(c.isOpen=!0),c.buttonView.focus()}o.on("menu:arrowright",n=>{e(n.source,t?-1:1)}),o.on("menu:arrowleft",n=>{e(n.source,t?1:-1)})},closeMenusWhenTheBarCloses(o){o.on("change:isOpen",()=>{o.isOpen||o.menus.forEach(t=>{t.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(o){o.on("menu:change:isOpen",(t,e,n)=>{n&&o.menus.filter(i=>t.source.parentMenuView===i.parentMenuView&&t.source!==i&&i.isOpen).forEach(i=>{i.isOpen=!1})})},closeOnClickOutside(o){_({emitter:o,activator:()=>o.isOpen,callback:()=>o.close(),contextElements:()=>o.children.map(t=>t.element)})}},ki={openAndFocusPanelOnArrowDownKey(o){o.keystrokes.set("arrowdown",(t,e)=>{o.focusTracker.focusedElement===o.buttonView.element&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),e())})},openOnArrowRightKey(o){const t=o.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";o.keystrokes.set(t,(e,n)=>{o.focusTracker.focusedElement===o.buttonView.element&&o.isEnabled&&(o.isOpen||(o.isOpen=!0),o.panelView.focus(),n())})},openOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!0,o.panelView.focus()})},toggleOnButtonClick(o){o.buttonView.on("execute",()=>{o.isOpen=!o.isOpen,o.isOpen&&o.panelView.focus()})},closeOnArrowLeftKey(o){const t=o.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";o.keystrokes.set(t,(e,n)=>{o.isOpen&&(o.isOpen=!1,o.focus(),n())})},closeOnEscKey(o){o.keystrokes.set("esc",(t,e)=>{o.isOpen&&(o.isOpen=!1,o.focus(),e())})},closeOnParentClose(o){o.parentMenuView.on("change:isOpen",(t,e,n)=>{n||t.source!==o.parentMenuView||(o.isOpen=!1)})}},VE={southEast:o=>({top:o.bottom,left:o.left,name:"se"}),southWest:(o,t)=>({top:o.bottom,left:o.left-t.width+o.width,name:"sw"}),northEast:(o,t)=>({top:o.top-t.height,left:o.left,name:"ne"}),northWest:(o,t)=>({top:o.top-t.height,left:o.left-t.width+o.width,name:"nw"}),eastSouth:o=>({top:o.top,left:o.right-5,name:"es"}),eastNorth:(o,t)=>({top:o.top-t.height,left:o.right-5,name:"en"}),westSouth:(o,t)=>({top:o.top,left:o.left-t.width+5,name:"ws"}),westNorth:(o,t)=>({top:o.top-t.height,left:o.left-t.width+5,name:"wn"})},UE=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:uploadImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment"]},{groupId:"insertMinorWidgets",items:["menuBar:insertTemplate","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function HE({normalizedConfig:o,locale:t,componentFactory:e}){const n=ao(o);return function(i,r){const s=r.removeItems,a=[];r.items=r.items.filter(({menuId:c})=>!s.includes(c)||(a.push(c),!1)),er(r.items,c=>{c.groups=c.groups.filter(({groupId:l})=>!s.includes(l)||(a.push(l),!1));for(const l of c.groups)l.items=l.items.filter(d=>{const h=mf(d);return!s.includes(h)||(a.push(h),!1)})});for(const c of s)a.includes(c)||z("menu-bar-item-could-not-be-removed",{menuBarConfig:i,itemName:c})}(o,n),function(i,r){const s=r.addItems,a=[];for(const c of s){const l=GE(c.position),d=qE(c.position);if($E(c))if(d){const h=r.items.findIndex(f=>f.menuId===d);h!=-1?l==="before"?(r.items.splice(h,0,c.menu),a.push(c)):l==="after"&&(r.items.splice(h+1,0,c.menu),a.push(c)):gf(r,c.menu,d,l)&&a.push(c)}else l==="start"?(r.items.unshift(c.menu),a.push(c)):l==="end"&&(r.items.push(c.menu),a.push(c));else WE(c)?er(r.items,h=>{if(h.menuId===d)l==="start"?(h.groups.unshift(c.group),a.push(c)):l==="end"&&(h.groups.push(c.group),a.push(c));else{const f=h.groups.findIndex(A=>A.groupId===d);f!==-1&&(l==="before"?(h.groups.splice(f,0,c.group),a.push(c)):l==="after"&&(h.groups.splice(f+1,0,c.group),a.push(c)))}}):gf(r,c.item,d,l)&&a.push(c)}for(const c of s)a.includes(c)||z("menu-bar-item-could-not-be-added",{menuBarConfig:i,addedItemConfig:c})}(o,n),function(i,r,s){er(r.items,a=>{for(const c of a.groups)c.items=c.items.filter(l=>{const d=typeof l=="string"&&!s.has(l);return d&&!r.isUsingDefaultConfig&&z("menu-bar-item-unavailable",{menuBarConfig:i,parentMenuConfig:ao(a),componentName:l}),!d})})}(o,n,e),pf(o,n),function(i,r){const s=r.t,a={File:s({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:s({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:s({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:s({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:s({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:s({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:s({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:s({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:s({string:"Font",id:"MENU_BAR_MENU_FONT"})};er(i.items,c=>{c.label in a&&(c.label=a[c.label])})}(n,t),n}function gf(o,t,e,n){let i=!1;return er(o.items,r=>{for(const{groupId:s,items:a}of r.groups){if(i)return;if(s===e)n==="start"?(a.unshift(t),i=!0):n==="end"&&(a.push(t),i=!0);else{const c=a.findIndex(l=>mf(l)===e);c!==-1&&(n==="before"?(a.splice(c,0,t),i=!0):n==="after"&&(a.splice(c+1,0,t),i=!0))}}}),i}function pf(o,t){const e=t.isUsingDefaultConfig;let n=!1;t.items=t.items.filter(i=>!!i.groups.length||(Ll(o,i,e),!1)),t.items.length?(er(t.items,i=>{i.groups=i.groups.filter(r=>!!r.items.length||(n=!0,!1));for(const r of i.groups)r.items=r.items.filter(s=>!(ff(s)&&!s.groups.length)||(Ll(o,s,e),n=!0,!1))}),n&&pf(o,t)):Ll(o,o,e)}function Ll(o,t,e){e||z("menu-bar-menu-empty",{menuBarConfig:o,emptyMenuConfig:t})}function er(o,t){if(Array.isArray(o))for(const n of o)e(n);function e(n){t(n);for(const i of n.groups)for(const r of i.items)ff(r)&&e(r)}}function $E(o){return typeof o=="object"&&"menu"in o}function WE(o){return typeof o=="object"&&"group"in o}function GE(o){return o.startsWith("start")?"start":o.startsWith("end")?"end":o.startsWith("after")?"after":"before"}function qE(o){const t=o.match(/^[^:]+:(.+)/);return t?t[1]:null}function mf(o){return typeof o=="string"?o:o.menuId}function ff(o){return typeof o=="object"&&"menuId"in o}var kf=b(9108),KE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(kf.A,KE),kf.A.locals;class YE extends Ot{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",e.to("position",n=>`ck-menu-bar__menu__panel_position_${n}`),e.if("isVisible","ck-hidden",n=>!n)],tabindex:"-1"},children:this.children,on:{selectstart:e.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(t=1){this.children.length&&(t===1?this.children.first.focus():this.children.last.focus())}}var bf=b(4),QE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(bf.A,QE),bf.A.locals;const wf=class extends Ot{constructor(o){super(o);const t=this.bindTemplate;this.buttonView=new LE(o),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new YE(o),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new kn,this.focusTracker=new tn,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",t.to("class"),t.if("isEnabled","ck-disabled",e=>!e),t.if("parentMenuView","ck-menu-bar__menu_top-level",e=>!e)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),ki.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(ki.openOnButtonClick(this),ki.openOnArrowRightKey(this),ki.closeOnArrowLeftKey(this),ki.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),ki.openAndFocusPanelOnArrowDownKey(this),ki.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(o,t)=>{this.fire("arrowright"),t()}),this.keystrokes.set("arrowleft",(o,t)=>{this.fire("arrowleft"),t()})}_repositionPanelOnOpen(){this.on("change:isOpen",(o,t,e)=>{if(!e)return;const n=wf._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=n?n.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:o,southWest:t,northEast:e,northWest:n,westSouth:i,eastSouth:r,westNorth:s,eastNorth:a}=VE;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[r,a,i,s]:[o,t,e,n]:this.parentMenuView?[i,s,r,a]:[t,o,n,e]}};let nr=wf;nr._getOptimalPosition=Ls;class Rl extends Dl{constructor(t){super(t),this.role="menu"}}var Af=b(977),ZE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(Af.A,ZE),Af.A.locals;class Ln extends le{constructor(t){super(t),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}class _f extends Zp{constructor(t){super(t),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var Cf=b(497),JE={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(Cf.A,JE),Cf.A.locals;const vf=["mouseenter","arrowleft","arrowright","change:isOpen"];class XE extends Ot{constructor(t){super(t),this.menus=[];const e=t.t;this.set("isOpen",!1),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar"],"aria-label":e("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(t,e){const n=HE({normalizedConfig:t,locale:this.locale,componentFactory:e}).items.map(i=>this._createMenu({componentFactory:e,menuDefinition:i}));this.children.addMany(n)}render(){super.render(),Zr.toggleMenusAndFocusItemsOnHover(this),Zr.closeMenusWhenTheBarCloses(this),Zr.closeMenuWhenAnotherOnTheSameLevelOpens(this),Zr.focusCycleMenusOnArrows(this),Zr.closeOnClickOutside(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const t of this.children)t.isOpen=!1}registerMenu(t,e=null){e?(t.delegate(...vf).to(e),t.parentMenuView=e):t.delegate(...vf).to(this,n=>"menu:"+n),t._attachBehaviors(),this.menus.push(t)}_createMenu({componentFactory:t,menuDefinition:e,parentMenuView:n}){const i=this.locale,r=new nr(i);return this.registerMenu(r,n),r.buttonView.set({label:e.label}),r.once("change:isOpen",()=>{const s=new Rl(i);s.ariaLabel=e.label,r.panelView.children.add(s),s.items.addMany(this._createMenuItems({menuDefinition:e,parentMenuView:r,componentFactory:t}))}),r}_createMenuItems({menuDefinition:t,parentMenuView:e,componentFactory:n}){const i=this.locale,r=[];for(const s of t.groups){for(const a of s.items){const c=new Ol(i,e);if(It(a))c.children.add(this._createMenu({componentFactory:n,menuDefinition:a,parentMenuView:e}));else{const l=this._createMenuItemContentFromFactory({componentName:a,componentFactory:n,parentMenuView:e});if(!l)continue;c.children.add(l)}r.push(c)}s!==t.groups[t.groups.length-1]&&r.push(new El(i))}return r}_createMenuItemContentFromFactory({componentName:t,parentMenuView:e,componentFactory:n}){const i=n.create(t);return i instanceof nr||i instanceof Ln||i instanceof _f?(this._registerMenuTree(i,e),i.on("execute",()=>{this.close()}),i):(z("menu-bar-component-unsupported",{componentName:t,componentView:i}),null)}_registerMenuTree(t,e){if(!(t instanceof nr))return void t.delegate("mouseenter").to(e);this.registerMenu(t,e);const n=t.panelView.children.filter(r=>r instanceof Rl)[0];if(!n)return void t.delegate("mouseenter").to(e);const i=n.items.filter(r=>r instanceof Xi);for(const r of i)this._registerMenuTree(r.children.get(0),t)}_setupIsOpenUpdater(){let t;this.on("menu:change:isOpen",(e,n,i)=>{clearTimeout(t),i?this.isOpen=!0:t=setTimeout(()=>{this.isOpen=Array.from(this.children).some(r=>r.isOpen)},0)})}}class t5 extends dE{constructor(t,e){super(t),this.view=e,this._toolbarConfig=cm(t.config.get("toolbar")),this._menuBarConfig=function(n){let i;return i="items"in n&&n.items?hf({items:n.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1},n):hf({items:ao(UE),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0},n),i}(t.config.get("menuBar")||{}),this._elementReplacer=new $t,this.listenTo(t.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,i=e.editing.view,r=n.editable,s=i.document.getRoot();r.name=s.rootName,n.render();const a=r.element;this.setEditableElement(r.name,a),n.editable.bind("isFocused").to(this.focusTracker),i.attachDomRoot(a),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),this._initMenuBar(),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy()}_initToolbar(){const t=this.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,t.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:e})=>e||0),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(t.toolbar)}_initMenuBar(){const t=this.view;t.menuBarView&&(this._setupMenuBarBehaviors(t.menuBarView.element),t.menuBarView.fillFromConfig(this._menuBarConfig,this.componentFactory))}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),i=t.sourceElement;let r;const s=t.config.get("placeholder");s&&(r=typeof s=="string"?s:s[this.view.editable.name]),!r&&i&&i.tagName.toLowerCase()==="textarea"&&(r=i.getAttribute("placeholder")),r&&(n.placeholder=r),Ph({view:e,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(t,e,n){const i=this.view.stickyPanel;if(i.isSticky){const r=new ne(i.element).height;e.viewportOffset.top+=r}else{const r=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(i,"change:isSticky",r),setTimeout(()=>{this.stopListening(i,"change:isSticky",r)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const t=this.view.stickyPanel,e=this.editor.plugins.get("Dialog");e.on("show",()=>{const n=e.view;n.on("moveTo",(i,r)=>{if(!t.isSticky||n.wasMoved)return;const s=new ne(t.contentPanelElement);r[1]<s.bottom+ha.defaultOffset&&(r[1]=s.bottom+ha.defaultOffset)},{priority:"high"})},{priority:"low"})}_setupMenuBarBehaviors(t){const e=this.editor;this.focusTracker.add(t),e.keystrokes.listenTo(t),e.keystrokes.set("Esc",(n,i)=>{t.contains(this.focusTracker.focusedElement)&&(e.editing.view.focus(),i())}),e.keystrokes.set("Alt+F9",(n,i)=>{t.contains(this.focusTracker.focusedElement)||(this.view.menuBarView.focus(),i())})}}var yf=b(7388),e5={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};kt()(yf.A,e5),yf.A.locals;class n5 extends gE{constructor(t,e,n={}){super(t),this.stickyPanel=new _E(t),this.toolbar=new xl(t,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),n.useMenuBar&&(this.menuBarView=new XE(t)),this.editable=new mE(t,e)}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class xf{constructor(t){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof t.crashNumberLimit=="number"?t.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof t.minimumNonErrorTimePeriod=="number"?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=e=>{const n="error"in e?e.error:e.reason;n instanceof Error&&this._handleError(n,e)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter(n=>n!==e)}_fire(t,...e){const n=this._listeners[t]||[];for(const i of n)i.apply(this,[null,...e])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e instanceof ErrorEvent?e.filename:void 0,lineno:e instanceof ErrorEvent?e.lineno:void 0,colno:e instanceof ErrorEvent?e.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&t.context!==void 0&&t.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(t)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function jl(o,t=new Set){const e=[o],n=new Set;let i=0;for(;e.length>i;){const r=e[i++];if(!n.has(r)&&o5(r)&&!t.has(r))if(n.add(r),Symbol.iterator in r)try{for(const s of r)e.push(s)}catch{}else for(const s in r)s!=="defaultValue"&&e.push(r[s])}return n}function o5(o){const t=Object.prototype.toString.call(o),e=typeof o;return!(e==="number"||e==="boolean"||e==="string"||e==="symbol"||e==="function"||t==="[object Date]"||t==="[object RegExp]"||t==="[object Module]"||o==null||o._watchdogExcluded||o instanceof EventTarget||o instanceof Event)}function Ef(o,t,e=new Set){if(o===t&&typeof(n=o)=="object"&&n!==null)return!0;var n;const i=jl(o,e),r=jl(t,e);for(const s of i)if(r.has(s))return!0;return!1}var i5=Object.defineProperty,r5=Object.defineProperties,s5=Object.getOwnPropertyDescriptors,ka=Object.getOwnPropertySymbols,Df=Object.prototype.hasOwnProperty,Tf=Object.prototype.propertyIsEnumerable,If=(o,t,e)=>t in o?i5(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e,zl=(o,t)=>{for(var e in t||(t={}))Df.call(t,e)&&If(o,e,t[e]);if(ka)for(var e of ka(t))Tf.call(t,e)&&If(o,e,t[e]);return o};class Sf extends xf{constructor(t,e={}){super(e),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=pa(this._save.bind(this),typeof e.saveInterval=="number"?e.saveInterval:5e3),t&&(this._creator=(n,i)=>t.create(n,i)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(t=>{console.error("An error happened during the editor destroying.",t)}).then(()=>{const t={},e=[],n=this._config.rootsAttributes||{},i={};for(const[c,l]of Object.entries(this._data.roots))l.isLoaded?(t[c]="",i[c]=n[c]||{}):e.push(c);const r=(s=zl({},this._config),a={extraPlugins:this._config.extraPlugins||[],lazyRoots:e,rootsAttributes:i,_watchdogInitialData:this._data},r5(s,s5(a)));var s,a;return delete r.initialData,r.extraPlugins.push(a5),this._initUsingData?this.create(t,r,r.context):si(this._elementOrData)?this.create(this._elementOrData,r,r.context):this.create(this._editables,r,r.context)}).then(()=>{this._fire("restart")})}create(t=this._elementOrData,e=this._config,n){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=t,this._initUsingData=typeof t=="string"||Object.keys(t).length>0&&typeof Object.values(t)[0]=="string",this._config=this._cloneEditorConfiguration(e)||{},this._config.context=n,this._creator(t,this._config))).then(i=>{this._editor=i,i.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=i.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const t=this._editor;return this._editor=null,t.model.document.off("change:data",this._throttledSave),this._destructor(t)})}_save(){const t=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=t}catch(e){console.error(e,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t=this._editor,e=t.model.document.roots.filter(a=>a.isAttached()&&a.rootName!="$graveyard"),{plugins:n}=t,i=n.has("CommentsRepository")&&n.get("CommentsRepository"),r=n.has("TrackChanges")&&n.get("TrackChanges"),s={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};e.forEach(a=>{s.roots[a.rootName]={content:JSON.stringify(Array.from(a.getChildren())),attributes:JSON.stringify(Array.from(a.getAttributes())),isLoaded:a._isLoaded}});for(const a of t.model.markers)a._affectsData&&(s.markers[a.name]={rangeJSON:a.getRange().toJSON(),usingOperation:a._managedUsingOperations,affectsData:a._affectsData});return i&&(s.commentThreads=JSON.stringify(i.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),r&&(s.suggestions=JSON.stringify(r.getSuggestions({toJSON:!0,skipNotAttached:!0}))),s}_getEditables(){const t={};for(const e of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(e);n&&(t[e]=n)}return t}_isErrorComingFromThisItem(t){return Ef(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return Ic(t,(e,n)=>si(e)||n==="context"?e:void 0)}}class a5{constructor(t){this.editor=t,this._data=t.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",t=>{t.stop(),this.editor.model.enqueueChange({isUndoable:!1},e=>{this._restoreCollaborationData(),this._restoreEditorData(e)}),this.editor.data.fire("ready")},{priority:999})}_createNode(t,e){if("name"in e){const n=t.createElement(e.name,e.attributes);if(e.children)for(const i of e.children)n._appendChild(this._createNode(t,i));return n}return t.createText(e.data,e.attributes)}_restoreEditorData(t){const e=this.editor;Object.entries(this._data.roots).forEach(([n,{content:i,attributes:r}])=>{const s=JSON.parse(i),a=JSON.parse(r),c=e.model.document.getRoot(n);for(const[l,d]of a)t.setAttribute(l,d,c);for(const l of s){const d=this._createNode(t,l);t.insert(d,c,"end")}}),Object.entries(this._data.markers).forEach(([n,i])=>{const{document:r}=e.model,s=i,{rangeJSON:{start:a,end:c}}=s,l=((E,M)=>{var L={};for(var V in E)Df.call(E,V)&&M.indexOf(V)<0&&(L[V]=E[V]);if(E!=null&&ka)for(var V of ka(E))M.indexOf(V)<0&&Tf.call(E,V)&&(L[V]=E[V]);return L})(s,["rangeJSON"]),d=r.getRoot(a.root),h=t.createPositionFromPath(d,a.path,a.stickiness),f=t.createPositionFromPath(d,c.path,c.stickiness),A=t.createRange(h,f);t.addMarker(n,zl({range:A},l))})}_restoreCollaborationData(){const t=JSON.parse(this._data.commentThreads),e=JSON.parse(this._data.suggestions);t.forEach(n=>{const i=this.editor.config.get("collaboration.channelId"),r=this.editor.plugins.get("CommentsRepository");r.hasCommentThread(n.threadId)&&r.getCommentThread(n.threadId).remove(),r.addCommentThread(zl({channelId:i},n))}),e.forEach(n=>{const i=this.editor.plugins.get("TrackChangesEditing");i.hasSuggestion(n.id)?i.getSuggestion(n.id).attributes=n.attributes:i.addSuggestionData(n)})}}const Jr=Symbol("MainQueueId");class c5{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(t){this._onEmptyCallbacks.push(t)}enqueue(t,e){const n=t===Jr;this._activeActions++,this._queues.get(t)||this._queues.set(t,Promise.resolve());const i=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(Jr),this._queues.get(t)])).then(e),r=i.catch(()=>{});return this._queues.set(t,r),i.finally(()=>{this._activeActions--,this._queues.get(t)===r&&this._activeActions===0&&this._onEmptyCallbacks.forEach(s=>s())})}}function Mf(o){return Array.isArray(o)?o:[o]}class ba extends wl(Fx){constructor(t,e={}){if(!wa(t)&&e.initialData!==void 0)throw new y("editor-create-initial-data",null);super(e),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(s){return wa(s)?(a=s,a instanceof HTMLTextAreaElement?a.value:a.innerHTML):s;var a}(t)),wa(t)&&(this.sourceElement=t),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),i=this.config.get("menuBar"),r=new n5(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n,useMenuBar:i.isVisible});this.ui=new t5(this,r),function(s){if(!jt(s.updateSourceElement))throw new y("attachtoform-missing-elementapi-interface",s);const a=s.sourceElement;if(function(c){return!!c&&c.tagName.toLowerCase()==="textarea"}(a)&&a.form){let c;const l=a.form,d=()=>s.updateSourceElement();jt(l.submit)&&(c=l.submit,l.submit=()=>{d(),c.apply(l)}),l.addEventListener("submit",d),s.on("destroy",()=>{l.removeEventListener("submit",d),c&&(l.submit=c)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const i=new this(t,e);n(i.initPlugins().then(()=>i.ui.init(wa(t)?t:null)).then(()=>i.data.init(i.config.get("initialData"))).then(()=>i.fire("ready")).then(()=>i))})}}function wa(o){return si(o)}ba.Context=Mh,ba.EditorWatchdog=Sf,ba.ContextWatchdog=class extends xf{constructor(o,t={}){super(t),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new c5,this._watchdogConfig=t,this._creator=e=>o.create(e),this._destructor=e=>e.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(o){this._creator=o}setDestructor(o){this._destructor=o}get context(){return this._context}create(o={}){return this._actionQueues.enqueue(Jr,()=>(this._contextConfig=o,this._create()))}getItem(o){return this._getWatchdog(o)._item}getItemState(o){return this._getWatchdog(o).state}add(o){const t=Mf(o);return Promise.all(t.map(e=>this._actionQueues.enqueue(e.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(e.id))throw new Error(`Item with the given id is already added: '${e.id}'.`);if(e.type==="editor")return n=new Sf(null,this._watchdogConfig),n.setCreator(e.creator),n._setExcludedProperties(this._contextProps),e.destructor&&n.setDestructor(e.destructor),this._watchdogs.set(e.id,n),n.on("error",(i,{error:r,causesRestart:s})=>{this._fire("itemError",{itemId:e.id,error:r}),s&&this._actionQueues.enqueue(e.id,()=>new Promise(a=>{const c=()=>{n.off("restart",c),this._fire("itemRestart",{itemId:e.id}),a()};n.on("restart",c)}))}),n.create(e.sourceElementOrData,e.config,this._context);throw new Error(`Not supported item type: '${e.type}'.`)})))}remove(o){const t=Mf(o);return Promise.all(t.map(e=>this._actionQueues.enqueue(e,()=>{const n=this._getWatchdog(e);return this._watchdogs.delete(e),n.destroy()})))}destroy(){return this._actionQueues.enqueue(Jr,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Jr,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(o=>{console.error("An error happened during destroying the context or items.",o)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(o=>(this._context=o,this._contextProps=jl(this._context),Promise.all(Array.from(this._watchdogs.values()).map(t=>(t._setExcludedProperties(this._contextProps),t.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const o=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(t=>t.destroy())).then(()=>this._destructor(o))})}_getWatchdog(o){const t=this._watchdogs.get(o);if(!t)throw new Error(`Item with the given id was not registered: ${o}.`);return t}_isErrorComingFromThisItem(o){for(const t of this._watchdogs.values())if(t._isErrorComingFromThisItem(o))return!1;return Ef(this._context,o.context)}};class Xr extends $o{constructor(t){super(t),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const e=this.document;function n(i){return(r,s)=>{s.preventDefault();const a=s.dropRange?[s.dropRange]:null,c=new Y(e,i);e.fire(c,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:a,target:s.target,domEvent:s.domEvent}),c.stop.called&&s.stopPropagation()}}this.listenTo(e,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"dragover",n("dragging"),{priority:"low"})}onDomEvent(t){const e="clipboardData"in t?t.clipboardData:t.dataTransfer,n=t.type=="drop"||t.type=="paste",i={dataTransfer:new mg(e,{cacheFiles:n})};t.type!="drop"&&t.type!="dragover"||(i.dropRange=function(r,s){const a=s.target.ownerDocument,c=s.clientX,l=s.clientY;let d;return a.caretRangeFromPoint&&a.caretRangeFromPoint(c,l)?d=a.caretRangeFromPoint(c,l):s.rangeParent&&(d=a.createRange(),d.setStart(s.rangeParent,s.rangeOffset),d.collapse(!0)),d?r.domConverter.domRangeToView(d):null}(this.view,t)),this.fire(t.type,t,i)}}const Bf=["figcaption","li"],Nf=["ol","ul"];function Pf(o){if(o.is("$text")||o.is("$textProxy"))return o.data;if(o.is("element","img")&&o.hasAttribute("alt"))return o.getAttribute("alt");if(o.is("element","br"))return`
`;let t="",e=null;for(const n of o.getChildren())t+=l5(n,e)+Pf(n),e=n;return t}function l5(o,t){return t?o.is("element","li")&&!o.isEmpty&&o.getChild(0).is("containerElement")||Nf.includes(o.name)&&Nf.includes(t.name)?`

`:o.is("containerElement")||t.is("containerElement")?Bf.includes(o.name)||Bf.includes(t.name)?`
`:`

`+Ge),Yt&&$a([U,G,$],Ee=>{Ge=ms(Ge,Ee," ")}),Y&&Gt?Y.createHTML(Ge):Ge},m.setConfig=function(){let At=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};eo(At),Rt=!0},m.clearConfig=function(){Be=null,Rt=!1},m.isValidAttribute=function(At,tt,mt){Be||eo({});const St=ie(At),Ft=ie(tt);return ut(St,Ft,mt)},m.addHook=function(At,tt){typeof tt=="function"&&(z[At]=z[At]||[],ps(z[At],tt))},m.removeHook=function(At){if(z[At])return KA(z[At])},m.removeHooks=function(At){z[At]&&(z[At]=[])},m.removeAllHooks=function(){z={}},m}var Ld=sC();function yo({onChange:u,initialValue:m}){const[T,x]=rt.useState(Ld.sanitize(m||"")),b=rt.useRef(!1),D=rt.useRef(null),[_,v]=rt.useState("");rt.useEffect(()=>{b.current?x(Ld.sanitize(m||"")):b.current=!0},[m]);const p=(k,S)=>{const N=S.getData(),O=Ld.sanitize(N);x(O),u(O)},I=k=>{if(!D.current){console.warn("Editor not initialized");return}const S=D.current;S.model.change(N=>{const O=S.model.document.selection.getFirstPosition();N.insertText(k,O)}),v("")},C=k=>{I(k.target.value)},w=["α","β","γ","δ","ε","ζ","η","θ","ι","κ","λ","μ","ν","ξ","ο","π","ρ","σ","τ","υ","φ","χ","ψ","ω"],g=["°","+","-","=","~","≥","≤","≠",">","<","*","/","%"];return P.jsxs("div",{children:[P.jsxs(qa,{sx:{display:"flex",justifyContent:"flex-end",alignItems:"center",width:"100%"},children:[P.jsx(l4,{id:"insert-symbols-label",sx:{fontSize:"0.8rem"},children:"Insert Symbols: "}),P.jsx(cA,{variant:"standard",sx:{m:1,minWidth:40},children:P.jsxs(lA,{labelId:"math-operators-label",id:"math-operators",value:_,onChange:C,displayEmpty:!0,children:[P.jsx(Ha,{value:"",disabled:!0,children:"Math"}),g.map(k=>P.jsx(Ha,{value:k,children:k},k))]})}),P.jsx(cA,{variant:"standard",sx:{m:1,minWidth:40},children:P.jsxs(lA,{labelId:"greek-letters-label",id:"greek-letters",value:_,onChange:C,displayEmpty:!0,children:[P.jsx(Ha,{value:"",disabled:!0,children:"Greek"}),w.map(k=>P.jsx(Ha,{value:k,children:k},k))]})})]}),P.jsx(NL.CKEditor,{editor:OL,data:T,onReady:k=>{D.current=k},config:{toolbar:["undo","redo","|","heading","bold","italic","|","bulletedList","numberedList","blockQuote","indent","outdent","|","link","insertTable","|"],table:{contentToolbar:["tableColumn","tableRow","mergeTableCells"]}},onChange:p})]})}var gu={},e7=Xn;Object.defineProperty(gu,"__esModule",{value:!0});var lc=gu.default=void 0,n7=e7(to()),o7=P;lc=gu.default=(0,n7.default)((0,o7.jsx)("path",{d:"M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m3-10H5V5h10z"}),"Save");var pu={},i7=Xn;Object.defineProperty(pu,"__esModule",{value:!0});var aC=pu.default=void 0,r7=i7(to()),s7=P;aC=pu.default=(0,r7.default)((0,s7.jsx)("path",{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm7 7V3.5L18.5 9z"}),"InsertDriveFile");var mu={},a7=Xn;Object.defineProperty(mu,"__esModule",{value:!0});var cC=mu.default=void 0,c7=a7(to()),l7=P;cC=mu.default=(0,c7.default)((0,l7.jsx)("path",{d:"M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96M14 13v4h-4v-4H7l5-5 5 5z"}),"CloudUpload");const fr=({path:u,initialFiles:m=[],onFilesChange:T})=>{const[x,b]=rt.useState(m),[D,_]=rt.useState(!1),[v,p]=rt.useState(0),[I,C]=rt.useState({}),[w,g]=rt.useState(!1),[k,S]=rt.useState(""),[N,O]=rt.useState("info"),R=rt.useRef(null);rt.useEffect(()=>{console.log("Initial files received:",m),b(m)},[m]),rt.useEffect(()=>()=>{C({})},[]);const Q=y=>{console.log("Updating files with",y),T(y),b(y)},Y=async y=>{const U=Array.from(y.target.files).filter($=>$.size>5242880?(S("File size should not exceed 5 MB"),O("error"),g(!0),!1):!0);_(!0);const G=U.map($=>{const q=new Date().getTime(),Z=`${q}-${$.name}`,F=Xa(),j=tc(F,`${u}/${Z}`),st=o_(j,$);return new Promise((X,nt)=>{st.on("state_changed",ft=>{const ht=ft.bytesTransferred/ft.totalBytes*100;p(ht)},ft=>{console.error("Upload failed:",ft),nt(ft)},()=>{i_(st.snapshot.ref).then(ft=>{X({id:q,url:ft,name:$.name,path:j.fullPath})})})})});Promise.all(G).then($=>{Q(q=>[...q,...$]),S("Files uploaded successfully."),O("success"),g(!0),_(!1),p(0),R.current.value=""}).catch($=>{console.error("Error uploading files: ",$),S("Failed to upload files."),O("error"),g(!0),_(!1),p(0)})},K=async y=>{const z=x.find($=>$.id===y);if(!z)return;const U=Xa(),G=tc(U,z.path);try{await r_(G),Q($=>$.filter(q=>q.id!==y)),S("File deleted successfully."),O("success"),g(!0)}catch($){console.error("Error removing file:",$),S("Failed to delete file."),O("error"),g(!0)}},et=y=>{C(z=>{var U;return{...z,[y]:((U=x.find(G=>G.id===y))==null?void 0:U.name)||""}}),console.log("editStates after handleEditClick:",I)},H=y=>{const z=x.map(U=>U.id===y&&I[y]!==void 0?{...U,name:I[y]}:U);b(z),T(z),C(U=>{const G={...U};return delete G[y],G}),S("File name updated successfully."),O("info"),g(!0)},W=(y,z)=>{C(U=>({...U,[y]:z}))},B=(y,z)=>{z!=="clickaway"&&g(!1)};return P.jsxs("div",{children:[P.jsx(ws,{title:"Upload Files",children:P.jsxs(dn,{variant:"outlined",component:"label",startIcon:P.jsx(cC,{}),sx:{m:1,pl:2,pr:2},children:["Upload File(s)",P.jsx("input",{type:"file",hidden:!0,multiple:!0,accept:".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx",onChange:Y,disabled:D,ref:R})]})}),D&&P.jsx("div",{children:P.jsxs("p",{children:["Uploading... ",Math.round(v),"%"]})}),P.jsx(d4,{children:x.map(y=>P.jsxs(i3,{component:"div",children:[P.jsx(l3,{children:P.jsx(aC,{})}),typeof I[y.id]=="string"?P.jsx(nc,{variant:"outlined",size:"small",value:I[y.id],onChange:z=>W(y.id,z.target.value),onKeyPress:z=>z.key==="Enter"&&H(y.id),fullWidth:!0}):P.jsx(p3,{primary:y.name,secondary:P.jsx("a",{href:y.url,target:"_blank",rel:"noopener noreferrer",children:"Download"})}),typeof I[y.id]=="string"?P.jsx(Zn,{onClick:()=>H(y.id),edge:"end","aria-label":"save",children:P.jsx(lc,{})}):P.jsxs(P.Fragment,{children:[P.jsx(Zn,{onClick:()=>et(y.id),edge:"end","aria-label":"edit",children:P.jsx(Yd,{})}),P.jsx(Zn,{onClick:()=>K(y.id),edge:"end","aria-label":"delete",children:P.jsx(kr,{})})]})]},y.id))}),P.jsx(Fo,{open:w,autoHideDuration:6e3,onClose:B,children:P.jsx(zo,{onClose:B,severity:N,sx:{width:"100%"},children:k})})]})},d7=({designs:u,setDesigns:m,setIsAdding:T,getDesigns:x,onReturnToDashboard:b})=>{const{userDetails:D}=Ar();console.log("Add Design loaded");const[_,v]=rt.useState(""),[p,I]=rt.useState(""),[C,w]=rt.useState(""),[g,k]=rt.useState([]),[S,N]=rt.useState([]),O=rt.useMemo(()=>g,[g]),[R,Q]=rt.useState(!1),[Y,K]=rt.useState(""),[et,H]=rt.useState("info"),[W,B]=rt.useState(!1),[y,z]=rt.useState("");console.log("Adding New Design from user:",D);const U=()=>{B(!1)},G=(q,Z)=>{Z!=="clickaway"&&Q(!1)},$=async q=>{if(q.preventDefault(),console.log("Files to be saved:",S),!D||!D.uid){console.error("User object is undefined or missing UID."),z("You must be signed in to add a design."),B(!0);return}if(!_||!p){z("All fields are required."),B(!0);return}const Z=g.filter(j=>!j.deleted),F={title:C,description:_,dateDue:s_.fromDate(new Date(p)),dateCreated:$d(),images:Z,files:S.map(j=>({id:j.id,url:j.url,name:j.name,path:j.path})),userId:D.uid};try{await Wd(Qn(Ae,"designs"),F),m([...u,F]),setTimeout(()=>{T(!1),x()},1e3),K(`${C} has been Added.`),H("success"),Q(!0),w(""),v(""),I(""),k([]),N([])}catch(j){console.log(j),z("There was an issue adding your design."),B(!0)}};return P.jsxs("div",{className:"small-container",children:[P.jsx("button",{onClick:b,className:"muted-button margin-top-20",children:"← All Designs"}),P.jsx("div",{className:"design-record",children:P.jsxs("form",{onSubmit:$,children:[P.jsx("h1",{className:"designHeader",children:"New Design"}),P.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[P.jsxs("div",{style:{flexGrow:8,marginRight:"12px"},children:[P.jsx("label",{className:"designTitles",htmlFor:"title",children:"Title"}),P.jsx("input",{id:"title",type:"text",name:"title",value:C,onChange:q=>w(q.target.value),style:{width:"100%"}})]}),P.jsxs("div",{style:{flexGrow:2},children:[P.jsx("label",{className:"designTitles",htmlFor:"dateDue",children:"Date"}),P.jsx("input",{id:"date",type:"date",name:"date",value:p,onChange:q=>I(q.target.value),style:{width:"100%"}})]})]}),P.jsx("label",{className:"designTitles",htmlFor:"description",children:"Description"}),P.jsxs("ul",{children:[P.jsx("li",{children:"Objective: What is the goal for this design?"}),P.jsx("li",{children:"Rationale: Why is this new design being done?"}),P.jsx("li",{children:"Selected Target Identified: What is the target for the design being made?"}),P.jsx("li",{children:"Functional Modification: What is being done to this target?"}),P.jsx("li",{children:"Overview/Plan for making the modification: What are the steps to be carried out to meet the objective?"})]}),P.jsx(yo,{onChange:v})," ",P.jsx(mr,{path:"designs/images",initialImages:O,onImagesUpdated:k}),P.jsx(fr,{path:"designs/files",initialFiles:S,onFilesChange:N}),P.jsxs("div",{style:{marginTop:"30px",display:"flex",justifyContent:"flex-end"},children:[P.jsx(dn,{type:"submit",variant:"contained",children:"Add"}),P.jsx(dn,{onClick:()=>T(!1),style:{marginLeft:"12px"},variant:"outlined",children:"Cancel"})]})]})}),P.jsxs(Xo,{open:W,onClose:U,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[P.jsx(Ti,{id:"alert-dialog-title",children:"Notification"}),P.jsx(ti,{children:P.jsx(_r,{id:"alert-dialog-description",children:y})}),P.jsx(Di,{children:P.jsx(dn,{onClick:U,autoFocus:!0,children:"Ok"})})]}),P.jsx(Fo,{open:R,autoHideDuration:1e3,onClose:G,children:P.jsx(zo,{onClose:G,severity:et,sx:{width:"100%"},children:Y})})]})},u7=({designId:u,setIsAddingBuild:m,refreshBuilds:T})=>{const[x,b]=rt.useState(""),[D,_]=rt.useState(""),[v,p]=rt.useState([]),[I,C]=rt.useState([]),{userDetails:w}=Ar(),g=U=>{C(U)},k=U=>{p(U)};console.log("AddBuild loaded");const[S,N]=rt.useState(!1),[O,R]=rt.useState(""),[Q,Y]=rt.useState(!1),[K,et]=rt.useState(""),[H,W]=rt.useState("info");console.log("Adding New Build by user:",w);const B=()=>{N(!1)},y=(U,G)=>{G!=="clickaway"&&Y(!1)},z=async U=>{if(U.preventDefault(),!w||!w.uid){console.error("UserDetails object is undefined or missing UID."),R("You must be signed in to add a build."),N(!0);return}if(!D){R("Build description is required."),N(!0);return}const G=v.filter($=>!$.deleted);try{const $=await Wd(Qn(Ae,"builds"),{title:x,description:D,design_ID:u,dateCreated:$d(),userId:w.uid,images:G,files:I});console.log("Build added with ID: ",$.id),console.log("Added New Build by user:",w),et("Your build has been successfully added."),W("success"),Y(!0),setTimeout(()=>{b(""),_(""),p([]),C([]),m(!1),T()},1e3)}catch($){console.error("Error adding build: ",$);let q=`Failed to add the build. ${$.message||"Please try again later."}`;$.code==="permission-denied"&&(q="You do not have permission to perform this operation."),et(q),W("error"),Y(!0)}};return P.jsxs("div",{className:"small-container",children:[P.jsxs("form",{onSubmit:z,children:[P.jsx("label",{className:"buildTitles",htmlFor:"buildTitle",children:"Title"}),P.jsx("input",{id:"buildTitle",type:"text",value:x,onChange:U=>b(U.target.value),style:{width:"100%",marginBottom:"20px"}}),P.jsx("label",{className:"buildTitles",htmlFor:"buildDescription",children:"Description"}),P.jsx(yo,{onChange:_})," ",P.jsx(mr,{path:`builds/${u}/images`,initialImages:v,onImagesUpdated:k}),P.jsx(fr,{path:`builds/${u}/files`,initialFiles:I,onFilesChange:g}),P.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[P.jsx("input",{type:"submit",value:"Save"}),P.jsx("button",{style:{marginLeft:"12px"},onClick:()=>m(!1),className:"button muted-button",children:"Cancel"})]})]}),P.jsxs(Xo,{open:S,onClose:B,children:[P.jsx(Ti,{children:"Notification"}),P.jsx(ti,{children:P.jsx(_r,{children:O})}),P.jsx(Di,{children:P.jsx(dn,{onClick:B,children:"OK"})})]}),P.jsx(Fo,{open:Q,autoHideDuration:6e3,onClose:y,children:P.jsx(zo,{onClose:y,severity:H,sx:{width:"100%"},children:K})})]})},h7=({designId:u,buildId:m,refreshTests:T,setAddingTestIdForBuild:x,onImagesUpdated:b,onFilesUpdated:D})=>{const[_,v]=rt.useState(""),[p,I]=rt.useState(""),[C,w]=rt.useState(""),[g,k]=rt.useState(""),[S,N]=rt.useState([]),[O,R]=rt.useState([]),{userDetails:Q}=Ar();console.log("AddTest loaded");const[Y,K]=rt.useState(!1),[et,H]=rt.useState(""),[W,B]=rt.useState(!1),[y,z]=rt.useState(""),[U,G]=rt.useState("info"),$=async()=>{if(!p){H("Test description cannot be empty!"),K(!0);return}const q=S.filter(Z=>!Z.deleted);try{await Wd(Qn(Ae,"tests"),{title:_,build_ID:m,design_ID:u,dateCreated:$d(),description:p,results:C,conclusions:g,userId:Q.uid,images:q,files:O}),setTimeout(()=>{T(m),v(""),I(""),w(""),k(""),N([]),R([]),x(!1)},1e3),z("Test added successfully"),G("success"),B(!0)}catch(Z){console.error("Error adding test: ",Z),z("Failed to add the test"),G("error"),B(!0)}};return P.jsxs("div",{children:[P.jsx("label",{className:"testTitles",htmlFor:"testTitle",children:"Title"}),P.jsx("input",{id:"testTitle",type:"text",value:_,onChange:q=>v(q.target.value),style:{width:"100%",marginBottom:"20px"}}),P.jsx("label",{className:"testTitles",htmlFor:"testDescription",children:"Description"}),P.jsx(yo,{onChange:I})," ",P.jsx("label",{className:"testTitles",htmlFor:"testResults",children:"Results"}),P.jsx(yo,{onChange:w})," ",P.jsx("label",{className:"testTitles",htmlFor:"testConclusions",children:"Conclusions"}),P.jsx(yo,{onChange:k})," ",P.jsx(mr,{path:`tests/${m}/images`,initialImages:S,onImagesUpdated:q=>{N(q)}}),P.jsx(fr,{path:`tests/${m}/files`,initialFiles:O,onFilesChange:q=>{R(q)}}),P.jsxs("div",{style:{display:"flex",justifyContent:"flex-end"},children:[P.jsx("button",{onClick:$,children:"Save"}),P.jsx("button",{style:{marginLeft:"12px"},onClick:()=>x(!1),className:"button muted-button",children:"Cancel"})]}),P.jsxs(Xo,{open:Y,onClose:()=>K(!1),children:[P.jsx(Ti,{children:"Notification"}),P.jsx(ti,{children:P.jsx(_r,{children:et})}),P.jsx(Di,{children:P.jsx(dn,{onClick:()=>K(!1),children:"OK"})})]}),P.jsx(Fo,{open:W,autoHideDuration:6e3,onClose:()=>B(!1),children:P.jsx(zo,{onClose:()=>B(!1),severity:U,sx:{width:"100%"},children:y})})]})};var fu={},g7=Xn;Object.defineProperty(fu,"__esModule",{value:!0});var Za=fu.default=void 0,p7=g7(to()),m7=P;Za=fu.default=(0,p7.default)((0,m7.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"}),"Visibility");var ku={},f7=Xn;Object.defineProperty(ku,"__esModule",{value:!0});var Ja=ku.default=void 0,k7=f7(to()),b7=P;Ja=ku.default=(0,k7.default)((0,b7.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7M2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2m4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3z"}),"VisibilityOff");const w7=({selectedDesign:u,setIsEditing:m,getDesigns:T,onReturnToDashboard:x})=>{const{userDetails:b,loading:D}=Ar();console.log("Edit page loaded");const _=u.id;console.log("Design ID:",_);const[v,p]=rt.useState(u.description),[I,C]=rt.useState(u.dateDue||""),[w,g]=rt.useState(""),[k,S]=rt.useState(!1),[N,O]=rt.useState([]),[R,Q]=rt.useState({}),[Y,K]=rt.useState(!1),[et,H]=rt.useState({}),[W,B]=rt.useState({}),[y,z]=rt.useState({}),[U,G]=rt.useState({}),[$,q]=rt.useState([]),Z=rt.useRef(null),[F,j]=rt.useState([]),[st,X]=rt.useState({}),[nt,ft]=rt.useState({}),[ht,vt]=rt.useState({}),[dt,ct]=rt.useState({}),Nt=rt.useRef(null),Jt=rt.useRef(null),[It,Pt]=rt.useState(!1),[Xt,Yt]=rt.useState(""),[xt,Ut]=rt.useState(()=>{}),[Rt,Ct]=rt.useState(!1),[te,Lt]=rt.useState(""),[Gt,Ht]=rt.useState("info"),[Kt,$t]=rt.useState({design:!1,builds:!1,tests:!1}),[ee,Et]=rt.useState({}),[Dt,ue]=rt.useState({}),[rn,Ie]=rt.useState({}),[se,Je]=rt.useState({}),[Se,Fe]=rt.useState({});console.log("Editing Design by user:",b);const ye=(ot,wt)=>{Ie(ut=>({...ut,[ot]:wt}))},Me=(ot,wt)=>{Je(ut=>({...ut,[ot]:wt}))},Ne=async ot=>{const wt=rn[ot];try{const ut=bn(Ae,"builds",ot);await Qo(ut,{title:wt},{merge:!0}),Ie(yt=>{const Bt={...yt};return delete Bt[ot],Bt}),Be()}catch(ut){console.error("Failed to save build title:",ut)}},pn=async(ot,wt)=>{const ut=se[ot],yt=bn(Ae,"tests",ot);await Qo(yt,{title:ut},{merge:!0}),Je(Bt=>{const jt={...Bt};return delete jt[ot],jt}),We(wt)},zn=(ot,wt)=>{H(ut=>({...ut,[ot]:wt})),$t(ut=>({...ut,builds:!0}))},_n=(ot,wt)=>{console.log(`Updating description for test ID ${ot}:`,wt),B(ut=>({...ut,[ot]:wt})),$t(ut=>({...ut,tests:!0}))},xe=async ot=>{var Bt;const wt=bn(Ae,"builds",ot),ut=((Bt=st[ot])==null?void 0:Bt.filter(jt=>!jt.deleted).map(({url:jt,path:At,title:tt})=>({url:jt,path:At,title:tt})))||[],yt={};et[ot]!==void 0&&(yt.description=et[ot]),yt.images=ut,ht[ot]&&ht[ot].length>0&&(yt.files=ht[ot].map(jt=>({id:jt.id,url:jt.url,name:jt.name,path:jt.path})));try{await Qo(wt,yt,{merge:!0}),Lt("Your build has been updated."),Ht("success"),Ct(!0),Be(),$t(jt=>({...jt,builds:!1}))}catch(jt){console.error("Error updating build:",jt),Lt("Failed to update build."),Ht("error"),Ct(!0)}},Ke=async(ot,wt)=>{const ut={},yt=nt[ot].filter(Bt=>!Bt.deleted).map(({url:Bt,path:jt,title:At})=>({url:Bt,path:jt,title:At}));W[ot]!==void 0&&(ut.description=W[ot]),y[ot]!==void 0&&(ut.results=y[ot]),U[ot]!==void 0&&(ut.conclusions=U[ot]),ut.images=yt,dt[ot]&&(ut.files=dt[ot].map(Bt=>({id:Bt.id,url:Bt.url,name:Bt.name,path:Bt.path})));try{const Bt=bn(Ae,"tests",ot);await Qo(Bt,ut,{merge:!0}),Lt("Your test has been updated."),Ht("success"),Ct(!0),We(wt)}catch(Bt){console.error(`Error updating test ID: ${ot}:`,Bt),Lt("There was an issue updating your test."),Ht("error"),Ct(!0)}},Fn=(ot,wt)=>{console.log(`Updating results for test ID ${ot}:`,wt),z(ut=>({...ut,[ot]:wt})),$t(ut=>({...ut,tests:!0}))},ie=(ot,wt)=>{G(ut=>({...ut,[ot]:wt})),$t(ut=>({...ut,tests:!0}))};rt.useEffect(()=>{if(u){p(u.description||""),g(u.title||""),(async()=>{const ut=bn(Ae,"designs",_),yt=await e4(ut);if(yt.exists()){const Bt=yt.data();console.log("Fetched images:",Bt.images),console.log("Fetched files:",Bt.files),q(Bt.images||[]),j(Bt.files||[])}})();let wt;u.dateDue?(typeof u.dateDue=="string"?wt=u.dateDue:u.dateDue.toDate&&(wt=u.dateDue.toDate().toISOString().split("T")[0]),C(wt)):C("")}},[u,_]),rt.useEffect(()=>{!D&&b&&(async()=>{if(!b)return;const wt=Ro(Qn(Ae,"builds"),wn("design_ID","==",_),wn("userId","==",b.uid),hr("dateCreated")),ut=await Zo(wt);let yt=[],Bt={},jt={};for(const At of ut.docs){const tt=At.data(),mt=At.id;yt.push({id:mt,...tt,images:tt.images||[],files:tt.files||[]}),jt[mt]=!0;const St=Ro(Qn(Ae,"tests"),wn("build_ID","==",mt),wn("userId","==",b.uid),hr("dateCreated")),Ft=await Zo(St);let Ve=[],Pe={},Ge={};for(const Ee of Ft.docs){const an=Ee.data();Ve.push({id:Ee.id,...an}),Pe[Ee.id]=an.images||[],Ge[Ee.id]=an.files||[]}Bt[mt]=Ve,ft(Ee=>{let an={...Ee};for(const Oe in Pe)an[Oe]=Pe[Oe];return an}),ct(Ee=>{let an={...Ee};for(const Oe in Ge)an[Oe]=Ge[Oe];return an})}O(yt),Q(Bt),Fe(jt)})()},[D,b,u.id,_]);const Be=async()=>{if(!b){console.log("User details not loaded yet");return}try{console.log("Refreshing builds for user UID:",b==null?void 0:b.uid),console.log("Selected design ID for query:",u==null?void 0:u.id);const ot=Ro(Qn(Ae,"builds"),wn("design_ID","==",_),wn("userId","==",b.uid),hr("dateCreated"));console.log("Builds query details:",JSON.stringify(ot,null,2));const wt=await Zo(ot);console.log("Builds snapshot details:",JSON.stringify(wt.docs.map(yt=>yt.data()),null,2)),console.log("Builds query successful, number of builds fetched: ",wt.docs.length);const ut=wt.docs.map(yt=>(console.log("Build doc path: ",yt.ref.path),{id:yt.id,...yt.data()}));O(ut),console.log("New builds state after refresh:",ut)}catch(ot){console.error("Error refreshing builds:",ot),ot.code==="permission-denied"?console.error("Permission denied when trying to refresh builds:",ot):console.error("An unexpected error occurred when trying to refresh builds:",ot)}},We=async ot=>{if(!b){console.log("User details not loaded yet");return}try{const wt=Ro(Qn(Ae,"tests"),wn("build_ID","==",ot),wn("userId","==",b.uid),hr("dateCreated")),yt=(await Zo(wt)).docs.map(At=>({id:At.id,...At.data(),images:At.data().images||[],files:At.data().files||[]}));Q(At=>({...At,[ot]:yt}));let Bt={},jt={};yt.forEach(At=>{Bt[At.id]=At.images,jt[At.id]=At.files}),ft(Bt),ct(jt)}catch(wt){console.error("Error fetching tests:",wt)}},Vn=ot=>{Fe(wt=>({...wt,[ot]:!wt[ot]}))},Un=ot=>{JSON.stringify($)!==JSON.stringify(ot)&&(q(ot),console.log("Updated images received:",ot))},eo=ot=>{const wt=$.filter(yt=>!ot.some(Bt=>Bt.path===yt.path));console.log("Remaining images after deletion:",wt),q(wt);const ut=wt.map(yt=>({url:yt.url,title:yt.title,path:yt.path}));Qo(bn(Ae,"designs",_),{images:ut},{merge:!0}).then(()=>console.log("Firestore successfully updated")).catch(yt=>console.error("Failed to update Firestore:",yt))},Cn=(ot,wt)=>{const ut=bn(Ae,"builds",ot),yt=st[ot].filter(jt=>!wt.some(At=>At.path===jt.path));X(jt=>({...jt,[ot]:yt}));const Bt=yt.map(jt=>({url:jt.url,title:jt.title,path:jt.path}));Qo(ut,{images:Bt},{merge:!0}).then(()=>{console.log("Firestore successfully updated for build images"),Lt("Build Image deletions updated."),Ht("success")}).catch(jt=>{console.error("Failed to update build images in Firestore:",jt),Lt("Failed to update build image deletions."),Ht("error")}),Ct(!0)},vn=(ot,wt)=>{const ut=bn(Ae,"tests",ot),yt=nt[ot].filter(jt=>!wt.includes(jt));ft(jt=>({...jt,[ot]:yt}));const Bt=yt.map(({url:jt,path:At,title:tt})=>({url:jt,path:At,title:tt}));Qo(ut,{images:Bt},{merge:!0}).then(()=>{console.log("Firestore successfully updated for test images"),Lt("Test Image deletions updated."),Ht("success")}).catch(jt=>{console.error("Failed to update test images in Firestore:",jt),Lt("Failed to update test image deletions."),Ht("error")}),Ct(!0)},sn=async ot=>{if(ot.preventDefault(),!v||!I){Yt("All fields are required."),Pt(!0);return}console.log("About to check image deletions",Z.current),console.log(Z.current),console.log($.some(yt=>yt.deleted)),Z.current&&$.some(yt=>yt.deleted)&&(console.log("Committing deletions"),await Z.current.commitDeletions());const wt=$.filter(yt=>!yt.deleted);let ut={title:w,description:v,dateDue:s_.fromDate(new Date(I)),images:wt.map(yt=>({url:yt.url,title:yt.title,path:yt.path})),files:F.map(yt=>({id:yt.id,url:yt.url,name:yt.name,path:yt.path})),userId:b.uid};try{await Qo(bn(Ae,"designs",_),ut,{merge:!0}),Lt("Your design has been updated."),Ht("success"),Ct(!0)}catch(yt){console.error("Error updating design:",yt),Lt("There was an issue updating your design."),Ht("error"),Ct(!0)}$t(yt=>({...yt,design:!1}))},ni=(ot,wt)=>{X(ut=>({...ut,[ot]:wt}))},no=(ot,wt)=>{ft(ut=>({...ut,[ot]:wt}))},xo=(ot,wt)=>{ct(ut=>({...ut,[ot]:wt}))},mn=(ot,wt)=>{vt(ut=>({...ut,[ot]:wt}))},oi=()=>{const ot=Object.entries(Kt).filter(([ut,yt])=>yt).map(([ut])=>ut).join(", ");if(!ot.length){x();return}const wt=`You have unsaved changes in the following sections: ${ot}. Are you sure you want to leave?`;Yt(wt),Ut(()=>()=>{$t({design:!1,builds:!1,tests:!1}),x()}),Pt(!0)};rt.useEffect(()=>{const ot=wt=>{Object.values(Kt).some(yt=>yt)&&(wt.preventDefault(),wt.returnValue="")};return window.addEventListener("beforeunload",ot),()=>window.removeEventListener("beforeunload",ot)},[Kt]);const Ni=async ot=>{const wt=Ro(Qn(Ae,"tests"),wn("build_ID","==",ot),wn("userId","==",b.uid)),ut=await Zo(wt);for(const yt of ut.docs)await pr(bn(Ae,"tests",yt.id));await pr(bn(Ae,"builds",ot)),await Be(),Lt("Build and its tests (if any) deleted successfully."),Ht("success"),Ct(!0)},Pi=async(ot,wt)=>{await pr(bn(Ae,"tests",ot)),await We(wt),Lt("Test deleted successfully."),Ht("success"),Ct(!0)},yr=ot=>{Yt("Are you sure you want to delete this build and all associated tests? This action cannot be undone."),Ut(()=>()=>Ni(ot)),Pt(!0)},oo=(ot,wt)=>{Yt("Are you sure you want to delete this test? This action cannot be undone."),Ut(()=>()=>Pi(ot,wt)),Pt(!0)};return P.jsxs("div",{className:"small-container",children:[P.jsx("button",{onClick:()=>{Object.values(Kt).some(wt=>wt)?oi():x()},className:"muted-button margin-top-20",children:"← All Designs"}),P.jsx("div",{className:"design-record",children:P.jsxs("form",{onSubmit:sn,children:[P.jsx("h1",{className:"designHeader",style:{marginBottom:"20px"},children:"Design Document"}),P.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[P.jsxs("div",{style:{flexGrow:8,marginRight:"12px"},children:[P.jsx("label",{className:"designTitles",htmlFor:"title",children:"Title"}),P.jsx("input",{id:"title",type:"text",name:"title",value:w,onChange:ot=>{g(ot.target.value),$t(wt=>({...wt,design:!0}))},style:{width:"100%"}})]}),P.jsxs("div",{style:{flexGrow:2},children:[P.jsx("label",{className:"designTitles",htmlFor:"dateDue",children:"Date"}),P.jsx("input",{id:"dateDue",type:"date",name:"dateDue",value:I,onChange:ot=>{C(ot.target.value),$t(wt=>({...wt,design:!0}))},style:{width:"100%"}})]})]}),P.jsx("label",{className:"designTitles",htmlFor:"description",children:"Description"}),P.jsxs("ul",{children:[P.jsx("li",{children:"Objective: What is the goal for this design?"}),P.jsx("li",{children:"Rationale: Why is this new design being done?"}),P.jsx("li",{children:"Selected Target: What is the target for the design being made?"}),P.jsx("li",{children:"Functional Modification: What is being done to this target?"}),P.jsx("li",{children:"Overview/Plan for making the modification: What are the steps to be carried out to meet the objective?"})]}),P.jsx(yo,{initialValue:v,onChange:ot=>{p(ot),$t(wt=>({...wt,design:!0}))}}),P.jsx(mr,{ref:Z,path:`designs/${u.id}/images`,initialImages:$,onImagesUpdated:Un,onDelete:eo}),P.jsx(fr,{path:`designs/${u.id}/files`,initialFiles:F,onFilesChange:j}),P.jsxs("div",{style:{marginTop:"30px",display:"flex",justifyContent:"flex-end"},children:[P.jsx("input",{type:"submit",value:"Update"}),P.jsx("button",{style:{marginLeft:"12px"},className:"muted-button",type:"button",onClick:()=>m(!1),children:"Cancel"})]})]})}),P.jsxs("div",{children:[P.jsxs("div",{className:"flex-space-between",children:[P.jsx("h2",{className:"buildsHeader",children:"Builds"}),P.jsxs("button",{className:"button muted-button",onClick:()=>{S(!0),setTimeout(()=>{Nt.current&&Nt.current.scrollIntoView({behavior:"smooth"})},100)},style:{marginTop:"20px"},children:[P.jsx("span",{role:"img","aria-label":"Add Build",children:"➕"})," Build"]})]}),N.map((ot,wt)=>P.jsxs("div",{className:"build-record",children:[P.jsxs("div",{className:"flex-space-between align-items-center",children:[P.jsx("div",{children:rn[ot.id]!==void 0?P.jsx(nc,{variant:"outlined",size:"small",fullWidth:!0,value:rn[ot.id],onChange:ut=>ye(ot.id,ut.target.value),onBlur:()=>Ne(ot.id),autoFocus:!0,InputProps:{endAdornment:P.jsx(Zn,{onClick:()=>Ne(ot.id),size:"small",children:P.jsx(lc,{})})}}):P.jsx("div",{className:"buildTitle",onClick:()=>Ie(ut=>({...ut,[ot.id]:ot.title||`Build ${wt+1}`})),style:{cursor:"pointer"},children:ot.title||`Build ${wt+1}`})}),P.jsxs("div",{children:[P.jsx("button",{onClick:()=>Et(ut=>({...ut,[ot.id]:!ut[ot.id]})),className:"button muted-button",style:{border:"none",background:"none"},children:ee[ot.id]?P.jsx(Ja,{}):P.jsx(Za,{})}),P.jsx("button",{className:"button muted-button",style:{border:"none",background:"none"},onClick:()=>yr(ot.id),children:P.jsx(kr,{})}),P.jsxs("button",{className:"button muted-button",onClick:()=>{K(ot.id),setTimeout(()=>{Jt.current&&Jt.current.scrollIntoView({behavior:"smooth"})},100)},children:[P.jsx("span",{role:"img","aria-label":"Add Test",children:"➕"})," Test"]})]})]}),ee[ot.id]&&P.jsxs(P.Fragment,{children:[P.jsx(yo,{initialValue:et[ot.id]||ot.description,onChange:ut=>{zn(ot.id,ut)}}),P.jsx(mr,{path:`builds/${ot.id}/images`,initialImages:ot.images,onImagesUpdated:ut=>ni(ot.id,ut),onDelete:ut=>Cn(ot.id,ut)}),P.jsx(fr,{path:`builds/${ot.id}/files`,initialFiles:ot.files,onFilesChange:ut=>mn(ot.id,ut)}),P.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:P.jsx("button",{onClick:()=>xe(ot.id),children:"Update"})}),P.jsx("div",{children:R[ot.id]&&R[ot.id].length>0&&P.jsx("button",{onClick:()=>Vn(ot.id),className:"button muted-button",style:{display:"flex",alignItems:"center",justifyContent:"center",marginLeft:"12px",marginBottom:"12px"},children:Se[ot.id]?P.jsxs(P.Fragment,{children:[P.jsx(Za,{style:{marginRight:"8px"}}),"Tests"]}):P.jsxs(P.Fragment,{children:[P.jsx(Ja,{style:{marginRight:"8px"}}),"Tests"]})})}),!Se[ot.id]&&R[ot.id]&&R[ot.id].map((ut,yt)=>P.jsxs("div",{className:"test-record",children:[P.jsxs("div",{className:"flex-space-between align-items-center",children:[P.jsx("div",{children:se[ut.id]!==void 0?P.jsx(nc,{variant:"outlined",size:"small",fullWidth:!0,value:se[ut.id],onChange:Bt=>Me(ut.id,Bt.target.value),onBlur:()=>pn(ut.id,ot.id),autoFocus:!0,InputProps:{endAdornment:P.jsx(Zn,{onClick:()=>pn(ut.id,ot.id),size:"small",children:P.jsx(lc,{})})}}):P.jsx("div",{className:"testTitle",onClick:()=>Je(Bt=>({...Bt,[ut.id]:ut.title||`Test ${yt+1}`})),style:{cursor:"pointer"},children:ut.title||`Test ${yt+1}`})}),P.jsxs("div",{children:[P.jsx("button",{onClick:()=>ue(Bt=>({...Bt,[ut.id]:!Bt[ut.id]})),className:"button muted-button",style:{border:"none",background:"none"},children:Dt[ut.id]?P.jsx(Ja,{}):P.jsx(Za,{})}),P.jsx("button",{className:"button muted-button",style:{border:"none",background:"none"},onClick:()=>oo(ut.id,ot.id),children:P.jsx(kr,{})})]})]}),Dt[ut.id]&&P.jsxs(P.Fragment,{children:[P.jsxs("div",{children:[P.jsx("label",{className:"testTitles",children:"Description"}),P.jsx(yo,{initialValue:W[ut.id]||ut.description,onChange:Bt=>{_n(ut.id,Bt)}})]}),P.jsxs("div",{children:[P.jsx("label",{className:"testTitles",children:"Results"}),P.jsx(yo,{initialValue:y[ut.id]||ut.results,onChange:Bt=>{Fn(ut.id,Bt)}})]}),P.jsxs("div",{children:[P.jsx("label",{className:"testTitles",children:"Conclusions"}),P.jsx(yo,{initialValue:U[ut.id]||ut.conclusions,onChange:Bt=>{ie(ut.id,Bt)}})]}),P.jsxs("div",{children:[P.jsx(mr,{path:`tests/${ut.id}/images`,initialImages:nt[ut.id]||[],onImagesUpdated:Bt=>no(ut.id,Bt),onDelete:Bt=>vn(ut.id,Bt)}),P.jsx(fr,{path:`tests/${ut.id}/files`,initialFiles:dt[ut.id]||[],onFilesChange:Bt=>xo(ut.id,Bt)})]}),P.jsx("div",{style:{display:"flex",justifyContent:"flex-end"},children:P.jsx("button",{onClick:()=>Ke(ut.id,ot.id),children:"Update"})})]})]},ut.id))]}),Y===ot.id&&P.jsxs("div",{className:"new-test-record",ref:Jt,children:[P.jsx("h3",{className:"newTestHeader",children:"New Test"}),P.jsx(h7,{designId:u.id,buildId:ot.id,refreshTests:()=>We(ot.id),setAddingTestIdForBuild:K,onImagesUpdated:ut=>no(ot.id,ut),onFilesUpdated:ut=>xo(ot.id,ut)})]})]},ot.id)),P.jsx("div",{children:k&&P.jsxs("div",{className:"new-build-record",ref:Nt,children:[P.jsx("h3",{className:"newBuildHeader",children:"New Build"}),P.jsx(u7,{designId:u.id,setIsAddingBuild:S,refreshBuilds:Be,onImagesUpdated:ot=>ni(build.id,ot),onFilesUpdated:ot=>mn(build.id,ot)})]})})]}),P.jsxs(Xo,{open:It,onClose:()=>Pt(!1),children:[P.jsx(Ti,{children:"Confirmation Required"}),P.jsx(ti,{children:P.jsx(_r,{children:Xt})}),P.jsxs(Di,{children:[P.jsx(dn,{onClick:()=>Pt(!1),children:"Cancel"}),P.jsx(dn,{onClick:()=>{xt(),Pt(!1)},autoFocus:!0,children:"Confirm"})]})]}),P.jsx(Fo,{open:Rt,autoHideDuration:6e3,onClose:()=>Ct(!1),children:P.jsx(zo,{onClose:()=>Ct(!1),severity:Gt,sx:{width:"100%"},children:te})})]})},A7=()=>{const{userDetails:u,loading:m}=Ar();console.log("Dashboard loaded");const[T,x]=rt.useState([]),[b,D]=rt.useState(null),[_,v]=rt.useState(!1),[p,I]=rt.useState(!1),[C,w]=rt.useState(!1),[g,k]=rt.useState(""),[S,N]=rt.useState(""),[O,R]=rt.useState(!1),[Q,Y]=rt.useState(null),[K,et]=rt.useState(!1),[H,W]=rt.useState(""),[B,y]=rt.useState("info"),z=()=>{I(!1),v(!1),D(null),U()},U=rt.useCallback(async()=>{let Z;u&&u.isAdmin?Z=Ro(Qn(Ae,"designs"),hr("dateCreated","desc")):u&&(Z=Ro(Qn(Ae,"designs"),wn("userId","==",u.uid),hr("dateCreated","desc")));const j=(await Zo(Z)).docs.map(st=>({id:st.id,...st.data()}));x(j)},[u]);rt.useEffect(()=>{!m&&u&&U()},[u,m,U]);const G=Z=>{const[F]=T.filter(j=>j.id===Z);D(F),I(!0)},$=Z=>{Y(Z),k("Are you sure you want to delete this design? This action cannot be undone."),w(!0)},q=async()=>{if(Q)if(S!==u.uid)W("User ID confirmation failed. Enter the correct User ID."),y("error"),et(!0);else try{const Z=Ro(Qn(Ae,"builds"),wn("design_ID","==",Q),wn("userId","==",u.uid)),F=await Zo(Z);for(const st of F.docs){const X=st.id,nt=Ro(Qn(Ae,"tests"),wn("build_ID","==",X),wn("userId","==",u.uid)),ft=await Zo(nt);for(const ht of ft.docs)await pr(bn(Ae,"tests",ht.id));await pr(bn(Ae,"builds",X))}await pr(bn(Ae,"designs",Q));const j=T.filter(st=>st.id!==Q);x(j),W("Your design and its associated builds and tests have been deleted."),y("success"),et(!0)}catch(Z){console.error("Error deleting design, builds, and tests: ",Z),W("There was an issue deleting your design and its associated builds and tests."),y("error"),et(!0)}finally{N(""),R(!1),Y(null)}};return P.jsxs("div",{className:"container",children:[!_&&!p&&P.jsxs(P.Fragment,{children:[P.jsx(X3,{setIsAdding:v}),P.jsx(sB,{designs:T,handleEdit:G,handleDelete:$,isAdmin:(u==null?void 0:u.isAdmin)??!1})]}),_&&P.jsx(d7,{designs:T,setDesigns:x,setIsAdding:v,getDesigns:U,onReturnToDashboard:z}),p&&P.jsx(w7,{designs:T,selectedDesign:b,setDesigns:x,setIsEditing:I,getDesigns:U,onReturnToDashboard:z}),P.jsxs(Xo,{open:C,onClose:()=>w(!1),PaperProps:{style:{minWidth:500}},children:[P.jsx(Ti,{children:"Confirm Deletion"}),P.jsx(ti,{children:P.jsx(_r,{children:g})}),P.jsxs(Di,{children:[P.jsx(dn,{onClick:()=>w(!1),children:"No, cancel"}),P.jsx(dn,{onClick:()=>{R(!0),w(!1)},color:"primary",children:"Yes, delete it"})]})]}),P.jsxs(Xo,{open:O,onClose:()=>R(!1),PaperProps:{style:{minWidth:500}},children:[P.jsx(Ti,{children:"Confirm Your User ID"}),P.jsx(ti,{children:P.jsx(nc,{autoFocus:!0,margin:"dense",id:"userId-confirm",label:"User ID",type:"text",fullWidth:!0,variant:"outlined",value:S,onChange:Z=>N(Z.target.value)})}),P.jsxs(Di,{children:[P.jsx(dn,{onClick:()=>R(!1),children:"No, cancel"}),P.jsx(dn,{onClick:q,color:"primary",children:"Confirm"})]})]}),P.jsx(Fo,{open:K,autoHideDuration:6e3,onClose:()=>et(!1),children:P.jsx(zo,{onClose:()=>et(!1),severity:B,sx:{width:"100%"},children:H})})]})},y7=n_.memo(A7);export{y7 as default};