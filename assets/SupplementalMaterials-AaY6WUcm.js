import{H as w,j as e,B as l,p as h,T as n,ax as D,Y as _,ag as q,Z as z,ah as O,ai as Q,ao as Y,av as ie,aq as le,af as E,e as d,ar as $,at as H,as as v,al as L,ay as ne,az as ae,G as p,aA as k,Q as c,R as S,U as F,t as te,A as re}from"./index-4drq_EHs.js";import{d as A}from"./Visibility-DecQFIBV.js";const de=()=>{const i=w(),r=()=>{i("/")};return e.jsxs(l,{children:[e.jsx(l,{className:"supplemental-header",children:e.jsx(h,{variant:"text",onClick:r,className:"supplemental-back-button",children:"← Home Page"})}),e.jsx(l,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:e.jsx(n,{className:"supplemental-title",children:"Supplemental Materials"})})]})},oe=()=>{const i=w();return e.jsx(h,{className:"add-material-button",variant:"contained",color:"primary",onClick:()=>i("/add-material"),children:"+ Add Material"})},ce=({materialId:i,open:r,onClose:a,onDelete:o})=>{const x=D(),t=async()=>{const b=Y(x,"materials",i);await ie(b),o(),a()};return e.jsxs(_,{open:r,onClose:a,children:[e.jsx(q,{children:"Delete Material"}),e.jsx(z,{children:e.jsx(O,{children:"Are you sure you want to delete this material? This action cannot be undone."})}),e.jsxs(Q,{children:[e.jsx(h,{onClick:a,color:"primary",children:"Cancel"}),e.jsx(h,{onClick:t,color:"secondary",children:"Delete"})]})]})},G=({materialId:i,onClick:r})=>e.jsx(h,{variant:"contained",color:"error",onClick:()=>r(i),sx:{backgroundColor:"#FFCDD2",color:"#C62828",borderRadius:"15px",fontWeight:"bold",padding:"4px 8px",ml:1,textTransform:"none"},children:"Unpublish"}),xe=({materialId:i,open:r,onClose:a,onUnpublish:o})=>{const x=D(),t=async()=>{const b=Y(x,"materials",i);await le(b,{published:!1}),o(),a()};return e.jsxs(_,{open:r,onClose:a,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsx(q,{id:"alert-dialog-title",children:"Unpublish Material"}),e.jsx(z,{children:e.jsx(O,{id:"alert-dialog-description",children:"Are you sure you want to unpublish this material? It will no longer be visible to users until it is published again."})}),e.jsxs(Q,{children:[e.jsx(h,{onClick:a,color:"primary",children:"Cancel"}),e.jsx(h,{onClick:t,color:"error",autoFocus:!0,children:"Unpublish"})]})]})},he=({selectedCourse:i,onCourseChange:r})=>{const{userDetails:a}=E(),[o,x]=d.useState(["Public-Source"]);return d.useEffect(()=>{if(a!=null&&a.class){const t=Array.from(new Set(["Public-Source",...a.class]));x(t)}else x(["Public-Source"])},[a]),e.jsx(l,{sx:{display:"flex",gap:2,mb:2},children:o.map(t=>e.jsx(h,{variant:i===t?"contained":"outlined",onClick:()=>r(t),children:t},t))})},ue=()=>{const{userDetails:i}=E(),r=D(),[a,o]=d.useState([]),[x,t]=d.useState(!0),[b,M]=d.useState(!1),[j,Z]=d.useState("Public-Source"),[m,R]=d.useState(null),[g,U]=d.useState({open:!1,materialId:null}),[I,f]=d.useState(null),u=w();d.useEffect(()=>{if(!i)return;t(!0);const s=i.isAdmin?$(L(r,"materials"),v("course","==",j),H("timestamp","desc")):$(L(r,"materials"),v("course","==",j),v("published","==",!0),H("timestamp","desc")),ee=ne(s,y=>{const se=y.docs.map(B=>({id:B.id,...B.data()}));o(se),t(!1)},y=>{console.error(y),f("Failed to fetch materials"),t(!1)});return()=>ee()},[r,i,j]);const C=s=>{R(s),M(!0)},J=()=>{M(!1),R(null)},K=()=>{o(a.filter(s=>s.id!==m))},N=s=>{U({open:!0,materialId:s})},V=()=>{o(a.map(s=>s.id===g.materialId?{...s,published:!1}:s))},X=()=>{U({open:!1,materialId:null})};if(x)return e.jsx(ae,{});const W=a.filter(s=>!s.published&&!s.scheduledTimestamp),P=a.filter(s=>s.scheduledTimestamp&&!s.published),T=a.filter(s=>s.published);return e.jsxs(l,{sx:{width:"100%"},children:[e.jsx(he,{selectedCourse:j,onCourseChange:s=>{t(!0),Z(s)}}),(i==null?void 0:i.isAdmin)&&e.jsxs(e.Fragment,{children:[e.jsx(l,{sx:{backgroundColor:"#FFF9C4",borderRadius:"8px",padding:"4px 8px",display:"inline-block",mb:2},children:e.jsx(n,{variant:"h6",sx:{fontWeight:"bold",color:"#F57C00"},children:"Saved"})}),e.jsx(p,{container:!0,spacing:3,children:W.length===0?e.jsx(n,{variant:"body1",align:"center",sx:{width:"100%"},children:"No saved (unpublished) materials found."}):W.map(s=>e.jsx(p,{item:!0,xs:12,sm:6,md:4,children:e.jsxs(l,{sx:{border:"1px solid #ddd",borderRadius:"8px",padding:2,position:"relative",backgroundColor:"#FFF9C4"},children:[e.jsx(l,{children:s.author===(i==null?void 0:i.uid)&&e.jsx(k,{label:"My Material",variant:"outlined",sx:{borderRadius:"15px",fontWeight:"bold",background:"#C5E1A5",color:"#2E7D32",ml:1}})}),e.jsxs(l,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(c,{onClick:()=>u(`/view-material/${s.id}`),"aria-label":"view",children:e.jsx(A,{})}),e.jsx(n,{variant:"h6",children:s.title||"Untitled"})]}),e.jsxs(l,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsxs(n,{variant:"body2",color:"textSecondary",children:["Created Date: ",s.timestamp.toDate().toLocaleString()]}),e.jsx(n,{variant:"body2",color:"textSecondary",children:"Status: Saved"})]}),e.jsx(l,{sx:{position:"absolute",top:8,right:8,display:"flex",gap:1},children:(i==null?void 0:i.isAdmin)&&e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>u(`/edit-material/${s.id}`),"aria-label":"edit",children:e.jsx(S,{})}),e.jsx(c,{onClick:()=>C(s.id),"aria-label":"delete",children:e.jsx(F,{})})]})}),e.jsx(l,{sx:{backgroundColor:"#E0F7FA",borderRadius:"8px",padding:"4px 8px",display:"inline-block",mt:2},children:e.jsx(n,{variant:"body2",sx:{color:"#00796B",fontWeight:"bold"},children:s.course||"N/A"})})]})},s.id))}),e.jsx(l,{sx:{backgroundColor:"#E3F2FD",borderRadius:"8px",padding:"4px 8px",display:"inline-block",mt:4,mb:2},children:e.jsx(n,{variant:"h6",sx:{fontWeight:"bold",color:"#0D47A1"},children:"Publish Scheduled"})}),e.jsx(p,{container:!0,spacing:3,children:P.length===0?e.jsx(n,{variant:"body1",align:"center",sx:{width:"100%"},children:"No materials scheduled for publishing found."}):P.map(s=>e.jsx(p,{item:!0,xs:12,sm:6,md:4,children:e.jsxs(l,{sx:{border:"1px solid #ddd",borderRadius:"8px",padding:2,position:"relative",backgroundColor:"#E3F2FD"},children:[e.jsx(l,{children:s.author===(i==null?void 0:i.uid)&&e.jsx(k,{label:"My Material",variant:"outlined",sx:{borderRadius:"15px",fontWeight:"bold",background:"#C5E1A5",color:"#2E7D32",ml:1}})}),e.jsxs(l,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(c,{onClick:()=>u(`/view-material/${s.id}`),"aria-label":"view",children:e.jsx(A,{})}),e.jsx(n,{variant:"h6",children:s.title||"Untitled"})]}),e.jsxs(l,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsxs(n,{variant:"body2",color:"textSecondary",children:["Created Date: ",s.timestamp.toDate().toLocaleString()]}),e.jsx(n,{variant:"body2",color:"textSecondary",children:"Status: Scheduled for Publishing"})]}),s.scheduledTimestamp&&e.jsx(l,{sx:{display:"flex",justifyContent:"center",mt:2},children:e.jsx(l,{sx:{backgroundColor:"#E3F2FD",border:"1px solid #90CAF9",borderRadius:"16px",padding:"4px 8px"},children:e.jsxs(n,{variant:"body2",sx:{color:"#0D47A1",fontWeight:"bold"},children:["Publish Date: ",s.scheduledTimestamp.toDate().toLocaleString()]})})}),e.jsx(l,{sx:{position:"absolute",top:8,right:8,display:"flex",gap:1},children:(i==null?void 0:i.isAdmin)&&e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>u(`/edit-material/${s.id}`),"aria-label":"edit",children:e.jsx(S,{})}),e.jsx(c,{onClick:()=>C(s.id),"aria-label":"delete",children:e.jsx(F,{})}),e.jsx(G,{materialId:s.id,onClick:N})]})}),e.jsx(l,{sx:{backgroundColor:"#E0F7FA",borderRadius:"8px",padding:"4px 8px",display:"inline-block",mt:2},children:e.jsx(n,{variant:"body2",sx:{color:"#00796B",fontWeight:"bold"},children:s.course||"N/A"})})]})},s.id))})]}),e.jsx(l,{sx:{backgroundColor:"#E8F5E9",borderRadius:"8px",padding:"4px 8px",display:"inline-block",mt:4,mb:2},children:e.jsx(n,{variant:"h6",sx:{fontWeight:"bold",color:"#2E7D32"},children:"Published"})}),e.jsx(p,{container:!0,spacing:3,children:T.length===0?e.jsx(n,{variant:"body1",align:"center",sx:{width:"100%"},children:"No published materials found."}):T.map(s=>e.jsx(p,{item:!0,xs:12,sm:6,md:4,children:e.jsxs(l,{sx:{border:"1px solid #ddd",borderRadius:"8px",padding:2,position:"relative",backgroundColor:"#E8F5E9"},children:[e.jsx(l,{children:s.author===(i==null?void 0:i.uid)&&e.jsx(k,{label:"My Material",variant:"outlined",sx:{borderRadius:"15px",fontWeight:"bold",background:"#C5E1A5",color:"#2E7D32",ml:1}})}),e.jsxs(l,{sx:{display:"flex",alignItems:"center"},children:[e.jsx(c,{onClick:()=>u(`/view-material/${s.id}`),"aria-label":"view",children:e.jsx(A,{})}),e.jsx(n,{variant:"h6",sx:{flexGrow:1,maxWidth:"50%",wordWrap:"break-word"},children:s.title||"Untitled"})]}),e.jsxs(l,{sx:{display:"flex",justifyContent:"space-between"},children:[e.jsxs(n,{variant:"body2",color:"textSecondary",children:["Date: ",s.timestamp.toDate().toLocaleString()]}),e.jsx(n,{variant:"body2",color:"textSecondary",children:"Status: Published"})]}),e.jsx(l,{sx:{position:"absolute",top:8,right:8,display:"flex",gap:1},children:(i==null?void 0:i.isAdmin)&&e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:()=>u(`/edit-material/${s.id}`),"aria-label":"edit",children:e.jsx(S,{})}),e.jsx(c,{onClick:()=>C(s.id),"aria-label":"delete",children:e.jsx(F,{})}),e.jsx(G,{materialId:s.id,onClick:N})]})}),e.jsx(l,{sx:{backgroundColor:"#E0F7FA",borderRadius:"8px",padding:"4px 8px",display:"inline-block",mt:2},children:e.jsx(n,{variant:"body2",sx:{color:"#00796B",fontWeight:"bold"},children:s.course||"N/A"})})]})},s.id))}),m&&e.jsx(ce,{materialId:m,open:b,onClose:J,onDelete:K}),g.materialId&&e.jsx(xe,{materialId:g.materialId,open:g.open,onClose:X,onUnpublish:V}),I&&e.jsx(te,{open:!0,autoHideDuration:6e3,onClose:()=>f(null),children:e.jsx(re,{onClose:()=>f(null),severity:"error",children:I})})]})},je=()=>{const{userDetails:i}=E();return e.jsxs(l,{className:"supplemental-container",children:[e.jsx(de,{}),e.jsxs(l,{className:"supplemental-content",children:[(i==null?void 0:i.isAdmin)&&e.jsx(oe,{}),e.jsx(ue,{})]})]})};export{je as default};
