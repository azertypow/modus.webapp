import{A as x,_ as w}from"./AppPage.1e07c389.js";import{g as j,r as t,h as C,u as L,A as S,c as B,b as y,i as o,a as s,t as I,o as T,p as U,f as k,_ as A}from"./entry.4a46c2ea.js";import"./precent.ee442d51.js";import"./AppTextContent.1cdf40fe.js";import"./apiDefinitions.1f9b7f06.js";function P(){const a=window.location.href;navigator.clipboard.writeText(a).then(()=>{console.log("URL copiée dans le presse-papiers avec succès!")}).catch(n=>{console.error("Échec lors de la copie de l'URL :",n)})}const z=a=>(U("data-v-145bf375"),a=a(),k(),a),E={class:"v-project-slug"},M={class:"v-project-slug__footer"},R={class:"app-button app-button--small"},D=z(()=>s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"currentColor",class:"bi bi-send",viewBox:"0 0 16 16"},[s("path",{d:"M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"})],-1)),N=j({__name:"[slug]",setup(a){const n=t(void 0),i=t(void 0),l=t(void 0),d=t(void 0),p=t(void 0),_=t(void 0),u=t(void 0),v=t(void 0);C(async()=>{var c,g,f,m;const r=(g=(c=L())==null?void 0:c.params)==null?void 0:g.slug;if(typeof r!="string")return;const e=await S(`projects/${r}`);n.value=(f=e.options.headerImage)==null?void 0:f.mediaUrl,i.value=(m=e==null?void 0:e.title)==null?void 0:m.value,l.value=e.options.headerTitle,d.value=e.body,p.value=e.options.category,_.value=e.options.dateStart,u.value=e.options.isProjectWithDuration,v.value=e.options.dateEnd});const h=t("copier le lien de cette page");function b(){P(),h.value="lien copier"}return(r,e)=>{const c=w;return T(),B("section",E,[y(x,{"header-cover":o(n),"title-content":o(l),"body-content":o(d),path:!0,"header-size":"small","header-text":o(i),category:o(p),date_start:o(_),is_project_with_duration:o(u),date_end:o(v)},null,8,["header-cover","title-content","body-content","header-text","category","date_start","is_project_with_duration","date_end"]),s("div",M,[s("div",{style:{display:"flex","justify-content":"center","flex-direction":"column","align-items":"center",gap:".5rem",cursor:"pointer"},onClick:b},[s("button",R,I(o(h)),1),D])]),y(c)])}}});const q=A(N,[["__scopeId","data-v-145bf375"]]);export{q as default};