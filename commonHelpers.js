import{a as l,S as L,i as u}from"./assets/vendor-64b55ca9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}})();const d="https://pixabay.com/api/",p="42120259-494341598d0c2875f9db82d6d",m=15;class b{constructor(){}async getImages(r){const s={key:p,q:r,page:1,per_page:m},a=`${d}`;return l.get(a,{params:s}).then(t=>t.data)}async getMoreImages(r,s){s++;const a={key:p,q:r,page:s,per_page:m},t=`${d}`;return l.get(t,{params:a}).then(o=>o.data)}}const w={captionsData:"alt",captionDelay:250};let g=new L(".gallery-link",w);function M(e,r){const s=e.hits.map(a=>f(a)).join("");r.innerHTML=s,g.refresh()}function E(e,r){const s=e.hits.map(a=>f(a)).join("");r.insertAdjacentHTML("beforeend",s),g.refresh()}function v(){u.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function f(e){return`
        <div class="photo-container">
            <a class="gallery-link" href="${e.largeImageURL}" data-lightbox="image">
                <img src="${e.webformatURL}" alt="${e.tags}" class="photo" />
            </a>
            <div class="photo-body">
                <p class="photo-name">
                <span>Likes</span>
                <span>${e.likes}</span>
                </p>
                <p class="photo-name">
                <span>Views</span>
                <span>${e.views}</span>
              </p>
                <p class="photo-name">
                <span>Comments</span>
                <span>${e.comments}</span>
                </p>
                <p class="photo-name">
                <span>Downloads</span>
                <span>${e.downloads}</span>
                 </p>
            </div>
        </div>
    `}const n={formEl:document.querySelector(".js-search-form"),imgEl:document.querySelector(".js-image-container"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".loadmore-btn")};let c=1,y="";function P(){n.loader.classList.remove("hidden")}function I(){n.loader.classList.add("hidden")}n.formEl.addEventListener("submit",S);n.btnLoadMore.addEventListener("click",q);const h=new b;async function S(e){e.preventDefault(),P();const r=e.target.elements.text.value;y=r,c=1;try{const s=await h.getImages(r);if(M(s,n.imgEl),s.hits.length===0)throw new Error("No images found");n.btnLoadMore.style.display="block"}catch{v()}finally{I()}}async function q(){try{const e=await h.getMoreImages(y,c);E(e,n.imgEl),c++,e.hits.length<15&&(n.btnLoadMore.style.display="none",u.show({title:"",message:"We're sorry, but you've reached the end of search results.",color:"red",position:"topRight"}))}catch{n.btnLoadMore.style.display="block"}}
//# sourceMappingURL=commonHelpers.js.map
