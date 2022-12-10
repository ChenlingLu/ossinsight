"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6892],{8940:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var a=n(67294),l=n(88242),r=n(87462),o=n(6971);var i=n(81284),c=n(61702),s=n(58402),m=n(26432),d=n(21309),u=n(67836),p=n(9041),h=n(22152),g=n(58175),y=n(85893);const E=(0,g.Z)((0,y.jsx)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search"),v=e=>a.createElement(s.Z,(0,r.Z)({},e,{placement:"bottom-start"})),Z=e=>{let{value:t,onChange:n}=e;const[l,s]=(0,a.useState)(""),g=(0,h.K)(l,500),{data:y,loading:Z}=function(e){const{data:t,loading:n,error:a}=(0,o.WV)("company-search",{keyword:e},!1,!!e);return{data:(null==t?void 0:t.data)??[],loading:n,error:a}}(g),b=(0,m.Z)(((e,t)=>{n(t)})),k=(0,m.Z)((e=>{s(e.target.value)}));return a.createElement(d.Z,{value:t,onChange:b,id:"combo-box-demo",loading:Z,options:y??[],fullWidth:!0,openOnFocus:!0,getOptionLabel:e=>e.name,renderOption:(e,t,n)=>a.createElement(i.ZP,(0,r.Z)({},e,{selected:n.selected}),a.createElement(c.Z,{primary:t.name,secondary:`${t.total} Developers`})),renderInput:e=>{let{InputProps:t,...n}=e;return a.createElement(u.Z,(0,r.Z)({},n,{sx:{backgroundColor:"white",borderRadius:2},onChange:k,InputProps:{...t,startAdornment:a.createElement(p.Z,{position:"start"},a.createElement(E,{htmlColor:"#333"})),placeholder:"Search by company name",sx:{color:"#333","::placeholder":{color:"#dfdfdf"},borderRadius:2}}}))},PopperComponent:v})};var b=n(61802),k=n(90244),f=n(93978),w=n(69417),C=n(5605),x=n(39807),R=n(91655);const I=[{key:"contributions",title:"Total Contributions"},{key:"repo_name",title:"Repository"},{key:"pushes",title:"Pushes",align:"right"},{key:"pull_requests",title:"PRs",align:"right"},{key:"reviews",title:"PR Reviews",align:"right"},{key:"review_comments",title:"PR Review Comments",align:"right"},{key:"issues",title:"Issues",align:"right"},{key:"issue_comments",title:"Issue Comments",align:"right"}],P=e=>{let{data:t,loading:n}=e;return a.createElement(k.Z,{className:"clearTable"},a.createElement(f.Z,null,a.createElement(w.Z,null,a.createElement(C.Z,{variant:"head"},"Rank"),I.map((e=>a.createElement(C.Z,{key:e.key,align:e.align},e.title))))),a.createElement(x.Z,{sx:e=>({".MuiTableRow-root:nth-of-type(odd)":{backgroundColor:e.palette.action.hover}})},n?W():S(t)))},S=e=>e.map(((e,t)=>a.createElement(w.Z,{key:e.repo_id},a.createElement(C.Z,{component:"th"},"#",t+1),I.map((t=>a.createElement(C.Z,{key:t.key,align:t.align},e[t.key])))))),W=()=>[0,1,2,3,4,5].map(((e,t)=>a.createElement(w.Z,{key:e},a.createElement(C.Z,{component:"th"},a.createElement(R.Z,{sx:{display:"inline-block"}})),I.map((e=>a.createElement(C.Z,{key:e.key,align:e.align},a.createElement(R.Z,{sx:{display:"inline-block",width:"100%"}}))))))),_=e=>{let{company:t}=e;const{data:n,loading:l}=(r=null==t?void 0:t.name,(0,o.WV)("company-contribution-repos-rank",{companyName:r},!1,!!r));var r;return(0,b.Rw)(t)?a.createElement(a.Fragment,null):a.createElement(a.Fragment,null,a.createElement(P,{data:(null==n?void 0:n.data)??[],loading:l}))};var q=n(36336),F=n(29630);const L=()=>{const[e,t]=(0,a.useState)(null);return a.createElement(l.Z,null,a.createElement(q.Z,{maxWidth:"lg",sx:{py:8}},a.createElement(F.Z,{variant:"h1",align:"center"},"\ud83c\udfdb\ufe0f  Company Analytics [Beta]"),a.createElement(F.Z,{variant:"body1",align:"center",mt:2,mb:6},"Contribution analytics of developers within the same company"),a.createElement(Z,{value:e,onChange:t}),a.createElement(F.Z,{variant:"body2",align:"center",mt:2,mb:6},"Hints: Only the statistics of the members who have the data of [company name] was recorded and the result may include all events in both previous/current company. Contributions include pushes, pull requests, pull request reviews, pull request review comments, issues and issue comments."),a.createElement(_,{company:e})))}},88242:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(87462),l=n(52859),r=n(67294),o=n(61802),i=n(61953);function c(e){let{children:t,header:n,dark:c,sideWidth:s,Side:m,footer:d=!0,...u}=e;return(0,r.useLayoutEffect)((()=>{var e;const t=location.hash.replace(/^#/,"");null==(e=document.getElementById(t))||e.scrollIntoView()}),[]),r.createElement(l.Z,(0,a.Z)({},u,{customFooter:d,header:n,sideWidth:s,side:s&&(0,o.nf)(m)?r.createElement(i.Z,{component:"aside",width:s,position:"sticky",top:"calc(var(--ifm-navbar-height) + 76px)",height:0,zIndex:0},r.createElement(i.Z,{marginTop:"-76px",height:"calc(100vh - var(--ifm-navbar-height))"},r.createElement(m,null))):void 0}),r.createElement("div",{hidden:!0,style:{height:72}}),r.createElement("div",{style:{paddingLeft:s,paddingRight:s}},r.createElement("main",{style:{"--ifm-container-width-xl":"1200px"}},t)))}}}]);