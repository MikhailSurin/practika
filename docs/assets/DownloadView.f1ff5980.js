import{_ as c,T as i,b as p,r as s,o as n,c as r,a as o,f as g,e as h,h as w,i as u,k as m}from"./index.37a62351.js";const k="/assets/phone.ef0014df.png";const y={name:"EndPageView",components:{TheBurgerModal:i,AppCompanyInfo:p},data(){return{showModal:!1}},methods:{burgerButtonClickHandler(){this.showModal=!this.showModal,document.body.classList.toggle("lock")},closeModalEventHandler(){this.showModal=!this.showModal,document.body.classList.toggle("lock")}}},f={class:"download-page"},b={class:"download-page__header"},v=o("h1",{class:"download-page__heading visually-hidden"},"Download application",-1),M=o("img",{class:"download-page__logo",src:u,alt:"practico",width:"75",height:"15"},null,-1),C=o("span",{class:"download-page__button-text visually-hidden"}," show menu ",-1),x=[C],B={class:"download-page__main-content"},V=m('<p class="download-page__main-text"> Download Practico now<br> to begin your journey </p><img class="download-page__phone" src="'+k+'" alt="Practico application" width="250" height="505"><div class="download-page__links-wrapper"><ul class="download-page__links-list"><li class="download-page__links-item"><a class="download-page__store-link" href="#"><span class="download-page__link-text visually-hidden">Download on the App Store</span></a></li><li class="download-page__links-item"><a class="download-page__play-link" href="#"><span class="download-page__link-text visually-hidden">Get it on Google Play</span></a></li></ul></div>',3);function E(D,e,H,N,l,a){const t=s("the-burger-modal"),d=s("app-company-info");return n(),r("div",f,[o("header",b,[v,M,o("button",{class:"download-page__burger-button",onClick:e[0]||(e[0]=(..._)=>a.burgerButtonClickHandler&&a.burgerButtonClickHandler(..._))},x),l.showModal?(n(),g(t,{key:0,class:"download-page__burger-modal",onCloseModalEvent:a.closeModalEventHandler},null,8,["onCloseModalEvent"])):h("",!0)]),o("main",B,[V,w(d,{class:"download-page__company-info"})])])}const A=c(y,[["render",E]]);export{A as default};
