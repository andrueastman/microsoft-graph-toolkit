"use strict";(self.webpackChunkreact_contoso=self.webpackChunkreact_contoso||[]).push([[837],{505:function(e,t,n){n.d(t,{m:function(){return l}});n(969);var r=n(7780),i=n(3583),a=n(7574),s=(0,r.Z)({divider:{alignItems:"self-start",paddingTop:"20px",marginBottom:"20px"}}),l=function(e){var t=s();return(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:e.title}),(0,a.jsx)("div",{children:e.description}),(0,a.jsx)(i.i,{className:t.divider})]})}},4837:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var r=n(6234),i=n(3028),a=n(969),s=n(505),l=n(3401),c=(0,n(7908).$)("search-results",l.GB),o=n(7574),d=function(e){return(0,o.jsx)(o.Fragment,{children:e.searchTerm&&(0,o.jsxs)(o.Fragment,{children:["*"!==e.searchTerm&&(0,o.jsx)(c,{entityTypes:["bookmark"],queryString:e.searchTerm,version:"beta",size:1,scopes:["Bookmark.Read.All"],children:(0,o.jsx)(u,{template:"no-data"})}),(0,o.jsx)(c,{entityTypes:["driveItem","listItem","site"],queryString:e.searchTerm,scopes:["Files.Read.All","Files.ReadWrite.All","Sites.Read.All"],fetchThumbnail:!0})]})})},u=function(e){return(0,o.jsx)(o.Fragment,{})},m=function(e){return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(c,{entityTypes:["people"],size:20,queryString:e.searchTerm,version:"beta"})})},h=n(7780),x=n(4220),p=n(8013),f=n(9191),j=n(2205),v=function(e){return(0,o.jsx)(o.Fragment,{children:e.searchTerm&&(0,o.jsx)(c,{entityTypes:["externalItem"],contentSources:["/external/connections/contosoBlogPosts"],queryString:e.searchTerm,scopes:["ExternalItem.Read.All"],version:"beta"})})},g=n(8079),T=n(7602),y=n(9251),w=n(2476),S=n(5607),C=n(9591),D=n(1654),I=n(4508),b=n(6816),R=n(2880),k=n(1901),F=n(7828),N=n(2277),Z=n(5908),L=n(4636),q=n(710),W=(0,h.Z)({container:(0,i.Z)((0,i.Z)({},x.q5.gap("16px")),{},{display:"flex",flexDirection:"row",flexWrap:"wrap"}),card:{width:"300px",height:"fit-content",maxWidth:"100%"},caption:{color:C.T.colorNeutralForeground3},noDataSearchTerm:{fontWeight:C.T.fontWeightSemibold},emptyContainer:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"calc(100vh - 300px)"},fileContainer:{display:"flex"},fileTitle:{paddingLeft:"10px",alignSelf:"center"},noDataMessage:{paddingLeft:"10px"},noDataIcon:{fontSize:"128px"},row:{cursor:"pointer"}}),A=function(e){return(0,o.jsx)(o.Fragment,{children:e.searchTerm&&(0,o.jsxs)(c,{entityTypes:["driveItem"],queryString:e.searchTerm,fetchThumbnail:!0,queryTemplate:"({searchTerms}) ContentTypeId:0x0101*",version:"beta",fields:["createdBy","lastModifiedDateTime","Title","DefaultEncodingURL"],size:30,cacheEnabled:!0,children:[(0,o.jsx)(B,{template:"default"}),(0,o.jsx)(B,{template:"loading"}),(0,o.jsx)(z,{template:"no-data"})]})})},M=function(e,t){return[(0,D.p)({columnId:"name",renderHeaderCell:function(){return"Name"},renderCell:function(n){return(0,o.jsx)(I.K,{children:e?(0,o.jsx)(b.j,{shape:"rectangle",style:{width:"120px"}}):(0,o.jsxs)("div",{className:t.fileContainer,children:[(0,o.jsx)(T.$,{fileDetails:n.resource,view:y.b.image}),(0,o.jsx)("span",{className:t.fileTitle,children:n.resource.listItem.fields.title})]})})}}),(0,D.p)({columnId:"modified",renderHeaderCell:function(){return"Modified"},renderCell:function(t){return(0,o.jsx)(I.K,{children:e?(0,o.jsx)(b.j,{shape:"rectangle",style:{width:"120px"}}):E(new Date(t.resource.lastModifiedDateTime))})}}),(0,D.p)({columnId:"owner",renderHeaderCell:function(){return"Owner"},renderCell:function(t){return(0,o.jsx)(I.K,{children:e?(0,o.jsxs)("div",{style:{display:"grid",alignItems:"center",position:"relative",gridTemplateColumns:"min-content 80%",gap:"10px"},children:[(0,o.jsx)(b.j,{shape:"circle",size:32}),(0,o.jsx)(b.j,{style:{width:"120px"}})]}):(0,o.jsx)(w.F,{personQuery:t.resource.createdBy.user.email,view:y.b.oneline,personCardInteraction:S.c.hover})})}})]},B=function(e){var t,n,i,s=W(),l=a.useState(null===(t=e.dataContext.value)||void 0===t||null===(n=t[0])||void 0===n||null===(i=n.hitsContainers[0])||void 0===i?void 0:i.hits),c=(0,r.Z)(l,1)[0];return(0,o.jsx)("div",{children:(0,o.jsxs)(R._,{columns:M("loading"===e.template,s),items:"loading"===e.template?(0,g.Z)(Array(30)):c,children:[(0,o.jsx)(k.S,{children:(0,o.jsx)(F.m,{children:function(e){var t=e.renderHeaderCell;return(0,o.jsx)(N.p,{children:t()})}})}),(0,o.jsx)(Z.s,{children:function(e){var t=e.item,n=e.rowId;return(0,o.jsx)(F.m,{className:s.row,onClick:function(){return function(e){var t=new URL(e.resource.listItem.fields.defaultEncodingURL);t.searchParams.append("Web","1"),window.open(t.toString(),"_blank")}(t)},children:function(e){var n=e.renderCell;return(0,o.jsx)(L.a,{children:n(t)})}},n)}})]})})},z=function(e){var t,n=W(),i=a.useState(null===(t=e.dataContext.value[0])||void 0===t?void 0:t.searchTerms),s=(0,r.Z)(i,1)[0];return(0,o.jsxs)("div",{className:n.emptyContainer,children:[(0,o.jsx)("div",{children:(0,o.jsx)(q.vRj,{className:n.noDataIcon})}),(0,o.jsxs)("div",{className:n.noDataMessage,children:["We couldn't find any results for ",(0,o.jsx)("span",{className:n.noDataSearchTerm,children:s.join(" ")})]})]})},E=function(e){var t=new Date,n=new Date(t.getFullYear(),t.getMonth(),t.getDate());if(e>=n)return e.toLocaleString("default",{hour:"numeric",minute:"numeric"});var r=new Date(n);if(r.setDate(t.getDate()-t.getDay()),e>=r)return e.toLocaleString("default",{hour:"numeric",minute:"numeric",weekday:"short"});var i=new Date(r);return i.setDate(r.getDate()-7),e>=i?e.toLocaleString("default",{day:"numeric",month:"numeric",weekday:"short"}):e.toLocaleString("default",{day:"numeric",month:"numeric",year:"numeric"})},O=(0,h.Z)({panels:(0,i.Z)({},x.q5.padding("10px")),container:{maxWidth:"1028px",width:"100%"}}),U=function(){var e=O(),t=(0,j.b)(),n=a.useState(new URLSearchParams(window.location.search).get("q")),i=(0,r.Z)(n,1)[0],l=a.useState("allResults"),c=(0,r.Z)(l,2),u=c[0],h=c[1];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.m,{title:"Search",description:"Use this Search Center to test Microsot Graph Toolkit search components capabilities"}),(0,o.jsxs)("div",{className:e.container,children:[(0,o.jsxs)(p.t,{selectedValue:u,onTabSelect:function(e,t){h(t.value)},children:[(0,o.jsx)(f.O,{value:"allResults",children:"All Results"}),(0,o.jsx)(f.O,{value:"driveItems",children:"Files"}),(0,o.jsx)(f.O,{value:"externalItems",children:"External Items"}),(0,o.jsx)(f.O,{value:"people",children:"People"})]}),(0,o.jsxs)("div",{className:e.panels,children:["allResults"===u&&(0,o.jsx)(d,{searchTerm:null!==i&&void 0!==i?i:t.state.searchTerm}),"driveItems"===u&&(0,o.jsx)(A,{searchTerm:null!==i&&void 0!==i?i:t.state.searchTerm}),"externalItems"===u&&(0,o.jsx)(v,{searchTerm:null!==i&&void 0!==i?i:t.state.searchTerm}),"people"===u&&(0,o.jsx)(m,{searchTerm:null!==i&&void 0!==i?i:t.state.searchTerm})]})]})]})}},7602:function(e,t,n){n.d(t,{$:function(){return i}});var r=n(3401),i=(0,n(7908).$)("file",r.Rs)}}]);
//# sourceMappingURL=837.cb604244.chunk.js.map