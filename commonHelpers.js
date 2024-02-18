import{a as l,S as h,i as L}from"./assets/vendor-64b55ca9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const d="https://pixabay.com/api/",m="42120259-494341598d0c2875f9db82d6d",u=15;class b{constructor(){}async getImages(r){const o={key:m,q:r,page:1,per_page:u},s=`${d}`;return l.get(s,{params:o}).then(t=>t.data)}async getMoreImages(r,o){o++;const s={key:m,q:r,page:o,per_page:u},t=`${d}`;return l.get(t,{params:s}).then(a=>a.data)}}const M={captionsData:"alt",captionDelay:250};let p=new h(".gallery-link",M);function w(e,r){const o=e.hits.map(s=>g(s)).join("");r.innerHTML=o,p.refresh()}function E(e,r){const o=e.hits.map(s=>g(s)).join("");r.insertAdjacentHTML("beforeend",o),p.refresh()}function v(){L.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function g(e){return`
        <div class="photo-container">
            <a class="gallery-link" href="${e.largeImageURL}" data-lightbox="image">
                <img src="${e.webformatURL}" alt="${e.tags}" class="photo" />
            </a>
            <div class="photo-body">
                <p class="photo-name">Likes ${e.likes}</p>
                <p class="photo-name">Views ${e.views}</p>
                <p class="photo-name">Comments ${e.comments}</p>
                <p class="photo-name">Downloads ${e.downloads}</p>
            </div>
        </div>
    `}const n={formEl:document.querySelector(".js-search-form"),imgEl:document.querySelector(".js-image-container"),loader:document.querySelector(".loader"),btnLoadMore:document.querySelector(".loadmore-btn")};let c=1,f="";function P(){n.loader.classList.remove("hidden")}function I(){n.loader.classList.add("hidden")}n.formEl.addEventListener("submit",S);n.btnLoadMore.addEventListener("click",q);const y=new b;async function S(e){e.preventDefault(),P();const r=e.target.elements.text.value;f=r,c=1;try{const o=await y.getImages(r);if(w(o,n.imgEl),o.hits.length===0)throw new Error("No images found");n.btnLoadMore.style.display="block"}catch{v()}finally{I()}}async function q(){try{const e=await y.getMoreImages(f,c);E(e,n.imgEl),c++,e.hits.length<15&&(n.btnLoadMore.style.display="none")}catch{n.btnLoadMore.style.display="block"}}
//# sourceMappingURL=commonHelpers.js.map
