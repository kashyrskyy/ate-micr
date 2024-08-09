import{K as v,M as I,b as r,j as e,v as n,w as h,T as l,N as b,x as oe,O as le,y as q,A as O,aC as R,a3 as z,al as K,a4 as Y,am as Z,an as J,at as Q,aA as te,av as ae,aw as L,ay as G,ax as F,aq as H,aD as re,aE as de,G as m,Y as x,Z as D,$ as E}from"./index-BuF5mIbM.js";import{d as M}from"./Visibility-Dx680wNz.js";const ce=()=>{const{userDetails:s,isSuperAdmin:a}=v(),o=I(),[d,c]=r.useState(!1),[t,u]=r.useState(!1),f=()=>{s!=null&&s.uid?navigator.clipboard.writeText(s.uid).then(()=>{c(!0),u(!0)}).catch(j=>{console.error("Could not copy text: ",j)}):console.error("User details are null or undefined")},p=(j,C)=>{C!=="clickaway"&&c(!1)},k=()=>{o("/")};return e.jsxs(n,{children:[e.jsx(n,{sx:{display:"flex",alignItems:"center"},children:e.jsx(h,{variant:"text",onClick:k,sx:{mr:2},children:"← Home Page"})}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:[e.jsx(l,{variant:"h4",component:"h1",sx:{fontWeight:"bold"},children:"Supplemental Materials"}),e.jsxs(n,{sx:{display:"flex",alignItems:"center"},children:[a&&e.jsx(b,{label:"Super-Admin",variant:"outlined",sx:{borderRadius:"15px",fontWeight:"bold",background:"#ffcdd2",color:"#c62828",mr:1}}),(s==null?void 0:s.isAdmin)&&!a&&e.jsx(b,{label:"Educator",variant:"outlined",sx:{borderRadius:"15px",fontWeight:"bold",background:"#ffcdd2",color:"#c62828",mr:1}}),!(s!=null&&s.isAdmin)&&e.jsx(b,{label:"Student",variant:"outlined",sx:{borderRadius:"15px",fontWeight:"bold",background:"#bbdefb",color:"#1e88e5",mr:1}}),s&&e.jsx(oe,{title:t?"Copied!":"Click to Copy",enterDelay:300,leaveDelay:200,children:e.jsx(b,{label:`User ID: ${s.uid}`,variant:"outlined",onClick:f,sx:{borderRadius:"15px",fontWeight:"bold",background:"#e0f2f1",color:"#00695c",cursor:"pointer",transition:"background-color 0.3s",mr:2}})}),e.jsx(le,{})]}),e.jsx(q,{open:d,autoHideDuration:6e3,onClose:p,children:e.jsx(O,{onClose:p,severity:"success",sx:{width:"100%"},children:"User ID copied to clipboard!"})})]})]})},xe=()=>{const s=I();return e.jsx(h,{variant:"contained",color:"primary",onClick:()=>s("/add-material"),sx:{fontSize:"1.2rem",mt:2,mb:4,textTransform:"none",minWidth:"150px",boxShadow:"none","&:hover":{boxShadow:"0px 0px 10px rgba(0, 0, 0, 0.2)",transform:"scale(1.05)"},transition:"transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",border:"1px solid transparent"},children:"+ Add Material"})},he=({materialId:s,open:a,onClose:o,onDelete:d})=>{const c=R(),t=async()=>{const u=Q(c,"materials",s);await te(u),d(),o()};return e.jsxs(z,{open:a,onClose:o,children:[e.jsx(K,{children:"Delete Material"}),e.jsx(Y,{children:e.jsx(Z,{children:"Are you sure you want to delete this material? This action cannot be undone."})}),e.jsxs(J,{children:[e.jsx(h,{onClick:o,color:"primary",children:"Cancel"}),e.jsx(h,{onClick:t,color:"secondary",children:"Delete"})]})]})},_=({materialId:s,onClick:a})=>e.jsx(h,{variant:"contained",color:"error",onClick:()=>a(s),sx:{backgroundColor:"#FFCDD2",color:"#C62828",borderRadius:"15px",fontWeight:"bold",padding:"4px 8px",ml:1,textTransform:"none"},children:"Unpublish"}),ue=({materialId:s,open:a,onClose:o,onUnpublish:d})=>{const c=R(),t=async()=>{const u=Q(c,"materials",s);await ae(u,{published:!1}),d(),o()};return e.jsxs(z,{open:a,onClose:o,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(K,{id:"alert-dialog-title",children:"Unpublish Material"}),e.jsx(Y,{children:e.jsx(Z,{id:"alert-dialog-description",children:"Are you sure you want to unpublish this material? It will no longer be visible to users until it is published again."})}),e.jsxs(J,{children:[e.jsx(h,{onClick:o,color:"primary",children:"Cancel"}),e.jsx(h,{onClick:t,color:"error",autoFocus:!0,children:"Unpublish"})]})]})},pe=({selectedCourse:s,onCourseChange:a})=>{const{userDetails:o}=v(),[d,c]=r.useState(["Public-Source"]);return r.useEffect(()=>{if(o!=null&&o.class){const t=Array.from(new Set(["Public-Source",...o.class]));c(t)}else c(["Public-Source"])},[o]),e.jsx(n,{sx:{display:"flex",gap:2,mb:2},children:d.map(t=>e.jsx(h,{variant:s===t?"contained":"outlined",onClick:()=>a(t),children:t},t))})},be=()=>{const{userDetails:s}=v(),a=R(),[o,d]=r.useState([]),[c,t]=r.useState(!0),[u,f]=r.useState(!1),[p,k]=r.useState("Public-Source"),[j,C]=r.useState(null),[y,U]=r.useState({open:!1,materialId:null}),[W,S]=r.useState(null),g=I();r.useEffect(()=>{if(!s)return;t(!0);const i=s.isAdmin?L(H(a,"materials"),F("course","==",p),G("timestamp","desc")):L(H(a,"materials"),F("course","==",p),F("published","==",!0),G("timestamp","desc")),se=re(i,A=>{const ne=A.docs.map(B=>({id:B.id,...B.data()}));d(ne),t(!1)},A=>{console.error(A),S("Failed to fetch materials"),t(!1)});return()=>se()},[a,s,p]);const w=i=>{C(i),f(!0)},V=()=>{f(!1),C(null)},X=()=>{d(o.filter(i=>i.id!==j))},T=i=>{U({open:!0,materialId:i})},ee=()=>{d(o.map(i=>i.id===y.materialId?{...i,published:!1}:i))},ie=()=>{U({open:!1,materialId:null})};if(c)return e.jsx(de,{});const P=o.filter(i=>!i.published&&!i.scheduledTimestamp),$=o.filter(i=>i.scheduledTimestamp&&!i.published),N=o.filter(i=>i.published);return e.jsxs(n,{sx:{width:"100%"},children:[e.jsx(pe,{selectedCourse:p,onCourseChange:i=>{t(!0),k(i)}}),(s==null?void 0:s.isAdmin)&&e.jsxs(e.Fragment,{children:[e.jsx(n,{sx:{backgroundColor:"#FFF9C4",borderRadius:"8px",padding:"4px 8px",display:"inline-block",mb:2},children:e.jsx(l,{variant:"h6",sx:{fontWeight:"bold",color:"#F57C00"},children:"Saved"})}),e.jsx(m,{container:!0,spacing:3,children:P.length===0?e.jsx(l,{variant:"body1",align:"center",sx:{width:"100%"},children:"No saved (unpublished) materials found."}):P.map(i=>e.jsx(m,{item:!0,xs:12,sm:6,md:4,children:e.jsxs(n,{sx:{border:"1px solid #ddd",borderRadius:"8px",padding:2,position:"relative",backgroundColor:"#FFF9C4"},children:[e.jsx(n,{children:i.author===(s==null?void 0:s.uid)&&e.jsx(b,{label:"My Material",variant:"outlined",sx:{borderRadius:"15px",fontWeight:"bold",background:"#C5E1A5",color:"#2E7D32",ml:1}})}),e.jsxs(n,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(x,{onClick:()=>g(`/view-material/${i.id}`),"aria-label":"view",children:e.jsx(M,{})}),e.jsx(l,{variant:"h6",children:i.title||"Untitled"})]}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsxs(l,{variant:"body2",color:"textSecondary",children:["Created Date: ",i.timestamp.toDate().toLocaleString()]}),e.jsx(l,{variant:"body2",color:"textSecondary",children:"Status: Saved"})]}),e.jsx(n,{sx:{position:"absolute",top:8,right:8,display:"flex",gap:1},children:(s==null?void 0:s.isAdmin)&&e.jsxs(e.Fragment,{children:[e.jsx(x,{onClick:()=>g(`/edit-material/${i.id}`),"aria-label":"edit",children:e.jsx(D,{})}),e.jsx(x,{onClick:()=>w(i.id),"aria-label":"delete",children:e.jsx(E,{})})]})}),e.jsx(n,{sx:{backgroundColor:"#E0F7FA",borderRadius:"8px",padding:"4px 8px",display:"inline-block",mt:2},children:e.jsx(l,{variant:"body2",sx:{color:"#00796B",fontWeight:"bold"},children:i.course||"N/A"})})]})},i.id))}),e.jsx(n,{sx:{backgroundColor:"#E3F2FD",borderRadius:"8px",padding:"4px 8px",display:"inline-block",mt:4,mb:2},children:e.jsx(l,{variant:"h6",sx:{fontWeight:"bold",color:"#0D47A1"},children:"Publish Scheduled"})}),e.jsx(m,{container:!0,spacing:3,children:$.length===0?e.jsx(l,{variant:"body1",align:"center",sx:{width:"100%"},children:"No materials scheduled for publishing found."}):$.map(i=>e.jsx(m,{item:!0,xs:12,sm:6,md:4,children:e.jsxs(n,{sx:{border:"1px solid #ddd",borderRadius:"8px",padding:2,position:"relative",backgroundColor:"#E3F2FD"},children:[e.jsx(n,{children:i.author===(s==null?void 0:s.uid)&&e.jsx(b,{label:"My Material",variant:"outlined",sx:{borderRadius:"15px",fontWeight:"bold",background:"#C5E1A5",color:"#2E7D32",ml:1}})}),e.jsxs(n,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(x,{onClick:()=>g(`/view-material/${i.id}`),"aria-label":"view",children:e.jsx(M,{})}),e.jsx(l,{variant:"h6",children:i.title||"Untitled"})]}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsxs(l,{variant:"body2",color:"textSecondary",children:["Created Date: ",i.timestamp.toDate().toLocaleString()]}),e.jsx(l,{variant:"body2",color:"textSecondary",children:"Status: Scheduled for Publishing"})]}),i.scheduledTimestamp&&e.jsx(n,{sx:{display:"flex",justifyContent:"center",mt:2},children:e.jsx(n,{sx:{backgroundColor:"#E3F2FD",border:"1px solid #90CAF9",borderRadius:"16px",padding:"4px 8px"},children:e.jsxs(l,{variant:"body2",sx:{color:"#0D47A1",fontWeight:"bold"},children:["Publish Date: ",i.scheduledTimestamp.toDate().toLocaleString()]})})}),e.jsx(n,{sx:{position:"absolute",top:8,right:8,display:"flex",gap:1},children:(s==null?void 0:s.isAdmin)&&e.jsxs(e.Fragment,{children:[e.jsx(x,{onClick:()=>g(`/edit-material/${i.id}`),"aria-label":"edit",children:e.jsx(D,{})}),e.jsx(x,{onClick:()=>w(i.id),"aria-label":"delete",children:e.jsx(E,{})}),e.jsx(_,{materialId:i.id,onClick:T})]})}),e.jsx(n,{sx:{backgroundColor:"#E0F7FA",borderRadius:"8px",padding:"4px 8px",display:"inline-block",mt:2},children:e.jsx(l,{variant:"body2",sx:{color:"#00796B",fontWeight:"bold"},children:i.course||"N/A"})})]})},i.id))})]}),e.jsx(n,{sx:{backgroundColor:"#E8F5E9",borderRadius:"8px",padding:"4px 8px",display:"inline-block",mt:4,mb:2},children:e.jsx(l,{variant:"h6",sx:{fontWeight:"bold",color:"#2E7D32"},children:"Published"})}),e.jsx(m,{container:!0,spacing:3,children:N.length===0?e.jsx(l,{variant:"body1",align:"center",sx:{width:"100%"},children:"No published materials found."}):N.map(i=>e.jsx(m,{item:!0,xs:12,sm:6,md:4,children:e.jsxs(n,{sx:{border:"1px solid #ddd",borderRadius:"8px",padding:2,position:"relative",backgroundColor:"#E8F5E9"},children:[e.jsx(n,{children:i.author===(s==null?void 0:s.uid)&&e.jsx(b,{label:"My Material",variant:"outlined",sx:{borderRadius:"15px",fontWeight:"bold",background:"#C5E1A5",color:"#2E7D32",ml:1}})}),e.jsxs(n,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(x,{onClick:()=>g(`/view-material/${i.id}`),"aria-label":"view",children:e.jsx(M,{})}),e.jsx(l,{variant:"h6",sx:{flexGrow:1,maxWidth:"50%",wordWrap:"break-word"},children:i.title||"Untitled"})]}),e.jsxs(n,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsxs(l,{variant:"body2",color:"textSecondary",children:["Date: ",i.timestamp.toDate().toLocaleString()]}),e.jsx(l,{variant:"body2",color:"textSecondary",children:"Status: Published"})]}),e.jsx(n,{sx:{position:"absolute",top:8,right:8,display:"flex",gap:1},children:(s==null?void 0:s.isAdmin)&&e.jsxs(e.Fragment,{children:[e.jsx(x,{onClick:()=>g(`/edit-material/${i.id}`),"aria-label":"edit",children:e.jsx(D,{})}),e.jsx(x,{onClick:()=>w(i.id),"aria-label":"delete",children:e.jsx(E,{})}),e.jsx(_,{materialId:i.id,onClick:T})]})}),e.jsx(n,{sx:{backgroundColor:"#E0F7FA",borderRadius:"8px",padding:"4px 8px",display:"inline-block",mt:2},children:e.jsx(l,{variant:"body2",sx:{color:"#00796B",fontWeight:"bold"},children:i.course||"N/A"})})]})},i.id))}),j&&e.jsx(he,{materialId:j,open:u,onClose:V,onDelete:X}),y.materialId&&e.jsx(ue,{materialId:y.materialId,open:y.open,onClose:ie,onUnpublish:ee}),W&&e.jsx(q,{open:!0,autoHideDuration:6e3,onClose:()=>S(null),children:e.jsx(O,{onClose:()=>S(null),severity:"error",children:W})})]})},me=()=>{const{userDetails:s}=v();return e.jsxs(n,{sx:{flexGrow:1,padding:3},children:[e.jsx(ce,{}),e.jsxs(n,{sx:{display:"flex",flexDirection:"column",alignItems:"flex-start",gap:2},children:[(s==null?void 0:s.isAdmin)&&e.jsx(xe,{}),e.jsx(be,{})]})]})};export{me as default};
