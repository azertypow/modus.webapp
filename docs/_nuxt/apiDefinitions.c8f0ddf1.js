import{g as _,o,c as s,a as t,m as u,_ as p,r as l,h as m,n as v,i as c,L as d,t as g,v as y,K as h,w as f,d as b,e as k,p as w,f as x}from"./entry.0f5df825.js";const A=["innerHTML"],L=_({__name:"AppTextContent",props:{text:{},variant:{default:"regular"}},setup(a){return(e,n)=>(o(),s("section",{class:u(["v-app-text-content",e.variant])},[t("div",{class:"v-app-text-content__text-container child-remove-margin",innerHTML:e.text},null,8,A)],2))}});const E=p(L,[["__scopeId","data-v-235c6d25"]]),T=["src"],I={key:1,class:"v-app-video__cookie-msg"},V=_({__name:"AppVideo",props:{video_id:{},video_caption:{}},setup(a){const e=l(null),n=l(!1);return m(()=>{v(()=>{e.value&&(e.value.src="")})}),(r,i)=>(o(),s("div",{class:u(["v-app-video",{"show-video":c(n)}])},[c(d)().value?(o(),s("iframe",{key:0,width:"560",height:"315",src:`https://www.youtube-nocookie.com/embed/${r.video_id}?si=SAxUi0YavSnxZa-b&controls=0`,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,8,T)):(o(),s("div",I,[t("button",{onClick:i[0]||(i[0]=U=>c(d)().value=!0),style:{"max-width":"none"}},"Accepter les cookies")]))],2))}});const F=p(V,[["__scopeId","data-v-815f7eb2"]]),$=a=>(w("data-v-5e76e59f"),a=a(),x(),a),j={class:"v-app-actuality"},C=$(()=>t("div",{class:"v-app-actuality__title child-remove-margin"},[t("h4",null,"Actualités")],-1)),M={class:"v-app-actuality__img"},S=["src"],B={class:"v-app-actuality__content"},P={class:"v-app-actuality__content__title"},H=["innerHTML"],q={class:"v-app-actuality__content__bottom"},D=["href"],N=_({__name:"AppActuality",props:{src:{},title:{},description:{},url:{}},setup(a){return(e,n)=>{var i;const r=k;return o(),s("section",j,[C,t("div",M,[t("img",{alt:"image du project",src:e.src?(i=e.src.resize)==null?void 0:i.reg:"images/8.jpg",class:"v-app-actuality__img__img"},null,8,S)]),t("div",B,[t("h4",P,g(e.title),1),e.description?(o(),s("div",{key:0,class:"v-app-actuality__content__desc child-remove-margin",innerHTML:e.description},null,8,H)):y("",!0),t("div",q,[e.url?(o(),s("a",{key:0,class:"app-button app-button--small",href:e.url,target:"_blank"},"-> Découvrir",8,D)):(o(),h(r,{key:1,class:"app-button app-button--small",href:"/projects"},{default:f(()=>[b("-> Découvrir des projets")]),_:1}))])])])}}});const K=p(N,[["__scopeId","data-v-5e76e59f"]]),Z={imaginary:"La Fabrique des Imaginaires",laboratory:"Le Laboratoire",library:"La Bibliothèque",platform:"La Plateforme",planting:"La Plantation"},z=(()=>["platform","laboratory","library","imaginary","planting"])(),G=a=>z.includes(a),J={library:"img_bibliotheque.svg",imaginary:"img_imaginaires.svg",laboratory:"img_laboratoire.svg",planting:"img_plantation.svg",platform:"img_plateforme.svg"};export{F as A,E as _,K as a,Z as b,J as c,G as i};